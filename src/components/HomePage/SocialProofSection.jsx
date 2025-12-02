import { AnimatedSection } from "./AnimatedSection";

export function SocialProofSection({ setSectionRef, visibleSections }) {
  return (
    <section className="relative z-10 py-16 bg-gradient-to-r from-blue-950/50 via-gray-950/70 to-blue-950/50 border-y border-blue-900/30 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          sectionKey="social-proof"
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        >
          <p className="text-center text-blue-200 mb-8">
            Trusted by innovative companies worldwide
          </p>
          <div className="flex justify-center items-center space-x-12 opacity-70 flex-wrap gap-6">
            <div className="text-2xl font-bold text-blue-300">TechCorp</div>
            <div className="text-2xl font-bold text-blue-300">InnovateLab</div>
            <div className="text-2xl font-bold text-blue-300">FutureScale</div>
            <div className="text-2xl font-bold text-blue-300">DataFlow</div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
