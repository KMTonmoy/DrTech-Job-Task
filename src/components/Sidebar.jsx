'use client';

import React, { useEffect, useState } from 'react';
import {
  FaHome,
  FaUserInjured,
  FaHistory,
  FaClipboardList,
  FaCapsules,
  FaListAlt,
  FaEnvelope,
  FaUserCog,
} from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';

const Sidebar = () => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const saved = localStorage.getItem('theme') || 'light';
    setTheme(saved);
    document.body.className = saved === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.body.className = newTheme === 'dark' ? 'bg-black text-white' : 'bg-white text-black';
  };

  const navItems = [
    { icon: <FaHome className="text-blue-500" />, label: 'Home' },
    { icon: <FaUserInjured className="text-green-500" />, label: 'Total Patients' },
    { icon: <FaHistory className="text-purple-500" />, label: 'Diagnostic History' },
    { icon: <FaClipboardList className="text-yellow-500" />, label: 'Pending Appointments' },
    { icon: <FaCapsules className="text-pink-500" />, label: 'Total Supplement' },
    { icon: <FaListAlt className="text-cyan-500" />, label: 'Patient Supplement List' },
    { icon: <FaEnvelope className="text-red-500" />, label: 'Admin Message' },
    { icon: <FaUserCog className="text-gray-700 dark:text-gray-300" />, label: 'Profile Settings' },
  ];

  return (
    <div className={`min-h-screen w-72 p-4 shadow-lg border-r ${theme === 'dark' ? 'bg-black text-white border-gray-700' : 'bg-white text-black border-gray-200'} flex flex-col justify-between`}>
      <div>
        <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
        <ul className="space-y-4">
          {navItems.map((item, i) => (
            <li
              key={i}
              className={`flex items-center gap-3 p-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer`}
            >
              {item.icon}
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>

      <button
        onClick={toggleTheme}
        className="flex items-center gap-2 mt-6 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      >
        {theme === 'light' ? <FiMoon className="text-blue-600" /> : <FiSun className="text-yellow-400" />}
        <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </div>
  );
};

export default Sidebar;
