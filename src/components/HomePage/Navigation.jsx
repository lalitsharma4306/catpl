export function Navigation() {
  return (
    // <nav className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-md border-b border-blue-900/50">
    // <nav className="fixed top-0 left-0 right-0 z-50 w-full bg-gray-950/95 backdrop-blur-md border-b border-blue-900/50">
    // <nav className="fixed top-12 left-0 right-0 z-40 w-full bg-gray-950/95 backdrop-blur-md border-b border-blue-900/50">
    // <nav className="fixed top-0 left-0 right-0 z-40 mt-[48px] bg-gray-950/95 backdrop-blur-md border-b border-blue-900/50">
    <nav className="fixed top-10 left-0 right-0 z-40 bg-gray-950/95 backdrop-blur-md border-b border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <img
              src="https://raw.createusercontent.com/7ae064c0-e76c-497a-aa8e-76deffe0c665/"
              alt="Code Adapter Logo"
              className="h-10 w-10"
            />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-orange-500 bg-clip-text text-transparent hidden sm:inline">
              CODE ADAPTERS
            </span>
          </div>
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
        </div>
      </div>
    </nav>
  );
}
