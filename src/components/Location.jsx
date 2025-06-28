'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Location = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const headingColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const borderColor = theme === 'dark' ? 'border-gray-700' : 'border-gray-200';

  return (
    <div className={`py-12 px-4 md:px-20 ${bgColor}`}>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold text-center mb-8 ${headingColor}`}
      >
        আমাদের ঠিকানা
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className={`w-full h-96 rounded-xl overflow-hidden shadow-xl border ${borderColor}`}
      >
        <iframe
          className="w-full h-full"
          src="https://maps.google.com/maps?q=%E0%A6%AA%E0%A7%80%E0%A6%B8%20%E0%A6%B2%E0%A6%BE%E0%A6%87%E0%A6%AC%E0%A7%8D%E0%A6%B0%E0%A7%87%E0%A6%B0%E0%A7%80%2C%20JWP6%2BXMF%2C%20Dhulian%20-%20Pakur%20Rd%2C%20%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A7%87%E0%A6%B8%E0%A7%8D%E0%A6%9F%20%E0%A6%AC%E0%A7%87%E0%A6%99%E0%A7%8D%E0%A6%97%E0%A6%B2%20742202&amp;t=m&amp;z=13&amp;output=embed&amp;iwloc=near"
          title="পীস লাইব্রেরী লোকেশন"
          aria-label="পীস লাইব্রেরী লোকেশন"
          allowFullScreen
          loading="lazy"
          aria-hidden="false"
        />
      </motion.div>
    </div>
  );
};

export default Location;
