// components/TransformationSection.js

import Image from "next/image";

const About = () => {
  return (
    <div className="bg-white text-center lg:p-20 mb-16 lg:mb-0">
      <h2 className="text-xl mb-10 text-center">Together, we transform</h2>
      <h1 className="lg:text-[150px] text-[90px] leading-18 lg:leading-36 mb-8 mango">
        AUDACIOUS VISIONS <span className="block">INTO REALITY</span>
      </h1>

      <div className="flex justify-center items-center lg:mt-18">
        <div className="mx-4">
          <Image
            src="https://wearecheck.co/_nuxt/home-about-illustration.CNh6-gmc.svg"
            alt="Illustration 1"
            width={220}
            height={198}
            className="w-16 lg:w-200"
          />
        </div>
        <Image
          src="https://wearecheck.co/_nuxt/home-about-slant.BK8NVZZL.svg"
          alt="Illustration 4"
          width={190}
          height={198}
          className="lg:h-30 w-10 h-8 lg:w-full"
        />
        <div className="lg:mx-4">
          <Image
            src="https://wearecheck.co/_nuxt/home-about-illustration-2.CBM_FEvc.svg"
            alt="Illustration 2"
            width={220}
            height={198}
            className="w-14 lg:w-180"
          />
        </div>
        <Image
          src="https://wearecheck.co/_nuxt/home-about-slant-2.BY4DzBxE.svg"
          alt="Illustration 4"
          width={190}
          height={100}
          className="lg:h-30 w-10 h-8 lg:w-full"
        />
        <div className="lg:mx-4">
          <Image
            src="https://wearecheck.co/_nuxt/home-about-illustration-3.mEgxrqTy.svg"
            alt="Illustration 3"
            width={240}
            height={198}
            className="w-16 lg:w-200"
          />
        </div>
        <Image
          src="https://wearecheck.co/_nuxt/home-about-slant-3.CQaeGBYA.svg"
          alt="Illustration 4"
          width={190}
          height={100}
          className="lg:h-30 w-10 h-8 lg:w-full"
        />
        <div className="lg:mx-4">
          <Image
            src="https://wearecheck.co/_nuxt/home-about-illustration-4.B3s7jbUm.svg"
            alt="Illustration 4"
            width={240}
            height={198}
            className="w-16 lg:w-200"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
