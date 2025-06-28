'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log(formData);
    };

    return (
        <div className="py-12 px-4 ">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
            >
                অনুসন্ধান করুন
            </motion.h1>

            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 flex justify-center"
                >
                    <img
                        src="https://mdabdulkaiyum.in/assets/files/images/gifs/contact.gif"
                        alt="Contact Us"
                        className="max-w-full h-auto rounded-lg shadow-lg"
                    />
                </motion.div>


                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 max-w-lg"
                >
                    <div className="bg-white p-6 md:p-10 rounded-xl shadow-2xl">
                        <h1 className="text-2xl font-bold text-center mb-8 text-gray-800">মেসেজ পাঠান</h1>

                        <form onSubmit={handleSubmit} className="space-y-6">



                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="md:col-span-2">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                                        নামঃ * <span className="text-xs text-gray-500">(নাম)</span>
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="আপনার নাম লিখুন"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                        নাম্বারঃ * <span className="text-xs text-gray-500">(আপনার নাম্বার)</span>
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="আপনার মোবাইল নাম্বার"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                                        ইমেইলঃ <span className="text-xs text-gray-500">(আপনার ইমেইল)</span>
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                        placeholder="আপনার ইমেইল ঠিকানা"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                    মেসেজঃ * <span className="text-xs text-gray-500">(আপনার মেসেজ)</span>
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={5}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                                    placeholder="আপনার বার্তা লিখুন"
                                />
                            </div>
                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
                            >
                                <FiSend />
                                মেসেজ পাঠান
                            </motion.button>
                        </form>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Contact;