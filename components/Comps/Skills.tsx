"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { 
    FaReact, 
    FaNodeJs, 
    FaHtml5, 
    FaCss3Alt, 
    FaJs 
} from 'react-icons/fa';
import { 
    SiNextdotjs, 
    SiTailwindcss, 
    SiMongodb 
} from 'react-icons/si';

function Skills() {
    const skills = [
        { name: 'React', icon: FaReact, color: '#61DAFB' },
        { name: 'Next.js', icon: SiNextdotjs, color: '#FFFFFF' },
        { name: 'Tailwind', icon: SiTailwindcss, color: '#06B6D4' },
        { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
        { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
        { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
        { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248' }
    ];

    return (
        <div className='w-full py-20 bg-black overflow-hidden'>
            <div className='max-w-7xl mx-auto px-4'>

                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-5xl lg:text-6xl font-bold text-center text-white mb-16'
                >
                    Tech{' '}
                    <span className='bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent'>
                        Stack
                    </span>
                </motion.h2>

                <div className='relative'>
                    
                    <div className='absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none' />
                    <div className='absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none' />


                    <div className='flex mb-8 overflow-hidden'>
                        <motion.div
                            animate={{
                                x: [0, -1000],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                            className='flex gap-8 flex-shrink-0'
                        >
                            {[...skills, ...skills].map((skill, index) => (
                                <motion.div
                                    key={`row1-${index}`}
                                    whileHover={{ 
                                        scale: 1.2,
                                        rotate: 360,
                                        transition: { duration: 0.6 }
                                    }}
                                    className='flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0'
                                >
                                    <div 
                                        className='w-24 h-24 rounded-full flex items-center justify-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-transparent transition-all duration-300 relative overflow-hidden'
                                    >
                                        <skill.icon 
                                            className='text-5xl z-10 relative'
                                            style={{ color: skill.color }}
                                        />
                                        <motion.div
                                            className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                            style={{ 
                                                background: `radial-gradient(circle, ${skill.color}40, transparent)`
                                            }}
                                        />
                                    </div>
                                    <span className='text-white text-sm font-medium text-center whitespace-nowrap'>
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    <div className='flex overflow-hidden'>
                        <motion.div
                            animate={{
                                x: [-1000, 0],
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 20,
                                    ease: "linear",
                                },
                            }}
                            className='flex gap-8 flex-shrink-0'
                        >
                            {[...skills, ...skills].map((skill, index) => (
                                <motion.div
                                    key={`row2-${index}`}
                                    whileHover={{ 
                                        scale: 1.2,
                                        rotate: -360,
                                        transition: { duration: 0.6 }
                                    }}
                                    className='flex flex-col items-center gap-3 group cursor-pointer flex-shrink-0'
                                >
                                    <div 
                                        className='w-24 h-24 rounded-full flex items-center justify-center bg-gray-800/50 backdrop-blur-sm border border-gray-700 group-hover:border-transparent transition-all duration-300 relative overflow-hidden'
                                    >
                                        <skill.icon 
                                            className='text-5xl z-10 relative'
                                            style={{ color: skill.color }}
                                        />
                                        <motion.div
                                            className='absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300'
                                            style={{ 
                                                background: `radial-gradient(circle, ${skill.color}40, transparent)`
                                            }}
                                        />
                                    </div>
                                    <span className='text-white text-sm font-medium text-center whitespace-nowrap'>
                                        {skill.name}
                                    </span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;