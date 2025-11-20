export default function FAQ() {
    return (
      <div className="max-w-6xl mx-auto px-4 py-16 mt-[100px]">
        <div className="faq-component">
          <h1 className="text-4xl md:text-5xl font-medium text-center mb-8">
            Frequently asked questions
          </h1>
          
          <div className="text-center mb-12">
            <div className="text-gray-400">
              Haven't found what you're looking for?{' '}
              <a 
                href="#" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Contact us
              </a>
            </div>
          </div>
  
          <div className="max-w-3xl mx-auto space-y-4">
            {/* FAQ Item 1 */}
            <div className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full text-left py-3">
                <h4 className="sm:text-lg font-medium">
                  Can I test Trend Rocket before subscribing?
                </h4>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
  
            {/* FAQ Item 2 */}
            <div className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full text-left py-3">
                <h4 className="sm:text-lg font-medium">
                  Where do you collect your data?
                </h4>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
  
            {/* FAQ Item 3 */}
            <div className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full text-left py-3">
                <h4 className="sm:text-lg font-medium">
                  How up to date is the data?
                </h4>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
  
            {/* FAQ Item 4 */}
            <div className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full text-left py-3">
                <h4 className="sm:text-lg font-medium">
                  What is a Trend Viability Report?
                </h4>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
  
            {/* FAQ Item 5 */}
            <div className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full text-left py-3">
                <h4 className="sm:text-lg font-medium">
                  How frequently do you add new brands?
                </h4>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
  
            {/* FAQ Item 6 */}
            <div className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full text-left py-3">
                <h4 className="sm:text-lg font-medium">
                  Are you planning to track other Ecommerce platforms as well?
                </h4>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
  
            {/* FAQ Item 7 */}
            <div className="border-b border-gray-700 pb-4">
              <button className="flex justify-between items-center w-full text-left py-3">
                <h4 className="sm:text-lg font-medium">
                  Can I join the TrendRocket.io Affiliate Program?
                </h4>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }