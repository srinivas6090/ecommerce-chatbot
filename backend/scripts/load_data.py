import sys
import os
sys.path.append(os.path.abspath(os.path.join(os.path.dirname(__file__), '..')))

import pandas as pd
from db.connection import db  # now directly from db

csv_collections = {
    "products.csv": "products",
    "orders.csv": "orders",
    "customers.csv": "customers"
}

data_path = os.path.join(os.path.dirname(__file__), "..", "data")

for file_name, collection_name in csv_collections.items():
    file_path = os.path.join(data_path, file_name)
    if os.path.exists(file_path):
        df = pd.read_csv(file_path)
        records = df.to_dict(orient="records")
        db[collection_name].delete_many({})
        db[collection_name].insert_many(records)
        print(f"Inserted {len(records)} records into '{collection_name}' collection.")
    else:
        print(f"{file_name} not found in data directory.")
