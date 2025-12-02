"use client";
import { useState } from "react";
import {
  Code,
  Compass,
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Zap,
  Cloud,
  Smartphone,
  Database,
  Shield,
  Settings,
  TrendingUp,
} from "lucide-react";

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("engineering");

  const technologies = {
    frontend: ["React", "Vue", "Angular", "Next.js", "TypeScript"],
    backend: ["Node.js", "Python", ".NET", "Java", "Go"],
    mobile: ["Flutter", "React Native", "Swift", "Kotlin"],
    cloud: ["AWS", "Azure", "GCP", "Docker", "Kubernetes"],
    ai: ["TensorFlow", "PyTorch", "OpenAI", "Hugging Face"],
  };

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CTO, FinanceFlow",
      content:
        "Code Adapters' strategic guidance helped us choose the perfect tech stack. Our development velocity increased by 60%.",
      rating: 5,
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Manager, HealthTech Pro",
      content:
        "Their end-to-end product engineering transformed our idea into a scalable platform serving 100k+ users.",
      rating: 5,
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
              <a href="/services" className="text-blue-600 font-semibold">
                Services
              </a>
              <a
                href="/portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
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
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Two distinct paths to transform your technology landscape. Choose
              the approach that fits your needs.
            </p>
          </div>

          {/* Service Toggle */}
          <div className="flex justify-center mb-16">
            <div className="bg-white rounded-2xl p-2 shadow-lg border border-gray-100">
              <button
                onClick={() => setActiveTab("engineering")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  activeTab === "engineering"
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                Product Engineering
              </button>
              <button
                onClick={() => setActiveTab("consultancy")}
                className={`px-8 py-4 rounded-xl font-semibold transition-all ${
                  activeTab === "consultancy"
                    ? "bg-orange-500 text-white shadow-md"
                    : "text-gray-600 hover:text-orange-500"
                }`}
              >
                Technology Consultancy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Product Engineering Section */}
      {activeTab === "engineering" && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Code className="h-10 w-10 text-blue-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                End-to-End Digital Product Creation
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From initial concept to scalable production systems, we build
                robust software solutions with the perfect technology blend for
                your specific needs.
              </p>
            </div>

            {/* Technology Stack */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Technology Arsenal
              </h3>
              <div className="grid md:grid-cols-5 gap-8">
                {Object.entries(technologies).map(([category, techs]) => (
                  <div key={category} className="text-center">
                    <h4 className="font-semibold text-gray-900 mb-4 capitalize">
                      {category}
                    </h4>
                    <div className="space-y-2">
                      {techs.map((tech) => (
                        <div
                          key={tech}
                          className="bg-blue-50 text-blue-700 px-3 py-2 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Development Process */}
            <div className="mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-12 text-center">
                Our Development Process
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    icon: Users,
                    title: "Ideation & Discovery",
                    description:
                      "Deep dive into your vision, requirements, and market needs",
                  },
                  {
                    icon: Settings,
                    title: "Architecture & Design",
                    description:
                      "Create scalable system architecture and user experience design",
                  },
                  {
                    icon: Code,
                    title: "Development & Testing",
                    description:
                      "Agile development with continuous testing and quality assurance",
                  },
                  {
                    icon: Cloud,
                    title: "Deployment & DevOps",
                    description:
                      "Cloud deployment with monitoring, scaling, and maintenance",
                  },
                ].map((step, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                      <step.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Features */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Full-Stack Development
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Frontend & Backend
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    API Development
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Database Design
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <Database className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Mobile Applications
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    iOS & Android
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Cross-platform
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    App Store Deployment
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-4">
                  Cloud Architecture
                </h4>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Scalable Infrastructure
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Security & Compliance
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                    Performance Optimization
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Technology Consultancy Section */}
      {activeTab === "consultancy" && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="w-20 h-20 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compass className="h-10 w-10 text-orange-600" />
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Your Strategic Technology Partner
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Navigate the complex technology landscape with expert guidance.
                We help you make informed decisions that drive business growth
                and operational excellence.
              </p>
            </div>

            {/* Consultancy Services */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
              {[
                {
                  icon: Compass,
                  title: "Tech Stack Selection",
                  description:
                    "Choose the right technologies for your specific use case and long-term goals",
                },
                {
                  icon: Settings,
                  title: "System Architecture Review",
                  description:
                    "Optimize your existing systems for performance, scalability, and maintainability",
                },
                {
                  icon: TrendingUp,
                  title: "Digital Transformation",
                  description:
                    "Modernize legacy systems and processes with cutting-edge technology solutions",
                },
                {
                  icon: Users,
                  title: "CTO-as-a-Service",
                  description:
                    "Strategic technology leadership for startups and growing companies",
                },
                {
                  icon: Zap,
                  title: "Team Augmentation",
                  description:
                    "Scale your development team with our expert engineers and specialists",
                },
                {
                  icon: Shield,
                  title: "Security & Compliance",
                  description:
                    "Ensure your systems meet industry standards and regulatory requirements",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-orange-600" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>

            {/* Consultancy Process */}
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-3xl p-8 md:p-12 mb-20">
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
                Our Consultancy Approach
              </h3>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  {
                    step: "01",
                    title: "Assessment",
                    desc: "Analyze current state and identify opportunities",
                  },
                  {
                    step: "02",
                    title: "Strategy",
                    desc: "Develop tailored technology roadmap",
                  },
                  {
                    step: "03",
                    title: "Implementation",
                    desc: "Guide execution with hands-on support",
                  },
                  {
                    step: "04",
                    title: "Optimization",
                    desc: "Continuous improvement and scaling",
                  },
                ].map((phase, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                      {phase.step}
                    </div>
                    <h4 className="font-bold text-gray-900 mb-2">
                      {phase.title}
                    </h4>
                    <p className="text-gray-600 text-sm">{phase.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 italic">
                  "{testimonial.content}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-orange-500 rounded-3xl p-8 md:p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Transform Your Technology?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can adapt the perfect solution for your
              business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Schedule a Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Our Portfolio
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
                  <a href="#" className="hover:text-white transition-colors">
                    Product Engineering
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Technology Consultancy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
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
                <li>hello@codeadapter.tech</li>
                <li>+1 (555) 123-4567</li>
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
