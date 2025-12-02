export function Footer() {
  return (
    <footer
      id="contact"
      className="relative z-10 bg-gray-950/80 border-t border-blue-900/30 text-white py-16 backdrop-blur"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="https://raw.createusercontent.com/7ae064c0-e76c-497a-aa8e-76deffe0c665/"
                alt="Code Adapter Technologies"
                className="h-8 w-8"
              />
              <span className="font-bold text-lg">Code Adapter</span>
            </div>
            <p className="text-blue-200 mb-4">
              Bridging your vision with the right technology stack through
              expert development and strategic consultancy.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Services</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Product Engineering
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Technology Consultancy
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="hover:text-orange-400 transition-colors"
                >
                  Digital Transformation
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Company</h4>
            <ul className="space-y-2 text-blue-200">
              <li>
                <a
                  href="#about"
                  className="hover:text-orange-400 transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-orange-400 transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#careers"
                  className="hover:text-orange-400 transition-colors"
                >
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-blue-300">Contact</h4>
            <ul className="space-y-2 text-blue-200">
              <li>hello@codeadapter.tech</li>
              <li>+91 (880) 072-5933</li>
              <li>San Francisco, CA</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-blue-900/30 mt-12 pt-8 text-center text-blue-300">
          <p>&copy; 2025 Code Adapter Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
