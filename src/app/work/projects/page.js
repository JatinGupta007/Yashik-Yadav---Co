/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import { Header } from "@/components/Header";

import Popup from "@/components/popup";
import React from "react";

const Projects = () => {
  return (
    <main>
      <Header />
      <section className="w-full px-16 py-10">
        {/* Left Side: Logo + Title */}
        <div className="flex items-center gap-10">
          <h1 className="text-5xl mango">QUIDAX</h1>
          <hr className="border-t border-gray-300 w-full" />
        </div>
        <div className="flex justify-between items-center">
          <h2 className="text-6xl mt-4 font-serif">A Game of Fortunes</h2>
          {/* Right Side: Sector & Year */}
          <div className="flex items-center gap-10 font-serif text-xl">
            <div>
              <p className="text-gray-400">Sector</p>
              <p className="text-black">Crypto</p>
            </div>
            <div>
              <p className="text-gray-400">Year</p>
              <p className="text-black">2024</p>
            </div>
          </div>
        </div>
        <img src="/quidax-cover.webp" alt="quidax" className="mt-16" />

        <div className="flex justify-between py-10">
          <p className="text-xl">Locations</p>
          <p className="text-gray-400 border border-gray-200 px-2 py-1 text-lg">
            Nigeria
          </p>
        </div>
        <hr className="border-t border-gray-200 mb-10" />

        <div className="flex flex-col md:flex-row">
          {/* Sidebar Title */}
          <div className="md:w-1/5 mb-6 md:mb-0 md:mt-12">
            <h3 className="text-5xl mango">OVERVIEW</h3>
          </div>

          {/* Main Content */}
          <div className="md:w-4/5 font-[sans-serif] text-lg">
            <h2 className="text-3xl md:text-4xl mb-6">
              Six years ago, crypto felt like stepping into the wild. No clear
              paths. No real rules. Just endless possibilities and a whole lot
              of risk.
            </h2>

            <p className="text-gray-700 mb-4">
              Some people charged right in, ready to make their mark. Most? They
              didn’t know where to start. That’s where Quidax came in.
            </p>

            <p className="text-gray-700 mb-4">
              It was the guide at the gate, the friendly face showing people how
              to take their first steps into this new world. Quidax made crypto
              feel like a place where any beginner could trade without feeling
              out of place. And for a while, that was enough. Until it wasn’t.
            </p>

            <p className="text-gray-700">
              Because rookies don’t stay rookies forever. They get sharper. They
              take bolder risks. They stop testing the waters and start chasing
              bigger tides. Quidax had built a loyal following, but it had also
              built something else – a tribe of traders who had outgrown their
              first steps. Yet, the brand still spoke to them as if they were
              just starting.
            </p>
          </div>
        </div>

        <img
          src="https://cdn.prod.website-files.com/65c0c17643da67dca6ad732c/67d7c2d1db80dc1e6d06af02_quidax-1.webp"
          alt="image"
          className="mt-16 min-w-full"
        />

        <div className="flex gap-10 mt-16">
          <img
            src="https://cdn.prod.website-files.com/65c0c17643da67dca6ad732c/67d7c2db7bdbdf162c3568cc_quidax-2.webp"
            alt="image"
            className="w-[550px]"
          />
          <img
            src="https://cdn.prod.website-files.com/65c0c17643da67dca6ad732c/67d841b768171a497ad6f233_quidax-2.jpg"
            alt="image"
            className="w-[550px]"
          />
        </div>

        <div className="flex flex-col md:flex-row mt-16  font-[sans-serif]">
          {/* Sidebar Title */}
          <div className="md:w-1/5 mb-6 md:mb-0 md:mt-12">
            <h3 className="text-5xl mango uppercase">Challenge</h3>
          </div>

          {/* Main Content */}
          <div className="md:w-4/5 text-lg">
            <h2 className="text-3xl md:text-4xl mb-6">
              From Campfire Lessons to Mountain Quests
            </h2>

            <p className="text-gray-700 mb-4">
              There’s a misconception that simplicity and depth can’t exist in
              the same breath. That a platform built to be accessible must, by
              default, lack the weight, the infrastructure, the sheer force
              needed to handle high-stakes, high-volume transactions.
            </p>

            <p className="text-gray-700 mb-4">
              That was the perception Quidax had to dismantle.
            </p>

            <p className="text-gray-700 mb-4">
              Because beneath the surface, the platform had already evolved. It
              was no longer just for those making their first trade. It was home
              to full-time traders, market tacticians, and digital asset
              navigators who charted their own courses, wielding data like a map
              and volatility like a challenge.
            </p>

            <p className="text-gray-700 mb-4">
              And yet, Quidax was still seen as a starter pack, not the full
              gear haul it had become
            </p>

            <p className="text-gray-700 mb-4">
              If perception is reality, then reality needed rewriting.
            </p>
          </div>
        </div>

        <div className="bg-[url(/dass.webp)] w-full h-[500px] bg-cover group mt-16">
          <div className="hidden group-hover:flex h-[500px] justify-center items-center bg-black opacity-64">
            <p className="text-white mango text-8xl">COMING SOON</p>
          </div>
        </div>
      </section>

      <Popup />
      <Footer />
    </main>
  );
};

export default Projects;
