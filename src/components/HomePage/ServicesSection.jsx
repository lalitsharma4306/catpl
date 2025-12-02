import { Code, Compass, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function ServicesSection({ setSectionRef, visibleSections }) {
  return (
    <section id="services" className="relative z-10 py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          sectionKey="services-header"
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-400 bg-clip-text text-transparent mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-blue-200">
              Two distinct paths to transform your technology landscape
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          sectionKey="services-cards"
          className="mb-0"
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-8 rounded-2xl shadow-lg border border-blue-700/50 hover:border-blue-500/80 transition-all hover:shadow-2xl hover:shadow-blue-500/30">
              <div className="w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center mb-6 border border-blue-400/50">
                <Code className="h-8 w-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Product Engineering
              </h3>
              <p className="text-blue-100 mb-6">
                From idea to scalable product. We build robust software with the
                perfect technology blend.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Full-stack development
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Mobile app development
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Cloud architecture
                </li>
              </ul>
              <button className="text-blue-400 font-semibold hover:text-orange-400 transition-colors">
                Learn More →
              </button>
            </div>

            <div className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 p-8 rounded-2xl shadow-lg border border-orange-700/50 hover:border-orange-500/80 transition-all hover:shadow-2xl hover:shadow-orange-500/30">
              <div className="w-16 h-16 bg-orange-500/20 rounded-lg flex items-center justify-center mb-6 border border-orange-400/50">
                <Compass className="h-8 w-8 text-orange-400" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Technology Consultancy
              </h3>
              <p className="text-blue-100 mb-6">
                Optimize your strategy, architecture, and teams. Your guide in
                the complex tech landscape.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Tech stack selection
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  Digital transformation
                </li>
                <li className="flex items-center text-blue-200">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2" />
                  CTO-as-a-Service
                </li>
              </ul>
              <button className="text-orange-400 font-semibold hover:text-blue-400 transition-colors">
                Learn More →
              </button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
