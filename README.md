# RAG-Powered Chatbot for Docusaurus Book

This project implements a Retrieval-Augmented Generation (RAG) chatbot integrated into the AI-Humanoid-Robotics Docusaurus book.

## Architecture

The system consists of:
- **Backend**: FastAPI application with RAG capabilities using Cohere embeddings and Qdrant vector database
- **Frontend**: React chatbot component integrated into Docusaurus site
- **AI**: Google Gemini model orchestrated through the agents library

## Setup Instructions

### Backend Setup

1. Install Python dependencies:
```bash
cd RAG
pip install -r requirements.txt
```

2. Set up environment variables:
```bash
cp .env.example .env
# Edit .env with your API keys
```

3. Run the backend server:
```bash
cd RAG
python main.py
# or
uvicorn main:app --reload --port 8000
```

### Frontend Integration

The chatbot is automatically integrated into all Docusaurus pages via the Layout wrapper at `Docusauras-Book/src/theme/Layout/index.js`.

### Ingestion

To populate the vector database with book content:

1. Run the ingestion endpoint:
```bash
curl -X POST http://localhost:8000/ingest
```

Or run the ingestion directly from Python:
```bash
cd RAG
python -c "from main import ingest_endpoint; import asyncio; asyncio.run(ingest_endpoint())"
```

## API Endpoints

- `GET /` - Root endpoint
- `POST /chat` - Chat with the RAG bot
- `POST /ingest` - Ingest book content into vector database
- `GET /health` - Health check

## Chat Request Format

```json
{
  "query": "Your question here",
  "selected_text": "Optional selected text to provide context"
}
```

## Chat Response Format

```json
{
  "answer": "The AI's response",
  "supporting_passages": ["List of supporting text passages"],
  "source_urls": ["List of source URLs"]
}
```

## Environment Variables

- `COHERE_API_KEY` - Cohere API key for embeddings
- `QDRANT_URL` - Qdrant Cloud URL
- `QDRANT_API_KEY` - Qdrant Cloud API key
- `GEMINI_API_KEY` - Google Gemini API key

## Development

To run the Docusaurus site:

```bash
cd Docusauras-Book
npm install
npm run start
```

## Troubleshooting

1. If the chatbot doesn't appear on pages, ensure the backend server is running on `http://localhost:8000`
2. If ingestion fails, check your sitemap URL and API keys
3. For CORS issues, update the origins in the FastAPI CORS middleware