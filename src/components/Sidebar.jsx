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
  FaBars,
  FaTimes,
} from 'react-icons/fa';
import { FiSun, FiMoon } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

const Sidebar = () => {
  const pathname = usePathname();
  const [theme, setTheme] = useState('light');
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

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
    { icon: <FaHome />, label: 'Home', path: '/dashboard' },
    { icon: <FaUserInjured />, label: 'Total Patients', path: '/dashboard/total-patients' },
    { icon: <FaHistory />, label: 'Diagnostic History', path: '/dashboard/diagnostic-history' },
    { icon: <FaClipboardList />, label: 'Pending Appointments', path: '/dashboard/pending-appointments' },
    { icon: <FaCapsules />, label: 'Total Supplement', path: '/dashboard/total-supplement' },
    { icon: <FaListAlt />, label: 'Patient Supplement List', path: '/dashboard/patient-supplement-list' },
    { icon: <FaEnvelope />, label: 'Admin Message', path: '/dashboard/admin-message' },
    { icon: <FaUserCog />, label: 'Profile Settings', path: '/dashboard/profile-settings' },
  ];

  const isActive = (path) => {
    if (path === '/dashboard') {
      return pathname === path;
    }
    return pathname.startsWith(path);
  };

  return (
    <>
      {/* Mobile menu button */}
      <button
        className={`md:hidden fixed top-4 left-4 z-50 p-2 rounded-lg ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md`}
        onClick={() => setMobileOpen(!mobileOpen)}
      >
        {mobileOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed md:relative min-h-screen ${collapsed ? 'w-20' : 'w-72'} p-4 shadow-lg border-r ${theme === 'dark' ? 'bg-black text-white border-gray-700' : 'bg-white text-black border-gray-200'} flex flex-col justify-between transition-all duration-300 z-40 ${mobileOpen ? 'left-0' : '-left-full md:left-0'}`}
      >
        <div>
          {!collapsed ? (
            <h2 className="text-2xl font-bold mb-6 text-center">Dashboard</h2>
          ) : (
            <div className="h-12 flex items-center justify-center mb-6">
              <span className="text-2xl font-bold">D</span>
            </div>
          )}
          <ul className="space-y-2">
            {navItems.map((item, i) => (
              <li
                key={i}
                className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${isActive(item.path) ? 'bg-pink-500 text-white' : theme === 'dark' ? 'hover:bg-gray-800' : 'hover:bg-gray-100'}`}
                onClick={() => setMobileOpen(false)}
              >
                <a href={item.path} className="flex items-center gap-3 w-full">
                  <span className={`text-xl ${isActive(item.path) ? 'text-white' : theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {item.icon}
                  </span>
                  {!collapsed && <span>{item.label}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4">
          <button
            onClick={toggleTheme}
            className={`flex items-center gap-2 w-full p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition`}
          >
            {theme === 'light' ? (
              <FiMoon className="text-blue-600" />
            ) : (
              <FiSun className="text-yellow-400" />
            )}
            {!collapsed && (
              <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
            )}
          </button>

          <button
            onClick={() => setCollapsed(!collapsed)}
            className={`hidden md:flex items-center justify-center w-full p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-100 hover:bg-gray-200'} transition`}
          >
            {collapsed ? (
              <FaBars className="text-gray-500" />
            ) : (
              <FaTimes className="text-gray-500" />
            )}
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;