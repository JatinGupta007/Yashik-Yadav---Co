/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f1f7f6] text-black px-4 md:px-16 py-12">
      {/* Top links */}
      <div className="flex flex-wrap justify-center md:justify-around gap-6 text-sm font-medium">
        {[
          "Email",
          "Instagram",
          "Twitter (X)",
          "LinkedIn",
          "Medium",
          "Spotify",
        ].map((item) => (
          <a
            href="#"
            key={item}
            className="flex items-center gap-1 hover:underline"
          >
            {item} <ArrowUpRight className="w-3 h-3" />
          </a>
        ))}
      </div>

      {/* Middle logo */}
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-start">
        <img
          src="/navlogo.svg"
          alt="Logo"
          className="w-400 h-100 object-contain mb-4 md:mb-0 md:mr-6"
        />
      </div>

      {/* Divider */}
      <hr className="border-t border-black mb-4" />

      {/* Bottom links */}
      <div className="flex flex-col md:flex-row justify-between items-center text-sm">
        <p>© 2025 Check Design Company. All Rights Reserved.</p>
        <div className="flex gap-6 mt-2 md:mt-0">
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
          <a href="#" className="hover:underline">
            Terms and conditions
          </a>
        </div>
      </div>  
    </footer>
  );
}
