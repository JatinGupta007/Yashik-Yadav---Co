
/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import Image from "next/image";


function About() {
  return (
    <main>
      <Navbar />
      <section className="flex justify-center items-center px-22 gap-20">
        <div>
          <p className="mango text-[170px] h-[200px]">WE&apos;RE </p>
          <p className="mango text-[170px] leading-36 uppercase">
            endlessly curious
          </p>
        </div>
        <div className="space-y-5 w-2/5 font-serif">
          <div className="bg-[#f16333] px-4">
            <p className="text-[40px] mango">FOUNDED IN 2020</p>
          </div>
          <p className="text-xl">
            Curiosity fuels innovation — and that’s exactly how we help brands
            grow. Every project we take on begins with a question:
            <span className="font-bold">
              &quot;What if we could make this better?&quot;
            </span>{" "}
            And then set out to answer the question, as audaciously as possible.
          </p>
          <p>
            Started with one client, one laptop, and the goal to build a
            results-driven digital marketing agency in Jaipur. Today, we’re
            powering growth across India and 4+ countries.
          </p>
        </div>
      </section>

      <Popup />

      <section className="flex flex-col items-center px-28 space-y-10 gap-12 mt-16">
        <Image
          src="/photo-aboutwebp.webp"
          alt="photo-about"
          width={900}
          height={800}
        />
        <div className="flex justify-start gap-5 w-full h-100">
          <h2 className="text-5xl uppercase leading-16">
            We create ideas that are truly transformative.
          </h2>
          <div className="space-y-8 self-end w-350">
            <p className="text-xl">
              We partner with brands to turn challenges into growth
              opportunities using full-funnel performance marketing.
            </p>
            <p className="text-xl">
              From building high-converting websites to scaling brands with
              Google Ads and social media — we’re on a mission to **put your
              business at the forefront of your industry**.
            </p>
            <button className="mango bg-[#f16333] text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              OUR SERVICES
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
        </div>

        <div className="flex justify-start gap-5 w-full h-140">
          <h2 className="text-5xl uppercase leading-16">
            From Freelance Hustle to Full-Fledged Agency
          </h2>
          <div className="space-y-8 self-end w-350">
            <p className="text-xl">
              Back in 2020, our founder Yashik Yadav was just a solo marketer
              working late nights, building websites and running ad campaigns
              from a small home office in Jaipur. What started as freelance gigs
              soon turned into long-term clients - and bigger opportunities.
            </p>
            <p className="text-xl">
              From ranking local doctors on Google Maps to running Google Ads
              for multi-city real estate firms, the mission became clear:
            </p>
            <p>Make marketing simple, transparent, and results-driven.</p>
            <p className="text-xl">
              Today, we are a full-stack digital marketing agency trusted by
              100+ brands across healthcare, e-commerce, tech, and lifestyle.
              The same hunger, curiosity, and client-first mindset still drives
              us — just with a bigger team and a bolder vision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#ff9140] p-16 mt-20 m-16 space-y-32">
        <div className="flex gap-8">
          <div className="bg-yellow-300 w-12 h-12 mt-10"></div>
          <div>
            <p className="mango text-9xl text-white">WE FOCUS ON</p>
            <p className="mango text-9xl text-yellow-400">WHAT MATTERS</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="border border-gray-200 w-40 h-12"></div>
          <div className="w-full ml-5">
            <p className="mango text-9xl text-white mb-10">IMPACT</p>
            <p className="text-lg text-white">
              We don’t believe in fluff. We focus on impact metrics — leads,
              conversions, ROAS, and long-term brand visibility.
            </p>
          </div>
          <Image
            src="/focus-sketch.svg"
            alt="focus-strech"
            width={350}
            height={200}
          />
          <p className="text-lg text-white w-full self-end">
            We find most exciting the opportunity to work on projects that can
            enhance the quality of lives of individuals, no matter how little.
            To do this we leverage technology and imaginative thinking to bring
            insights, ideas, and blueprints to life.
          </p>
        </div>

        <div className="flex gap-5">
          <div className="border border-gray-200 w-19 h-12"></div>
          <div className="w-1/2">
            <p className="mango text-9xl text-white mb-10">WORK</p>
            <p className="text-lg text-white">
              We obsess over the craft. From landing pages to ad creatives, we
              create with purpose and performance in mind.
            </p>
          </div>
          <Image
            src="/focus-sketch_1.svg"
            alt="focus-strech"
            width={300}
            height={200}
          />
          <div className="self-end">
            <p className="text-lg text-white">
              The baseline is never enough. We constantly ask:
            </p>
            <p className="mango text-8xl text-white mt-10 uppercase">
              Push it further
            </p>
            <p className="text-lg text-white w-full">
              &qout;How can this campaign perform even better?&quot;
            </p>
          </div>
        </div>

        <div className="flex justify-start gap-5">
          <div className="border border-gray-200 w-30 h-12"></div>
          <div className="">
            <p className="mango text-9xl text-white mb-10 uppercase">people</p>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/focus-sketch-people.CIAktQ3l.svg"
            alt="focus-strech"
            width={300}
            height={300}
          />
          <p className="text-lg text-white w-full self-center">
            Marketing without soul is noise. We value human-first design and
            collaborative creativity.
          </p>
        </div>

        <section className="p-16">
          {/* <div className="flex gap-18 mb-24">
            <p className="text-white w-2/3 text-xl font-bold">Our Team</p>
            <p className="text-white text-lg">
              Regardless of our role or level, we own each project and the final
              result we deliver is a cocktail of ideas from strategists,
              designers, researchers, etc.
            </p>
          </div> */}

          <div className="relative text-white flex items-center justify-center mango">
            {/* Background Text */}
            <h1 className="text-[220px] uppercase text-white text-center leading-45">
              AGILE <span className="ml-50">STRONG</span> GROWTH-DRIVEN
            </h1>

            {/* Hover Shape 1 */}
            <div className="absolute top-20 left-0 clip-starburst group w-50 h-52 bg-[#f16333] clip-star transition-all duration-300 overflow-hidden cursor-pointer">
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-agile-fsmx7gjpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Hover Shape 2 */}
            <div className="absolute top-0 right-80 clip-starburst group w-52 h-55  bg-[#f16333] clip-hex transition-all duration-300 overflow-hidden cursor-pointer">
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-growth-driven-un8efhjpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Hover Shape 3 */}
            <div className="absolute bottom-30 right-0 clip-starburst group w-50 h-52 bg-[#f16333] clip-x transition-all duration-300 overflow-hidden cursor-pointer">
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-strong-img-evcqa0jpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row w-full">
          {/* Left (green) section */}
          <div className="text-white p-10 md:p-20 space-y-6 text-xl">
            <p>
              We don&apos;t just deliver, we adapt. Our team is built on
              ownership, creativity, and speed.
            </p>
            <p>
              Whether it&apos;s 1-on-1 with clients or large-scale campaigns —
              we move fast, optimize faster, and always deliver with care.
            </p>
          </div>

          {/* Right (yellow) section */}
          <div className="flex-1 bg-yellow-400 text-black px-10 py-8 md:px-16 flex flex-col justify-around">
            <p className="text-xl">
              Our people make the magic happen. They are strategists, designers,
              media buyers, and growth engineers.
            </p>

            {/* Careers Button */}
            <div className="">
              <a
                href="/careers"
                className="inline-flex items-center justify-between bg-[#f16333] text-white text-4xl px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 mango gap-24"
              >
                CAREERS
                <span className="ml-4 text-2xl">➔</span>
              </a>
            </div>
          </div>
        </section>
      </section>

      <section className="flex items-center justify-center px-24 mt-20">
        <div className="w-full">
          <p className="text-lg">
            We believe in marketing that doesn’t just look good — it performs.
          </p>
          <div className="mt-10">
            <a
              href="/careers"
              className="inline-flex items-center justify-between bg-[#ff9140] text-white text-4xl px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 mango uppercase"
            >
              Our Work
              <span className="ml-4 text-2xl">➔</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-50 left-10 rotate-[-6deg] bg-[#f16333] px-4 text-center leading-10 pt-3 pb-1">
            <p className="text-[40px] mango uppercase">
              Yes, we’re a little obsessed — and that’s a good thing.
            </p>
          </div>
          <p className="mango text-[150px] text-center leading-32 uppercase flex-1">
            WE&apos;RE beyond passionate about what we do
          </p>
          <img src="/earth.png" alt="earth" className="w-900" />
          <p className="text-lg text-center m-3">
            Campaigns executed across India, UAE, UK, and US.
          </p>
        </div>
        <div className="w-full">
          <p className="text-lg">
            Whether it’s SEO for a doctor in Jaipur or Google Ads for a global
            ecommerce brand, we work as an extension of your business.
          </p>
        </div>
      </section>

      <section className="flex justify-center px-20 gap-10 py-10 bg-gray-100 font-serif">
        <div className="w-3/5">
          <h2 className="mango text-[140px] leading-32 uppercase">
            Let&apos;s Make It Happen Together
          </h2>
        </div>
        <div className="self-end space-y-5 mb-8">
          <h3 className="text-xl">
            Let’s co-create your next breakthrough campaign.
          </h3>
          <p>
            We build systems, not just strategies — and that’s what sets us
            apart.
          </p>
          <button className="mango bg-[#f16333] text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Start a conversation
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

      <Footer />
    </main>
  );
}

export default About;
