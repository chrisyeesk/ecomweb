from pydantic import BaseModel

class Product(BaseModel):
    name: str
    description: str
    price: str
    inventory: int
    pictures: list[str]
    sold: int
    ratings: float