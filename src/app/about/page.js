
/* eslint-disable @next/next/no-img-element */

import Footer from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import Popup from "@/components/popup";
import Image from "next/image";


function About() {
  return (
    <main>
      <Navbar />
      <section className="flex justify-center items-center p-22 gap-20 mt-10">
        <div>
          <p className="mango text-[220px] h-[260px]">WE&apos;RE </p>
          <p className="mango text-[200px] h-[340px] leading-46 uppercase">
            endlessly curious
          </p>
        </div>
        <div className="space-y-5 w-2/5">
          <div className="bg-[#f16333] px-4">
            <p className="text-[40px] mango">FOUNDED IN 2025</p>
          </div>
          <p className="text-xl">
            When two audacious minds dared to defy the status quo, and asked,
            <span className="font-bold">
              &quot;What if we could make this better?&quot;
            </span>{" "}
            And then set out to answer the question, as audaciously as possible.
          </p>
        </div>
      </section>

      <Popup />

      <section className="flex flex-col items-center px-28 space-y-10 gap-12">
        <Image
          src="/photo-aboutwebp.webp"
          alt="photo-about"
          width={900}
          height={800}
        />
        <div className="flex justify-start gap-5 w-full h-180">
          <p className="text-5xl uppercase leading-16">
            We create ideas that are truly transformative, putting businesses at
            the forefront of their industries.
          </p>
          <div className="space-y-8 self-end w-350">
            <p className="text-xl">
              Through our journey — from helping small businesses to start to
              partnering with global brands—one thing has rung true: timeless
              brands connect with people. This singular insight sits at the core
              of everything we do.
            </p>
            <p className="text-xl">
              We create ideas that are truly transformative, putting businesses
              at the forefront of their industries. This tendency to push
              boundaries is why audacious businesses from all over the world
              come to us when they want to Rethink Everything — from ideas to
              brands to products.
            </p>
            <button className="mango bg-[#f16333] text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
              OUR SERVICES
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
          </div>
        </div>
      </section>

      <section className="bg-[#ff9140] p-16 mt-20 m-16 space-y-32">
        <div className="flex gap-8">
          <div className="bg-yellow-300 w-12 h-12 mt-10"></div>
          <div>
            <p className="mango text-9xl text-white">WE FOCUS ON</p>
            <p className="mango text-9xl text-yellow-400">WHAT MATTERS</p>
          </div>
        </div>

        <div className="flex justify-start">
          <div className="border border-gray-200 w-40 h-12"></div>
          <div className="w-full ml-5">
            <p className="mango text-9xl text-white mb-10">IMPACT</p>
            <p className="text-lg text-white">
              We aim to craft an improved world through thoughtful design,
              unafraid to push the boundaries if that&apos;s what it takes.
            </p>
          </div>
          <Image
            src="/focus-sketch.svg"
            alt="focus-strech"
            width={350}
            height={200}
          />
          <p className="text-lg text-white w-full self-end">
            We find most exciting the opportunity to work on projects that can
            enhance the quality of lives of individuals, no matter how little.
            To do this we leverage technology and imaginative thinking to bring
            insights, ideas, and blueprints to life.
          </p>
        </div>

        <div className="flex gap-5">
          <div className="border border-gray-200 w-19 h-12"></div>
          <div className="w-1/2">
            <p className="mango text-9xl text-white mb-10">WORK</p>
            <p className="text-lg text-white">
              We evolve every thought and idea until it becomes a pristine image
              of what a successful solution is for our clients and partners. In
              rethinking everything, we ensure that we uphold the highest
              standard of work.
            </p>
          </div>
          <Image
            src="/focus-sketch_1.svg"
            alt="focus-strech"
            width={300}
            height={200}
          />
          <div className="self-end">
            <p className="text-lg text-white">
              One phrase that describes how we work
            </p>
            <p className="mango text-8xl text-white mt-10 uppercase">
              Push it further
            </p>
            <p className="text-lg text-white w-full">
              If the work isn’t extraordinary yet, then it’s not done.
            </p>
          </div>
        </div>

        <div className="flex justify-start gap-5">
          <div className="border border-gray-200 w-30 h-12"></div>
          <div className="">
            <p className="mango text-9xl text-white mb-10 uppercase">people</p>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/focus-sketch-people.CIAktQ3l.svg"
            alt="focus-strech"
            width={300}
            height={300}
          />
          <p className="text-lg text-white w-full">
            We do extraordinary work, but none of it would be possible without
            our team of rethinkers, who refuse mediocrity.
          </p>
        </div>

        <section className="p-16">
          <div className="flex gap-18 mb-24">
            <p className="text-white w-2/3 text-xl font-bold">Our Team</p>
            <p className="text-white text-lg">
              Regardless of our role or level, we own each project and the final
              result we deliver is a cocktail of ideas from strategists,
              designers, researchers, etc.
            </p>
          </div>

          <div className="relative text-white flex items-center justify-center mango">
            {/* Background Text */}
            <h1 className="text-[220px] uppercase text-white text-center leading-45">
              AGILE <span className="ml-50">STRONG</span> GROWTH-DRIVEN
            </h1>

            {/* Hover Shape 1 */}
            <div className="absolute top-20 left-0 clip-starburst group w-50 h-52 bg-[#f16333] clip-star transition-all duration-300 overflow-hidden cursor-pointer">
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-agile-fsmx7gjpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Hover Shape 2 */}
            <div className="absolute top-0 right-80 clip-starburst group w-52 h-55  bg-[#f16333] clip-hex transition-all duration-300 overflow-hidden cursor-pointer">
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-growth-driven-un8efhjpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>

            {/* Hover Shape 3 */}
            <div className="absolute bottom-30 right-0 clip-starburst group w-50 h-52 bg-[#f16333] clip-x transition-all duration-300 overflow-hidden cursor-pointer">
              <img
                src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-strong-img-evcqa0jpg-t0wMA.jpe"
                alt="hover-img"
                className="w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </div>
        </section>

        <section className="flex flex-col md:flex-row w-full">
          {/* Left (green) section */}
          <div className="text-white p-10 md:p-20 space-y-6 text-xl">
            <p>
              We aren&apos;t hunting for the &quot;most talented&quot;
              we&apos;re nurturing a collective of individuals who constantly
              reinvent the world around them.
            </p>
            <p>
              Above all, we celebrate our humanity and diversity, complimenting
              each other’s strengths and never being too busy to lend a helping
              hand when needed.
            </p>
          </div>

          {/* Right (yellow) section */}
          <div className="flex-1 bg-yellow-400 text-black px-10 py-8 md:px-16 flex flex-col justify-around">
            <p className="text-xl">
              P.S: WE DO VERY SERIOUS WORK, BUT WE DON’T TAKE OURSELVES TOO
              SERIOUSLY.
            </p>

            {/* Careers Button */}
            <div className="">
              <a
                href="/careers"
                className="inline-flex items-center justify-between bg-[#f16333] text-white text-4xl px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 mango gap-24"
              >
                CAREERS
                <span className="ml-4 text-2xl">➔</span>
              </a>
            </div>
          </div>
        </section>
      </section>

      <section className="flex items-center justify-center px-24 mt-20">
        <div className="w-full">
          <p className="text-lg">
            We believe design is a tool that can be wielded to change the world.
          </p>
          <div className="mt-10">
            <a
              href="/careers"
              className="inline-flex items-center justify-between bg-[#ff9140] text-white text-4xl px-6 py-4 hover:bg-white hover:text-black transition-all duration-300 mango"
            >
              Our Work
              <span className="ml-4 text-2xl">➔</span>
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute top-50 left-50 rotate-[-6deg] bg-[#f16333] px-4 h-12">
            <p className="text-[40px] mango uppercase">
              We are a little obsessed
            </p>
          </div>
          <p className="mango text-[150px] text-center leading-32 uppercase flex-1">
            WE&apos;RE beyond passionate about what we do
          </p>
          <img src="/earth.png" alt="earth" className="w-900" />
        </div>
        <div className="w-full">
          <p className="text-lg">
            From the comfort of your chair to that habitual swipe on your
            favourite app, the dog-eared pages of your cherished book, to those
            towering billboards during your daily grind, design whispers in
            every corner of our world.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}

export default About;
