import Image from "next/image";
import Link from "next/link";

const Home = () => {
  return (
    <main className="m-auto">
      {/* Hero Section */}
      <section className="relative lg:px-18 px-4 lg:pt-18 pt-10 pb-16 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <h2 className="text-center text-xl md:text-2xl">
            BEST DIGITAL MARKETING AGENCY
          </h2>
        </div>
        <div className="flex items-center gap-3 lg:h-[220px]">
          <div className="relative">
            <div className="absolute lg:top-12 lg:-left-8 top-6 -left-3 rotate-[-12deg] bg-yellow-400 lg:px-4 px-2 lg:h-12">
              <p className="lg:text-[40px] text-[20px] mango">TECH</p>
            </div>

            <h1 className="lg:text-[250px] text-[120px] mango hidden lg:block">
              RE
            </h1>
            <h1 className="text-[120px] mango h-30 lg:hidden">RETHINK</h1>
          </div>

          <video
            loop
            muted
            autoPlay
            className="-mt-8 h-[180px] hidden lg:block"
          >
            <source src="/video_1.mp4" />
          </video>

          <div className="relative">
            <h1 className="lg:text-[250px] mango hidden lg:block">THINK</h1>
            <div className="absolute lg:bottom-25 lg:-right-8 right-2 top-9 rotate-[15deg] bg-purple-200 lg:px-4 px-2 lg:h-12">
              <p className="lg:text-[40px] text-[20px] mango">BRAND</p>
            </div>
          </div>
        </div>

        <div className="flex items-center h-[220px]">
          <video
            loop
            muted
            autoPlay
            className="-mt-8 h-[180px] hidden lg:block"
          >
            <source src="/video_1.mp4" />
          </video>

          <div className="relative">
            <h1 className="lg:text-[250px] text-[120px] mango h-60 lg:h-full">
              EVERYTHING
            </h1>

            <div className="absolute bottom-24 right-[-10px] rotate-[-15deg] bg-orange-200 lg:px-5 px-2 lg:h-13">
              <p className="mango lg:text-[40px] text-[20px]">STRATEGY</p>
            </div>
          </div>
        </div>

        <video loop muted autoPlay className="-mt-10 w-full lg:hidden">
          <source src="/video_1.mp4" />
        </video>

        {/* Description + button */}
        <div className="mt-10 flex flex-col lg:flex-row justify-end items-center lg:justify-between lg:gap-54  gap-10">
          <p className="text-lg md:text-xl max-w-110">
            Grow your business with a Jaipur-based digital marketing company
            trusted by startups and enterprises. We deliver results via SEO,
            paid ads, social media & performance strategies.
          </p>
          <button className="mango self-start bg-black text-2xl md:text-3xl text-white uppercase md:px-8 px-4 py-4  flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Let’s Build Your Growth Engine
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
      {/* About Section */}
      <section className="bg-white text-center lg:px-10 lg:py-10 mb-16 lg:mb-0">
        <h2 className="text-xl mb-10 text-center">
          Our Partners & Certifications
        </h2>
        <h1 className="lg:text-[150px] text-[70px] leading-18 lg:leading-36 mb-8 mango uppercase px-20">
          Trusted by technology leaders powering global digital growth
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap lg:flex-nowrap lg:mt-18 font-serif text-2xl mb-10">
          <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
            <Image
              src="/google-icon.png"
              alt="Illustration 1"
              width={20}
              height={19}
              className="w-12 h-10"
            />
            Google
          </div>

          <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
            <Image
              src="/meta-icon.webp"
              alt="Illustration 1"
              width={20}
              height={19}
              className="w-12 h-10"
            />
            Meta
          </div>

          <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
            <Image
              src="/shopify-icon.png"
              alt="Illustration 1"
              width={20}
              height={19}
              className="w-12 h-10"
            />
            Shopify
          </div>

          <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
            <Image
              src="/hostinger-icon.webp"
              alt="Illustration 1"
              width={20}
              height={19}
              className="w-12 h-10"
            />
            Hostinger
          </div>

          <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 m-3 lg:m-0">
            <Image
              src="/wordpress-icon.webp"
              alt="Illustration 1"
              width={20}
              height={19}
              className="w-12 h-10"
            />
            WordPress
          </div>

          <div className="flex items-center gap-3 md:border-r-2 border-gray-400 px-6 w-60 m-3 lg:m-0">
            <Image
              src="/clutch-icon.webp"
              alt="Illustration 1"
              width={20}
              height={19}
              className="w-12 h-10"
            />
            Clutch Top
          </div>
        </div>
      </section>
      {/* service Section */}
      <section className="flex items-center lg:h-[525px]">
        <div className="relative">
          <div className="text-[100px] lg:text-[180px] leading-22 lg:leading-40 uppercase mango text-white h-[525px] w-[230px] lg:w-[350px] bg-green-700 px-10 hidden md:flex flex-col items-center justify-center">
            <h1 className="">What we do</h1>
          </div>
          <div className="absolute top-58 lg:top-54 left-16 rotate-[-15deg] bg-yellow-300 px-5 lg:h-13 hidden md:block">
            <p className="mango text-[28px] lg:text-[40px] uppercase">
              Services
            </p>
          </div>
        </div>
        <div>
          <div className="overflow-y-auto md:h-[525px] scrollbar-hide p-5 md:p-0">
            <div className="flex flex-col lg:flex-row lg:p-12 bg-sky-50 w-full p-5 justify-between">
              <div>
                <h2 className="text-[50px] lg:text-[70px] mango leading-12 lg:leading-16 mb-5 uppercase">
                  Full-Service Digital Marketing Company in Jaipur
                </h2>

                {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
              </div> */}

                <ul className="md:space-y-3">
                  <h3 className="text-2xl mb-4">
                    We are a performance-driven digital marketing agency
                    offering:
                  </h3>
                  <li>SEO Services – Rank on Google with targeted SEO</li>
                  <li>
                    Google Ads & PPC – Smart paid campaigns to generate
                    qualified leads
                  </li>
                  <li>
                    Social Media Marketing – Instagram & Facebook growth
                    campaigns
                  </li>
                  <li>
                    Web Design & Development – Mobile-first, fast-loading
                    websites
                  </li>
                  <li>
                    Influencer & Content Marketing – Authentic collaborations
                    that convert
                  </li>
                </ul>
                <p className="text-2xl font-bold mt-7">
                  Results that matter. Strategies that scale.
                </p>
              </div>

              <video
                className="w-[300px] -mt-16 md:-mt-0"
                playsInline
                autoPlay
                loop
                muted
              >
                <source src="/video-sevices.webm" type="video/webm" />
              </video>
            </div>

            <div className="flex flex-col lg:flex-row lg:p-12 w-full p-5 justify-between bg-sky-100">
              <div>
                <h2 className="text-[50px] lg:text-[70px] mango leading-12 lg:leading-16 mb-6 uppercase">
                  Reimagining Growth, Speed & Impact
                </h2>

                {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                  <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
                </div> */}

                <ul className="md:space-y-3">
                  <h3 className="text-2xl mb-4">
                    Tired of vanity metrics? We deliver performance-first
                    marketing that brings results.
                  </h3>
                  <li>Full-funnel strategy</li>
                  <li>Scalable campaigns</li>
                  <li>Data-driven insights</li>
                  <li>Consistent monthly growth</li>
                  <li>Transparent reporting dashboard</li>
                </ul>
                <p className="text-xl font-bold mt-7">
                  RWe combine paid & organic strategies for maximum ROI and lead
                  generation.
                </p>
                {/* <div className="relative">
                <h1 className="lg:text-[200px] text-[100px] mango">IMAGINING</h1>

                <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                  <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
                </div>
              </div>
              <div className="flex justify-between">
                <p className="lg:text-xl text-lg w-1/2">
                  We craft experiences people resonate with through empathy and
                  imagination.
                </p>
                <Image
                  src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
                  alt="image"
                  height={80}
                  width={80}
                  className="lg:hidden"
                />
              </div>*/}
              </div>
              <video className="w-[300px]" playsInline autoPlay loop muted>
                <source src="/video-work.webm" type="video/webm" />
              </video>
            </div>

            {/* <div className="flex lg:p-16 bg-gray-200 w-full p-5 justify-between">
            <div>
              <h2 className="text-[70px] mango">
                Your Growth Partner in Jaipur & Beyond
              </h2>

              <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow-md mb-16">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="text-left px-6 py-3 font-semibold text-gray-700">
                      Metric
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-gray-700">
                      Value
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {metrics.map((item, index) => (
                    <tr
                      key={index}
                      className="hover:bg-[#ff9140] transition-all border-t border-orange-300"
                    >
                      <td className="flex items-center gap-2 px-6 py-4 text-gray-800 font-medium">
                        {item.icon}
                        {item.label}
                      </td>
                      <td className="px-6 py-4 text-gray-900">{item.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                    <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
                  </div> *

              <p className="text-2xl font-bold text-right mt-7 text-[#ff9140]">
                We don’t just run campaigns — we build digital growth systems.
              </p>
            </div>
            <Image
              src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
              alt="image"
              height={200}
              width={200}
              className="hidden lg:block"
            />
          </div> */}
          </div>
        </div>
      </section>

      {/* Growth Speed Impact Section */}
      <section className="flex flex-col md:flex-row md:items-center justify-center md:gap-15 md:p-10 p-5">
        <div className="lg:space-y-20 md:space-y-10">
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
            className="rounded-xl hidden md:block"
          />
        </div>

        {/* Background text */}
        <div className="lg:mt-16">
          <h2 className="lg:text-[200px] text-[100px] text-gray-300 mango ml-28 md:ml-0">
            SPEED
          </h2>
        </div>

        {/* Bottom left image */}
        <div className="md:space-y-10">
          <Image
            src="/photo-speed.webp" // Replace with your image in public/images/
            alt="Chef Working"
            width={320}
            height={220}
            className="rounded-xl mt-8 lg:mt-16 hidden md:block"
          />
          <br className="hidden md:block" />
          <br className="hidden md:block" />
          <br className="hidden md:block" />
          <br className="hidden lg:block" />
          <h2 className="lg:text-[200px] text-[100px] leading-none mango ml-48 md:ml-0">
            IMPACT
          </h2>
        </div>
      </section>
      {/* Growth partner Section */}
      <section className="flex-wrap">
        <h1 className="text-center text-5xl mango uppercase m-8">
          Your Growth Partner in Jaipur & Beyond
        </h1>

        <div className="px-8 flex flex-col justify-center items-center text-center lg:hidden space-y-10">
          <p className="text-2xl capatalize">
            Maintaining a remarkable 99% client retention rate
          </p>
          <Image src="/earth.png" height={200} width={450} alt="image" />
          <div>
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
          <div>
            <p className="text-2xl">
              Achieving an average ROAS uplift of{" "}
              <span className="text-3xl font-bold">4.3x</span> <br /> and
              helping them rethink everything and create real impact.
            </p>
          </div>
          <Image src="/city.png" height={100} width={450} alt="image" />
          <div className="w-full">
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
                <span className="text-3xl font-bold">4.3x</span> and helping
                them rethink everything and create real impact.
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
      {/* recent work Section */}
      <section className="flex flex-col lg:flex-row lg:items-center p-5 md:p-16 lg:gap-42 gap-12 justify-center mb-6">
        <div>
          <p className="mango text-[100px] h-[90px] lg:text-[150px] lg:h-[120px]">
            WE DO
          </p>
          <p className="mango text-[100px] h-[90px] lg:text-[140px] lg:h-[130px]">
            GREAT WORK
          </p>
        </div>
        <div className="space-y-5 lg:w-2/5">
          <p className="text-xl">
            We uncover insights to achieve timelessness and relevance in this
            rapidly changing world.
          </p>
          <button className="mango bg-black text-2xl md:text-4xl text-white uppercase px-4 md:px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
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
      {/* specifics work Section */}
      <section className="md:px-16 px-5">
        <Image
          src="/kele-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
          className="w-full h-[220px] md:h-full"
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <Link
              href="/work/projects"
              className="text-[50px] md:text-[80px] leading-none mango"
            >
              KELE (Fintech App)
            </Link>
            <p className="md:text-xl mt-2">
              SEO + UI Revamp → +147% Organic Traffic
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs">
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
          className="mt-14 w-full h-[220px] md:h-full"
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
              className="text-[50px] md:text-[80px] leading-none mango uppercase"
            >
              Autograph D2C
            </Link>
            <p className="text-xl mt-2">Shopify Build + Paid Ads → 3.8x ROAS</p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs">
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
          className="mt-14 w-full h-[220px] md:h-full"
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
              className="text-[50px] md:text-[80px] leading-none mango uppercase"
            >
              Propel Creators
            </Link>
            <p className="text-xl mt-2">
              Paid Media Strategy → 800+ Leads in 6 Weeks
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs">
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
          className="mt-14 w-full h-[220px] md:h-full"
          src="/dass.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[50px] md:text-[80px] leading-none mango uppercase">
              Adidas India
            </h1>
            <p className="text-xl mt-2">
              Influencer Campaign + Video Ads → 1M+ Impressions
            </p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs">
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
          className="mt-14 w-full h-[220px] md:h-full"
          src="/odla-cover.webp"
          alt="kele-cover"
          height={900}
          width={1200}
        />
        <div className="py-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          {/* Left Side */}
          <div>
            <h1 className="text-[50px] md:text-[80px] leading-none mango">
              ODLA Wellness
            </h1>
            <p className="text-xl mt-2">Local SEO → 4x Organic Leads</p>
          </div>

          {/* Right Side - Tags */}
          <div className="flex flex-wrap gap-3 text-xs">
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
    </main>
  );
};

export default Home;
