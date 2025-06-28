'use client';
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
  }, []);

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

  const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const labelColor = theme === 'dark' ? 'text-gray-300' : 'text-gray-700';
  const inputBg = theme === 'dark' ? 'bg-gray-900 text-white border-gray-600' : 'bg-white text-gray-800 border-gray-300';
  const formBg = theme === 'dark' ? 'bg-gray-800' : 'bg-white';

  return (
    <div className={`py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`text-3xl md:text-4xl font-bold text-center mb-12 ${textColor}`}
      >
        অনুসন্ধান করুন
      </motion.h1>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-20">
        {/* Contact GIF */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="https://mdabdulkaiyum.in/assets/files/images/gifs/contact.gif"
            alt="Contact Illustration"
            className="max-w-full h-auto rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 max-w-lg"
        >
          <div className={`${formBg} p-6 md:p-10 rounded-xl shadow-2xl`}>
            <h2 className={`text-2xl font-bold text-center mb-8 ${textColor}`}>মেসেজ পাঠান</h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label htmlFor="name" className={`block text-sm font-medium mb-1 ${labelColor}`}>
                    নামঃ * <span className="text-xs text-gray-500">(নাম)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${inputBg}`}
                    placeholder="আপনার নাম লিখুন"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className={`block text-sm font-medium mb-1 ${labelColor}`}>
                    নাম্বারঃ * <span className="text-xs text-gray-500">(আপনার নাম্বার)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${inputBg}`}
                    placeholder="আপনার মোবাইল নাম্বার"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block text-sm font-medium mb-1 ${labelColor}`}>
                    ইমেইলঃ <span className="text-xs text-gray-500">(ঐচ্ছিক)</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${inputBg}`}
                    placeholder="আপনার ইমেইল ঠিকানা"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={`block text-sm font-medium mb-1 ${labelColor}`}>
                  মেসেজঃ * <span className="text-xs text-gray-500">(আপনার মেসেজ লিখুন)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition ${inputBg}`}
                  placeholder="আপনার বার্তা লিখুন"
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors"
              >
                <FiSend className="text-xl" />
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
