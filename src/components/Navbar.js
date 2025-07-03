"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navbar = () => {
  //const { link_1, link_2, link_3, link_4 } = navLinks;
  const [visibleCard, setVisibleCard] = useState(null);
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
    <header className="fixed top-0 flex justify-between items-center md:px-3  min-w-screen backdrop-blur-lg z-10">
      <div className="flex items-center space-x-2">
        <Link href="/">
          <Image
            src="/justlogo.png"
            alt="logo"
            width={100}
            height={40}
            className="md:w-40 h-28"
          />
        </Link>
      </div>

      <h2 className="md:text-4xl text-lg uppercase mango tracking-wider">Yashik Yadav & Co</h2>

      {/*<nav className="font-semibold hidden ">
        <Link
          href="#"
          className="border-b border-r border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_1}
        </Link>
        <Link
          href="#"
          className="border-b border-r border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_2}
        </Link>
        <Link
          href="#"
          className="border-b border-r border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_3}
        </Link>
        <Link
          href="#"
          className="border-b border-gray-300 text-sm p-3 px-5 hover:opacity-70"
        >
          {link_4}
        </Link>
      </nav>
      */}

      <Sheet>
        <SheetTrigger>
          <div className="flex items-center md:space-x-4 space-x-3 mr-8">
            <p className="font-normal text-sm md:text-lg">Menu</p>
            {/* The black shape on right */}
            <Image
              src="https://wearecheck.co/assets/images/menu-icon.svg"
              alt="logo"
              height={80}
              width={40}
              className="md:w-16 md:h-30"
            />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-transparent backdrop-blur px-14 py-2 min-w-4/5">
          <SheetHeader className="text-white">
            <SheetTitle className="text-4xl text-white font-bold">
              Menu
            </SheetTitle>
            <SheetDescription asChild>
              <div className="flex justify-between py-10">
                <div className="flex flex-col gap-6 uppercase text-7xl mango text-white">
                  <Link
                    href="/"
                    className={`${
                      pathname === "/" ? "text-[#f16333]" : "text-white"
                    } hover:text-[#f16333]`}
                    onMouseEnter={() => setVisibleCard("A")}
                    onMouseLeave={toVisibleCard}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about" ? "text-yellow-600" : "text-white"
                    } hover:text-yellow-500`}
                    onMouseEnter={() => setVisibleCard("B")}
                    onMouseLeave={toVisibleCard}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/work"
                    className={`${
                      pathname === "/work" ? "text-[#ff9140]" : "text-white"
                    } hover:text-[#ff9140]`}
                    onMouseEnter={() => setVisibleCard("C")}
                    onMouseLeave={toVisibleCard}
                  >
                    Work
                  </Link>
                  <Link
                    href="/services"
                    className={`${
                      pathname === "/services" ? "text-rose-400" : "text-white"
                    } hover:text-rose-400`}
                    onMouseEnter={() => setVisibleCard("D")}
                    onMouseLeave={toVisibleCard}
                  >
                    Services
                  </Link>
                </div>
                {visibleCard === "A" && (
                  <div className="bg-[#f16333] text-white px-12 py-5 flex flex-col items-center rounded-lg">
                    {/* Text Section */}

                    <p className="text-lg md:text-xl max-w-md">
                      We craft experiences people <br />
                      resonate with through empathy <br />
                      and imagination
                    </p>

                    <video
                      className="md:w-[300px] p-10"
                      playsInline
                      autoPlay
                      loop
                    >
                      <source src="https://mdn.check-dc.com/BASE/Checkwebsite/video-home-j6akyxwebm-t0wMA.webm" />
                    </video>
                  </div>
                )}

                {visibleCard === "B" && (
                  <div className="bg-yellow-400 text-black px-12 py-5 flex flex-col items-center rounded-lg">
                    {/* Text Section */}

                    <p className="text-lg md:text-xl max-w-md">
                      Learn more about our journey and <br /> what defines us
                    </p>

                    <video className="md:w-[200px]" playsInline autoPlay loop>
                      <source src="https://mdn.check-dc.com/BASE/Checkwebsite/video-about-us-hlhktpwebm-t0wMA.webm" />
                    </video>
                  </div>
                )}

                {visibleCard === "C" && (
                  <div className="bg-[#ff9140] text-black px-12 py-5 flex flex-col items-center rounded-lg">
                    {/* Text Section */}

                    <p className="text-lg md:text-xl max-w-md">
                      A glance at some of the extraordinary <br />
                      work we do
                    </p>

                    <video className="md:w-[200px]" playsInline autoPlay loop>
                      <source src="https://mdn.check-dc.com/BASE/Checkwebsite/video-work-taxdiywebm-t0wMA.webm" />
                    </video>
                  </div>
                )}

                {visibleCard === "D" && (
                  <div className="bg-rose-400 text-black px-12 py-5 flex flex-col items-center rounded-lg">
                    {/* Text Section */}

                    <p className="text-lg md:text-xl max-w-md">
                      How we work and how we can <br /> help you
                    </p>

                    <video className="md:w-[200px]" playsInline autoPlay loop>
                      <source src="https://mdn.check-dc.com/BASE/Checkwebsite/video-sevices-x9s6p3webm-t0wMA.webm" />
                    </video>
                  </div>
                )}
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};
