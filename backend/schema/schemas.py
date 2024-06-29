def individual_serial(product) -> dict:
    return {
        "id": str(product["_id"]),
        "name": product["name"],
        "description": product["description"],
        "price": product["price"],
        "inventory": product["inventory"],
        "pictures": product["pictures"],
        "sold": product["sold"],
        "ratings": product["ratings"]
    }

def list_serial(products) -> list:
    return [individual_serial(product) for product in products]