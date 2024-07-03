"use client";
import { Button } from "@/components/ui/button";
import { submitEnquiry } from "@/app/api/Enquiry.Actions";
import { use, useState } from "react";

interface FormData {
  name: string;
  email: string;
  order_id: string;
  message: string;
}

export default function EnquiryForm() {
  const [visibility, setVisibility] = useState(true);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const values: FormData = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      order_id: formData.get("order_id") as string,
      message: formData.get("message") as string,
    };

    const response = await submitEnquiry(values);

    if (response) {
      setVisibility(false);
    }

    console.log(response);
  };

  return (
    <>
      {visibility && (
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block mb-1 font-medium" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="order_id">
              Order ID (Optional)
            </label>
            <input
              type="text"
              id="order_id"
              name="order_id"
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <Button
            type="submit"
            className="w-full bg-black text-white p-2 rounded hover:-translate-y-1"
          >
            Submit
          </Button>
        </form>
      )}
    </>
  );
}
