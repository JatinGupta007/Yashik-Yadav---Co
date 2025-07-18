import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import Image from "next/image";
import React from "react";
import { TiTickOutline } from "react-icons/ti";

export default function Page() {
  return (
    <section className="overflow-x-hidden">
      <Header />
      <Popup />

      <div className="space-y-8 lg:px-28 md:px-20 px-7 py-8 md:py-12">
        <h1
          data-aos="fade-down"
          className="text-[90px] lg:text-[160px] mango text-center uppercase leading-22  lg:leading-34"
        >
          Healthcare & Hospitals Marketing
        </h1>
        <Image
          src="/HEALTHCARE DIGITAL MARKETING.png"
          alt="HEALTHCARE DIGITAL MARKETING"
          height={800}
          width={1200}
          className="md:pb-12"
          data-aos="flip-up"
        />
        {/* Item 1 */}
        <div className="border-b border-blue-300 pb-12">
          <h3 data-aos="fade-down" className="text-5xl mb-4 mango uppercase">
            Trusted by Top Doctors, Clinics & Hospitals in Jaipur
          </h3>
          <p data-aos="fade-down" className="text-xl">
            We specialize in digital marketing for doctors, clinics, and
            hospitals — helping them rank locally, generate appointment
            bookings, and build lasting trust with patients.
          </p>
          <p data-aos="fade-down" className="mt-5 text-xl">
            We help doctors and clinics grow through ethical SEO, visibility
            strategies, and trust-building content.
          </p>
        </div>

        {/* Item 2 */}
        <div className="border-b border-blue-300 pb-12">
          <div className="flex flex-col lg:flex-row justify-between lg:items-center">
            <ul className="space-y-2 text-xl">
              <h3
                data-aos="fade-down"
                className="text-5xl mb-4 mango uppercase"
              >
                Services We Offer
              </h3>
              <li data-aos="fade-down" data-aos-delay="200">
                Google Business Profile SEO & reviews
              </li>
              <li data-aos="fade-down" data-aos-delay="300">
                Treatment-Based Landing Pages
              </li>
              <li data-aos="fade-down" data-aos-delay="400">
                Medical treatment content + procedure videos
              </li>
              <li data-aos="fade-down" data-aos-delay="500">
                Medical Blogs (Conditions, Symptoms, FAQs)
              </li>
              <li data-aos="fade-down" data-aos-delay="600">
                AAppointment automation (CRM + WhatsApp)
              </li>
              <li data-aos="fade-down" data-aos-delay="700">
                Video Content for Procedures
              </li>
              <li data-aos="fade-down" data-aos-delay="800">
                Doctor personal branding (video, search, reels)
              </li>
              <li data-aos="fade-down" data-aos-delay="900">
                Patient Inquiry Automation (CRM + WhatsApp)
              </li>
            </ul>
            <Image
              src="/health_care.webp"
              alt="Health_care"
              height={200}
              width={400}
              className="rounded-xl mt-5 lg:mt-0"
              data-aos="fade-up"
            />
          </div>
        </div>
        <section className="flex flex-col lg:flex-row lg:items-center p-6 lg:p-12 md:py-16 border-b border-blue-400 gap-12 justify-center mb-12 bg-blue-500">
          <div>
            <p
              data-aos="fade-right"
              className="mango text-[60px] lg:text-[100px] uppercase leading-14 lg:leading-22 text-white"
            >
              Grow Your Practice with Precision SEO
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div
            data-aos="fade-left"
            className="space-y-5 bg-sky-400 p-6 lg:p-12"
          >
            <p className="text-xl">
              Let&apos;s help patients discover and trust your services online.
            </p>
            <button className="mango bg-black text-2xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
              Request a Healthcare SEO Plan
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
          <h3 data-aos="fade-down" className="text-5xl mb-4 mango uppercase">
            Our Strategy
          </h3>
          <p data-aos="fade-down" className="text-xl">
            We research what patients are searching like: “urologist near me,”
            “piles laser surgery in ,” etc., and build optimized pages for each.
            We humanize your expertise while boosting online visibility.
          </p>
        </div>
        <div data-aos="fade-down" className="flex items-center justify-center">
          <TiTickOutline size={30} />
          <p className="text-center text-xl">Trusted by Healthcare Leaders </p>
        </div>
      </div>

      <Footer />
    </section>
  );
}
