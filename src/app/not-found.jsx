'use client';

import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800 text-center px-6">
      <motion.h1 
        initial={{ opacity: 0, y: -30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }} 
        className="text-7xl font-bold text-blue-600 dark:text-yellow-400 mb-4"
      >
        404
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ delay: 0.3, duration: 0.6 }} 
        className="text-xl font-medium text-gray-700 dark:text-gray-200 mb-6"
      >
        আমাদের একজন ওয়েব ডেভেলপার এই পেজের কাজ করছেন — আপনি দ্রুতই পেয়ে যাবেন!
      </motion.p>

      <Link
        href="/"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-white bg-blue-600 hover:bg-blue-700 dark:bg-yellow-500 dark:hover:bg-yellow-600 rounded-full transition"
      >
        <FiArrowLeft />
        হোম পেইজে ফিরে যান
      </Link>
    </div>
  );
}
