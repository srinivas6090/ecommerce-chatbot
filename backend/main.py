from fastapi import FastAPI
from backend.routes.chat import router as chat_router


app = FastAPI(title="E-commerce Chatbot Backend")

# Register chat routes
app.include_router(chat_router, prefix="/chat", tags=["Chat"])
