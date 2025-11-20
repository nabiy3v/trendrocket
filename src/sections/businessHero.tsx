export default function BusinessHero() {
    return (
      <div className="w-full bg-[#0f0f11] text-white py-20 px-4 relative mt-[100px]">
  
        {/* BACKGROUND IMAGE */}
        <img
          src="./src/assets/hero-img.png"
          className="absolute h-[700px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 opacity-30"
          alt=""
        />
  
        {/* CONTENT */}
        <div className="max-w-6xl mx-auto flex flex-col items-center relative z-10">
          <h1 className="text-3xl lg:text-6xl font-semibold leading-tight mb-6 text-center">
            Take your business <br />
            to new heights
          </h1>
  
          <p className="text-md sm:text-xl text-[#6a718e] mb-8 leading-relaxed text-center">
            You're just one click away from your next million-dollar product.
          </p>
  
          <button className="bg-white text-black font-semibold py-2 px-6 sm:py-4 sm:px-8 rounded-full transition duration-200 cursor-pointer">
            Start Your 7 Day Free Trial
          </button>
        </div>
      </div>
    );
  }
  