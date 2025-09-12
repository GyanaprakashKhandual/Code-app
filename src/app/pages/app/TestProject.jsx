'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  ExternalLink, 
  Github, 
  Clock, 
  Bug, 
  TestTube, 
  Star,
  ChevronDown,
  ChevronUp,
  User,
  MessageSquare,
  Loader2,
  AlertCircle
} from 'lucide-react'

const ProjectCard = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [expandedCards, setExpandedCards] = useState({})

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/project/test')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        setProjects(data.projects || [])
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const toggleExpanded = (index) => {
    setExpandedCards(prev => ({
      ...prev,
      [index]: !prev[index]
    }))
  }

  const getTestTypeIcon = (type) => {
    const icons = {
      'Functional Testing': '🧪',
      'API Testing': '🔗',
      'Performance Testing': '⚡',
      'UI Testing': '🎨',
      'Reports': '📊',
      'Languages': '💻',
      'Bug Reporting': '🐛',
      'Documentation': '📋'
    }
    return icons[type] || '🔧'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="flex items-center space-x-2 text-blue-600"
        >
          <Loader2 className="w-8 h-8" />
          <span className="text-lg font-medium">Loading Projects...</span>
        </motion.div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-lg p-8 max-w-md text-center"
        >
          <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Error Loading Projects</h3>
          <p className="text-gray-600">{error}</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Testing Projects Dashboard</h1>
          <p className="text-gray-600">Comprehensive testing solutions and results</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
                <motion.h2 
                  className="text-2xl font-bold mb-2"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.projectName}
                </motion.h2>
                <p className="text-blue-100 text-lg">{project.appName}</p>
              </div>

              {/* Stats Section */}
              <div className="p-6 bg-gray-50 border-b">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <Clock className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Total Hours</p>
                    <p className="text-xl font-bold text-gray-800">{project.totalHours}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <Bug className="w-6 h-6 text-red-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Bugs Found</p>
                    <p className="text-xl font-bold text-gray-800">{project.totalBugs}</p>
                  </motion.div>
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-lg p-4 shadow-sm"
                  >
                    <TestTube className="w-6 h-6 text-green-500 mx-auto mb-2" />
                    <p className="text-sm text-gray-600">Test Method</p>
                    <p className="text-sm font-semibold text-gray-800">{project.testMethod}</p>
                  </motion.div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Test Types */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
                    <TestTube className="w-5 h-5 mr-2 text-blue-500" />
                    Testing Technologies
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {project.testTypes.map((testType, typeIndex) => {
                      const [key, value] = Object.entries(testType)[0]
                      return (
                        <motion.div
                          key={typeIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: typeIndex * 0.1 }}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 border border-blue-100"
                        >
                          <div className="flex items-center space-x-2">
                            <span className="text-lg">{getTestTypeIcon(key)}</span>
                            <div>
                              <p className="text-sm font-medium text-gray-800">{key}</p>
                              <p className="text-xs text-gray-600">{value}</p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>

                {/* Description */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mb-6"
                >
                  <button
                    onClick={() => toggleExpanded(index)}
                    className="flex items-center justify-between w-full text-left mb-3 hover:text-blue-600 transition-colors"
                  >
                    <h3 className="text-lg font-semibold text-gray-800">Project Description</h3>
                    {expandedCards[index] ? 
                      <ChevronUp className="w-5 h-5" /> : 
                      <ChevronDown className="w-5 h-5" />
                    }
                  </button>
                  <AnimatePresence>
                    {expandedCards[index] && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 leading-relaxed">{project.testDescription}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                {/* Feedback Section */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="bg-green-50 rounded-lg p-4 mb-6 border border-green-100"
                >
                  <div className="flex items-start space-x-3">
                    <MessageSquare className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-sm text-gray-700 italic mb-2">"{project.feedback}"</p>
                      <div className="flex items-center space-x-2">
                        <User className="w-4 h-4 text-green-600" />
                        <span className="text-sm font-medium text-green-800">{project.feedbackFrom}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Links */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.appLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex-1 justify-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>View App</span>
                  </motion.a>
                  <motion.a
                    href={project.gitHubRepo}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center space-x-2 bg-gray-800 text-white px-4 py-2 rounded-lg hover:bg-gray-900 transition-colors flex-1 justify-center"
                  >
                    <Github className="w-4 h-4" />
                    <span>View Code</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectCard