'use client';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const faqData = [
  {
    question: 'ডায়াবেটিস কি এবং কোন ধরনের রোগ?',
    answer: 'ডায়াবেটিস আসলে কোনো রোগই নয়। কোষে যখন অতিরিক্ত চর্বি জমে, তখন কোষে আর জায়গা থাকে না। ফলে রক্তের চিনি (গ্লুকোজ) কোষে ঢুকতে পারে না। এটাকেই ডায়াবেটিস বলা হয়, এবং এটাই ডায়াবেটিসের মূল কারণ। আমাদের কাজ হলো কোষ খালি করা — এটিই হবে ডায়াবেটিসের মূল চিকিৎসা। (ডা. জাহাঙ্গীর কবির)'
  },
  {
    question: 'ডায়াবেটিসের লক্ষণ?',
    answer: 'প্রচণ্ড পিপাসা লাগা, ঘন ঘন প্রস্রাব হওয়া, ওজন কমে যাওয়া, দুর্বলতা, ক্ষুধা বেড়ে যাওয়া ইত্যাদি সাধারণ লক্ষণ।'
  },
  {
    question: 'আপনাদের ঠিকানা কোথায় ?',
    answer: 'আমাদের প্রধান কার্যালয় ঢাকার মিরপুরে অবস্থিত। বিস্তারিত ঠিকানা ও লোকেশন ম্যাপে দেওয়া আছে।'
  },
  {
    question: 'আপনাদের চিকিৎসা কি? এলোপতি নাকি হোমিওপ্যাথি নাকি আয়ুর্বেদিক?',
    answer: 'আমাদের চিকিৎসা মূলত প্রাকৃতিক খাদ্যভিত্তিক পদ্ধতি, যা লাইফস্টাইল চেঞ্জের মাধ্যমে ডায়াবেটিস নিয়ন্ত্রণে সহায়ক।'
  },
  {
    question: 'আপনাদের চিকিৎসা নিয়ে সুগার ফল্ট করবে না তো?',
    answer: 'না, আমাদের চিকিৎসা মূলত খাদ্য ও অভ্যাস সংশোধনের মাধ্যমে সুগার নিয়ন্ত্রণে সাহায্য করে। তবে চিকিৎসা শুরুর আগে অবশ্যই ডাক্তারের পরামর্শ নেওয়া উচিত।'
  },
];

const AccordionWithVideos = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [theme, setTheme] = useState('light');

  const toggleIndex = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

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

  return (
    <div className={`min-h-screen py-10 px-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-800'}`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-center">জরুরী প্রশ্নের উত্তর</h1>
        {faqData.map((item, index) => (
          <div key={index} className="mb-4 border border-gray-300 rounded">
            <button
              onClick={() => toggleIndex(index)}
              className="w-full text-left px-4 py-3 bg-gray-100 hover:bg-blue-100 font-medium text-gray-800"
            >
              {index + 1}. প্রশ্ন:- {item.question}
            </button>
            {openIndex === index && (
              <div className="px-4 py-3 text-gray-700 bg-gray-50 border-t">
                উত্তর:- {item.answer}
              </div>
            )}
          </div>
        ))}

        <div className="mt-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-10"
          >
            আমাদের ভিডিও সমূহ
          </motion.h2>

          {loading ? (
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-center text-lg"
            >
              ভিডিও লোড হচ্ছে...
            </motion.div>
          ) : error ? (
            <div className="text-center text-red-500 text-lg">
              ভিডিও লোড করতে সমস্যা হয়েছে: {error}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className={`rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                >
                  <div className="relative pb-[56.25%]">
                    <iframe
                      src={`https://www.youtube.com/embed/${video.embedCode}?rel=0&modestbranding=1`}
                      title="স্বাস্থ্য সম্পর্কিত ভিডিও"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium">{video.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AccordionWithVideos;
