import { ArrowRight } from "lucide-react";

export function HeroSection({ isVisible }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div
          className={`text-left transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            CODE ADAPTERS
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-orange-500 bg-clip-text text-transparent">
              TECHNOLOGY
            </span>
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-2xl">
            Delivering intelligent solutions that adapt to your vision.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all flex items-center justify-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-500/20 hover:border-blue-300 transition-all">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
