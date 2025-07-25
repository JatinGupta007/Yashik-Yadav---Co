import React from "react";

const ServiceHome = () => {
  return (
    <section className="flex items-center lg:h-[525px]">
      <div className="relative">
        <div
          className="text-[100px] lg:text-[180px] leading-22 lg:leading-40 uppercase mango text-white h-[525px] w-[230px] lg:w-[350px] bg-green-700 px-10 hidden md:flex flex-col items-center justify-center"
          data-aos="fade-right"
        >
          <h1 className="" data-aos="fade-up">
            What we do
          </h1>
        </div>
        <div className="absolute top-58 lg:top-54 left-16 rotate-[-15deg] bg-yellow-300 px-5 lg:h-13 hidden md:block">
          <p
            className="mango text-[28px] lg:text-[40px] uppercase"
            data-aos="fade-up"
          >
            Services
          </p>
        </div>
      </div>
      <div>
        <div className="overflow-y-auto md:h-[525px] scrollbar-hide p-5 md:p-0">
          <div
            className="flex flex-col lg:flex-row lg:p-12 bg-[#f5f5f5] w-full p-5 justify-between"
            data-aos="fade-left"
            data-aos-delay="300"
          >
            <div>
              <h2
                className="text-[50px] lg:text-[70px] mango leading-12 lg:leading-16 mb-5 uppercase"
                data-aos="fade-up"
              >
                Full-Service Digital Marketing Company in Jaipur
              </h2>

              {/* <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-[#ff9140] lg:px-5 px-2 lg:h-13">
                    <p className="mango lg:text-[40px] text-[20px]">BRAND</p>
                  </div> */}

              <ul className="md:space-y-3" data-aos="fade-up">
                <h3 className="text-2xl mb-4">
                  We are a performance-driven digital marketing agency offering:
                </h3>
                <li>SEO Services - Rank on Google with targeted SEO</li>
                <li>
                  Google Ads & PPC - Smart paid campaigns to generate qualified
                  leads
                </li>
                <li>
                  Social Media Marketing - Instagram & Facebook growth campaigns
                </li>
                <li>
                  Web Design & Development - Mobile-first, fast-loading websites
                </li>
                <li>
                  Influencer & Content Marketing - Authentic collaborations that
                  convert
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
              data-aos="fade-up"
            >
              <source src="/video-sevices.webm" type="video/webm" />
            </video>
          </div>

          <div className="flex flex-col lg:flex-row lg:p-12 w-full p-5 justify-between bg-teal-50">
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
  );
};

export default ServiceHome;
