import { Users, Zap, CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function AboutSection({ setSectionRef, visibleSections }) {
  return (
    <section id="about" className="relative z-10 py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          setSectionRef={setSectionRef}
          sectionKey="about-header"
          visibleSections={visibleSections}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-400 bg-clip-text text-transparent mb-4">
              About Code Adapter
            </h2>
            <p className="text-xl text-blue-200">
              Bridging vision and technology since 2020
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          setSectionRef={setSectionRef}
          sectionKey="about-content"
          visibleSections={visibleSections}
        >
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                At Code Adapter, we believe great technology should adapt to
                your unique business needs, not the other way around. Our team
                of expert engineers and strategists work collaboratively to
                transform your vision into scalable, maintainable solutions.
              </p>
              <p className="text-blue-100 text-lg mb-6 leading-relaxed">
                With over 50+ successful projects and a team of 20+ engineers,
                we've helped startups scale to unicorn status and enterprises
                modernize their tech stack. We're not just builders—we're
                partners in your success.
              </p>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">50+</div>
                  <div className="text-blue-300 text-sm">Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">20+</div>
                  <div className="text-blue-300 text-sm">Engineers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400">$2B+</div>
                  <div className="text-blue-300 text-sm">GMV Created</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/40 to-orange-900/40 rounded-2xl p-12 border border-blue-700/50">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Expert Team
                    </h4>
                    <p className="text-blue-200">
                      Specialists in full-stack, mobile, and cloud solutions
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Agile Approach
                    </h4>
                    <p className="text-blue-200">
                      Rapid iteration and continuous improvement
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold mb-1">
                      Quality Focus
                    </h4>
                    <p className="text-blue-200">
                      Production-grade code and best practices
                    </p>
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
