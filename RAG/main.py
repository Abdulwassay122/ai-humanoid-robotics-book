from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from typing import Optional
import os
import requests
import xml.etree.ElementTree as ET
import trafilatura
from qdrant_client import QdrantClient
from qdrant_client.models import VectorParams, Distance, PointStruct
import cohere
from agents import Agent, Runner, OpenAIChatCompletionsModel, AsyncOpenAI
from agents import set_tracing_disabled, function_tool
from agents import enable_verbose_stdout_logging
from dotenv import load_dotenv
import logging
import asyncio
 
from models.chat import ChatRequest, ChatResponse, IngestionResponse

# Load environment variables
load_dotenv()

# Enable logging
enable_verbose_stdout_logging()
set_tracing_disabled(disabled=True)

# Initialize FastAPI app
app = FastAPI(
    title="RAG Chatbot API",
    description="API for RAG-powered chatbot for Docusaurus book",
    version="1.0.0"
)

# Add CORS middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # In production, replace with specific origins
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Configuration
SITEMAP_URL = "https://ai-humanoid-robotics-book-ruby.vercel.app/sitemap.xml"
COLLECTION_NAME = "humanoid_ai_book"

# Initialize Cohere client
cohere_api_key = os.getenv("COHERE_API_KEY", "g5QBUdX0Nhi3BrRrQBlR9IMcOMFqaSdPpriqRIpP")
cohere_client = cohere.Client(cohere_api_key)
EMBED_MODEL = "embed-english-v3.0"

# Connect to Qdrant Cloud
qdrant_url = os.getenv("QDRANT_URL", "https://b99dcf91-d316-409d-a226-8bb40b6dd022.europe-west3-0.gcp.cloud.qdrant.io:6333")
qdrant_api_key = os.getenv("QDRANT_API_KEY", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY2Nlc3MiOiJtIn0.as_nk54xfGQjad5-IrE1Ll7e7zF-xyxsilh102lyOX8")

qdrant = QdrantClient(
    url=qdrant_url,
    api_key=qdrant_api_key,
)

# Initialize Gemini client
gemini_api_key = os.getenv("GEMINI_API_KEY")
provider = AsyncOpenAI(
    api_key=gemini_api_key,
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/"
)

model = OpenAIChatCompletionsModel(
    model="gemini-2.5-flash",
    openai_client=provider
)

def get_embedding(text):
    """Get embedding vector from Cohere Embed v3"""
    response = cohere_client.embed(
        model=EMBED_MODEL,
        input_type="search_query",  # Use search_query for queries
        texts=[text],
    )
    return response.embeddings[0]  # Return the first embedding


def retrieve_raw(query: str, limit: int = 5):
    embedding = get_embedding(query)
    result = qdrant.query_points(
        collection_name=COLLECTION_NAME,
        query=embedding,
        limit=limit
    )
    return [point.payload for point in result.points]

@function_tool
def retrieve(query: str, limit: int = 5):
    """Retrieve relevant documents from the vector database"""
    embedding = get_embedding(query)
    result = qdrant.query_points(
        collection_name=COLLECTION_NAME,
        query=embedding,
        limit=limit
    )
    return [point.payload for point in result.points]


# Create the agent
agent = Agent(
    name="Assistant",
    instructions="""
You are an AI tutor for the Physical AI & Humanoid Robotics textbook.
To answer the user question, first call the tool `retrieve` with the user query.
Use ONLY the returned content from `retrieve` to answer.
If the answer is not in the retrieved content, say "This information is not available in the book."
Always cite the source URLs from the retrieved content.
""",
    model=model,
    tools=[retrieve]
)


def get_all_urls(sitemap_url: str):
    """Extract URLs from sitemap"""
    xml = requests.get(sitemap_url).text
    root = ET.fromstring(xml)

    urls = []
    for child in root:
        loc_tag = child.find("{http://www.sitemaps.org/schemas/sitemap/0.9}loc")
        if loc_tag is not None:
            urls.append(loc_tag.text)

    return urls


def extract_text_from_url(url: str):
    """Download page and extract text"""
    html = requests.get(url).text
    text = trafilatura.extract(html)

    if not text:
        logging.warning(f"No text extracted from: {url}")

    return text


def chunk_text(text: str, max_chars: int = 1200):
    """Chunk text into segments of max_chars"""
    chunks = []
    while len(text) > max_chars:
        split_pos = text[:max_chars].rfind(". ")
        if split_pos == -1:
            split_pos = max_chars
        chunks.append(text[:split_pos])
        text = text[split_pos:]
    chunks.append(text)
    return chunks


def create_collection():
    """Create Qdrant collection"""
    logging.info("Creating Qdrant collection...")
    qdrant.recreate_collection(
        collection_name=COLLECTION_NAME,
        vectors_config=VectorParams(
            size=1024,        # Cohere embed-english-v3.0 dimension
            distance=Distance.COSINE
        )
    )


def save_chunk_to_qdrant(chunk: str, chunk_id: int, url: str):
    """Save a text chunk to Qdrant"""
    vector = get_embedding(chunk)

    qdrant.upsert(
        collection_name=COLLECTION_NAME,
        points=[
            PointStruct(
                id=chunk_id,
                vector=vector,
                payload={
                    "url": url,
                    "text": chunk,
                    "chunk_id": chunk_id
                }
            )
        ]
    )


@app.get("/")
def read_root():
    return {"message": "RAG Chatbot API is running"}


@app.post("/chat", response_model=ChatResponse)
async def chat_endpoint(chat_request: ChatRequest):
    """Endpoint to handle chat requests"""
    try:
        # If selected_text is provided, use it as context
        query = chat_request.query
        if chat_request.selected_text:
            query = f"Based on this text: '{chat_request.selected_text}', {chat_request.query}"

        # Run the agent with the query
        result = await asyncio.to_thread(
            Runner.run_sync,
            agent,
            input=query
        )

        # Extract supporting passages and source URLs from the retrieved data
        # For now, we'll return a simplified response
        # In a full implementation, we'd parse the agent's tool usage to get the retrieved content

        # For demonstration, let's manually retrieve content to show in response
        retrieved_data = retrieve_raw(query)
        supporting_passages = [item["text"] for item in retrieved_data]
        source_urls = list(set([item["url"] for item in retrieved_data]))  # Remove duplicates

        return ChatResponse(
            answer=result.final_output,
            supporting_passages=supporting_passages[:3],  # Limit to 3 passages
            source_urls=source_urls
        )
    except Exception as e:
        logging.error(f"Error in chat endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.post("/ingest", response_model=IngestionResponse)
async def ingest_endpoint():
    """Endpoint to trigger book content ingestion"""
    try:
        urls = get_all_urls(SITEMAP_URL)
        create_collection()

        global_id = 1

        for url in urls:
            print(f"\nProcessing: {url}")
            text = extract_text_from_url(url)

            if not text:
                continue

            chunks = chunk_text(text)

            for ch in chunks:
                save_chunk_to_qdrant(ch, global_id, url)
                print(f"Saved chunk {global_id}")
                global_id += 1

        print("\n✔️ Ingestion completed!")
        print(f"Total chunks stored: {global_id - 1}")

        return IngestionResponse(
            message="Ingestion completed successfully",
            total_chunks=global_id - 1
        )
    except Exception as e:
        logging.error(f"Error in ingestion endpoint: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))


@app.get("/health")
async def health_check():
    """Health check endpoint"""
    return {"status": "healthy"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)