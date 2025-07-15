import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import Image from "next/image";
import { GiSoap } from "react-icons/gi";

import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Popup />
      <section className="lg:px-24 md:px-20 md:py-10 p-7 lg:py-12">
        <h1
          data-aos="flip-down"
          className="text-[90px] md:text-[160px] mango text-center uppercase leading-22 md:leading-34 mb-10"
        >
          Skincare, Wellness & Salons
        </h1>
        <Image
          src="/IVF & GYNECOLOGY MARKETING.jpg"
          alt="IVF, Gynecology & Fertility Clinic Marketing"
          height={700}
          width={1300}
          className="mb-12"
          data-aos="zoom-in"
        />
        <div className="flex flex-col md:flex-row lg:px-16 md:pt-16 bg-orange-200 w-full p-5 justify-between">
          <div>
            {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
              </div> */}
            <h2 data-aos="zoom-in" className="text-6xl mango mb-4 uppercase">
              For Holistic, Clean, Science-Backed Products
            </h2>
            <p data-aos="zoom-in" className="mb-3 text-xl">
              Launch fashion-forward campaigns that drive virality, conversions,
              and loyalty. We help you rank, educate, and convert — all while
              building trust with conscious buyers.
            </p>
          </div>

          <video
            className="w-[300px] -mt-20 md:-mt-0"
            playsInline
            autoPlay
            loop
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <source src="/video-sevices.webm" type="video/webm" />
          </video>
        </div>
        <ul className="space-y-3 py-16 text-xl">
          <h3 data-aos="zoom-out" className="text-6xl mango mb-6 uppercase">
            Services We Offer
          </h3>
          <li
            data-aos="zoom-in"
            data-aos-delay="200"
            className="border-b border-orange-300 pb-3"
          >
            Skincare Product SEO (Skin Concerns, Ingredients)
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="300"
            className="border-b border-orange-300 pb-3"
          >
            Health-Based Blog Writing (Acne, Pigmentation, PCOD)
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="400"
            className="border-b border-orange-300 pb-3"
          >
            Pinterest + Instagram Optimization
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="500"
            className="border-b border-orange-300 pb-3"
          >
            Review Integration & UGC Strategy
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="600"
            className="border-b border-orange-300 pb-3"
          >
            Lookbook Creatives + Trend Hooks
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="700"
            className="border-b border-orange-300 pb-3"
          >
            Meta Ads for Catalog Performance
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="800"
            className="border-b border-orange-300 pb-3"
          >
            Retargeting for High Cart Value
          </li>
          <li
            data-aos="zoom-in"
            data-aos-delay="900"
            className="border-b border-orange-300 pb-3"
          >
            Email & SMS Drop Notifications
          </li>
        </ul>

        <section className="flex flex-col lg:flex-row lg:items-center lg:p-12 p-7 lg:py-16 border-b border-blue-400 gap-10 justify-center mb-12 bg-orange-200">
          <div className="lg:w-3/5">
            <p
              data-aos="fade-right"
              className="mango text-[60px] md:text-[90px] uppercase leading-13 md:leading-22 text-black"
            >
              Let&apos;s Build Organic Credibility for Your Brand
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div
            data-aos="fade-left"
            className="space-y-5 bg-orange-300 p-7 lg:p-12 lg:w-2/5"
          >
            <p className="text-xl">
              No hype. Just honest SEO that works for wellness brands.
            </p>
            <button className="mango bg-black text-2xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
              Talk to a Wellness SEO Expert
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

        <div className="border-b border-orange-400 pb-12">
          <h3 data-aos="zoom-out" className="text-6xl mb-4 mango uppercase">
            Our Strategy
          </h3>
          <p data-aos="zoom-in" className="text-xl">
            In the skincare & wellness world, Google is your biggest influencer.
            We help your brand show up with authentic content that answers real
            skin/health problems. From product pages with strong technical SEO
            to ingredient-explainer blogs and before-after case studies — your
            users will learn and trust before they buy.
          </p>
        </div>
        <div
          data-aos="zoom-in"
          className="flex items-center justify-center mt-12 gap-2"
        >
          <GiSoap size={30} />
          <p className="text-center text-xl">
            Building Organic Trust for Skincare, Ayurveda & Wellness Brands
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
