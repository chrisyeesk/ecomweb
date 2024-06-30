'use client';

import { Menu } from 'lucide-react';
import React from 'react';

export default function SideBar({
  setIsSideBarOpen,
}: {
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div className="fixed top-0 left-0 h-full w-52 bg-white shadow-md flex flex-col items-center py-4 space-y-6">
      <Menu
        onClick={() => setIsSideBarOpen(false)}
        className="mt-2 mb-4 hover:cursor-pointer flex sm:hidden w-6"
      />
      <div className="hover:cursor-pointer">Shop</div>
      <div className="hover:cursor-pointer">About</div>
    </div>
  );
}
