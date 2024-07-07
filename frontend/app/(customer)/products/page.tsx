'use client';
import React from 'react';
import ProductCard from './components/product-card';
import { products } from './mock-data/data';
export default function ProductsPage() {


  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:w-[1500px] w-[100vw] px-10 pt-20">
      {products.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
}
