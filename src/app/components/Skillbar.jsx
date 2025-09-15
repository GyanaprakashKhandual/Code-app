'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, Globe, Server, Smartphone, Palette, Zap, GitBranch } from 'lucide-react';

const SkillsScrollBar = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Icon mapping
  const getSkillIcon = (skillName) => {
    const iconMap = {
      'JavaScript': Code2,
      'Java': Code2,
      'Python': Database,
      'C': Code2,
      'C++': Code2,
      'React': Globe,
      'Node.js': Server,
      'HTML': Globe,
      'CSS': Palette,
      'MongoDB': Database,
      'MySQL': Database,
      'Git': GitBranch,
      'API': Server,
      'Frontend': Smartphone,
      'Backend': Server,
      'Full Stack': Zap
    };
    return iconMap[skillName] || Code2;
  };

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        setLoading(true);
        const response = await fetch('http://localhost:5000/api/v1/skill/web');
        
        if (!response.ok) {
          throw new Error('Failed to fetch skills');
        }
        
        const data = await response.json();
        
        if (data.Languages && Array.isArray(data.Languages)) {
          const skillNames = data.Languages.map(lang => lang.Name);
          setSkills(skillNames);
        } else {
          throw new Error('Invalid data structure');
        }
      } catch (err) {
        console.error('Error fetching skills:', err);
        setError(err.message);
        setSkills(['JavaScript', 'Java', 'Python', 'C', 'C++', 'React', 'Node.js', 'HTML', 'CSS']);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-20 bg-white">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-6 h-6 border-2 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-20 bg-white text-red-500">
        Error loading skills: {error}
      </div>
    );
  }

  const duplicatedSkills = [...skills, ...skills, ...skills];

  return (
    <div className="w-full h-20 bg-gradient-to-r from-white via-blue-50 to-white overflow-hidden relative">
      {/* Gradient fade overlays */}
      <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-white to-transparent z-10"></div>
      <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-white to-transparent z-10"></div>
      
      <motion.div
        className="flex items-center h-full"
        animate={{
          x: [`0%`, `-${(100 / 3)}%`]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        style={{
          width: `${duplicatedSkills.length * 200}px`
        }}
      >
        {duplicatedSkills.map((skill, index) => {
          const IconComponent = getSkillIcon(skill);
          
          return (
            <motion.div
              key={`${skill}-${index}`}
              className="flex items-center justify-center mx-4 px-6 py-2 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-md min-w-[180px]"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 10px 25px rgba(59, 130, 246, 0.5)"
              }}
              transition={{ type: "spring", stiffness: 300, damping: 10 }}
            >
              <IconComponent className="w-5 h-5 text-white mr-2" />
              <span className="text-white font-semibold text-sm whitespace-nowrap">
                {skill}
              </span>
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* Light blue particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-40"
            animate={{
              x: ["-10px", "100vw"],
              y: [
                Math.random() * 80,
                Math.random() * 80,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 5,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 5,
            }}
            style={{
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsScrollBar;
