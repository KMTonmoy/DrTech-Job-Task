'use client';

import Link from 'next/link';
import React, { useState, useEffect, useRef } from 'react';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { Bell, AppWindow } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const dummyNotifications = [
  { id: 1, title: 'New appointment booked', time: '2 mins ago' },
  { id: 2, title: 'System update completed', time: '1 hour ago' },
  { id: 3, title: 'New message from user John', time: '3 hours ago' },
];

const DashboardNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const [showProfileDropdown, setShowProfileDropdown] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [glucose, setGlucose] = useState('');
  const [insulin, setInsulin] = useState('');
  const [result, setResult] = useState(null);

  const profileRef = useRef(null);
  const notificationRef = useRef(null);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current && !profileRef.current.contains(event.target) &&
        notificationRef.current && !notificationRef.current.contains(event.target)
      ) {
        setShowProfileDropdown(false);
        setShowNotifications(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const calculateHOMA2 = () => {
    const g = parseFloat(glucose);
    const i = parseFloat(insulin);
    if (!isNaN(g) && !isNaN(i) && g > 0 && i > 0) {
      const homaIR = (g * i) / 405;
      setResult(homaIR.toFixed(2));
    } else {
      setResult('Invalid input');
    }
  };

  return (
    <div className={`p-3 sticky top-0 z-50 flex justify-between items-center border-b-2 ${theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white' : 'border-[#E5E7EB] bg-white text-black'}`}>
      {/* Logo + Mobile Menu Toggle */}
      <div className="flex items-center gap-4">
        <img className="w-[150px] md:w-[220px]" src="/main_logo_fav.png" alt="Logo" />
        <div className="lg:hidden text-3xl cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <HiMenuAlt3 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
        </div>
      </div>

      {/* Right Side */}
      <div className="hidden md:flex items-center gap-6">
        <button onClick={() => setShowModal(true)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
          HOMA-IR Test
        </button>

        <Link href="/appointment">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition">Create Appointment</button>
        </Link>

        {/* Notification Button */}
        <div className="relative" ref={notificationRef}>
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="text-xl hover:text-blue-400 relative"
            aria-label="Notifications"
          >
            <Bell />
            {/* Badge */}
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-red-500 rounded-full" />
          </button>

          <AnimatePresence>
            {showNotifications && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="absolute right-0 mt-2 w-72 max-h-64 overflow-auto bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50"
              >
                <div className="p-3 font-semibold border-b border-gray-200 dark:border-gray-700">Notifications</div>
                {dummyNotifications.length === 0 ? (
                  <p className="p-3 text-center text-gray-500 dark:text-gray-400">No notifications</p>
                ) : (
                  dummyNotifications.map((notif) => (
                    <div key={notif.id} className="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer border-b last:border-b-0">
                      <p className="text-sm font-medium">{notif.title}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{notif.time}</p>
                    </div>
                  ))
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <button className="text-xl hover:text-blue-400">
          <AppWindow />
        </button>

        {/* Profile Dropdown */}
        <div className="relative" ref={profileRef}>
          <button onClick={() => setShowProfileDropdown(!showProfileDropdown)} className="flex items-center gap-2 hover:text-blue-400">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/019/194/935/small_2x/global-admin-icon-color-outline-vector.jpg"
              alt="Admin Avatar"
              className="w-9 h-9 rounded-full object-cover border border-gray-300"
            />
          </button>

          {showProfileDropdown && (
            <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-50">
              <div className="p-4 border-b border-gray-200 dark:border-gray-600">
                <p className="font-semibold">Admin</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">admin@gmail.com</p>
              </div>
              <div className="flex flex-col">
                <Link href="/dashboard" onClick={() => setShowProfileDropdown(false)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Dashboard</Link>
                <Link href="/settings" onClick={() => setShowProfileDropdown(false)} className="px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700">Settings</Link>
                <button className="text-left px-4 py-2 text-red-500 hover:bg-gray-100 dark:hover:bg-gray-700" onClick={() => {
                  setShowProfileDropdown(false);
                  alert('✅ Logged out!');
                }}>
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 right-0 h-full w-[85%] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} z-50 shadow-lg p-5 overflow-y-auto`}
          >
            <div className="flex justify-between items-center mb-6">
              <img className="w-[150px]" src="/main_logo_fav.png" alt="Logo" />
              <HiX className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>

            <div className="flex flex-col gap-5 text-lg font-medium">
              <button onClick={() => { setIsOpen(false); setShowModal(true); }} className="bg-blue-600 text-white px-4 py-2 w-full rounded">HOMA-IR Test</button>
              <Link href="/appointment" onClick={() => setIsOpen(false)}><button className="bg-green-600 text-white px-4 py-2 w-full rounded">Create Appointment</button></Link>
              <Link href="/dashboard" onClick={() => setIsOpen(false)}><p className="px-4 py-2 hover:text-blue-500">Dashboard</p></Link>
              <Link href="/settings" onClick={() => setIsOpen(false)}><p className="px-4 py-2 hover:text-blue-500">Settings</p></Link>
              <button onClick={() => { setIsOpen(false); alert('✅ Logged out!'); }} className="px-4 py-2 text-left text-red-500 hover:text-red-600">Logout</button>
              <button onClick={toggleTheme} className="text-left px-4 py-2 mt-2 rounded bg-gray-200 dark:bg-gray-700">Toggle Theme</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HOMA2 Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-[999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white dark:bg-gray-900 p-6 rounded-lg w-full max-w-md shadow-xl"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">HOMA2 Calculator</h2>
                <HiX onClick={() => setShowModal(false)} className="cursor-pointer text-2xl" />
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Fasting Glucose (mg/dL)</label>
                  <input
                    type="number"
                    value={glucose}
                    onChange={(e) => setGlucose(e.target.value)}
                    className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-600"
                    placeholder="e.g. 90"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">Fasting Insulin (μU/mL)</label>
                  <input
                    type="number"
                    value={insulin}
                    onChange={(e) => setInsulin(e.target.value)}
                    className="w-full border px-3 py-2 rounded dark:bg-gray-800 dark:border-gray-600"
                    placeholder="e.g. 10"
                  />
                </div>
                <button
                  onClick={calculateHOMA2}
                  className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
                >
                  Calculate HOMA-IR
                </button>
                {result && (
                  <div className="mt-2 text-center font-semibold">
                    HOMA-IR Result: {result}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default DashboardNav;
