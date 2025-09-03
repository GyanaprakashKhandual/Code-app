'use client'
import React, { useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Bug,
  Shield,
  Zap,
  BarChart3,
  Users,
  Filter,
  Grid3X3,
  MessageSquare,
  Table,
  CheckCircle,
  ArrowRight,
  Star,
  Play,
  Menu,
  X,
  Eye,
  Settings,
  TrendingUp,
  Clock
} from 'lucide-react';

const CuracoreHomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, 25]);

  // Floating animation variants
  const floatingVariants = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const features = [
    {
      icon: Bug,
      title: "Manual Bug Tracking",
      description: "Easily add and track bugs manually with intuitive forms and smart categorization"
    },
    {
      icon: Filter,
      title: "Advanced Filtering",
      description: "Filter bugs by status, priority, assignee, and custom tags for better organization"
    },
    {
      icon: Eye,
      title: "Three View Options",
      description: "Switch between Card, Chat, and Table views to match your workflow preferences"
    },
    {
      icon: Settings,
      title: "Project Management",
      description: "Organize bugs across separated projects with dedicated workspaces"
    },
    {
      icon: BarChart3,
      title: "Detailed Dashboard",
      description: "Get insights with comprehensive analytics and progress tracking"
    },
    {
      icon: Users,
      title: "User-Friendly",
      description: "Clean, intuitive interface designed for teams of all sizes"
    }
  ];

  const viewOptions = [
    {
      icon: Grid3X3,
      title: "Card View",
      description: "Visual kanban-style cards for quick overview"
    },
    {
      icon: MessageSquare,
      title: "Chat View",
      description: "Timeline-based communication flow"
    },
    {
      icon: Table,
      title: "Table View",
      description: "Detailed tabular data for power users"
    }
  ];

  const stats = [
    { number: "10K+", label: "Bugs Tracked" },
    { number: "500+", label: "Happy Users" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-lavender-50 to-sky-50 overflow-hidden">
      {/* Radial Background */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-200/20 via-transparent to-sky-200/10 pointer-events-none" />


      {/* Hero Section */}
      <section className="relative pt-12 pb-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium mb-6">
                <Zap className="w-4 h-4 mr-2" />
                Lite Version of JIRA
              </span>
              <motion.h1
                variants={itemVariants}
                className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-700 via-sky-500 to-purple-900 bg-clip-text text-transparent leading-tight"
              >
                Curacore
              </motion.h1>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-sky-500 to-blue-700 bg-clip-text text-transparent leading-tight"
            >
              Bug Management
              <br />
              <span className="text-4xl md:text-6xl">Made Simple</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              Curacore is the lightweight, user-friendly bug tracking solution that gives you the power of JIRA
              without the complexity. Track, manage, and resolve issues with ease.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
            >
              <motion.button
                className="bg-gradient-to-r from-blue-500 to-sky-400 text-white px-8 py-4 rounded-xl font-semibold text-lg flex items-center shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </motion.button>

              <motion.button
                className="bg-white/80 backdrop-blur text-gray-700 px-8 py-4 rounded-xl font-semibold text-lg flex items-center border border-blue-200 hover:bg-white transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Hero Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="text-3xl font-bold text-blue-600">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-20 left-10 w-20 h-20 bg-blue-200/30 rounded-full blur-xl"
            style={{ y: y1 }}
          />
          <motion.div
            className="absolute top-40 right-20 w-32 h-32 bg-sky-200/20 rounded-full blur-2xl"
            style={{ y: y2 }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to manage bugs effectively, without the bloat
            </p>
          </motion.div>

          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/80 backdrop-blur p-8 rounded-2xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-lg group"
                whileHover={{ y: -5 }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-sky-400 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* View Options Section */}
      <section id="views" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Three Ways to View
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the view that matches your workflow and team preferences
            </p>
          </motion.div>

          <motion.div
            className="grid lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {viewOptions.map((view, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-white to-blue-50/50 backdrop-blur p-10 rounded-3xl border border-blue-100 hover:border-blue-200 transition-all duration-300 hover:shadow-xl group text-center"
                whileHover={{ y: -10 }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-sky-400 rounded-2xl flex items-center justify-center mb-8 mx-auto group-hover:scale-110 transition-transform">
                  <view.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-800">{view.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">{view.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Dashboard Preview Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-sky-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-sky-500 bg-clip-text text-transparent">
              Integrated Dashboard
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get comprehensive insights into your bug management process
            </p>
          </motion.div>

          <motion.div
            className="bg-white/80 backdrop-blur rounded-3xl p-8 border border-blue-100 shadow-xl"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { icon: TrendingUp, label: "Active Bugs", value: "24", color: "text-red-500" },
                { icon: CheckCircle, label: "Resolved", value: "156", color: "text-green-500" },
                { icon: Clock, label: "In Progress", value: "12", color: "text-yellow-500" },
                { icon: Users, label: "Team Members", value: "8", color: "text-blue-500" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 border border-blue-100"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <item.icon className={`w-6 h-6 ${item.color}`} />
                    <span className="text-2xl font-bold text-gray-800">{item.value}</span>
                  </div>
                  <p className="text-gray-600">{item.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="h-40 bg-gradient-to-r from-blue-100 to-sky-100 rounded-xl flex items-center justify-center">
              <p className="text-gray-600 text-lg">Interactive Chart Preview</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-sky-500">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Streamline Your Bug Management?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join thousands of teams who've simplified their workflow with Curacore
            </p>
            <motion.button
              className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-xl hover:bg-blue-50 transition-colors shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Free Trial Today
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default CuracoreHomePage;