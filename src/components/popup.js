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
        className="fixed bottom-6 right-6 z-50 bg-[#f16333] text-white p-4 rounded-full shadow-2xl hover:bg-[#ff9140] transition"
      >
        {isOpen ? <IoCloseSharp size={35} /> : <IoMdChatbubbles size={35} />}
      </button>

      {/* Popup */}
      <div
        className={`fixed bottom-28 right-6 w-90 bg-white p-8 rounded-xl shadow-lg z-40 transition-all duration-300 ${
          isOpen
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0 pointer-events-none"
        }`}
      >
        {/* Company Info */}
        <h2 className="text-2xl font-semibold mb-2">Get in Touch</h2>
        <p className="text-lg text-gray-600">
          📧 Email:{" "}
          <a href="mailto:info@example.com" className="text-[#ff9140]">
            info@example.com
          </a>
          <br />
          🌐 Website:{" "}
          <a
            href="https://example.com"
            target="_blank"
            className="text-[#ff9140]"
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
            className="w-full bg-[#ff9140] text-white py-2 rounded hover:bg-[#f16333] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
}

export default Popup