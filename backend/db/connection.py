from pymongo import MongoClient
from datetime import datetime
import os
from dotenv import load_dotenv

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")
DB_NAME = os.getenv("DB_NAME", "ecommerce_chatbot")

client = MongoClient(MONGO_URI)
db = client[DB_NAME]
messages_collection = db["messages"]

def save_message(user_id, session_id, message, sender):
    data = {
        "user_id": user_id,
        "session_id": session_id,
        "text": message,
        "sender": sender,
        "timestamp": datetime.utcnow()
    }
    messages_collection.insert_one(data)

def get_messages(session_id):
    messages = messages_collection.find({"session_id": session_id}).sort("timestamp", 1)
    return [
        {
            "text": msg["text"],
            "sender": msg["sender"],
            "timestamp": msg["timestamp"]
        }
        for msg in messages
    ]
