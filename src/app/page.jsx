"use client";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { AnimatedBackground } from "@/components/HomePage/AnimatedBackground";
import { TopContactBar } from "@/components/HomePage/TopContactBar";
import { Navigation } from "@/components/HomePage/Navigation";
import { HeroSection } from "@/components/HomePage/HeroSection";
import { SocialProofSection } from "@/components/HomePage/SocialProofSection";
import { ServicesSection } from "@/components/HomePage/ServicesSection";
import { ProcessSection } from "@/components/HomePage/ProcessSection";
import { CaseStudySection } from "@/components/HomePage/CaseStudySection";
import { PortfolioSection } from "@/components/HomePage/PortfolioSection";
import { AboutSection } from "@/components/HomePage/AboutSection";
import { CareersSection } from "@/components/HomePage/CareersSection";
import { Footer } from "@/components/HomePage/Footer";
import { GlobalStyles } from "@/components/HomePage/GlobalStyles";
import { Code2, ArrowRight, Github, Zap, Users } from "lucide-react";

export default function HomePage() {
  const { isVisible, visibleSections, setSectionRef } = useScrollAnimation();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-gray-950 overflow-hidden">
      <div className="fixed inset-0 z-0">
        <AnimatedBackground />
      </div>
      <TopContactBar />
      <Navigation />
      <div className="relative z-10 pt-[96px] sm:pt-[108px]">
        <HeroSection isVisible={isVisible} />
        <SocialProofSection
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        />
        <ServicesSection
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        />
        <ProcessSection
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        />
        <CaseStudySection
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        />
        <PortfolioSection
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        />
        <AboutSection
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        />
        <CareersSection
          setSectionRef={setSectionRef}
          visibleSections={visibleSections}
        />
        <Footer />
      </div>
      <GlobalStyles />

      {/* Add the CSS animations */}
      <style jsx global>{`
        @keyframes codeFlow {
          0% {
            transform: translateY(0);
            opacity: 0.2;
          }
          50% {
            opacity: 0.3;
          }
          100% {
            transform: translateY(-20px);
            opacity: 0.2;
          }
        }

        @keyframes lineFlow {
          0% {
            stroke-dasharray: 0, 300;
            opacity: 0.3;
          }
          50% {
            opacity: 0.8;
          }
          100% {
            stroke-dasharray: 300, 0;
            opacity: 0.3;
          }
        }

        .animate-codeFlow {
          animation: codeFlow 8s ease-in-out infinite;
        }

        .animate-lineFlow {
          animation: lineFlow 4s ease-in-out infinite;
          stroke-dasharray: 300;
        }

        .animation-delay-300 {
          animation-delay: 300ms;
        }
        .animation-delay-500 {
          animation-delay: 500ms;
        }
        .animation-delay-600 {
          animation-delay: 600ms;
        }
        .animation-delay-700 {
          animation-delay: 700ms;
        }
        .animation-delay-900 {
          animation-delay: 900ms;
        }
        .animation-delay-1100 {
          animation-delay: 1100ms;
        }
        .animation-delay-1200 {
          animation-delay: 1200ms;
        }
        .animation-delay-1400 {
          animation-delay: 1400ms;
        }
        .animation-delay-1500 {
          animation-delay: 1500ms;
        }
        .animation-delay-1600 {
          animation-delay: 1600ms;
        }
        .animation-delay-2000 {
          animation-delay: 2000ms;
        }
        .animation-delay-2500 {
          animation-delay: 2500ms;
        }
        .animation-delay-3000 {
          animation-delay: 3000ms;
        }
      `}</style>
    </div>
  );
}