const Home = () => {
  
  return (
    <>
      <main className="relative lg:px-18 px-4 lg:pt-24 pt-24 pb-16 flex flex-col lg:items-center justify-center">
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
            <div className="absolute lg:bottom-25 lg:-right-8 right-2 top-9 rotate-[15deg] bg-[#ff9140] lg:px-4 px-2 lg:h-12">
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
            We use technology to create undeniably brilliant work for companies
            with taste.
          </p>
          <button className="mango bg-[#ff9140] text-4xl text-white uppercase px-8 py-4 max-w-[360px] flex items-center justify-center gap-2 hover:opacity-90 transition-opacity">
            Lets Build
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
