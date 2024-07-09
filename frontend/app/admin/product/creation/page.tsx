"use client";
import React from "react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <div className="flex justify-center min-h-screen p-16 lg:p-24">
      <main className="w-4/5 max-w-[1500px] flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold pb-6">Add Product</h1>
        <form className="space-y-4 border border-gray-400 p-4 md:p-6">
          <div>
            <label className="block mb-1 font-medium" htmlFor="images">
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              multiple
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="category">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="w-full p-2 border border-gray-400 rounded"
              required
            >
              <option value="">Select a category</option>
              <option value="electronics">Electronics</option>
              <option value="clothing">Clothing</option>
              <option value="home">Home</option>
              <option value="shoe">Shoe</option>
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="brand">
              Brand
            </label>
            <input
              type="text"
              id="brand"
              name="brand"
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
          </div>

          <div className="flex flex-row space-x-4">
            <div className="w-1/2">
              <label className="block mb-1 font-medium" htmlFor="price">
                Price
              </label>
              <input
                type="number"
                id="price"
                name="price"
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
            </div>
            <div className="w-1/2">
              <label className="block mb-1 font-medium" htmlFor="quantity">
                Quantity
              </label>
              <input
                type="number"
                id="quantity"
                name="quantity"
                className="w-full p-2 border border-gray-400 rounded"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="description">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              className="w-full p-2 border border-gray-400 rounded"
              required
            />
          </div>
          <div className="flex justify-center">
            <Button className="w-full md:w-1/2">Create</Button>
          </div>
        </form>
      </main>
    </div>
  );
}
