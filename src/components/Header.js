/* eslint-disable @next/next/no-img-element */
"use client";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Header = () => {
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
    <header className="top-0 flex justify-between items-center md:px-8 py-4 min-w-screen backdrop-blur-lg z-10">
      <div className="flex items-center space-x-2">
        <Link
          className="flex items-center justify-center gap-2 px-4 py-2 text-white rounded-lg transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95"
          href="/"
        >
          <img
            src="/website logo.png"
            alt="logo"
            width={150}
            height={50}
            className="md:w-72 "
          />
        </Link>
      </div>

      {/*<h2 className="md:text-4xl text-lg uppercase mango tracking-wider">
        Yashik Yadav & Co
      </h2> */}

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
          <div className="flex items-center md:space-x-4 space-x-3 pr-3 md:pr-6 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
            <p className="font-normal text-sm md:text-lg">Menu</p>
            {/* The black shape on right */}
            <img
              src="https://wearecheck.co/assets/images/menu-icon.svg"
              alt="logo"
              height={100}
              width={40}
              className="md:w-12"
            />
          </div>
        </SheetTrigger>
        <SheetContent className="bg-white backdrop-blur px-14 py-2 min-w-3/5">
          <SheetHeader className="text-black">
            <SheetTitle className="text-4xl text-black font-bold">
              Menu
            </SheetTitle>
            <SheetDescription asChild>
              <div className="flex justify-between py-10 gap-10">
                <div className="flex flex-col gap-5 uppercase text-6xl mango text-black">
                  <Link
                    href="/"
                    className={`${
                      pathname === "/" ? "text-blue-700" : "text-black"
                    } hover:text-blue-700 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95`}
                    onMouseEnter={() => setVisibleCard("A")}
                    onMouseLeave={toVisibleCard}
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className={`${
                      pathname === "/about" ? "text-yellow-500" : "text-black"
                    } hover:text-yellow-500 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95`}
                    onMouseEnter={() => setVisibleCard("B")}
                    onMouseLeave={toVisibleCard}
                  >
                    About Us
                  </Link>
                  <Link
                    href="/work"
                    className={`${
                      pathname === "/work" ? "text-purple-400" : "text-black"
                    } hover:text-purple-400 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95`}
                    onMouseEnter={() => setVisibleCard("C")}
                    onMouseLeave={toVisibleCard}
                  >
                    Work
                  </Link>
                  <Link
                    href="/services"
                    className={`${
                      pathname === "/services" ? "text-green-700" : "text-black"
                    } hover:text-green-700 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95`}
                    onMouseEnter={() => setVisibleCard("D")}
                    onMouseLeave={toVisibleCard}
                  >
                    Services
                  </Link>

                  <Link
                    href="/industries"
                    className={`${
                      pathname === "/industries"
                        ? "text-rose-300"
                        : "text-black"
                    } hover:text-rose-300 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95`}
                    onMouseEnter={() => setVisibleCard("E")}
                    onMouseLeave={toVisibleCard}
                  >
                    Industries
                  </Link>
                  <Link
                    href="/blogs"
                    className={`${
                      pathname === "/blogs" ? "text-sky-200" : "text-black"
                    } hover:text-sky-200 transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95`}
                    onMouseEnter={() => setVisibleCard("F")}
                    onMouseLeave={toVisibleCard}
                  >
                    Blogs
                  </Link>
                </div>

                <section className="hidden md:block">
                  {visibleCard === "A" && (
                    <div className="bg-blue-700 text-black px-12 py-5 flex flex-col items-center rounded-lg">
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
                    <div className="bg-purple-400 text-black px-12 py-5 flex flex-col items-center rounded-lg">
                      {/* Text Section */}

                      <p className="text-lg md:text-xl max-w-md">
                        A glance at some of the extraordinary <br />
                        work we do
                      </p>

                      <video className="md:w-[200px]" playsInline autoPlay loop>
                        <source src="/video-work.webm" />
                      </video>
                    </div>
                  )}

                  {visibleCard === "D" && (
                    <div className="bg-green-700 text-black px-12 py-5 flex flex-col items-center rounded-lg">
                      {/* Text Section */}

                      <p className="text-lg md:text-xl max-w-md">
                        How we work and how we can <br /> help you
                      </p>

                      <video className="md:w-[200px]" playsInline autoPlay loop>
                        <source src="/video-sevices.webm" />
                      </video>
                    </div>
                  )}

                  {visibleCard === "E" && (
                    <div className="bg-rose-200 text-black px-12 py-5 flex flex-col items-center rounded-lg">
                      {/* Text Section */}

                      <p className="text-lg md:text-xl max-w-md">
                        Learn more about our workin Industries and which define the industry specific services that we provide you.
                      </p>

                      <video className="md:w-[200px]" playsInline autoPlay loop>
                        <source src="https://mdn.check-dc.com/BASE/Checkwebsite/video-about-us-hlhktpwebm-t0wMA.webm" />
                      </video>
                    </div>
                  )}

                  {visibleCard === "F" && (
                    <div className="bg-sky-200 text-black px-12 py-5 flex flex-col items-center rounded-lg">
                      {/* Text Section */}

                      <p className="text-lg md:text-xl max-w-md">
                        Learn more about our Company by exploring our journey and what defines us
                      </p>

                      <video className="md:w-[200px]" playsInline autoPlay loop>
                        <source src="https://mdn.check-dc.com/BASE/Checkwebsite/video-about-us-hlhktpwebm-t0wMA.webm" />
                      </video>
                    </div>
                  )}
                </section>
              </div>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </header>
  );
};
