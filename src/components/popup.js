'use client'

import { useState } from "react";
import { IoMdChatbubbles } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";



const Popup = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 bg-black text-white p-4 rounded-full shadow-2xl hover:bg-blue-600 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95"
      >
        {isOpen ? <IoCloseSharp size={35} /> : <IoMdChatbubbles size={35} />}
      </button>

      {/* Popup */}
      <div
        className={`fixed bottom-28 right-6 w-90 bg-white p-8 rounded-xl shadow-lg z-40 transition-all duration-900 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Company Info */}
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          📧 Email:{" "}
          <a href="mailto:hello@yashikyadav.com" className="text-blue-700">
            hello@yashikyadav.com
          </a>
          <br />
          🌐 Website:{" "}
          <a
            href="https://example.com"
            target="_blank"
            className="text-blue-700"
          >
            example.com
          </a>
        </p>

        {/* Form */}
        <form className="mt-4 space-y-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border rounded px-3 py-2 text-sm"
          />
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Popup