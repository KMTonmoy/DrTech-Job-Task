'use client'
import React, { useEffect, useState } from 'react';
import { CiBookmark } from "react-icons/ci";
import { motion } from 'framer-motion';
import Link from 'next/link';

const Book = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className={`w-[85%] mx-auto my-10 ${theme === 'dark' ? 'bg-gray-800 shadow-lg hover:shadow-xl' : 'bg-white shadow-lg hover:shadow-xl'} transition-shadow duration-300 p-6 md:p-10 rounded-2xl`}
        >
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-10 text-left'>
                <div className='flex-1'>
                    <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-[48px] font-medium leading-tight text-left ${theme === 'dark' ? 'text-white' : 'text-black'}`}>
                        চিকিৎসার জন্য আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
                    </h1>
                    <p className={`text-lg sm:text-xl md:text-2xl mt-4 md:mt-6 font-normal ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} flex items-start`}>
                        <span className='mr-2'>•</span>
                        ঔষধ মুক্ত জীবন সুস্থ জীবন, আর এর জন্য প্রয়োজন স্বাস্থ্যকর লাইফ স্টাইল।
                    </p>
                </div>

                <Link href={'/appointment'}>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-medium h-12 md:h-[50px] px-4 md:px-6 rounded-xl flex items-center gap-2 transition-colors duration-300 whitespace-nowrap self-start md:self-auto ${theme === 'dark' ? 'shadow-md' : ''}`}
                    >
                        <CiBookmark className='text-xl md:text-2xl' />
                        Book Appointment
                    </motion.button>
                </Link>
            </div>
        </motion.div>
    )
}

export default Book;