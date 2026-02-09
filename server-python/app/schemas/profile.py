from pydantic import BaseModel
from typing import Optional

class ProfileRequest(BaseModel):
    age: Optional[int] = None
    gender: Optional[str] = None
    height: Optional[float] = None
    weight: Optional[float] = None
    goal: Optional[str] = None
    daily_calories: Optional[int] = 2000
    daily_protein: Optional[int] = 100
