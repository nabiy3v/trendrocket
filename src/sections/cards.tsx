import { useRef, useState } from 'react';

const cardData = [
  {
    id: 1,
    title: "Scaling Scores",
    desc: "Track brand growth month over month to see which brands are scaling. Compare them to other brands, too.",
    checks: ["Get nitty gritty with your data", "Search from endless amount of ways", "Gather specific insights"],
    icon: "/assets/sms.png",
    activeDotColor: "bg-purple-500",
    hoverColor: "hover:border-purple-400/40",
  },
  {
    id: 2,
    title: "Trend Viability Reports",
    desc: "Clean insights on brands, industries and products with thoughtfully compiled expert reports.",
    checks: ["Uncover important opportunities", "Identify potential influencer suppliers", "Compare global shipping costs"],
    icon: "/assets/opening.svg",
    activeDotColor: "bg-yellow-500",
    hoverColor: "hover:border-yellow-400/40",
  },
  {
    id: 3,
    title: "Endless Brand Dashboard",
    desc: "Centralize your data. If a product is hot, creative is scaling or a brand is killing it, you'll see it on one dashboard.",
    checks: ["See thousands of brands", "One centralized hub", "Keep an eye on competitors"],
    icon: "/assets/charger-green.svg",
    activeDotColor: "bg-green-500",
    hoverColor: "hover:border-green-400/40",
  },
  {
    id: 4,
    title: "Social & Advertising",
    desc: "Understand how a brand is advertising on Facebook, Instagram, TikTok and draw insights on scaling methods.",
    checks: ["See brand community activity", "See brand community engagement", "New brands added all the time"],
    icon: "/assets/charger-red.svg",
    activeDotColor: "bg-red-500",
    hoverColor: "hover:border-red-400/40",
  },
  {
    id: 5,
    title: "Compiled Brand Reviews",
    desc: "Analyze the market's response to specific products and discover new marketing angles from thousands of brands.",
    checks: ["Draw insights on specific products", "Discover new marketing angles", "Better understand your customer"],
    icon: "/assets/charger-blue.svg",
    activeDotColor: "bg-blue-500",
    hoverColor: "hover:border-blue-400/40",
  },
  {
    id: 6,
    title: "Magnified Search",
    desc: "Leave no stone unturned. Search by social growth, ad count, monthly store traffic, new products in the last 30 days or even Reddit.",
    checks: ["Get nitty gritty with your data", "Search in an endless amount of ways", "Gather specific insights"],
    icon: "/assets/charger-violet.svg",
    activeDotColor: "bg-violet-500",
    hoverColor: "hover:border-violet-400/40",
  },
];

export default function Cards() {
  const scrollRef = useRef(null);
  const itemsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollToCard = (index: any) => {
    setActiveIndex(index);
    const element = itemsRef.current[index];
    if (element) {
      // @ts-ignore
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'nearest',
        inline: 'center'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;

      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        setActiveIndex(cardData.length - 1);
        return;
      }

      if (scrollLeft === 0) {
        setActiveIndex(0);
        return;
      }

      const centerPosition = scrollLeft + (clientWidth / 2);
      let closestIndex = 0;
      let minDistance = Number.MAX_VALUE;

      itemsRef.current.forEach((item, index) => {
        if (item) {
          // @ts-ignore
          const itemCenter = item.offsetLeft + (item.offsetWidth / 2);
          const distance = Math.abs(centerPosition - itemCenter);

          if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
          }
        }
      });

      setActiveIndex(closestIndex);
    }
  };

  return (
    <section className="  w-full bg-[#0f0f11] text-white py-16 px-4 overflow-hidden">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-semibold">
          What you'll get with <br />{" "}
          TrendRocket
        </h1>
        <p className="text-gray-400 mt-2">
          Trusted by world's fastest-growing ecommerce brands
        </p>
      </div>
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto pb-8 gap-6 max-w-7xl mx-auto scrollbar-hide snap-x snap-mandatory px-4 md:px-10"
        style={{ scrollBehavior: 'smooth' }}
      >
        <div className="flex gap-6 flex-nowrap min-w-max mx-auto"> 
          {cardData.map((card, index) => (
            <div 
              key={card.id}
              // @ts-ignore
              ref={el => itemsRef.current[index] = el}
              onClick={() => scrollToCard(index)}
              className={`
                bg-[#141418] border border-white/10 rounded-2xl p-6 
                transition-all duration-300 ease-in-out cursor-pointer
                flex flex-col w-[300px] sm:w-96 flex-shrink-0 snap-center
                ${card.hoverColor}
                ${activeIndex === index 
                  ? 'border-white/40 bg-[#1a1a20]'
                  : 'opacity-80 hover:opacity-100'}
              `}
            >
              <h2 className="text-xl font-semibold mb-2">{card.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed flex-grow">
                {card.desc}
              </p>

              <ul className="mt-4 space-y-3 text-gray-300 text-sm">
                {card.checks.map((check, i) => (
                  <li key={i} className="flex items-center gap-2 text-[12px] text-[#ADA8C3]">
                     <img src="/assets/check.png" alt="" />
                    {check}
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex items-center justify-between pt-4 border-t border-white/5">
                {/* @ts-ignore */}
                <img src={card.icon} alt="" className="opacity-80" onError={(e) => e.target.style.display = 'none'} />
                <button className="text-gray-300 text-sm hover:text-white transition-colors flex items-center gap-1 group">
                  explore more 
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center space-x-3 mt-4">
        {cardData.map((card, index) => (
          <button
            key={card.id}
            onClick={() => scrollToCard(index)}
            className={`
              h-3 rounded-full transition-all duration-300 cursor-pointer
              ${activeIndex === index ? `w-8 ${card.activeDotColor}` : 'w-3 bg-gray-600 hover:bg-gray-500'}
            `}
            aria-label={`Show slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}