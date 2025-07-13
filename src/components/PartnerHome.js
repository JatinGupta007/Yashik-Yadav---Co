import React from "react";
import Image from "next/image";

const PartnerHome = () => {
  return (
    <section className="flex-wrap" data-aos="flip-up">
      <h1
        className="text-center text-5xl mango uppercase m-8"
        data-aos="fade-up"
      >
        Your Growth Partner in Jaipur & Beyond
      </h1>

      <div className="px-8 flex flex-col justify-center items-center text-center lg:hidden space-y-10">
        <p className="text-2xl capatalize" data-aos="fade-right">
          Maintaining a remarkable 99% client retention rate
        </p>
        <Image src="/earth.png" height={200} width={450} alt="image" />
        <div data-aos="fade-up" data-aos-delay="600">
          <p className="text-2xl mb-5">
            We have done extraordinary work with companies in over
          </p>
          <p className="mango text-2xl leading-5">
            <span className="text-[150px] leading-34">5</span> <br />
            COUNTRIES
            <br /> AROUND THE WORLD
          </p>
        </div>
        <Image src="/map.png" height={100} width={450} alt="image" />
        <div data-aos="fade-down" data-aos-delay="800">
          <p className="text-2xl">
            Achieving an average ROAS uplift of{" "}
            <span className="text-3xl font-bold">4.3x</span> <br /> and helping
            them rethink everything and create real impact.
          </p>
        </div>
        <Image src="/city.png" height={100} width={450} alt="image" />
        <div className="w-full" data-aos="fade-left">
          <p className="text-2xl">Our Work Speaks Volumes</p>
          <p className="mango text-[100px]">180+</p>
          <p className="text-2xl">Projects executed</p>
        </div>
        <Image src="/decor.png" height={100} width={450} alt="image" />
      </div>

      <div className="hidden lg:flex flex-col w-full px-12">
        <div className="flex items-center space-x-5">
          <div className="w-[850px]">
            <p className="text-xl capatalize">
              Maintaining a remarkable 99% client retention rate
            </p>
          </div>
          <Image src="/line_1.png" height={80} width={100} alt="image" />
          <div className="w-[350px]">
            <p className="text-xl">
              We have done extraordinary work with companies in over
            </p>
          </div>
          <div className="">
            <p className="flex flex-col">
              <span className="mango text-[70px] ">5</span>{" "}
              <span className="text-3xl">COUNTRIES</span> AROUND THE WORLD
            </p>
          </div>
          <Image src="/line_3.png" height={150} width={100} alt="image" />
          <div className="w-[950px]">
            <p className="text-xl">
              Achieving an average ROAS uplift of{" "}
              <span className="text-3xl font-bold">4.3x</span> and helping them
              rethink everything and create real impact.
            </p>
          </div>
          <div>
            <Image src="/line_2.png" height={200} width={700} alt="image" />
          </div>
          <div className="w-[500px]">
            <p className="text-xl">Our Work Speaks Volumes</p>
            <p className="mango text-[60px]">
              <span className="text-[40px]"></span> <span>180+</span>
            </p>
          </div>
          <div className="w-[300px]">
            <p className="text-sm mt-9">
              <span className="text-xl">Projects executed </span>
            </p>
          </div>
        </div>
        <div className="flex items-center justify-around mt-20">
          <Image src="/earth.png" alt="earth" height={200} width={250} />
          <Image src="/map.png" alt="earth" height={200} width={250} />
          <Image src="/city.png" alt="earth" height={200} width={250} />
          <Image src="/decor.png" alt="earth" height={200} width={250} />
        </div>
      </div>
    </section>
  );
};

export default PartnerHome;
