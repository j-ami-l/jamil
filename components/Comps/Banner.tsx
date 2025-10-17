"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { SparklesPreview } from './SparklesPreview';

function Banner() {
    return (
        <div className='w-11/12 mx-auto min-h-screen mt-35'>
            <div className='relative flex items-center justify-center min-h-[300px] md:min-h-[400px] lg:min-h-[500px]'>

                <div className='absolute inset-0 hidden md:flex items-center justify-center'>
                    <SparklesPreview />
                </div>
                
                <h1 className="relative text-5xl sm:text-6xl md:text-7xl lg:text-9xl font-bold text-center text-white px-4">
                    <motion.span
                        animate={{
                            scale: [1, 1.3, 1],
                            rotateZ: [0, 10, -10, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="inline-block bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent bg-[length:200%_auto]"
                    >
                        J
                    </motion.span>
                    <motion.span
                        className='inline-block relative -top-4 sm:-top-6 md:-top-8 lg:-top-12'
                        animate={{
                            y: [0, -10, 0],
                            opacity: [1, 0.7, 1],
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.2
                        }}
                    >
                        am
                    </motion.span>
                    <motion.span
                        className='inline-block ml-8 sm:ml-12 md:ml-16 lg:ml-18'
                        animate={{
                            x: [0, 0, 0],
                            rotateZ: [0, -10, 10, 0],
                            scale: [1, 1.1, 1],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 0.4
                        }}
                    >
                        il
                    </motion.span>
                </h1>
            </div>
        </div>
    );
}

export default Banner;