"use client";
import { useState } from "react";
import {
  Briefcase,
  MapPin,
  DollarSign,
  Clock,
  Users,
  ArrowRight,
  Send,
  Heart,
  TrendingUp,
  Zap,
  Shield,
} from "lucide-react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Senior Full-Stack Engineer",
      department: "Product Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Senior",
      salary: "$180k - $220k",
      description:
        "We're looking for an experienced full-stack engineer to lead our platform development efforts.",
      responsibilities: [
        "Design and implement scalable backend systems using Node.js and Python",
        "Build responsive frontend interfaces with React and modern JavaScript",
        "Mentor junior developers and contribute to engineering culture",
        "Collaborate with product and design teams on feature specification",
      ],
      requirements: [
        "5+ years of full-stack development experience",
        "Strong proficiency in JavaScript, React, and backend frameworks",
        "Experience with cloud platforms (AWS, Azure, or GCP)",
        "Excellent communication and leadership skills",
      ],
    },
    {
      id: 2,
      title: "DevOps & Infrastructure Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      level: "Mid",
      salary: "$140k - $180k",
      description:
        "Join our infrastructure team to build and maintain scalable cloud systems.",
      responsibilities: [
        "Design and implement CI/CD pipelines using modern tools",
        "Manage Kubernetes clusters and containerized applications",
        "Implement monitoring, logging, and alerting solutions",
        "Optimize infrastructure costs and performance",
      ],
      requirements: [
        "3+ years of DevOps or infrastructure engineering experience",
        "Strong experience with Kubernetes and Docker",
        "Proficiency with Infrastructure as Code (Terraform, CloudFormation)",
        "Experience with AWS or similar cloud providers",
      ],
    },
    {
      id: 3,
      title: "Technology Consultant",
      department: "Consultancy",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Senior",
      salary: "$160k - $200k",
      description:
        "Help enterprises transform their technology landscape with strategic guidance.",
      responsibilities: [
        "Conduct technology assessments for enterprise clients",
        "Design digital transformation roadmaps",
        "Provide architectural guidance on system design",
        "Present findings and recommendations to C-level executives",
      ],
      requirements: [
        "7+ years in technology consulting or enterprise architecture",
        "Deep understanding of cloud platforms and modern architectures",
        "Strong presentation and communication skills",
        "Experience working with Fortune 500 companies",
      ],
    },
    {
      id: 4,
      title: "Product Manager",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Mid",
      salary: "$130k - $170k",
      description:
        "Shape the future of our products by driving vision and strategy.",
      responsibilities: [
        "Define product vision and strategy",
        "Gather and prioritize customer requirements",
        "Work with engineering and design on product development",
        "Analyze metrics and drive data-informed decisions",
      ],
      requirements: [
        "4+ years of product management experience",
        "Experience with B2B SaaS products",
        "Strong analytical and communication skills",
        "Track record of launching successful products",
      ],
    },
    {
      id: 5,
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      level: "Mid",
      salary: "$110k - $150k",
      description:
        "Create beautiful and intuitive interfaces for our products.",
      responsibilities: [
        "Design user interfaces and experiences for web and mobile",
        "Conduct user research and usability testing",
        "Collaborate with product and engineering teams",
        "Maintain design systems and component libraries",
      ],
      requirements: [
        "4+ years of UX/UI design experience",
        "Proficiency in design tools (Figma, Sketch, Adobe XD)",
        "Strong portfolio demonstrating design process",
        "Experience with design systems",
      ],
    },
    {
      id: 6,
      title: "Sales Development Representative",
      department: "Sales",
      location: "San Francisco, CA",
      type: "Full-time",
      level: "Entry",
      salary: "$70k - $100k + commission",
      description:
        "Help us grow by identifying and qualifying enterprise prospects.",
      responsibilities: [
        "Identify and research potential enterprise clients",
        "Conduct outreach via email, phone, and LinkedIn",
        "Qualify prospects and schedule meetings",
        "Track and report on sales pipeline metrics",
      ],
      requirements: [
        "1+ years of sales development experience",
        "Strong communication and negotiation skills",
        "Experience with B2B SaaS sales",
        "Proficiency with CRM systems",
      ],
    },
  ];

  const benefits = [
    {
      icon: Heart,
      title: "Health & Wellness",
      description:
        "Comprehensive health, dental, and vision insurance for you and your family",
    },
    {
      icon: TrendingUp,
      title: "Growth Opportunities",
      description:
        "Continuous learning programs, conferences, and certification support",
    },
    {
      icon: Zap,
      title: "Flexibility",
      description:
        "Work remotely or from our San Francisco office - your choice",
    },
    {
      icon: Shield,
      title: "Financial Security",
      description: "Competitive salary, stock options, and 401(k) matching",
    },
    {
      icon: Users,
      title: "Team Culture",
      description:
        "Collaborative environment with regular team events and celebrations",
    },
    {
      icon: Briefcase,
      title: "Paid Time Off",
      description: "Unlimited PTO plus holidays, plus family leave policies",
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
              <a
                href="/about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                About
              </a>
              <a href="/careers" className="text-blue-600 font-semibold">
                Careers
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
              Join Our Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Help us build the future of technology. We're hiring talented
              people who want to make an impact and grow their careers with Code
              Adapter Technologies.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Work With Us
            </h2>
            <p className="text-xl text-gray-600">
              We invest in our team's success and happiness
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-600">
              {jobs.length} exciting opportunities available
            </p>
          </div>

          {/* Jobs Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Job Listings */}
            <div className="lg:col-span-1 space-y-4">
              {jobs.map((job) => (
                <div
                  key={job.id}
                  onClick={() => setSelectedJob(job)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all ${
                    selectedJob?.id === job.id
                      ? "bg-blue-600 text-white shadow-lg"
                      : "bg-white text-gray-900 hover:shadow-lg"
                  }`}
                >
                  <h3 className="font-bold text-lg mb-2">{job.title}</h3>
                  <div
                    className={`space-y-2 text-sm ${selectedJob?.id === job.id ? "text-blue-100" : "text-gray-600"}`}
                  >
                    <p className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {job.location}
                    </p>
                    <p className="flex items-center">
                      <Clock className="h-4 w-4 mr-2" />
                      {job.type}
                    </p>
                    <p className="flex items-center">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {job.salary}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Job Details */}
            <div className="lg:col-span-2">
              {selectedJob ? (
                <div className="bg-white rounded-2xl shadow-lg p-8 sticky top-24">
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">
                          {selectedJob.title}
                        </h2>
                        <p className="text-blue-600 font-semibold">
                          {selectedJob.department}
                        </p>
                      </div>
                      <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-lg font-semibold">
                        {selectedJob.level}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-4 mb-8 pb-8 border-b border-gray-200">
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">
                        {selectedJob.location}
                      </span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">{selectedJob.type}</span>
                    </div>
                    <div className="flex items-center">
                      <DollarSign className="h-5 w-5 text-orange-500 mr-3" />
                      <span className="text-gray-700">
                        {selectedJob.salary}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-8">
                    {selectedJob.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Key Responsibilities
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.responsibilities.map((resp, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">
                      Requirements
                    </h3>
                    <ul className="space-y-3">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <div className="h-2 w-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                    Apply Now <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                </div>
              ) : (
                <div className="bg-white rounded-2xl shadow-lg p-8 flex items-center justify-center h-96">
                  <p className="text-gray-600 text-center">
                    Select a position to view details
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Team Culture */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Culture
            </h2>
            <p className="text-xl text-gray-600">
              We believe in building a workplace where people thrive
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Collaborative & Innovative
                  </h3>
                  <p className="text-gray-600">
                    We work together to solve complex problems and push the
                    boundaries of what's possible in technology.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Continuous Learning
                  </h3>
                  <p className="text-gray-600">
                    We invest in professional development with access to
                    courses, conferences, and mentorship programs.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Work-Life Balance
                  </h3>
                  <p className="text-gray-600">
                    Flexible schedules, remote options, and generous time off
                    help you succeed at work and in life.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Diversity & Inclusion
                  </h3>
                  <p className="text-gray-600">
                    We value diverse perspectives and are committed to creating
                    an inclusive environment for everyone.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-orange-100 rounded-3xl h-96 flex items-center justify-center">
              <div className="text-center">
                <Users className="h-24 w-24 text-blue-600 mx-auto mb-4" />
                <p className="text-gray-700 font-semibold text-lg">
                  Team Photo Coming Soon
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold mb-6">Don't see your role?</h2>
          <p className="text-xl mb-8 opacity-90">
            We're always looking for talented people. Send us your resume and
            let's talk about how you can grow with us.
          </p>
          <a
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center"
          >
            Send Your Resume <Send className="ml-2 h-5 w-5" />
          </a>
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
