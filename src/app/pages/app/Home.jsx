'use client'
import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import {
  Code,
  Smartphone,
  Shield,
  CheckCircle,
  Users,
  Star,
  Github,
  Globe,
  Database,
  Zap,
  Brain,
  Calendar,
  Bug,
  TestTube,
  ShoppingCart,
  MessageSquare,
  Camera,
  Cloud,
  Eye,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      const timer = setInterval(() => {
        setCount(prev => {
          if (prev >= end) {
            clearInterval(timer);
            return end;
          }
          return prev + Math.ceil(end / (duration * 30));
        });
      }, 1000 / 30);
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return <span ref={ref}>{count > end ? end : count}</span>;
};

const ProjectCard = ({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-blue-50 p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100"
  >
    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-blue-200 to-green-200 rounded-bl-full opacity-20"></div>

    <div className="relative z-10">
      <div className="flex items-center justify-between mb-4">
        <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-green-500 text-white">
          {project.icon}
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-medium ${project.level === 'Basic' ? 'bg-green-100 text-green-700' :
            project.level === 'Intermediate' ? 'bg-blue-100 text-blue-700' :
              project.level === 'Advanced' ? 'bg-purple-100 text-purple-700' :
                'bg-red-100 text-red-700'
          }`}>
          {project.level}
        </span>
      </div>

      <h3 className="text-xl font-bold text-gray-800 mb-3">{project.name}</h3>
      <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {project.features.map((feature, i) => (
          <span key={i} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-md">
            {feature}
          </span>
        ))}
      </div>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 text-blue-600 font-medium hover:text-blue-700 transition-colors"
      >
        View Details <ChevronRight size={16} />
      </motion.button>
    </div>
  </motion.div>
);

const ExtensionCard = ({ extension, index }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl p-6 text-white relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 w-24 h-24 bg-white opacity-10 rounded-bl-full"></div>
    <Code className="mb-3" size={24} />
    <h4 className="font-bold text-lg mb-2">{extension}</h4>
    <p className="text-blue-100 text-sm">VS Code Extension for enhanced development workflow</p>
  </motion.div>
);

export default function GlimorShowcase() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    {
      name: "DooDot",
      level: "Basic",
      description: "AI-integrated TODO web application with calendar functionality for smart task tracking and management.",
      features: ["AI Integration", "Calendar", "CRUD Operations", "Task Tracking"],
      icon: <CheckCircle size={24} />
    },
    {
      name: "Metronique",
      level: "Intermediate",
      description: "Work tracking and management application featuring Kanban boards for visual project organization.",
      features: ["Kanban Board", "Task Management", "Team Collaboration", "Progress Tracking"],
      icon: <Calendar size={24} />
    },
    {
      name: "Rabbit",
      level: "Advanced",
      description: "AI-powered API testing platform integrated with GitHub for automated testing workflows.",
      features: ["OpenAI", "GitHub Integration", "Auto Testing", "API Management"],
      icon: <Zap size={24} />
    },
    {
      name: "Curacore",
      level: "Basic",
      description: "Quality assurance platform for single testers with comprehensive bug tracking and management.",
      features: ["Bug Tracking", "QA Management", "Reporting", "Issue Resolution"],
      icon: <Bug size={24} />
    },
    {
      name: "Caffetest",
      level: "Advanced",
      description: "AI-enhanced testing platform with VS Code integration for automated documentation and testing.",
      features: ["OpenAI", "VS Code Extension", "Auto Documentation", "Test Management"],
      icon: <TestTube size={24} />
    },
    {
      name: "Calf",
      level: "Super Advanced",
      description: "All-in-one desktop testing platform supporting web, mobile, and desktop application testing.",
      features: ["Multi-platform", "Automation", "Project Management", "Comprehensive Testing"],
      icon: <Shield size={24} />
    },
    {
      name: "Loventia",
      level: "Advanced",
      description: "Social media platform combining LinkedIn, Instagram, Udemy, Facebook, and Twitter features for skill sharing.",
      features: ["Social Media", "Skill Sharing", "Multi-platform", "Community"],
      icon: <Users size={24} />
    },
    {
      name: "Arcanemart",
      level: "Advanced",
      description: "Modern e-commerce platform enabling product exchange without traditional monetary transactions.",
      features: ["E-commerce", "Product Exchange", "Modern UI", "Trade System"],
      icon: <ShoppingCart size={24} />
    },
    {
      name: "Veloria",
      level: "Intermediate",
      description: "Lightweight communication platform inspired by Slack for team collaboration and messaging.",
      features: ["Team Communication", "Real-time Messaging", "Collaboration", "Lightweight"],
      icon: <MessageSquare size={24} />
    },
    {
      name: "Oneiro",
      level: "Advanced",
      description: "Dream generation platform powered by Google Veo 3 AI for creating personalized dream experiences.",
      features: ["Google Veo 3", "AI Generation", "Personalized", "Interactive"],
      icon: <Cloud size={24} />
    },
    {
      name: "Photo Forensic",
      level: "Advanced",
      description: "AI-powered photo analysis tool using Gemini and OpenAI to detect AI-generated or edited images.",
      features: ["Gemini AI", "OpenAI", "Photo Detection", "Forensic Analysis"],
      icon: <Camera size={24} />
    }
  ];

  const extensions = [
    "Caffetest-Tracer",
    "Rabbit-Provider",
    "Selenium-Cucumber",
    "Metronique-Insights"
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechCorp Solutions",
      role: "CTO",
      content: "Bat Cropdelivered exceptional results on our full-stack project. The AI integration in their applications is truly innovative and ahead of the curve.",
      rating: 5
    },
    {
      name: "Michael Chen",
      company: "StartupXYZ",
      role: "Product Manager",
      content: "Working with Bat Cropwas a game-changer. Their QA processes caught critical bugs early, and their mobile app development exceeded our expectations.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      company: "Global Enterprises",
      role: "IT Director",
      content: "The cybersecurity assessment and ethical hacking services provided invaluable insights. Highly professional and thorough work.",
      rating: 5
    },
    {
      name: "David Kumar",
      company: "InnovateLabs",
      role: "Lead Developer",
      content: "Glimor's VS Code extensions have significantly improved our development workflow. The attention to detail in every project is remarkable.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-sky-50 to-blue-50">


      {/* Hero Section */}
      <section id="home" className="relative py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-800 bg-clip-text text-transparent">
                Full Stack Innovation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Crafting cutting-edge web applications, mobile solutions, and cybersecurity services with AI integration and modern development practices.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 mb-16"
          >
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                <AnimatedCounter end={120} />+
              </div>
              <p className="text-gray-600">Vanilla JS Projects</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">
                <AnimatedCounter end={13} />+
              </div>
              <p className="text-gray-600">Full Stack Apps</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">
                <AnimatedCounter end={250} />K+
              </div>
              <p className="text-gray-600">Lines of Code</p>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-red-600 mb-2">
                <AnimatedCounter end={30} />+
              </div>
              <p className="text-gray-600">Projects Tested</p>
            </div>
          </motion.div>

          {/* Services Overview */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"
          >
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-blue-100">
              <Globe className="text-blue-600 mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Full Stack Development</h3>
              <p className="text-gray-600 text-sm">Modern web applications with cutting-edge technologies</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-green-100">
              <Smartphone className="text-green-600 mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Mobile Development</h3>
              <p className="text-gray-600 text-sm">Cross-platform mobile solutions</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-purple-100">
              <TestTube className="text-purple-600 mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Quality Assurance</h3>
              <p className="text-gray-600 text-sm">Comprehensive testing and QA services</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-red-100">
              <Shield className="text-red-600 mb-4" size={32} />
              <h3 className="font-bold text-gray-800 mb-2">Cybersecurity</h3>
              <p className="text-gray-600 text-sm">Ethical hacking and security assessments</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our innovative solutions spanning from AI-integrated applications to comprehensive testing platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard key={project.name} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* VS Code Extensions */}
      <section id="extensions" className="py-20 px-4 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              VS Code Extensions
            </h2>
            <p className="text-xl text-gray-600">
              Enhance your development workflow with our custom VS Code extensions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {extensions.map((extension, index) => (
              <ExtensionCard key={extension} extension={extension} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-600">
              What our clients say about working with Glimor
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-green-50 rounded-2xl p-8 border border-blue-100"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-500 fill-current" size={20} />
                  ))}
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-gray-800">{testimonial.name}</p>
                  <p className="text-gray-600">{testimonial.role} at {testimonial.company}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-blue-600 to-green-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Ready to transform your ideas into powerful digital solutions? Let's discuss your project.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center gap-2"
            >
              Get In Touch <ChevronRight size={20} />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 relative overflow-hidden">
        {/* Background SVG Structure */}
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" viewBox="0 0 1200 400" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="1" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
            <circle cx="200" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <circle cx="1000" cy="300" r="120" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <path d="M100,200 Q400,100 700,250 T1100,200" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.2" />
            <polygon points="800,50 850,100 800,150 750,100" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <rect x="50" y="280" width="60" height="60" rx="8" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="font-bold text-2xl bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                  Bat Crop
                </div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-blue-400">
                  <path d="M10 2v20l4-4h6V2H10z" fill="currentColor" />
                  <path d="M6 4v2H4v12h2v2l4-4V4H6z" fill="currentColor" opacity="0.7" />
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-amber-400">
                  <path d="M7 14c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3zM20.71 5.63l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-3.12 3.12-1.93-1.91-1.41 1.41 1.42 1.42L3 16.25V21h4.75l8.92-8.92 1.42 1.42 1.41-1.41-1.91-1.93 3.12-3.12c.39-.39.39-1.02 0-1.41z" fill="currentColor" />
                </svg>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Your trusted partner for full-stack development, mobile applications, QA services, and cybersecurity solutions.
              </p>
              <div className="flex space-x-4">
                <a href="https://github.com/GyanaprakashKhandual" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-white transition-colors cursor-pointer">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/in/gyana-prakash-khandual-79b205332/" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-blue-400 transition-colors cursor-pointer">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Full Stack Development</li>
                <li>Mobile App Development</li>
                <li>Quality Assurance</li>
                <li>Cybersecurity</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Technologies</h4>
              <ul className="space-y-2 text-gray-400">
                <li>MERN Stack</li>
                <li>Next.js</li>
                <li>React Native</li>
                <li>AI Integration</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Glimor. All rights reserved. Crafted with passion for innovation.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}