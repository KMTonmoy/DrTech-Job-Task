'use client';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { FaRegUserCircle } from "react-icons/fa";
import Navbar from '@/components/Navbar';
import { FiSun, FiMoon } from 'react-icons/fi';
import toast, { Toaster } from 'react-hot-toast';

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

 

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === 'admin@gmail.com' && password === 'admin123') {
      toast.success('লগিন সফল হয়েছে!');
      router.push('/dashboard');
    } else {
      toast.error('ভুল ইমেইল বা পাসওয়ার্ড!');
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />
      
      <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'} min-h-screen flex flex-col justify-center py-12 sm:px-6 lg:px-8`}>
        <div className="sm:mx-auto sm:w-full sm:max-w-md relative">
         

          <div className="text-center">
            <h2 className="mt-6 text-3xl font-extrabold flex items-center justify-center gap-3">
              লগিন করুন <FaRegUserCircle className='text-blue-500 text-2xl' />
            </h2>
          </div>

          <div className={`mt-8 py-8 px-6 shadow sm:rounded-lg sm:px-10 transition-all duration-300
            ${theme === 'dark' ? 'bg-[#1e293b]' : 'bg-white'}`}>
            <form className="space-y-6" onSubmit={handleLogin}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium">
                  ফোন নম্বর বা ইমেইলঃ
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm border focus:outline-none sm:text-sm
                    ${theme === 'dark'
                      ? 'bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:ring-blue-400'
                      : 'border-gray-300 placeholder-gray-400 focus:ring-indigo-500'}`}
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium">
                  পাসওয়ার্ডঃ
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className={`mt-1 block w-full px-3 py-2 rounded-md shadow-sm border focus:outline-none sm:text-sm
                    ${theme === 'dark'
                      ? 'bg-slate-800 border-slate-600 text-white placeholder-gray-400 focus:ring-blue-400'
                      : 'border-gray-300 placeholder-gray-400 focus:ring-indigo-500'}`}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                  />
                  <label htmlFor="remember-me" className="ml-2 block text-sm">
                    মনে রাখুন
                  </label>
                </div>
                <div className="text-sm">
                  <a href="#" className="font-medium text-blue-500 hover:underline">
                    পাসওয়ার্ড ভুলে গিয়েছেন?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                className={`w-full py-2 px-4 rounded-md font-medium shadow-sm text-white focus:outline-none transition 
                  ${theme === 'dark' ? 'bg-yellow-400 hover:bg-yellow-500 text-black' : 'bg-blue-600 hover:bg-blue-700'}`}
              >
                লগিন করুন
              </button>
            </form>

            <p className="mt-6 text-center text-sm">
              অথবা কোনো একাউন্ট না থাকলে{' '}
              <a href="/register" className="text-blue-500 hover:underline">
                এখন রেজিস্টার করুন
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
