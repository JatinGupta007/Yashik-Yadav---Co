import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import Image from "next/image";
import React from "react";
import { PiHighHeelFill } from "react-icons/pi";

export default function Page() {
  return (
    <section className="overflow-x-hidden">
      <Navbar />
      <Popup />

      <div className="space-y-8 lg:px-28 p-7 lg:py-12">
        <h1 className="text-[90px] md:text-[160px] mango text-center uppercase leading-22 md:leading-34">
          Fashion & Apparel Brands
        </h1>
        <Image
          src="/FASHION APPAREL MARKETING.jpg"
          alt="FASHION APPAREL MARKETING"
          height={800}
          width={1200}
          className="pb-12"
        />
        {/* Item 1 */}
        <div className="border-b border-blue-300 pb-12">
          <h3 className="text-5xl mb-4 mango uppercase">
            For Apparel Brands Looking to Grow Organically
          </h3>
          <p className="text-xl">
            From Indian ethnic to western streetwear — we help fashion stores
            and labels gain visibility without over-relying on ads.
          </p>
        </div>

        {/* Item 2 */}
        <div className="border-b border-blue-300 pb-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <ul className="space-y-2 text-xl">
              <h3 className="text-5xl mb-4 mango uppercase">
                Services We Offer
              </h3>
              <li>Product Page SEO (Material, Type, Occasion Tags)</li>
              <li>Seasonal Collection Landing Pages</li>
              <li>Fashion Lookbook Blog Content videos</li>
              <li>Lookbook Creatives + Trend Hooks</li>
              <li>Meta Ads for Catalog Performance</li>
              <li>Retargeting for High Cart Value</li>
              <li>Influencer Collaboration SEO</li>
              <li>Email & SMS Drop Notifications</li>
            </ul>
            <Image
              src="/health_care.webp"
              alt="Health_care"
              height={200}
              width={400}
              className="rounded-xl mt-6 md:pt-0"
            />
          </div>
        </div>
        <section className="flex flex-col md:flex-row md:items-center md:p-12 p-7 md:py-16 border-b border-blue-400 gap-12 justify-center mb-12 bg-amber-600">
          <div>
            <p className="mango text-[60px] md:text-[100px] uppercase leading-14 md:leading-22 text-white">
              Ready to Trend Organically?
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div className="space-y-5 bg-yellow-400 p-7 md:p-12">
            <p className="text-xl">
              Turn your traffic into customers and your collections into
              conversations.
            </p>
            <button className="mango bg-black text-2xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Request a Free Fashion SEO Audit
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
        <div className="border-b border-blue-300 pb-12">
          <h3 className="text-5xl mb-4 mango uppercase">Our Strategy</h3>
          <p className="text-xl">
            We optimize for visual keywords like: &quot;Black lehenga,&quot; &quot;summer
            co-ord set under 3k,&quot; etc. Collection pages are designed with
            conversion-focused meta data. We also build content that brings
            repeat traffic — like styling tips, fashion trends,
            behind-the-scenes of shoots
          </p>
        </div>
        <div className="flex items-center justify-center gap-2">
          <PiHighHeelFill size={30} />
          <p className="text-center text-xl">Where style meets search </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
