from fastapi import APIRouter, Request
from backend.db.connection import save_message, get_messages

router = APIRouter(prefix="/chat")

@router.post("/")
async def chat_endpoint(request: Request):
    data = await request.json()
    session_id = data.get("session_id")
    user_msg = data.get("message")

    # Save user message
    save_message(session_id, "user", user_msg)

    # Dummy AI response
    ai_response = f"Echo: {user_msg}"
    save_message(session_id, "ai", ai_response)

    # Return full chat history
    history = get_messages(session_id)
    return history
