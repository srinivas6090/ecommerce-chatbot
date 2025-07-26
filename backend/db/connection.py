import os
from pathlib import Path
from dotenv import load_dotenv
from pymongo import MongoClient

# DEBUG: Print where we're loading the .env from
env_path = Path(__file__).resolve().parents[2] / ".env"
print("Looking for .env at:", env_path)

# Load environment variables
load_dotenv(dotenv_path=env_path)

# DEBUG: Print values
MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")
print("MONGO_URI:", MONGO_URI)
print("DB_NAME:", DB_NAME)

# Connect
client = MongoClient(MONGO_URI)
db = client[DB_NAME]
