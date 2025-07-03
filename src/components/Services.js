// components/HeroSection.js
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="flex items-center lg:h-[525px]">
      <div className="relative">
        <div className="text-[400px] mango text-white h-[525px] bg-[#f16333] px-16 hidden lg:block">
          RE
        </div>
        <div className="absolute top-24 left-16 rotate-[-15deg] bg-yellow-300 px-5 h-13 hidden lg:block">
          <p className="mango text-[40px]">BY</p>
        </div>
      </div>
      <section className="overflow-y-auto lg:h-[525px] scrollbar-hide">
        <div className="flex lg:p-10 bg-slate-100 w-full lg:h-[525px] p-5 gap-24">
          <div>
            <div className="relative">
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
            </div>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
            alt="image"
            height={200}
            width={200}
            className="hidden lg:block"
          />
        </div>
        <div className="flex lg:p-10 bg-slate-100 w-full lg:h-[525px] p-5 gap-24">
          <div>
            <div className="relative">
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
            </div>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
            alt="image"
            height={200}
            width={200}
            className="hidden lg:block"
          />
        </div>

        <div className="flex lg:p-10 bg-slate-100 w-full lg:h-[525px] p-5 gap-24">
          <div>
            <div className="relative">
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
            </div>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
            alt="image"
            height={200}
            width={200}
            className="hidden lg:block"
          />
        </div>
      </section>
    </section>
  );
};

export default Services;
