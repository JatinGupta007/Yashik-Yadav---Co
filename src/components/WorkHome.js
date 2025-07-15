/* eslint-disable @next/next/no-img-element */
import React from 'react'
import Link from 'next/link'

const WorkHome = () => {
  return (
    <section className="md:px-16 px-5">
      <img
        src="/kele-cover.webp"
        alt="kele-cover"
        height={900}
        width={1200}
        className="w-full h-[220px] md:h-full"
        data-aos="flip-left"
      />
      <div className="py-6 flex flex-col md:flex-row justify-between items-start lg:items-center gap-6">
        {/* Left Side */}
        <div data-aos="fade-right">
          <Link
            href="/work/projects"
            className="text-[50px] lg:text-[80px] leading-none mango transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95"
          >
            KELE (Fintech App)
          </Link>
          <p className="text-xl mt-2">
            SEO + UI Revamp → +147% Organic Traffic
          </p>
        </div>

        {/* Right Side - Tags */}
        <div className="flex flex-wrap gap-3 text-xs" data-aos="fade-left">
          <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
            VISUAL IDENTITY
          </span>
          <span className="bg-purple-300 px-3 py-2 text-black font-medium">
            APP DESIGN
          </span>
          <span className="bg-orange-200 px-3 py-2 text-black font-medium">
            APP DEVELOPMENT
          </span>
          <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
            DIGITAL TRANSFORMATION
          </span>
        </div>
      </div>

      <img
        className="mt-14 w-full h-[220px] md:h-full"
        src="/autograph-cover.webp"
        alt="kele-cover"
        height={900}
        width={1200}
        data-aos="flip-right"
      />
      <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Side */}
        <div data-aos="fade-right">
          <Link
            href="/work/projects"
            className="text-[50px] lg:text-[80px] leading-none mango uppercase transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95"
          >
            Autograph D2C
          </Link>
          <p className="text-xl mt-2">Shopify Build + Paid Ads → 3.8x ROAS</p>
        </div>

        {/* Right Side - Tags */}
        <div className="flex flex-wrap gap-3 text-xs" data-aos="fade-left">
          <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
            Naming
          </span>
          <span className="bg-purple-300 px-3 py-2 text-black font-medium">
            BRAND STARTEGY
          </span>
          <span className="bg-orange-200 px-3 py-2 text-black font-medium">
            VISUAL IDENTITY
          </span>
          <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
            VERBAL IDENTITY
          </span>
        </div>
      </div>

      <img
        className="mt-14 w-full h-[220px] md:h-full"
        src="/propel-cover.webp"
        alt="kele-cover"
        height={900}
        width={1200}
        data-aos="flip-left"
      />
      <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Side */}
        <div data-aos="fade-right">
          <Link
            href="/work/projects"
            className="text-[50px] lg:text-[80px] leading-none mango uppercase transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95"
          >
            Propel Creators
          </Link>
          <p className="text-xl mt-2">
            Paid Media Strategy → 800+ Leads in 6 Weeks
          </p>
        </div>

        {/* Right Side - Tags */}
        <div className="flex flex-wrap gap-3 text-xs" data-aos="fade-left">
          <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
            BRAND STARTEGY
          </span>
          <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
            COMMUNICATION DESIGN
          </span>
          <span className="bg-orange-200 px-3 py-2 text-black font-medium">
            WEBSITE DESIGN
          </span>
        </div>
      </div>

      <img
        className="mt-14 w-full h-[220px] md:h-full"
        src="/dass.webp"
        alt="kele-cover"
        height={900}
        width={1200}
        data-aos="flip-right"
      />
      <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Side */}
        <div data-aos="fade-right">
          <h1 className="text-[50px] lg:text-[80px] leading-none mango uppercase transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
            Adidas India
          </h1>
          <p className="text-xl mt-2">
            Influencer Campaign + Video Ads → 1M+ Impressions
          </p>
        </div>

        {/* Right Side - Tags */}
        <div className="flex flex-wrap gap-3 text-xs" data-aos="fade-left">
          <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
            WEB DESIGN
          </span>
          <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
            WEB DEVELOPMENT
          </span>
          <span className="bg-orange-200 px-3 py-2 text-black font-medium">
            E-COMMERCE
          </span>
        </div>
      </div>

      <img
        className="mt-14 w-full h-[220px] md:h-full"
        src="/odla-cover.webp"
        alt="kele-cover"
        height={900}
        width={1200}
        data-aos="flip-up"
      />
      <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        {/* Left Side */}
        <div data-aos="fade-right">
          <h1 className="text-[50px] lg:text-[80px] leading-none mango transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
            ODLA Wellness
          </h1>
          <p className="text-xl mt-2">Local SEO → 4x Organic Leads</p>
        </div>

        {/* Right Side - Tags */}
        <div className="flex flex-wrap gap-3 text-xs" data-aos="fade-left">
          <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
            VISUAL IDENTITY
          </span>
          <span className="bg-purple-300 px-3 py-2 text-black font-medium">
            BRAND STARTEGY
          </span>
          <span className="bg-orange-200 px-3 py-2 text-black font-medium">
            BRANDING
          </span>
          <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
            WEBSITE DESIGN
          </span>
        </div>
      </div>
    </section>
  );
}

export default WorkHome