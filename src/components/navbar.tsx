import logo from "/assets/logo.png";

export default function Navbar() {
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

        <div className="flex items-center gap-4">
          <button className="text-gray-300 text-sm hover:text-white transition">
            Login
          </button>

          <button
            className="
              text-sm text-white px-4 py-1.5 rounded-full
              border border-transparent
              hover:opacity-90 transition
            "
          >
            Sign up
          </button>
        </div>
      </div>
    </header>
  );
}
