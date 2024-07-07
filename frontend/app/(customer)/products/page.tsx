'use client';
import React, { useEffect, useState } from 'react';
import ProductCard from './components/product-card';
import axios from 'axios';
//import { getProducts } from '@/app/api/Product.Actions';
import { products } from './mock-data/data';
export default function ProductsPage() {
  // const products = getProducts();
  // console.log('products', products);

  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   const fetchProducts = async () => {
  //     try {
  //       const response = await axios('/api/getstripeproducts');
  //       // setProducts(response);
  //       console.log('stripeProducts', response);
  //     } catch (error) {
  //       console.error('Error fetching products:', error);
  //     }
  //   };

  //   fetchProducts();
  // }, []);

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:w-[1500px] w-[100vw] px-10 pt-20">
      {products.map((product) => (
        <ProductCard key={product?.id} product={product} />
      ))}
    </div>
  );
}
