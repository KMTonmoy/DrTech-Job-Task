'use client';
import React, { useEffect, useState } from 'react';

const Footer = () => {
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    return (
        <div className={`${theme === 'dark' ? 'bg-[#1e293b] text-gray-200' : 'bg-gray-50 text-gray-800'} py-12 px-4 sm:px-6 lg:px-8 transition-all`}>
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                    <div className="max-w-xs">
                        <img className="w-32 mb-4" src="/main_logo_fav.png" alt="Peace Library Logo" />
                        <p className="text-sm leading-relaxed">
                            পীস লাইব্রেরী মূলত এটি একটি সংস্থা, ঔষধকে খাদ্য হিসেবে নয়, বরং খাদ্যকেই ঔষধ হিসেবে গ্রহণ করুন। 
                            এই স্লোগান নিয়ে আমাদের স্বাস্থ্যকর লাইফ স্টাইল এগিয়ে নিয়ে যাওয়ার চেষ্টা করছি।
                        </p>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">ঠিকানা</h3>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-start"><span className="mr-2">📍</span><span>PeaceLibrary DIABETES CENTRE Vill-Sekhpur (Chandpur Brigde) Jharkhand Border</span></li>
                            <li className="flex items-start"><span className="mr-2">📮</span><span>Po- Bhasaipaikar</span></li>
                            <li className="flex items-start"><span className="mr-2">🏢</span><span>Ps-Samserganj</span></li>
                            <li className="flex items-start"><span className="mr-2">🗺️</span><span>Dist-Murshidabad</span></li>
                            <li className="flex items-start"><span className="mr-2">🔢</span><span>Pin-742202</span></li>
                            <li className="flex items-start"><span className="mr-2">🏛️</span><span>State- West Bengal</span></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">খোলা থাকে</h3>
                        <div className="space-y-3 text-sm">
                            <p><span className="font-medium">সোম – বৃহস্পতি</span><br /><span className="text-gray-400">(6 AM – 6 PM)</span></p>
                            <p><span className="font-medium">শনি – রবি</span><br /><span className="text-gray-400">(6 AM – 6 PM)</span></p>
                            <p className="text-red-400 font-medium">শুক্রবার বন্ধ থাকে</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b-2 border-green-500 pb-2 inline-block">যোগাযোগ</h3>
                        <div className="space-y-3 text-sm">
                            <p className="flex items-center"><span className="mr-2">📞</span><span>ফোন: +91 9732 624 907</span></p>
                            <p className="flex items-center"><span className="mr-2">💬</span><span>হোয়াটসঅ্যাপ: +91 9732 624 907</span></p>
                            <div className="pt-4 space-x-4">
                                <a href="#" className="text-green-400 hover:text-green-300 hover:underline">FAQ</a>
                                <a href="#" className="text-green-400 hover:text-green-300 hover:underline">Career</a>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-300 dark:border-gray-600 my-8" />

                <div className="flex flex-col md:flex-row justify-between items-center">
                    <p className="text-sm mb-4 md:mb-0">© 2025 MD ABDUL KAIYUM - Peacelibrary. All Rights Reserved.</p>
                    <div className="flex space-x-4">
                        <a href="#" className="text-gray-600 dark:text-gray-300 hover:text-green-600">
                            <span className="sr-only">Facebook</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
