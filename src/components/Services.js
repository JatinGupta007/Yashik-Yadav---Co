// components/HeroSection.js
import Image from "next/image";
import React from "react";

const Services = () => {
  return (
    <section className="flex items-center h-[525px]">
      <div className="relative">
        <div className="text-[400px] mango text-white h-[525px] bg-green-900 px-16">
          RE
        </div>
        <div className="absolute top-24 left-16 rotate-[-15deg] bg-yellow-300 px-5 h-13">
          <p className="mango text-[40px]">BY</p>
        </div>
      </div>
      <section className="overflow-y-auto h-[525px] scrollbar-hide">
        <div className="flex p-10 bg-slate-100 w-full h-[525px] gap-24">
          <div>
            <div className="relative">
              <h1 className="text-[200px] mango">IMAGINING</h1>

              <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-yellow-300 px-5 h-13">
                <p className="mango text-[40px]">BRAND</p>
              </div>
            </div>
            <p className="text-xl">
              We craft experiences people resonate with through empathy and
              imagination.
            </p>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
            alt="image"
            height={200}
            width={200}
          />
        </div>
        <div className="flex p-10 bg-slate-100 w-full h-[525px] gap-24">
          <div>
            <div className="relative">
              <h1 className="text-[200px] mango uppercase">Defining</h1>

              <div className="absolute bottom-20 right-[110px] rotate-[-15deg] bg-purple-300 px-5 h-13">
                <p className="mango text-[40px]">DIGITAL</p>
              </div>
            </div>
            <p className="text-xl">
              We build scalable technology landscapes that enable
              transformation.
            </p>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
            alt="image"
            height={200}
            width={200}
          />
        </div>
        <div className="flex p-10 bg-slate-100 w-full h-[525px] gap-24">
          <div>
            <div className="relative">
              <h1 className="text-[200px] mango uppercase">Inventing</h1>

              <div className="absolute bottom-20 right-[60px] rotate-[-15deg] bg-pink-300 px-5 h-13">
                <p className="mango text-[40px] uppercase">strategie</p>
              </div>
            </div>
            <p className="text-xl">
              We wield insights to devise winning strategies that challenge the
              status quo.
            </p>
          </div>
          <Image
            src="https://wearecheck.co/_nuxt/service-illustration-brand.Dw0Et53h.svg"
            alt="image"
            height={200}
            width={200}
          />
        </div>
      </section>
    </section>
  );
};

export default Services;
