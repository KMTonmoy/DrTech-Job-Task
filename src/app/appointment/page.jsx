'use client';
import Navbar from '@/components/Navbar';
import React, { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const Appointment = () => {
  const [problem, setProblem] = useState('');
  const [date, setDate] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`✅ আপনার অ্যাপয়েন্টমেন্ট অনুরোধ করা হয়েছে:\nসমস্যা: ${problem}\nতারিখ: ${date}`);
  };

  return (
    <>
      <Navbar />
      <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex justify-center items-center px-4`}>
        <div className={`w-full max-w-xl rounded-lg shadow-lg p-8 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold text-center w-full">বুক অ্যাপয়েন্টমেন্ট</h2>
            <button onClick={toggleTheme} className="text-xl absolute right-8 top-8">
              {theme === 'dark' ? <FiSun /> : <FiMoon />}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">আপনার সমস্যা সিলেক্ট করুন</label>
              <select
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-yellow-500' : 'focus:ring-blue-500'}`}
              >
                <option value="">-- সমস্যা নির্বাচন করুন --</option>
                <option value="ডায়াবেটিস">ডায়াবেটিস (সুগার)</option>
                <option value="লাইফস্টাইল">লাইফস্টাইল মডিফায়ার</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">ডাক্তার:</label>
              <input
                type="text"
                value="Md. Abdul Kaiyum"
                disabled
                className={`w-full px-4 py-2 border rounded-md cursor-not-allowed ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-gray-100'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">অ্যাপয়েন্টমেন্ট ডেট সিলেক্ট করুন</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white focus:ring-yellow-500' : 'focus:ring-blue-500'}`}
              />
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-md font-semibold transition ${theme === 'dark' ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              Request Appointment Now!
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Appointment;
