import { Users, Compass, Code, Zap } from "lucide-react";
import { AnimatedSection } from "./AnimatedSection";

const processSteps = [
  {
    icon: Users,
    title: "Discover",
    desc: "Deep dive into your vision and requirements",
  },
  {
    icon: Compass,
    title: "Architect",
    desc: "Design the perfect technology blueprint",
  },
  {
    icon: Code,
    title: "Build/Advise",
    desc: "Execute with precision and expertise",
  },
  {
    icon: Zap,
    title: "Scale",
    desc: "Optimize and grow your solution",
  },
];

export function ProcessSection({ setSectionRef, visibleSections }) {
  return (
    <section className="relative z-10 py-20 bg-gradient-to-r from-blue-950/30 via-gray-950 to-orange-950/30 border-y border-blue-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          sectionKey="process-header"
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-400 bg-clip-text text-transparent mb-4">
              Our Adaptive Process
            </h2>
            <p className="text-xl text-blue-200">
              A proven methodology that adapts to your unique needs
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          sectionKey="process-steps"
          className="mb-0"
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        >
          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/40">
                  <step.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-blue-200">{step.desc}</p>
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
