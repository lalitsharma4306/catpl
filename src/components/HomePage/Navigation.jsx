import { useState } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-10 left-0 right-0 z-40 bg-gray-950/95 backdrop-blur-md border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              // src="https://raw.createusercontent.com/7ae064c0-e76c-497a-aa8e-76deffe0c665/"
              src="https://codeadapters.s3.ap-south-1.amazonaws.com/logo/ChatGPT+Image+Dec+2%2C+2025%2C+03_13_03+PM.png"
              alt="Code Adapter Logo"
              className="h-10 w-10"
            />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent hidden sm:inline">
              CODE ADAPTERS
            </span>
          </div>
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="text-blue-200 font-semibold hover:text-orange-400 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-blue-200 hover:text-orange-400 transition-colors"
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="text-blue-200 hover:text-orange-400 transition-colors"
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="text-blue-200 hover:text-orange-400 transition-colors"
            >
              About
            </a>
            <a
              href="#careers"
              className="text-blue-200 hover:text-orange-400 transition-colors"
            >
              Careers
            </a>
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all"
            >
              Contact
            </a>
          </div>
          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen((open) => !open)}
              className="text-blue-200 hover:text-orange-400 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-8 w-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {mobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden flex flex-col items-start space-y-2 mt-2 bg-gray-950/95 rounded-lg shadow-lg p-4 border border-blue-900/50 animate-fade-in">
            <a
              href="#home"
              className="w-full text-blue-200 font-semibold hover:text-orange-400 transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </a>
            <a
              href="#services"
              className="w-full text-blue-200 hover:text-orange-400 transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </a>
            <a
              href="#portfolio"
              className="w-full text-blue-200 hover:text-orange-400 transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Portfolio
            </a>
            <a
              href="#about"
              className="w-full text-blue-200 hover:text-orange-400 transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#careers"
              className="w-full text-blue-200 hover:text-orange-400 transition-colors py-1"
              onClick={() => setMobileMenuOpen(false)}
            >
              Careers
            </a>
            <a
              href="#contact"
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all mt-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>
      {/* Simple fade-in animation for mobile menu */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.2s ease;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </nav>
  );
}
