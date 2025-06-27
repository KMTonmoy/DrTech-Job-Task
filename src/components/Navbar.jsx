'use client';

import Link from 'next/link';
import React, { useState } from 'react';
import { IoMdCart } from 'react-icons/io';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { href: '/হোম', label: 'হোম' },
    { href: '/সেবা', label: 'সেবা' },
    { href: '/রিভিউ', label: 'রিভিউ' },
    { href: '/আমাদের সম্পর্কে', label: 'আমাদের সম্পর্কে' },
    { href: '/যোগাযোগ', label: 'যোগাযোগ' },
    { href: '/FAQ', label: 'FAQ' },
  ];

  const actionButtons = [
    { href: '/FAQ', label: 'বুক অ্যাপয়েন্টমেন্ট' },
    { href: '/FAQ', label: 'BMI Calculator' },
    { href: '/FAQ', label: 'Download app' },
    { href: '/FAQ', label: 'লগিন করুন' },
  ];

  return (
    <div className="p-3 flex flex-wrap justify-between items-center border-b-2 border-[#E5E7EB] relative">
      <div className="w-full md:w-auto flex justify-between items-center">
        <img className="w-[150px] md:w-[220px]" src="/main_logo_fav.png" alt="Logo" />

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden text-3xl cursor-pointer md:hidden" onClick={toggleMenu}>
          <HiMenuAlt3 />
        </div>
      </div>

      {/* Desktop & Medium Screen Nav */}
      <div className="hidden md:flex flex-wrap md:flex-row md:justify-end w-full md:w-auto gap-4 text-lg font-medium mt-4 md:mt-0">
        {navLinks.map((link) => (
          <Link key={link.href} href={link.href} className="hover:text-[#0009FF] duration-300">
            {link.label}
          </Link>
        ))}

        {actionButtons.map((btn) => (
          <Link key={btn.label} href={btn.href} className="hover:text-[#0009FF] duration-300">
            <button className="bg-[#0009FF] rounded-md text-white px-4 py-1">
              {btn.label}
            </button>
          </Link>
        ))}

        <Link href="https://peacehoney.in/" className="flex items-center gap-1 hover:text-[#0009FF] duration-300">
          <span className="text-[#1A56DB] text-2xl">
            <IoMdCart />
          </span>
          Shop Now
        </Link>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-[85%] bg-white z-50 shadow-lg p-5 overflow-y-auto flex flex-col justify-between"
          >
            {/* Top: Logo and Close */}
            <div className="flex justify-between items-center mb-6">
              <img className="w-[150px]" src="/main_logo_fav.png" alt="Logo" />
              <HiX className="text-3xl cursor-pointer" onClick={toggleMenu} />
            </div>

            {/* Bottom: Links and Buttons */}
            <div className="flex flex-col gap-5 text-lg font-medium">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={toggleMenu} className="hover:text-[#0009FF]">
                  {link.label}
                </Link>
              ))}

              {actionButtons.map((btn) => (
                <Link key={btn.label} href={btn.href} onClick={toggleMenu}>
                  <button className="bg-[#0009FF] rounded-md text-white px-4 py-2 w-full">
                    {btn.label}
                  </button>
                </Link>
              ))}

              <Link href="https://peacehoney.in/" onClick={toggleMenu} className="flex items-center gap-2 hover:text-[#0009FF]">
                <span className="text-[#1A56DB] text-2xl">
                  <IoMdCart />
                </span>
                Shop Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;
