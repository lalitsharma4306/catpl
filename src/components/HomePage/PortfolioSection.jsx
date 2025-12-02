import { CheckCircle } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

export function PortfolioSection({ setSectionRef, visibleSections }) {
  return (
    <section
      id="portfolio"
      className="relative z-10 py-20 bg-gradient-to-r from-blue-950/30 via-gray-950 to-orange-950/30 border-y border-blue-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          setSectionRef={setSectionRef}
          sectionKey="portfolio-header"
          visibleSections={visibleSections}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-400 bg-clip-text text-transparent mb-4">
              Our Portfolio
            </h2>
            <p className="text-xl text-blue-200">
              Showcasing projects that made real impact
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          setSectionRef={setSectionRef}
          sectionKey="portfolio-items"
          visibleSections={visibleSections}
          className="mb-0"
        >
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "E-Commerce Platform",
                desc: "Scaled to 1M+ transactions/month",
                tech: "React, Node.js, PostgreSQL",
                result: "3x revenue increase",
              },
              {
                title: "AI Analytics Dashboard",
                desc: "Real-time data visualization",
                tech: "Next.js, Python, BigQuery",
                result: "50% faster insights",
              },
              {
                title: "Mobile Banking App",
                desc: "Secure transaction platform",
                tech: "React Native, Golang",
                result: "100K+ daily active users",
              },
            ].map((project, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-blue-900/40 to-blue-800/20 p-6 rounded-2xl shadow-lg border border-blue-700/50 hover:border-blue-500/80 transition-all hover:shadow-2xl hover:shadow-blue-500/30"
              >
                <h3 className="text-xl font-bold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-blue-100 mb-4">{project.desc}</p>
                <p className="text-sm text-blue-300 mb-4 font-mono">
                  {project.tech}
                </p>
                <div className="pt-4 border-t border-blue-700/30">
                  <p className="text-green-400 font-semibold">
                    {project.result}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
