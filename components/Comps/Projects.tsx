"use client"
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
    {
        id: 1,
        title: "Doctor Appointment System",
        description: "A comprehensive healthcare platform for booking doctor appointments online. Features include real-time availability, patient management, appointment scheduling, and secure payment integration.",
        image: "/docweb.png",
        link: "https://e-doctor-sheva.netlify.app",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "English Learning Platform",
        description: "An interactive English learning web application with grammar lessons, vocabulary building, interactive quizzes, and progress tracking. Responsive design ensures learning on any device.",
        image: "/engweb.png",
        link: "https://english-janala-web11-2729.surge.sh",
        tech: ["Next.js", "React", "Tailwind CSS"]
    },
    {
        id: 3,
        title: "Food Share Application",
        description: "ShareBite is a community-driven web platform designed to combat food waste by connecting those with surplus food to those in need. This full-stack application provides a user-friendly interface for managing food donations and requests, fostering a more sustainable and compassionate community.",
        image: "/foodweb.png",
        link: "https://sharemeal.vercel.app",
        tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        id: 4,
        title: "Garden Management System",
        description: "GardenBOOK is a vibrant gardening community and resource hub for plant lovers. This full-stack web application allows users to share garden tips, connect with other enthusiasts, explore gardeners, and more   all in a beautifully responsive and user-friendly platform.",
        image: "/gardenbook.png",
        link: "https://thegardenbook.netlify.app",
        tech: ["React", "Firebase", "Tailwind CSS"]
    },
    {
        id: 5,
        title: "Ghor - Real Estate Platform",
        description: "A full-stack Building Management System (BMS) designed for managing a single building with role-based dashboards for users, members, and admins. The system provides apartment listings, agreement requests, payments with coupons, and admin-controlled announcements, all wrapped in a modern, responsive design.",
        image: "/ghor.png",
        link: "https://apnr-ghor.vercel.app",
        tech: ["Next.js", "React", "MongoDB", "Tailwind CSS"]
    },
];

function ProjectCard({ project }: { project: typeof projects[0], index: number }) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.8, 1, 1, 0.8]);

    return (
        <motion.div
            ref={ref}
            style={{ opacity, scale }}
            className='sticky top-20 mb-20'
        >
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 bg-gray-800 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-12'>
                {/* Image Section */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                    className='relative group order-2 lg:order-1'
                >
                    <div className='relative h-[300px] lg:h-[400px] rounded-2xl overflow-hidden'>
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className='object-cover transition-transform duration-500 group-hover:scale-110'
                        />
                        <div className='absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300' />
                        
                        {/* Overlay Buttons */}
                        <div className='absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                            <Link href={project.link} target="_blank">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white rounded-lg flex items-center gap-2 shadow-lg'
                                >
                                    <FaExternalLinkAlt /> Live Demo
                                </motion.button>
                            </Link>
                        </div>
                    </div>
                </motion.div>

                {/* Content Section */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className='flex flex-col justify-center space-y-6 order-1 lg:order-2'
                >
                    <div className='flex items-center gap-3'>
                        <span className='text-5xl font-bold text-gray-700'>0{project.id}</span>
                        <div className='h-1 flex-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full' />
                    </div>

                    <h3 className='text-3xl lg:text-4xl font-bold text-white'>
                        {project.title}
                    </h3>

                    <p className='text-gray-300 text-lg leading-relaxed'>
                        {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className='flex flex-wrap gap-2'>
                        {project.tech.map((tech, i) => (
                            <span
                                key={i}
                                className='px-4 py-2 bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 rounded-full text-sm font-medium'
                            >
                                {tech}
                            </span>
                        ))}
                    </div>

                    {/* Action Buttons */}
                    <div className='flex gap-4 pt-4'>
                        <Link href={project.link} target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg flex items-center gap-2'
                            >
                                <FaExternalLinkAlt /> View Project
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>
            </div>
        </motion.div>
    );
}

function Projects() {
    return (
        <div className='w-full py-20 bg-black'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-20'
                >
                    <h2 className='text-5xl lg:text-6xl font-bold text-white mb-4'>
                        Featured{' '}
                        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            Projects
                        </span>
                    </h2>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        Scroll to explore my portfolio of full-stack applications
                    </p>
                </motion.div>

                {/* Projects */}
                <div className='space-y-8'>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Projects;