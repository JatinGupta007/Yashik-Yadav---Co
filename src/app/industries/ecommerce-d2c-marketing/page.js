import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import { FaBriefcase } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import React from "react";
import Image from "next/image";

const services = [
  "Google Shopping + Meta Ad",
  "Product Page Optimization (Title, Schema, Description)",
  "Blog Funnels (Buying Guides, Comparisons)",
  "Technical Fixes (Speed, Mobile, Core Web Vitals)",
  "Shopify Optimization + UGC Campaigns",
  "Conversion Tracking + Email Flows",
  "Automated Review & WhatsApp Capture",
];

const page = () => {
  return (
    <main>
      <Header />
      <Popup />
      <section className="lg:px-24 md:px-20 lg:py-12 p-7">
        <h1
          data-aos="fade-left"
          className="text-[90px] lg:text-[160px] mango text-center uppercase leading-24 lg:leading-34 lg:px-40 mb-5"
        >
          Ecommerce & D2C Brands
        </h1>
        <div className="lg:p-12 bg-sky-100 w-full p-7">
          {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
              </div> */}
          <h2 data-aos="flip-up" className="text-6xl mb-4 mango uppercase">
            Fuel Your Ecommerce Growth with Ads, CRO & Retargeting
          </h2>
          <p data-aos="flip-up" className="mb-8 text-xl">
            Reach customers with data-backed performance creatives,
            influencer-led funnels, and cart recovery automation. We scale
            ecommerce visibility using product-first SEO that ranks and
            converts.
          </p>
          <div className="flex flex-col lg:flex-row justify-between gap-10 items-center">
            <table className="bg-white border border-gray-200 rounded-xl shadow-md mb-16 w-full lg:w-8/10 mt-5">
              <thead className="bg-sky-50">
                <tr>
                  <th
                    data-aos="zoom-in"
                    className="text-left px-6 py-3 text-4xl mango uppercase text-gray-600 tracking-wide"
                  >
                    Services We Offer
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-sky-300 transition-all border-t border-sky-300"
                  >
                    <td
                      data-aos="zoom-in"
                      data-aos-delay={`200*${index}`}
                      className="flex items-center gap-2 px-6 py-4 text-gray-800 font-medium"
                    >
                      {console.log(index)}
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <video
              className="w-[250px] -mt-24 lg:-mt-0 mb-4 lg:mb-0"
              playsInline
              autoPlay
              loop
              data-aos="zoom-out"
              data-aos-delay="1800"
            >
              <source src="/video-work.webm" type="video/webm" />
            </video>
          </div>
          <div
            className="flex items-center gap-2 justify-center"
            data-aos="flip-up"
          >
            <FaBriefcase size={30} />
            <p className="md:text-xl">
              For Startups, Shopify Brands, D2C Founders
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/Ecommerce D2c.jpg"
        alt="Health_care"
        height={800}
        width={1400}
        className="rounded-xl"
        data-aos="zoom-in"
      />
      <div className="bg-indigo-300 md:m-20  lg:p-12 p-7 m-7">
        <section className="flex flex-col lg:flex-row lg:items-center lg:py-16 border-b border-blue-400 gap-6 justify-center mb-12 ">
          <div className="lg:w-7/12">
            <p
              data-aos="zoom-in"
              className="mango text-[60px] lg:text-[100px] uppercase leading-13 lg:leading-22 text-black"
            >
              Let&apos;s Make Your Products Discoverable
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div
            data-aos="zoom-out"
            className="space-y-5 bg-indigo-100 lg:p-12 p-7 lg:w-5/12"
          >
            <p className="text-xl">
              Build Organic Sales Without Paid Ads Burnout More visibility.
              Better conversion. Stronger brand.
            </p>
            <button className="mango bg-black text-2xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
              Book Your Ecommerce SEO Strategy Call
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
        <div className="border-b border-blue-300 pb-12 text-black">
          <h3 className="text-5xl mb-4 mango uppercase" data-aos="flip-up">
            Our Strategy
          </h3>
          <p data-aos="flip-up" className="text-xl">
            From “vitamin C serum for oily skin” to “eco-friendly yoga mats,” we
            drive high-intent shoppers to your product pages. Every page is
            optimized to rank and convert.
          </p>
        </div>
        <div
          data-aos="flip-up"
          className="flex gap-2 items-center justify-center mt-10"
        >
          <RiCouponLine size={30} color="black" />
          <p className="text-center text-xl text-black">
            Online. Be Found by Premium Buyers.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
