from pydantic import BaseModel
from typing import Optional, List
from datetime import datetime

# 1. Product Model
class Product(BaseModel):
    id: str
    cost: float
    category: str
    name: str
    brand: str
    retail_price: float
    department: str
    sku: str
    distribution_center_id: str

# 2. Order Model
class Order(BaseModel):
    order_id: str
    user_id: str
    status: str
    gender: str
    created_at: datetime
    returned_at: Optional[datetime] = None
    shipped_at: Optional[datetime] = None
    delivered_at: Optional[datetime] = None
    num_of_item: int

# 3. Order Item Model
class OrderItem(BaseModel):
    id: str
    order_id: str
    user_id: str
    product_id: str
    inventory_item_id: str
    status: str
    created_at: datetime
    shipped_at: Optional[datetime] = None
    delivered_at: Optional[datetime] = None
    returned_at: Optional[datetime] = None

# 4. Inventory Item Model
class InventoryItem(BaseModel):
    id: str
    product_id: str
    created_at: datetime
    sold_at: Optional[datetime] = None
    cost: float
    product_category: str
    product_name: str
    product_brand: str
    product_retail_price: float
    product_department: str
    product_sku: str
    product_distribution_center_id: str

# 5. Distribution Center Model
class DistributionCenter(BaseModel):
    id: str
    name: str
    latitude: float
    longitude: float

# 6. User Model
class User(BaseModel):
    id: str
    first_name: str
    last_name: str
    email: str
    age: int
    gender: str
    state: str
    street_address: str
    postal_code: str
    city: str
    country: str
    latitude: float
    longitude: float
    traffic_source: str
    created_at: datetime
