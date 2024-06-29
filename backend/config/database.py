from pymongo.mongo_client import MongoClient
from fastapi import FastAPI
import certifi

import os
from dotenv import load_dotenv, dotenv_values 
load_dotenv() 
 
app = FastAPI()
ca = certifi.where()
uri = os.getenv("MONGODB_URI")
# Create a new client and connect to the server
client = MongoClient(uri, tlsCAFile=ca)# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)

db = client.ecomweb_db

collection_name = db["product_collection"]