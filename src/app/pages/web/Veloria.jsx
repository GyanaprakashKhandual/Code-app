'use client'

import React, { useState, useEffect } from 'react'
import { 
  MessageSquare, 
  Video, 
  Shield, 
  Zap, 
  Users, 
  FileText,
  Eye,
  Heart,
  Edit3,
  Upload,
  Image,
  Share,
  Mic,
  Search,
  MessageCircle,
  Pin,
  Moon,
  Bell,
  Lock,
  Timer,
  UserX,
  Key,
  Settings,
  Bot,
  Plug,
  Code,
  Webhook,
  Hash,
  Crown,
  Megaphone,
  BarChart3,
  Star,
  Check,
  ArrowRight,
  Play,
  Download,
  Globe
} from 'lucide-react'

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/15 hover:scale-105 transition-all duration-300 group">
        <div className="bg-gradient-to-br from-emerald-400 to-sky-400 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

const FloatingIcon = ({ icon: Icon, className, delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), delay)
    return () => clearTimeout(timer)
  }, [delay])

  return (
    <div className={`absolute ${className} transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="bg-white/20 backdrop-blur-md rounded-full p-3 animate-bounce">
        <Icon className="w-5 h-5 text-white" />
      </div>
    </div>
  )
}

const AnimatedCounter = ({ end, duration = 2000, suffix = "" }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    let startTimestamp = null
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration])

  return (
    <span className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function VeloriaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState('chat')

  const realTimeFeatures = [
    { icon: Edit3, title: "Typing Indicators", description: "See when someone is composing a message in real-time" },
    { icon: Eye, title: "Read Receipts", description: "Know exactly when your messages have been read" },
    { icon: Zap, title: "Online Status", description: "Real-time presence indicators for all users" },
    { icon: Heart, title: "Message Reactions", description: "Express yourself with emoji reactions" },
    { icon: Edit3, title: "Live Editing", description: "Edit and delete messages with instant notifications" }
  ]

  const mediaFeatures = [
    { icon: Upload, title: "Drag & Drop Sharing", description: "Intuitive file transfers with visual feedback" },
    { icon: Image, title: "Media Previews", description: "Preview images and videos before sending" },
    { icon: FileText, title: "File Management", description: "Organized storage with quotas and categories" },
    { icon: Share, title: "Screen Sharing", description: "Collaborate with high-quality screen sharing" },
    { icon: Mic, title: "Voice Messages", description: "Record and send crystal-clear audio clips" }
  ]

  const userFeatures = [
    { icon: Search, title: "Message Search", description: "Powerful search through all conversation history" },
    { icon: MessageCircle, title: "Message Threading", description: "Keep conversations organized with threads" },
    { icon: Pin, title: "Message Pins", description: "Pin important messages for easy access" },
    { icon: Moon, title: "Theme Options", description: "Beautiful dark and light themes" },
    { icon: Bell, title: "Custom Notifications", description: "Personalized notification settings" }
  ]

  const securityFeatures = [
    { icon: Lock, title: "End-to-End Encryption", description: "Military-grade security for all messages" },
    { icon: Timer, title: "Self-Destructing Messages", description: "Messages that disappear after reading" },
    { icon: UserX, title: "Safety Controls", description: "Advanced blocking and reporting features" },
    { icon: Key, title: "Two-Factor Auth", description: "Enhanced account security protection" },
    { icon: Settings, title: "Privacy Controls", description: "Granular control over who can contact you" }
  ]

  const integrationFeatures = [
    { icon: Bot, title: "Smart Chat Bots", description: "AI-powered automated assistants" },
    { icon: Plug, title: "Third-Party Integrations", description: "Connect with your favorite services" },
    { icon: Code, title: "Developer API", description: "Build custom extensions and integrations" },
    { icon: Webhook, title: "Webhooks", description: "Real-time notifications to external services" }
  ]

  const groupFeatures = [
    { icon: Hash, title: "Channel Categories", description: "Organize group chats into categories" },
    { icon: Crown, title: "User Roles", description: "Advanced permissions and moderation tools" },
    { icon: Megaphone, title: "Announcement Channels", description: "Broadcast-only communication channels" },
    { icon: BarChart3, title: "Polls & Surveys", description: "Interactive group decision-making tools" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-500 via-sky-500 to-emerald-600 overflow-hidden">
      {/* Navigation */}
      <nav className="relative z-50 bg-white/10 backdrop-blur-lg border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="bg-gradient-to-br from-emerald-400 to-sky-400 w-8 h-8 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Veloria</span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#security" className="text-white/90 hover:text-white transition-colors">Security</a>
              <a href="#integrations" className="text-white/90 hover:text-white transition-colors">Integrations</a>
              <button className="bg-white text-emerald-600 px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <div className={`w-6 h-0.5 bg-white transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : ''}`} />
                <div className={`w-6 h-0.5 bg-white mt-1 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : ''}`} />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white/10 backdrop-blur-lg border-t border-white/20">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-white/90 hover:text-white transition-colors">Features</a>
              <a href="#security" className="block text-white/90 hover:text-white transition-colors">Security</a>
              <a href="#integrations" className="block text-white/90 hover:text-white transition-colors">Integrations</a>
              <button className="w-full bg-white text-emerald-600 px-6 py-2 rounded-full font-medium hover:bg-white/90 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <FloatingIcon icon={MessageSquare} className="top-20 left-10" delay={500} />
        <FloatingIcon icon={Video} className="top-32 right-16" delay={700} />
        <FloatingIcon icon={Shield} className="bottom-32 left-20" delay={900} />
        <FloatingIcon icon={Users} className="bottom-20 right-10" delay={1100} />
        <FloatingIcon icon={Zap} className="top-40 left-1/4" delay={1300} />
        <FloatingIcon icon={Heart} className="bottom-40 right-1/4" delay={1500} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-flex items-center bg-white/10 backdrop-blur-lg rounded-full px-6 py-3 border border-white/20">
            <Star className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white/90 text-sm">The Future of Communication is Here</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Veloria
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed max-w-3xl mx-auto">
            The ultimate communication platform combining secure messaging, video calling, 
            real-time collaboration, and enterprise-grade features in one beautiful interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={10} suffix="M+" />
              </div>
              <div className="text-white/70">Active Users</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <div className="text-white/70">Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={150} suffix="+" />
              </div>
              <div className="text-white/70">Countries</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-white mb-2">
                <AnimatedCounter end={5} suffix="★" />
              </div>
              <div className="text-white/70">App Rating</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Everything You Need to
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Stay Connected
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Veloria brings together all the tools your team needs for seamless communication, 
              collaboration, and productivity in one unified platform.
            </p>
          </div>

          {/* Real-time Features */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Real-time Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {realTimeFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Media & File Sharing */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Upload className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Media & File Sharing</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {mediaFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* User Experience */}
          <div className="mb-20">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">User Experience</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {userFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Shield className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Security & Privacy
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Your conversations and data are protected by military-grade encryption 
              and advanced privacy controls that put you in complete control.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 mb-16">
            {securityFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border border-white/20">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="bg-gradient-to-br from-emerald-400 to-sky-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">256-bit Encryption</h4>
                <p className="text-white/70">Military-grade AES-256 encryption protects every message</p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-emerald-400 to-sky-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">GDPR Compliant</h4>
                <p className="text-white/70">Full compliance with international privacy regulations</p>
              </div>
              <div>
                <div className="bg-gradient-to-br from-emerald-400 to-sky-400 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Check className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl font-semibold text-white mb-2">SOC 2 Certified</h4>
                <p className="text-white/70">Independently audited security and availability</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 w-16 h-16 rounded-2xl flex items-center justify-center">
                <Plug className="w-8 h-8 text-white" />
              </div>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful Integrations &
              <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                Developer Tools
              </span>
            </h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Extend Veloria's capabilities with our comprehensive API, 
              smart bots, and seamless third-party integrations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {integrationFeatures.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>

          {/* Advanced Group Features */}
          <div className="mb-16">
            <div className="flex items-center justify-center mb-12">
              <div className="bg-gradient-to-r from-emerald-400 to-sky-400 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-white">Advanced Group Features</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {groupFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white/10 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
              Communication?
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-8 max-w-2xl mx-auto">
            Join millions of users who have already made the switch to Veloria. 
            Start your free trial today and experience the future of communication.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="group bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/90 transition-all duration-300 flex items-center justify-center">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
              <Download className="w-5 h-5 mr-2" />
              Download App
            </button>
          </div>

          <p className="text-white/60 text-sm">
            No credit card required • 30-day free trial • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-gradient-to-br from-emerald-400 to-sky-400 w-8 h-8 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">Veloria</span>
            </div>
            <div className="flex space-x-8">
              <a href="#" className="text-white/70 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Support</a>
              <a href="#" className="text-white/70 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/20 text-center">
            <p className="text-white/60">
              © 2025 Veloria. All rights reserved. Built with ❤️ for seamless communication.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}