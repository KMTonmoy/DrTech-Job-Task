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
    if (!isOpen) {
      setGlucose('');
      setInsulin('');
      setResult(null);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#00000025] bg-opacity-50">
      <div className="bg-white dark:bg-gray-900 p-6 rounded shadow-lg max-w-md w-full relative">
        <h2 className="text-xl font-semibold mb-4">HOMA2 Calculator</h2>
        <label className="block mb-2">
          Fasting Glucose (mg/dL):
          <input
            type="number"
            value={glucose}
            onChange={e => setGlucose(e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1 dark:bg-gray-800 dark:border-gray-600"
            placeholder="e.g. 90"
          />
        </label>
        <label className="block mb-2">
          Fasting Insulin (μU/mL):
          <input
            type="number"
            value={insulin}
            onChange={e => setInsulin(e.target.value)}
            className="w-full border px-3 py-2 rounded mt-1 dark:bg-gray-800 dark:border-gray-600"
            placeholder="e.g. 15"
          />
        </label>
        <button
          onClick={calculateHOMA}
          className="mt-3 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Calculate
        </button>
        {result !== null && (
          <p className="mt-4 font-semibold">
            Result: {typeof result === 'string' ? result : `${result} (HOMA-IR)`}
          </p>
        )}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
          aria-label="Close modal"
        >
          &times;
        </button>
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
  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const appRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  const initialApps = [
    { id: '1', label: 'Appointment Off Date', icon: <IoCalendarOutline size={20} color="#2563eb" /> },
    { id: '2', label: 'Prescription Data Add', icon: <FaPrescriptionBottleAlt size={20} color="#16a34a" /> },
    { id: '3', label: 'Diagnostic Test Add', icon: <FaDiagnoses size={20} color="#db2777" /> },
    { id: '4', label: 'Software Version', icon: <FaClipboardList size={20} color="#f59e0b" /> },
    { id: '5', label: 'HOMA-IR', icon: <IoAddCircleOutline size={20} color="#10b981" /> },
    { id: '6', label: 'Diagnostic Report Add', icon: <FaDiagnoses size={20} color="#8b5cf6" /> },
    { id: '7', label: 'Add Supplement', icon: <FaCapsules size={20} color="#0ea5e9" /> },
    { id: '8', label: 'Add User', icon: <FaUser size={20} color="#9333ea" /> },
    { id: '9', label: 'Add Service', icon: <FaConciergeBell size={20} color="#ef4444" /> },
    { id: '10', label: 'Video Create Appointment', icon: <FaVideo size={20} color="#3b82f6" /> },
    { id: '11', label: 'Patient Delete Timer', icon: <FaTrashAlt size={20} color="#ef4444" /> }
  ];

  const [apps, setApps] = useState(initialApps);
  const [draggingIndex, setDraggingIndex] = useState(null);

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

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!profileRef.current?.contains(e.target)) setShowProfileDropdown(false);
      if (!notificationRef.current?.contains(e.target)) setShowNotification(false);
      if (!appRef.current?.contains(e.target)) setShowAppDropdown(false);
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

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

  const notifications = [
    'New appointment booked by John Doe',
    'Patient Anna submitted prescription',
    'Diagnostic test report ready',
    'System software updated'
  ];

  return (
    <>
      <HomaModal isOpen={showHomaModal} onClose={() => setShowHomaModal(false)} />
      <div className={`p-3 sticky top-0 z-50 flex justify-between items-center border-b-2 ${theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white' : 'border-[#E5E7EB] bg-white text-black'}`}>
        <div className="flex items-center gap-4">
          <img className="w-[150px] md:w-[220px]" src="/main_logo_fav.png" alt="Logo" />
          <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
            <HiMenuAlt3 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
          </div>
        </div>
        <div className="hidden md:flex items-center gap-6">
          <button onClick={() => setShowHomaModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            HOMA-IR Test
          </button>
          <Link href="/appointment">
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Create Appointment</button>
          </Link>
          <div className="relative" ref={notificationRef}>
            <button onClick={() => { setShowNotification(!showNotification); setShowAppDropdown(false); setShowProfileDropdown(false); }} className="text-xl hover:text-blue-400 relative" aria-label="Notifications">
              <FaBell />
              <span className="absolute -top-1 -right-1 text-xs bg-red-600 rounded-full w-4 h-4 flex items-center justify-center text-white font-bold">
                {notifications.length}
              </span>
            </button>
            <AnimatePresence>
              {showNotification && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-72 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700 max-h-48 overflow-auto">
                    {notifications.map((note, i) => (
                      <li key={i} className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">{note}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          <div className="relative" ref={appRef}>
            <button onClick={() => { setShowAppDropdown(!showAppDropdown); setShowNotification(false); setShowProfileDropdown(false); }} className="text-xl hover:text-blue-400" aria-label="Quick Access Apps">
              <IoFileTrayFull size={24} />
            </button>
            <AnimatePresence>
              {showAppDropdown && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-[500px] bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded shadow-lg z-50 p-4">
                  <p className="mb-2 font-semibold text-center dark:text-white">Quick Access</p>
                  <div className="grid grid-cols-4 gap-3">
                    {apps.map((app, index) => (
                      <div
                        key={app.id}
                        draggable
                        onDragStart={(e) => handleDragStart(e, index)}
                        onDragOver={(e) => handleDragOver(e, index)}
                        onDragEnd={handleDragEnd}
                        className="flex flex-col items-center justify-center p-2 border rounded cursor-move select-none bg-gray-50 dark:bg-gray-700"
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
          <div className="relative" ref={profileRef}>
            <button onClick={() => { setShowProfileDropdown(!showProfileDropdown); setShowNotification(false); setShowAppDropdown(false); }} className="flex items-center gap-2 hover:text-blue-400">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/019/194/935/small_2x/global-admin-icon-color-outline-vector.jpg"
                alt="Admin Avatar"
                className="w-9 h-9 rounded-full object-cover border border-gray-300"
              />
              <span className="font-medium hidden md:inline">Admin</span>
            </button>
            {showProfileDropdown && (
              <div className="absolute right-0 mt-2 w-56 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
                <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                  <p className="font-semibold">Admin</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">admin@gmail.com</p>
                </div>
                <div className="flex flex-col">
                  <Link href="/dashboard" onClick={() => setShowProfileDropdown(false)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>
                  <Link href="/settings" onClick={() => setShowProfileDropdown(false)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
                  <button className="text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => { setShowProfileDropdown(false); alert('✅ Logged out!'); }}>Logout</button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardNav;
