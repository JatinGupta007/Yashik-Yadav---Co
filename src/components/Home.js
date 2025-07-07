const Home = () => {
  
  return (
    <>
      <main className="relative lg:px-18 px-4 pt-18 pb-16 flex flex-col lg:items-center justify-center">
        <div className="flex items-center justify-center w-full">
          <h2 className="text-center text-2xl">BEST DIGITAL MARKETING AGENCY</h2>
        </div>
        <div className="flex items-center gap-3 lg:h-[220px]">
          <div className="relative">
            <div className="absolute lg:top-12 lg:-left-8 top-6 -left-3 rotate-[-12deg] bg-yellow-400 lg:px-4 px-2 lg:h-12">
              <p className="lg:text-[40px] text-[20px] mango">TECH</p>
            </div>

            <h1 className="lg:text-[250px] text-[120px] mango hidden lg:block">
              RE
            </h1>
            <h1 className="lg:text-[250px] text-[120px] mango h-30 lg:hidden">
              RETHINK
            </h1>
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
            <h1 className="lg:text-[250px] text-[120px] mango hidden lg:block">
              THINK
            </h1>
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
            <h1 className="lg:text-[250px] text-[120px] mango h-60 ml-12 lg:h-full">
              EVERYTHING
            </h1>

            <div className="absolute bottom-24 right-[-10px] rotate-[-15deg] bg-orange-200 lg:px-5 px-2 lg:h-13">
              <p className="mango lg:text-[40px] text-[20px]">STRATEGY</p>
            </div>
          </div>
        </div>

        <video loop muted autoPlay className="-mt-10 min-w-screen lg:hidden">
          <source src="/video_1.mp4" />
        </video>

        {/* Description + button */}
        <section className="mt-10 flex flex-col lg:flex-row justify-end items-center lg:justify-between lg:gap-54  gap-10">
          <p className="text-xl max-w-110">
            Grow your business with a Jaipur-based digital marketing company
            trusted by startups and enterprises. We deliver results via SEO,
            paid ads, social media & performance strategies.
          </p>
          <button className="mango bg-black text-3xl text-white uppercase px-8 py-4  flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
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
        </section>
      </main>
    </>
  );
};

export default Home;
