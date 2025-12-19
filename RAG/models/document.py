from pydantic import BaseModel
from typing import List, Optional


class DocumentChunk(BaseModel):
    id: int
    text: str
    url: str
    embedding: Optional[List[float]] = None
    metadata: Optional[dict] = None


class RetrievedDocument(BaseModel):
    text: str
    url: str
    score: float