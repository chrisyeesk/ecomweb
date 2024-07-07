'use client';
import React from 'react';
import { products } from '../mock-data/data';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function ProductPage() {
  const { productId } = useParams();
  console.log('productId', productId);
  const product = products.find(
    (product) => product.id == parseInt(productId.toString())
  );
  return (
    <div className="px-10 pt-20 w-[100vw] 2xl:[1500px] flex justify-center">
      <Image
        width={1000}
        height={1000}
        src={product ? product.imageUrl[0] : ''}
        alt={product ? product.name : ''}
        className="w-3/5 max-h-[700px] bg-gray-100 rounded-md object-contain"
      ></Image>
      <div className="p-10 w-2/5">
        <div className="text-4xl mb-2 font-bold">{product ? product.name : ''}</div>
        <div className="text-2xl mb-5">$ {product ? product.price : ''}</div>
        <div className="mb-5">{product ? product.description : ''} </div>
        <Button className="hover:-translate-y-1 transition-transform duration-300 ease-in-out">Buy Now</Button>
      </div>
    </div>
  );
}
