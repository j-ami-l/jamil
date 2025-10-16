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
        link: "https://doctor-appointment-system.surge.sh/",
        github: "https://github.com/jamil1001/doctor-appointment",
        tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"]
    },
    {
        id: 2,
        title: "English Learning Platform",
        description: "An interactive English learning web application with grammar lessons, vocabulary building, interactive quizzes, and progress tracking. Responsive design ensures learning on any device.",
        image: "/engweb.png",
        link: "https://english-janala-web11-2729.surge.sh/",
        github: "https://github.com/jamil1001/english-platform",
        tech: ["Next.js", "React", "Tailwind CSS"]
    },
    {
        id: 3,
        title: "Food Delivery Application",
        description: "Full-stack food ordering platform with menu browsing, cart management, order tracking, payment integration, and admin dashboard. Optimized for performance.",
        image: "/foodweb.png",
        link: "https://food-delivery-app.surge.sh/",
        github: "https://github.com/jamil1001/food-delivery",
        tech: ["React", "Node.js", "MongoDB", "Stripe"]
    },
    {
        id: 4,
        title: "Garden Management System",
        description: "Plant management application with tracking, watering schedules, growth monitoring, and community sharing. Beautiful UI with care tips.",
        image: "/gardenbook.png",
        link: "https://gardenbook.surge.sh/",
        github: "https://github.com/jamil1001/gardenbook",
        tech: ["React", "Firebase", "Tailwind CSS"]
    },
    {
        id: 5,
        title: "Ghor - Real Estate Platform",
        description: "Modern real estate platform with advanced search, virtual tours, mortgage calculators, and agent connections. Built with Next.js for optimal SEO.",
        image: "/ghor.png",
        link: "https://ghor-realestate.surge.sh/",
        github: "https://github.com/jamil1001/ghor",
        tech: ["Next.js", "React", "MongoDB", "Tailwind CSS"]
    },
];

function ProjectCard({ project, index }: { project: typeof projects[0], index: number }) {
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
                            <Link href={project.github} target="_blank">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className='px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg flex items-center gap-2 shadow-lg'
                                >
                                    <FaGithub /> Code
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
                        <Link href={project.github} target="_blank">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className='px-6 py-3 bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10 text-white font-semibold rounded-lg flex items-center gap-2'
                            >
                                <FaGithub /> Source Code
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