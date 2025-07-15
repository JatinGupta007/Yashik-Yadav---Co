import React from "react";
import Image from "next/image";

const GrowthHome = () => {
  return (
    <section className="flex flex-col md:flex-row md:items-center justify-center md:gap-15 md:p-10 p-5">
      <div className="lg:space-y-20 md:space-y-10">
        <p className="lg:text-xl text-lg font-semibold mb-2">
          We help them win in
        </p>
        <h1
          className="lg:text-[200px] text-[100px] leading-none mango ml-5"
          data-aos="fade-up"
        >
          GROWTH
        </h1>
        <Image
          src="/photo-propel.webp" // Replace with your image in public/images/
          alt="Laptop User"
          width={400}
          height={300}
          className="rounded-xl hidden md:block"
          data-aos="fade-right"
          data-aos-delay="800"
        />
      </div>

      {/* Background text */}
      <div className="lg:mt-16">
        <h2
          className="lg:text-[200px] text-[100px] text-gray-300 mango ml-24 md:ml-0"
          data-aos="fade-up"
        >
          SPEED
        </h2>
      </div>

      {/* Bottom left image */}
      <div className="md:space-y-10">
        <Image
          src="/photo-speed.webp" // Replace with your image in public/images/
          alt="Chef Working"
          width={320}
          height={220}
          className="rounded-xl mt-8 lg:mt-16 hidden md:block"
          data-aos-delay="800"
          data-aos="fade-left"
        />
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        <br className="hidden md:block" />
        <br className="hidden lg:block" />
        <h2
          className="lg:text-[200px] text-[100px] leading-none mango ml-44 md:ml-0"
          data-aos="fade-up"
        >
          IMPACT
        </h2>
      </div>
    </section>
  );
};

export default GrowthHome;
