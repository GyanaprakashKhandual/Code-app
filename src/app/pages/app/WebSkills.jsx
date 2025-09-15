'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Code, 
  Calendar, 
  FolderOpen, 
  Github, 
  User, 
  Briefcase, 
  FileText,
  Star,
  TrendingUp,
  Award,
  ChevronRight,
  ExternalLink
} from 'lucide-react'

const SkillsShowcase = () => {
  const [skillsData, setSkillsData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [selectedSkill, setSelectedSkill] = useState(null)

  useEffect(() => {
    const fetchSkillsData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/v1/skill/web')
        if (!response.ok) throw new Error('Failed to fetch skills data')
        const data = await response.json()
        setSkillsData(data)
      } catch (err) {
        setError(err.message)
        // Fallback data for demo
        setSkillsData({
          "PersonalInfo": {
            "Name": "Your Name",
            "Title": "Full Stack Developer",
            "Summary": "Experienced developer with expertise in both frontend and backend technologies, specializing in creating responsive web applications with modern animations and 3D elements."
          },
          "Languages": [
            {
              "Name": "JavaScript",
              "Level": "Advanced",
              "Experience": "2 Year+",
              "Project": "100+",
              "GitHub": "https://github.com/yourusername/javascript-projects"
            },
            {
              "Name": "Java",
              "Level": "Intermediate",
              "Experience": "1 Year+",
              "Project": "20+",
              "GitHub": "https://github.com/yourusername/java-projects"
            },
            {
              "Name": "Python",
              "Level": "Intermediate",
              "Experience": "1 Year+",
              "Project": "15+",
              "GitHub": "https://github.com/yourusername/python-projects"
            },
            {
              "Name": "C",
              "Level": "Intermediate",
              "Experience": "1 Year+",
              "Project": "10+",
              "GitHub": "https://github.com/yourusername/c-projects"
            },
            {
              "Name": "C++",
              "Level": "Intermediate",
              "Experience": "1 Year+",
              "Project": "10+",
              "GitHub": "https://github.com/yourusername/cpp-projects"
            }
          ]
        })
      } finally {
        setLoading(false)
      }
    }

    fetchSkillsData()
  }, [])

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'advanced': return 'from-green-500 to-emerald-500'
      case 'intermediate': return 'from-blue-500 to-cyan-500'
      case 'beginner': return 'from-amber-500 to-orange-500'
      default: return 'from-gray-500 to-slate-500'
    }
  }

  const getLevelProgress = (level) => {
    switch (level?.toLowerCase()) {
      case 'advanced': return 90
      case 'intermediate': return 65
      case 'beginner': return 35
      default: return 50
    }
  }

  const getSkillIcon = (skillName) => {
    const name = skillName?.toLowerCase()
    if (name?.includes('javascript') || name?.includes('js')) return '🟨'
    if (name?.includes('java')) return '☕'
    if (name?.includes('python')) return '🐍'
    if (name?.includes('c++')) return '⚡'
    if (name?.includes('c')) return '🔧'
    return '💻'
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-gray-800"
        >
          <h2 className="text-2xl font-bold mb-2">Connection Error</h2>
          <p className="text-gray-600">Using demo data instead</p>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gray-100 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gray-50 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-gray-900 rounded-full"
            >
              <User className="w-8 h-8 text-white" />
            </motion.div>
            <h1 className="text-5xl font-bold text-gray-900">
              {skillsData?.PersonalInfo?.Name}
            </h1>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <Briefcase className="w-5 h-5 text-gray-700" />
            <h2 className="text-2xl text-gray-700 font-medium">
              {skillsData?.PersonalInfo?.Title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            {skillsData?.PersonalInfo?.Summary}
          </motion.p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          {skillsData?.Languages?.map((skill, index) => (
            <motion.div
              key={skill.Name}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={() => setSelectedSkill(skill)}
              className="group cursor-pointer relative overflow-hidden rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-400 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              {/* Card Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative p-8">
                {/* Skill Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">{getSkillIcon(skill.Name)}</div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors">
                        {skill.Name}
                      </h3>
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r ${getLevelColor(skill.Level)} text-white mt-2`}>
                        {skill.Level}
                      </span>
                    </div>
                  </div>
                  <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600">Proficiency</span>
                    <span className="text-sm text-gray-800 font-semibold">{getLevelProgress(skill.Level)}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${getLevelProgress(skill.Level)}%` }}
                      transition={{ delay: index * 0.1 + 0.5, duration: 1, ease: "easeOut" }}
                      className={`h-full rounded-full bg-gradient-to-r ${getLevelColor(skill.Level)}`}
                    />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <Calendar className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-500">Experience</p>
                      <p className="text-sm font-semibold text-gray-900">{skill.Experience}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 p-3 bg-gray-50 border border-gray-200 rounded-lg">
                    <FolderOpen className="w-4 h-4 text-gray-600" />
                    <div>
                      <p className="text-xs text-gray-500">Projects</p>
                      <p className="text-sm font-semibold text-gray-900">{skill.Project}</p>
                    </div>
                  </div>
                </div>

                {/* GitHub Link */}
                <motion.a
                  href={skill.GitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center justify-center gap-2 mt-6 p-3 bg-gray-900 hover:bg-gray-800 rounded-lg transition-all duration-300 text-white"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm font-medium">View Projects</span>
                  <ExternalLink className="w-3 h-3" />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
            <TrendingUp className="w-8 h-8 text-gray-700 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {skillsData?.Languages?.length || 0}
            </h3>
            <p className="text-gray-600">Programming Languages</p>
          </div>
          
          <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
            <Award className="w-8 h-8 text-gray-700 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {skillsData?.Languages?.reduce((acc, skill) => acc + parseInt(skill.Project.replace('+', '') || 0), 0) || 0}+
            </h3>
            <p className="text-gray-600">Total Projects</p>
          </div>
          
          <div className="text-center p-6 bg-white border-2 border-gray-200 rounded-2xl shadow-lg">
            <Star className="w-8 h-8 text-gray-700 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {skillsData?.Languages?.filter(skill => skill.Level === 'Advanced').length || 0}
            </h3>
            <p className="text-gray-600">Advanced Skills</p>
          </div>
        </motion.div>
      </div>

      {/* Skill Detail Modal */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedSkill(null)}
            className="fixed inset-0 bg-black/30 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl p-8 max-w-md w-full border-2 border-gray-200 shadow-2xl"
            >
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{getSkillIcon(selectedSkill.Name)}</div>
                <h2 className="text-3xl font-bold text-gray-900 mb-2">{selectedSkill.Name}</h2>
                <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r ${getLevelColor(selectedSkill.Level)} text-white`}>
                  {selectedSkill.Level}
                </span>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <span className="text-gray-600">Experience</span>
                  <span className="text-gray-900 font-semibold">{selectedSkill.Experience}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-gray-50 border border-gray-200 rounded-lg">
                  <span className="text-gray-600">Projects</span>
                  <span className="text-gray-900 font-semibold">{selectedSkill.Project}</span>
                </div>
              </div>

              <motion.a
                href={selectedSkill.GitHub}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center gap-2 w-full p-4 bg-gray-900 hover:bg-gray-800 rounded-xl transition-all duration-300 text-white font-medium"
              >
                <Github className="w-5 h-5" />
                View GitHub Projects
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SkillsShowcase