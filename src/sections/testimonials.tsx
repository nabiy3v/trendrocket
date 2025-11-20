export default function Testimonials() {
  return (
    <section className="w-full bg-[#0f0f11] text-white py-16 px-4 mt-[50px]">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-5xl font-semibold text-center mb-4">What the community is saying</h1>
        <div className="text-center mb-12">
          <div className="text-lg sm:text-xl text-gray-400">Join hundreds of others trend-rocketing their businesses</div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="rounded-lg p-6 flex flex-col h-full">
            <div className="mb-6 flex-grow">
              <p className="text-[17px] leading-relaxed">
                "The product information in TrendRocket has removed the guesswork when finding that next winning product. We have streamlined product sourcing workflows and improved productivity by at least 50%."
              </p>
            </div>
            <div className="flex flex-col items-start mt-auto">
              <div className="flex space-x-1 mb-4">
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
              </div>
              <div className="font-semibold">
                <div>Paddy K</div>
                <div className="text-gray-400">Brand Manager</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="rounded-lg p-6 flex flex-col h-full">
            <div className="mb-6 flex-grow">
              <p className="text-[17px] leading-relaxed">
                "I found I was constantly jumping between platforms comparing data, trying to see what our assets our competitors were scaling. TrendRocket brings it all together, and I truly believe our company wouldn't be competitive if we hadn't started using it."
              </p>
            </div>
            <div className="flex flex-col items-start mt-auto">
              <div className="flex space-x-1 mb-4">
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
              </div>
              <div className="font-semibold">
                <div>Rachael C</div>
                <div className="text-gray-400">Brand Manager</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="rounded-lg p-6 flex flex-col h-full">
            <div className="mb-6 flex-grow">
              <p className="text-[17px] leading-relaxed">
                "With the market constantly changing, TrendRocket is giving me the edge I need to stay ahead of the consumer and our competitors. We are able to find the next product our customers are going to fall in love with!"
              </p>
            </div>
            <div className="flex flex-col items-start mt-auto">
              <div className="flex space-x-1 mb-4">
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
                <img src="./src/assets/star.png" alt="star" className="w-5 h-5" />
              </div>
              <div className="font-semibold">
                <div>Daniel</div>
                <div className="text-gray-400">Brand Manager</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}