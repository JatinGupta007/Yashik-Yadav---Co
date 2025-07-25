/* eslint-disable @next/next/no-img-element */

"use client";
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import SpecificService from "@/components/SpecificService";
import Link from "next/link";
import React, { useState } from "react";

const servicePageData = [
  {
    section_title: "Google Ads",
    section_subtitle: "Pay-Per-Click Advertising",
    heading: "Smart Advertising for Instant Visibility.",
    image_url: "/strategy_1.png",
    description:
      "Google Ads is the fastest way to get found - and we make every click count. From targeted campaigns in Jaipur to national lead generation, we help you reach the right people at the right time.",
    list_title: "Our PPC Expertise Includes",
    list_items: [
      "Search Ads, Display, Shopping, and Performance Max",
      "Ad Copywriting and Extension Strategy",
      "Advanced Audience Targeting",
      "Bid Strategy & Budget Optimization",
      "Conversion Tracking Setup",
      "Local PPC Campaigns for Clinics, Startups & Service Businesses",
      "Ongoing Campaign Testing and Reporting",
    ],
    usp_tile: "Why Partner With Us",
    usp_desc:
      "We&apos;re a certified Google Ads partner agency with over 10 years of campaign management experience. We deliver performance, not just impressions.",
    button_text: "Let&apos;s Build Your Campaign",
  },
  {
    section_title: "Social Media Marketing",
    section_subtitle: "Performance Marketing",
    heading: "Marketing That Delivers Revenue.",
    image_url: "/strategy_2.png",
    description:
      "Performance marketing isn&apos;t about likes - it’s about ROI. We help businesses scale revenue using integrated campaigns on Meta, Google, and beyond.",
    list_title: "What We Do",
    list_items: [
      "Funnel Design (TOFU, MOFU, BOFU)",
      "Meta Ads (Facebook, Instagram, Reels)",
      "Google Ads + YouTube Performance Campaigns",
      "Retargeting Campaigns for Abandoned Carts & Inquiries",
      "CRM + Automation Integrations (Saaro, GoHighLevel, etc.)",
      "Weekly Optimizations + ROAS Focused Scaling",
    ],
    usp_tile: "Results We Bring",
    usp_desc:
      "More leads, more purchases, and higher return on every rupee spent.",
    button_text: "Book a Growth Strategy Call",
  },
  {
    section_title: "Web Design",
    section_subtitle: "Website Design & Development",
    heading: "Visually Stunning. Technically Solid.",
    image_url: "/strategy_3.png",
    description:
      "Your website is your digital home - and we make it look and perform like your best salesperson. Whether you need a Shopify store, a WordPress site, or a custom portal, we deliver world-class performance with local impact.",
    list_title: "We Offer",
    list_items: [
      "Custom Website Design & Development",
      "Shopify, WordPress, Webflow, Custom CMS Solutions",
      "Fully Responsive Mobile-First Layouts",
      "SEO-Friendly Structure & Performance Optimizations",
      "Lead Capture Integrations (Forms, Chatbots, WhatsApp)",
      "Ecommerce Checkout + Payment Gateways",
    ],
    usp_tile: "Our Edge",
    usp_desc:
      "Design meets functionality - with aesthetics, UX, SEO, and speed built in. We don’t just build websites; we build lead machines.",
    button_text: "Get a Free Design Proposal",
  },
  {
    section_title: "Performance Marketing",
    section_subtitle: "Social Media Marketing",
    heading: "Make Your Brand the Talk of the Town.",
    image_url: "/strategy_1.png",
    description:
      "From building your online presence to driving real engagement and leads, our social media marketing services ensure your brand is seen, heard, and remembered.",
    list_title: "Our SMM Services:",
    list_items: [
      "Strategy Planning (Monthly/Quarterly)",
      "Instagram Reels & Facebook Video Creation",
      "Creative Storytelling Through Carousels & Infographics",
      "Audience Growth Campaigns (Organic + Paid)",
      "Instagram/Facebook Ads with Lead Funnels",
    ],
    usp_tile: "Why It Works",
    usp_desc:
      "We create content with purpose. With deep research into your industry and audience, we create thumb-stopping content that grows trust and engagement.",
    button_text: "Schedule Your Free Social Media Review",
  },
  {
    section_title: "Marketing Automation",
    section_subtitle: "",
    heading: "Convert More. Work Less",
    image_url: "/strategy_2.png",
    description:
      "Automate your marketing and focus on what matters. From lead nurturing to smart WhatsApp follow-ups, we automate every step of the customer journey.",
    list_title: "Key Features",
    list_items: [
      "CRM Setup and Automation (Zoho, GoHighLevel, HubSpot)",
      "WhatsApp Chatbot Flows and Broadcast Campaigns",
      "Email Automation (Drip Campaigns, Sequences)",
      "Lead Segmentation and Scoring",
      "Cart Abandonment Automation",
      "Integration With Website Forms and Ads",
    ],
    usp_tile: "Outcome",
    usp_desc:
      "Your team spends less time following up and more time closing. Let your systems do the heavy lifting.",
    button_text: "Start Automating Today",
  },
  {
    section_title: "Influencer & Content Marketing",
    section_subtitle: "",
    heading: "Authenticity That Sells",
    image_url: "/strategy_3.png",
    description:
      "In today’s digital landscape, word of mouth is everything. We connect brands with creators who influence purchase decisions.",
    list_title: "What’s Included",
    list_items: [
      "Influencer Sourcing (Niche, Location, Audience Match)",
      "Content Briefs & Deliverable Management",
      "Brand Collaborations with Nano to Macro Influencers",
      "Performance Reporting on Engagement & Conversions",
      "UGC (User-Generated Content) for Paid Campaigns",
    ],
    usp_tile: "Why Choose Us",
    usp_desc:
      "We handle everything - from shortlisting creators to campaign execution - while ensuring alignment with your brand goals.",
    button_text: "Launch Your Influencer Campaign",
  },
  {
    section_title: "Conversion Rate Optimization (CRO)",
    section_subtitle: "",
    heading: "From Visitors to Valuable Customers.",
    image_url: "/strategy_2.png",
    description:
      "Already getting traffic? Let us turn those visitors into paying customers through smart CRO strategies.",
    list_title: "We Optimize",
    list_items: [
      "Landing Pages & UX Flow",
      "Website Speed, Navigation, Trust Elements",
      "Checkout Process (for Ecommerce)",
      "Form Simplification + Mobile Optimization",
      "Split Testing & Heatmaps",
      "Scroll Depth + Session Replay Analysis",
    ],
    usp_tile: "Why CRO?",
    usp_desc:
      "Because every percentage improvement in conversions multiplies your revenue. We improve what already works – and fix what doesn’t.",
    button_text: "Start Your CRO Audit",
  },
  {
    section_title: "Analytics & Reporting",
    section_subtitle: "",
    heading: "Data That Drives Decisions.",
    image_url: "/strategy_1.png",
    description:
      "Stop guessing. Start scaling with custom dashboards that show exactly what&apos;s working and what&apos;s not.",
    list_title: "We Provide",
    list_items: [
      "GA4 Setup + GTM Configuration",
      "Custom Dashboards via Looker Studio",
      "Weekly + Monthly Performance Reports",
      "Goal Tracking (Leads, Sales, Scrolls, Form Fills)",
      "Attribution Models & Channel Comparisons",
    ],
    usp_tile: "Why Trust Us",
    usp_desc:
      "Our insights come with action. Every dashboard is built to fuel better business decisions.",
    button_text: "Request Dashboard Sample",
  },
  {
    section_title: "Online Reputation Management (ORM)",
    section_subtitle: "",
    heading: "Turn Reviews Into Revenue.",
    image_url: "/strategy_3.png",
    description:
      "In a digital-first world, your online reputation is your first impression. Let’s make it count.",
    list_title: "What’s Included",
    list_items: [
      "Review Management (Google, Justdial, Practo, Sulekha)",
      "Online PR (Articles, Local Citations, Brand Profiles)",
      "SEO for Personal Brands (Doctors, Founders)",
      "Negative Review Handling and Removal",
      "Sentiment Tracking and Brand Monitoring",
    ],
    usp_tile: "Why ORM Works",
    usp_desc:
      "People buy from people they trust. We help you build - and protect - that trust.",
    button_text: "Book Your Reputation Audit",
  },
];

