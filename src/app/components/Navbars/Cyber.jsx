'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Coffee, Terminal, Network, Shield, Rat, Crown, GitBranch, Shell } from 'lucide-react'

// Import statements for external components
// These would be imported from actual component files
import Linux from '../learning/Cyber/Linux'
import Bash from '../learning/Cyber/Bash';
// import Nmap from '../component/nmap'
// import BurpSuite from '../component/burpsuite'
// import FatRat from '../component/fatrat'
// import Empire from '../component/empire'
import Git from '../learning/Cyber/Git';
// import PowerShell from '../component/powershell'



const Nmap = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-8 bg-white rounded-xl shadow-lg border border-sky-100"
  >
    <div className="flex items-center gap-3 mb-6">
      <Network className="w-8 h-8 text-sky-600" />
      <h2 className="text-3xl font-bold text-sky-800">Nmap Scanner</h2>
    </div>
    <div className="bg-sky-50 p-6 rounded-lg mb-6 border border-sky-200">
      <p className="font-mono text-sky-700">nmap -sS -O -A target.com</p>
      <p className="font-mono text-gray-700">Starting Nmap scan...</p>
      <p className="font-mono text-gray-700">Host is up (0.023s latency)</p>
      <p className="font-mono text-gray-700">PORT     STATE SERVICE</p>
      <p className="font-mono text-gray-700">22/tcp   open  ssh</p>
      <p className="font-mono text-gray-700">80/tcp   open  http</p>
    </div>
    <p className="text-lg text-gray-700">Network discovery and security auditing with the most powerful port scanner.</p>
  </motion.div>
)

const BurpSuite = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-8 bg-white rounded-xl shadow-lg border border-green-100"
  >
    <div className="flex items-center gap-3 mb-6">
      <Shield className="w-8 h-8 text-green-600" />
      <h2 className="text-3xl font-bold text-green-800">Burp Suite</h2>
    </div>
    <div className="bg-green-50 p-6 rounded-lg mb-6 border border-green-200">
      <p className="font-mono text-green-700">Proxy: 127.0.0.1:8080</p>
      <p className="font-mono text-gray-700">Intercept: ON</p>
      <p className="font-mono text-gray-700">Target scope: *.example.com</p>
      <p className="font-mono text-gray-700">Scanner: Active</p>
    </div>
    <p className="text-lg text-gray-700">Web application security testing platform for finding vulnerabilities.</p>
  </motion.div>
)

const FatRat = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-8 bg-white rounded-xl shadow-lg border border-blue-100"
  >
    <div className="flex items-center gap-3 mb-6">
      <Rat className="w-8 h-8 text-blue-600" />
      <h2 className="text-3xl font-bold text-blue-800">TheFatRat</h2>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
      <p className="font-mono text-blue-700">Generating payload...</p>
      <p className="font-mono text-gray-700">Platform: Windows x64</p>
      <p className="font-mono text-gray-700">Encoder: x64/xor</p>
      <p className="font-mono text-gray-700">Output: payload.exe</p>
    </div>
    <p className="text-lg text-gray-700">Easy tool for generating backdoors and payloads for penetration testing.</p>
  </motion.div>
)

const Empire = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-8 bg-white rounded-xl shadow-lg border border-sky-100"
  >
    <div className="flex items-center gap-3 mb-6">
      <Crown className="w-8 h-8 text-sky-600" />
      <h2 className="text-3xl font-bold text-sky-800">Empire Framework</h2>
    </div>
    <div className="bg-sky-50 p-6 rounded-lg mb-6 border border-sky-200">
      <p className="font-mono text-sky-700">(Empire)  agents</p>
      <p className="font-mono text-gray-700">Active agents: 2</p>
      <p className="font-mono text-sky-700">(Empire)  listeners</p>
      <p className="font-mono text-gray-700">HTTP listener active on port 80</p>
    </div>
    <p className="text-lg text-gray-700">Post-exploitation framework for Windows environments and Active Directory.</p>
  </motion.div>
)


