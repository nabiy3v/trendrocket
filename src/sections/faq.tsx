import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "Can I test Trend Rocket before subscribing?",
      answer: "Yes, we offer a 14-day free trial for all new users. You'll have access to all features during this period with no credit card required."
    },
    {
      question: "Where do you collect your data?",
      answer: "We collect data from multiple sources including social media platforms, e-commerce sites, search engines, and industry reports to provide comprehensive trend analysis."
    },
    {
      question: "How up to date is the data?",
      answer: "Our data is updated in real-time for premium subscribers and refreshed every 24 hours for standard users. We process over 1 million data points daily."
    },
    {
      question: "What is a Trend Viability Report?",
      answer: "A Trend Viability Report analyzes market demand, competition, and growth potential to help you determine if a trend is worth pursuing for your business."
    },
    {
      question: "How frequently do you add new brands?",
      answer: "We add new brands to our database weekly. Our team continuously monitors emerging brands across various industries to ensure our data remains comprehensive."
    },
    {
      question: "Are you planning to track other Ecommerce platforms as well?",
      answer: "Yes, we're actively working on expanding our platform coverage. We plan to add support for additional e-commerce platforms in the coming months."
    },
    {
      question: "Can I join the TrendRocket.io Affiliate Program?",
      answer: "Absolutely! Our affiliate program offers competitive commissions. You can apply through our website, and our team will review your application within 2-3 business days."
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 mt-[100px]">
      <div className="faq-component">
        <h1 className="text-4xl md:text-5xl font-medium text-center mb-8">
          Frequently asked questions
        </h1>

        <div className="text-center mb-12">
          <div className="text-gray-400">
            Haven't found what you're looking for?{" "}
            <a
              href="#"
              className="text-purple-400 hover:text-purple-300 transition-colors"
            >
              Contact us
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
              <button 
                className="flex justify-between items-center w-full text-left py-3"
                onClick={() => toggleFAQ(index)}
              >
                <h4 className="sm:text-lg font-medium">
                  {faq.question}
                </h4>
                <svg
                  className={`w-6 h-6 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="text-gray-300 py-2 pl-2">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}