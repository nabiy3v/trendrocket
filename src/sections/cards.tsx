export default function Cards() {
  return (
    <section className="w-full bg-[#0f0f11] text-white py-16 px-4 overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          What you'll get with <br />{" "}
          <span className="mt-2 block">TrendRocket</span>
        </h1>
        <p className="text-gray-400 mt-2">
          Trusted by world's fastest-growing ecommerce brands
        </p>
      </div>

      <div className="flex overflow-x-auto pb-6 gap-6 max-w-7xl mx-auto scrollbar-hide">
        <div className="flex gap-6 flex-nowrap min-w-max">
          <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-purple-400/40 transition flex flex-col w-80 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-2">Scaling Scores</h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Track brand growth month over month to see which brands are
              scaling. Compare them to other brands, too.
            </p>

            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Get nitty gritty with your data
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Search from endless amount of ways
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Gather specific insights
              </li>
            </ul>

            <div className="mt-20 flex items-center justify-between">
              <img src="/assets/sms.png" alt="" />
              <button className="text-gray-300 text-sm hover:text-white">
                explore more →
              </button>
            </div>
          </div>

          <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-yellow-400/40 transition flex flex-col w-80 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-2">
              Trend Viability Reports
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Clean insights on brands, industries and products with
              thoughtfully compiled expert reports.
            </p>

            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Uncover important opportunities
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Identify potential influencer suppliers
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Compare global shipping costs
              </li>
            </ul>

            <div className="mt-20 flex items-center justify-between">
              <img src="/assets/opening.svg" alt="" />
              <button className="text-gray-300 text-sm hover:text-white">
                explore more →
              </button>
            </div>
          </div>

          <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-green-400/40 transition flex flex-col w-80 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-2">
              Endless Brand Dashboard
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Centralize your data. If a product is hot, creative is scaling or
              a brand is killing it, you'll see it on one dashboard.
            </p>

            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                See thousands of brands
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                One centralized hub
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Keep an eye on competitors
              </li>
            </ul>

            <div className="mt-20 flex items-center justify-between">
              <img src="/assets/charger-green.svg" alt="" />
              <button className="text-gray-300 text-sm hover:text-white">
                explore more →
              </button>
            </div>
          </div>

          <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-red-400/40 transition flex flex-col w-80 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-2">Social & Advertising</h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Understand how a brand is advertising on Facebook, Instagram,
              TikTok and draw insights on scaling methods.
            </p>

            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                See brand community activity
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                See brand community engagement
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                New brands added all the time
              </li>
            </ul>

            <div className="mt-20 flex items-center justify-between">
              <img src="/assets/charger-red.svg" alt="" />
              <button className="text-gray-300 text-sm hover:text-white">
                explore more →
              </button>
            </div>
          </div>

          <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-red-400/40 transition flex flex-col w-80 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-2">
              Compiled Brand Reviews
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Analyze the market's response to specific products and discover
              new marketing angles from thousands of brands.
            </p>

            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Draw insights on specific products
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Discover new marketing angles
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Better understand your customer
              </li>
            </ul>

            <div className="mt-20 flex items-center justify-between">
              <img src="/assets/charger-blue.svg" alt="" />
              <button className="text-gray-300 text-sm hover:text-white">
                explore more →
              </button>
            </div>
          </div>

          <div className="bg-[#141418] border border-white/10 rounded-2xl p-6 hover:border-blue-400/40 transition flex flex-col w-80 flex-shrink-0">
            <h2 className="text-xl font-semibold mb-2">Magnified Search</h2>
            <p className="text-gray-400 text-sm leading-relaxed flex-grow">
              Leave no stone unturned. Search by social growth, ad count,
              monthly store traffic, new products in the last 30 days or even
              Reddit.
            </p>

            <ul className="mt-4 space-y-3 text-gray-300 text-sm">
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Get nitty gritty with your data
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Search in an endless amount of ways
              </li>
              <li className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                <img src="/assets/check.png" alt="Check" className="w-4 h-4" />
                Gather specific insights
              </li>
            </ul>

            <div className="mt-20 flex items-center justify-between">
              <img src="/assets/charger-violet.svg" alt="" />
              <button className="text-gray-300 text-sm hover:text-white">
                explore more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
