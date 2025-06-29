'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { IoFileTrayFull, IoCalendarOutline, IoAddCircleOutline } from 'react-icons/io5';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import {
  FaPrescriptionBottleAlt, FaDiagnoses, FaClipboardList,
  FaCapsules, FaUser, FaConciergeBell, FaVideo, FaTrashAlt, FaBell
} from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const HomaModal = ({ isOpen, onClose }) => {
  const [glucose, setGlucose] = useState('');
  const [insulin, setInsulin] = useState('');
  const [result, setResult] = useState(null);
  const modalRef = useRef(null);

  const calculateHOMA = () => {
    const g = parseFloat(glucose);
    const i = parseFloat(insulin);
    if (!g || !i) {
      setResult('Please enter valid numbers');
      return;
    }
    const homa = (g * i) / 405;
    setResult(homa.toFixed(3));
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div 
        ref={modalRef}
        className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-xl max-w-md w-full relative"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-white text-2xl"
          aria-label="Close modal"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4 dark:text-white">HOMA2 Calculator</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Fasting Glucose (mg/dL)
            </label>
            <input
              type="number"
              value={glucose}
              onChange={e => setGlucose(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="e.g. 90"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-1 dark:text-gray-300">
              Fasting Insulin (μU/mL)
            </label>
            <input
              type="number"
              value={insulin}
              onChange={e => setInsulin(e.target.value)}
              className="w-full px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
              placeholder="e.g. 15"
            />
          </div>
          <button
            onClick={calculateHOMA}
            className="w-full bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            Calculate
          </button>
          {result !== null && (
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900 rounded-md">
              <p className="font-semibold dark:text-white">
                Result: {typeof result === 'string' ? result : `${result} (HOMA-IR)`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotification, setShowNotification] = useState(false);
  const [showAppDropdown, setShowAppDropdown] = useState(false);
  const [showHomaModal, setShowHomaModal] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const appRef = useRef(null);
  const mobileMenuRef = useRef(null);
  
  const router = useRouter();
  const pathname = usePathname();

  const initialApps = [
    { id: '1', label: 'Appointments', icon: <IoCalendarOutline size={20} className="text-blue-600" /> },
    { id: '2', label: 'Prescriptions', icon: <FaPrescriptionBottleAlt size={20} className="text-green-600" /> },
    { id: '3', label: 'Diagnostics', icon: <FaDiagnoses size={20} className="text-pink-600" /> },
    { id: '4', label: 'Reports', icon: <FaClipboardList size={20} className="text-yellow-500" /> },
    { id: '5', label: 'HOMA-IR', icon: <IoAddCircleOutline size={20} className="text-emerald-500" /> },
    { id: '6', label: 'Supplements', icon: <FaCapsules size={20} className="text-sky-500" /> },
    { id: '7', label: 'Users', icon: <FaUser size={20} className="text-purple-600" /> },
    { id: '8', label: 'Services', icon: <FaConciergeBell size={20} className="text-red-500" /> },
    { id: '9', label: 'Video Calls', icon: <FaVideo size={20} className="text-blue-500" /> },
    { id: '10', label: 'Cleanup', icon: <FaTrashAlt size={20} className="text-red-600" /> }
  ];

  const [apps, setApps] = useState(initialApps);
  const [draggingIndex, setDraggingIndex] = useState(null);

  const notifications = [
    'New appointment booked by John Doe',
    'Patient Anna submitted prescription',
    'Diagnostic test report ready',
    'System software updated'
  ];

  // Check for mobile view
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setShowProfileDropdown(false);
      }
      if (notificationRef.current && !notificationRef.current.contains(e.target)) {
        setShowNotification(false);
      }
      if (appRef.current && !appRef.current.contains(e.target)) {
        setShowAppDropdown(false);
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) && !e.target.closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle theme
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const handleDragStart = (e, index) => {
    setDraggingIndex(index);
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, index) => {
    e.preventDefault();
    if (draggingIndex === null || draggingIndex === index) return;
    const newApps = [...apps];
    const draggedItem = newApps[draggingIndex];
    newApps.splice(draggingIndex, 1);
    newApps.splice(index, 0, draggedItem);
    setDraggingIndex(index);
    setApps(newApps);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <>
      <HomaModal isOpen={showHomaModal} onClose={() => setShowHomaModal(false)} />
      
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Navigation Bar */}
      <div className={`p-3 sticky top-0 z-50 flex justify-between items-center border-b-2 ${theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white' : 'border-gray-200 bg-white text-black'}`}>
        <div className="flex items-center gap-4">
          <img 
            className="w-[150px] md:w-[220px]" 
            src="/main_logo_fav.png" 
            alt="Logo" 
            onClick={() => router.push('/')}
            style={{ cursor: 'pointer' }}
          />
          <button 
            className="lg:hidden text-3xl cursor-pointer mobile-menu-button"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={() => setShowHomaModal(true)} 
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition whitespace-nowrap"
          >
            HOMA-IR Test
          </button>
          
          <Link href="/appointment">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition whitespace-nowrap">
              Create Appointment
            </button>
          </Link>

          {/* Notifications */}
          <div className="relative" ref={notificationRef}>
            <button 
              onClick={() => {
                setShowNotification(!showNotification);
                setShowAppDropdown(false);
                setShowProfileDropdown(false);
              }} 
              className="text-xl hover:text-blue-400 relative"
              aria-label="Notifications"
            >
              <FaBell />
              <span className="absolute -top-1 -right-1 text-xs bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-white font-bold">
                {notifications.length}
              </span>
            </button>
            <AnimatePresence>
              {showNotification && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50"
                >
                  <div className="p-2 font-semibold border-b dark:border-gray-700 dark:text-white">
                    Notifications
                  </div>
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-60 overflow-auto">
                    {notifications.map((note, i) => (
                      <li key={i} className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer text-sm">
                        {note}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Access Apps */}
          <div className="relative" ref={appRef}>
            <button 
              onClick={() => {
                setShowAppDropdown(!showAppDropdown);
                setShowNotification(false);
                setShowProfileDropdown(false);
              }} 
              className="text-xl hover:text-blue-400"
              aria-label="Quick Access Apps"
            >
              <IoFileTrayFull size={24} />
            </button>
            <AnimatePresence>
              {showAppDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-[500px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50 p-4"
                >
                  <p className="mb-2 font-semibold text-center dark:text-white">Quick Access</p>
                  <div className="grid grid-cols-4 gap-3">
                    {apps.map((app, index) => (
                      <div
                        key={app.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDragEnd={handleDragEnd}
                        className={`flex flex-col items-center justify-center p-2 border rounded cursor-move select-none ${
                          theme === 'dark' ? 'bg-gray-700' : 'bg-gray-50'
                        }`}
                      >
                        {app.icon}
                        <small className="mt-1 text-xs text-center">{app.label}</small>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Profile Dropdown */}
          <div className="relative" ref={profileRef}>
            <button 
              onClick={() => {
                setShowProfileDropdown(!showProfileDropdown);
                setShowNotification(false);
                setShowAppDropdown(false);
              }} 
              className="flex items-center gap-2 hover:text-blue-400"
              aria-label="User profile"
            >
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/019/194/935/small_2x/global-admin-icon-color-outline-vector.jpg"
                alt="Admin Avatar"
                className="w-9 h-9 rounded-full object-cover border border-gray-300"
              />
              <span className="font-medium hidden md:inline">Admin</span>
            </button>
            <AnimatePresence>
              {showProfileDropdown && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50"
                >
                  <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                    <p className="font-semibold dark:text-white">Admin</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">admin@gmail.com</p>
                  </div>
                  <div className="flex flex-col">
                    <Link 
                      href="/dashboard" 
                      onClick={() => setShowProfileDropdown(false)} 
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                    >
                      Dashboard
                    </Link>
                    <Link 
                      href="/settings" 
                      onClick={() => setShowProfileDropdown(false)} 
                      className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                    >
                      Settings
                    </Link>
                    <button 
                      onClick={() => {
                        setShowProfileDropdown(false);
                        alert('✅ Logged out!');
                      }} 
                      className="text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Logout
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && isMobile && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'tween' }}
            className={`fixed top-0 left-0 h-full w-64 z-50 shadow-lg ${
              theme === 'dark' ? 'bg-gray-900' : 'bg-white'
            }`}
          >
            <div className="p-4 border-b flex items-center justify-between">
              <img 
                className="w-[150px]" 
                src="/main_logo_fav.png" 
                alt="Logo" 
                onClick={() => {
                  router.push('/');
                  setIsOpen(false);
                }}
                style={{ cursor: 'pointer' }}
              />
              <button 
                onClick={() => setIsOpen(false)}
                className="text-2xl"
                aria-label="Close menu"
              >
                <HiX />
              </button>
            </div>

            <div className="p-4 space-y-4">
              <button 
                onClick={() => {
                  setShowHomaModal(true);
                  setIsOpen(false);
                }} 
                className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
              >
                HOMA-IR Test
              </button>
              
              <Link href="/appointment">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                >
                  Create Appointment
                </button>
              </Link>

              <div className="pt-4 border-t">
                <p className="font-semibold mb-2 dark:text-white">Quick Access</p>
                <div className="grid grid-cols-2 gap-2">
                  {apps.slice(0, 6).map((app) => (
                    <div
                      key={app.id}
                      className="flex flex-col items-center justify-center p-2 border rounded cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
                      onClick={() => {
                        // Add your navigation logic here
                        setIsOpen(false);
                      }}
                    >
                      {app.icon}
                      <small className="mt-1 text-xs text-center">{app.label}</small>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t">
                <p className="font-semibold mb-2 dark:text-white">Account</p>
                <Link 
                  href="/dashboard" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Dashboard
                </Link>
                <Link 
                  href="/settings" 
                  onClick={() => setIsOpen(false)} 
                  className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white"
                >
                  Settings
                </Link>
                <button 
                  onClick={() => {
                    setIsOpen(false);
                    alert('✅ Logged out!');
                  }} 
                  className="w-full text-left px-3 py-2 text-red-500 rounded hover:bg-gray-100 dark:hover:bg-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default DashboardNav;