/* eslint-disable @next/next/no-img-element */
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <main>
      <footer className="text-black px-4 md:px-16 bg-[#ff9140]">
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

        {/* Middle logo */}
        <div className="flex flex-col md:flex-row items-center justify-around p-10 font-serif">
          <ul className="space-y-1">
            <img src="/justlogo.png" alt="logo" className="w-70 mb-3 -ml-4" />
            <h3 className="text-2xl mb-3">Contact Us</h3>
            <li>Jaipur Office:</li>
            <li>Email: hello@yashikyadav.com</li>
            <li>Phone: +91-XXXXXXXXXX</li>
          </ul>

          <ul className="space-y-1">
            <h3 className="text-2xl mb-3"> Industries We Serve</h3>
            <li>Healthcare </li>
            <li>D2C & Ecommerce</li>
            <li>Real Estate</li>
            <li>EdTech </li>
            <li>Startups</li>
          </ul>

          <ul className="space-y-1">
            <h3 className="text-2xl mb-3">Our Services</h3>
            <li>SEO</li>
            <li>Google Ads</li>
            <li>Social Media Marketing</li>
            <li>Website Design</li>
            <li>Influencer Marketing</li>
            <li>Branding</li>
          </ul>
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
