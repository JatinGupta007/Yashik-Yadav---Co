/* eslint-disable @next/next/no-img-element */

"use client";
import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import React, { useState } from "react";

const servicePageData = [
  {
    section_title: "Google Ads",
    section_subtitle: "Pay-Per-Click Advertising",
    heading: "Smart Advertising for Instant Visibility.",
    description:
      "Google Ads is the fastest way to get found — and we make every click count. From targeted campaigns in Jaipur to national lead generation, we help you reach the right people at the right time.",
    list_title: "Our PPC Expertise Includes",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
  {
    section_title: "",
    section_subtitle: "",
    heading: "",
    description: "",
    list_title: "",
    list_items: "",
    usp_tile: "",
    usp_desc: "",
    button_text: "",
  },
];

const Services = () => {
  const [card, setCard] = useState("A");

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Popup />
      <section className="lg:px-32 px-7 py-12">
        <div className="relative">
          <h1 className="text-[100px] lg:text-[180px] mango text-center uppercase leading-22 lg:leading-40">
            SEO That Brings You to the Top - Organically.
          </h1>

          <div className="absolute top-10 left-10">
            <img src="/services_logo.png" alt="line" className="w-30 lg:w-60" />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-6 gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2 className="text-[40px] uppercase leading-12 lg:mt-20 mb-6">
              Our Comprehensive SEO Solutions:
            </h2>
            <ul className="bg-gray-200 p-6 space-y-2 list-disc pl-9">
              <li>Deep Keyword Research with Local & Buyer Intent</li>
              <li>Technical SEO (Core Web Vitals, Speed, Mobile Usability)</li>
              <li>On-Page Optimization (Tags, Metadata, Internal Linking)</li>
              <li>Content Strategy & Blogging</li>
              <li>Local SEO (GMB Setup, NAP Consistency, Map Rankings)</li>
              <li>SEO for Healthcare, Real Estate, and Ecommerce Niches</li>
              <li>White Hat Link Building</li>
              <li>Monthly Performance Reports with Recommendations</li>
            </ul>
          </div>
          <div className="lg:w-1/2">
            <p className="text-lg lg:mb-26 mb-16 order-1 lg:order-2">
              At Yashik Yadav & Co., we craft intelligent SEO strategies
              tailored for growing businesses in Jaipur. With over a decade of
              experience, we understand Google&apos;s ever-evolving algorithm,
              and we align our tactics with your business goals. Whether
              you&apos;re a clinic, ecommerce store, or local brand, our SEO
              services deliver consistent, long-term growth.
            </p>
            <div className="">
              <p className="text-[40px] uppercase leading-12 mb-4">
                Why Our Clients <br />
                Love Us
              </p>
              <p className="tex-lg">
                Our strategies go beyond rankings — they drive traffic that
                converts. With a strong base in Jaipur, we deliver results with
                complete transparency, education, and performance tracking.
              </p>
              <button className="mt-10 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all">
                EXPLORE BRAND WORK
                <span className="ml-4 group-hover:translate-x-1 transition-transform">
                  ➜
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col lg:flex-row lg:mx-24 mx-7 mb-10 mt-10">
        <div className="lg:w-1/2 bg-[#f2f7f6] p-10 mango">
          <ul className="text-[4rem] tracking-tight">
            <li
              className={`${
                card === "A" ? "text-black" : "text-gray-300"
              } flex items-center justify-between border-b border-gray-200 py-3`}
              onClick={() => setCard("A")}
            >
              DISCOVERY
              <span
                className={`${
                  card === "A" ? "inline" : "hidden"
                } ml-4 text-6xl font-bold`}
              >
                ➔
              </span>
            </li>
            <li
              className={`${
                card === "B" ? "text-black" : "text-gray-300"
              } flex items-center justify-between border-b border-gray-200 pt-6 pb-4`}
              onClick={() => setCard("B")}
            >
              DEFINITION
              <span
                className={`${
                  card === "B" ? "inline" : "hidden"
                } ml-4  text-6xl font-bold`}
              >
                ➔
              </span>
            </li>
            <li
              className={`${
                card === "C" ? "text-black" : "text-gray-300"
              } flex items-center justify-between border-b border-gray-200 pt-6 pb-4`}
              onClick={() => setCard("C")}
            >
              IDEATION/EXECUTION
              <span
                className={`${
                  card === "C" ? "inline" : "hidden"
                } ml-4 text-6xl font-bold`}
              >
                ➔
              </span>
            </li>
            <li
              className={`${
                card === "D" ? "text-black" : "text-gray-300"
              } flex items-center justify-between border-b border-gray-200 pt-6 pb-4`}
              onClick={() => setCard("D")}
            >
              DELIVERY
              <span
                className={`${
                  card === "D" ? "inline" : "hidden"
                } ml-4 text-6xl font-bold`}
              >
                ➔
              </span>
            </li>
            <li
              className={`${
                card === "E" ? "text-black" : "text-gray-300"
              } flex items-center justify-between border-b border-gray-200 pt-6 pb-4`}
              onClick={() => setCard("E")}
            >
              IMPACT MEASURING
              <span
                className={`${
                  card === "E" ? "inline" : "hidden"
                } ml-4 text-6xl font-bold`}
              >
                ➔
              </span>
            </li>
            <li
              className={`${
                card === "F" ? "text-black" : "text-gray-300"
              } flex items-center justify-between border-b border-gray-200 pt-6 pb-4`}
              onClick={() => setCard("F")}
            >
              CONTINOUS PARTNERSHIP
              <span
                className={`${
                  card === "F" ? "inline" : "hidden"
                } ml-4 text-6xl font-bold`}
              >
                ➔
              </span>
            </li>
          </ul>
        </div>

        {card === "A" && (
          <div className="lg:w-1/2 bg-[#aed9e0] p-16 text-black">
            <div className="flex space-x-4 mb-6">
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div key={i} className="w-[100px] h-2 bg-white"></div>
                ))}
            </div>
            <h1 className="text-3xl font-medium leading-9 mb-8">
              We begin by spending quality time with you in a series of
              discovery sessions.
            </h1>

            <p className="text-lg leading-relaxed text-gray-800">
              We take time to understand who you are, your business goals, and
              your target audience. Our discovery sessions help us gather deep
              insights into your brand purpose, buyer journey, and market
              landscape. This sets the foundation for an SEO strategy that
              aligns with your business vision and speaks directly to your
              customers’ needs.
            </p>
            <img
              src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
              alt="image"
              className="h-90 w-full mt-16"
            />
          </div>
        )}

        {card === "B" && (
          <div className="lg:w-1/2 bg-purple-300 p-16 text-black">
            <div className="flex space-x-4 mb-6">
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div key={i} className="w-[100px] h-2 bg-white"></div>
                ))}
            </div>
            <h1 className="text-3xl font-medium leading-9 mb-8">
              Clear goals, clear wins.
            </h1>

            <p className="text-lg leading-relaxed text-gray-800">
              Once we’ve understood your vision, we move to defining the pillars
              of your SEO strategy. We set clear KPIs (Key Performance
              Indicators), segment your audience by behavior and search intent,
              and group keywords into meaningful clusters. This step ensures
              that every move we make is aligned with your business objectives,
              target geography, and conversion funnel. With clarity in goals,
              your SEO journey becomes measurable and focused from Day 1.
            </p>
            <img
              src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
              alt="image"
              className="h-90 w-full mt-16"
            />
          </div>
        )}

        {card === "C" && (
          <div className="lg:w-1/2 bg-[#ffcbb0] p-16 text-black">
            <div className="flex space-x-4 mb-6">
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div key={i} className="w-[100px] h-2 bg-white"></div>
                ))}
            </div>
            <h1 className="text-3xl font-medium leading-9 mb-8">
              Bringing strategy to life.
            </h1>

            <p className="text-lg leading-relaxed text-gray-800">
              Here’s where ideas meet action. Based on our research, we build a
              tailored SEO roadmap - including a content calendar, technical
              fixes, internal linking strategy, and authority building
              techniques. Our team handles on-page optimization, content
              creation, GMB listings, and performance-ready site structuring.
              Every task is done with intent - to boost organic reach,
              visibility, and user experience.
            </p>
            <img
              src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
              alt="image"
              className="h-90 w-full mt-16"
            />
          </div>
        )}

        {card === "D" && (
          <div className="lg:w-1/2 bg-pink-300 p-16 text-black">
            <div className="flex space-x-4 mb-6">
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div key={i} className="w-[100px] h-2 bg-white"></div>
                ))}
            </div>
            <h1 className="text-3xl font-medium leading-9 mb-8">
              Bringing it live with perfection
            </h1>

            <p className="text-lg leading-relaxed text-gray-800">
              Once the foundation is set, we begin the full-scale execution
              across your website and digital assets. All technical
              implementations, meta-tag updates, structured data, and keyword
              placements go live. We don&apos;t just “deliver” -we test,
              optimize, and fine-tune as we go. Our approach ensures minimal
              friction, faster indexing, and immediate improvement in
              crawlability and page health.
            </p>
            <img
              src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
              alt="image"
              className="h-90 w-full mt-16"
            />
          </div>
        )}

        {card === "E" && (
          <div className="lg:w-1/2 bg-amber-500 p-16 text-black">
            <div className="flex space-x-4 mb-6">
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div key={i} className="w-[100px] h-2 bg-white"></div>
                ))}
            </div>
            <h1 className="text-3xl font-medium leading-9 mb-8">
              Tracking what matters.
            </h1>

            <p className="text-lg leading-relaxed text-gray-800">
              What’s the point of SEO if you can’t measure results? We provide
              comprehensive performance tracking using tools like Google
              Analytics, Search Console, SEMrush, and others. We monitor keyword
              movements, CTRs, impressions, leads generated, bounce rates, and
              more. Our monthly reports give you real data, clear insights, and
              actionable recommendations - so you always know what’s working.
            </p>
            <img
              src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
              alt="image"
              className="h-90 w-full mt-16"
            />
          </div>
        )}

        {card === "F" && (
          <div className="lg:w-1/2 bg-sky-400 p-16 text-black">
            <div className="flex space-x-4 mb-6">
              {Array(6)
                .fill()
                .map((_, i) => (
                  <div key={i} className="w-[100px] h-2 bg-white"></div>
                ))}
            </div>
            <h1 className="text-3xl font-medium leading-9 mb-8">
              We grow as you grow
            </h1>

            <p className="text-lg leading-relaxed text-gray-800">
              SEO is not a one-time project - it&apos;s a long-term growth game.
              Even after execution and reporting, we stick around to help you
              scale what&apos;s working, fix what’s not, and explore new keyword
              opportunities as your business evolves. Our team acts as an
              extended digital partner - keeping your brand visible,
              competitive, and ahead of the algorithm curve
            </p>
            <img
              src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
              alt="image"
              className="h-90 w-full mt-16"
            />
          </div>
        )}
      </section>
      <div className="bg-yellow-300 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-16 py-5">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black">
            Google Ads
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end">
          Pay-Per-Click Advertising
        </p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 lg:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start lg:w-4/5">
          <p className="text-3xl mb-4">Why Partner With Us</p>
          <p className="text-xl leading-relaxed">
            We&apos;re a certified Google Ads partner agency with over 10 years
            of campaign management experience. We deliver performance, not just
            impressions.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Let’s Build Your Campaign
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_1.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-3xl font-bold mb-5">
              Smart Advertising for Instant Visibility.
            </h3>
            <p>
              Google Ads is the fastest way to get found - and we make every
              click count. From targeted campaigns in Jaipur to national lead
              generation, we help you reach the right people at the right time.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-xl font-bold mb-4">
              Our PPC Expertise Includes
            </h3>
            <ul className="space-y-2">
              <li>Search Ads, Display, Shopping, and Performance Max </li>
              <li>Ad Copywriting and Extension Strategy</li>
              <li>Advanced Audience Targeting</li>
              <li>Bid Strategy & Budget Optimization </li>
              <li>Conversion Tracking Setup</li>
              <li>
                Local PPC Campaigns for Clinics, Startups & Service Businesses
              </li>
              <li>Ongoing Campaign Testing and Reporting</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-pink-300 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-28 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black leading-14">
            Social Media Marketing
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-3xl text-black self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-pink-300 pb-8">
            <h3 className="text-3xl font-bold mb-5">
              Marketing That Delivers Revenue.
            </h3>
            <p>
              Performance marketing isn&apos;t about likes - it’s about ROI. We
              help businesses scale revenue using integrated campaigns on Meta,
              Google, and beyond.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-pink-300 pb-8">
            <h3 className="text-xl font-bold mb-4">What We Do</h3>
            <ul className="space-y-2">
              <li>Funnel Design (TOFU, MOFU, BOFU)</li>
              <li>Meta Ads (Facebook, Instagram, Reels)</li>
              <li>Google Ads + YouTube Performance Campaigns</li>
              <li>Retargeting Campaigns for Abandoned Carts & Inquiries</li>
              <li>CRM + Automation Integrations (Saaro, GoHighLevel, etc.)</li>
              <li>Weekly Optimizations + ROAS Focused Scaling</li>
            </ul>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-start w-4/5">
          <p className="text-3xl mb-4">Results We Bring</p>
          <p className="text-xl leading-relaxed">
            More leads, more purchases, and higher return on every rupee spent.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Book a Growth Strategy Call
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_2.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>
      </section>

      <div className="bg-purple-300 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-16 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black">
            Web Design
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end">
          Website Design & Development
        </p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 lg:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start">
          <p className="text-3xl mb-4">Our Edge</p>
          <p className="text-xl leading-relaxed">
            Design meets functionality - with aesthetics, UX, SEO, and speed
            built in. We don’t just build websites; we build lead machines.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Get a Free Design Proposal
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_3.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-purple-400 pb-8">
            <h3 className="text-3xl font-bold mb-5">
              Visually Stunning. Technically Solid.
            </h3>
            <p>
              Your website is your digital home - and we make it look and
              perform like your best salesperson. Whether you need a Shopify
              store, a WordPress site, or a custom portal, we deliver
              world-class performance with local impact.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-purple-400 pb-8">
            <h3 className="text-xl font-bold mb-4">We Offer</h3>
            <ul className="space-y-2">
              <li>Custom Website Design & Development </li>
              <li>Shopify, WordPress, Webflow, Custom CMS Solutions</li>
              <li>Fully Responsive Mobile-First Layouts </li>
              <li>SEO-Friendly Structure & Performance Optimizations</li>
              <li>Lead Capture Integrations (Forms, Chatbots, WhatsApp)</li>
              <li>Ecommerce Checkout + Payment Gateways</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-gray-400 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-28 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black leading-14">
            Performance Marketing
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-3xl text-black self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-gray-400 pb-8">
            <h3 className="text-3xl font-bold mb-5">
              Make Your Brand the Talk of the Town.
            </h3>
            <p>
              From building your online presence to driving real engagement and
              leads, our social media marketing services ensure your brand is
              seen, heard, and remembered.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-gray-400 pb-8">
            <h3 className="text-xl font-bold mb-4">Our SMM Services:</h3>
            <ul className="space-y-2">
              <li>Strategy Planning (Monthly/Quarterly)</li>
              <li>Instagram Reels & Facebook Video Creation</li>
              <li>Creative Storytelling Through Carousels & Infographics</li>
              <li>Audience Growth Campaigns (Organic + Paid)</li>
              <li>Instagram/Facebook Ads with Lead Funnels</li>
              <li>Instagram/Facebook Ads with Lead Funnels</li>
            </ul>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-start w-4/5">
          <p className="text-3xl mb-4">Why It Works</p>
          <p className="text-xl leading-relaxed">
            We create content with purpose. With deep research into your
            industry and audience, we create thumb-stopping content that grows
            trust and engagement.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Schedule Your Free Social Media Review
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_1.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>
      </section>

      <div className="bg-green-500 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-28 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black leading-14">
            Marketing Automation
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-3xl text-black self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start w-4/5">
          <p className="text-3xl mb-4">Outcome</p>
          <p className="text-xl leading-relaxed">
            Your team spends less time following up and more time closing. Let
            your systems do the heavy lifting.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Start Automating Today
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_2.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-green-500 pb-8">
            <h3 className="text-3xl font-bold mb-5">Convert More. Work Less</h3>
            <p>
              Automate your marketing and focus on what matters. From lead
              nurturing to smart WhatsApp follow-ups, we automate every step of
              the customer journey.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-green-500 pb-8">
            <h3 className="text-xl font-bold mb-4">Key Features</h3>
            <ul className="space-y-2">
              <li>CRM Setup and Automation (Zoho, GoHighLevel, HubSpot)</li>
              <li>WhatsApp Chatbot Flows and Broadcast Campaigns</li>
              <li>Email Automation (Drip Campaigns, Sequences)</li>
              <li>Lead Segmentation and Scoring</li>
              <li>Cart Abandonment Automation</li>
              <li>Integration With Website Forms and Ads</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-sky-200 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-28 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black leading-14">
            Influencer & Content Marketing
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-sky-400 pb-8">
            <h3 className="text-3xl font-bold mb-5">Authenticity That Sells</h3>
            <p>
              In today’s digital landscape, word of mouth is everything. We
              connect brands with creators who influence purchase decisions.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-sky-400 pb-8">
            <h3 className="text-xl font-bold mb-4">What’s Included</h3>
            <ul className="space-y-2">
              <li>Influencer Sourcing (Niche, Location, Audience Match)</li>
              <li>Content Briefs & Deliverable Management</li>
              <li>Brand Collaborations with Nano to Macro Influencers</li>
              <li>Performance Reporting on Engagement & Conversions</li>
              <li>UGC (User-Generated Content) for Paid Campaigns</li>
            </ul>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-start w-4/5">
          <p className="text-3xl mb-4">Why Choose Us</p>
          <p className="text-xl leading-relaxed">
            We handle everything - from shortlisting creators to campaign
            execution - while ensuring alignment with your brand goals
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Launch Your Influencer Campaign
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_3.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>
      </section>

      <div className="bg-orange-300 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-28 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black leading-14">
            Conversion Rate Optimization (CRO)
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start w-4/5">
          <p className="text-3xl mb-4">Why CRO?</p>
          <p className="text-xl leading-relaxed">
            Because every percentage improvement in conversions multiplies your
            revenue. We improve what already works - and fix what doesn’t.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Start Your CRO Audit
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_2.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-[#ff9140] pb-8">
            <h3 className="text-3xl font-bold mb-5">
              From Visitors to Valuable Customers.
            </h3>
            <p>
              Already getting traffic? Let us turn those visitors into paying
              customers through smart CRO strategies.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-[#ff9140] pb-8">
            <h3 className="text-xl font-bold mb-4">We Optimize</h3>
            <ul className="space-y-2">
              <li>Landing Pages & UX Flow</li>
              <li>Website Speed, Navigation, Trust Elements</li>
              <li>Checkout Process (for Ecommerce)</li>
              <li>Form Simplification + Mobile Optimization</li>
              <li>Split Testing & Heatmaps</li>
              <li>
                Scroll Depth + Session Replay AnalysisIntegration With Website
                Forms and Ads
              </li>
            </ul>
          </div>
        </div>
      </section>

      <div className="bg-amber-200 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-28 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black leading-14">
            Analytics & Reporting
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-amber-300 pb-8">
            <h3 className="text-3xl font-bold mb-5">
              Data That Drives Decisions.
            </h3>
            <p>
              Stop guessing. Start scaling with custom dashboards that show
              exactly what&apos;s working and what&apos;s not.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-amber-300 pb-8">
            <h3 className="text-xl font-bold mb-4">We Provide</h3>
            <ul className="space-y-2">
              <li>GA4 Setup + GTM Configuration</li>
              <li>Custom Dashboards via Looker Studio</li>
              <li>Weekly + Monthly Performance Reports</li>
              <li>Goal Tracking (Leads, Sales, Scrolls, Form Fills)</li>
              <li>Attribution Models & Channel Comparisons</li>
            </ul>
          </div>
        </div>
        {/* Right column */}
        <div className="flex flex-col justify-start w-4/5">
          <p className="text-3xl mb-4">Why Trust Us</p>
          <p className="text-xl leading-relaxed">
            Our insights come with action. Every dashboard is built to fuel
            better business decisions.
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Request Dashboard Sample
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_1.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>
      </section>

      <div className="bg-blue-900 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-28 py-6">
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-white leading-14">
            Online Reputation Management (ORM)
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end"></p>
      </div>

      <section className="flex flex-col lg:flex-row gap-20 md:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className="flex flex-col justify-start w-4/5">
          <p className="text-3xl mb-4">Why ORM Works</p>
          <p className="text-xl leading-relaxed">
            People buy from people they trust. We help you build - and protect -
            that trust.{" "}
          </p>

          {/* Button */}
          <button className="mt-8 mango bg-black text-white px-6 py-4 text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all uppercase">
            Book Your Reputation Audit
            <span className="ml-4 group-hover:translate-x-1 transition-transform">
              ➜
            </span>
          </button>
          <img
            src="/strategy_3.png"
            alt="strategy"
            className="w-50 self-center mt-5 -ml-16"
          />
        </div>

        {/* Right column */}
        <div className="space-y-8">
          {/* Item 1 */}
          <div className="border-b border-blue-900 pb-8">
            <h3 className="text-3xl font-bold mb-5">
              Turn Reviews Into Revenue.
            </h3>
            <p>
              In a digital-first world, your online reputation is your first
              impression. Let’s make it count.
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-blue-900 pb-8">
            <h3 className="text-xl font-bold mb-4">What’s Included</h3>
            <ul className="space-y-2">
              <li>Review Management (Google, Justdial, Practo, Sulekha)</li>
              <li>Online PR (Articles, Local Citations, Brand Profiles)</li>
              <li>SEO for Personal Brands (Doctors, Founders)</li>
              <li>Negative Review Handling and Removal</li>
              <li>Sentiment Tracking and Brand Monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      <div className="mb-10 lg:mt-10">
        <p className="text-2xl lg:text-4xl uppercase px-7 lg:px-24 lg:leading-12 lg:w-4/5">
          We are the creators of the brands everyone loves, the products that
          everyone can&apos;t leave, and the stories everyone remembers.
        </p>
        <p className="lg:text-xl text-right lg:px-24">
          Best part? We have fun while at it.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Services;
