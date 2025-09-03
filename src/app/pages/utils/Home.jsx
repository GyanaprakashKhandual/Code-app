'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Code,
    TestTube,
    Settings,
    Calendar,
    Database,
    Activity,
    ShoppingCart,
    MessageCircle,
    GraduationCap,
    Film,
    ChevronRight,
    Star,
    Users,
    Zap,
    Shield,
    ArrowRight,
    Menu,
    X
} from 'lucide-react';

const LyraLandingPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const products = [
        {
            name: "Calf",
            description: "Integrate code editor with next-level features, everything in one application",
            icon: Code,
            color: "from-blue-400 to-blue-600"
        },
        {
            name: "Caffetest",
            description: "Integrated with Visual Studio Code for enhanced testing workflows",
            icon: TestTube,
            color: "from-indigo-400 to-indigo-600"
        },
        {
            name: "Curacore",
            description: "Perfect for manual and small projects with streamlined processes",
            icon: Settings,
            color: "from-purple-400 to-purple-600"
        },
        {
            name: "DooDot",
            description: "Personal calendar application for efficient time management",
            icon: Calendar,
            color: "from-cyan-400 to-cyan-600"
        },
        {
            name: "Metronique",
            description: "ZOHO Lite - Comprehensive business management solution",
            icon: Database,
            color: "from-teal-400 to-teal-600"
        },
        {
            name: "Rabbit",
            description: "K6 result tracker for performance monitoring and analysis",
            icon: Activity,
            color: "from-green-400 to-green-600"
        },
        {
            name: "Cassiiora",
            description: "Full-featured e-commerce web application platform",
            icon: ShoppingCart,
            color: "from-orange-400 to-orange-600"
        },
        {
            name: "Veloria",
            description: "Real-time chat and video call application for seamless communication",
            icon: MessageCircle,
            color: "from-pink-400 to-pink-600"
        },
        {
            name: "Loventia",
            description: "Platform where users can teach and learn by swapping their skills",
            icon: GraduationCap,
            color: "from-violet-400 to-violet-600"
        },
        {
            name: "Oneiro",
            description: "Revolutionary application that can turn dreams into movies",
            icon: Film,
            color: "from-rose-400 to-rose-600"
        }
    ];

    const developmentServices = [
        {
            name: "Full Stack Web Applications",
            description: "Complete web solutions built with modern frameworks and best practices for optimal performance.",
            icon: Code,
            color: "from-emerald-400 to-emerald-600"
        },
        {
            name: "MERN Stack Application",
            description: "End-to-end development covering frontend, backend, and database architecture.",
            icon: Database,
            color: "from-blue-400 to-blue-600"
        },
        {
            name: "Mobile Application",
            description: "Robust RESTful and GraphQL APIs designed for scalability and security.",
            icon: Settings,
            color: "from-purple-400 to-purple-600"
        },
        {
            name: "Cyber Security",
            description: "Cloud-native SaaS solutions with multi-tenancy and subscription management.",
            icon: Shield,
            color: "from-cyan-400 to-cyan-600"
        }
    ];

    const testingServices = [
        {
            name: "Security Testing",
            description: "Comprehensive test automation frameworks that reduce testing time by up to 70%.",
            icon: Zap,
            color: "from-yellow-400 to-orange-500"
        },
        {
            name: "Performance Testing",
            description: "Load testing and performance optimization to ensure your applications scale efficiently.",
            icon: Activity,
            color: "from-red-400 to-red-600"
        },
        {
            name: "API Testing",
            description: "Cross-platform mobile testing for iOS and Android applications with real device testing.",
            icon: TestTube,
            color: "from-pink-400 to-pink-600"
        },
        {
            name: "Functional Testing",
            description: "End-to-end functional testing ensuring your applications work as intended across all scenarios.",
            icon: Users,
            color: "from-indigo-400 to-indigo-600"
        }
    ];

    const extensions = [
        {
            name: "Caffetest Tracker",
            description: "Integrated VS Code extension for seamless test tracking and reporting with OpenAI assistance.",
            icon: TestTube,
            color: "from-violet-400 to-violet-600"
        },
        {
            name: "Rabbit Tracker",
            description: "K6 performance testing results tracker with detailed analytics and visual reporting.",
            icon: Activity,
            color: "from-green-400 to-green-600"
        },
        {
            name: "Selenium Integration",
            description: "Enhanced Selenium testing capabilities with intelligent element detection and healing.",
            icon: Settings,
            color: "from-teal-400 to-teal-600"
        },
        {
            name: "Cucumber Integration",
            description: "BDD testing framework integration with natural language test scenarios and reporting.",
            icon: GraduationCap,
            color: "from-orange-400 to-orange-600"
        },
        {
            name: "Calf Extension",
            description: "All-in-one code editor enhancement with AI-powered suggestions and workflow automation.",
            icon: Code,
            color: "from-blue-400 to-blue-600"
        }
    ];

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CTO, TechStart",
            content: "Lyra's automation testing solutions reduced our testing time by 70%. Their tools are game-changing!",
            rating: 5
        },
        {
            name: "Michael Chen",
            role: "Lead Developer, InnovateCorp",
            content: "The Calf code editor integration has transformed our development workflow. Absolutely phenomenal!",
            rating: 5
        },
        {
            name: "Emily Rodriguez",
            role: "Project Manager, DevSolutions",
            content: "Lyra's full-stack applications are robust and scalable. They've exceeded our expectations every time.",
            rating: 5
        }
    ];

    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 overflow-x-hidden">


            {/* Hero Section */}
            <section className="pt-12 pb-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent leading-tight">
                            Transform Your
                            <br />
                            Development Journey
                        </h1>
                        <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                            Clyra empowers your team with cutting-edge SaaS solutions, automation tools, and next-generation development platforms that reduce testing time and streamline workflows.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-blue-800 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center justify-center gap-2"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Explore Products <ArrowRight size={20} />
                            </motion.button>
                            <motion.button
                                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Watch Demo
                            </motion.button>
                        </div>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {[
                            { number: "10+", label: "Products" },
                            { number: "500+", label: "Clients" },
                            { number: "70%", label: "Time Saved" },
                            { number: "24/7", label: "Support" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                className="text-center"
                                variants={fadeInUp}
                            >
                                <div className="text-3xl md:text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Products Section */}
            <section id="products" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            My Product Suite
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover my comprehensive collection of innovative tools designed to revolutionize your development workflow and boost productivity.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {products.map((product, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 group hover:border-blue-300"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                                    <product.icon className="w-8 h-8 text-white" />
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-gray-800">{product.name}</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
                                <button className="text-blue-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300">
                                    Learn More <ChevronRight size={18} />
                                </button>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            My Services
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            From automation testing to full-stack development, I provide comprehensive SaaS solutions tailored to your business needs.
                        </p>
                    </motion.div>

                    {/* Development Services */}
                    <motion.div className="mb-20" {...fadeInUp}>
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Development Services</h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                        >
                            {developmentServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-emerald-100 group hover:border-emerald-300"
                                    variants={fadeInUp}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-gray-800">{service.name}</h4>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                                    <button className="text-emerald-600 font-semibold text-sm flex items-center gap-2 hover:gap-4 transition-all duration-300">
                                        Learn More <ChevronRight size={16} />
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Testing Services */}
                    <motion.div className="mb-20" {...fadeInUp}>
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">Testing Services</h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                        >
                            {testingServices.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200 group hover:border-orange-300 hover:from-orange-50 hover:to-red-50"
                                    variants={fadeInUp}
                                    whileHover={{ y: -8 }}
                                >
                                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <service.icon className="w-7 h-7 text-white" />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 text-gray-800">{service.name}</h4>
                                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                                    <button className="text-orange-600 font-semibold text-sm flex items-center gap-2 hover:gap-4 transition-all duration-300">
                                        Learn More <ChevronRight size={16} />
                                    </button>
                                </motion.div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* VS Code Extensions */}
                    <motion.div {...fadeInUp}>
                        <h3 className="text-3xl font-bold text-gray-800 mb-8 text-center">VS Code Extensions</h3>
                        <motion.div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                            variants={staggerContainer}
                            initial="initial"
                            animate="animate"
                        >
                            {extensions.map((extension, index) => (
                                <motion.div
                                    key={index}
                                    className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent group hover:border-purple-200 relative overflow-hidden"
                                    variants={fadeInUp}
                                    whileHover={{ y: -10, scale: 1.02 }}
                                >
                                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full -mr-12 -mt-12"></div>
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${extension.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg relative z-10`}>
                                        <extension.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <h4 className="text-xl font-bold mb-4 text-gray-800 relative z-10">{extension.name}</h4>
                                    <p className="text-gray-600 mb-6 leading-relaxed relative z-10">{extension.description}</p>
                                    <div className="flex items-center justify-between relative z-10">
                                        <button className="text-purple-600 font-semibold flex items-center gap-2 hover:gap-4 transition-all duration-300">
                                            Learn More <ChevronRight size={18} />
                                        </button>
                                        <div className="flex items-center gap-2 text-sm text-purple-600">
                                            <Code size={16} />
                                            <span>VS Code</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        {/* Extension Features Highlight */}
                        <motion.div
                            className="mt-12 p-8 bg-gradient-to-r from-purple-600 to-indigo-700 rounded-3xl text-white"
                            whileHover={{ scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                        >
                            <div className="text-center mb-8">
                                <h4 className="text-2xl font-bold mb-4">Extension Key Features</h4>
                                <p className="text-purple-100">Enhance your development workflow with our powerful VS Code extensions</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <h5 className="font-semibold mb-2">OpenAI Integration</h5>
                                    <p className="text-sm text-purple-100">Intelligent code suggestions and automated documentation</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Shield className="w-6 h-6" />
                                    </div>
                                    <h5 className="font-semibold mb-2">Advanced Testing</h5>
                                    <p className="text-sm text-purple-100">Comprehensive automation testing capabilities</p>
                                </div>
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-3">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <h5 className="font-semibold mb-2">Team Collaboration</h5>
                                    <p className="text-sm text-purple-100">Seamless collaboration tools and shared workflows</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        {...fadeInUp}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
                            What My Clients Say
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Don't just take our word for it. See what industry leaders are saying about Clyra's transformative solutions.
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-3 gap-8"
                        variants={staggerContainer}
                        initial="initial"
                        animate="animate"
                    >
                        {testimonials.map((testimonial, index) => (
                            <motion.div
                                key={index}
                                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100"
                                variants={fadeInUp}
                                whileHover={{ y: -5 }}
                            >
                                <div className="flex items-center gap-1 mb-4">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-gray-600 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                                <div>
                                    <div className="font-semibold text-gray-800">{testimonial.name}</div>
                                    <div className="text-sm text-gray-500">{testimonial.role}</div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default LyraLandingPage;