const PowerShell = () => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="p-8 bg-white rounded-xl shadow-lg border border-blue-100"
  >
    <div className="flex items-center gap-3 mb-6">
      <Terminal className="w-8 h-8 text-blue-600" />
      <h2 className="text-3xl font-bold text-blue-800">PowerShell</h2>
    </div>
    <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
      <p className="font-mono text-blue-700">PS C:\ Get-Process | Where-Object </p>
      <p className="font-mono text-gray-700">ProcessName     CPU(s)</p>
      <p className="font-mono text-gray-700">chrome          245.67</p>
      <p className="font-mono text-blue-700">PS C:\ Get-EventLog -LogName Security -Newest 10</p>
    </div>
    <p className="text-lg text-gray-700">Advanced command-line shell and scripting language for Windows administration.</p>
  </motion.div>
)

const WelcomeScreen = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    className="p-12 text-center bg-white rounded-xl border border-gray-200"
  >
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      className="inline-block mb-8"
    >
      <Coffee className="w-20 h-20 text-blue-600" />
    </motion.div>
    <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
      Cybersecurity Toolkit
    </h1>
    <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
      Welcome to your comprehensive cybersecurity command center. Select any tool from the navigation above to explore powerful security testing and development utilities.
    </p>
    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-lg mx-auto">
      {['Linux', 'Nmap', 'Burp', 'Git'].map((tool, index) => (
        <motion.div
          key={tool}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="p-3 bg-gradient-to-br from-green-50 to-blue-50 border border-green-200 rounded-lg text-sm font-medium text-gray-700"
        >
          {tool}
        </motion.div>
      ))}
    </div>
  </motion.div>
)

export default function CyberSecurityNavbar() {
  const [activeComponent, setActiveComponent] = useState('welcome')

  const navItems = [
    { key: 'linux', label: 'Linux', icon: Terminal, component: Linux },
    { key: 'bash', label: 'Bash', icon: Shell, component: Bash },
    { key: 'nmap', label: 'Nmap', icon: Network, component: Nmap },
    { key: 'burpsuite', label: 'BurpSuite', icon: Shield, component: BurpSuite },
    { key: 'fatrat', label: 'Fat Rat', icon: Rat, component: FatRat },
    { key: 'empire', label: 'Empire', icon: Crown, component: Empire },
    { key: 'git', label: 'Git', icon: GitBranch, component: Git },
    { key: 'powershell', label: 'PowerShell', icon: Terminal, component: PowerShell },
  ]

  const renderComponent = () => {
    if (activeComponent === 'welcome') return <WelcomeScreen />
    const item = navItems.find(item => item.key === activeComponent)
    return item ? <item.component /> : <WelcomeScreen />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-green-50 to-blue-50">
      {/* Navbar */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/80 backdrop-blur-lg border-b border-green-200 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center gap-3 cursor-pointer"
              onClick={() => setActiveComponent('welcome')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              >
                <Coffee className="w-8 h-8 text-blue-600" />
              </motion.div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">CyberCafe</span>
            </motion.div>

            {/* Navigation Items */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.key}
                    onClick={() => setActiveComponent(item.key)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                      activeComponent === item.key
                        ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white shadow-lg'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-green-50'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </motion.button>
                )
              })}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <motion.button 
                className="text-gray-600 hover:text-gray-800 p-2"
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </motion.button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden pb-4">
            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => {
                const IconComponent = item.icon
                return (
                  <motion.button
                    key={item.key}
                    onClick={() => setActiveComponent(item.key)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium transition-all ${
                      activeComponent === item.key
                        ? 'bg-gradient-to-r from-blue-500 to-green-500 text-white'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-green-50'
                    }`}
                    whileTap={{ scale: 0.95 }}
                  >
                    <IconComponent className="w-4 h-4" />
                    {item.label}
                  </motion.button>
                )
              })}
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Main Content */}
      <main className="">
        <motion.div
          key={activeComponent}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderComponent()}
        </motion.div>
      </main>
    </div>
  )
}