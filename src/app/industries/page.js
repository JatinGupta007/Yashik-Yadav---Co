/* eslint-disable @next/next/no-img-element */
import Footer from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";

const values = [
  {
    icon: "/industry_logo_1.png", // add this to /public
    title: "healthcare-digital-marketing",
    desc: "We help doctors and clinics grow through ethical SEO, visibility strategies, and trust-building content.",
  },
  {
    icon: "/industry_logo_6.png", // add this to /public
    title: "ivf-gynecology-marketing",
    desc: "We drive awareness, trust, and bookings for IVF centers, gynecologists, and women&apos;s hospitals.",
  },
  {
    icon: "/industry_logo_2.png", // add this to /public
    title: "real-estate-marketing",
    desc: "We bring you buyer-ready traffic from Google — people searching for flats, plots, rentals, and more.",
  },
  {
    icon: "/industry_logo_3.png", // add this to /public
    title: "ecommerce-d2c-marketing",
    desc: "We scale ecommerce visibility using product-first SEO that ranks and converts.",
  },
  {
    icon: "/industry_logo_5.png", // add this to /public
    title: "education-coaching-marketing",
    desc: "We help educational brands rank on Google, drive inquiries, and build digital credibility through targeted SEO and content strategy.",
  },
  {
    icon: "/industry_logo_4.png", // add this to /public
    title: "fashion-apparel-marketing",
    desc: "From Indian ethnic to western streetwear — we help fashion stores and labels gain visibility without over-relying on ads.",
  },
  {
    icon: "/industry_logo_3.png", // add this to /public
    title: "skincare-wellness-marketing",
    desc: "We help you rank, educate, and convert — all while building trust with conscious buyers.",
  },
  {
    icon: "/industry_logo_5.png", // add this to /public
    title: "jewelry-luxury-marketing",
    desc: "We help doctors and clinics grow through ethical SEO, visibility strategies, and trust-building content.",
  },
  {
    icon: "/industry_logo_2.png", // add this to /public
    title: "events-creative-marketing",
    desc: "We bring inbound leads to your event business using content, SEO, and GMB.",
  },
  {
    icon: "/industry_logo_6.png", // add this to /public
    title: "architects-interior-marketing",
    desc: "We convert your design projects into digital magnets with visual + local SEO.",
  },
];

