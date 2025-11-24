import { useState } from 'react';

export default function Pricing() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <section id="pricing" className="w-full bg-[#0f0f11] text-white py-16 px-4 mt-[50px]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-semibold">
              Pricing for any business
            </h1>
          </div>

          <div className="grid grid-cols-1 items-start md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-[#141418] border border-white/10 rounded-2xl p-8 hover:border-purple-400/40 transition">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-2">Basic</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Pricing for every stage because of those wanting to load the
                  wallet.
                </p>
              </div>

              <div className="mb-6">
                <div className="flex items-baseline gap-1">
                  <span className="text-7xl font-medium">$49</span>
                  <span className="text-gray-400">per month</span>
                </div>
              </div>

              <button 
                onClick={openModal}
                className="w-full border-purple-500 border-2 cursor-pointer text-white font-semibold py-3 px-6 rounded-full transition duration-200 mb-8 hover:bg-purple-500/10"
              >
                Start Your Free Trial
              </button>

              <ul className="space-y-3">
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Buyed Search
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  SLA/Off+ Execute its updates
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Overview and review teacher
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Social and community performance
                </li>
                <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                  <img src="/assets/check-circle.svg" alt="" />
                  Access more than US$5,000 ($2.0%)
                </li>
              </ul>
            </div>

            <div className="bg-[#0E0C15] rounded-2xl p-8 transition relative">
              <div
                className="absolute inset-0 rounded-2xl p-[1px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom right, #8A2BE2, #FF1493)",
                }}
              >
                <div className="w-full h-full bg-[#0E0C15] rounded-2xl"></div>
              </div>

              <div className="relative z-10">
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-2 text-[#A259FF]">
                    Pro
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Designed for businesses that are prepared to accelerate their
                    growth.
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-7xl font-medium">$99</span>
                    <span className="text-gray-400">per month</span>
                  </div>
                </div>

                <button 
                  onClick={openModal}
                  className="w-full cursor-pointer bg-[#A259FF] text-black font-semibold py-3 px-6 rounded-full transition duration-200 mb-8 hover:bg-[#8A2BE2]"
                >
                  Start Your Free Trial
                </button>

                <ul className="space-y-3">
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Brand search
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Mainly access to new features
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    $6,000+ brands to explore
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Overview and review teacher
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Social and community performance
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Google Auto and more than 1 million ($1.0%)
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Tired visibility spaces
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Access to traffic and revenue estimates
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Profit margin and competitor analysis
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Supplies for featured products
                  </li>
                  <li className="flex items-center gap-3 border-b-[0.5px] pb-3 border-[#2E2E2E] text-sm text-gray-300">
                    <img src="/assets/check-circle.svg" alt="" />
                    Premium community
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-[#141418] border border-white/10 rounded-2xl w-full max-w-md mx-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold text-white">Start Your Free Trial</h2>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full bg-[#0f0f11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Enter your name"
                  />
                </div>

                <div>
                  <label htmlFor="surname" className="block text-sm font-medium text-gray-300 mb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    className="w-full bg-[#0f0f11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors"
                    placeholder="Enter your surname"
                  />
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-300 mb-2">
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows={4}
                    className="w-full bg-[#0f0f11] border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition-colors resize-none"
                    placeholder="Tell us about your business needs..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#A259FF] text-black font-semibold py-3 px-6 rounded-full transition duration-200 hover:bg-[#8A2BE2] mt-6"
                >
                  Start Your Free Trial
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}