import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import Image from "next/image";
import { FaHeartCircleCheck } from "react-icons/fa6";

import React from "react";

const page = () => {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Popup />
      <section className="md:px-28 px-7 py-8 md:py-12">
        <h1 className="text-[90px] lg:text-[160px] mango text-center uppercase leading-22  md:leading-34 mb-10">
          IVF, Gynecology & Fertility Clinic Marketing
        </h1>
        <Image
          src="/IVF & GYNECOLOGY MARKETING.jpg"
          alt="IVF, Gynecology & Fertility Clinic Marketing"
          height={700}
          width={1300}
          className="mb-12"
        />
        <div className="flex flex-col lg:flex-row lg:px-16 pt-16 bg-orange-200 w-full p-5 justify-between">
          <div>
            {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
              </div> */}
            <h2 className="text-6xl mango mb-4 uppercase">
              Niche Marketing for IVF & Fertility Clinics
            </h2>
            <p className="mb-3 text-xl">
              Build trust and educate potential patients with storytelling and
              conversion-based landing pages tailored to IVF and women’s health.
            </p>

            <p className="mb-6 text-xl">
              We drive awareness, trust, and bookings for IVF centers,
              gynecologists, and women’s hospitals.
            </p>
          </div>

          <video className="w-[300px] -mt-20 lg:-mt-0" playsInline autoPlay loop>
            <source src="/video-sevices.webm" type="video/webm" />
          </video>
        </div>
        <ul className="space-y-3 py-16 text-xl">
          <h3 className="text-6xl mango mb-6 uppercase">Services We Offer</h3>
          <li className="border-b border-orange-300 pb-3">
            SEO Services – Rank on Google with targeted SEO
          </li>
          <li className="border-b border-orange-300 pb-3">
            GMB & Maps Optimization (City-based)
          </li>
          <li className="border-b border-orange-300 pb-3">
            Google Ads & PPC – Smart paid campaigns to generate qualified leads
          </li>
          <li className="border-b border-orange-300 pb-3">
            Video Reels on FAQs + Treatment Process
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
          <li className="border-b border-orange-300 pb-3">
            WhatsApp + CRM Automation
          </li>
        </ul>

        <section className="flex flex-col lg:flex-row lg:items-center p-7 lg:p-12 lg:py-16 border-b border-blue-400 gap-10 justify-center mb-12 bg-orange-300">
          <div className="lg:w-3/5">
            <p className="mango text-[60px] lg:text-[90px] uppercase leading-13 lg:leading-22 text-white">
              Let&apos;s Humanize and Optimize Your Clinic’s Visibility
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div className="space-y-5 bg-orange-400 p-12 lg:w-2/5">
            <p className="text-xl">
              Earn trust with content that truly connects.
            </p>
            <button className="mango bg-black text-2xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Get a Free IVF SEO Guide
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

        <div className="border-b border-orange-300 pb-12">
          <h3 className="text-6xl mb-4 mango uppercase">Our Strategy</h3>
          <p className="text-xl">
            We research what patients are searching like: “urologist near me,”
            “piles laser surgery in ,” etc., and build optimized pages for each.
            We humanize your expertise while boosting online visibility.
          </p>
        </div>
        <div className="flex items-center justify-center mt-12 gap-2">
          <FaHeartCircleCheck size={30} />
          <p className="text-center text-xl">Trusted by Healthcare Leaders </p>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default page;
