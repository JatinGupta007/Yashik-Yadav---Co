/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import Image from "next/image";

function About() {
  return (
    <main className="overflow-hidden">
      <Header />
      <section className="flex flex-col md:flex-row justify-center md:items-center px-7 md:px-20 md:pt-16 lg:px-30 gap-6 md:gap-10 lg:gap-16">
        <div>
          <p
            data-aos="flip-up"
            className="mango text-[120px] lg:text-[170px] h-[140px] lg:h-[200px]"
          >
            WE&apos;RE
          </p>
          <p
            data-aos="flip-up"
            className="mango text-[120px] lg:text-[170px] leading-28 lg:leading-36 uppercase"
          >
            endlessly curious
          </p>
        </div>
        <div className="space-y-5 lg:w-2/5">
          <div
            className="bg-yellow-400 w-50 px-4"
            data-aos="flip-down"
            data-aos-delay="400"
          >
            <p className="text-[40px] mango">FOUNDED IN 2020</p>
          </div>
          <p className="lg:text-xl" data-aos="flip-down" data-aos-delay="400">
            Curiosity fuels innovation - and that’s exactly how we help brands
            grow. Every project we take on begins with a question:
            <span className="font-bold">
              &quot;What if we could make this better?&quot;
            </span>{" "}
            And then set out to answer the question, as audaciously as possible.
          </p>
          <p data-aos="flip-down" data-aos-delay="400">
            Started with one client, one laptop, and the goal to build a results
            driven digital marketing agency in Jaipur. Today, we’re powering
            growth across India and 4+ countries.
          </p>
        </div>
      </section>

      <Popup />

      <section className="flex flex-col items-center px-7 md:px-28 space-y-10 mt-16">
        <Image
          src="/photo-aboutwebp.webp"
          alt="photo-about"
          width={900}
          height={800}
          data-aos="flip-up"
        />
        <div className="flex flex-col lg:flex-row justify-start gap-5 w-full lg:h-100">
          <h2
            className="text-3xl lg:text-5xl uppercase lg:leading-16"
            data-aos="fade-up"
          >
            We create ideas that are truly transformative.
          </h2>
          <div className="space-y-8 lg:self-end lg:w-350" data-aos="fade-down">
            <p className="text-xl">
              We partner with brands to turn challenges into growth
              opportunities using full-funnel performance marketing.
            </p>
            <p className="text-xl" data-aos="fade-right">
              From building high-converting websites to scaling brands with
              Google Ads and social media - we&apos;re on a mission to **put your
              business at the forefront of your industry**.
            </p>
            <button className="mango bg-black text-2xl lg:text-4xl text-white uppercase px-4 lg:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
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

        <div className="flex flex-col lg:flex-row justify-start gap-5 w-full lg:h-140">
          <div>
            <h2
              className="text-3xl lg:text-5xl uppercase lg:leading-16"
              data-aos="flip-right"
            >
              From Freelance Hustle to Full-Fledged Agency
            </h2>
            <Image
              src="/about-plant.png"
              alt="plant"
              height={400}
              width={300}
              className="w-30 lg:w-70"
              data-aos="zoom-out"
            />
          </div>

          <div className="space-y-8 lg:self-end lg:w-350">
            <p className="text-xl" data-aos="flip-right">
              Back in 2020, our founder Yashik Yadav was just a solo marketer
              working late nights, building websites and running ad campaigns
              from a small home office in Jaipur. What started as freelance gigs
              soon turned into long-term clients - and bigger opportunities.
            </p>
            <p className="text-xl" data-aos="flip-left">
              From ranking local doctors on Google Maps to running Google Ads
              for multi-city real estate firms, the mission became clear:
            </p>
            <p>Make marketing simple, transparent, and results-driven.</p>
            <p className="text-xl" data-aos="zoom-in">
              Today, we are a full-stack digital marketing agency trusted by
              100+ brands across healthcare, e-commerce, tech, and lifestyle.
              The same hunger, curiosity, and client-first mindset still drives
              us - just with a bigger team and a bolder vision.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-green-800 lg:p-16 p-5 mt-20 lg:m-16 space-y-32">
        <div className="flex gap-8">
          <div className="bg-yellow-300 w-12 h-12 mt-10"></div>
          <div>
            <p
              className="mango text-6xl lg:text-9xl text-white"
              data-aos="flip-up"
            >
              WE FOCUS ON
            </p>
            <p
              className="mango text-6xl lg:text-9xl text-yellow-400"
              data-aos="flip-up"
            >
              WHAT MATTERS
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-start">
          <div className="flex">
            <div className="border border-gray-200 w-16 h-12"></div>
            <div className="w-full ml-5">
              <p
                className="mango text-6xl lg:text-9xl text-white mb-10"
                data-aos="flip-left"
              >
                IMPACT
              </p>
              <p className="text-lg text-white" data-aos="flip-left">
                We don&apos;t believe in fluff. We focus on impact metrics - leads,
                conversions, ROAS, and long-term brand visibility.
              </p>
            </div>
          </div>
          <Image
            src="/focus-sketch.svg"
            alt="focus-strech"
            width={350}
            height={200}
            className="mt-10 lg:mt-0"
            data-aos="zoom-in"
          />
          <p
            className="text-lg text-white w-full self-end pl-16 lg:pl-0"
            data-aos="flip-right"
          >
            We find most exciting the opportunity to work on projects that can
            enhance the quality of lives of individuals, no matter how little.
            To do this we leverage technology and imaginative thinking to bring
            insights, ideas, and blueprints to life.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row ">
          <div className="flex">
            <div className="border border-gray-200 w-12 mr-6 h-12"></div>
            <div className="w-1/2">
              <p
                className="mango text-6xl lg:text-9xl text-white mb-10"
                data-aos="fade-right"
              >
                WORK
              </p>
              <p className="text-lg text-white" data-aos="fade-right">
                We obsess over the craft. From landing pages to ad creatives, we
                create with purpose and performance in mind.
              </p>
            </div>
          </div>
          <Image
            src="/focus-sketch_1.svg"
            alt="focus-strech"
            width={300}
            height={200}
            className="ml-16 lg:ml-0 w-40 lg:w-70"
            data-aos="zoom-in"
          />
          <div className="lg:self-end ml-16 lg:ml-20">
            <p className="text-lg text-white" data-aos="fade-left">
              The baseline is never enough. We constantly ask:
            </p>
            <p
              className="mango text-6xl lg:text-8xl text-white mt-10 uppercase"
              data-aos="fade-left"
            >
              Push it further
            </p>
            <p className="text-lg text-white w-full" data-aos="fade-left">
              &qout;How can this campaign perform even better?&quot;
            </p>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-start gap-5">
          <div className="flex lg:flex-row">
            <div className="border border-gray-200 w-12 mr-5 h-12"></div>
            <div className="">
              <p
                className="mango text-6xl lg:text-9xl text-white mb-10 uppercase"
                data-aos="flip-right"
              >
                people
              </p>
            </div>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/focus-sketch-people.CIAktQ3l.svg"
            alt="focus-strech"
            width={300}
            height={300}
            className="ml-16 lg:ml-0 w-50 lg:w-full"
            data-aos="flip-up"
          />
          <p
            className="text-lg text-white w-full self-center pl-16 lg:pl-0"
            data-aos="flip-left"
          >
            Marketing without soul is noise. We value human-first design and
            collaborative creativity.
          </p>
        </div>

        <section className="lg:p-16">
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
            <h1
              className="text-[100px] lg:text-[220px] uppercase text-white text-center lg:leading-45"
              data-aos="fade-up"
            >
              AGILE <span className="ml-10">STRONG</span> GROWTH-DRIVEN
            </h1>

            {/* Hover Shape 1 */}
            <div
              data-aos="flip-up"
              className="absolute top-20 -left-10 clip-starburst group w-50 h-52 bg-[#f16333] clip-star transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-agile-fsmx7gjpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Hover Shape 2 */}
            <div
              data-aos="flip-up"
              className="hidden lg:block absolute top-0 right-90 clip-starburst group w-52 h-55  bg-[#f16333] clip-hex transition-all duration-300 overflow-hidden cursor-pointer"
            >
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-growth-driven-un8efhjpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Hover Shape 3 */}
            <div
              className="absolute bottom-30 right-0 clip-starburst group w-50 h-52 bg-[#f16333] clip-x transition-all duration-300 overflow-hidden cursor-pointer"
              data-aos="flip-up"
            >
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-strong-img-evcqa0jpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col lg:flex-row w-full -mt-24 lg:-mt-0">
          {/* Left (green) section */}
          <div className="text-white p-10 md:p-20 space-y-6 text-xl">
            <p data-aos="fade-right">
              We don&apos;t just deliver, we adapt. Our team is built on
              ownership, creativity, and speed.
            </p>
            <p data-aos="fade-right">
              Whether it&apos;s 1-on-1 with clients or large-scale campaigns -
              we move fast, optimize faster, and always deliver with care.
            </p>
          </div>

          {/* Right (yellow) section */}
          <div className="flex-1 bg-yellow-400 text-black px-10 py-8 md:px-16 flex flex-col justify-around">
            <p data-aos="flip-up" className="text-xl">
              Our people make the magic happen. They are strategists, designers,
              media buyers, and growth engineers.
            </p>

            {/* Careers Button */}
            <div className="mt-6 lg:mt-0">
              <a
                data-aos="flip-up"
                className="inline-flex items-center justify-between bg-black text-white text-4xl px-6 py-4 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95 mango gap-24"
              >
                CAREERS
                <span className="ml-4 text-2xl">➔</span>
              </a>
            </div>
          </div>
        </section>
      </section>

      <section className="flex flex-col lg:flex-row items-center justify-center md:px-20 lg:px-24 px-6 mt-20">
        <div className="w-full order-3 lg:order-1" data-aos="fade-right">
          <p className="text-lg">
            We believe in marketing that doesn&apos;t just look good - it performs.
          </p>
          <div className="mt-10">
            <a className="inline-flex items-center justify-between bg-black text-white text-4xl px-6 py-4 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95 mango uppercase">
              Our Work
              <span className="ml-4 text-2xl">➔</span>
            </a>
          </div>
        </div>
        <div className="relative order-1 lg:order-2">
          <div className="absolute lg:top-50 lg:left-15 top-30 left-4 md:top-12 md:left-36 rotate-[-6deg] bg-yellow-400 lg:px-4 px-1 text-center lg:leading-10 lg:pt-3 pt-1 lg:pb-1 z-10">
            <p
              className="text-[22px] lg:text-[40px] mango uppercase"
              data-aos="zoom-out"
            >
              Yes, we&apos;re a little obsessed and that&apos;s a good thing.
            </p>
          </div>
          <p
            data-aos="fade-up"
            className="mango text-[80px] lg:text-[150px] text-center leading-18 lg:leading-32 uppercase flex-1"
          >
            WE&apos;RE beyond passionate about what we do
          </p>
          <img
            src="/earth.png"
            alt="earth"
            className="w-900"
            data-aos="fade-down"
          />
          <p
            data-aos="fade-down"
            className="text-lg md:text-center m-3 text-left"
          >
            Campaigns executed across India, UAE, UK, and US.
          </p>
        </div>
        <div className="w-full order-2 lg:order-3 md:mt-6 lg:mt-0">
          <p className="text-lg" data-aos="fade-left">
            Whether it&apos;s SEO for a doctor in Jaipur or Google Ads for a
            global ecommerce brand, we work as an extension of your business.
          </p>
        </div>
      </section>

      {/* <section className="flex justify-center px-20 gap-10 py-10 bg-gray-100">
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
      </section> */}

      <Footer />
    </main>
  );
}

export default About;
