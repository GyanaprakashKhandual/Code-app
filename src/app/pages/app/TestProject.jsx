'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Clock, 
  Bug, 
  Code, 
  TestTube,
  User,
  MessageSquare,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const ProjectCard = () => {
  // Demo data as default
  const demoData = {
    projectName: "Automation on E-commerce",
    appName: "Pioneers Wine",
    appLink: "https://pioneers.vercel.app",
    testMethod: "Automation Testing",
    testTypes: [
      { "Functional Testing": "Selenium" },
      { "API Testing": "Rest Assured" },
      { "Performance Testing": "Grafana" },
      { "UI Testing": "Manual Testing" },
      { "Reports": "Extent Reports" },
      { "Languages": "Java, JavaScript, Gherkin" },
      { "Bug Reporting": "Custom Real-Time Reports" },
      { "Documentation": "Notion + Google Docs" }
    ],
    totalHours: "36.4 Hours",
    totalBugs: "98",
    testDescription: "This project involved testing a complete e-commerce application using Cucumber with Page Object Model (POM). I integrated custom reporting tools and executed end-to-end functional, API, performance, and UI testing. The project successfully uncovered 98 critical bugs that were affecting product performance and customer experience.",
    feedback: "Thank you so much, Chris! This was my hobby project, and you helped transform it into a reliable testing framework. With your detailed bug reports and requirement suggestions, I can now elevate this application to a production-level service.",
    feedbackFrom: "Subham Diwedi",
    gitHubRepo: "https://github.com/GyanaprakashKhandual/Pioneers-Wine-Automation-Test"
  };

  const [projectData, setProjectData] = useState(demoData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const fetchProject = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/v1/project/test');
        if (response.ok) {
          const data = await response.json();
          setProjectData(data.projects[0]);
        }
        // If API fails, keep demo data
      } catch (err) {
        // Keep demo data if API fails
        console.log('API not available, using demo data');
      } finally {
        setLoading(false);
      }
    };

    // Try to fetch from API, but don't block rendering
    fetchProject();
  }, []);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-violet-100 via-purple-50 to-indigo-100 flex items-center justify-center p-4">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-amber-300 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
        <div className="text-red-500 text-center">
          <Bug className="w-12 h-12 mx-auto mb-4" />
          <p className="text-lg">Error: {error}</p>
        </div>
      </div>
    );
  }

  if (!projectData) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center p-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full min-w-[45vw] max-w-[45vw] aspect-square"
      >
        <div className="h-full backdrop-blur-lg bg-white/30 border border-white/40 rounded-3xl shadow-2xl p-8 overflow-y-auto">
          {/* Header */}
          <motion.div variants={itemVariants} className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800 mb-2">{projectData.projectName}</h1>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <span className="bg-white/40 px-3 py-1 rounded-full">{projectData.appName}</span>
              <span className="bg-amber-100/60 px-3 py-1 rounded-full">{projectData.testMethod}</span>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/40 rounded-2xl p-4 text-center">
              <Clock className="w-6 h-6 text-amber-600 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-800">{projectData.totalHours}</div>
              <div className="text-xs text-gray-600">Total Hours</div>
            </div>
            <div className="bg-white/40 rounded-2xl p-4 text-center">
              <Bug className="w-6 h-6 text-red-500 mx-auto mb-2" />
              <div className="text-lg font-semibold text-gray-800">{projectData.totalBugs}</div>
              <div className="text-xs text-gray-600">Bugs Found</div>
            </div>
          </motion.div>

          {/* Test Types */}
          <motion.div variants={itemVariants} className="mb-6">
            <button
              onClick={() => toggleSection('testTypes')}
              className="w-full flex items-center justify-between bg-white/40 rounded-2xl p-4 mb-3 hover:bg-white/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <TestTube className="w-5 h-5 text-blue-600" />
                <span className="font-semibold text-gray-800">Test Types</span>
              </div>
              {expandedSection === 'testTypes' ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: expandedSection === 'testTypes' ? 'auto' : 0,
                opacity: expandedSection === 'testTypes' ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 gap-2 pl-4">
                {projectData.testTypes.map((testType, index) => {
                  const [key, value] = Object.entries(testType)[0];
                  return (
                    <div key={index} className="bg-white/30 rounded-lg p-3 flex justify-between">
                      <span className="text-sm font-medium text-gray-700">{key}</span>
                      <span className="text-sm text-gray-600">{value}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </motion.div>

          {/* Description */}
          <motion.div variants={itemVariants} className="mb-6">
            <button
              onClick={() => toggleSection('description')}
              className="w-full flex items-center justify-between bg-white/40 rounded-2xl p-4 mb-3 hover:bg-white/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <Code className="w-5 h-5 text-green-600" />
                <span className="font-semibold text-gray-800">Description</span>
              </div>
              {expandedSection === 'description' ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: expandedSection === 'description' ? 'auto' : 0,
                opacity: expandedSection === 'description' ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="text-sm text-gray-700 leading-relaxed pl-4 bg-white/30 rounded-lg p-4">
                {projectData.testDescription}
              </p>
            </motion.div>
          </motion.div>

          {/* Feedback */}
          <motion.div variants={itemVariants} className="mb-6">
            <button
              onClick={() => toggleSection('feedback')}
              className="w-full flex items-center justify-between bg-white/40 rounded-2xl p-4 mb-3 hover:bg-white/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2">
                <MessageSquare className="w-5 h-5 text-purple-600" />
                <span className="font-semibold text-gray-800">Client Feedback</span>
              </div>
              {expandedSection === 'feedback' ? 
                <ChevronUp className="w-5 h-5" /> : 
                <ChevronDown className="w-5 h-5" />
              }
            </button>
            
            <motion.div
              initial={false}
              animate={{
                height: expandedSection === 'feedback' ? 'auto' : 0,
                opacity: expandedSection === 'feedback' ? 1 : 0
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pl-4 bg-white/30 rounded-lg p-4">
                <p className="text-sm text-gray-700 italic mb-2">"{projectData.feedback}"</p>
                <div className="flex items-center gap-2">
                  <User className="w-4 h-4 text-gray-500" />
                  <span className="text-xs text-gray-600">- {projectData.feedbackFrom}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Links */}
          <motion.div variants={itemVariants} className="flex gap-3">
            <motion.a
              href={projectData.appLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-4 flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 transition-all duration-300"
            >
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-medium">Live App</span>
            </motion.a>
            <motion.a
              href={projectData.gitHubRepo}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex-1 bg-gradient-to-r from-gray-700 to-gray-800 text-white rounded-2xl p-4 flex items-center justify-center gap-2 hover:from-gray-800 hover:to-gray-900 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectCard;