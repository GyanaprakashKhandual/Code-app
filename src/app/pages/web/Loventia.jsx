'use client'
import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { 
  Heart, 
  ArrowLeftRight, 
  Users, 
  MessageCircle, 
  Video, 
  Briefcase,
  BookOpen,
  GraduationCap,
  Zap,
  Star,
  Play,
  Menu,
  X,
  ArrowRight,
  Search,
  Filter,
  Globe,
  Camera,
  Share2,
  UserPlus,
  TrendingUp,
  Award,
  Clock,
  MapPin,
  CheckCircle,
  Twitter,
  Instagram,
  Linkedin,
  Facebook,
  Shuffle,
  Target,
  Sparkles
} from 'lucide-react';

const LoventiaLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);
  const y3 = useTransform(scrollY, [0, 500], [0, -75]);

  // Auto-rotate feature showcase
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 6);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const coreFeatures = [
    {
      icon: ArrowLeftRight,
      title: "Skill Swapping",
      description: "Exchange skills for free - teach what you know, learn what you need",
      color: "from-pink-500 to-rose-400"
    },
    {
      icon: Users,
      title: "Smart Matching",
      description: "AI-powered matching connects you with perfect skill exchange partners",
      color: "from-purple-500 to-indigo-400"
    },
    {
      icon: MessageCircle,
      title: "Community Chat",
      description: "Connect, discuss, and build relationships with like-minded learners",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: Video,
      title: "Video Learning",
      description: "Face-to-face skill sessions with integrated video calling",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: Briefcase,
      title: "Job Opportunities",
      description: "Discover career opportunities through your skill network",
      color: "from-orange-500 to-yellow-400"
    },
    {
      icon: Globe,
      title: "Social Feed",
      description: "Share progress, celebrate achievements, and inspire others",
      color: "from-teal-500 to-blue-400"
    }
  ];

  const socialFeatures = [
    { platform: "Twitter", icon: Twitter, feature: "Skill Posts & Updates" },
    { platform: "Instagram", icon: Instagram, feature: "Visual Learning Stories" },
    { platform: "LinkedIn", icon: Linkedin, feature: "Professional Networking" },
    { platform: "Facebook", icon: Facebook, feature: "Community Groups" }
  ];

  const stats = [
    { number: "50K+", label: "Active Learners", icon: Users },
    { number: "25K+", label: "Skills Exchanged", icon: ArrowLeftRight },
    { number: "98%", label: "Match Success", icon: Target },
    { number: "4.9★", label: "User Rating", icon: Star }
  ];

  const skillCategories = [
    "Programming", "Design", "Music", "Language", "Cooking", "Photography",
    "Marketing", "Writing", "Fitness", "Art", "Business", "Dancing"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-50 overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-pulse" />
        <motion.div 
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-300/30 to-purple-300/30 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 20, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <motion.nav 
        className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-pink-100"
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Loventia
              </span>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Features</a>
              <a href="#how-it-works" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">How It Works</a>
              <a href="#community" className="text-gray-700 hover:text-pink-600 transition-colors font-medium">Community</a>
              <motion.button 
                className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-2 rounded-xl font-semibold shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Join Free
              </motion.button>
            </div>

            <button 
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-pink-100"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              <div className="px-4 py-6 space-y-4">
                <a href="#features" className="block text-gray-700 hover:text-pink-600 font-medium">Features</a>
                <a href="#how-it-works" className="block text-gray-700 hover:text-pink-600 font-medium">How It Works</a>
                <a href="#community" className="block text-gray-700 hover:text-pink-600 font-medium">Community</a>
                <button className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold">
                  Join Free
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pink-100 to-purple-100 text-pink-800 rounded-full text-sm font-semibold mb-8 border border-pink-200">
                <Sparkles className="w-4 h-4 mr-2" />
                The Future of Social Learning
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-8xl font-black mb-8 leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Learn. Teach.
              </span>
              <br />
              <span className="bg-gradient-to-r from-indigo-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Connect.
              </span>
            </motion.h1>

            <motion.p 
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed"
            >
              The revolutionary social platform where skills meet passion. Swap your expertise, learn from others, 
              and build meaningful connections in a community that grows together.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-16"
            >
              <motion.button 
                className="group bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:shadow-pink-500/25 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Skill Swapping
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="group bg-white/80 backdrop-blur text-gray-700 px-10 py-5 rounded-2xl font-bold text-xl flex items-center border-2 border-pink-200 hover:border-pink-300 hover:bg-white transition-all duration-300 shadow-lg"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/70 backdrop-blur rounded-2xl p-6 border border-pink-100 shadow-lg"
                  whileHover={{ scale: 1.1, y: -5 }}
                >
                  <stat.icon className="w-8 h-8 text-pink-500 mx-auto mb-3" />
                  <div className="text-3xl md:text-4xl font-black bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div 
            className="absolute top-32 left-10 w-24 h-24 bg-pink-300/30 rounded-full blur-xl"
            style={{ y: y1 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute top-40 right-16 w-32 h-32 bg-purple-300/20 rounded-full blur-2xl"
            style={{ y: y2 }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 left-1/4 w-20 h-20 bg-indigo-300/25 rounded-full blur-xl"
            style={{ y: y3 }}
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          />
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/40 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-pink-600 to-indigo-600 bg-clip-text text-transparent">
              How Skill Swapping Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Connect, match, and grow together in three simple steps
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                step: "01",
                title: "Share Your Skills",
                description: "Tell us what you can teach and what you want to learn. Our smart algorithm finds perfect matches.",
                icon: BookOpen,
                color: "from-pink-500 to-rose-400"
              },
              {
                step: "02",
                title: "Get Matched",
                description: "Connect with someone who has what you need and wants what you offer. It's a perfect skill exchange!",
                icon: Shuffle,
                color: "from-purple-500 to-indigo-400"
              },
              {
                step: "03",
                title: "Learn & Teach",
                description: "Start your skill swap journey with video calls, messaging, and collaborative learning sessions.",
                icon: GraduationCap,
                color: "from-indigo-500 to-blue-400"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
                whileHover={{ y: -10 }}
              >
                <div className="relative mb-8">
                  <motion.div 
                    className={`w-24 h-24 bg-gradient-to-br ${item.color} rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:shadow-pink-500/25 transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <item.icon className="w-12 h-12 text-white" />
                  </motion.div>
                  <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-black text-lg shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{item.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Features */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              All-in-One Social Learning
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to learn, teach, and connect in one powerful platform
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Feature Showcase */}
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              {coreFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 cursor-pointer ${
                    activeFeature === index
                      ? 'bg-white border-pink-300 shadow-xl'
                      : 'bg-white/50 border-transparent hover:border-pink-200 hover:bg-white/70'
                  }`}
                  onClick={() => setActiveFeature(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-800">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Visual Demo */}
            <motion.div 
              className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-3xl p-8 border border-pink-200"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                    {React.createElement(coreFeatures[activeFeature].icon, { className: "w-5 h-5 text-white" })}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{coreFeatures[activeFeature].title}</h4>
                    <p className="text-sm text-gray-600">Feature Preview</p>
                  </div>
                </div>
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl flex items-center justify-center">
                  <motion.div
                    key={activeFeature}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center"
                  >
                    <div className={`w-16 h-16 bg-gradient-to-br ${coreFeatures[activeFeature].color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                      {React.createElement(coreFeatures[activeFeature].icon, { className: "w-8 h-8 text-white" })}
                    </div>
                    <p className="text-gray-600 font-medium">{coreFeatures[activeFeature].title} Demo</p>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Integration */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Social Media. Reimagined.
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              All the best features from Twitter, Instagram, LinkedIn, and Facebook - unified for learning
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {socialFeatures.map((social, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/70 backdrop-blur p-8 rounded-2xl border border-indigo-100 hover:border-indigo-200 transition-all duration-300 hover:shadow-xl group text-center"
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <social.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{social.platform} Style</h3>
                <p className="text-gray-600">{social.feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skill Categories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Every Skill Imaginable
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From coding to cooking, music to marketing - find your perfect skill match
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {skillCategories.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.div>
            ))}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-gray-600 to-gray-500 text-white px-6 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-all duration-300 cursor-pointer"
              whileHover={{ scale: 1.1, y: -2 }}
            >
              +100 More...
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Community Section */}
      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Join the Learning Revolution
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Thousands of learners and teachers are already transforming their lives
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                quote: "I learned web development and taught photography - all for free! The community is amazing.",
                author: "Sarah Chen",
                role: "Designer & Developer",
                avatar: "SC"
              },
              {
                quote: "Found my dream job through connections I made while teaching guitar lessons on Loventia.",
                author: "Mike Rodriguez",
                role: "Music Teacher",
                avatar: "MR"
              },
              {
                quote: "The skill matching is incredible. I've learned 3 languages and taught digital marketing.",
                author: "Emma Thompson",
                role: "Marketing Expert",
                avatar: "ET"
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-pink-100 shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{testimonial.author}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

            {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-black mb-6 text-white">
              Ready to Transform Your Skills?
            </h2>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto mb-10">
              Join thousands of learners and start your skill exchange journey today
            </p>
            
            <motion.div className="flex flex-col sm:flex-row justify-center items-center gap-6">
              <motion.button 
                className="group bg-white text-pink-600 px-10 py-5 rounded-2xl font-bold text-xl shadow-2xl hover:bg-gray-50 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started Free
                <ArrowRight className="w-6 h-6 ml-3 inline-block group-hover:translate-x-1 transition-transform" />
              </motion.button>
              
              <motion.button 
                className="group bg-transparent border-2 border-white text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform inline-block" />
                Watch Demo
              </motion.button>
            </motion.div>
            
            <p className="text-pink-200 mt-8 text-sm">
              No credit card required • Join in seconds • Cancel anytime
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold">Loventia</span>
              </div>
              <p className="text-gray-400 mb-6">
                The social platform where skills meet passion and everyone grows together.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Product</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
                               <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Case Studies</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Company</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Press</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-lg mb-6">Support</h3>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Loventia. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LoventiaLanding;