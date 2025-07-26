from fastapi import FastAPI
from api.routes import router

app = FastAPI(title="E-commerce Chatbot Backend")

app.include_router(router)
