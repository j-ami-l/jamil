
"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiHome, HiUser, HiLightningBolt, HiBriefcase, HiMail } from "react-icons/hi";
import React from 'react';

function Navbar() {
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { name: "Home", id: "home", icon: HiHome },
        { name: "About", id: "about", icon: HiUser },
        { name: "Skills", id: "skills", icon: HiLightningBolt },
        { name: "Projects", id: "projects", icon: HiBriefcase },
        { name: "Contact", id: "contact", icon: HiMail },
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navLinks.map(link => link.id);
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveSection(section);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;
            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
        }
    };

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="fixed bottom-6 inset-x-0 max-w-xl mx-auto z-50 px-4"
        >
            <nav className="relative backdrop-blur-lg bg-gray-900/60 border border-gray-700/50 rounded-full px-6 py-3 shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-purple-500/5 to-pink-500/5 rounded-full" />

                <div className="relative flex items-center justify-center gap-2">
                    {navLinks.map((link) => (
                        <motion.button
                            key={link.id}
                            onClick={() => scrollToSection(link.id)}
                            whileHover={{ scale: 1.1, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            className={`group relative p-3 rounded-full transition-all ${activeSection === link.id ? "text-white" : "text-gray-400 hover:text-white"
                                }`}
                            title={link.name}
                        >
                            {activeSection === link.id && (
                                <motion.div
                                    layoutId="bubble"
                                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                />
                            )}
                            <link.icon className="relative z-10 text-xl" />

                            {/* Tooltip */}
                            <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-gray-900 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                                {link.name}
                            </span>
                        </motion.button>
                    ))}
                </div>
            </nav>
        </motion.div>
    );
}

export default Navbar;
