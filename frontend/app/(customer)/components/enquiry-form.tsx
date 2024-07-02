import { Button } from "@/components/ui/button";

export default function EnquiryForm() {
  return (
    <>
      <form className="space-y-4">
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
            required
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
    </>
  );
}
