"use client";
import { useState } from "react";
import {
  Filter,
  ExternalLink,
  ArrowRight,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "product", label: "Product Build" },
    { id: "consultancy", label: "Consultancy" },
    { id: "fintech", label: "FinTech" },
    { id: "healthtech", label: "HealthTech" },
    { id: "ecommerce", label: "E-commerce" },
  ];

  const projects = [
    {
      id: 1,
      title: "FinanceFlow Platform",
      category: "fintech",
      serviceType: "product",
      technologies: ["React", "Node.js", "AWS", "PostgreSQL"],
      description:
        "A comprehensive financial management platform for SMEs with real-time analytics and automated reporting.",
      challenge:
        "The client needed a scalable platform to handle complex financial data processing while maintaining strict security compliance.",
      solution:
        "We built a microservices architecture with real-time data processing, implementing bank-level security protocols.",
      results: {
        metric1: { value: "10x", label: "Transaction Volume" },
        metric2: { value: "40%", label: "Cost Reduction" },
        metric3: { value: "99.9%", label: "Uptime" },
      },
      testimonial: {
        text: "Code Adapters transformed our vision into a world-class platform. Their expertise in fintech regulations was invaluable.",
        author: "Sarah Chen",
        role: "CEO, FinanceFlow",
      },
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "HealthTech Pro Transformation",
      category: "healthtech",
      serviceType: "consultancy",
      technologies: ["Python", "TensorFlow", "Azure", "FHIR"],
      description:
        "Strategic technology consultancy for a healthcare startup to modernize their patient management system.",
      challenge:
        "Legacy systems couldn't scale with growing patient base and new compliance requirements.",
      solution:
        "Developed a comprehensive digital transformation roadmap with AI-powered patient insights and HIPAA compliance.",
      results: {
        metric1: { value: "300%", label: "Patient Capacity" },
        metric2: { value: "60%", label: "Processing Speed" },
        metric3: { value: "100%", label: "Compliance Score" },
      },
      testimonial: {
        text: "Their strategic guidance helped us navigate complex healthcare regulations while scaling our technology.",
        author: "Dr. Marcus Rodriguez",
        role: "CTO, HealthTech Pro",
      },
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "EcoCommerce Marketplace",
      category: "ecommerce",
      serviceType: "product",
      technologies: ["Next.js", "Stripe", "MongoDB", "Vercel"],
      description:
        "A sustainable e-commerce platform connecting eco-friendly brands with conscious consumers.",
      challenge:
        "Building a marketplace that could handle complex sustainability metrics while providing seamless user experience.",
      solution:
        "Created a custom marketplace with integrated sustainability scoring, real-time inventory management, and social features.",
      results: {
        metric1: { value: "500K", label: "Active Users" },
        metric2: { value: "150%", label: "Revenue Growth" },
        metric3: { value: "4.8/5", label: "User Rating" },
      },
      testimonial: {
        text: "They didn't just build our platform, they understood our mission and created technology that amplifies our impact.",
        author: "Emma Thompson",
        role: "Founder, EcoCommerce",
      },
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "TechStartup CTO Advisory",
      category: "fintech",
      serviceType: "consultancy",
      technologies: ["Kubernetes", "GraphQL", "React Native", "GCP"],
      description:
        "CTO-as-a-Service for a fast-growing fintech startup, providing strategic technology leadership.",
      challenge:
        "Rapid growth without technical leadership was causing architecture debt and team inefficiencies.",
      solution:
        "Provided fractional CTO services, established engineering best practices, and built a scalable team structure.",
      results: {
        metric1: { value: "200%", label: "Team Productivity" },
        metric2: { value: "50%", label: "Bug Reduction" },
        metric3: { value: "$2M", label: "Series A Raised" },
      },
      testimonial: {
        text: "Having Code Adapters as our technical advisors was like having a world-class CTO without the full-time cost.",
        author: "James Wilson",
        role: "CEO, PayFlow",
      },
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter(
          (project) =>
            project.category === activeFilter ||
            project.serviceType === activeFilter,
        );

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
              <a href="/portfolio" className="text-blue-600 font-semibold">
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
              Our Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how we've helped companies transform their technology
              landscape and achieve remarkable results.
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeFilter === filter.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "bg-white text-gray-600 hover:text-blue-600 hover:shadow-md border border-gray-200"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden"
              >
                <div
                  className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}
                >
                  {/* Project Image */}
                  <div className={`${index % 2 === 1 ? "lg:col-start-2" : ""}`}>
                    <div className="h-80 lg:h-full relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div
                    className={`p-8 lg:p-12 ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className={`px-3 py-1 rounded-full text-sm font-medium ${
                          project.serviceType === "product"
                            ? "bg-blue-100 text-blue-700"
                            : "bg-orange-100 text-orange-700"
                        }`}
                      >
                        {project.serviceType === "product"
                          ? "Product Build"
                          : "Consultancy"}
                      </span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium capitalize">
                        {project.category}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{project.description}</p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="bg-gray-100 text-gray-700 px-3 py-1 rounded-lg text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Results */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {project.results.metric1.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {project.results.metric1.label}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {project.results.metric2.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {project.results.metric2.label}
                        </div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-600">
                          {project.results.metric3.value}
                        </div>
                        <div className="text-sm text-gray-600">
                          {project.results.metric3.label}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="bg-gray-50 p-6 rounded-2xl mb-6">
                      <div className="flex items-center mb-3">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 italic mb-3">
                        "{project.testimonial.text}"
                      </p>
                      <div>
                        <div className="font-semibold text-gray-900">
                          {project.testimonial.author}
                        </div>
                        <div className="text-gray-600 text-sm">
                          {project.testimonial.role}
                        </div>
                      </div>
                    </div>

                    <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center">
                      Read Full Case Study{" "}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Results that speak for themselves
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, value: "50+", label: "Projects Delivered" },
              { icon: TrendingUp, value: "300%", label: "Average Growth" },
              { icon: Zap, value: "99.9%", label: "Client Satisfaction" },
              { icon: Star, value: "4.9/5", label: "Average Rating" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
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
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss how we can help you achieve similar results for your
              business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Your Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                Schedule a Call
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
