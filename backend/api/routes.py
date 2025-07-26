from fastapi import APIRouter
from db.connection import db
from models.schemas import Product, Order

router = APIRouter()

@router.get("/products", response_model=list[Product])
def get_products():
    data = list(db.products.find({}, {"_id": 0}))
    return data

@router.get("/orders", response_model=list[Order])
def get_orders():
    data = list(db.orders.find({}, {"_id": 0}))
    return data
