'use client';
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const bg = theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50';
  const text = theme === 'dark' ? 'text-white' : 'text-gray-800';
  const card = theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-700';

  return (
    <div className={`py-12 ${bg}`}>
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-3xl md:text-4xl font-bold text-center mb-12 ${text}`}
        >
          আমাদের সম্পর্কে
        </motion.h1>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-xl overflow-hidden shadow-lg"
        >
          <img
            src="/aboutbanner.jpg"
            alt="Peace Library Diabetes Centre"
            className="w-full h-auto object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className={`p-6 md:p-8 rounded-xl shadow-xl ${card}`}
        >
          {[
            {
              title: 'Peace Library Diabetes Centre: প্রকৃতির সুরে সুস্থতার আহ্বান',
              content:
                'স্বাস্থ্য এমন একটি সম্পদ যা জীবনের প্রতিটি ধাপে গুরুত্বপূর্ণ। আধুনিক যুগে আমরা যে রোগগুলোর সম্মুখীন হই, তার মধ্যে ডায়াবেটিস অন্যতম। এটি শুধুমাত্র একটি শারীরিক অবস্থা নয়, বরং আমাদের দৈনন্দিন জীবনের মানসিক এবং সামাজিক দিকেও প্রভাব ফেলে। Peace Library Diabetes Centre এই চ্যালেঞ্জ মোকাবিলায় প্রাকৃতিক এবং জীবনধারা ভিত্তিক সমাধান প্রদানের লক্ষ্যে প্রতিষ্ঠিত হয়েছে।',
            },
            {
              title: 'আমাদের লক্ষ্য এবং কার্যক্রম',
              content:
                'Peace Library Diabetes Centre-এর লক্ষ্য হলো মানুষের স্বাস্থ্য পুনরুদ্ধার এবং তাদের জীবনযাত্রার মান উন্নত করা। আমরা বিশ্বাস করি যে, প্রাকৃতিক খাদ্যাভ্যাস এবং সঠিক জীবনধারা পরিবর্তনের মাধ্যমে রোগ নিয়ন্ত্রণ সম্ভব। প্রায় দুই বছর ধরে আমরা এই সেবা দিয়ে আসছি এবং আমাদের অনেক রোগী সফলভাবে ঔষধমুক্ত জীবন যাপন করছেন।',
            },
            {
              title: 'প্রাকৃতিক খাদ্যাভ্যাসের গুরুত্ব',
              content:
                'প্রাকৃতিক খাদ্য আমাদের শরীরের পুষ্টি চাহিদা পূরণে গুরুত্বপূর্ণ ভূমিকা পালন করে। আমরা বিভিন্ন প্রাকৃতিক খাদ্যের মাধ্যমে ডায়াবেটিসসহ অন্যান্য রোগের চিকিৎসা করে থাকি। উদ্ভিজ্জ খাদ্য, পূর্ণ শস্য, ফলমূল এবং শাকসবজি আমাদের রোগীদের ডায়েটের গুরুত্বপূর্ণ অংশ।',
            },
            {
              title: 'জীবনধারা পরিবর্তন',
              content:
                'আমাদের সেন্টারে আমরা রোগীদের জীবনধারা পরিবর্তনের উপর বিশেষ গুরুত্ব দিই। নিয়মিত ব্যায়াম, মানসিক চাপ কমানোর কৌশল, পর্যাপ্ত ঘুম এবং ধূমপান-মদ্যপান থেকে বিরত থাকার মাধ্যমে রোগীদের সুস্থতা নিশ্চিত করা হয়।',
            },
            {
              title: 'সাফল্যের গল্প',
              content:
                'প্রায় দুই বছর ধরে আমরা অসংখ্য রোগীকে সফলভাবে চিকিৎসা প্রদান করেছি। অনেকেই আমাদের সেবার মাধ্যমে ঔষধমুক্ত জীবন পেয়েছেন এবং এখন তারা খুব ভালো আছেন।',
            },
            {
              title: 'ভবিষ্যৎ লক্ষ্য',
              content:
                'আমাদের ভবিষ্যৎ লক্ষ্য হলো আরও বেশি মানুষের কাছে আমাদের সেবা পৌঁছে দেওয়া এবং তাদের স্বাস্থ্য পুনরুদ্ধারে সহায়তা করা।',
            },
            {
              title: 'সমাপ্তি',
              content:
                'Peace Library Diabetes Centre প্রাকৃতিক পদ্ধতির মাধ্যমে মানুষের সুস্থতা পুনরুদ্ধারে প্রতিশ্রুতিবদ্ধ। আমরা বিশ্বাস করি যে, সঠিক খাদ্যাভ্যাস এবং জীবনধারা পরিবর্তনের মাধ্যমে স্বাস্থ্য সমস্যা মোকাবিলা করা সম্ভব।',
            },
          ].map((section, index) => (
            <motion.section
              key={index}
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              className="mb-10"
            >
              <h3 className="text-xl font-bold mb-4 border-l-4 border-green-500 pl-4">{section.title}</h3>
              <p className="leading-relaxed">{section.content}</p>
            </motion.section>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;
