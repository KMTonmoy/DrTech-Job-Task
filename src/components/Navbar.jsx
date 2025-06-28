'use client';

import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { IoMdCart } from 'react-icons/io';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState('light');
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
    window.location.reload();
  };

  const handleScroll = (e, id) => {
    e.preventDefault();
    if (pathname !== '/') {
      router.push('/#' + id);
    } else {
      const target = document.getElementById(id);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', '/#' + id);
      }
    }
    setIsOpen(false);
  };

  const navLinks = [
    { href: 'home', label: 'হোম' },
    { href: 'our_services', label: 'সেবা' },
    { href: 'review', label: 'রিভিউ' },
    { href: 'about', label: 'আমাদের সম্পর্কে' },
    { href: 'contact', label: 'যোগাযোগ' },
    { href: 'FAQ', label: 'FAQ', external: true },
  ];

  const actionButtons = [
    { href: '/appointment', label: 'বুক অ্যাপয়েন্টমেন্ট' },
    { href: '/bmi', label: 'BMI Calculator' },
    { href: '/download', label: 'Download app' },
  ];

  const themeToggle = (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 rounded-full bg-gray-200 dark:bg-gray-700 transition-colors duration-500 focus:outline-none"
    >
      <motion.div
        className="absolute top-1 left-1 w-6 h-6 rounded-full bg-white dark:bg-yellow-300 shadow-md flex items-center justify-center"
        initial={false}
        animate={{
          x: theme === 'dark' ? 26 : 0,
          transition: { type: 'spring', stiffness: 700, damping: 30 }
        }}
      >
        {theme === 'dark' ? (
          <FiMoon className="text-gray-800 w-4 h-4" />
        ) : (
          <FiSun className="text-yellow-500 w-4 h-4" />
        )}
      </motion.div>
    </button>
  );

  return (
    <div className={`p-3 sticky top-0 z-50 flex flex-wrap justify-between items-center border-b-2 ${theme === 'dark' ? 'border-gray-700 bg-gray-900 text-white' : 'border-[#E5E7EB] bg-white text-black'} relative`}>
      <div className="w-full md:w-auto flex justify-between items-center">
        <img className="w-[150px] md:w-[220px]" src="/main_logo_fav.png" alt="Logo" />
        <div className="lg:hidden text-3xl cursor-pointer md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <HiMenuAlt3 className={`${theme === 'dark' ? 'text-white' : 'text-black'}`} />
        </div>
      </div>

      <div className="hidden md:flex flex-wrap md:flex-row md:justify-end w-full md:w-auto gap-4 text-lg font-medium mt-4 md:mt-0 items-center">
        {navLinks.map((link) =>
          link.external ? (
            <Link key={link.href} href={`/${link.href}`}>
              {link.label}
            </Link>
          ) : (
            <a
              key={link.href}
              href={`/#${link.href}`}
              onClick={(e) => handleScroll(e, link.href)}
              className={`hover:text-[#0009FF] ${theme === 'dark' ? 'dark:hover:text-blue-400 dark:text-gray-300' : ''}`}
            >
              {link.label}
            </a>
          )
        )}

        {actionButtons.map((btn) => (
          <Link key={btn.label} href={btn.href}>
            <button className="bg-[#0009FF] dark:bg-blue-600 rounded-md text-white px-4 py-1 hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">
              {btn.label}
            </button>
          </Link>
        ))}

        {themeToggle}

        <Link href="/login">
          <button className="bg-[#0009FF] dark:bg-blue-600 rounded-md text-white px-4 py-1 hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">
            লগিন করুন
          </button>
        </Link>

        <Link href="https://peacehoney.in/">
          <div className="flex items-center gap-1 hover:text-[#0009FF]">
            <span className="text-[#1A56DB] text-2xl">
              <IoMdCart />
            </span>
            Shop Now
          </div>
        </Link>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`fixed top-0 right-0 h-full w-[85%] ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} z-50 shadow-lg p-5 overflow-y-auto flex flex-col justify-between`}
          >
            <div className="flex justify-between items-center mb-6">
              <img className="w-[150px]" src="/main_logo_fav.png" alt="Logo" />
              <HiX className="text-3xl cursor-pointer" onClick={() => setIsOpen(false)} />
            </div>

            <div className="flex flex-col gap-5 text-lg font-medium">
              {navLinks.map((link) =>
                link.external ? (
                  <Link key={link.href} href={`/${link.href}`} onClick={() => setIsOpen(false)}>
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={`/#${link.href}`}
                    onClick={(e) => handleScroll(e, link.href)}
                    className={`hover:text-[#0009FF] ${theme === 'dark' ? 'dark:hover:text-blue-400 dark:text-gray-300' : ''}`}
                  >
                    {link.label}
                  </a>
                )
              )}

              {actionButtons.map((btn) => (
                <Link key={btn.label} href={btn.href} onClick={() => setIsOpen(false)}>
                  <button className="bg-[#0009FF] dark:bg-blue-600 rounded-md text-white px-4 py-2 w-full hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">
                    {btn.label}
                  </button>
                </Link>
              ))}

              <div className="flex justify-between items-center p-2">
                <span className={`${theme === 'dark' ? 'dark:text-gray-300' : ''}`}>Theme</span>
                {themeToggle}
              </div>

              <Link href="/login" onClick={() => setIsOpen(false)}>
                <button className="bg-[#0009FF] dark:bg-blue-600 rounded-md text-white px-4 py-2 w-full hover:bg-blue-700 dark:hover:bg-blue-700 transition-colors">
                  লগিন করুন
                </button>
              </Link>

              <Link href="https://peacehoney.in/" onClick={() => setIsOpen(false)}>
                <div className="flex items-center gap-2 hover:text-[#0009FF]">
                  <span className="text-[#1A56DB] text-2xl">
                    <IoMdCart />
                  </span>
                  Shop Now
                </div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
