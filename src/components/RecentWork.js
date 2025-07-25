import React from "react";
import Link from "next/link";

const RecentWork = () => {
  return (
    <section className="flex flex-col md:flex-row items-center p-5 md:p-16 lg:gap-42 gap-12 justify-center mb-6">
      <div data-aos="fade-up">
        <p className="mango text-[100px] h-[90px] lg:text-[150px] lg:h-[120px]">
          WE DO
        </p>
        <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
          GREAT WORK
        </p>
      </div>
      <div
        className="space-y-5 md:w-2/5 text-center flex flex-col justify-center"
        data-aos="fade-down"
      >
        <p className="text-xl">
          We uncover insights to achieve timelessness and relevance in this
          rapidly changing world.
        </p>
        <Link href="/work">
          <button className="mango bg-black text-2xl md:text-4xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-all duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95">
            OUR RECENT WORK
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </Link>
      </div>
    </section>
  );
};

export default RecentWork;
