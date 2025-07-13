import React from "react";
import Image from "next/image";

const AboutHome = () => {
  return (
    <section
      className="bg-white text-center lg:px-10 lg:py-10 mb-16 lg:mb-0"
      data-aos="fade-up"
    >
      <h2 className="text-xl mb-10 text-center">
        Our Partners & Certifications
      </h2>
      <h1
        className="lg:text-[150px] text-[70px] leading-18 lg:leading-36 mb-8 mango uppercase px-20"
        data-aos="fade-up"
      >
        Trusted by technology leaders powering global digital growth
      </h1>

      <div
        className="flex flex-col md:flex-row justify-center items-center flex-wrap lg:flex-nowrap lg:mt-18 font-serif text-2xl mb-10"
        data-aos="flip-up"
      >
        <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
          <Image
            src="/google-icon.png"
            alt="Illustration 1"
            width={20}
            height={19}
            className="w-12 h-10"
          />
          Google
        </div>

        <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
          <Image
            src="/meta-icon.webp"
            alt="Illustration 1"
            width={20}
            height={19}
            className="w-12 h-10"
          />
          Meta
        </div>

        <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
          <Image
            src="/shopify-icon.png"
            alt="Illustration 1"
            width={20}
            height={19}
            className="w-12 h-10"
          />
          Shopify
        </div>

        <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
          <Image
            src="/hostinger-icon.webp"
            alt="Illustration 1"
            width={20}
            height={19}
            className="w-12 h-10"
          />
          Hostinger
        </div>

        <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
          <Image
            src="/wordpress-icon.webp"
            alt="Illustration 1"
            width={20}
            height={19}
            className="w-12 h-10"
          />
          WordPress
        </div>

        <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 w-60 m-3 lg:m-0">
          <Image
            src="/clutch-icon.webp"
            alt="Illustration 1"
            width={20}
            height={19}
            className="w-12 h-10"
          />
          Clutch Top
        </div>
      </div>
    </section>
  );
};

export default AboutHome;
