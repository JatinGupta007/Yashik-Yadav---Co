import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <Header />
      <Popup />
      <section className="lg:px-24 lg:py-12 p-7">
        <div className="relative">
          <h1 className="text-[90px] lg:text-[160px] mango text-center uppercase leading-22 lg:leading-34 mb-3">
            Education, Coaching & EdTech
          </h1>
        </div>
        <div className="flex">
          <div className="lg:w-1/2"></div>
          <div className="lg:w-1/2">
            <h2 className="text-6xl mango mb-3 uppercase">
              Get More Enrollments for Your Courses or Coaching
            </h2>
            <p className="text-lg">
              Build authority and enrollments through demo booking flows,
              webinar funnels, and nurturing automations. We help educational
              brands rank on Google, drive inquiries, and build digital
              credibility through targeted SEO and content strategy.
            </p>
          </div>
        </div>
        <Image
          src="/EDUCATION & COACHING MARKETING.webp"
          alt="Health_care"
          height={800}
          width={1400}
          className="rounded-xl my-16"
        />
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-6xl uppercase mango mb-3">Services We Offer</h2>
            <ul className="text-lg space-y-2">
              <li>Demo Class & Webinar Ad Funnels</li>
              <li>Institute SEO + Google Ads</li>
              <li>Reels + Testimonial Video Edits</li>
              <li>Course Landing Page SEO + CTA Optimization</li>
              <li>Blog Content on Exams, Results, Tips</li>
              <li>WhatsApp + Email Automation</li>
            </ul>
          </div>
          <div className="md:w-1/2 md:mt-46 mt-10">
            <h2 className="text-6xl mango uppercase mb-3">Targeted Outcomes</h2>
            <ul className="text-lg space-y-2 md:pl-4">
              <li>
                Personalized Portfolio Website + SEO for Educators &
                Institutions
              </li>
              <li>
                Instagram Growth Strategy with Engaging Reels for Learning
              </li>
              <li>
                Video Walkthroughs of Courses, Workshops, or Student Projects
              </li>
              <li>
                Google Business Profile & Maps Ranking for Local Coaching
                Visibility
              </li>
              <li>WhatsApp Automation for Enquiry & Demo Class Requests</li>
            </ul>
          </div>
        </div>

        <section className="flex flex-col md:flex-row md:items-center md:p-12 p-7 md:py-16 border-b border-blue-400 gap-6 justify-center mb-12 bg-cyan-500 mt-16">
          <div className="w-7/12">
            <p className="mango text-[60px] md:text-[100px] uppercase leading-13 md:leading-22 text-white">
              Book More Admissions, Rank Higher
            </p>

            {/* <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p> */}
          </div>
          <div className="space-y-5 bg-cyan-200 md:p-12 p-7 md:w-5/12">
            <p className="text-xl">
              Helping Institutions Attract Students in a Digital World Let’s
              build an inbound engine for your education brand.
            </p>
            <button className="mango bg-black text-2xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
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
            <h3 className="text-5xl mango uppercase">Our Strategy</h3>
            <p className="text-xl">
              We research what patients are searching like: “urologist near me,”
              “piles laser surgery in ,” etc., and build optimized pages for
              each. We humanize your expertise while boosting online visibility.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
