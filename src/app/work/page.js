import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import Popup from "@/components/popup";
import WorkHome from "@/components/WorkHome";

const Work = () => {
  return (
    <main className="overflow-hidden">
      <Header />
      <Popup />
      <section className="flex flex-col lg:flex-row justify-between lg:mx-16 mx-7">
        <div className="">
          <h1 className="text-[100px] lg:text-[200px] mango">OUR WORK</h1>
        </div>
        <p className="lg:w-1/3 text-lg lg:mt-14 mb-16 lg:mb-0">
          For almost a decade, we&apos;ve partnered with some of the most
          audacious companies across a range of industries. From rethinking food
          delivery to enabling financial accessibility to reimagining the future
          of energy on a continent.
        </p>
      </section>

      <div className="flex lg:gap-10 gap-5 text-3xl lg:text-5xl mango text-[#f16333]  border-b border-[#ff9140] mx-7 lg:mx-16 pb-6 lg:pb-10 mb-20">
        <a href="#">ALL PROJECTS</a>
        <a href="#">STARTEGY</a>
        <a href="#">BRAND</a>
        <a href="#">DIGITAL</a>
      </div>

      <WorkHome />
      <Footer />
    </main>
  );
};

export default Work;
