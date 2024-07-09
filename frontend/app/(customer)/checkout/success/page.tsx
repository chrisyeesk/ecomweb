"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Success() {
  const router = useRouter();
  const handleClick = () => {
    router.push("/");
  };

  return (
    <div className="flex justify-center items-center min-h-screen p-4 sm:p-6 lg:p-8">
      <main className="w-full max-w-[1500px] flex justify-center">
        <div className="p-6 md:p-10 flex flex-col text-center border border-gray-300">
          <svg
            className="w-12 h-12 text-green-500 border-2 border-green-500 rounded-full p-1 mx-auto mb-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 13l4 4L19 7"
            ></path>
          </svg>
          <h1 className="text-2xl md:text-3xl font-bold pb-6">
            Thank you for your order!
          </h1>
          <p className="text-lg md:text-xl pb-6">
            An email order confirmation will be sent to you shortly.
          </p>
          <Button
            onClick={handleClick}
            className="mx-auto w-full md:w-1/2 text-md md:text-lg hover:-translate-y-1"
          >
            Continue Shopping
          </Button>
        </div>
      </main>
    </div>
  );
}
