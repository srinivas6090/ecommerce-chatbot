# E-commerce Chatbot
# 🛍️ E-Commerce Chatbot (Full-Stack AI Assistant)

This is a full-stack AI-powered chatbot application designed to assist users in an e-commerce setting. It features a FastAPI backend, a React + Tailwind CSS frontend, and MongoDB integration for chat history. The application is containerized with Docker for easy deployment.

---

## 🚀 Features

- 💬 Real-time AI Chat (LLM integrated using Groq)
- 🧠 Session-based conversation handling
- 🗂️ Chat history storage in MongoDB
- 🎨 Clean and responsive UI with React + Tailwind
- 🔌 REST API (FastAPI)
- 🐳 Dockerized frontend, backend, and MongoDB using Docker Compose

---

## 📁 Project Structure

```
ecommerce-chatbot/
│
├── backend/
│   ├── main.py
│   ├── api/
│   │   └── routes.py
│   ├── db/
│   │   └── connection.py
│   ├── Dockerfile
│   └── requirements.txt
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── components/
│   │   │   ├── Sidebar.jsx
│   │   │   └── Chatbox.jsx
│   ├── public/
│   │   └── index.html
│   ├── Dockerfile
│   └── tailwind.config.js
│
├── docker-compose.yml
├── .env
└── README.md
```

---

## 🛠️ Prerequisites

- Docker
- Docker Compose
- Node.js (for manual frontend dev mode)
- Python 3.10+ (for backend dev mode)

---

## ⚙️ Environment Variables

Create a `.env` file in the root:

```env
MONGO_URI=mongodb://mongo:27017
DB_NAME=ecommerce_chatbot
GROQ_API_KEY=your_actual_key_here
```

---

## 🐳 Run with Docker Compose

```bash
docker-compose up --build
```

Visit:
- Frontend: http://localhost:3000
- Backend API: http://localhost:8000/docs

---

## 👨‍💻 Development Mode

### 1. Backend

```bash
cd backend
uvicorn main:app --reload
```

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 📬 API Endpoint

**POST** `/chat/`

```json
{
  "user_id": "user123",
  "session_id": "abc123",
  "message": "Hi there"
}
```

---

## 📦 Technologies

- React + Vite + Tailwind CSS
- FastAPI + Pydantic
- MongoDB (via PyMongo)
- Groq LLM API
- Docker & Docker Compose

---

## 📄 License

MIT License © 2025 Gajula Mani Srinivas

---

## 🙌 Acknowledgements

- [Groq API](https://console.groq.com/)
- [FastAPI Docs](https://fastapi.tiangolo.com/)
- [MongoDB](https://www.mongodb.com/)