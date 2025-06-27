'use client'
import React, { useState, useEffect } from 'react';
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
    const images = ['/bannerM1.jpg', '/bannerM2.jpg', '/bannerM3.jpg'];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    };

    useEffect(() => {
        const interval = setInterval(nextSlide, 5000); // auto slide every 5s
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <div>
            <img className='md:h-[150px] w-full' src="/banner1.jpg" alt="" />
            <div className="relative w-full h-[700px] overflow-hidden">
                <AnimatePresence mode="wait">
                    <motion.img
                        key={images[currentIndex]}
                        src={images[currentIndex]}
                        alt="Slide"
                        className="w-full     object-cover absolute top-0 left-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.8 }}
                    />
                </AnimatePresence>

                <button
                    onClick={prevSlide}
                    className="absolute top-[13%] md:top-[35%] md:left-4 left-2 transform -translate-y-1/2  text-blue-600 text-3xl rounded-full p-3  shadow z-10"
                >
                    <FaChevronLeft />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute top-[13%] md:top-[35%] md:right-4 right-2 transform -translate-y-1/2  text-blue-600 text-3xl rounded-full p-3  shadow z-10"
                >
                    <FaChevronRight />
                </button>

                <div className="absolute bottom-[76%] md:bottom-[2%] left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
                    {images.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`md:w-3 w-2 md:h-3 h-2 rounded-full ${idx === currentIndex ? 'bg-blue-600 scale-125' : 'bg-gray-300'} transition`}
                        ></button>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default Banner;