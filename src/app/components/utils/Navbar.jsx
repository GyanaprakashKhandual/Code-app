'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee } from 'react-icons/fa';
import { Menu, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { Dropdown } from '../assets/Dropdown';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const router = useRouter();

  // Dropdown options
  const aboutOptions = [
    { value: 'loventia', label: 'Loventia' },
    { value: 'curacore', label: 'Curacore' },
    { value: 'caffestest', label: 'CaffesTest' }
  ];

  const webAppOptions = [
    { value: 'loventia', label: 'Loventia' },
    { value: 'curacore', label: 'Curacore' },
    { value: 'caffestest', label: 'CaffesTest' }
  ];

  const testOptions = [
    { value: 'pisl-infra', label: 'PISL Infra' },
    { value: 'resolution-pro', label: 'Resolution Pro' },
    { value: 'audit-pro', label: 'Audit Pro' }
  ];

  const handleDropdownChange = (value) => {
    if (value) {
      router.push(`/${value}`);
    }
  };

  const handleNavClick = (path) => {
    router.push(path);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => handleNavClick('/')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCoffee className="text-2xl text-amber-600" />
            <span className="text-xl font-bold text-gray-800">The Calos</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* About Dropdown */}
            <div className="relative">
              <Dropdown
                options={aboutOptions}
                placeholder="About"
                onChange={handleDropdownChange}
                variant="default"
                size="md"
                className="min-w-32"
              />
            </div>

            {/* Education */}
            <motion.button
              className="text-gray-600 hover:text-amber-600 font-medium transition-colors duration-200"
              onClick={() => handleNavClick('/education')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Education
            </motion.button>

            {/* Project Dropdown */}
            <div className="relative">
              <Dropdown
                options={webAppOptions}
                placeholder="Project"
                onChange={handleDropdownChange}
                variant="default"
                size="md"
                className="min-w-32"
              />
            </div>

            {/* Work Dropdown */}
            <div className="relative">
              <Dropdown
                options={testOptions}
                placeholder="Work"
                onChange={handleDropdownChange}
                variant="default"
                size="md"
                className="min-w-32"
              />
            </div>

            {/* Blog */}
            <motion.button
              className="text-gray-600 hover:text-amber-600 font-medium transition-colors duration-200"
              onClick={() => handleNavClick('/blog')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Blog
            </motion.button>

            {/* Contact */}
            <motion.button
              className="text-gray-600 hover:text-amber-600 font-medium transition-colors duration-200"
              onClick={() => handleNavClick('/contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-amber-600 focus:outline-none focus:text-amber-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-gray-200"
            >
              <div className="px-2 pt-2 pb-3 space-y-1">
                {/* About Dropdown Mobile */}
                <div className="block px-3 py-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">About</label>
                  <Dropdown
                    options={aboutOptions}
                    placeholder="Select option"
                    onChange={handleDropdownChange}
                    variant="default"
                    size="md"
                    className="w-full"
                  />
                </div>

                {/* Education Mobile */}
                <motion.button
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => handleNavClick('/education')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Education
                </motion.button>

                {/* Project Dropdown Mobile */}
                <div className="block px-3 py-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Project</label>
                  <Dropdown
                    options={webAppOptions}
                    placeholder="Select project"
                    onChange={handleDropdownChange}
                    variant="default"
                    size="md"
                    className="w-full"
                  />
                </div>

                {/* Work Dropdown Mobile */}
                <div className="block px-3 py-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Work</label>
                  <Dropdown
                    options={testOptions}
                    placeholder="Select work"
                    onChange={handleDropdownChange}
                    variant="default"
                    size="md"
                    className="w-full"
                  />
                </div>

                {/* Blog Mobile */}
                <motion.button
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => handleNavClick('/blog')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Blog
                </motion.button>

                {/* Contact Mobile */}
                <motion.button
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-600 hover:text-amber-600 hover:bg-gray-50 transition-colors duration-200"
                  onClick={() => handleNavClick('/contact')}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Contact
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Tablet Navigation (md to lg screens) */}
      <div className="hidden md:flex lg:hidden items-center justify-center space-x-6 py-3 border-t border-gray-200 bg-gray-50">
        {/* About Dropdown Tablet */}
        <div className="relative">
          <Dropdown
            options={aboutOptions}
            placeholder="About"
            onChange={handleDropdownChange}
            variant="default"
            size="sm"
            className="min-w-28"
          />
        </div>

        {/* Education Tablet */}
        <motion.button
          className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors duration-200"
          onClick={() => handleNavClick('/education')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Education
        </motion.button>

        {/* Project Dropdown Tablet */}
        <div className="relative">
          <Dropdown
            options={webAppOptions}
            placeholder="Project"
            onChange={handleDropdownChange}
            variant="default"
            size="sm"
            className="min-w-28"
          />
        </div>

        {/* Work Dropdown Tablet */}
        <div className="relative">
          <Dropdown
            options={testOptions}
            placeholder="Work"
            onChange={handleDropdownChange}
            variant="default"
            size="sm"
            className="min-w-28"
          />
        </div>

        {/* Blog Tablet */}
        <motion.button
          className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors duration-200"
          onClick={() => handleNavClick('/blog')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Blog
        </motion.button>

        {/* Contact Tablet */}
        <motion.button
          className="text-sm font-medium text-gray-600 hover:text-amber-600 transition-colors duration-200"
          onClick={() => handleNavClick('/contact')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;