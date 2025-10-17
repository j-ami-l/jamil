"use client";
import React from "react";
import Image from "next/image";
import meee from '../../public/me.png';
import { motion } from "framer-motion";

export function SparklesPreview() {
    // Generate random sparkles
    const sparkles = Array.from({ length: 50 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 4 + 2,
        delay: Math.random() * 2,
        duration: Math.random() * 2 + 1,
    }));

    return (
        <div className="flex flex-col w-11/12 mx-auto items-center justify-center overflow-hidden rounded-md">
            <div>
                <Image
                    className='w-[300px]'
                    src={meee}
                    alt='my pic'
                />
            </div>
            <div className="w-[40rem] h-40 relative">
                {/* Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

                {/* Custom Sparkles with Framer Motion */}
                <div className="hidden md:block w-full h-full relative">
                    {sparkles.map((sparkle) => (
                        <motion.div
                            key={sparkle.id}
                            className="absolute rounded-full bg-white"
                            style={{
                                left: `${sparkle.x}%`,
                                top: `${sparkle.y}%`,
                                width: sparkle.size,
                                height: sparkle.size,
                            }}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0, 1, 0],
                            }}
                            transition={{
                                duration: sparkle.duration,
                                repeat: Infinity,
                                delay: sparkle.delay,
                                ease: "easeInOut",
                            }}
                        />
                    ))}
                </div>

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
        </div>
    );
}