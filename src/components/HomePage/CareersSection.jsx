import { AnimatedSection } from "./AnimatedSection";

export function CareersSection({ setSectionRef, visibleSections }) {
  return (
    <section
      id="careers"
      className="relative z-10 py-20 bg-gradient-to-r from-orange-950/30 via-gray-950 to-blue-950/30 border-y border-blue-900/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection
          setSectionRef={setSectionRef}
          sectionKey="careers-header"
          visibleSections={visibleSections}
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-300 to-orange-400 bg-clip-text text-transparent mb-4">
              Join Our Team
            </h2>
            <p className="text-xl text-blue-200">
              We're hiring talented engineers and strategists
            </p>
          </div>
        </AnimatedSection>

        <AnimatedSection
          setSectionRef={setSectionRef}
          sectionKey="careers-content"
          visibleSections={visibleSections}
        >
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {[
              {
                role: "Senior Full-Stack Engineer",
                location: "San Francisco, CA",
                type: "Full-time",
                experience: "5+ years",
              },
              {
                role: "Product Manager",
                location: "Remote",
                type: "Full-time",
                experience: "3+ years",
              },
              {
                role: "React Native Developer",
                location: "San Francisco, CA",
                type: "Full-time",
                experience: "3+ years",
              },
              {
                role: "DevOps Engineer",
                location: "Remote",
                type: "Full-time",
                experience: "4+ years",
              },
            ].map((job, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-orange-900/40 to-orange-800/20 p-6 rounded-2xl shadow-lg border border-orange-700/50 hover:border-orange-500/80 transition-all hover:shadow-2xl hover:shadow-orange-500/30"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {job.role}
                </h3>
                <div className="space-y-2 mb-4">
                  <p className="text-orange-200">
                    <span className="font-semibold">Location:</span>{" "}
                    {job.location}
                  </p>
                  <p className="text-orange-200">
                    <span className="font-semibold">Type:</span> {job.type}
                  </p>
                  <p className="text-orange-200">
                    <span className="font-semibold">Experience:</span>{" "}
                    {job.experience}
                  </p>
                </div>
                <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 rounded-lg transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-900/40 to-orange-900/40 rounded-2xl p-8 border border-blue-700/50 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Don't see your role?
            </h3>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume
              and let's chat about how you can grow with us.
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Send Your Resume
            </button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
