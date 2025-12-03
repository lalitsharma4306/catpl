import { useState, useEffect } from "react";

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to adjust navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav 
      className={`fixed top-[10px] sm:top-[36px] left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-gray-950/98 border-b border-blue-900/70 shadow-lg" 
          : "bg-gray-950/95 border-b border-blue-900/50"
      } backdrop-blur-md`}
    >
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="flex justify-between items-center py-3 h-16">
          {/* Logo and Brand Section */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0 min-w-0">
            <img
              src="https://codeadapters.s3.ap-south-1.amazonaws.com/logo/ChatGPT+Image+Dec+2%2C+2025%2C+03_13_03+PM.png"
              alt="Code Adapters Logo"
              className="h-10 w-10 object-contain flex-shrink-0"
            />
            <span className="font-bold text-xs sm:text-sm md:text-lg lg:text-xl bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent inline whitespace-nowrap truncate max-w-[120px] sm:max-w-none">
              CODE ADAPTERS
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {[
              { href: "#home", label: "Home", isActive: true },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#about", label: "About" },
              { href: "#careers", label: "Careers" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`text-base font-medium transition-colors duration-200 hover:text-orange-400 ${
                  item.isActive ? "text-blue-200 font-semibold" : "text-blue-300"
                }`}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-lg text-base font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200 hover:scale-105 flex-shrink-0"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex flex-col justify-center items-center gap-1.5 p-1.5 text-blue-200 hover:text-orange-400 focus:outline-none transition-colors"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${
                  mobileMenuOpen ? "rotate-90" : "rotate-0"
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
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
          <div className="lg:hidden flex flex-col gap-1 py-2 border-t border-blue-900/30 animate-fade-in">
            {[
              { href: "#home", label: "Home", isActive: true },
              { href: "#services", label: "Services" },
              { href: "#portfolio", label: "Portfolio" },
              { href: "#about", label: "About" },
              { href: "#careers", label: "Careers" },
            ].map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm rounded-md transition-colors duration-200 hover:bg-blue-900/40 hover:text-orange-400 ${
                  item.isActive
                    ? "text-blue-100 font-semibold"
                    : "text-blue-300"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-200 hover:scale-105 m-1 text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </a>
          </div>
        )}
      </div>

      {/* Animations and responsive utilities */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.25s ease-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }

        /* Extra small screens adjustments */
        @media (max-width: 360px) {
          .nav-compress {
            max-width: 100%;
            overflow: hidden;
          }
        }
      `}</style>
    </nav>
  );
}
