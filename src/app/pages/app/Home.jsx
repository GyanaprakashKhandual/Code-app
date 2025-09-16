'use client'

import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
import { 
  Shield, 
  Code, 
  Smartphone, 
  Zap, 
  ChevronRight, 
  Menu, 
  X,
  Bug,
  BarChart3,
  Coffee,
  FolderKanban,
  CheckSquare,
  Users,
  ShoppingBag,
  Video,
  MessageSquare,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react'

const Nexly = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollYProgress } = useScroll()
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  const products = [
    {
      name: "CaffeTest",
      icon: <Coffee className="w-8 h-8" />,
      description: "AI-powered testing with VS Code integration. Automated bug reporting and test case generation managed by Artificial Intelligence.",
      features: ["AI Integration", "VS Code Extension", "Auto Bug Detection", "Test Case Generation"]
    },
    {
      name: "CuraCore",
      icon: <Bug className="w-8 h-8" />,
      description: "Advanced bug management and tracking tool. Add bugs manually, report to developers with commenting system.",
      features: ["Bug Tracking", "Developer Comments", "Manual Reporting", "Team Collaboration"]
    },
    {
      name: "Rabbit",
      icon: <BarChart3 className="w-8 h-8" />,
      description: "Comprehensive reporting web application designed specifically for K16 data analysis and insights.",
      features: ["K16 Data Analysis", "Advanced Reporting", "Data Visualization", "Custom Dashboards"]
    },
    {
      name: "Caffe",
      icon: <Shield className="w-8 h-8" />,
      description: "Complete cloud-based testing platform for web and mobile applications with unified framework and reporting.",
      features: ["Cloud Testing", "Web & Mobile", "Unified Framework", "Comprehensive Reports"]
    },
    {
      name: "Metronix",
      icon: <FolderKanban className="w-8 h-8" />,
      description: "Complete project management web application - a streamlined version of enterprise project management tools.",
      features: ["Project Management", "Task Tracking", "Team Collaboration", "Timeline Views"]
    },
    {
      name: "DoDot",
      icon: <CheckSquare className="w-8 h-8" />,
      description: "The most advanced AI-integrated to-do application with email notifications and comprehensive tracking system.",
      features: ["AI Integration", "Email Notifications", "Advanced Tracking", "Smart Organization"]
    },
    {
      name: "Labentia",
      icon: <Users className="w-8 h-8" />,
      description: "Global skill swapping platform that works like social media, connecting people to exchange knowledge and expertise.",
      features: ["Skill Exchange", "Social Features", "Global Network", "Knowledge Sharing"]
    },
    {
      name: "Arkemat",
      icon: <ShoppingBag className="w-8 h-8" />,
      description: "Revolutionary marketplace where users buy and sell by exchanging items - the ultimate bartering platform.",
      features: ["Item Exchange", "Peer Trading", "Smart Matching", "Secure Transactions"]
    },
    {
      name: "Onerio",
      icon: <Video className="w-8 h-8" />,
      description: "Transform your dreams into movies, films, or AI-generated videos with cutting-edge technology.",
      features: ["Dream to Video", "AI Generation", "Movie Creation", "Creative Tools"]
    },
    {
      name: "Valoria",
      icon: <MessageSquare className="w-8 h-8" />,
      description: "Real-time chat and video calling application with advanced communication features.",
      features: ["Real-time Chat", "Video Calling", "Group Communication", "Advanced Features"]
    }
  ]

  const services = [
    {
      title: "Web Application Development",
      description: "Complete full-stack web solutions with modern technologies",
      icon: <Code className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Automation Testing",
      description: "Advanced automated testing solutions powered by AI",
      icon: <Zap className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Cyber Security & Ethical Hacking",
      description: "Comprehensive security audits and penetration testing",
      icon: <Shield className="w-12 h-12 text-blue-600" />
    },
    {
      title: "Mobile Application Development",
      description: "Cross-platform mobile solutions for iOS and Android",
      icon: <Smartphone className="w-12 h-12 text-blue-600" />
    }
  ]

  const AnimatedSection = ({ children, className = "" }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true, amount: 0.3 })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    )
  }

  const ProductCard = ({ product, index }) => {
    const ref = React.useRef(null)
    const isInView = useInView(ref, { once: true })

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-50 group hover:border-blue-200"
      >
        <div className="flex items-center mb-4">
          <div className="p-3 bg-blue-50 rounded-lg text-blue-600 group-hover:bg-blue-100 transition-colors">
            {product.icon}
          </div>
          <h3 className="text-xl font-bold text-gray-800 ml-4">{product.name}</h3>
        </div>
        <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
        <div className="grid grid-cols-2 gap-2">
          {product.features.map((feature, idx) => (
            <div key={idx} className="flex items-center text-sm text-blue-600">
              <Star className="w-4 h-4 mr-2" />
              {feature}
            </div>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-sky-50">


      {/* Hero Section */}
      <section className="pt-8 pb-16 relative overflow-hidden">
        <motion.div 
          style={{ y: backgroundY }}
          className="absolute inset-0 bg-gradient-to-br from-blue-100/30 to-sky-100/30"
        />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-sky-500 bg-clip-text text-transparent">
                Innovation
              </span>
              <br />
              <span className="text-gray-800">Meets Excellence</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Nexly delivers cutting-edge web applications, automation testing, cybersecurity solutions, 
              and mobile development with our suite of 10 revolutionary products.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <button className="bg-gradient-to-r from-blue-600 to-sky-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                Explore Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300">
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {[
                { number: '10+', label: 'Products' },
                { number: '1000+', label: 'Happy Clients' },
                { number: '99.9%', label: 'Uptime' },
                { number: '24/7', label: 'Support' }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-blue-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <AnimatedSection className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions to power your digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-blue-50/50 hover:bg-blue-50 transition-all duration-300 group"
              >
                <div className="mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Products Section */}
      <AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-sky-50" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Revolutionary <span className="text-blue-600">Product Ecosystem</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the future of technology with our integrated suite of 10 cutting-edge applications
            </p>
          </div>

          <div className="space-y-20">
            {/* CaffeTest */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center">
                    <Coffee className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">CaffeTest</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Revolutionary AI-powered testing platform seamlessly integrated with Visual Studio Code. 
                  Automated test case generation and intelligent bug reporting powered by advanced AI algorithms.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["AI Integration", "VS Code Extension", "Auto Bug Detection", "Smart Testing"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-orange-50 to-amber-50 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Code className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                        <p className="text-orange-700 font-semibold">AI-Powered Testing Suite</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CuraCore */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl flex items-center justify-center">
                    <Bug className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">CuraCore</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Advanced bug management and tracking system that streamlines development workflows. 
                  Real-time collaboration between developers and QA teams with intelligent reporting.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Bug Tracking", "Team Collaboration", "Real-time Updates", "Smart Reports"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-red-100 text-red-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-200 to-pink-200 rounded-3xl transform -rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Shield className="w-16 h-16 text-red-500 mx-auto mb-4" />
                        <p className="text-red-700 font-semibold">Bug Management Hub</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Rabbit */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                    <BarChart3 className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Rabbit</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Comprehensive K16 data reporting platform with advanced analytics and visualization capabilities. 
                  Transform complex data into actionable insights with interactive dashboards.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["K16 Data Analysis", "Interactive Dashboards", "Real-time Analytics", "Custom Reports"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-200 to-indigo-200 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-purple-50 to-indigo-50 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <BarChart3 className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                        <p className="text-purple-700 font-semibold">Advanced Analytics Platform</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Caffe */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row-reverse items-center gap-12"
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center">
                    <Zap className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Caffe</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Complete cloud-based testing platform for web and mobile applications. 
                  Unified framework with comprehensive reporting and seamless integration capabilities.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Cloud Testing", "Multi-Platform", "Unified Framework", "Comprehensive Reports"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-200 to-emerald-200 rounded-3xl transform -rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <Zap className="w-16 h-16 text-green-500 mx-auto mb-4" />
                        <p className="text-green-700 font-semibold">Cloud Testing Suite</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Metronix */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-12"
            >
              <div className="lg:w-1/2 space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <FolderKanban className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800">Metronix</h3>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Streamlined project management platform designed for modern teams. 
                  Powerful yet intuitive interface with advanced collaboration and tracking features.
                </p>
                <div className="flex flex-wrap gap-3">
                  {["Project Management", "Team Collaboration", "Timeline Views", "Resource Planning"].map((tag) => (
                    <span key={tag} className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="lg:w-1/2">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-200 to-cyan-200 rounded-3xl transform rotate-3"></div>
                  <div className="relative bg-white p-8 rounded-3xl shadow-2xl">
                    <div className="aspect-video bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl flex items-center justify-center">
                      <div className="text-center">
                        <FolderKanban className="w-16 h-16 text-blue-500 mx-auto mb-4" />
                        <p className="text-blue-700 font-semibold">Project Management Hub</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Show remaining products in a more compact grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <div className="text-center mb-12">
                <h3 className="text-3xl font-bold text-gray-800 mb-4">More Innovative Solutions</h3>
                <p className="text-lg text-gray-600">Discover our complete ecosystem of productivity and collaboration tools</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                {[
                  { name: "DoDot", icon: CheckSquare, color: "from-yellow-500 to-orange-500", desc: "AI-powered to-do app with smart notifications" },
                  { name: "Labentia", icon: Users, color: "from-pink-500 to-rose-500", desc: "Global skill swapping social platform" },
                  { name: "Arkemat", icon: ShoppingBag, color: "from-teal-500 to-green-500", desc: "Revolutionary item exchange marketplace" },
                  { name: "Onerio", icon: Video, color: "from-violet-500 to-purple-500", desc: "Transform dreams into AI-generated videos" },
                  { name: "Valoria", icon: MessageSquare, color: "from-indigo-500 to-blue-500", desc: "Real-time chat and video calling" }
                ].map((product, index) => (
                  <motion.div
                    key={product.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-r ${product.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <product.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2">{product.name}</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">{product.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>
      // Replace the entire Products Section with this corrected version:

{/* Products Section */}
<AnimatedSection className="py-20 bg-gradient-to-br from-blue-50 to-sky-50" id="products">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
        Revolutionary <span className="text-blue-600">Product Ecosystem</span>
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">
        Experience the future of technology with our integrated suite of 10 cutting-edge applications
      </p>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {products.map((product, index) => (
        <ProductCard key={product.name} product={product} index={index} />
      ))}
    </div>
  </div>
</AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 bg-gradient-to-r from-blue-600 to-sky-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl mb-8 opacity-90"
          >
            Join thousands of companies already using Nexly's innovative solutions
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <button className="bg-white text-blue-600 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-300 flex items-center justify-center group">
              Start Free Trial
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              Contact Sales
            </button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-sky-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold">Nexly</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Empowering businesses with innovative technology solutions and cutting-edge applications.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">CaffeTest</a></li>
                <li><a href="#" className="hover:text-white transition-colors">CuraCore</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Rabbit</a></li>
                <li><a href="#" className="hover:text-white transition-colors">View All</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Security</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Mobile Apps</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Support</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Nexly. All rights reserved. Built with innovation and excellence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Nexly