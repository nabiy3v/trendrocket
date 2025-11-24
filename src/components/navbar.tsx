import logo from "/assets/logo.png";

export default function Navbar() {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById('pricing');
    if (pricingSection) {
      pricingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <header className="w-full px-4 py-4 bg-[#0B0B0D]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <img
            src={logo}
            alt="Trend Rocket"
            className="h-8 w-auto object-contain"
          />
        </div>

        <div className="flex items-center">
          <button 
            onClick={scrollToPricing}
            className="border-purple-500 border-2 cursor-pointer text-white font-semibold text-[14px] sm:text-[16px] py-2 px-3 sm:py-2 sm:px-6 rounded-full transition duration-200 hover:bg-purple-500/10"
          >
            Start Free Trial
          </button>
        </div>
      </div>
    </header>
  );
}