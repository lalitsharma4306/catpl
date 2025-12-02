import { Code } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function CaseStudySection({ setSectionRef, visibleSections }) {
  return (
    <section className="relative z-10 py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          sectionKey="case-study"
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        >
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white shadow-2xl shadow-orange-500/30">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Featured Success Story
                </h2>
                <h3 className="text-xl mb-4">
                  FinTech Platform Transformation
                </h3>
                <p className="mb-6 opacity-90">
                  We helped a growing fintech startup scale their platform to
                  handle 10x more transactions while reducing infrastructure
                  costs by 40%.
                </p>
                <div className="flex items-center space-x-6 mb-6">
                  <div>
                    <div className="text-2xl font-bold">40%</div>
                    <div className="text-sm opacity-75">Cost Reduction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">10x</div>
                    <div className="text-sm opacity-75">Scale Increase</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-75">Uptime</div>
                  </div>
                </div>
                <button className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Read Full Case Study
                </button>
              </div>
              <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                <div className="bg-white/20 rounded-lg h-48 flex items-center justify-center">
                  <div className="text-center">
                    <Code className="h-16 w-16 mx-auto mb-4 opacity-75" />
                    <p className="opacity-75">Platform Dashboard Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
