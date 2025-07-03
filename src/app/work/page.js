"use client";

import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Popup from "@/components/popup";
import { Navbar } from "@/components/Navbar";

const Work = () => {
  const [visibleCard, setVisibleCard] = useState("A");
  const pathname = usePathname();

  useEffect(() => {
      if (pathname === "/about") {
        setVisibleCard("B");
      } else if (pathname === "/work") {
        setVisibleCard("C");
      } else if (pathname === "/services") {
        setVisibleCard("D");
      } else{
        setVisibleCard("A")
      }
    }, [pathname])
  
    const toVisibleCard = () => {
      if (pathname === "/about") {
        setVisibleCard("B");
      } else if (pathname === "/work") {
        setVisibleCard("C");
      } else if (pathname === "/services") {
        setVisibleCard("D");
      } else {
        setVisibleCard("A");
      }
    }

  return (
    <main>
      <Navbar />
      <Popup />
      <section className="flex border-b border-[#ff9140] gap-26 m-16 p-5">
        <div className="">
          <h1 className="text-[200px] mango">OUR WORK</h1>
          <div className="flex gap-10 text-5xl mango text-[#f16333]">
            <a href="#">ALL PROJECTS</a>
            <a href="#">STARTEGY</a>
            <a href="#">BRAND</a>
            <a href="#">DIGITAL</a>
          </div>
        </div>
        <p className="w-1/3 text-lg mt-14">
          For almost a decade, we&apos;ve partnered with some of the most
          audacious companies across a range of industries. From rethinking food
          delivery to enabling financial accessibility to reimagining the future
          of energy on a continent.
        </p>
      </section>

      <section className="px-16 mt-20">
        <Image
          src="/kele-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[80px] leading-none mango">KELE</h1>
            <p className="text-xl mt-2">
              A Simple Approach To Financial Accessibility
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
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
          className="mt-14"
          src="/autograph-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[80px] leading-none mango uppercase">
              autograph
            </h1>
            <p className="text-xl mt-2">
              Making a mark in Africa’s stationery market
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
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
          className="mt-14"
          src="/propel-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[80px] leading-none mango">PROPEL</h1>
            <p className="text-xl mt-2">Propeling the future of work</p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
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

        <div className="bg-[url(/dass.webp)] w-[1200px] h-[500px] bg-cover group">
          <div className="hidden group-hover:flex h-[500px] justify-center items-center bg-black opacity-64">
            <p className="text-white mango text-8xl">COMING SOON</p>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[80px] leading-none mango">ADDIDAS</h1>
            <p className="text-xl mt-2">
              Localising a digital brand for impact
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
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

        <div className="bg-[url(/odla-cover.webp)] w-[1200px] h-[500px] bg-cover group">
          <div className="hidden group-hover:flex h-[500px] justify-center items-center bg-black opacity-64">
            <p className="text-white mango text-8xl">COMING SOON</p>
          </div>
        </div>
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[80px] leading-none mango">ODLA</h1>
            <p className="text-xl mt-2">
              Achieving digital transformation for brave business leaders
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
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
