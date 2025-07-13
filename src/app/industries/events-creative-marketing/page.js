import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import { FaBriefcase } from "react-icons/fa";
import { RiCouponLine } from "react-icons/ri";
import React from "react";
import Image from "next/image";

const services = [
  "SEO for Weddings, Corporate, Live Shows",
  "Visual Portfolio Optimization",
  "Google Business Setup & Automation",
  "Blog Strategy (Trends, BTS, Client Stories)",
  "Event Highlight Reels",
  "Ads for Wedding & Pre-Wedding Bookings",
  "Google Maps + Local Review Growth",
  "WhatsApp Enquiry Setup",
];

const page = () => {
  return (
    <main>
      <Header />
      <Popup />
      <section className="lg:px-16 p-7 lg:py-12">
        <h1 className="text-[90px] lg:text-[160px] mango text-center uppercase leading-22 lg:leading-34 lg:px-40 mb-5">
          Events, Photographers & Creative Agencies
        </h1>
        <div className="lg:p-12 bg-rose-100 w-full p-5">
          {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
              </div> */}
          <h2 className="text-6xl mb-4 mango uppercase">
            Get Booked Solid with Smart Local Marketing
          </h2>
          <p className="mb-8 text-xl">
            Get discovered locally and booked frequently using hyper-relevant
            reels, SEO, and personalized booking journeys. We bring inbound
            leads to your event business using content, SEO, and GMB.
          </p>
          <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
            <table className="bg-white border border-gray-200 rounded-xl shadow-md mb-16 md:w-8/10 mt-5">
              <thead className="bg-rose-50">
                <tr>
                  <th className="text-left px-6 py-3 text-4xl mango uppercase text-gray-600 tracking-wide">
                    Services We Offer
                  </th>
                </tr>
              </thead>
              <tbody>
                {services.map((item, index) => (
                  <tr
                    key={index}
                    className="hover:bg-rose-300 transition-all border-t border-rose-300"
                  >
                    <td className="flex items-center gap-2 px-6 py-4 text-gray-800 font-medium">
                      {item}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <video
              className="w-[250px] -mt-24 m:-mt-0 mb-6 md:mb-0"
              playsInline
              autoPlay
              loop
            >
              <source src="/video-work.webm" type="video/webm" />
            </video>
          </div>
          <div className="flex items-center gap-2 justify-center">
            <FaBriefcase size={30} />
            <p className="md:text-xl">
              For Event Planners, Agencies, Designers
            </p>
          </div>
        </div>
      </section>
      <Image
        src="/EVENTS & CREATIVE MARKETING.jpg"
        alt="Health_care"
        height={800}
        width={1000}
        className="rounded-xl px-7 md:px-16 w-full"
      />
      <div className="bg-rose-200 md:m-16 md:p-12 m-7 p-7">
        <section className="flex flex-col lg:flex-row lg:items-center md:py-16 border-b border-rose-400 gap-6 justify-center mb-12 ">
          <div className="lg:w-7/12">
            <p className="mango text-[60px] lg:text-[100px] uppercase leading-13 lg:leading-22 text-black">
              Fill Your Calendar with Inbound Leads
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div className="space-y-5 bg-rose-400 p-7 md:p-12 lg:w-5/12">
            <p className="text-xl">
              For Event Planners, Agencies, Designers Let’s light up your online
              presence.
            </p>
            <button className="mango bg-rose-200 text-2xl text-black uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              Speak with an Event SEO Expert
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
        <div className="border-b border-rose-400 pb-12 text-black">
          <h3 className="text-5xl mb-4 mango uppercase">Our Strategy</h3>
          <p className="text-xl">
            We rank you for keywords like “wedding planner ,” “event decorator
            near me,” “mehendi stage setup ideas.” Every landing page is
            aesthetic, responsive, and lead-generating.
          </p>
        </div>
        <div className="flex gap-2 items-center justify-center mt-10">
          <RiCouponLine size={30} color="black" />
          <p className="text-center text-xl text-black">
            Make Your Creativity Discoverable
          </p>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default page;
