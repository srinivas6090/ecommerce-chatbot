import os
import requests
from fastapi import APIRouter
from pydantic import BaseModel
from datetime import datetime
from dotenv import load_dotenv
from backend.db.connection import db

load_dotenv()
router = APIRouter()

GROQ_API_KEY = os.getenv("GROQ_API_KEY")
GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

class ChatRequest(BaseModel):
    user_id: str
    session_id: str
    message: str

@router.post("/chat/")
async def chat(request: ChatRequest):
    # 1. Save user message
    user_msg = {
        "user_id": request.user_id,
        "session_id": request.session_id,
        "sender": "user",
        "text": request.message,
        "timestamp": datetime.utcnow()
    }
    db.messages.insert_one(user_msg)

    # 2. Get all previous session messages for context
    past_msgs = list(db.messages.find({
        "user_id": request.user_id,
        "session_id": request.session_id
    }).sort("timestamp"))

    messages = [{"role": "system", "content": (
        "You are a helpful e-commerce assistant. "
        "Ask clarifying questions if the user is vague. "
        "If the query is about a product or order, respond or ask backend to fetch info."
    )}]
    for msg in past_msgs:
        role = "user" if msg["sender"] == "user" else "assistant"
        messages.append({"role": role, "content": msg["text"]})

    # 3. Query LLM
    response = requests.post(
        GROQ_API_URL,
        headers={
            "Authorization": f"Bearer {GROQ_API_KEY}",
            "Content-Type": "application/json",
        },
        json={
            "model": "llama3-8b-8192",
            "messages": messages
        },
    )
    ai_text = response.json()["choices"][0]["message"]["content"]

    # 4. Optional: Simulate database query based on AI instruction
    if "fetch" in ai_text.lower() and "database" in ai_text.lower():
        # Example DB logic (customize as needed)
        product = db.products.find_one({"name": {"$regex": request.message, "$options": "i"}})
        if product:
            ai_text = f"Yes, we have {product['name']} in stock for ₹{product['price']}."
        else:
            ai_text = "Sorry, I couldn't find that product in our inventory."

    # 5. Save AI message
    ai_msg = {
        "user_id": request.user_id,
        "session_id": request.session_id,
        "sender": "ai",
        "text": ai_text,
        "timestamp": datetime.utcnow()
    }
    db.messages.insert_one(ai_msg)

    # 6. Return updated session
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
