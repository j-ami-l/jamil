"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaPhone, FaPaperPlane } from 'react-icons/fa';
import { MdTask } from 'react-icons/md';

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        task: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            // Using Formspree (replace with your Formspree endpoint)
            const response = await fetch(`https://formspree.io/f/${process.env.NEXT_PUBLIC_FORMSPREE_ID}}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({ name: '', email: '', number: '', task: '' });
            } else {
                setSubmitStatus('error');
            }
        } catch {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }
    };

    return (
        <div className='w-full py-20 bg-gradient-to-b from-black via-gray-900 to-black'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className='text-center mb-16'
                >
                    <h2 className='text-5xl lg:text-6xl font-bold text-white mb-4'>
                        Lets{' '}
                        <span className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent'>
                            Connect
                        </span>
                    </h2>
                    <p className='text-gray-400 text-lg max-w-2xl mx-auto'>
                        Have a project in mind? Fill out the form and I will get back to you soon!
                    </p>
                </motion.div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                    {/* Animated Image Section */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='relative order-2 lg:order-1'
                    >
                        <div className='relative'>
                            {/* Animated Background Blobs */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.2, 1],
                                    rotate: [0, 90, 0],
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className='absolute top-0 left-0 w-72 h-72 bg-indigo-500/30 rounded-full blur-3xl'
                            />
                            <motion.div
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, -90, 0],
                                }}
                                transition={{
                                    duration: 10,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                    delay: 1
                                }}
                                className='absolute bottom-0 right-0 w-72 h-72 bg-purple-500/30 rounded-full blur-3xl'
                            />

                            {/* Contact Illustration */}
                            <motion.div
                                animate={{
                                    y: [0, -20, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className='relative z-10 flex items-center justify-center'
                            >
                                <div className='relative w-full max-w-md aspect-square'>
                                    {/* Animated Circles */}
                                    <motion.div
                                        animate={{
                                            rotate: 360,
                                        }}
                                        transition={{
                                            duration: 20,
                                            repeat: Infinity,
                                            ease: "linear"
                                        }}
                                        className='absolute inset-0'
                                    >
                                        <div className='absolute top-1/4 left-1/4 w-16 h-16 bg-indigo-500/20 rounded-full' />
                                        <div className='absolute bottom-1/4 right-1/4 w-20 h-20 bg-purple-500/20 rounded-full' />
                                        <div className='absolute top-1/3 right-1/3 w-12 h-12 bg-pink-500/20 rounded-full' />
                                    </motion.div>

                                    {/* Main Illustration */}
                                    <div className='relative w-full h-full flex items-center justify-center'>
                                        <motion.div
                                            animate={{
                                                scale: [1, 1.05, 1],
                                            }}
                                            transition={{
                                                duration: 3,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                            className='relative w-80 h-80 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-gray-700/50'
                                        >
                                            <FaEnvelope className='text-9xl text-indigo-400/60' />
                                            
                                            {/* Floating Icons */}
                                            <motion.div
                                                animate={{
                                                    y: [0, -15, 0],
                                                    rotate: [0, 10, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 0.5
                                                }}
                                                className='absolute -top-8 -right-8 w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg'
                                            >
                                                <FaPaperPlane className='text-2xl text-white' />
                                            </motion.div>

                                            <motion.div
                                                animate={{
                                                    y: [0, 15, 0],
                                                    rotate: [0, -10, 0]
                                                }}
                                                transition={{
                                                    duration: 3,
                                                    repeat: Infinity,
                                                    ease: "easeInOut",
                                                    delay: 1
                                                }}
                                                className='absolute -bottom-8 -left-8 w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg'
                                            >
                                                <MdTask className='text-2xl text-white' />
                                            </motion.div>
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='order-1 lg:order-2'
                    >
                        <div className='bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-3xl p-8 lg:p-10'>
                            <form onSubmit={handleSubmit} className='space-y-6'>
                                {/* Name Input */}
                                <div>
                                    <label htmlFor="name" className='flex items-center gap-2 text-gray-300 mb-2 font-medium'>
                                        <FaUser className='text-indigo-400' />
                                        Your Name
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-5 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all'
                                        placeholder='Md Hasan Jamil'
                                    />
                                </div>

                                {/* Email Input */}
                                <div>
                                    <label htmlFor="email" className='flex items-center gap-2 text-gray-300 mb-2 font-medium'>
                                        <FaEnvelope className='text-indigo-400' />
                                        Your Email
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-5 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all'
                                        placeholder='jamil@example.com'
                                    />
                                </div>

                                {/* Phone Number Input */}
                                <div>
                                    <label htmlFor="number" className='flex items-center gap-2 text-gray-300 mb-2 font-medium'>
                                        <FaPhone className='text-indigo-400' />
                                        Phone Number
                                    </label>
                                    <motion.input
                                        whileFocus={{ scale: 1.01 }}
                                        type="tel"
                                        id="number"
                                        name="number"
                                        value={formData.number}
                                        onChange={handleChange}
                                        required
                                        className='w-full px-5 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all'
                                        placeholder='+880 1234-567890'
                                    />
                                </div>

                                {/* Task/Message Textarea */}
                                <div>
                                    <label htmlFor="task" className='flex items-center gap-2 text-gray-300 mb-2 font-medium'>
                                        <MdTask className='text-indigo-400' />
                                        Your Project/Task
                                    </label>
                                    <motion.textarea
                                        whileFocus={{ scale: 1.01 }}
                                        id="task"
                                        name="task"
                                        value={formData.task}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className='w-full px-5 py-4 bg-gray-900/50 border border-gray-600 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 transition-all resize-none'
                                        placeholder='Tell me about your project or task...'
                                    />
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className='w-full px-8 py-4 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white font-semibold rounded-xl shadow-lg flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed transition-all'
                                >
                                    {isSubmitting ? (
                                        <>
                                            <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <FaPaperPlane />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>

                                {/* Success/Error Messages */}
                                {submitStatus === 'success' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='p-4 bg-green-500/20 border border-green-500/50 rounded-xl text-green-400 text-center font-medium'
                                    >
                                        ✓ Message sent successfully! I will get back to you soon.
                                    </motion.div>
                                )}

                                {submitStatus === 'error' && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className='p-4 bg-red-500/20 border border-red-500/50 rounded-xl text-red-400 text-center font-medium'
                                    >
                                        ✗ Something went wrong. Please try again.
                                    </motion.div>
                                )}
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Contact;