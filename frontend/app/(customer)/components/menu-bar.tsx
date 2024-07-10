'use client';

import React, { useState } from 'react';
import { ChevronDown, CircleUserRound, Menu, ShoppingBag } from 'lucide-react';
import SearchProduct from './search-product';
import SideBar from './side-bar';
import { useUser } from '@auth0/nextjs-auth0/client';
import Link from 'next/link';

export default function MenuBar() {
  const {user, error, isLoading} = useUser();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const handleClickOpen = () => {
    {
      isSideBarOpen ? setIsSideBarOpen(false) : setIsSideBarOpen(true);
    }
  };

  return (
    <div className="flex bg-white bg-opacity-90 justify-between items-center shadow-sm w-full fixed h-16">
      <section className="flex ml-4 space-x-10">
        <Menu
          onClick={handleClickOpen}
          className="hover:cursor-pointer flex sm:hidden w-6"
        />
        <div className="font-bold text-xl">Your Next Store</div>
        <div className="hidden sm:flex">
          <p>Shop</p>
          <ChevronDown className="w-4" />
        </div>
        <div className="hidden sm:flex">
          <p>About</p>
          <ChevronDown className="w-4" />
        </div>
      </section>
      <section className="flex items-center mr-4 space-x-4">
        <SearchProduct className="hidden sm:flex" />
        <ShoppingBag className="w-10" />
        {
          user
          ? <Link href="/profile">
              <CircleUserRound />
            </Link>
          :  <Link href="/api/auth/login">
              <CircleUserRound />
            </Link>
        }
      </section>
      {isSideBarOpen && <SideBar setIsSideBarOpen={setIsSideBarOpen}/>}
    </div>
  );
}
