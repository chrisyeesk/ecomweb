'use client';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import React from 'react';

export default function ShopNowButton() {
  const router = useRouter();
  const handleClickShopNow = () => {
    router.push('/products');
  };

  return (
    <Button
      onClick={() => handleClickShopNow()}
      className="hover:-translate-y-1 transition duration-300 ease-in-out transform hover:shadow-lg rounded-xl"
    >
      Shop Now
    </Button>
  );
}
