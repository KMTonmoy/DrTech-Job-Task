'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/videos.json');
        const processedVideos = response.data.map(video => ({
          ...video,
          embedCode: video.embedCode.split('/embed/')[1].split('?')[0]
        }));
        setVideos(processedVideos);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    fetchVideos();
  }, []);

  if (loading) return (
    <div className={`text-center py-12 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className={`text-lg ${theme === 'dark' ? 'text-gray-300' : ''}`}
      >
        ভিডিও লোড হচ্ছে...
      </motion.div>
    </div>
  );

  if (error) return (
    <div className={`text-center py-12 text-lg ${theme === 'dark' ? 'bg-gray-900 text-red-400' : 'text-red-500'}`}>
      ভিডিও লোড করতে সমস্যা হয়েছে: {error}
    </div>
  );

  return (
    <div className={`py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : ''}`}>
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl font-bold text-center mb-12 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}
        >
          আমাদের ভিডিও সমূহ
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1
              }}
              whileHover={{ scale: 1.02 }}
              className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
            >
              <div className="relative pb-[56.25%]">
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedCode}?rel=0&modestbranding=1`}
                  title="স্বাস্থ্য সম্পর্কিত ভিডিও"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                  loading="lazy"
                />
              </div>
              <div className={`p-4 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-800'}`}>
                <h3 className="font-medium">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;