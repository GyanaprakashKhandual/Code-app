'use client';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  Code,
  Bug,
  Shield,
  Gamepad,
  Cpu,
  Brain,
  Network,
  Cloud,
  Terminal,
  BarChart3,
} from 'lucide-react';

import QAEngineer from '../modules/skills/qaSkills';
import WebSkils from '../modules/skills/webskills';
import DASkills from '../modules/skills/daSkills';
import CSSkills from '../modules/skills/csSkills';

const ProfessionalSidebar = () => {
  const [mounted, setMounted] = useState(false);
  const [selectedSkillText, setSelectedSkillText] = useState(null);

  useEffect(() => {
    setMounted(true);
    const savedSkill = localStorage.getItem('selectedSkill');
    if (savedSkill) {
      setSelectedSkillText(savedSkill);
    }
  }, []);

  const skillItems = [
    { icon: Code, text: 'Web Dev', color: 'text-blue-600', bgGradient: 'bg-gradient-to-r from-blue-50 to-sky-100', component: <WebSkils /> },
    { icon: Bug, text: 'QA', color: 'text-emerald-600', bgGradient: 'bg-gradient-to-r from-emerald-50 to-green-100', component: <QAEngineer /> },
    { icon: BarChart3, text: 'Data Analyst', color: 'text-purple-600', bgGradient: 'bg-gradient-to-r from-purple-50 to-violet-100', component: <DASkills /> },
    { icon: Shield, text: 'Hacker', color: 'text-red-600', bgGradient: 'bg-gradient-to-r from-red-50 to-rose-100', component: <CSSkills /> },
    { icon: Gamepad, text: 'App Dev', color: 'text-yellow-600', bgGradient: 'bg-gradient-to-r from-yellow-50 to-amber-100' },
    { icon: Cpu, text: 'Computer Engineer', color: 'text-gray-600', bgGradient: 'bg-gradient-to-r from-gray-50 to-slate-100' },
    { icon: Brain, text: 'Machine Learning', color: 'text-pink-600', bgGradient: 'bg-gradient-to-r from-pink-50 to-rose-100' },
    { icon: Network, text: 'Deep Learning', color: 'text-indigo-600', bgGradient: 'bg-gradient-to-r from-indigo-50 to-blue-100' },
    { icon: Cloud, text: 'Cloud Computing', color: 'text-sky-600', bgGradient: 'bg-gradient-to-r from-sky-50 to-cyan-100' },
    { icon: Terminal, text: 'DevOps', color: 'text-orange-600', bgGradient: 'bg-gradient-to-r from-orange-50 to-amber-100' },
  ];

  const cardItems = [
    { title: "Web Development", desc: "Frontend, Backend & Fullstack", gradient: "from-blue-100 to-sky-100", border: "border-blue-200", icon: Code, component: <WebSkils /> },
    { title: "Quality Assurance", desc: "Manual & Automated Testing", gradient: "from-emerald-100 to-green-100", border: "border-emerald-200", icon: Bug, component: <QAEngineer /> },
    { title: "Data Science", desc: "Analysis, Visualization & ML", gradient: "from-purple-100 to-violet-100", border: "border-purple-200", icon: BarChart3, component: <DASkills /> },
    { title: "Cyber Security", desc: "Ethical Hacking & Defense", gradient: "from-red-100 to-rose-100", border: "border-red-200", icon: Shield, component: <CSSkills /> },
    { title: "Game Development", desc: "Engines & Graphics Programming", gradient: "from-yellow-100 to-amber-100", border: "border-yellow-200", icon: Gamepad },
    { title: "Cloud Engineering", desc: "AWS, Azure & GCP Solutions", gradient: "from-sky-100 to-cyan-100", border: "border-sky-200", icon: Cloud },
  ];

  const handleSkillClick = (skill) => {
    const skillText = skill.text || skill.title;
    setSelectedSkillText(skillText);
    localStorage.setItem('selectedSkill', skillText);
  };

  if (!mounted) return null;

  const selectedSkill = [...skillItems, ...cardItems].find(
    item => item.text === selectedSkillText || item.title === selectedSkillText
  );

  return (
    <div className="flex mt-14 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-screen select-none">
      <div className='sticky top-14 self-start'>
        <div
          className="flex flex-col bg-gradient-to-b from-white/95 via-cyan-50/90 to-indigo-50/95 border-r border-cyan-200/50 w-20"
          style={{ height: 'calc(100vh - 56px)' }}
        >
          {/* Header */}
          <div className="p-4 border-b border-cyan-200/50">
            <div className="flex items-center justify-center">
              <button className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white">
                <Menu size={16} />
              </button>
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <nav className="space-y-2 px-3">
              {skillItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    onClick={() => handleSkillClick(item)}
                    className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200 relative"
                  >
                    <div className="flex items-center justify-center p-3">
                      <div className={`${item.color} group-hover:scale-105 transition-transform duration-200`}>
                        <Icon size={20} strokeWidth={1.5} />
                        {/* Tooltip */}
                        <div className="absolute bottom-full mb-2 px-2 py-1 text-xs rounded-md bg-gray-800 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-50 shadow-lg left-1/2 transform -translate-x-1/2">
                          {item.text}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {selectedSkill ? (
          selectedSkill.component
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/90 via-cyan-50/80 to-indigo-50/90 rounded-xl shadow-lg p-8 border border-cyan-200/30">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Skills Explorer
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Explore various technical roles and their required skill sets. Click on any role to discover learning paths,
                recommended resources, and career opportunities in each specialization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      onClick={() => handleSkillClick(item)}
                      className={`bg-gradient-to-br ${item.gradient} p-6 rounded-lg border ${item.border} hover:shadow-md transition-shadow duration-200 cursor-pointer group`}
                    >
                      <div className="flex items-center mb-3">
                        <Icon className="text-cyan-600 mr-3 group-hover:scale-105 transition-transform duration-200" size={24} />
                        <h3 className="font-semibold text-slate-700 text-lg">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSidebar;