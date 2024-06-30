import { Instagram, Twitter } from 'lucide-react';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-9">
        {/* Stay in the Know Section */}
        <div className="space-y-4 col-span-2">
          <h2 className="text-2xl font-bold">Subscribe</h2>
          <p className="text-sm text-gray-600">
            Sign up to get first dibs on new launches, promos, 15% off your
            first purchase, and other news.
          </p>
          <form className="flex">
            <input
              type="email"
              placeholder="Enter Email"
              className="w-56 px-4 py-2 rounded-l-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-black"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-r-full font-semibold hover:bg-gray-800 transition duration-300"
            >
              SIGN UP
            </button>
          </form>
        </div>

        {/* About Us Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About Us</h3>
          <ul className="space-y-2 text-sm">
            <li>Our Story</li>
            <li>Reviews</li>
            <li>Military Discount</li>
            <li>The Playbook</li>
            <li>Teacher Discount</li>
            <li>Student Discount</li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
          <ul className="space-y-2 text-sm">
            <li>Need Help?</li>
            <li>Size Guide</li>
            <li>Shipping</li>
            <li>Accessibility</li>
            <li>Returns</li>
            <li>Gift Cards</li>
            <li>Refer A Friend</li>
          </ul>
        </div>
      </div>

      {/* Social Media and Legal */}
      <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
        <div className="flex space-x-4 mb-4 md:mb-0">
          <Instagram />
          <Twitter />
        </div>
        <div className="text-xs text-gray-500 space-x-4">
          <span>© 2024 All Rights Reserved.</span>
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms & Conditions
          </a>
          <button className="hover:underline">Your Privacy Choices</button>
          <a href="#" className="hover:underline">
            Data Privacy Portal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
