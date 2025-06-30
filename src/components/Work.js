import Image from "next/image";

export default function Work() {
  return (
    <main>
      <section className="flex items-center gap-15 p-10">
        <div className="space-y-20">
          <p className="text-xl font-semibold mb-2">We help them win in</p>
          <h1 className="text-[200px]  leading-none mango ml-5">GROWTH</h1>
          <Image
            src="/photo-propel.webp" // Replace with your image in public/images/
            alt="Laptop User"
            width={400}
            height={300}
            className="rounded-xl"
          />
        </div>

        {/* Background text */}
        <div className="mt-16">
          <h2 className="text-[200px]  leading-none mango">IMPACT</h2>
        </div>

        {/* Bottom left image */}
        <div className="space-y-10">
          <Image
            src="/photo-speed.webp" // Replace with your image in public/images/
            alt="Chef Working"
            width={320}
            height={220}
            className="rounded-xl mt-16"
          />
          <br />
          <br />
          <br />
          <br />
          <h2 className="text-[220px] text-gray-300 mango">SPEED</h2>
        </div>
      </section>

      <section className="overflow-x-scroll scrollbar-hide">
        <div className="flex flex-col w-900 px-24">
          <div className="flex items-center space-x-6">
            <div className="w-[900px]">
              <p className="text-5xl uppercase leading-12">
                What began as just an idea in a small office space, has grown
                into a global company.
              </p>
            </div>
            <Image src="/line_1.png" height={80} width={300} alt="image" />
            <div className="w-[350px]">
              <p className="text-xl">
                We have done extraordinary work with companies in over
              </p>
            </div>
            <div className="w-[350px]">
              <p className="flex flex-col">
                <span className="mango text-[270px] h-76">13</span>{" "}
                <span className="text-3xl">COUNTRIES</span> AROUND THE WORLD
              </p>
            </div>
            <Image src="/line_3.png" height={150} width={300} alt="image" />
            <div className="w-[800px]">
              <p className="text-5xl">
                HELPING THEM RETHINK EVERYTHING AND CREATE IMPACT.
              </p>
            </div>
            <div>
              <Image
                src="/line_2.png"
                height={50}
                width={500}
                alt="image"
                className="h-[250px]"
              />
              <p className="text-xl">
                With pride in our hearts, we have watched these companies
                success
              </p>
            </div>
            <div className="w-[500px]">
              <p className="text-xl">Raising Funds worth over</p>
              <p className="mango text-[280px]">
                <span className="text-[150px]">$</span> <span>400</span>
              </p>
            </div>
            <div className="w-[300px]">
              <p>
                <span className="text-3xl">MILLION</span> <br /> AND COUNTING
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-56">
            <Image src="/earth.png" alt="earth" height={400} width={600} />
            <Image src="/map.png" alt="earth" height={400} width={600} />
            <Image src="/city.png" alt="earth" height={400} width={600} />
            <Image src="/decor.png" alt="earth" height={400} width={600} />
          </div>
        </div>
      </section>

      <section className="flex justify-center p-22 gap-20 h">
        <div>
          <p className="mango text-[220px] h-[200px]">WE DO</p>
          <p className="mango text-[200px] h-[200px]">GREAT WORK</p>
        </div>
        <div className="self-end space-y-5 w-2/5">
          <p className="text-xl">
            We uncover insights to achieve timelessness and relevance in this
            rapidly changing world.
          </p>
          <button className="mango bg-black text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            OUR WORK
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
            <h1 className="text-[80px] leading-none mango">KELE</h1>
            <p className="text-xl mt-2">
              A Simple Approach To Financial Accessibility
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3">
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              APP DESIGN
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              APP DEVELOPMENT
            </span>
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
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
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
              Naming
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              BRAND STARTEGY
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
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
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
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
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
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
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
              VISUAL IDENTITY
            </span>
            <span className="bg-purple-300 px-3 py-2 text-black font-medium">
              BRAND STARTEGY
            </span>
            <span className="bg-orange-200 px-3 py-2 text-black font-medium">
              BRANDING
            </span>
            <span className="bg-sky-200 px-3 py-2 text-black font-medium">
              WEBSITE DESIGN
            </span>
          </div>
        </div>
      </section>

      <section className="flex justify-center p-22 gap-20  bg-gray-100 mt-20">
        <div>
          <p className="mango text-[220px] h-[260px]">LETS MAKE IT </p>
          <p className="mango text-[200px] h-[340px] leading-46">
            HAPPEN TOGETHER
          </p>
        </div>
        <div className="self-end space-y-5 w-2/5">
          <p className="text-xl">
            We champion transformation through design, regardless of your
            project idea or goal.
          </p>
          <button className="mango bg-black text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            START A CONVERSATION
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
