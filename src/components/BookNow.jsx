'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaCalendarAlt } from 'react-icons/fa';

const BookNow = () => {
  return (
    <div className="relative  p-10  h-[300px] w-[90%] rounded-xl mx-auto overflow-hidden">
       <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://mdabdulkaiyum.in/assets/files/images/appointment/01.jpg')"
        }}
        initial={{ opacity: 0.9 }}
        whileHover={{ opacity: 0.7 }}
        transition={{ duration: 0.3 }}
      />
      
       <div className="absolute inset-0 bg-[#00000063] hover:bg-[#000000b6]  bg-opacity-40" />
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center p-6 text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl  font-bold mb-6"
        >
          চিকিৎসার জন্য নাম লেখাতে আজ‌ই অ্যাপয়েন্টমেন্ট বুক করুন
        </motion.h2>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg text-lg md:text-xl font-medium flex items-center gap-3 shadow-lg"
        >
          <FaCalendarAlt className="text-xl" />
          Book Appointment
        </motion.button>
      </div>
    </div>
  );
};

export default BookNow;