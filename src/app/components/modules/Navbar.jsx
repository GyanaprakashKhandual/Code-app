'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCoffee, FaGithub, FaTimes, FaSearch, FaBook, FaSignInAlt, FaUserAlt } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

const Navbar = () => {
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const [isTestProjectOpen, setIsTestProjectOpen] = useState(false);
    const [isExtensionOpen, setIsExtensionOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [productsSearch, setProductsSearch] = useState('');
    const [testProjectSearch, setTestProjectSearch] = useState('');
    const [extensionSearch, setExtensionSearch] = useState('');

    const productsRef = useRef(null);
    const testProjectRef = useRef(null);
    const extensionRef = useRef(null);

    const router = useRouter();

    // Sample dropdown data
    const productsItems = [
        { id: 1, name: 'Curacore', href: '/curacore' },
        { id: 2, name: 'Caffetest', href: '/caffetest' },
        { id: 3, name: 'Loventia', href: '/loventia' },
        { id: 5, name: 'Rabbit', href: '/rabbit' },
        { id: 6, name: 'Metronique', href: '/metronique' },
        { id: 7, name: 'Arcanemart', href: '/arcanemart' },
        { id: 8, name: 'Veloria', href: '/veloria' },
        { id: 9, name: 'Calf', href: '/calf' },
        { id: 10, name: 'Oneiro', href: '/oneiro' },
        { id: 11, name: 'DooDot', href: '/doodot' },
    ];

    const testProjectItems = [
        { id: 1, name: 'Alpha Test', href: '#' },
        { id: 2, name: 'Beta Suite', href: '#' },
        { id: 3, name: 'Gamma Tools', href: '#' },
        { id: 4, name: 'Delta Analytics', href: '#' },
    ];

    const extensionProjectItems = [
        { id: 1, name: 'Caffetest-Tracker', href: '#' }
    ]

    // Close dropdowns when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (productsRef.current && !productsRef.current.contains(event.target)) {
                setIsProductsOpen(false);
            }
            if (testProjectRef.current && !testProjectRef.current.contains(event.target)) {
                setIsTestProjectOpen(false);
            }
            if (extensionRef.current && !extensionRef.current.contains(event.target)) {
                setIsExtensionOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    // Filter items based on search
    const filteredProducts = productsItems.filter(item =>
        item.name.toLowerCase().includes(productsSearch.toLowerCase())
    );

    const filteredTestProjects = testProjectItems.filter(item =>
        item.name.toLowerCase().includes(testProjectSearch.toLowerCase())
    );

    const filteredExtension = extensionProjectItems.filter(item =>
        item.name.toLowerCase().includes(extensionSearch.toLowerCase())
    );

    return (
        <nav className="bg-white text-gray-800 sticky top-0 z-50 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    {/* Left section: Logo and main nav items */}
                    <div className="flex items-center">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <FaCoffee className="h-8 w-8 text-blue-900" />
                            <span className="ml-4 text-xl font-bold text-blue-700">Clyra</span>
                        </div>

                        {/* Desktop navigation */}
                        <div className="hidden md:ml-6 md:flex md:items-center md:space-x-1">
                            <motion.a
                                onClick={() => router.push('/about')}
                                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}

                            >
                                About
                            </motion.a>
                            <motion.a
                                href="#"
                                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Projects
                            </motion.a>

                            {/* Products dropdown */}
                            <div className="relative" ref={productsRef}>
                                <motion.button
                                    onClick={() => {
                                        setIsProductsOpen(!isProductsOpen);
                                        setIsTestProjectOpen(false);
                                    }}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out flex items-center transform hover:scale-105"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Products
                                    <div className='pl-1 pr-1 mt-1'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                            <path d="M4 6l4 4 4-4z" fill="currentColor" />
                                        </svg>
                                    </div>

                                </motion.button>

                                <AnimatePresence>
                                    {isProductsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="origin-top-left absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white border border-gray-200 focus:outline-none"
                                        >
                                            <div className="p-3">
                                                {/* Search input */}
                                                <div className="relative mt-1 rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaSearch className="h-3 w-3 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="block w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="Search products..."
                                                        value={productsSearch}
                                                        onChange={(e) => setProductsSearch(e.target.value)}
                                                    />
                                                </div>

                                                {/* Dropdown items */}
                                                <div className="mt-2 max-h-60 overflow-auto">
                                                    {filteredProducts.length > 0 ? (
                                                        filteredProducts.map((item) => (
                                                            <motion.a
                                                                key={item.id}
                                                                className="cursor-pointer block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200"
                                                                onClick={() => {
                                                                    setIsProductsOpen(false);
                                                                    router.push(item.href);
                                                                }}
                                                                whileHover={{ x: 4 }}
                                                                whileTap={{ scale: 0.98 }}
                                                            >
                                                                {item.name}
                                                            </motion.a>
                                                        ))
                                                    ) : (
                                                        <div className="px-4 py-2 text-sm text-gray-400">No products found</div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Test Project dropdown */}
                            <div className="relative" ref={testProjectRef}>
                                <motion.button
                                    onClick={() => {
                                        setIsTestProjectOpen(!isTestProjectOpen);
                                        setIsProductsOpen(false);
                                    }}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out flex items-center transform hover:scale-105"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Test Project
                                    <div className='pl-1 pr-1 mt-1'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                            <path d="M4 6l4 4 4-4z" fill="currentColor" />
                                        </svg>
                                    </div>
                                </motion.button>

                                <AnimatePresence>
                                    {isTestProjectOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="origin-top-left absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white border border-gray-200 focus:outline-none"
                                        >
                                            <div className="p-3">
                                                {/* Search input */}
                                                <div className="relative mt-1 rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaSearch className="h-3 w-3 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="block w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="Search test projects..."
                                                        value={testProjectSearch}
                                                        onChange={(e) => setTestProjectSearch(e.target.value)}
                                                    />
                                                </div>

                                                {/* Dropdown items */}
                                                <div className="mt-2 max-h-60 overflow-auto">
                                                    {filteredTestProjects.length > 0 ? (
                                                        filteredTestProjects.map((item) => (
                                                            <motion.a
                                                                key={item.id}
                                                                href={item.href}
                                                                className="block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200"
                                                                onClick={() => setIsTestProjectOpen(false)}
                                                                whileHover={{ x: 4 }}
                                                                whileTap={{ scale: 0.98 }}
                                                            >
                                                                {item.name}
                                                            </motion.a>
                                                        ))
                                                    ) : (
                                                        <div className="px-4 py-2 text-sm text-gray-400">No test projects found</div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                            {/* Extension Dropdown*/}
                            <div className="relative" ref={extensionRef}>
                                <motion.button
                                    onClick={() => {
                                        setIsExtensionOpen(!isExtensionOpen);
                                        setIsProductsOpen(false);
                                        setIsTestProjectOpen(false);
                                    }}
                                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out flex items-center transform hover:scale-105"
                                    whileHover={{ y: -2 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Extension
                                    <div className='pl-1 pr-1 mt-1'>
                                        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                                            <path d="M4 6l4 4 4-4z" fill="currentColor" />
                                        </svg>
                                    </div>

                                </motion.button>

                                <AnimatePresence>
                                    {isExtensionOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                            animate={{ opacity: 1, y: 0, scale: 1 }}
                                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                            transition={{ duration: 0.2 }}
                                            className="origin-top-left absolute left-0 mt-2 w-56 rounded-xl shadow-xl bg-white border border-gray-200 focus:outline-none"
                                        >
                                            <div className="p-3">
                                                {/* Search input */}
                                                <div className="relative mt-1 rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaSearch className="h-3 w-3 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="block w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="Search extensions..."
                                                        value={extensionSearch}
                                                        onChange={(e) => setExtensionSearch(e.target.value)}
                                                    />
                                                </div>

                                                {/* Dropdown items */}
                                                <div className="mt-2 max-h-60 overflow-auto">
                                                    {filteredExtension.length > 0 ? (
                                                        filteredExtension.map((item) => (
                                                            <motion.a
                                                                key={item.id}
                                                                className="cursor-pointer block px-4 py-3 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200"
                                                                onClick={() => {
                                                                    setIsExtensionOpen(false);
                                                                    router.push(item.href);
                                                                }}
                                                                whileHover={{ x: 4 }}
                                                                whileTap={{ scale: 0.98 }}
                                                            >
                                                                {item.name}
                                                            </motion.a>
                                                        ))
                                                    ) : (
                                                        <div className="px-4 py-2 text-sm text-gray-400">No Extension found</div>
                                                    )}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <motion.a
                                href="#"
                                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105 flex items-center"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Guide
                            </motion.a>
                            <motion.a
                                href="#"
                                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Blog
                            </motion.a>
                            <motion.a
                                href="#"
                                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Work
                            </motion.a>
                            <motion.a
                                href="#"
                                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-300 ease-in-out transform hover:scale-105"
                                whileHover={{ y: -2 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Contact
                            </motion.a>
                        </div>
                    </div>

                    {/* Right section: Sign In button */}
                    <div className="hidden md:flex md:items-center">
                        <motion.button
                            className="bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg flex items-center"
                            whileHover={{ y: -2 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FaSignInAlt className="h-4 w-4 mr-2" />
                            Sign In
                        </motion.button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <motion.button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 hover:text-blue-700 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-200"
                            whileTap={{ scale: 0.95 }}
                        >
                            {isMobileMenuOpen ? (
                                <FaTimes className="block h-6 w-6" />
                            ) : (
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            )}
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-gray-200"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <motion.a
                                href="#"
                                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                                whileTap={{ scale: 0.98 }}
                            >
                                About
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                                whileTap={{ scale: 0.98 }}
                            >
                                Projects
                            </motion.a>

                            {/* Mobile Products dropdown */}
                            <div>
                                <motion.button
                                    onClick={() => setIsProductsOpen(!isProductsOpen)}
                                    className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition-all duration-200"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Products</span>
                                    <motion.svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        animate={{ rotate: isProductsOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isProductsOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                    </motion.svg>
                                </motion.button>

                                <AnimatePresence>
                                    {isProductsOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="pl-4"
                                        >
                                            <div className="p-2">
                                                <div className="relative mt-1 rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaSearch className="h-3 w-3 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="block w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="Search products..."
                                                        value={productsSearch}
                                                        onChange={(e) => setProductsSearch(e.target.value)}
                                                    />
                                                </div>

                                                <div className="mt-2 space-y-1">
                                                    {filteredProducts.map((item) => (
                                                        <motion.a
                                                            key={item.id}
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200"
                                                            onClick={() => {
                                                                setIsProductsOpen(false);
                                                                setIsMobileMenuOpen(false);
                                                            }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            {item.name}
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Mobile Test Project dropdown */}
                            <div>
                                <motion.button
                                    onClick={() => setIsTestProjectOpen(!isTestProjectOpen)}
                                    className="w-full text-left px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 flex justify-between items-center transition-all duration-200"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <span>Test Project</span>
                                    <motion.svg
                                        className="h-4 w-4"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        animate={{ rotate: isTestProjectOpen ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isTestProjectOpen ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                                    </motion.svg>
                                </motion.button>

                                <AnimatePresence>
                                    {isTestProjectOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0 }}
                                            animate={{ opacity: 1, height: 'auto' }}
                                            exit={{ opacity: 0, height: 0 }}
                                            className="pl-4"
                                        >
                                            <div className="p-2">
                                                <div className="relative mt-1 rounded-md shadow-sm">
                                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                        <FaSearch className="h-3 w-3 text-gray-400" />
                                                    </div>
                                                    <input
                                                        type="text"
                                                        className="block w-full pl-8 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                                                        placeholder="Search test projects..."
                                                        value={testProjectSearch}
                                                        onChange={(e) => setTestProjectSearch(e.target.value)}
                                                    />
                                                </div>

                                                <div className="mt-2 space-y-1">
                                                    {filteredTestProjects.map((item) => (
                                                        <motion.a
                                                            key={item.id}
                                                            href={item.href}
                                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-green-50 hover:text-green-700 rounded-lg transition-all duration-200"
                                                            onClick={() => {
                                                                setIsTestProjectOpen(false);
                                                                setIsMobileMenuOpen(false);
                                                            }}
                                                            whileTap={{ scale: 0.98 }}
                                                        >
                                                            {item.name}
                                                        </motion.a>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <motion.a
                                href="#"
                                className="flex items-center px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                                whileTap={{ scale: 0.98 }}
                            >
                                <FaBook className="h-4 w-4 mr-2" />
                                Guide
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                                whileTap={{ scale: 0.98 }}
                            >
                                Blog
                            </motion.a>
                            <motion.a
                                href="#"
                                className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:text-blue-700 hover:bg-blue-50 transition-all duration-200"
                                whileTap={{ scale: 0.98 }}
                            >
                                Contact
                            </motion.a>

                            {/* Mobile Sign In button */}
                            <div className="pt-4 pb-2">
                                <motion.button
                                    className="w-full bg-gradient-to-r from-green-500 to-blue-600 hover:from-green-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg text-base font-medium transition-all duration-300 ease-in-out shadow-md hover:shadow-lg flex items-center justify-center"
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FaSignInAlt className="h-4 w-4 mr-2" />
                                    Sign In
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;