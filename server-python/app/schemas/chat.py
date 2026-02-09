from pydantic import BaseModel
from typing import Optional

class ChatRequest(BaseModel):
    message: str


class KnowledgeRequest(BaseModel):
    title: Optional[str] = ""
    content: str
