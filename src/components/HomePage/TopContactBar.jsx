import {
  Mail,
  Phone,
  Twitter,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

export function TopContactBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-40 bg-blue-950/80 border-b border-blue-900/50 py-3 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div
          className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-xs sm:text-sm gap-2 sm:gap-0"
        >
          <div className="flex flex-row flex-wrap items-center space-x-4 sm:space-x-6 overflow-x-auto scrollbar-hide">
            <a
              href="mailto:info@codeadapter.tech"
              className="flex items-center text-blue-200 hover:text-orange-400 transition-colors whitespace-nowrap"
            >
              <Mail className="h-4 w-4 mr-2 text-orange-500" />
              info@codeadapters.com
            </a>
            <a
              href="tel:+15551234567"
              className="flex items-center text-blue-200 hover:text-orange-400 transition-colors whitespace-nowrap"
            >
              <Phone className="h-4 w-4 mr-2 text-orange-500" />
              +91 (888) 007-25933
            </a>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-4 mt-1 sm:mt-0 justify-start sm:justify-end">
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors"
            >
              <Linkedin className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
      {/* Hide scrollbar utility for overflow-x on mobile */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}
