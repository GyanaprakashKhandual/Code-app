'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiUser, 
  FiBook, 
  FiAward, 
  FiFileText, 
  FiBriefcase, 
  FiFile, 
  FiMenu, 
  FiX,
  FiChevronRight,
  FiHome,
  FiCode,
  FiMessageSquare
} from 'react-icons/fi';

// Mock components for each section
const PersonalInfo = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold text-gray-800 mb-4">Personal Information</h2>
    <div className="space-y-4">
      <div className="flex items-center">
        <div className="w-24 h-24 bg-blue-100 rounded-full flex items-center justify-center">
          <FiUser className="w-12 h-12 text-blue-600" />
        </div>
        <div className="ml-6">
          <h3 className="text-xl font-semibold">John Doe</h3>
          <p className="text-gray-600">Web Developer</p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div>
          <h4 className="font-medium text-gray-700">Email</h4>
          <p className="text-gray-600">john.doe@example.com</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-700">Phone</h4>
          <p className="text-gray-600">+1 (555) 123-4567</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-700">Location</h4>
          <p className="text-gray-600">San Francisco, CA</p>
        </div>
        <div>
          <h4 className="font-medium text-gray-700">Website</h4>
          <p className="text-blue-600">johndoeportfolio.com</p>
        </div>
      </div>
    </div>
  </div>
);

const Education = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Education</h2>
    <div className="space-y-6">
      <div className="border-l-4 border-blue-500 pl-4">
        <h3 className="text-xl font-semibold">Master in Computer Science</h3>
        <p className="text-gray-600">Stanford University</p>
        <p className="text-sm text-gray-500">2018 - 2020</p>
        <p className="mt-2 text-gray-700">Specialized in Artificial Intelligence and Machine Learning. Published research on neural networks.</p>
      </div>
      <div className="border-l-4 border-green-500 pl-4">
        <h3 className="text-xl font-semibold">Bachelor of Science in Software Engineering</h3>
        <p className="text-gray-600">MIT</p>
        <p className="text-sm text-gray-500">2014 - 2018</p>
        <p className="mt-2 text-gray-700">Graduated with honors. President of Computer Science Student Association.</p>
      </div>
    </div>
  </div>
);

const Skills = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Skills</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <h3 className="text-lg font-semibold mb-3">Technical Skills</h3>
        <div className="space-y-4">
          {['JavaScript', 'React', 'Node.js', 'Python', 'CSS/HTML'].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{skill}</span>
                <span className="text-gray-600">90%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full" 
                  style={{ width: `${90 - index * 10}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-3">Professional Skills</h3>
        <div className="space-y-4">
          {['Project Management', 'Communication', 'Problem Solving', 'Team Leadership', 'Agile Methodology'].map((skill, index) => (
            <div key={index}>
              <div className="flex justify-between mb-1">
                <span className="text-gray-700">{skill}</span>
                <span className="text-gray-600">85%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-green-600 h-2 rounded-full" 
                  style={{ width: `${85 - index * 5}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const Certifications = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Certifications</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: 'AWS Certified Solutions Architect', issuer: 'Amazon Web Services', year: '2022' },
        { title: 'Google Professional Cloud Developer', issuer: 'Google Cloud', year: '2021' },
        { title: 'Certified Kubernetes Administrator', issuer: 'Cloud Native Computing Foundation', year: '2021' },
        { title: 'React Developer Certification', issuer: 'Meta', year: '2020' }
      ].map((cert, index) => (
        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <h3 className="text-lg font-semibold text-gray-800">{cert.title}</h3>
          <p className="text-gray-600">{cert.issuer}</p>
          <p className="text-sm text-gray-500 mt-2">Issued: {cert.year}</p>
        </div>
      ))}
    </div>
  </div>
);

