import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";

import React from "react";

const services = [
  "Google Shopping + Meta Ad",
  "Shopify Optimization + UGC Campaigns",
  "Conversion Tracking + Email Flows",
  "Retargeting via WhatsApp Broadcasts",
];

const page = () => {
  return (
    <main>
      <Navbar />
      <Popup />
      <section className="px-28 py-12">
        <h1 className="text-[160px] mango text-center uppercase leading-34 px-40 mb-5">
          Ecommerce & D2C Brands
        </h1>
        <div className="flex lg:p-16 bg-orange-200 w-full p-5 justify-between font-serif">
          <div>
            {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
              </div> */}
            <h2 className="text-3xl mb-4">
              Fuel Your Ecommerce Growth with Ads, CRO & Retargeting
            </h2>
            <p className="mb-8">
              Reach customers with data-backed performance creatives,
              influencer-led funnels, and cart recovery automation.
            </p>

            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md mb-16">
              <thead className="bg-gray-100">
                <tr>
                  <th className="text-left px-6 py-3 font-semibold text-gray-700">
                    Services
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-[#ff9140] transition-all border-t border-orange-300"
                  >
                    <td className="flex items-center gap-2 px-6 py-4 text-gray-800 font-medium">
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <video className="w-[300px]" playsInline autoPlay loop>
            <source src="/video-work.webm" type="video/webm" />
          </video>
        </div>
      </section>
    </main>
  );
};

export default page;
