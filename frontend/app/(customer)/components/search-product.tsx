'use client';
import React, { useState } from 'react';
import { Search } from 'lucide-react';

export default function SearchProduct({ className = '' }) {
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState('');

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchText(e.target.value);
  };
  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <section
      className={`flex h-10 bg-white bg-opacity-30 justify-between border rounded-md border-gray-300 ${className}`}
    >
      <textarea
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        value={searchText}
        className={`p-2 h-10 bg-transparent resize-none focus:outline-none focus:border-none ${
          isFocused ? 'text-black' : 'text-slate-500'
        }`}
        placeholder={isFocused ? '' : 'Search for Products...'}
      />
      <div className="flex items-center">
        <Search className="w-4 mr-2" />
      </div>
    </section>
  );
}
