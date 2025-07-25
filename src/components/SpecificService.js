/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function SpecificService({ service, index }) {
  return (
    <main>
      <div
        data-aos="zoom-in"
        className="bg-yellow-300 flex flex-col lg:flex-row justify-between lg:px-20 px-7 lg:py-16 py-5"
      >
        {/* Left side with square and text */}
        <div className="flex items-center space-x-6">
          {/* Black Square */}
          <div className="w-12 h-12 bg-black"></div>
          <h1 className="text-[60px] lg:text-[100px] mango text-black">
            {service.section_title}
          </h1>
        </div>

        {/* Right side text */}
        <p className="text-xl lg:text-3xl text-black lg:self-end">
          {service.section_subtitle}
        </p>
      </div>
      {/* Service Content */}
      <section className="flex flex-col lg:flex-row gap-20 lg:px-16 px-7 py-16 bg-white text-black">
        {/* Left column */}
        <div className={`flex flex-col justify-start lg:w-4/5 ${index % 2 === 0 ? "order-1" : "order-2"}`}>
          <p className="text-3xl mb-4" data-aos="flip-right">
            {service.usp_tile}
          </p>
          <p className="text-xl leading-relaxed" data-aos="flip-right">
            {service.usp_desc}
          </p>

          {/* Button */}
          {service.button_text && (
            <button
              data-aos="flip-right"
              className="mt-8 mango bg-black text-white px-3 py-2 text-2xl md:px-6 md:py-4 md:text-4xl flex items-center justify-between w-fit group hover:bg-gray-900 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95 uppercase"
            >
              {service.button_text}
              <span className="ml-4 group-hover:translate-x-1 transition-transform">
                ➜
              </span>
            </button>
          )}
          <img
            src={service.image_url || "/strategy_1.png"}
            alt="strategy"
            className="w-80 pl-30 mt-5 -ml-16"
            data-aos="flip-right"
          />
        </div>

        {/* Right column */}
        <div className={`space-y-8 ${index % 2 === 0 ? "order-2" : "order-1"}`}>
          {/* Item 1 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-3xl font-bold mb-5" data-aos="flip-left">
              {service.heading}
            </h3>
            <p data-aos="flip-right">{service.description}</p>
          </div>

          {/* Item 2 */}
          <div className="border-b border-yellow-300 pb-8">
            <h3 className="text-xl font-bold mb-4" data-aos="flip-right">
              {service.list_title}
            </h3>
            <ul className="space-y-2">
              {Array.isArray(service.list_items) &&
                service.list_items.map((item, idx) => (
                  <li
                    key={idx}
                    data-aos="fade-left"
                    data-aos-delay={200 + idx * 100}
                  >
                    {item}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}
