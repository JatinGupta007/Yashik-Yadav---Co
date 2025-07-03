/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <main>
      <section className="flex justify-center p-22 gap-20  bg-gray-100 mt-20">
        <div>
          <p className="mango text-[220px] h-[260px]">LETS MAKE IT </p>
          <p className="mango text-[200px] h-[340px] leading-46">
            HAPPEN TOGETHER
          </p>
        </div>
        <div className="self-end space-y-5 w-2/5">
          <p className="text-xl">
            We champion transformation through design, regardless of your
            project idea or goal.
          </p>
          <button className="mango bg-[#f16333] text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            START A CONVERSATION
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </section>
      <footer className="text-black px-4 md:px-16 py-12">
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
            src="/logo B&W.png"
            alt="Logo"
            className="w-400 h-90 object-contain md:mb-0 md:mr-6"
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
    </main>
  );
}
