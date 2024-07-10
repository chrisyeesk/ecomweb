"use client";
import React from 'react';
import Link from 'next/link';
import axios from 'axios';

export default async function page() {
  const fetchData = async () => {
    try {
      const response = await axios.get('/api/profile');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  return (
    <main className="min-h-screen pt-16 mx-auto w-[100vw] xl:w-[1500px]">
      <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <nav>
          <ul>
            <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Dashboard</a></li>
            <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Profile</a></li>
            <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Settings</a></li>
            <li className="py-2 px-4 hover:bg-gray-700"><a href="#">Logout</a></li>
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Link href="api/auth/logout">
        <button
          type="submit"
          className="bg-white text-red-600 rounded px-6 py-2 font-semibold hover:bg-red-600 hover:text-white  transition duration-300"
          > Log out
        </button>
        </Link>
        <button onClick={fetchData}>Fetch Protected Data</button>
      </main>
    </div>
    </main>
  );
}
