import Image from "next/image";
import Link from "next/link";

export default function Work() {
  return (
    <main>
      <section className="flex flex-col lg:flex-row lg:items-center lg:gap-15 lg:p-10 p-5">
        <div className="lg:space-y-20">
          <p className="lg:text-xl text-lg font-semibold mb-2">
            We help them win in
          </p>
          <h1 className="lg:text-[200px] text-[100px] leading-none mango ml-5">
            GROWTH
          </h1>
          <Image
            src="/photo-propel.webp" // Replace with your image in public/images/
            alt="Laptop User"
            width={400}
            height={300}
            className="rounded-xl hidden lg:block"
          />
        </div>

        {/* Background text */}
        <div className="lg:mt-16">
          <h2 className="lg:text-[200px] text-[100px] text-[#ff9140] mango ml-40 lg:ml-0">
            SPEED
          </h2>
        </div>

        {/* Bottom left image */}
        <div className="lg:space-y-10">
          <Image
            src="/photo-speed.webp" // Replace with your image in public/images/
            alt="Chef Working"
            width={320}
            height={220}
            className="rounded-xl mt-16 hidden lg:block"
          />
          <br className="hidden lg:block" />
          <br className="hidden lg:block" />
          <br className="hidden lg:block" />
          <br className="hidden lg:block" />
          <h2 className="lg:text-[200px] text-[100px] leading-none mango ml-24 lg:ml-0">
            IMPACT
          </h2>
        </div>
      </section>

      <section>
        <div className="p-5 flex flex-col items-center text-center space-y-5 lg:hidden">
          <p className="text-xl uppercase">
            What began as just an idea in a small office space, has grown into a
            global company.
          </p>
          <Image src="/earth.png" height={80} width={200} alt="image" />
          <p className="">
            We have done extraordinary work with companies in over
          </p>
          <p className="mango text-[70px] ">13</p>
        </div>
        <div className="hidden lg:flex flex-col w-full px-12">
          <div className="flex items-center space-x-6">
            <div className="">
              <p className="text-xl uppercase">
                What began as just an idea in a small office space, has grown
                into a global company.
              </p>
            </div>
            <Image src="/line_1.png" height={80} width={100} alt="image" />
            <div className="w-[350px]">
              <p className="">
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
            <div className="w-[800px]">
              <p className="text-xl">
                HELPING THEM RETHINK EVERYTHING AND CREATE IMPACT.
              </p>
            </div>
            <div>
              <Image src="/line_2.png" height={200} width={700} alt="image" />
            </div>
            <div className="w-[500px]">
              <p className="text-xl">Raising Funds worth over</p>
              <p className="mango text-[60px]">
                <span className="text-[40px]">$</span> <span>400</span>
              </p>
            </div>
            <div className="w-[300px]">
              <p className="text-sm">
                <span className="text-xl">MILLION</span> <br /> AND COUNTING
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-15 mt-20">
            <Image src="/earth.png" alt="earth" height={200} width={250} />
            <Image src="/map.png" alt="earth" height={200} width={250} />
            <Image src="/city.png" alt="earth" height={200} width={250} />
            <Image src="/decor.png" alt="earth" height={200} width={250} />
          </div>
        </div>
      </section>

      <section className="flex justify-center items-center p-22 gap-20 h">
        <div>
          <p className="mango text-[150px] h-[120px]">WE DO</p>
          <p className="mango text-[140px] h-[130px]">GREAT WORK</p>
        </div>
        <div className="space-y-5 w-2/5">
          <p className="text-xl">
            We uncover insights to achieve timelessness and relevance in this
            rapidly changing world.
          </p>
          <button className="mango bg-[#ff9140] text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
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
        </div>
      </section>

      <section className="px-16">
        <Image
          src="/kele-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <Link
              href="/work/projects"
              className="text-[80px] leading-none mango"
            >
              KELE (Fintech App)
            </Link>
            <p className="text-xl mt-2">
              SEO + UI Revamp → +147% Organic Traffic
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              APP DESIGN
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              APP DEVELOPMENT
            </span>
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
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
            <Link
              href="/work/projects"
              className="text-[80px] leading-none mango uppercase"
            >
              aAutograph D2C
            </Link>
            <p className="text-xl mt-2">Shopify Build + Paid Ads → 3.8x ROAS</p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
              Naming
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              BRAND STARTEGY
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
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
            <Link
              href="/work/projects"
              className="text-[80px] leading-none mango uppercase"
            >
              Propel Creators
            </Link>
            <p className="text-xl mt-2">
              Paid Media Strategy → 800+ Leads in 6 Weeks
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
              BRAND STARTEGY
            </span>
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
              COMMUNICATION DESIGN
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              WEBSITE DESIGN
            </span>
          </div>
        </div>

        <Image
          className="mt-14"
          src="/dass.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[80px] leading-none mango uppercase">
              Adidas India
            </h1>
            <p className="text-xl mt-2">
              Influencer Campaign + Video Ads → 1M+ Impressions
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-[#f16333] px-3 py-2 text-black font-medium">
              WEB DESIGN
            </span>
            <span className="bg-[#ff9140] px-3 py-2 text-black font-medium">
              WEB DEVELOPMENT
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              E-COMMERCE
            </span>
          </div>
        </div>

        <Image
          className="mt-14"
          src="/odla-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[80px] leading-none mango">ODLA Wellness</h1>
            <p className="text-xl mt-2">Local SEO → 4x Organic Leads</p>
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

      <section className="flex justify-center px-20 gap-16 py-16 bg-orange-200 font-serif mt-5">
        <div className="w-3/5">
          <p className="mango text-[140px] leading-32 uppercase">
            Let’s Build Your Brand’s Digital Growth Engine
          </p>
        </div>
        <div className="self-end space-y-5 mb-8">
          <h3 className="text-xl">
            We’re here to take your digital marketing to the next level with:
          </h3>
          <ul className="text-lg list-disc pl-8">
            <li>Custom Strategy</li>
            <li>Clear Roadmap</li>
            <li>Fast Execution</li>
            <li>Performance Tracking</li>
          </ul>
          <button className="mango bg-[#f16333] text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Schedule Your Free Strategy Call
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
      </section>
    </main>
  );
}
