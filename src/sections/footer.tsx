export default function Footer() {
  return (
    <div className="footer-section bg-[#0f0f11] text-white py-12 px-4 mt-[50px]">
      <div className="max-w-7xl mx-auto">
        <div className="is-footer">
          <div className="footer-component flex flex-col lg:flex-row justify-between items-start lg:items-center mb-5 gap-8">
            <a href="#" className="fotter-left">
              <img
                src="/assets/logo.png"
                loading="lazy"
                alt="Trend Rocket Logo"
                className="footer-logo h-7 sm:h-8"
              />
            </a>

            <div className="new-footer-link-wraper flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
              <a
                href="/feature"
                className="text-gray-400 hover:text-white transition"
              >
                Features
              </a>
              <a
                href="#pricing"
                className="text-gray-400 hover:text-white transition"
              >
                Pricing
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Integrations
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                Solution
              </a>
              <a
                href="/faq"
                className="text-gray-400 hover:text-white transition"
              >
                FAQ
              </a>
            </div>
          </div>

          <div className="footer-social-link-wraper flex flex-col lg:flex-row justify-between items-start lg:items-center border-t border-gray-800 pt-5 gap-6">
            <p className="bottom-trend-rocket-text text-gray-400 text-sm">
              © 2024 TrendRocket
            </p>

            <div className="div-block-379 flex flex-wrap gap-4 sm:gap-6 text-sm sm:text-base">
              <a
                href="/affiliates"
                className="text-gray-400 hover:text-white transition"
              >
                Affiliates
              </a>
              <a
                href="/refund-policy"
                className="text-gray-400 hover:text-white transition"
              >
                Refund Policy
              </a>
              <a
                href="/terms-and-conditions"
                className="text-gray-400 hover:text-white transition"
              >
                Terms
              </a>
              <a
                href="/privacy-policy"
                className="text-gray-400 hover:text-white transition"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <p className="paragraph-126 text-gray-500 text-[10px] sm:text-xs mt-8 leading-relaxed text-center sm:text-left">
            DISCLAIMER: The content provided on Trend Rocket is for
            informational purposes only and should not be considered as
            professional advice. Any recommendations, reviews, or opinions
            expressed are based on personal experiences and research, and
            individual results may vary. Viewers are encouraged to conduct their
            own due diligence and consult with relevant professionals before
            making any purchasing decisions or implementing strategies discussed
            in this video.
          </p>
        </div>
      </div>
    </div>
  );
}
