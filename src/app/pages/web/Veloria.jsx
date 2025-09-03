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
      <div className="bg-white/90 backdrop-blur-lg rounded-2xl p-6 border border-emerald-200 hover:bg-white/95 hover:scale-105 hover:shadow-xl transition-all duration-300 group shadow-lg">
        <div className="bg-gradient-to-br from-emerald-500 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-emerald-900 mb-2">{title}</h3>
        <p className="text-emerald-700 text-sm leading-relaxed">{description}</p>
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
      <div className="bg-emerald-500/90 backdrop-blur-md rounded-full p-3 animate-bounce shadow-xl">
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

export default function VeloriaHomepage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeDemo, setActiveDemo] = useState('chat')

  const realTimeFeatures = [
    { icon: Edit3, title: "Typing Indicators", description: "See when someone is typing a message in real-time" },
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
    { icon: Timer, title: "Self-Destructing Messages", description: "Messages remove after read" },
    { icon: UserX, title: "Safety Controls", description: "Advanced blocking and reporting features" },
    { icon: Key, title: "Two-Factor Auth", description: "Enhanced account security protection" },
    { icon: Settings, title: "Privacy Controls", description: "Granular control over who can contact you" }
  ]

  const integrationFeatures = [
    { icon: Bot, title: "Smart Chat Bots", description: "AI-powered automated assistants" },
    { icon: Plug, title: "Third-Party Integrations", description: "Connect with your favorite services" },
    { icon: Code, title: "Developer API", description: "Build custom integrations" },
    { icon: Webhook, title: "Webhooks", description: "Real-time notifications update" }
  ]

  const groupFeatures = [
    { icon: Hash, title: "Channel Categories", description: "Organize group chats into categories" },
    { icon: Crown, title: "User Roles", description: "Advanced permissions and privact" },
    { icon: Megaphone, title: "Announcement Channels", description: "Broadcast-only communication channels" },
    { icon: BarChart3, title: "Polls & Surveys", description: "Interactive group decision-making tools" }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-emerald-50 to-emerald-100 overflow-hidden">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <FloatingIcon icon={MessageSquare} className="top-20 left-10" delay={500} />
        <FloatingIcon icon={Video} className="top-32 right-16" delay={700} />
        <FloatingIcon icon={Shield} className="bottom-32 left-20" delay={900} />
        <FloatingIcon icon={Users} className="bottom-20 right-10" delay={1100} />
        <FloatingIcon icon={Zap} className="top-40 left-1/4" delay={1300} />
        <FloatingIcon icon={Heart} className="bottom-40 right-1/4" delay={1500} />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="mb-8 inline-flex items-center bg-emerald-600/95 backdrop-blur-lg rounded-full px-6 py-3 border border-emerald-500 shadow-xl">
            <Star className="w-5 h-5 text-yellow-300 mr-2" />
            <span className="text-white text-sm font-semibold">The Future of Communication is Here</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-emerald-900 mb-6 leading-tight">
            Welcome to
            <span className="block bg-gradient-to-r from-emerald-600 to-emerald-800 bg-clip-text text-transparent">
              Veloria
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-emerald-800 mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            The ultimate communication platform combining secure messaging, video calling,
            real-time collaboration, and enterprise-grade features in one beautiful interface.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="group bg-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-700 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-xl">
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="group border-2 border-emerald-600 text-emerald-600 bg-white/50 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 hover:scale-105 transition-all duration-300 flex items-center justify-center shadow-lg">
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-emerald-200 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1">
                <AnimatedCounter end={50} suffix="K+" />
              </div>
              <div className="text-sm text-emerald-600 font-medium">Active Users</div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-emerald-200 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1">
                <AnimatedCounter end={99} suffix="%" />
              </div>
              <div className="text-sm text-emerald-600 font-medium">Uptime</div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-emerald-200 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1">
                <AnimatedCounter end={4.9} suffix="" />
              </div>
              <div className="text-sm text-emerald-600 font-medium">Rating</div>
            </div>
            <div className="bg-white/80 backdrop-blur-lg rounded-xl p-4 border border-emerald-200 shadow-lg">
              <div className="text-2xl md:text-3xl font-bold text-emerald-700 mb-1">
                <AnimatedCounter end={128} suffix="" />
              </div>
              <div className="text-sm text-emerald-600 font-medium">Countries</div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Advanced Communication Features
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Everything you need for modern, secure, and efficient communication
            </p>
          </div>

          {/* Real-time Features */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800 mb-10 text-center flex items-center justify-center">
              <Zap className="w-8 h-8 mr-3 text-emerald-600" />
              Real-Time Communication
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {realTimeFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100}
                />
              ))}
            </div>
          </div>

          {/* Media Features */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800 mb-10 text-center flex items-center justify-center">
              <Upload className="w-8 h-8 mr-3 text-emerald-600" />
              Media & File Sharing
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {mediaFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100 + 200}
                />
              ))}
            </div>
          </div>

          {/* User Experience Features */}
          <div className="mb-20">
            <h3 className="text-2xl md:text-3xl font-semibold text-emerald-800 mb-10 text-center flex items-center justify-center">
              <Star className="w-8 h-8 mr-3 text-emerald-600" />
              Enhanced User Experience
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {userFeatures.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  delay={index * 100 + 400}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="py-2 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Enterprise-Grade Security
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Your conversations are protected with the highest security standards
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {securityFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section id="integrations" className="py-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Powerful Integrations
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Connect with your favorite tools and services
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {integrationFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Group Features Section */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-emerald-900 mb-6">
              Advanced Group Features
            </h2>
            <p className="text-xl text-emerald-700 max-w-3xl mx-auto">
              Perfect for teams, communities, and organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {groupFeatures.map((feature, index) => (
              <FeatureCard
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
                delay={index * 100}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-5 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 to-emerald-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Communication?
          </h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto">
            Join thousands of teams and individuals who trust Veloria for their daily communication needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-emerald-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-emerald-50 hover:scale-105 transition-all duration-300 shadow-xl">
              Start Free Trial
            </button>
            <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 hover:scale-105 transition-all duration-300">
              Schedule a Demo
            </button>
          </div>
          <p className="text-emerald-200 mt-8 text-sm">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  )
}

