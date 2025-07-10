

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";


import Popup from "@/components/popup";
import { Navbar } from "@/components/Navbar";

const Work = () => {
  
  return (
    <main className="overflow-hidden">
      <Navbar />
      <Popup />
      <section className="flex flex-col lg:flex-row justify-between lg:mx-16 mx-7">
        <div className="">
          <h1 className="text-[100px] lg:text-[200px] mango">OUR WORK</h1>
        </div>
        <p className="lg:w-1/3 text-lg lg:mt-14 mb-16 lg:mb-0">
          For almost a decade, we&apos;ve partnered with some of the most
          audacious companies across a range of industries. From rethinking food
          delivery to enabling financial accessibility to reimagining the future
          of energy on a continent.
        </p>
      </section>

      <div className="flex lg:gap-10 gap-5 text-3xl lg:text-5xl mango text-[#f16333]  border-b border-[#ff9140] mx-7 lg:mx-16 pb-6 lg:pb-10">
        <a href="#">ALL PROJECTS</a>
        <a href="#">STARTEGY</a>
        <a href="#">BRAND</a>
        <a href="#">DIGITAL</a>
      </div>

      <section className="lg:px-16 px-7 lg:mt-20 mt-10">
        <Image
          src="/kele-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
          className="w-full h-[200px] lg:h-full"
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <Link
              href="/work/projects"
              className="text-[50px] lg:text-[80px] leading-none mango"
            >
              KELE
            </Link>
            <p className="lg:text-xl mt-2">
              A Simple Approach To Financial Accessibility
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs lg:text-xl">
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              APP DESIGN
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              APP DEVELOPMENT
            </span>
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
              DIGITAL TRANSFORMATION
            </span>
          </div>
        </div>

        <Image
          className="mt-14 w-full h-[200px] lg:h-full"
          src="/autograph-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <Link
              href="/work/projects"
              className="text-[50px] lg:text-[80px] leading-none mango"
            >
              autograph
            </Link>
            <p className="lg:text-xl mt-2">
              Making a mark in Africa&apos;s stationery market
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs lg:text-xl">
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
              Naming
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              BRAND STARTEGY
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
              VERBAL IDENTITY
            </span>
          </div>
        </div>

        <Image
          className="mt-14 w-full h-[200px] lg:h-full"
          src="/propel-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <Link
              href="/work/projects"
              className="ttext-[50px] lg:text-[80px] leading-none mango"
            >
              PROPEL
            </Link>
            <p className="lg:text-xl mt-2">Propeling the future of work</p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs lg:text-xl">
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
              BRAND STARTEGY
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              COMMUNICATION DESIGN
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              WEBSITE DESIGN
            </span>
          </div>
        </div>

        <Image
          className="mt-14 w-full h-[200px] lg:h-full"
          src="/dass.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[50px] lg:text-[80px] leading-none mango">
              ADDIDAS
            </h1>
            <p className="lg:text-xl mt-2">
              Localising a digital brand for impact
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs lg:text-xl">
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
              WEB DESIGN
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              WEB DEVELOPMENT
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              E-COMMERCE
            </span>
          </div>
        </div>

        <Image
          className="mt-14 w-full h-[200px] lg:h-full"
          src="/odla-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />

        {/* <div className="bg-[url(/odla-cover.webp)] w-full h-[500px] bg-cover group">
          <div className="hidden group-hover:flex h-[500px] justify-center items-center bg-black opacity-64">
            <p className="text-white mango text-8xl">COMING SOON</p>
          </div>
        </div> */}
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[50px] lg:text-[80px] leading-none mango">
              ODLA
            </h1>
            <p className="lg:text-xl mt-2">
              Achieving digital transformation for brave business leaders
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs lg:text-xl">
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              BRAND STARTEGY
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              BRANDING
            </span>
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
              WEBSITE DESIGN
            </span>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Work;
