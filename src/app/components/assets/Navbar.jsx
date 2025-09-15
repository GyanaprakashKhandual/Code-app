'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ChevronDown, 
  Menu, 
  X, 
  ExternalLink, 
  Globe, 
  TestTube,
  User,
  BookOpen,
  Mail,
  Briefcase,
  LogIn
} from 'lucide-react'
import { FaCoffee } from 'react-icons/fa'
import { GoogleArrowDown } from '../utils/Icon'

const Navbar = () => {
  const [isProductsOpen, setIsProductsOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const products = [
    {
      name: "Caffetest",
      description: "Advanced coffee testing and quality analysis platform for coffee professionals and enthusiasts.",
      features: ["Quality scoring", "Flavor profiling", "Batch tracking", "Analytics dashboard"],
      link: "https://caffetest.com"
    },
    {
      name: "Curacore", 
      description: "Healthcare management system designed to streamline medical workflows and patient care.",
      features: ["Patient management", "Appointment scheduling", "Medical records", "Billing system"],
      link: "https://curacore.com"
    },
    {
      name: "Rabbit",
      description: "Fast and reliable messaging platform for teams and communities.",
      features: ["Real-time messaging", "File sharing", "Voice calls", "Team channels"],
      link: "https://rabbit.com"
    },
    {
      name: "Metronique",
      description: "Precision timing and metronome application for musicians and performers.",
      features: ["Custom time signatures", "Visual metronome", "Practice sessions", "Tempo mapping"],
      link: "https://metronique.com"
    },
    {
      name: "Doodot",
      description: "Creative drawing and sketching application with collaborative features.",
      features: ["Digital canvas", "Brush library", "Layer system", "Real-time collaboration"],
      link: "https://doodot.com"
    },
    {
      name: "Veloria",
      description: "E-commerce platform builder with advanced customization options.",
      features: ["Drag & drop builder", "Payment integration", "Inventory management", "Analytics"],
      link: "https://veloria.com"
    },
    {
      name: "Loventia",
      description: "Social networking platform focused on meaningful connections and relationships.",
      features: ["Smart matching", "Video calls", "Event planning", "Privacy controls"],
      link: "https://loventia.com"
    },
    {
      name: "Arcancemart",
      description: "Specialized marketplace for rare and collectible items with authentication services.",
      features: ["Item authentication", "Secure transactions", "Expert valuations", "Collection tracking"],
      link: "https://arcancemart.com"
    }
  ]

  const navItems = [
    { name: "Web Projects", href: "/web-projects", icon: Globe },
    { name: "Test Projects", href: "/test-projects", icon: TestTube },
    { name: "About", href: "/about", icon: User },
    { name: "Blog", href: "/blog", icon: BookOpen },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Experience", href: "/experience", icon: Briefcase },
    { name: "Sign In", href: "/signin", icon: LogIn }
  ]

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen)
    setSelectedProduct(null)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
    setIsProductsOpen(false)
  }

  const selectProduct = (product) => {
    setSelectedProduct(product)
  }

  return (
    <>
      <nav className="bg-gradient-to-r from-blue-50 via-white to-sky-50 border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <FaCoffee className="h-8 w-8 text-blue-900" />
              <span className="text-2xl font-bold text-gray-900">Nexly</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Products Dropdown */}
              <div className="relative">
                <button
                  onClick={toggleProducts}
                  className="flex items-center space-x-1 bg-gradient-to-r from-blue-50 to-blue-100 px-4 py-2 rounded-lg text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 hover:shadow-md border border-blue-100"
                >
                  <span>Products</span>
                  <motion.div
                    animate={{ rotate: isProductsOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <GoogleArrowDown className="h-4 w-4" />
                  </motion.div>
                </button>
              </div>

              {/* Other Nav Items */}
              {navItems.slice(0, -1).map((item, index) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 hover:shadow-md border
                    ${index % 3 === 0 
                      ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800 border-blue-100 hover:from-blue-100 hover:to-blue-200" 
                      : index % 3 === 1
                      ? "bg-gradient-to-r from-sky-50 to-sky-100 text-sky-800 border-sky-100 hover:from-sky-100 hover:to-sky-200"
                      : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800 border-gray-100 hover:from-gray-100 hover:to-gray-200"
                    }`}
                >
                  <item.icon className="h-4 w-4" />
                  <span>{item.name}</span>
                </a>
              ))}

              {/* Sign In Button */}
              <a
                href="/signin"
                className="flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-all duration-200 font-medium shadow-md hover:shadow-lg"
              >
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMobileMenu}
                className="bg-gradient-to-r from-blue-100 to-blue-200 p-2 rounded-lg text-gray-700 hover:text-gray-900 shadow-sm"
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="lg:hidden border-t border-blue-100 py-4 bg-gradient-to-b from-blue-50 to-white"
              >
                <div className="flex flex-col space-y-3">
                  <button
                    onClick={toggleProducts}
                    className="flex items-center justify-between bg-gradient-to-r from-blue-100 to-blue-200 text-gray-700 font-medium py-3 px-4 rounded-lg"
                  >
                    <span>Products</span>
                    <motion.div
                      animate={{ rotate: isProductsOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="h-4 w-4" />
                    </motion.div>
                  </button>
                  
                  {navItems.map((item, index) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={`flex items-center space-x-2 py-3 px-4 rounded-lg font-medium
                        ${index % 3 === 0 
                          ? "bg-gradient-to-r from-blue-50 to-blue-100 text-blue-800" 
                          : index % 3 === 1
                          ? "bg-gradient-to-r from-sky-50 to-sky-100 text-sky-800"
                          : "bg-gradient-to-r from-gray-50 to-gray-100 text-gray-800"
                        }`}
                    >
                      <item.icon className="h-4 w-4" />
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Products Modal */}
      <AnimatePresence>
        {isProductsOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsProductsOpen(false)}
              className="fixed inset-0 bg-black bg-opacity-50 z-40"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="fixed top-20 left-1/2 transform -translate-x-1/2 w-11/12 max-w-6xl bg-white rounded-xl shadow-2xl z-50 overflow-hidden"
            >
              <div className="flex flex-col lg:flex-row h-96 lg:h-80">
                {/* Products List */}
                <div className="w-full lg:w-1/3 bg-gradient-to-b from-blue-50 to-gray-50 p-6 overflow-y-auto">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Products</h3>
                  <div className="space-y-2">
                    {products.map((product) => (
                      <button
                        key={product.name}
                        onClick={() => selectProduct(product)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                          selectedProduct?.name === product.name
                            ? 'bg-gradient-to-r from-blue-100 to-blue-200 border-l-4 border-blue-500 text-blue-900'
                            : 'bg-white hover:bg-blue-50 hover:shadow-sm text-gray-700'
                        }`}
                      >
                        <div className="font-medium">{product.name}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Details */}
                <div className="w-full lg:w-2/3 p-6 overflow-y-auto">
                  {selectedProduct ? (
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-2xl font-bold text-gray-900">{selectedProduct.name}</h2>
                        <a
                          href={selectedProduct.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-4 py-2 rounded-lg hover:from-blue-700 hover:to-blue-800 transition-colors duration-200"
                        >
                          <span>Visit Product</span>
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      </div>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {selectedProduct.description}
                      </p>

                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {selectedProduct.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 text-gray-700 bg-blue-50 p-2 rounded-lg"
                            >
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                      <div className="text-center">
                        <div className="bg-gradient-to-r from-blue-100 to-blue-200 p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                          <Globe className="h-8 w-8 text-blue-600" />
                        </div>
                        <p className="text-lg">Select a product to view details</p>
                        <p className="text-sm mt-2">Click on any product from the list to learn more</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar