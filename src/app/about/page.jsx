"use client";
import {
  Users,
  Target,
  Zap,
  Shield,
  Heart,
  Globe,
  Award,
  Code,
  Compass,
  TrendingUp,
} from "lucide-react";

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Lalit Sharma",
      role: "Founder & CEO",
      bio: "Former CTO at two successful startups. 15+ years building scalable systems and leading engineering teams.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
      expertise: [
        "Strategic Leadership",
        "System Architecture",
        "Team Building",
      ],
    },
    {
      name: "Sarah Rodriguez",
      role: "Head of Product Engineering",
      bio: "Full-stack expert with deep experience in fintech and healthcare. Passionate about clean code and user experience.",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
      expertise: ["Full-Stack Development", "Product Strategy", "UX/UI Design"],
    },
    {
      name: "Marcus Thompson",
      role: "Lead Technology Consultant",
      bio: "Former enterprise architect at Fortune 500 companies. Specializes in digital transformation and cloud migration.",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
      expertise: [
        "Enterprise Architecture",
        "Cloud Strategy",
        "Digital Transformation",
      ],
    },
    {
      name: "Emily Zhang",
      role: "Senior DevOps Engineer",
      bio: "Infrastructure specialist with expertise in Kubernetes, AWS, and CI/CD. Ensures our solutions scale seamlessly.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
      expertise: ["DevOps", "Cloud Infrastructure", "Security"],
    },
  ];

  const values = [
    {
      icon: Zap,
      title: "Agile Adaptation",
      description:
        "We embrace change and adapt quickly to new technologies and client needs, ensuring solutions that evolve with your business.",
    },
    {
      icon: Users,
      title: "Deep Collaboration",
      description:
        "We work as an extension of your team, fostering transparent communication and shared ownership of success.",
    },
    {
      icon: Shield,
      title: "Future-Proof Solutions",
      description:
        "We build with tomorrow in mind, creating scalable architectures that grow with your ambitions.",
    },
    {
      icon: Heart,
      title: "Quality Obsession",
      description:
        "We're passionate about crafting elegant, maintainable code that stands the test of time.",
    },
    {
      icon: Globe,
      title: "Inclusive Innovation",
      description:
        "We believe diverse perspectives drive better solutions and create technology that serves everyone.",
    },
    {
      icon: Target,
      title: "Results-Driven",
      description:
        "Every decision we make is guided by measurable impact on your business objectives.",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description: "Started with a vision to bridge technology gaps",
    },
    {
      year: "2020",
      title: "First Major Client",
      description: "Delivered our first enterprise-scale platform",
    },
    {
      year: "2021",
      title: "Team Expansion",
      description: "Grew to 15+ expert engineers and consultants",
    },
    {
      year: "2022",
      title: "50+ Projects",
      description: "Reached milestone of 50 successful project deliveries",
    },
    {
      year: "2023",
      title: "Industry Recognition",
      description: "Named 'Rising Tech Consultancy' by TechCrunch",
    },
    {
      year: "2024",
      title: "Global Reach",
      description: "Expanded to serve clients across 3 continents",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <img
                src="https://raw.createusercontent.com/7ae064c0-e76c-497a-aa8e-76deffe0c665/"
                alt="Code Adapters Technologies"
                className="h-10 w-10"
              />
              <span className="font-bold text-xl text-gray-900">
                Code Adapters Technologies
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <a
                href="/services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Services
              </a>
              <a
                href="/portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Portfolio
              </a>
              <a href="/about" className="text-blue-600 font-semibold">
                About
              </a>
              <a
                href="/contact"
                className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Get a Quote
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About Code Adapters
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're not just another tech company. We're your strategic partners
              in navigating the complex world of technology, adapting solutions
              to fit your unique vision.
            </p>
          </div>
        </div>
      </section>

      {/* Our Adapter Philosophy */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our "Adapter" Philosophy
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Just like a universal adapter connects different devices
                seamlessly, we bridge the gap between your business vision and
                the perfect technology solution. We don't believe in
                one-size-fits-all approaches.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Every business is unique, with its own challenges, goals, and
                constraints. Our role is to adapt, configure, and optimize
                technology to fit your specific needs—not force you to adapt to
                rigid frameworks.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    100+
                  </div>
                  <div className="text-gray-600">Technologies Mastered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">
                    50+
                  </div>
                  <div className="text-gray-600">Successful Adaptations</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl p-8 h-96 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 transform rotate-12">
                    <Code className="h-12 w-12 text-white" />
                  </div>
                  <div className="w-24 h-24 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto transform -rotate-12 -mt-12 ml-12">
                    <Compass className="h-12 w-12 text-white" />
                  </div>
                  <p className="text-gray-700 font-semibold mt-6">
                    Connecting Vision with Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Showcase */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              Diverse expertise, unified by a passion for solving complex
              technology challenges
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-semibold mb-3">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="inline-block bg-blue-50 text-blue-700 px-2 py-1 rounded text-xs mr-1"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide every decision and drive our commitment
              to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-gray-600">
              From startup to trusted technology partner—our evolution continues
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div
                  key={index}
                  className={`flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div
                    className={`w-1/2 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8 text-left"}`}
                  >
                    <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100">
                      <div className="text-2xl font-bold text-blue-600 mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Our Impact by the Numbers
              </h2>
              <p className="text-xl opacity-90">
                Measurable results that speak to our commitment
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { icon: Users, value: "50+", label: "Happy Clients" },
                { icon: Code, value: "100+", label: "Projects Delivered" },
                { icon: TrendingUp, value: "300%", label: "Average ROI" },
                { icon: Award, value: "99%", label: "Client Retention" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className="opacity-90">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Adapt Technology to Your Vision?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can help you navigate the technology
              landscape and achieve your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Start a Conversation
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors">
                View Our Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img
                  src="https://raw.createusercontent.com/7ae064c0-e76c-497a-aa8e-76deffe0c665/"
                  alt="Code Adapters Technologies"
                  className="h-8 w-8"
                />
                <span className="font-bold text-lg">Code Adapters</span>
              </div>
              <p className="text-gray-400 mb-4">
                Bridging your vision with the right technology stack through
                expert development and strategic consultancy.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Product Engineering
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Technology Consultancy
                  </a>
                </li>
                <li>
                  <a
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    Digital Transformation
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/portfolio"
                    className="hover:text-white transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@codeadapters.com</li>
                <li>+91 (880) 072-5933</li>
                <li>San Francisco, CA</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Code Adapters Technologies. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
