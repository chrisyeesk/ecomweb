"use client";
import React, { useState } from "react";

interface ImagePreviewProps {
  imageUrl: string;
  onRemove: () => void;
}

const ImagePreview: React.FC<ImagePreviewProps> = ({ imageUrl, onRemove }) => (
  <div className="relative w-32 h-32 bg-gray-200 rounded-lg overflow-hidden flex items-center justify-center">
    <img
      src={imageUrl}
      alt="Preview"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <button
      type="button"
      className="absolute top-0 right-0 m-2 p-1 bg-red-500 text-white rounded-full"
      onClick={onRemove}
    >
      X
    </button>
  </div>
);

export default function Page() {
  const [images, setImages] = useState<string[]>([]);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files!);

    const imageFiles = files.filter((file) => file.type.startsWith("image/"));

    const imageUrls = imageFiles.map((file) => URL.createObjectURL(file));

    setImages((prevImages) => [...prevImages, ...imageUrls]);

    setImagePreviews(imageUrls);
  };

  const handleImageRemove = (index: number) => {
    const updatedImages = [...images];
    updatedImages.splice(index, 1);
    setImages(updatedImages);

    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  return (
    <div className="flex justify-center min-h-screen p-16 lg:p-24">
      <main className="w-4/5 max-w-[1500px] flex flex-col">
        <h1 className="text-3xl md:text-4xl font-bold pb-6">Add Product</h1>

        {/* Image Preview Section */}
        <div className="space-y-4 border border-gray-400 p-4 md:p-6">
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Placeholder for Image Previews */}
            {imagePreviews.map((imageUrl, index) => (
              <ImagePreview
                key={index}
                imageUrl={imageUrl}
                onRemove={() => handleImageRemove(index)}
              />
            ))}
            {/* Upload Images Input */}
            <div className="cursor-pointer text-center p-4 border border-dashed border-gray-400 rounded-lg col-span-3 flex items-center justify-center bg-gray-200 rounded-lg overflow-hidden">
              <label htmlFor="images" className="cursor-pointer">
                <span className="text-gray-600">
                  Click or drag to upload images
                </span>
                <input
                  type="file"
                  id="images"
                  name="images"
                  accept="image/*"
                  multiple
                  className="hidden"
                  onChange={handleImageChange}
                  required
                />
              </label>
            </div>
          </div>

          {/* Other Form Fields */}
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
        </div>
      </main>
    </div>
  );
}
