'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            content:
                'আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে অনেক ভালো ফিল করছি।',
            name: 'গুড়িয়া খাতুন',
            image: '/patient1.jpg',
        },
        {
            id: 2,
            content:
                'আমার আব্বুর সুগার, ও হার্টের পেসেন্ট। পিস ডাইবেটিস সেন্টারে চিকিৎসা শুরুতে সুগার ছিল ৩৮০, মেডিসিন রেগুলার খেত, মাঝে মাঝে ইনসুলিন ও নিতো। চিকিৎসার ২০ দিনের মাথায় সেটা এখন নেমে এসেছে ১৬০। এখন সুগারের মেডিসিন ছাড়ায় আছে, কোনো সমস্যা হয়না।',
            name: 'Tarikul Sk',
            image: '/patient2.jpg',
        },
    ];

    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);
    const [theme, setTheme] = useState('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') || 'light';
        setTheme(savedTheme);
    }, []);

    const nextTestimonial = () => {
        setCurrentIndex([(currentIndex + 1) % testimonials.length, 1]);
    };

    const prevTestimonial = () => {
        setCurrentIndex([
            (currentIndex - 1 + testimonials.length) % testimonials.length,
            -1,
        ]);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
        exit: (direction) => ({
            x: direction < 0 ? 300 : -300,
            opacity: 0,
            transition: { duration: 0.5 },
        }),
    };

    const bgColor = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
    const textColor = theme === 'dark' ? 'text-white' : 'text-gray-800';
    const cardColor = theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800';

    return (
        <div className={`py-16 px-4 ${bgColor}`}>
            <div className="max-w-6xl mx-auto relative">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={`text-3xl md:text-4xl font-bold text-center mb-12 ${textColor}`}
                >
                    সুখী হওয়ার গল্প
                </motion.h1>

                <div className="relative overflow-hidden h-[430px]">
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="absolute inset-0 flex flex-col items-center justify-center"
                        >
                            <div className={`rounded-xl shadow-xl p-8 w-full max-w-4xl mx-auto transition-all duration-300 ${cardColor}`}>
                                <div className="flex flex-col items-center text-center">
                                    <motion.p
                                        className="text-lg md:text-xl mb-6 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.2 }}
                                    >
                                        “{testimonials[currentIndex].content}”
                                    </motion.p>

                                    <motion.div
                                        className="flex flex-col items-center gap-3"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.4 }}
                                    >
                                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold">{testimonials[currentIndex].name}</h3>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition z-10"
                    >
                        <FiChevronLeft className="text-2xl" />
                    </button>
                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-gray-700 p-3 rounded-full shadow-lg transition z-10"
                    >
                        <FiChevronRight className="text-2xl" />
                    </button>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-8 gap-3">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
                            className={`h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-400 w-3'
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
