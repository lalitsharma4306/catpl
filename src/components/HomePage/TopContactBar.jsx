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
    <div className="fixed top-0 left-0 right-0 z-50 bg-blue-950/80 border-b border-blue-900/50 backdrop-blur-md">
      <div className="w-full px-2 sm:px-3 md:px-4 lg:px-6 xl:px-8">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center py-1 sm:py-2 gap-1 sm:gap-0">
          {/* Contact Info Section */}
          <div className="flex flex-row flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm">
            <a
              href="mailto:info@codeadapters.com"
              className="flex items-center text-blue-200 hover:text-orange-400 transition-colors whitespace-nowrap hover:scale-105 min-w-0"
            >
              <Mail className="h-4 w-4 mr-1 sm:mr-1.5 text-orange-500 flex-shrink-0" />
              <span className="truncate">info@codeadapters.com</span>
            </a>
            <a
              href="tel:+918880072593"
              className="flex items-center text-blue-200 hover:text-orange-400 transition-colors whitespace-nowrap hover:scale-105 min-w-0"
            >
              <Phone className="h-4 w-4 mr-1 sm:mr-1.5 text-orange-500 flex-shrink-0" />
              <span className="truncate">+91 (888) 007-25933</span>
            </a>
          </div>

          {/* Social Media Icons Section */}
          <div className="hidden sm:flex items-center gap-1.5 sm:gap-2 lg:gap-3 justify-start sm:justify-end">
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors hover:scale-110 p-1 rounded-md hover:bg-blue-900/30"
              aria-label="Twitter"
              title="Twitter"
            >
              <Twitter className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors hover:scale-110 p-1 rounded-md hover:bg-blue-900/30"
              aria-label="Facebook"
              title="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors hover:scale-110 p-1 rounded-md hover:bg-blue-900/30"
              aria-label="Instagram"
              title="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </a>
            <a
              href="#"
              className="text-blue-300 hover:text-orange-400 transition-colors hover:scale-110 p-1 rounded-md hover:bg-blue-900/30"
              aria-label="LinkedIn"
              title="LinkedIn"
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
        
        @media (max-width: 320px) {
          /* Extra small screens */
          .truncate-sm { max-width: 120px; overflow: hidden; text-overflow: ellipsis; }
        }
      `}</style>
    </div>
  );
}
