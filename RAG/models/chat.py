from pydantic import BaseModel
from typing import List, Optional


class ChatRequest(BaseModel):
    query: str
    selected_text: Optional[str] = None
    history: Optional[List[dict]] = None


class ChatResponse(BaseModel):
    answer: str
    supporting_passages: List[str]
    source_urls: List[str]


class IngestionResponse(BaseModel):
    message: str
    total_chunks: int