'use client';
import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
export default function ProductCard({ product }: { product: any }) {
  const router = useRouter();
  const handleClickProduct = () => {
    router.push('/products/' + product.id);
  };
  return (
    <div
      onClick={handleClickProduct}
      className="hover:cursor-pointer hover:scale-105 transition-transform ease-in-out duration-300 border rounded-md border-gray-300"
    >
      <div className="bg-gray-300 justify-center flex">
        <Image
          width={1000}
          height={1000}
          className="w-60"
          alt={product.name}
          src={product.imageUrl[0]}
        ></Image>
      </div>
      <div className="p-2">
        <div className="">{product.name}</div>
        <div className="">$ {product.price}</div>
      </div>
    </div>
  );
}
