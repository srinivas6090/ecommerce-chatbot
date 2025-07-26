from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime
from backend.db.connection import db   # assuming this connects to MongoDB

router = APIRouter()

class ChatRequest(BaseModel):
    user_id: str
    session_id: str
    message: str

@router.post("/chat/")
async def chat(request: ChatRequest):
    # Save user message
    user_msg = {
        "user_id": request.user_id,
        "session_id": request.session_id,
        "sender": "user",
        "text": request.message,
        "timestamp": datetime.utcnow()
    }
    db.messages.insert_one(user_msg)

    # Generate AI response (dummy for now)
    ai_response = f"Echo: {request.message}"
    ai_msg = {
        "user_id": request.user_id,
        "session_id": request.session_id,
        "sender": "ai",
        "text": ai_response,
        "timestamp": datetime.utcnow()
    }
    db.messages.insert_one(ai_msg)

    # Return all messages in that session
    session_msgs = list(db.messages.find({
        "user_id": request.user_id,
        "session_id": request.session_id
    }).sort("timestamp"))

    return [
        {
            "sender": msg["sender"],
            "text": msg["text"],
            "timestamp": msg["timestamp"]
        } for msg in session_msgs
    ]
