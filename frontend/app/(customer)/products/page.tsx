import React from 'react';
import { getProducts } from '@/app/api/Product.Actions';

export default function page() {
  console.log('page');
  const products = getProducts();
  console.log('products', products);

  return <div>page</div>;
}
