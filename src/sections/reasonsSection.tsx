export default function ReasonsSection() {
  return (
    <section className="w-full text-white py-14 px-6 mt-[50px] flex flex-col items-center justify-center">
      <h2 className="text-center text-3xl md:text-4xl font-medium leading-snug">
        3 Reasons why you <br /> should use TrendRocket
      </h2>

      <div className="max-w-6xl mx-auto mt-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="flex justify-center">
          <img
            src="/assets/laptop.png"
            alt="Trending Products"
            className="w-[90%] md:w-full max-w-[480px]"
          />
        </div>

        <div>
          <h3 className="text-2xl md:text-3xl font-semibold text-[#A259FF]">
            Discover <br />
            trending products
          </h3>

          <p className="text-gray-300 mt-4 leading-relaxed text-sm md:text-base max-w-[400px]">
            Find, produce and market a winning product with our real-time data,
            predictive analytics and access to top suppliers and manufacturers
            across the globe.
          </p>
        </div>
      </div>
    </section>
  );
}
