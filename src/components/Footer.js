import Image from "next/image";

export default function Footer() {
  return (
    <main className="bg-gray-100">
      <section className="flex justify-center px-20 gap-16 py-16 font-serif mt-5">
        <div className="w-3/5">
          <p className="mango text-[140px] leading-32 uppercase">
            Let’s Build Your Brand’s Digital Growth Engine
          </p>
        </div>
        <div className="self-end space-y-5 mb-8">
          <h3 className="text-xl">
            We’re here to take your digital marketing to the next level with:
          </h3>
          <ul className="text-lg list-disc pl-8">
            <li>Custom Strategy</li>
            <li>Clear Roadmap</li>
            <li>Fast Execution</li>
            <li>Performance Tracking</li>
          </ul>
          <button className="mango bg-black text-3xl text-white uppercase px-8 py-4 flex items-center justify-center gap-2 hover:opacity-90 transition-opacity mt-10">
            Schedule Your Free Strategy Call
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
      <footer className="text-black px-4 md:px-16">
        {/* Top links
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
        </div> */}
        <hr className="border-t border-black" />

        {/* Middle logo */}
        <div className="m-auto py-3 w-fit">
          <Image
            src="/fotlogo.png"
            alt="footer-logo"
            height={200}
            width={300}
            className="bg-transparent"
          />
        </div>

        {/* Divider */}
        <hr className="border-t border-black mb-4" />

        {/* Bottom links */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm pb-7">
          <p>© 2025 Yasik Yadav & Co. All Rights Reserved.</p>
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
