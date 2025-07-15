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
      <div className="bg-yellow-300 flex flex-col lg:flex-row justify-between md:mx-20 lg:mx-24 px-7 lg:py-16 py-5 mt-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1
            data-aos="zoom-in"
            className="text-[60px] leading-16 lg:text-[100px] mango text-black uppercase"
          >
            Jewelry & Luxury Gifting Brands
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-20 lg:px-24 px-7 pt-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start lg:w-4/5">
          <p data-aos="fade-right" className="text-5xl mb-4 uppercase mango">
            Sparkle with SEO-Driven Success
          </p>
          <p data-aos="fade-right" className="text-xl leading-relaxed">
            Organic results for your timeless designs.
          </p>

          {/* Button */}
          <button
            data-aos="fade-right"
            className="mt-8 mango bg-black text-white px-6 py-4 text-2xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95 uppercase"
          >
            Schedule a Free Jewelry SEO Plan
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_2.png"
            alt="strategy"
            className="w-50 ml-10 mt-20"
            data-aos="fade-right"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 data-aos="fade-left" className="text-6xl mango mb-5 uppercase">
              Trusted by Jewelers, Designers, Luxury Studios
            </h3>
            <p data-aos="fade-left" className="text-xl">
              Convert aspirational shoppers into loyal buyers through
              storytelling and intent-based campaigns. We make high-end jewelry
              rank on Google and convert traffic into walk-ins or orders.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 data-aos="fade-left" className="text-5xl mango mb-4 uppercase">
              Services We Offer
            </h3>
            <ul className="space-y-2 text-xl">
              <li data-aos="fade-left" data-aos-delay="200">
                Collection SEO (Engagement, Bridal, Gold, Diamond)
              </li>
              <li data-aos="fade-left" data-aos-delay="300">
                Store-Based Local SEO
              </li>
              <li data-aos="fade-left" data-aos-delay="400">
                Premium Blogs (Gifting, Guides, Trends)
              </li>
              <li data-aos="fade-left" data-aos-delay="500">
                Pinterest + Instagram SEO Integration
              </li>
              <li data-aos="fade-left" data-aos-delay="600">
                Reputation + Review Management
              </li>
              <li data-aos="fade-left" data-aos-delay="700">
                Video Ads + Festival Campaigns
              </li>
              <li data-aos="fade-left" data-aos-delay="800">
                WhatsApp Quote Chatbots
              </li>
            </ul>
          </div>
        </div>
      </section>
      <Image
        src="/REAL ESTATE MARKETING.jpg"
        alt="REAL ESTATE MARKETING"
        height={800}
        width={1300}
        className="pb-12 p-7 md:px-20 mt-6"
        data-aos="zoom-out"
      />

      <div className="border-b border-yellow-400 md:mx-20 lg:mx-24 m-7 pb-12">
        <h3 data-aos="fade-left" className="text-5xl mb-4 mango uppercase">
          Our Strategy
        </h3>
        <p data-aos="fade-left" className="text-xl">
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
