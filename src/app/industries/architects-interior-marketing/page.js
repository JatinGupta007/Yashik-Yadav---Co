import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import Image from "next/image";

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Popup />
      <section className="lg:px-24 md:px-20 p-7 lg:py-12">
        <div className="relative">
          <h1
            data-aos="flip-up"
            className="text-[90px] lg:text-[160px] mango text-center uppercase leading-22 lg:leading-34 mb-3"
          >
            ARCHITECTS & INTERIOR MARKETING
          </h1>
        </div>
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2">
            <h2 data-aos="fade-left" className="text-6xl mango mb-3 uppercase">
              Build Your Design Brand Online Reach, Inspire, Convert
            </h2>
            <p data-aos="fade-left" className="text-lg">
              We help architecture firms, interior designers, and studios
              showcase their work, rank in local search, and generate
              high-ticket project inquiries. We help architecture firms,
              interior designers, and studios showcase their work, rank in local
              search, and generate high-ticket project inquiries.
            </p>
          </div>
        </div>
        <Image
          data-aos="zoom-in"
          src="/EDUCATION & COACHING MARKETING.webp"
          alt="Health_care"
          height={700}
          width={1200}
          className="rounded-xl my-16"
        />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 data-aos="fade-up" className="text-6xl uppercase mango mb-3">
              Services We Offer
            </h2>
            <ul className="text-lg space-y-2">
              <li data-aos="fade-up">
                Landing Pages by Service (Kitchen, Living Room, Office, etc.)
              </li>
              <li data-aos="fade-up">Review Strategy + CRM Integration</li>
              <li data-aos="fade-up">Portfolio Website Design + SEO</li>
              <li data-aos="fade-up">Instagram Growth Strategy + Reels</li>
              <li data-aos="fade-up">Video Walkthroughs of Projects</li>
              <li data-aos="fade-up">
                Course Landing Page SEO + CTA Optimization
              </li>
              <li data-aos="fade-up">Blog Content on Exams, Results, Tips</li>
              <li data-aos="fade-up">WhatsApp + Email Automation</li>
            </ul>
          </div>
          <div className="md:w-1/2 md:mt-46 md:pl-10 mt-10">
            <h2 data-aos="fade-down" className="text-6xl mango uppercase mb-3">
              Targeted Outcomes
            </h2>
            <ul className="text-lg space-y-2 md:pl-4">
              <li data-aos="fade-down">Project Inquiries</li>
              <li data-aos="fade-down">Studio Appointments</li>
              <li data-aos="fade-down">Design-Driven SEO for Creatives</li>
              <li data-aos="fade-down">Residential & Commercial Leads</li>
              <li data-aos="fade-down">
                Google Business Profile & Maps Ranking
              </li>
              <li data-aos="fade-down">
                WhatsApp Chat Automation for Consultation Requests
              </li>
            </ul>
          </div>
        </div>

        <section className="flex flex-col lg:flex-row lg:items-center p-7 lg:p-12 lg:py-16 border-b border-blue-400 gap-6 justify-center mb-12 bg-lime-200 mt-16">
          <div className="lg:w-7/12">
            <p data-aos="zoom-in" className="mango text-[60px] md:text-[100px] uppercase leading-13 md:leading-22 text-black">
              Build Your Digital Foundation Today
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div data-aos="zoom-out" className="space-y-5 bg-lime-400 p-7 lg:p-12 lg:w-5/12">
            <p className="text-xl">
              For Architects, Interior Studios, Consultants Let’s showcase your
              designs to the right clients.
            </p>
            <button className="mango bg-black text-2xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
              Get a Free SEO Strategy Plan
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
        <div className="flex">
          <div className="md:w-1/2"></div>
          <div className="md:w-1/2">
            <h3 data-aos="flip-up" className="text-5xl mango uppercase">Our Strategy</h3>
            <p data-aos="flip-up" className="text-xl">
              We help you rank for terms like “modern 3BHK interior designer,”
              “Vastu compliant home,” etc. Project storytelling meets Google
              optimization — crafted perfectly.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
