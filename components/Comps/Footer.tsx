"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import Link from 'next/link';

function Footer() {
    const socialLinks = [
        {
            icon: FaGithub,
            url: "https://github.com/j-ami-l",
            label: "GitHub",
            color: "#FFFFFF"
        },
        {
            icon: FaLinkedin,
            url: "https://www.linkedin.com/in/md-hasan-jamil-293506308",
            label: "LinkedIn",
            color: "#0A66C2"
        },
        {
            icon: FaXTwitter,
            url: "#",
            label: "X (Twitter)",
            color: "#FFFFFF"
        }
    ];

    return (
        <footer className='w-full '>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12'>
                <div className='flex flex-col items-center space-y-6'>
                    {/* Name */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className='text-2xl sm:text-3xl font-bold text-white'
                    >
                        <span className='bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent'>
                            Md Hasan Jamil
                        </span>
                    </motion.h3>

                    {/* Social Links */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className='flex items-center gap-6'
                    >
                        {socialLinks.map((social, index) => (
                            <motion.div
                                key={index}
                                whileHover={{ scale: 1.2, rotate: 5 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                <Link
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className='group'
                                >
                                    <div className='w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 hover:border-indigo-500/50 flex items-center justify-center transition-all duration-300 group-hover:bg-gray-700/50'>
                                        <social.icon 
                                            className='text-xl text-gray-400 group-hover:text-white transition-colors duration-300'
                                        />
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Divider */}
                    <div className='w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent' />

                    {/* Copyright */}
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className='text-gray-400 text-sm text-center'
                    >
                        © 2025 Md Hasan Jamil. All rights reserved.
                    </motion.p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;