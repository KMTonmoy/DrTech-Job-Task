'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const Videos = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get('/videos.json');
        // Extract just the video ID from full embed URLs
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

    fetchVideos();
  }, []);

  if (loading) return (
    <div className="text-center py-12">
      <motion.div
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="text-lg"
      >
        ভিডিও লোড হচ্ছে...
      </motion.div>
    </div>
  );

  if (error) return (
    <div className="text-center py-12 text-red-500 text-lg">
      ভিডিও লোড করতে সমস্যা হয়েছে: {error}
    </div>
  );

  return (
    <div className="py-12 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
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
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative pb-[56.25%]"> {/* 16:9 Aspect Ratio */}
                <iframe
                  src={`https://www.youtube.com/embed/${video.embedCode}?rel=0&modestbranding=1`}
                  title="স্বাস্থ্য সম্পর্কিত ভিডিও"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full rounded-t-xl"
                  loading="lazy"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;