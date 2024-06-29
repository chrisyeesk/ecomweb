from fastapi import APIRouter, HTTPException
from models.products import Product
from config.database import collection_name
from schema.schemas import list_serial
from bson import ObjectId

router = APIRouter()

@router.get("/")
async def get_products():
    products = list_serial(collection_name.find())
    return products

@router.post("/")
async def create_product(product: Product):
    collection_name.insert_one(dict(product))

@router.put("/{id}")
async def put_product(id: str, product: Product):
    collection_name.find_one_and_update({"_id": ObjectId(id)},{"$set":dict(product)})

@router.delete("/{id}")
async def delete_product(id: str):
    collection_name.find_one_and_delete({"_id": ObjectId(id)})