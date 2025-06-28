'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const Testimonial = () => {
    const testimonials = [
        {
            id: 1,
            content: "আমি এখানে আমার অতিরিক্ত ওজনের জন্য চিকিৎসা করতে এসেছিলাম। চিকিৎসা শুরু করার আগে আমার ওজন ছিল ৭৮ কেজি। চিকিৎসা শুরুর ১ মাস ২৩ দিন পরে আমার ওজন হয় ৬৬ কেজি। আমি এখন আগের থেকে অনেক ভালো ফিল করছি।",
            name: "গুড়িয়া খাতুন",
            image: "/patient1.jpg"
        },
        {
            id: 2,
            content: "আমার আব্বুর সুগার, ও হার্টের পেসেন্ট। পিস ডাইবেটিস সেন্টারে চিকিৎসা শুরুতে সুগার ছিল ৩৮০, মেডিসিন রেগুলার খেত, মাঝে মাঝে ইনসুলিন ও নিতো। চিকিৎসার ২০ দিনের মাথায় সেটা এখন নেমে এসেছে ১৬০। এখন সুগারের মেডিসিন ছাড়ায় আছে, কোনো সমস্যা হয়না।",
            name: "Tarikul Sk",
            image: "/patient2.jpg"
        }
    ];

    const [[currentIndex, direction], setCurrentIndex] = useState([0, 0]);

    const nextTestimonial = () => {
        setCurrentIndex([(currentIndex + 1) % testimonials.length, 1]);
    };

    const prevTestimonial = () => {
        setCurrentIndex([
            (currentIndex - 1 + testimonials.length) % testimonials.length,
            -1
        ]);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? '100%' : '-100%',
            opacity: 0.5
        }),
        center: {
            x: 0,
            opacity: 1,
            transition: { duration: 0.5 }
        },
        exit: (direction) => ({
            x: direction < 0 ? '100%' : '-100%',
            opacity: 0.5,
            transition: { duration: 0.5 }
        })
    };

    return (
        <div className="py-16 px-4">
            <div className="max-w-6xl mx-auto relative">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
                >
                    সুখী হওয়ার গল্প
                </motion.h1>

                <div className="relative overflow-hidden h-[400px]">
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
                            <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-4xl mx-auto">
                                <div className="flex flex-col items-center text-center">
                                    <motion.p
                                        className="text-lg md:text-xl text-gray-700 mb-8 leading-relaxed"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        {testimonials[currentIndex].content}
                                    </motion.p>

                                    <motion.div
                                        className="flex flex-col items-center gap-4"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.5 }}
                                    >
                                        <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-blue-100">
                                            <img
                                                src={testimonials[currentIndex].image}
                                                alt={testimonials[currentIndex].name}
                                                className="w-full h-full object-cover"
                                            />
                                        </div>
                                        <h3 className="text-xl font-semibold text-gray-800">
                                            {testimonials[currentIndex].name}
                                        </h3>
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    <button
                        onClick={prevTestimonial}
                        className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                    >
                        <FiChevronLeft className="text-2xl text-gray-700" />
                    </button>

                    <button
                        onClick={nextTestimonial}
                        className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-md hover:bg-gray-100 transition-colors z-10"
                    >
                        <FiChevronRight className="text-2xl text-gray-700" />
                    </button>
                </div>

                <div className="flex justify-center mt-8 gap-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex([index, index > currentIndex ? 1 : -1])}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-blue-600 w-6' : 'bg-gray-300'}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;