const Experience = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Work Experience</h2>
    <div className="space-y-8">
      {[
        {
          role: 'Senior Frontend Developer',
          company: 'TechCorp Inc.',
          period: '2020 - Present',
          description: 'Lead a team of developers in building responsive web applications. Implemented CI/CD pipelines reducing deployment time by 40%.'
        },
        {
          role: 'Software Engineer',
          company: 'Innovate Solutions',
          period: '2018 - 2020',
          description: 'Developed and maintained React applications. Collaborated with UX designers to implement user-friendly interfaces.'
        },
        {
          role: 'Junior Developer',
          company: 'WebStart',
          period: '2016 - 2018',
          description: 'Built and maintained client websites. Assisted in the development of internal tools and applications.'
        }
      ].map((exp, index) => (
        <div key={index} className="border-l-4 border-purple-500 pl-4">
          <h3 className="text-xl font-semibold">{exp.role}</h3>
          <p className="text-gray-600">{exp.company}</p>
          <p className="text-sm text-gray-500">{exp.period}</p>
          <p className="mt-2 text-gray-700">{exp.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const Blogs = () => (
  <div className="p-6 bg-white rounded-lg shadow">
    <h2 className="text-2xl font-bold text-gray-800 mb-6">Latest Blogs</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        {
          title: 'Mastering React Hooks',
          excerpt: 'A deep dive into React Hooks and how to use them effectively in your projects.',
          date: 'March 15, 2023',
          category: 'React'
        },
        {
          title: 'CSS Grid vs Flexbox',
          excerpt: 'When to use CSS Grid and when to use Flexbox for layout design.',
          date: 'February 8, 2023',
          category: 'CSS'
        },
        {
          title: 'Introduction to Next.js',
          excerpt: 'Getting started with Next.js and its powerful features for server-side rendering.',
          date: 'January 22, 2023',
          category: 'Next.js'
        },
        {
          title: 'State Management in 2023',
          excerpt: 'Comparing different state management solutions for modern React applications.',
          date: 'December 5, 2022',
          category: 'React'
        }
      ].map((blog, index) => (
        <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
          <span className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
            {blog.category}
          </span>
          <h3 className="text-lg font-semibold mt-2 text-gray-800">{blog.title}</h3>
          <p className="text-gray-600 text-sm mt-2">{blog.excerpt}</p>
          <p className="text-xs text-gray-500 mt-4">{blog.date}</p>
        </div>
      ))}
    </div>
  </div>
);

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeMenu, setActiveMenu] = useState('personal');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const menuItems = [
    { id: 'personal', label: 'Personal Information', icon: FiUser },
    { id: 'education', label: 'Education', icon: FiBook },
    { id: 'skill', label: 'Skills', icon: FiAward },
    { id: 'certification', label: 'Certifications', icon: FiFileText },
    { id: 'experience', label: 'Experience', icon: FiBriefcase },
    { id: 'blogs', label: 'Blogs', icon: FiFile },
  ];

  const renderContent = () => {
    switch (activeMenu) {
      case 'personal':
        return <PersonalInfo />;
      case 'education':
        return <Education />;
      case 'skill':
        return <Skills />;
      case 'certification':
        return <Certifications />;
      case 'experience':
        return <Experience />;
      case 'blogs':
        return <Blogs />;
      default:
        return <PersonalInfo />;
    }
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      {/* Mobile menu button */}
      {isMobile && (
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-blue-600 text-white shadow-lg lg:hidden"
        >
          <FiMenu className="w-5 h-5" />
        </button>
      )}

      {/* Sidebar */}
      <motion.div
        initial={false}
        animate={{
          width: isOpen ? (isMobile ? '100%' : '280px') : '0px',
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed lg:relative h-full bg-white shadow-lg z-40 overflow-y-auto"
      >
        <div className="flex flex-col h-full w-80 lg:w-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 sticky top-0 bg-white z-10">
            <motion.h2 
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              className="text-xl font-semibold text-gray-800"
            >
              Portfolio
            </motion.h2>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors lg:hidden"
            >
              <FiX className="w-5 h-5 text-gray-600" />
            </button>
          </div>

          {/* Menu Items */}
          <nav className="flex-1 overflow-y-auto p-4">
            {menuItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => {
                  setActiveMenu(item.id);
                  if (isMobile) setIsOpen(false);
                }}
                className={`w-full flex items-center p-3 rounded-lg mb-2 transition-all duration-200 ${
                  activeMenu === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.98 }}
              >
                <item.icon className="w-5 h-5 mr-3 flex-shrink-0" />
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  className="font-medium text-left"
                >
                  {item.label}
                </motion.span>
                {activeMenu === item.id && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="ml-auto"
                  >
                    <FiChevronRight className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.button>
            ))}
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 sticky bottom-0 bg-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isOpen ? 1 : 0 }}
              className="text-center text-gray-500 text-sm"
            >
              © 2023 Portfolio
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Content Area */}
        <main className="flex-1 overflow-auto p-4 lg:p-6">
          <div className="max-w-4xl mx-auto">
            {renderContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sidebar;