'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { CheckCircle, Users, Mail, BarChart3, Zap, Calendar, Bell, Target, ArrowRight, Github, Globe, Workflow, Clock, AlertTriangle } from 'lucide-react';

const AnimatedSection = ({ children, className = "" }) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay, duration: 0.5 }}
    className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 transform hover:scale-105"
  >
    <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
      <Icon className="w-6 h-6 text-white" />
    </div>
    <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </motion.div>
);

const WorkflowStep = ({ number, title, description, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ delay, duration: 0.6 }}
    className="flex items-start space-x-4 mb-8"
  >
    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg flex-shrink-0">
      {number}
    </div>
    <div>
      <h4 className="text-xl font-semibold text-white mb-2">{title}</h4>
      <p className="text-gray-300">{description}</p>
    </div>
  </motion.div>
);

const FloatingElements = () => (
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    {[...Array(6)].map((_, i) => (
      <motion.div
        key={i}
        className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-30"
        animate={{
          x: [0, 100, 0],
          y: [0, -100, 0],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 8 + i * 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: `${10 + i * 15}%`,
          top: `${20 + i * 10}%`,
        }}
      />
    ))}
  </div>
);

export default function DooDotHomePage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      <FloatingElements />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                DooDot
              </span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"
            >
              The ultimate productivity powerhouse that transforms chaos into clarity. 
              Organize by work type, manage sub-todos, and stay connected with intelligent notifications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 30 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <div className="flex items-center space-x-2 bg-green-500/20 text-green-400 px-4 py-2 rounded-full">
                <CheckCircle className="w-5 h-5" />
                <span>Work Type Organization</span>
              </div>
              <div className="flex items-center space-x-2 bg-blue-500/20 text-blue-400 px-4 py-2 rounded-full">
                <Mail className="w-5 h-5" />
                <span>Smart Email Alerts</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 text-purple-400 px-4 py-2 rounded-full">
                <BarChart3 className="w-5 h-5" />
                <span>Interactive Analytics</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50, rotateZ: 25 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50, rotateZ: isVisible ? -15 : 25 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="relative"
          >
            <div className="relative transform -rotate-12 hover:-rotate-6 transition-transform duration-700 perspective-1000">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-600/40 rounded-3xl blur-3xl scale-110"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-pink-500/20 to-cyan-500/20 rounded-3xl blur-2xl"></div>
              <motion.img
                animate={{ 
                  rotateY: [0, -5, 5, 0],
                  rotateX: [0, 2, -2, 0],
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                src="https://res.cloudinary.com/dvytvjplt/image/upload/v1756624938/Screenshot_2025-08-31_125108_whp1lq.png"
                alt="DooDot App Interface"
                className="relative w-full max-w-2xl mx-auto rounded-3xl shadow-2xl border border-white/30 transform-gpu"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.5))',
                  transformStyle: 'preserve-3d'
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 rounded-3xl"></div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-white mb-6">
              Revolutionize Your <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Workflow</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience productivity like never before with intelligent organization, seamless collaboration, and real-time insights.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Target}
              title="Work Type Separation"
              description="Organize your tasks by work type with intelligent categorization. Keep personal, professional, and project-specific todos perfectly separated and easily accessible."
              delay={0.1}
            />
            <FeatureCard
              icon={Workflow}
              title="Sub-Todo Management"
              description="Break down complex tasks into manageable sub-todos. Create hierarchical task structures that help you tackle big projects step by step."
              delay={0.2}
            />
            <FeatureCard
              icon={Mail}
              title="Smart Email Notifications"
              description="Stay informed with intelligent email alerts for completed tasks, delays, and warnings. Never miss important deadlines again."
              delay={0.3}
            />
            <FeatureCard
              icon={BarChart3}
              title="Interactive Analytics"
              description="Visualize your productivity with beautiful, interactive graphics. Track progress, identify patterns, and optimize your workflow."
              delay={0.4}
            />
            <FeatureCard
              icon={Clock}
              title="Real-Time Status Tracking"
              description="Monitor task status in real-time with visual indicators for completed, delayed, and warning states. Stay on top of everything."
              delay={0.5}
            />
            <FeatureCard
              icon={Zap}
              title="Advanced Automation"
              description="Leverage powerful automation features that adapt to your working style and help streamline repetitive tasks."
              delay={0.6}
            />
          </div>
        </div>
      </AnimatedSection>

      {/* Workflow Section */}
      <AnimatedSection className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-8">
                Seamless <span className="bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">Workflow</span>
              </h2>
              <WorkflowStep
                number="1"
                title="Create Work Types"
                description="Set up different categories for your work - personal, professional, creative projects, or any custom type that fits your needs."
                delay={0.1}
              />
              <WorkflowStep
                number="2"
                title="Add Todos & Sub-Todos"
                description="Create main tasks and break them down into actionable sub-todos. Build complex project hierarchies with ease."
                delay={0.2}
              />
              <WorkflowStep
                number="3"
                title="Track Progress"
                description="Mark tasks as complete, delayed, or set warnings. Get instant email notifications and visual feedback on your progress."
                delay={0.3}
              />
              <WorkflowStep
                number="4"
                title="Analyze & Optimize"
                description="Use interactive analytics to understand your productivity patterns and optimize your workflow for maximum efficiency."
                delay={0.4}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-white">Work Project Alpha - Completed</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded-full animate-pulse"></div>
                    <span className="text-white">Personal Tasks - In Progress</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
                    <span className="text-white">Client Deliverables - Delayed</span>
                  </div>
                  <div className="mt-6 p-4 bg-blue-500/20 rounded-xl">
                    <div className="flex items-center space-x-2 mb-2">
                      <Mail className="w-5 h-5 text-blue-400" />
                      <span className="text-blue-400 font-semibold">Email Notification Sent</span>
                    </div>
                    <p className="text-gray-300 text-sm">"Task 'Client Review' is overdue. Priority: High"</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Interactive Graphics Section */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-6">
            Interactive <span className="bg-gradient-to-r from-pink-400 to-yellow-500 bg-clip-text text-transparent">Analytics</span>
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
            Visualize your productivity with stunning, interactive graphics that provide deep insights into your work patterns and performance.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20 max-w-4xl mx-auto"
          >
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-gray-300">Completion Rate</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">124</div>
                <div className="text-gray-300">Tasks This Week</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-400 mb-2">3.2h</div>
                <div className="text-gray-300">Avg. Task Time</div>
              </div>
            </div>
            
            <div className="h-48 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-2xl flex items-center justify-center">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="w-32 h-32 border-4 border-blue-400 border-t-transparent rounded-full"
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Status Management Section */}
      <AnimatedSection className="py-20 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-white mb-6">
              Smart <span className="bg-gradient-to-r from-red-400 to-orange-500 bg-clip-text text-transparent">Status Management</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Keep track of every task with intelligent status indicators and automated notifications.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="bg-green-500/20 backdrop-blur-lg rounded-2xl p-6 border border-green-500/30 text-center"
            >
              <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Completed</h3>
              <p className="text-gray-300">Tasks marked as complete trigger success notifications and progress updates.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-red-500/20 backdrop-blur-lg rounded-2xl p-6 border border-red-500/30 text-center"
            >
              <Clock className="w-16 h-16 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Delayed</h3>
              <p className="text-gray-300">Overdue tasks automatically send priority email alerts to keep you informed.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-yellow-500/20 backdrop-blur-lg rounded-2xl p-6 border border-yellow-500/30 text-center"
            >
              <AlertTriangle className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-3">Warning</h3>
              <p className="text-gray-300">Approaching deadlines trigger warning notifications to help you stay ahead.</p>
            </motion.div>
          </div>
        </div>
      </AnimatedSection>

      {/* Advanced Features */}
      <AnimatedSection className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-5xl font-bold text-white mb-16">
            Advanced <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Features</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Users, title: "Team Collaboration", desc: "Share and collaborate on projects" },
              { icon: Calendar, title: "Smart Scheduling", desc: "AI-powered deadline management" },
              { icon: Bell, title: "Custom Alerts", desc: "Personalized notification preferences" },
              { icon: Workflow, title: "Automation", desc: "Streamline repetitive workflows" }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* CTA Section */}
      <AnimatedSection className="py-20 px-4 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold text-white mb-8"
          >
            Ready to Transform Your Productivity?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-xl text-gray-300 mb-12"
          >
            Join thousands of professionals who have revolutionized their workflow with DooDot.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>Visit Frontend Repo</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(168, 85, 247, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span>Visit Backend Repo</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(34, 197, 94, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Globe className="w-5 h-5" />
              <span>Visit Website</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </AnimatedSection>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-600/10 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/10 to-pink-600/10 rounded-full blur-3xl"
        ></motion.div>
      </div>
    </div>
  );
}