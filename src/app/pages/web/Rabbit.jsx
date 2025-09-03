'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { BarChart3, Code, Zap, Eye, MessageSquare, FolderOpen, Activity, Github, ExternalLink } from 'lucide-react'
import { FaCoffee } from 'react-icons/fa'

export default function RabbitHomePage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 20,
        stiffness: 100
      }
    }
  }

  const features = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "VS Code Extension",
      description: "Seamlessly integrated extension that tracks K6 Grafana test results and sends data to your backend"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Multiple Views",
      description: "Choose from chart view, card view, or table view to visualize your performance data exactly how you need it"
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: "Auto Bug Reports",
      description: "Automatically generated bug reports with detailed test results to streamline your debugging process"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Commenting System",
      description: "Add comments to test results, test cards, and rows. Document test cases and collaborate with your team"
    },
    {
      icon: <FolderOpen className="w-8 h-8" />,
      title: "Project Organization",
      description: "Organize tests by projects and separate them by test stages for better workflow management"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Performance Testing",
      description: "Comprehensive testing for both web applications and Android applications with detailed metrics"
    }
  ]

  return (
    <div
      className="min-h-screen text-gray-900 overflow-hidden relative"
      style={{
        background: 'radial-gradient(circle at 30% 20%, #fdf2f8 0%, #dbeafe 25%, #dcfce7 50%, #f3e8ff 75%, #ffffff 100%)'
      }}
    >
      {/* Hero Section */}
      <motion.section
        className="relative z-10 px-2 py-5 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center justify-center mb-6"
          >
            <FaCoffee className='h-12 w-12 text-blue-900' />
          </motion.div>
          <motion.h1
            className="text-6xl md:text-8xl font-black bg-gradient-to-r from-gray-800 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-6"
            variants={itemVariants}
          >
            Rabbit
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            The ultimate multi-stack performance testing platform. Track K6 Grafana results, visualize data beautifully, and collaborate seamlessly with your team.
          </motion.p>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-8">
          <motion.div
            className="inline-flex items-center space-x-4 bg-white/60 backdrop-blur-lg rounded-full px-6 py-3 border border-gray-200"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Eye className="w-5 h-5 text-purple-600" />
            <span className="text-sm font-medium text-gray-700">Visual Studio Code Extension • Multi-View Dashboard • Auto Bug Reports</span>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Features Grid */}
      <motion.section
        className="relative z-10 px-2 py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-8" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Powerful Features
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need for comprehensive performance testing and analysis
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-200/50 to-pink-200/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 h-full shadow-lg">
                <div className="text-purple-600 mb-4 group-hover:text-pink-600 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Workflow Section */}
      <motion.section
        className="relative z-10 px-2 py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
            How It Works
          </h2>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Write & Test",
                description: "Create K6 Grafana testing code for your web or Android applications",
                icon: <Code className="w-8 h-8" />
              },
              {
                step: "02",
                title: "Track & Send",
                description: "Rabbit VS Code extension automatically tracks results and sends to your backend",
                icon: <Activity className="w-8 h-8" />
              },
              {
                step: "03",
                title: "Visualize & Collaborate",
                description: "View results in multiple formats, get auto bug reports, and collaborate with comments",
                icon: <Eye className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="text-center"
                variants={itemVariants}
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                    <div className="text-white">{item.icon}</div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Performance Dashboard Mockup */}
      <motion.section
        className="relative z-10 px-2 py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div variants={itemVariants} className="max-w-6xl mx-auto">
          <div className="bg-white/70 backdrop-blur-lg rounded-3xl p-8 border border-gray-200 shadow-xl">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              <motion.div
                className="bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl p-6 border border-purple-200"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <BarChart3 className="w-6 h-6 text-purple-600" />
                  <h3 className="font-semibold text-gray-800">Chart View</h3>
                </div>
                <div className="space-y-2">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-full" />
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-4/5" />
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full w-3/4" />
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-blue-100 to-green-100 rounded-2xl p-6 border border-blue-200"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-blue-600" />
                  <h3 className="font-semibold text-gray-800">Card View</h3>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="h-12 bg-gradient-to-r from-blue-400/50 to-green-400/50 rounded-lg" />
                  <div className="h-12 bg-gradient-to-r from-blue-400/50 to-green-400/50 rounded-lg" />
                  <div className="h-12 bg-gradient-to-r from-blue-400/50 to-green-400/50 rounded-lg" />
                  <div className="h-12 bg-gradient-to-r from-blue-400/50 to-green-400/50 rounded-lg" />
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-green-100 to-yellow-100 rounded-2xl p-6 border border-green-200"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="w-6 h-6 text-green-600" />
                  <h3 className="font-semibold text-gray-800">Comments</h3>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full" />
                    <div className="h-2 bg-green-400/60 rounded-full flex-1" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-yellow-500 rounded-full" />
                    <div className="h-2 bg-green-400/60 rounded-full w-3/4" />
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </motion.section>

      {/* Stats Section */}
      <motion.section
        className="relative z-10 px-2 py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "100%", label: "Automated Tracking" },
            { number: "3+", label: "View Options" },
            { number: "∞", label: "Project Organization" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-lg rounded-2xl p-8 border border-gray-200 shadow-lg"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.9)" }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: index * 0.1 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="relative z-10 px-6 py-5"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Ready to Level Up Your Testing?
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto mb-12">
            Join developers who are already using Rabbit to streamline their performance testing workflow
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center items-center max-w-4xl mx-auto"
          variants={itemVariants}
        >
          <motion.button
            className="group relative overflow-hidden bg-black hover:bg-gray-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 min-w-[200px] shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>Frontend Repository</span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="group relative overflow-hidden bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 min-w-[200px] shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-5 h-5" />
            <span>Backend Repository</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="group relative overflow-hidden bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-3 min-w-[200px] shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink className="w-5 h-5" />
            <span>Visit Application</span>
            <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </motion.button>
        </motion.div>
      </motion.section>
    </div>
  )
}