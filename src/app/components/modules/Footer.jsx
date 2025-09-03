'use client';

import React, { useState } from 'react';
import {
    FaCoffee,
    FaTwitter,
    FaYoutube,
    FaGithub,
    FaFacebook,
    FaInstagram,
    FaEnvelope
} from 'react-icons/fa';

export default function ClyraFooter() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);

    const handleNewsletterSubmit = () => {
        if (email && email.includes('@')) {
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    const products = [
        'Calf', 'Caffetest', 'Curacore', 'DooDot',
        'Metronique', 'Rabbit', 'Cassiiora', 'Loventia', 'Oneiro'
    ];

    const company = ['About', 'Blog', 'Career', 'Contact'];
    const legal = ['Guide', 'Privacy Policy', 'Terms & Conditions'];

    const socialIcons = [
        { Icon: FaTwitter, href: '#', label: 'Twitter' },
        { Icon: FaYoutube, href: '#', label: 'YouTube' },
        { Icon: FaGithub, href: '#', label: 'GitHub' },
        { Icon: FaFacebook, href: '#', label: 'Facebook' },
        { Icon: FaInstagram, href: '#', label: 'Instagram' },
        { Icon: FaEnvelope, href: '#', label: 'Threads' }
    ];

    return (
        <footer className="relative bg-gray-950 text-gray-300 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <svg className="w-full h-full" viewBox="0 0 100 100" fill="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 left-10 w-20 h-20 bg-purple-600/20 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute top-1/2 right-10 w-16 h-16 bg-pink-500/15 rounded-full blur-lg animate-pulse"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center gap-3 mb-6">
                            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                                <FaCoffee className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                Clyra
                            </h2>
                        </div>
                        <p className="text-gray-400 mb-6 leading-relaxed">
                            Building next-generation applications that empower developers and enhance productivity across all platforms.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4">
                            {socialIcons.map(({ Icon, href, label }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    aria-label={label}
                                    className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 transition-all duration-300 transform hover:scale-110"
                                >
                                    <Icon className="w-5 h-5 text-gray-300 group-hover:text-white" />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-purple-400">Products</h3>
                        <ul className="columns-4 space-y-3 space-x-3">
                            {products.map((product, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block p-1"
                                    >
                                        {product}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-purple-400">Company</h3>
                        <ul className="space-y-3">
                            {company.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 text-purple-400">Legal</h3>
                        <ul className="space-y-3">
                            {legal.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href="#"
                                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="text-gray-500 text-sm">
                            © 2025 Clyra. All rights reserved.
                        </div>
                        <div className="flex items-center gap-6 text-sm">
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                Privacy
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                Terms
                            </a>
                            <a href="#" className="text-gray-500 hover:text-white transition-colors">
                                Cookies
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
