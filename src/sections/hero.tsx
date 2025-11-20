export default function Hero() {
  return (
    <section className="relative w-full bg-[#0B0B0D] text-white">
      <img
        src="/assets/hero-img.png"
        className="absolute h-[450px] sm:h-[500px] md:h-[750px] left-[50%] top-[55%]"
        style={{ translate: "-50% -50%" }}
        alt=""
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-28 text-center">
        <h1 className="text-3xl sm:text-4xl md:text-[55px] font-medium leading-snug sm:leading-tight md:leading-tight">
          Discover your next million dollar
          <br className="hidden sm:block" />
          product in just minutes
        </h1>

        <p className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg max-w-xs sm:max-w-2xl mx-auto">
          Find your next winning product through TrendRocket <br />
          the go-to D2C research tool that analyzes all the data you need, all
          in one place.
        </p>

        <div
          className="
        relative inline-block p-[1.5px] rounded-full 
        mt-6 sm:mt-10 
        overflow-hidden /* Gradient chetlaridan oshib ketmasligi uchun */
      "
          style={{
            background: "linear-gradient(to right, #8A2BE2, #FF1493)",
            // background: 'linear-gradient(to right, var(--gradient-start-color, #8A2BE2), var(--gradient-end-color, #FF1493))',
          }}
        >
          <button
            className="
          px-8 py-3 rounded-full text-base font-semibold
          bg-black text-white
          transition cursor-pointer
          whitespace-nowrap /* Matn bir qatorda qolishi uchun */
        "
          >
            Start Your 7 Day Free Trial
          </button>
        </div>
      </div>
    </section>
  );
}
