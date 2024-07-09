"use client";
import React, { useState, useRef, ChangeEvent } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const MAX_IMAGES = 3;

interface ImagePreview {
  url: string;
  file: File;
}

export default function Page() {
  const [imagePreviews, setImagePreviews] = useState<ImagePreview[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const remainingSlots = MAX_IMAGES - imagePreviews.length;
    const selectedFiles = Array.from(files).slice(0, remainingSlots);

    const newPreviews = selectedFiles.map((file) => ({
      url: URL.createObjectURL(file),
      file,
    }));

    setImagePreviews((prev) => [...prev, ...newPreviews]);
  };

  const removeImagePreview = (index: number) => {
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex justify-center min-h-screen p-4 sm:p-8 md:p-16 lg:p-24">
      <main className="w-full max-w-[1500px] flex flex-col">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold pb-4 sm:pb-6">
          Add Product
        </h1>
        <form className="space-y-4 border border-gray-400 p-4 md:p-6 rounded-lg">
          {/* Image previews */}
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-4 border border-gray-400 rounded p-4">
            {[...Array(MAX_IMAGES)].map((_, index) => (
              <div key={index} className="relative aspect-[4/3]">
                {imagePreviews[index] ? (
                  <div className="relative w-full h-full">
                    <Image
                      src={imagePreviews[index].url}
                      alt={`Image Preview ${index + 1}`}
                      layout="fill"
                      objectFit="cover"
                      className="rounded"
                    />
                    <button
                      type="button"
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
                      onClick={() => removeImagePreview(index)}
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <Placeholder />
                )}
              </div>
            ))}
          </div>

          <div>
            <label className="block mb-1 font-medium" htmlFor="images">
              Upload Images
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*"
              onChange={handleImageChange}
              multiple
              className="w-full p-2 border border-gray-400 rounded"
              ref={fileInputRef}
              disabled={imagePreviews.length >= MAX_IMAGES}
            />
          </div>

          <TextInput label="Name" id="name" />
          <SelectInput
            label="Category"
            id="category"
            options={["Electronics", "Clothing", "Home", "Shoe"]}
          />
          <TextInput label="Brand" id="brand" />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput label="Price" id="price" type="number" />
            <TextInput label="Quantity" id="quantity" type="number" />
          </div>
          <TextInput label="Description" id="description" type="textarea" />

          <div className="flex justify-center">
            <Button className="w-full sm:w-2/3 md:w-1/2">Create</Button>
          </div>
        </form>
      </main>
    </div>
  );
}

function Placeholder() {
  return (
    <div className="h-full flex justify-center items-center border-dashed border-2 rounded">
      <span className="text-gray-400 text-sm sm:text-base">Add Image</span>
    </div>
  );
}

interface TextInputProps {
  label: string;
  id: string;
  type?: string;
}

function TextInput({ label, id, type = "text" }: TextInputProps) {
  return (
    <div>
      <label className="block mb-1 font-medium" htmlFor={id}>
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          name={id}
          className="w-full p-2 border border-gray-400 rounded"
          rows={4}
          required
        />
      ) : (
        <input
          type={type}
          id={id}
          name={id}
          className="w-full p-2 border border-gray-400 rounded"
          required
        />
      )}
    </div>
  );
}

interface SelectInputProps {
  label: string;
  id: string;
  options: string[];
}

function SelectInput({ label, id, options }: SelectInputProps) {
  return (
    <div>
      <label className="block mb-1 font-medium" htmlFor={id}>
        {label}
      </label>
      <select
        id={id}
        name={id}
        className="w-full p-2 border border-gray-400 rounded"
        required
      >
        <option value="">Select a category</option>
        {options.map((option) => (
          <option key={option.toLowerCase()} value={option.toLowerCase()}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}