const Services = () => {
  const [card, setCard] = useState("A");

  return (
    <main className="overflow-hidden">
      <Header />
      <Popup />
      {/* Hero Section */}
      <section className="lg:px-32 px-7 py-12">
        <div className="relative">
          <h1
            data-aos="flip-up"
            className="text-[100px] lg:text-[180px] mango text-center uppercase leading-22 lg:leading-40"
          >
            SEO That Brings You to the Top - Organically.
          </h1>

          <div className="absolute top-10 left-10">
            <img
              data-aos="fade-right"
              src="/services_logo.png"
              alt="line"
              className="w-30 lg:w-60"
            />
          </div>
        </div>

        <div className="flex flex-col lg:flex-row justify-between mt-6 gap-20">
          <div className="lg:w-1/2 order-2 lg:order-1">
            <h2
              className="text-[40px] uppercase leading-12 lg:mt-20 mb-6"
              data-aos="fade-left"
            >
              Our Comprehensive SEO Solutions:
            </h2>
            <ul
              className="bg-gray-200 p-6 space-y-2 list-disc pl-9"
              data-aos="fade-left"
              data-aos-delay="300"
            >
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
            <p
              className="text-lg lg:mb-26 mb-16 order-1 lg:order-2"
              data-aos="fade-right"
            >
              At Yashik Yadav & Co., we craft intelligent SEO strategies
              tailored for growing businesses in Jaipur. With over a decade of
              experience, we understand Google&apos;s ever-evolving algorithm,
              and we align our tactics with your business goals. Whether
              you&apos;re a clinic, ecommerce store, or local brand, our SEO
              services deliver consistent, long-term growth.
            </p>
            <div className="">
              <p
                className="text-[40px] uppercase leading-12 mb-4"
                data-aos="fade-right"
              >
                Why Our Clients <br />
                Love Us
              </p>
              <p className="tex-lg" data-aos="fade-right">
                Our strategies go beyond rankings - they drive traffic that
                converts. With a strong base in Jaipur, we deliver results with
                complete transparency, education, and performance tracking.
              </p>
              <Link href="/work">
                <button
                  data-aos="fade-right"
                  className="mt-10 mango bg-black text-white px-3 py-2 text-2xl md:px-6 md:py-4 md:text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95"
                >
                  EXPLORE BRAND WORK
                  <span className="ml-4 group-hover:translate-x-1 transition-transform">
                    ➜
                  </span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Process Section */}
      <section className="flex flex-col lg:flex-row lg:mx-24 mx-7 mb-10 mt-10">
        <div className="lg:w-1/2 bg-[#f2f7f6] p-10 mango" data-aos="fade-up">
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
          <div
            className="lg:w-1/2 bg-[#aed9e0] p-16 text-black"
            data-aos="fade-down"
          >
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
      {/* Services Section */}
      <section className="md:px-20 px-7 py-12 bg-gray-100">
        <h1 className="text-[60px] text-center lg:text-[100px] mango text-black">
          Our Services
        </h1>
        <p className="text-xl text-center lg:text-3xl text-black mb-10">
          We are the creators of the brands everyone loves, the products that
          everyone can&apos;t leave, and the stories everyone remembers.
        </p>
        {servicePageData.map((service, index) => (
          <SpecificService key={index} service={service} index={index} />
        ))}
      </section>
      {/* Closing the main section and adding footer */}
      <div data-aos="zoom-out" className="mb-10 lg:mt-10">
        <p className="text-2xl lg:text-4xl uppercase px-7 lg:px-24 lg:leading-12 lg:lg:w-4/5">
          We are the creators of the brands everyone loves, the products that
          everyone can&apos;t leave, and the stories everyone remembers.
        </p>
        <p data-aos="fade-up" className="lg:text-xl text-right lg:px-24">
          Best part? We have fun while at it.
        </p>
      </div>
      <Footer />
    </main>
  );
};

export default Services;
