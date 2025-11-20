import React from 'react';

const AllInOnePlatformUIMinimal: React.FC = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 flex flex-col items-center mt-[100px]">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold text-white mb-2">
          An all-in-one platform
        </h1>
        <p className="text-lg text-gray-400">
          Replace 8+ tools with TrendRocket
        </p>
      </div>

      <div className="w-full max-w-4xl border border-gray-600 p-6 sm:p-10 rounded-3xl shadow-2xl">
        
        <div className="grid grid-cols-2 gap-4 pb-4 border-b border-gray-700 mb-6">
          <h2 className="text-xl sm:text-2xl font-semibold" style={{ color: '#68D391' }}>
            Feature
          </h2>
          <h2 className="text-xl sm:text-2xl font-semibold" style={{ color: '#FC8181' }}>
            What it replaces
          </h2>
        </div>

        <div>
          
          <div className="grid grid-cols-2 items-center gap-4 border-b border-[#27252D] py-4">
            <div className="flex items-center space-x-3">
            <img src="/assets/green-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                Trend Viability Report
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/assets/red-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                <span className='line-through'>Google Trends</span>, <span className='line-through'>Similar Web</span>
              </span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 items-center gap-4 border-b border-[#27252D] py-4">
            <div className="flex items-center space-x-3">
              <img src="/assets/green-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                15 000+ trending brands
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/assets/red-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                <span className='line-through'>Alibaba</span>, <span className='line-through'>AliExpress</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4 border-b border-[#27252D] py-4">
            <div className="flex items-center space-x-3">
              <img src="/assets/green-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                Trending Ads
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/assets/red-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                <span className='line-through'>Ad-Spy</span>, <span className='line-through'>Facebook Ad Library</span>
              </span>
            </div>
          </div>

          <div className="grid grid-cols-2 items-center gap-4 border-b border-[#27252D] py-4">
            <div className="flex items-center space-x-3">
              <img src="/assets/green-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                Traffic and Revenue Data
              </span>
            </div>
            <div className="flex items-center space-x-3">
              <img src="/assets/red-check.png" alt="" />
              <span className="text-white text-base sm:text-lg">
                <span className='line-through'>Similar Web</span>, <span className='line-through'>Charm.io</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default AllInOnePlatformUIMinimal;