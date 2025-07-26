from fastapi import APIRouter
from backend.db.connection import db

router = APIRouter()

@router.get("/sessions/{user_id}")
def get_sessions(user_id: str):
    session_ids = db.messages.distinct("session_id", {"user_id": user_id})
    return [{"session_id": sid} for sid in session_ids]
