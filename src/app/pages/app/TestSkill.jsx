'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
    Code2,
    TestTube,
    Smartphone,
    Globe,
    FileText,
    Settings,
    Zap,
    CheckCircle,
    PlayCircle,
    Bug
} from 'lucide-react'

const SkillsShowcase = () => {
    const [skills, setSkills] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // Skill icon mapping
    const getSkillIcon = (skillName) => {
        const iconMap = {
            'Manual Testing': <Bug className="w-6 h-6" />,
            'Cypress': <Code2 className="w-6 h-6" />,
            'Selenium': <Globe className="w-6 h-6" />,
            'Playwright': <PlayCircle className="w-6 h-6" />,
            'Appium': <Smartphone className="w-6 h-6" />,
            'PyTest': <TestTube className="w-6 h-6" />,
            'Rest Assured': <Zap className="w-6 h-6" />,
            'Postman': <Settings className="w-6 h-6" />
        }
        return iconMap[skillName] || <CheckCircle className="w-6 h-6" />
    }

    // Color schemes for different skills
    const getSkillColors = (index) => {
        const colorSchemes = [
            { bg: 'bg-blue-500', border: 'border-blue-400', text: 'text-blue-900', light: 'bg-blue-100' },
            { bg: 'bg-green-500', border: 'border-green-400', text: 'text-green-900', light: 'bg-green-100' },
            { bg: 'bg-purple-500', border: 'border-purple-400', text: 'text-purple-900', light: 'bg-purple-100' },
            { bg: 'bg-red-500', border: 'border-red-400', text: 'text-red-900', light: 'bg-red-100' },
            { bg: 'bg-yellow-500', border: 'border-yellow-400', text: 'text-yellow-900', light: 'bg-yellow-100' },
            { bg: 'bg-indigo-500', border: 'border-indigo-400', text: 'text-indigo-900', light: 'bg-indigo-100' },
            { bg: 'bg-pink-500', border: 'border-pink-400', text: 'text-pink-900', light: 'bg-pink-100' },
            { bg: 'bg-teal-500', border: 'border-teal-400', text: 'text-teal-900', light: 'bg-teal-100' }
        ]
        return colorSchemes[index % colorSchemes.length]
    }

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setLoading(true)
                const response = await fetch('http://localhost:5000/api/v1/skill/test')
                if (!response.ok) {
                    throw new Error('Failed to fetch skills')
                }
                const data = await response.json()
                setSkills(data.skills || [])
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchSkills()
    }, [])

    const SkillBranch = ({ skill, index }) => {
        const colors = getSkillColors(index)
        const integrationCount = skill.integration.length
        const angleStep = 360 / integrationCount

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative flex items-center justify-center w-80 h-80 mx-auto mb-16"
            >
                {/* Integration branches */}
                {skill.integration.map((integration, integrationIndex) => {
                    const angle = (angleStep * integrationIndex - 90) * (Math.PI / 180)
                    const radius = 120
                    const x = Math.cos(angle) * radius
                    const y = Math.sin(angle) * radius

                    return (
                        <div key={integration}>

                            {/* Integration node */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: index * 0.2 + integrationIndex * 0.1 + 0.5, duration: 0.3 }}
                                className={`absolute w-20 h-20 ${colors.light} ${colors.border} border-2 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow cursor-pointer group`}
                                style={{
                                    left: `calc(50% + ${x}px - 40px)`,
                                    top: `calc(50% + ${y}px - 40px)`
                                }}
                                whileHover={{ scale: 1.1 }}
                            >
                                <div className="text-center">
                                    <FileText className={`w-4 h-4 ${colors.text} mx-auto mb-1`} />
                                    <span className={`text-xs font-medium ${colors.text} leading-tight`}>
                                        {integration}
                                    </span>
                                </div>
                            </motion.div>
                        </div>
                    )
                })}

                {/* Central skill hub */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2 + 0.8, duration: 0.5 }}
                    className={`relative z-10 w-32 h-32 ${colors.bg} rounded-full flex flex-col items-center justify-center shadow-2xl hover:shadow-3xl transition-all duration-300 cursor-pointer group border-4 border-white`}
                    whileHover={{ scale: 1.05 }}
                >
                    <div className="text-white mb-2">
                        {getSkillIcon(skill.name)}
                    </div>
                    <h3 className="text-white text-sm font-bold text-center leading-tight px-2">
                        {skill.name}
                    </h3>
                </motion.div>
            </motion.div>
        )
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                <div className="text-center">
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"
                    />
                    <p className="text-gray-600 text-lg">Loading Skills...</p>
                </div>
            </div>
        )
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gradient-to-br from-red-50 to-red-100 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-16 h-16 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Bug className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-2xl font-bold text-red-900 mb-2">Error Loading Skills</h2>
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">

            {/* Skills Grid */}
            <div className="container mx-auto px-6 pb-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 gap-12 max-w-7xl mx-auto">
                    {skills.map((skill, index) => (
                        <SkillBranch key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SkillsShowcase