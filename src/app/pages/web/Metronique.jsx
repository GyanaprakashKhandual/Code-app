'use client'

import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { 
  Clock, 
  Calendar, 
  Mail, 
  BarChart3, 
  Users, 
  Layers, 
  Bell, 
  GitBranch,
  ExternalLink,
  Server,
  ArrowRight,
  CheckCircle,
  Zap,
  Shield,
  Globe,
  Smartphone,
  Eye,
  Layout,
  PieChart
} from 'lucide-react';

const MetroniqueHomePage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const features = [
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Multiple View Options",
      description: "Switch between shade, card, and graph views to visualize your time data exactly how you prefer.",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      icon: <Layout className="w-8 h-8" />,
      title: "Manual Entry & Auto-Save",
      description: "Add your tasks manually with confidence - everything is automatically saved and synchronized.",
      gradient: "from-purple-500 to-blue-600"
    },
    {
      icon: <Calendar className="w-8 h-8" />,
      title: "Calendar Integration",
      description: "Seamlessly integrated with Google Calendar for unified scheduling and time management.",
      gradient: "from-sky-500 to-blue-600"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "Smart Notifications",
      description: "Get email alerts for important deadlines, incomplete tasks, and milestone achievements.",
      gradient: "from-blue-500 to-purple-500"
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Work Type Separation",
      description: "Organize your time between professional and personal projects with clear categorization.",
      gradient: "from-purple-500 to-sky-500"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Company Integration",
      description: "Full integration with company tracking management systems for enterprise-level coordination.",
      gradient: "from-sky-500 to-purple-500"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "10k+", label: "Active Users" },
    { number: "50%", label: "Time Saved" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-800 overflow-hidden relative">
      {/* Radial Background */}
      <div className="fixed inset-0 bg-gradient-radial from-sky-100 via-blue-50 to-purple-100" />
      <div className="fixed inset-0 bg-gradient-radial from-transparent via-blue-100/30 to-purple-200/40" />
      <div className="relative z-10">

      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-blue-100"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Metronique
            </span>
          </motion.div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 border border-blue-200 rounded-full px-6 py-3 mb-8">
              <Zap className="w-5 h-5 text-blue-600" />
              <span className="text-blue-700 font-medium">Advanced Time Shift Tracking</span>
            </div>
          </motion.div>

          <motion.h1
            {...fadeInUp}
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-700 to-purple-700 bg-clip-text text-transparent leading-tight"
          >
            Transform Your
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Time Management
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Experience the future of productivity with Metronique's intelligent time tracking, 
            seamless integrations, and powerful analytics that adapt to your workflow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-blue-300 text-blue-700 rounded-full text-lg font-semibold hover:bg-blue-50 transition-all duration-300"
            >
              Watch Demo
            </motion.button>
          </motion.div>

          {/* Hero Stats */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Elements */}
        <motion.div
          style={{ y }}
          className="absolute top-1/4 left-10 w-20 h-20 bg-gradient-to-r from-blue-200/40 to-purple-200/40 rounded-full blur-xl"
        />
        <motion.div
          style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
          className="absolute top-1/3 right-10 w-32 h-32 bg-gradient-to-r from-purple-200/40 to-sky-200/40 rounded-full blur-xl"
        />
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Powerful Features
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Everything you need to master your time and boost productivity
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  z: 50
                }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl blur-xl" 
                     style={{ background: `linear-gradient(135deg, ${feature.gradient.split(' ')[1]}, ${feature.gradient.split(' ')[3]})` }} />
                
                <div className="relative bg-white/70 backdrop-blur-lg border border-blue-200 rounded-2xl p-8 h-full hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10 transition-all duration-300">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${feature.gradient} text-white mb-6`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Beautiful Interface
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Intuitive design meets powerful functionality
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative max-w-5xl mx-auto"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-3xl blur-3xl" />
            <div className="relative bg-white/70 backdrop-blur-xl border border-blue-200 rounded-3xl p-8 shadow-xl">
              {/* Mock Dashboard */}
              <div className="bg-gradient-to-br from-sky-50 to-blue-50 rounded-2xl p-6 space-y-6 border border-blue-100">
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-bold text-slate-800">Time Dashboard</h3>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full" />
                    <div className="w-3 h-3 bg-purple-500 rounded-full" />
                    <div className="w-3 h-3 bg-sky-500 rounded-full" />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-r from-blue-100 to-sky-100 rounded-xl p-4 border border-blue-200">
                    <PieChart className="w-8 h-8 text-blue-600 mb-2" />
                    <div className="text-lg font-semibold text-slate-700">Professional</div>
                    <div className="text-2xl font-bold text-blue-600">32h 15m</div>
                  </div>
                  <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-xl p-4 border border-purple-200">
                    <BarChart3 className="w-8 h-8 text-purple-600 mb-2" />
                    <div className="text-lg font-semibold text-slate-700">Personal</div>
                    <div className="text-2xl font-bold text-purple-600">18h 45m</div>
                  </div>
                  <div className="bg-gradient-to-r from-sky-100 to-purple-100 rounded-xl p-4 border border-sky-200">
                    <Clock className="w-8 h-8 text-sky-600 mb-2" />
                    <div className="text-lg font-semibold text-slate-700">Today</div>
                    <div className="text-2xl font-bold text-sky-600">7h 30m</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
              Seamless Integrations
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Connect with your favorite tools and workflows
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-sky-500 rounded-lg">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Google Calendar Sync</h3>
                  <p className="text-slate-600">Bidirectional synchronization with your existing calendar events and schedules.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Email Notifications</h3>
                  <p className="text-slate-600">Stay informed with intelligent email alerts for deadlines and important updates.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-gradient-to-r from-sky-500 to-purple-500 rounded-lg">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-slate-800">Enterprise Integration</h3>
                  <p className="text-slate-600">Connect with company tracking systems for seamless workflow management.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-3xl blur-2xl" />
              <div className="relative bg-white/70 backdrop-blur-xl border border-blue-200 rounded-3xl p-8 shadow-xl">
                <div className="grid grid-cols-3 gap-4">
                  {[...Array(9)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, 0]
                      }}
                      transition={{
                        duration: 2,
                        delay: i * 0.2,
                        repeat: Infinity,
                        repeatType: "reverse"
                      }}
                      className="aspect-square bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl border border-blue-200"
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/70 backdrop-blur-xl border border-blue-200 rounded-3xl p-12 shadow-xl"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Ready to Transform Your Productivity?
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join thousands of professionals who trust Metronique for advanced time tracking and management.
            </p>
            
            <motion.button
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 25px 50px rgba(59, 130, 246, 0.4)"
              }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full text-xl font-bold hover:shadow-2xl transition-all duration-300 mb-12"
            >
              Get Started Now
            </motion.button>

            {/* Repository and Application Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <GitBranch className="w-5 h-5" />
                <span>Frontend Repository</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-white border-2 border-slate-200 text-slate-700 rounded-full hover:border-slate-300 hover:shadow-lg transition-all duration-300"
              >
                <Server className="w-5 h-5" />
                <span>Backend Repository</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white border-2 border-blue-500 rounded-full hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                <span>Visit Application</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-blue-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center space-x-2 mb-6"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Metronique
            </span>
          </motion.div>
          <p className="text-slate-500">
            © 2025 Metronique. Advanced Time Tracking for Modern Professionals.
          </p>
        </div>
      </footer>

      {/* Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-100/30 rounded-full blur-3xl" />
      </div>
      
      </div>
    </div>
  );
};

export default MetroniqueHomePage;