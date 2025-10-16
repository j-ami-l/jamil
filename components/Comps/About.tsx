"use client"
import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import mee from '../../public/me.png'
import { Button } from '../ui/button';

function About() {
    return (
        <div className='w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center'>
                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className='flex justify-center lg:justify-end'
                    >
                        <motion.div
                            transition={{ duration: 0.3 }}
                            className='relative w-full max-w-md'
                        >
                            <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur-2xl opacity-30 animate-pulse'></div>
                            <Image
                                src={mee}
                                alt='My pic'
                                className='relative rounded-2xl shadow-2xl w-full h-auto object-cover'
                                priority
                            />
                        </motion.div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                        className='flex flex-col space-y-6'
                    >
                        {/* Name */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className='text-4xl sm:text-5xl lg:text-6xl font-bold text-white'
                        >
                            Md Hasan{' '}
                            <motion.span
                                animate={{
                                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                                className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]'
                            >
                                Jamil
                            </motion.span>
                        </motion.h1>

                        {/* Title */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className='text-xl sm:text-2xl font-semibold text-indigo-400'
                        >
                            Full Stack Developer
                        </motion.p>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className='text-base sm:text-lg text-gray-300 leading-relaxed'
                        >
                            I build scalable, modern applications with a strong focus on clean architecture, 
                            delightful UX, and performance. My toolkit spans{' '}
                            <span className='text-indigo-400 font-semibold'>Javascript</span>,{' '}
                            <span className='text-indigo-400 font-semibold'>React</span>,{' '}
                            <span className='text-indigo-400 font-semibold'>Next.js</span>,{' '}
                            <span className='text-indigo-400 font-semibold'>TypeScript</span>,{' '}
                            <span className='text-indigo-400 font-semibold'>Tailwind CSS</span>, and{' '}
                            <span className='text-indigo-400 font-semibold'>Node.js</span>— 
                            bringing ideas to life from concept to production with robust APIs and smooth interfaces.
                        </motion.p>

                        {/* Buttons */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                            className='flex flex-col sm:flex-row gap-4 pt-4'
                        >
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button className='w-full sm:w-auto px-8 py-6 text-lg bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-lg shadow-lg'>
                                    View Projects
                                </Button>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button className='w-full sm:w-auto px-8 py-6 text-lg bg-transparent border-2 border-indigo-500 hover:bg-indigo-500/10 text-white font-semibold rounded-lg'>
                                    Get In Touch
                                </Button>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default About;