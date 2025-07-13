/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import Image from "next/image";

import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Popup />
      <div className="bg-yellow-300 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-16 py-5">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black uppercase">
            Jewelry & Luxury Gifting Brands
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 lg:px-16 px-7 pt-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start lg:w-4/5">
          <p className="text-5xl mb-4 uppercase mango">
            Sparkle with SEO-Driven Success
          </p>
          <p className="text-xl leading-relaxed">
            Organic results for your timeless designs.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-2xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Schedule a Free Jewelry SEO Plan
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_2.png"
            alt="strategy"
            className="w-50 self-center mt-20 -ml-16"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-6xl mango mb-5 uppercase">
              Trusted by Jewelers, Designers, Luxury Studios
            </h3>
            <p className="text-xl">
              Convert aspirational shoppers into loyal buyers through
              storytelling and intent-based campaigns. We make high-end jewelry
              rank on Google and convert traffic into walk-ins or orders.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-5xl mango mb-4 uppercase">Services We Offer</h3>
            <ul className="space-y-2 text-xl">
              <li>Collection SEO (Engagement, Bridal, Gold, Diamond)</li>
              <li>Store-Based Local SEO</li>
              <li>Premium Blogs (Gifting, Guides, Trends)</li>
              <li>Pinterest + Instagram SEO Integration</li>
              <li>Reputation + Review Management</li>
              <li>Video Ads + Festival Campaigns</li>
              <li>WhatsApp Quote Chatbots</li>
            </ul>
          </div>
        </div>
      </section>
      <Image
        src="/REAL ESTATE MARKETING.jpg"
        alt="REAL ESTATE MARKETING"
        height={800}
        width={1300}
        className="pb-12 p-7 md:p-12"
      />

      <div className="border-b border-yellow-400 md:m-12 m-7 pb-12">
        <h3 className="text-5xl mb-4 mango uppercase">Our Strategy</h3>
        <p className="text-xl">
          We build search rankings around keywords like: “gold kundan choker,”
          “buy bridal sets online,” etc. Your site becomes an elegant SEO
          machine, blending beauty and performance.
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default page;
