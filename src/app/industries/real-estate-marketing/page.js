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
          <h1 className="text-[60px] lg:text-[100px] mango text-black">
            Real Estate & Builders
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 lg:px-16 px-7 pt-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start lg:w-4/5">
          <p className="text-5xl mb-4 uppercase mango">
            Real Estate & Builders
          </p>
          <p className="text-xl leading-relaxed">
            Rank. Reach. Close More Projects. Let’s optimize your listings and
            start closing.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-2xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Schedule a Free Real Estate SEO Audit
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_1.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-6xl mango mb-5 uppercase">
              For Builders, Developers, Property Agents
            </h3>
            <p className="text-xl">
              We bring you buyer-ready traffic from Google — people searching
              for flats, plots, rentals, and more. Bring site visits,
              pre-bookings, and sales interest with hyperlocal lead campaigns
              and automated follow-up systems.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-5xl mango mb-4 uppercase">Services We Offer</h3>
            <ul className="space-y-2 text-xl">
              <li>SEO for Residential/Commercial Projects </li>
              <li>Landing Pages by Location & Budget</li>
              <li>Blog on Home Buying, Loan, Vastu</li>
              <li>GMB Setup for Properties + Offices </li>
              <li>Booking CRM + WhatsApp Nurturing</li>
              <li>Reels with Drone Walkthroughs</li>
              <li>Project-focused Ads + Funnels</li>
            </ul>
          </div>
        </div>
      </section>
      <Image
        src="/REAL ESTATE MARKETING.jpg"
        alt="REAL ESTATE MARKETING"
        height={800}
        width={1300}
        className="pb-12 lg:p-12 p-7"
      />

      <div className="border-b border-yellow-400 m-7 lg:m-12 pb-12">
        <h3 className="text-5xl mb-4 mango uppercase">Our Strategy</h3>
        <p className="text-xl">
          We rank your projects for phrases like: “2 BHK flat in Mansarovar,”
          “property near Vaishali Nagar,” etc. Pages include floor plans,
          prices, and lead forms. All while your site stays fast, secure, and
          Google-friendly.
        </p>
      </div>

      <Footer />
    </main>
  );
};

export default page;
