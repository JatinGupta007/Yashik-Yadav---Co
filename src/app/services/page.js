
/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import React from "react";



const Services = () => {
  return (
    <main>
      <Navbar />
      <Popup />
      <section className="p-24 mt-24">
        <div className="relative">
          <h1 className="text-[180px] mango text-center uppercase leading-40">
            We&apos;re not brief executors - we&apos;re hands-on problem solvers
          </h1>

          <div className="absolute top-10 left-10">
            <img src="/services_logo.png" alt="line" className="w-60" />
          </div>
        </div>
        <div className="flex justify-between mt-6">
          <p className="text-[46px] uppercase leading-14 w-2/5 leading mt-20">
            Here&apos;s what to expect when you partner with us
          </p>
          <p className="text-lg w-1/3">
            We choose both functionality and aesthetics as opposed to forgoing
            one for the other. We take a human-centred perspective to craft
            distinct blueprints that redefine businesses so that they can win
            competitively and at scale.
          </p>
        </div>
      </section>
      <section className="flex mx-24">
        {/* Left Side */}
        <div className="w-1/2 bg-[#ff9140] p-10 mango">
          <ul className="space-y-16 text-[4rem] tracking-tight">
            <li className="text-black flex items-center justify-between">
              DISCOVERY
              <span className="ml-4 text-4xl">➔</span>
            </li>
            <li className="text-white">DEFINITION</li>
            <li className="text-white">IDEATION/EXECUTION</li>
            <li className="text-white">DELIVERY</li>
            <li className="text-white">IMPACT MEASURING</li>
            <li className="text-white">CONTINOUS PARTNERSHIP</li>
          </ul>
        </div>

        {/* Right Side */}
        <div className="w-1/2 bg-[#f16333] p-16 text-black">
          {/* Top Border Dash */}
          <div className="flex space-x-4 mb-6">
            {Array(6)
              .fill()
              .map((_, i) => (
                <div key={i} className="w-[100px] h-2 bg-white"></div>
              ))}
          </div>

          <h1 className="text-4xl font-medium leading-snug mb-8">
            We begin by spending quality time with you in a series of discovery
            sessions.
          </h1>

          <p className="text-lg leading-relaxed text-gray-800">
            We want to know who you are and what you&apos;re about so we can
            connect with your vision and needs. An in-depth understanding of
            your <strong>&lsquot;WHAT&rsquot;</strong>,{" "}
            <strong>&lsquot;WHY&rsquot;</strong> and{" "}
            <strong>&lsquot;HOW&rsquot;</strong>
            helps us to build strong and meaningful connections with your users.
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
      <div className="bg-orange-300 flex justify-between px-20 py-4">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[150px] mango text-black">BRAND</h1>
        </div>

        {/* Right side text */}
        <p className="text-5xl text-black self-end mb-16">
          We reimagine brands.
        </p>
      </div>
      <section className="flex gap-20 px-16 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col w-1/2">
          <p className="text-xl leading-relaxed">
            Authenticity and timelessness guide our approach when crafting brand
            solutions. Whether it&apos;s a rebrand, or we&apos;re building from
            scratch, we help redefine how brands are experienced and ensure
            business success.
          </p>

          {/* Button */}
          <button className="mt-12 mango bg-[#ff9140] text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all">
            EXPLORE BRAND WORK
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img src="/strategy_1.png" alt="strategy" className="mt-20 w-50" />
        </div>

        {/* Right column */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2">NAMING</h3>
            <p>
              We take our time to understand company goals and customer needs.
              We use those insights to choose a memorable name that communicates
              the mission to the audience.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2">VISUAL IDENTITY</h3>
            <p>
              We create memorable visual experiences. By understanding the
              audience, we create visual assets that feel authentic and
              trustworthy.
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2">MOTION DESIGN</h3>
            <p>
              We design audio, animated logos, and distinctive icons that
              enhance brand accessibility and connection.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#ff9140] flex justify-between px-20 py-4">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[150px] mango text-black">STRATEGY</h1>
        </div>

        {/* Right side text */}
        <p className="text-5xl text-black self-end mb-16">
          We reinvent blueprints.
        </p>
      </div>
      <section className="flex gap-20 px-16 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col w-1/2">
          <p className="text-xl leading-relaxed">
            Our approach to strategy aims to simplify complexities between
            people, what they want and what they pay attention to. We position
            brands to meet these desires, thereby, staying relevant and miles
            ahead of the competition.
          </p>

          {/* Button */}
          <button className="mt-12 mango bg-[#f16333] text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all">
            EXPLORE STRATEGY WORK
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>

          <img src="/strategy_3.png" alt="strategy" className="w-60 mt-24" />
        </div>

        {/* Right column */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">
              Communications Strategy
            </h3>
            <p>
              We devise communication strategies that align with brand goals and
              ensure the right message is reaching its intended audience.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">
              Verbal Identity
            </h3>
            <p>
              We enable brands to differentiate themselves as industry leaders
              by establishing a distinct identity and messaging.
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">Brand Strategy</h3>
            <p>
              We take a human-centred approach to ensure that brands
              authentically communicate their essence to their audience and
              stand out from the competition.
            </p>
          </div>

          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">
              Growth Strategy
            </h3>
            <p>
              Whether the goal is market share increase or product improvement,
              we develop and implement tailored growth plans by leveraging
              unique strengths and opportunities.
            </p>
          </div>

          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">
              Purpose and Positioning
            </h3>
            <p>
              We take a purpose-led approach to positioning. A good
              understanding of a brand&apos;s &lsquot;why&rsquot; enables us to
              seamlessly position them for industry leadership.
            </p>
          </div>
        </div>
      </section>
      <div className="bg-[#f16333] flex justify-between px-20 py-4">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[150px] mango text-black">STRATEGY</h1>
        </div>

        {/* Right side text */}
        <p className="text-5xl text-black self-end mb-16">
          We reinvent blueprints.
        </p>
      </div>
      <section className="flex gap-20 px-16 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col w-1/2">
          <p className="text-xl leading-relaxed">
            Our approach to strategy aims to simplify complexities between
            people, what they want and what they pay attention to. We position
            brands to meet these desires, thereby, staying relevant and miles
            ahead of the competition.
          </p>

          {/* Button */}
          <button className="mt-12 mango bg-[#f16333] text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all">
            EXPLORE STRATEGY WORK
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>

          <img src="/strategy_2.png" alt="strategy" className="w-60 mt-24" />
        </div>

        {/* Right column */}
        <div className="space-y-12">
          {/* Item 1 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">
              Communications Strategy
            </h3>
            <p>
              We devise communication strategies that align with brand goals and
              ensure the right message is reaching its intended audience.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">
              Verbal Identity
            </h3>
            <p>
              We enable brands to differentiate themselves as industry leaders
              by establishing a distinct identity and messaging.
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">Brand Strategy</h3>
            <p>
              We take a human-centred approach to ensure that brands
              authentically communicate their essence to their audience and
              stand out from the competition.
            </p>
          </div>

          <div className="border-b border-[#ff9140] pb-16">
            <h3 className="text-xl font-bold mb-2 uppercase">
              Growth Strategy
            </h3>
            <p>
              Whether the goal is market share increase or product improvement,
              we develop and implement tailored growth plans by leveraging
              unique strengths and opportunities.
            </p>
          </div>
        </div>
      </section>
      <p className="text-4xl uppercase px-24 leading-12 w-4/5">
        We are the creators of the brands everyone loves, the products that
        everyone can&apos;t leave, and the stories everyone remembers.
      </p>
      <p className="text-xl text-right px-24">
        Best part? We have fun while at it.
      </p>
      <Footer />
    </main>
  );
};

export default Services;
