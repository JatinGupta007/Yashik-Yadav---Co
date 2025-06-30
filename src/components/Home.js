import Image from "next/image";

const Home = () => {
  return (
    <main className="px-18 pt-52 pb-16">
      <div className="flex items-center gap-3 h-[220px]">
        <div className="relative">
          <div className="absolute top-12 -left-8 rotate-[-12deg] bg-yellow-400 px-4 h-12">
            <p className="text-[40px] mango">BRANDING</p>
          </div>
          <h1 className="text-[250px] mango">RE</h1>
        </div>

        <video loop muted autoPlay className="-mt-8 h-[180px] ">
          <source src="/video_1.mp4" />
        </video>

        <div className="relative">
          <h1 className="text-[250px] mango">THINK</h1>
          <div className="absolute bottom-25 -right-8 rotate-[15deg] bg-purple-300 px-4 h-12">
            <p className="text-[40px] mango">DIGITAL</p>
          </div>
        </div>
      </div>

      <div className="flex items-center h-[220px]">
        <video loop muted autoPlay className="-mt-8 h-[180px] ">
          <source src="/video_1.mp4" />
        </video>

        <div className="relative">
          <h1 className="text-[250px] mango">IMAGINING</h1>

          <div className="absolute bottom-24 right-[-10px] rotate-[-15deg] bg-orange-200 px-5 h-13">
            <p className="mango text-[40px]">BRAND</p>
          </div>
        </div>

      </div>

      {/* Description + button */}
      <section className="mt-10 flex justify-between">
        <p className="text-xl max-w-110">
          Daring companies come to us to craft ideas, products and experiences
          that redefine industries and defy possibilities.
        </p>
        <button className="mango bg-black text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
          Start a conversation
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
      </section>
    </main>
  );
};

export default Home;
