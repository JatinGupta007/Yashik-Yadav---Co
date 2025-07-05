import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";

import React from "react";

const page = () => {
  return (
    <main>
      <Navbar />
      <Popup />
      <section className="px-24 py-12">
        <h1 className="text-[160px] mango text-center uppercase leading-34">
          Real Estate & Builders
        </h1>
        <div className="flex lg:p-16 bg-orange-200 w-full p-5 justify-between font-serif">
          <div>
            {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
              </div> */}
            <h2 className="text-3xl mb-4">
              High-Intent Leads for Jaipur’s Growing Real Estate Market
            </h2>
            <p className="mb-6">
              Bring site visits, pre-bookings, and sales interest with
              hyperlocal lead campaigns and automated follow-up systems.
            </p>

            <ul className="space-y-3">
              <h3 className="text-2xl mb-4">Services</h3>
              <li className="border-b border-orange-300 pb-3">
                SEO Services – Rank on Google with targeted SEO
              </li>
              <li className="border-b border-orange-300 pb-3">
                Google Ads & PPC – Smart paid campaigns to generate qualified
                leads
              </li>
              <li className="border-b border-orange-300 pb-3">
                Social Media Marketing – Instagram & Facebook growth campaigns
              </li>
              <li className="border-b border-orange-300 pb-3">
                Web Design & Development – Mobile-first, fast-loading websites
              </li>
              <li className="border-b border-orange-300 pb-3">
                Influencer & Content Marketing – Authentic collaborations that
                convert
              </li>
            </ul>
          </div>

          <video className="w-[300px]" playsInline autoPlay loop>
            <source src="/video-sevices.webm" type="video/webm" />
          </video>
        </div>
      </section>
    </main>
  );
};

export default page;