const Industries = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Popup />
      <section className="lg:px-24 px-7 lg:py-12 py-8">
        <div className="relative">
          <h1
            className="text-[80px] lg:text-[160px] mango uppercase leading-16 lg:leading-34"
            data-aos="fade-down"
          >
            digital marketing solutions for industry specialized
          </h1>

          <div className="absolute top-10 left-10">
            <img
              src="/services_logo.png"
              alt="line"
              className="w-40 lg:w-60"
              data-aos="fade-up"
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:px-0">
          <div className="lg:w-3/5 w-full">
            <p
              className="text-lg md:text-2xl mt-10 md:pr-16 uppercase"
              data-aos="fade-right"
            >
              We provide tailored digital marketing solutions for industry
              verticals that demand specialized strategies, language, and
              audience targeting. Below is the finalized content and detailed
              URL structure for each page.
            </p>
            <Image
              src="/manufacturing-industry.jpg"
              alt="manufacturing-industry"
              height={300}
              width={700}
              className="md:mt-44 my-10 md:my-0"
              data-aos="fade-left"
            />
          </div>
          <div className="md:w-2/5 md:-mt-28">
            <Image
              src="/industries_1.png"
              alt="industry Image"
              height={400}
              width={400}
              data-aos="fade-left"
              data-aos-delay="200"
            />
            <div
              className="bg-[#006046] p-8 md:p-16"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <p
                className="bg-yellow-300 px-3 pt-1 text-5xl mango w-42"
                data-aos="fade-down"
              >
                OUR MISSION
              </p>
              <p
                data-aos="fade-down"
                className="text-2xl md:text-4xl mt-5 text-white"
              >
                To partner with audacious companies globally to achieve
                timelessness and relevance in a rapidly evolving world by
                employing a human-centred, design-led perspective
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row bg-[#e6efed]">
          <div className="md:w-3/5 p-5 md:p-16 order-2 md:order-1">
            <p
              className="bg-yellow-400 px-3 pt-1 text-5xl mango w-42"
              data-aos="fade-down"
            >
              OUR VISION
            </p>
            <p
              data-aos="fade-down"
              className="text-3xl md:text-4xl md:mt-12 mt-6"
            >
              To be creators of the brands that everyone loves, the products
              that everyone can’t leave, and the stories everyone remembers.
            </p>
          </div>
          <div className="md:w-2/5 order-1 md:order-2">
            <Image
              src="/industries_2.png"
              alt="indusry image"
              height={200}
              width={450}
              data-aos="fade-left"
              data-aos-delay="600"
            />
            <p data-aos="fade-up" className="text-xl md:mt-22 p-4">
              We are not just crazy about our groundbreaking work, we thrive on
              mutual respect, regardless of gender or background. Our ethos?
              Elevate one another, own your journey, have fun, and always push
              it further!
            </p>
          </div>
        </div>
      </section>

      <section className="px-7 md:px-24 md:py-12 py-8">
        <h1
          data-aos="zoom-in"
          className="mango text-6xl md:text-8xl text-center uppercase"
        >
          Our Industry Specific Services
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24 px-6 py-16 text-center">
          {values.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center space-y-6"
              data-aos="flip-up"
            >
              <Image src={item.icon} alt="Icon" width={100} height={40} />
              <Link
                href={`/industries/${item.title}`}
                className="text-4xl font-bold leading-tight uppercase transition-transform duration-200 ease-in-out hover:scale-105 focus:scale-100 active:scale-95"
              >
                {item.title.replace("-", " ").replace("-", " ")}
              </Link>
              <p className="max-w-md text-gray-700 text-lg">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* <section className="flex flex-col lg:flex-row mx-7 lg:mx-24 mb-10">
        <div className="lg:w-1/2 bg-[#f2f7f6] p-10 py-16">
          <h1 className="text-5xl lg:text-7xl mb-10 text-center mango uppercase">
            Industries
          </h1>
          <ul className="space-y-3 lg:space-y-6 text-3xl lg:text-5xl">
            {indusriesServices.map((eachService, i) => (
              <Link
                href={`/industries/${eachService}`}
                key={i}
                className="text-gray-400 hover:text-slate-700 flex items-center justify-between group uppercase mango"
              >
                {eachService.replace(/-/g, " ")}
                <span className="ml-4 text-4xl hidden group-hover:inline">
                  ➔
                </span>
              </Link>
            ))}
          </ul>
        </div>

        <div className="lg:w-1/2 bg-[#aed9e0] lg:p-16 p-7 text-black">
          <div className="flex space-x-4 mb-6">
            {Array(6)
              .fill()
              .map((_, i) => (
                <div key={i} className="w-[100px] h-2 bg-white"></div>
              ))}
          </div>

          <h1 className="text-3xl font-medium leading-8 mb-8">
            We begin by spending quality time with you in a series of discovery
            sessions.
          </h1>

          <p className="text-lg leading-relaxed text-gray-800">
            We want to know who you are and what you&apos;re about so we can
            connect with your vision and needs. An in-depth understanding of
            your <strong>WHAT</strong>, <strong>WHY</strong> and{" "}
            <strong>HOW</strong> helps us to build strong and meaningful
            connections with your users.
          </p>

          <p className="text-md mt-6 text-gray-700">
            P.S: Our co-founder might crack a few dad jokes during these
            meetings, but you can just ignore them like we do.
          </p>
          <img
            src="https://mdn.check-dc.com/BASE/Checkwebsite/photo-service-img-1-pkds6hjpg-t0wMA.jpe"
            alt="image"
            className="h-90 w-full mt-16"
          />
        </div>
      </section> */}

      <Footer />
    </main>
  );
};

export default Industries;
