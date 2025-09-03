// pages/index.jsx
import { motion } from 'framer-motion';
import { 
  FiCloud, 
  FiCode, 
  FiCpu, 
  FiDatabase, 
  FiShield, 
  FiLayers,
  FiZap,
  FiCheckCircle,
  FiGlobe,
  FiLock,
  FiServer,
  FiBox
} from 'react-icons/fi';
import Head from 'next/head';


export default function CalfHomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Head>
        <title>GAP - Cloud Testing Automation Platform</title>
        <meta name="description" content="Next-generation cloud testing automation with AI-powered workflows" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navigation */}
      <nav className="bg-white shadow-sm py-4 px-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center">
            <FiBox className="text-white text-xl" />
          </div>
          <span className="text-2xl font-bold text-indigo-800">GAP</span>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#features" className="text-gray-600 hover:text-indigo-600 font-medium">Features</a>
          <a href="#how-it-works" className="text-gray-600 hover:text-indigo-600 font-medium">How It Works</a>
          <a href="#benefits" className="text-gray-600 hover:text-indigo-600 font-medium">Benefits</a>
        </div>
        <div>
          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-6 rounded-lg transition duration-300">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              {motion('h1')({
                className: "text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5 },
                children: "AI-Powered Testing Automation on the Cloud"
              })}
              {motion('p')({
                className: "text-xl text-gray-600 mb-8",
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                transition: { duration: 0.5, delay: 0.2 },
                children: "GAP revolutionizes software testing with intelligent automation, AI-generated test cases, and comprehensive framework support - all in the cloud."
              })}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
              >
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg">
                  Start Free Trial
                </button>
                <button className="bg-white hover:bg-gray-100 text-indigo-600 font-medium py-3 px-8 rounded-lg transition duration-300 border border-indigo-200">
                  Schedule Demo
                </button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div 
                className="relative"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
              >
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                  <div className="flex space-x-4 mb-4">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="bg-gray-800 rounded-lg p-4 text-white font-mono text-sm">
                    <div className="text-green-400">$ gap init my-project</div>
                    <div className="text-gray-400">→ Selecting frameworks...</div>
                    <div className="text-blue-400">✔ Functional: Playwright</div>
                    <div className="text-blue-400">✔ API: Postman</div>
                    <div className="text-blue-400">✔ Database: SQLValidator</div>
                    <div className="text-green-400">→ Generating AI-powered structure...</div>
                    <div className="text-purple-400">✔ Project ready! Run 'gap start' to begin</div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -left-6 bg-indigo-100 p-4 rounded-2xl shadow-lg z-10">
                  <FiCloud className="text-indigo-600 text-3xl" />
                </div>
                <div className="absolute -top-6 -right-6 bg-green-100 p-4 rounded-2xl shadow-lg">
                  <FiCpu className="text-green-600 text-3xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Comprehensive Testing Framework Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              GAP supports all major testing frameworks with AI-enhanced capabilities
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-blue-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiCode className="text-blue-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Functional Testing</h3>
              <p className="text-gray-600">
                Playwright, Selenium, Cypress, and more with AI-powered test generation and execution.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-green-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiGlobe className="text-green-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">API Testing</h3>
              <p className="text-gray-600">
                Postman, REST Assured, and custom frameworks with automated endpoint validation.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-purple-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiDatabase className="text-purple-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Database Testing</h3>
              <p className="text-gray-600">
                Comprehensive data validation, SQL injection testing, and performance benchmarking.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-red-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiShield className="text-red-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Security Testing</h3>
              <p className="text-gray-600">
                OWASP compliance checks, vulnerability scanning, and penetration testing automation.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-yellow-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiZap className="text-yellow-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Performance Testing</h3>
              <p className="text-gray-600">
                Load, stress, and spike testing with detailed performance analytics and reporting.
              </p>
            </motion.div>

            <motion.div 
              className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="bg-indigo-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FiLayers className="text-indigo-600 text-xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">UI/UX Testing</h3>
              <p className="text-gray-600">
                Cross-browser compatibility, accessibility testing, and visual regression detection.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-16 bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">How GAP Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Streamlined workflow from project setup to automated testing and reporting
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="absolute top-20 left-1/4 right-1/4 h-1 bg-indigo-200 hidden md:block"></div>
            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiLock className="text-indigo-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Authenticate</h3>
              <p className="text-gray-600">
                Secure cloud authentication with role-based access control
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiServer className="text-blue-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Configure</h3>
              <p className="text-gray-600">
                Select frameworks for each testing type and define project parameters
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCpu className="text-green-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">3. AI Generation</h3>
              <p className="text-gray-600">
                AI creates optimal file structure, test cases, and environment setup
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-6 rounded-2xl shadow-lg text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <FiCheckCircle className="text-purple-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">4. Execute & Analyze</h3>
              <p className="text-gray-600">
                Run tests, get AI-powered insights, and detailed reporting
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 bg-white">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose GAP?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The all-in-one cloud testing platform with AI integration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-blue-100 p-3 rounded-lg mr-6 flex-shrink-0">
                <FiCloud className="text-blue-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Fully Cloud-Based</h3>
                <p className="text-gray-600">
                  No installation or setup required. Access your testing environment from anywhere, on any device.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="bg-green-100 p-3 rounded-lg mr-6 flex-shrink-0">
                <FiCpu className="text-green-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">AI-Powered Automation</h3>
                <p className="text-gray-600">
                  Our agentic AI generates test cases, identifies bugs, and creates comprehensive reports automatically.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-purple-100 p-3 rounded-lg mr-6 flex-shrink-0">
                <FiLayers className="text-purple-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Framework Agnostic</h3>
                <p className="text-gray-600">
                  Support for all major testing frameworks with automatic structure generation and environment setup.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="bg-red-100 p-3 rounded-lg mr-6 flex-shrink-0">
                <FiZap className="text-red-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Integrated Workspace</h3>
                <p className="text-gray-600">
                  Write, test, and debug code in a seamless environment with real-time AI assistance.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-yellow-100 p-3 rounded-lg mr-6 flex-shrink-0">
                <FiCheckCircle className="text-yellow-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Comprehensive Reporting</h3>
                <p className="text-gray-600">
                  Detailed bug reports, test case documentation, and performance analytics automatically generated.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="flex items-start"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-indigo-100 p-3 rounded-lg mr-6 flex-shrink-0">
                <FiShield className="text-indigo-600 text-2xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">
                  Bank-level security with encryption, secure access controls, and compliance certifications.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-900 text-white">
        <div className="container mx-auto max-w-4xl text-center px-4">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Ready to Transform Your Testing Process?
          </motion.h2>
          <motion.p 
            className="text-xl mb-10 text-indigo-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Join thousands of developers and testers who have accelerated their workflow with GAP.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-white text-indigo-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition duration-300 shadow-lg">
              Start Free Trial
            </button>
            <button className="bg-indigo-700 hover:bg-indigo-600 text-white font-medium py-3 px-8 rounded-lg transition duration-300 border border-indigo-600">
              Request a Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-gray-300 py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                  <FiBox className="text-white text-lg" />
                </div>
                <span className="text-xl font-bold text-white">GAP</span>
              </div>
              <p className="text-gray-400">
                The next-generation cloud testing platform with AI-powered automation.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Use Cases</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Integrations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Webinars</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Support</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Contact</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition">Legal</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-10 pt-6 text-center text-gray-400">
            <p>© {new Date().getFullYear()} GAP Testing Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}