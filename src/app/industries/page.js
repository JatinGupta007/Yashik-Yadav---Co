/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import React from "react";


const indusriesServices = [
  "healthcare-digital-marketing",
  "ivf-gynecology-marketing",
  "real-estate-marketing",
  "ecommerce-d2c-marketing",
  "education-coaching-marketing",
  "fashion-apparel-marketing",
  "skincare-wellness-marketing",
  "jewelry-luxury-marketing",
  "events-creative-marketing",
  "architects-interior-marketing",
];

const Industries = () => {
  return (
    <main>
      <Navbar />
      <Popup />
      <section className="px-24 py-12">
        <div className="relative">
          <h1 className="text-[160px] mango text-center uppercase leading-34">
            digital marketing solutions for industry specialized
          </h1>

          <div className="absolute top-10 left-10">
            <img src="/services_logo.png" alt="line" className="w-60" />
          </div>
        </div>
        <div className="flex">
          <p className="w-1/2"></p>
          <p className="text-xl w-1/2">
            We provide tailored digital marketing solutions for industry
            verticals that demand specialized strategies, language, and audience
            targeting. Below is the finalized content and detailed URL structure
            for each page.
          </p>
        </div>
      </section>

      <section className="flex mx-24 mb-10">
        <div className="w-1/2 bg-[#f2f7f6] p-10 py-16">
          <h1 className="text-7xl mb-10 text-center mango uppercase">Services</h1>
          <ul className="space-y-6 text-5xl">
            {indusriesServices.map((eachService, i) => (
              <Link
                href={`/industries/${eachService}`}
                key={i}
                className="text-gray-400 hover:text-slate-700 flex items-center justify-between group uppercase mango"
              >
                {eachService.replace(/-/g, " ")}
                <span className="ml-4 text-4xl hidden group-hover:inline">
                  ➔
                </span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="w-1/2 bg-[#aed9e0] p-16 text-black">
          <div className="flex space-x-4 mb-6">
            {Array(6)
              .fill()
              .map((_, i) => (
                <div key={i} className="w-[100px] h-2 bg-white"></div>
              ))}
          </div>

          <h1 className="text-3xl font-medium leading-8 mb-8">
            We begin by spending quality time with you in a series of discovery
            sessions.
          </h1>

          <p className="text-lg leading-relaxed text-gray-800">
            We want to know who you are and what you&apos;re about so we can
            connect with your vision and needs. An in-depth understanding of
            your <strong>WHAT</strong>, <strong>WHY</strong> and{" "}
            <strong>HOW</strong> helps us to build strong and meaningful
            connections with your users.
          </p>

          <p className="text-md mt-6 text-gray-700">
            P.S: Our co-founder might crack a few dad jokes during these
            meetings, but you can just ignore them like we do.
          </p>
          <img
            src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
            alt="image"
            className="h-90 w-full mt-16"
          />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Industries;
