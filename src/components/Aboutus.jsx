'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaHeartbeat, FaBookMedical, FaRunning } from 'react-icons/fa';

const Aboutus = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const sections = [
    {
      icon: <FaLeaf className="text-3xl text-green-500" />,
      title: "Peace Library Diabetes Centre",
      content: "প্রকৃতির সুরে সুস্থতার আহ্বান স্বাস্থ্য এমন একটি সম্পদ যা জীবনের প্রতিটি ধাপে গুরুত্বপূর্ণ। আধুনিক যুগে আমরা যে রোগগুলোর সম্মুখীন হই, তার মধ্যে ডায়াবেটিস অন্যতম। এটি শুধুমাত্র একটি শারীরিক অবস্থা নয়, বরং আমাদের দৈনন্দিন জীবনের মানসিক এবং সামাজিক দিকেও প্রভাব ফেলে। Peace Library Diabetes Centre এই চ্যালেঞ্জ মোকাবিলায় প্রাকৃতিক এবং জীবনধারা ভিত্তিক সমাধান প্রদানের লক্ষ্যে প্রতিষ্ঠিত হয়েছে।"
    },
    {
      icon: <FaHeartbeat className="text-3xl text-red-500" />,
      title: "আমাদের লক্ষ্য এবং কার্যক্রম",
      content: "Peace Library Diabetes Centre-এর লক্ষ্য হলো মানুষের স্বাস্থ্য পুনরুদ্ধার এবং তাদের জীবনযাত্রার মান উন্নত করা। আমরা বিশ্বাস করি যে, প্রাকৃতিক খাদ্যাভ্যাস এবং সঠিক জীবনধারা পরিবর্তনের মাধ্যমে রোগ নিয়ন্ত্রণ সম্ভব। প্রায় দুই বছর ধরে আমরা এই সেবা দিয়ে আসছি এবং আমাদের অনেক রোগী সফলভাবে ঔষধমুক্ত জীবন যাপন করছেন।"
    },
    {
      icon: <FaBookMedical className="text-3xl text-blue-500" />,
      title: "প্রাকৃতিক খাদ্যাভ্যাসের গুরুত্ব",
      content: "প্রাকৃতিক খাদ্য আমাদের শরীরের পুষ্টি চাহিদা পূরণে গুরুত্বপূর্ণ ভূমিকা পালন করে। আমরা বিভিন্ন প্রাকৃতিক খাদ্যের মাধ্যমে ডায়াবেটিসসহ অন্যান্য রোগের চিকিৎসা করে থাকি। উদ্ভিজ্জ খাদ্য, পূর্ণ শস্য, ফলমূল এবং শাকসবজি আমাদের রোগীদের ডায়েটের গুরুত্বপূর্ণ অংশ। এসব খাবার শুধু রক্তের শর্করা নিয়ন্ত্রণেই নয়, বরং শরীরের অন্যান্য কার্যকারিতাও উন্নত করে।"
    },
    {
      icon: <FaRunning className="text-3xl text-yellow-500" />,
      title: "জীবনধারা পরিবর্তন",
      content: "আমাদের সেন্টারে আমরা রোগীদের জীবনধারা পরিবর্তনের উপর বিশেষ গুরুত্ব দিই। নিয়মিত ব্যায়াম, মানসিক চাপ কমানোর কৌশল, পর্যাপ্ত ঘুম এবং ধূমপান-মদ্যপান থেকে বিরত থাকার মাধ্যমে রোগীদের সুস্থতা নিশ্চিত করা হয়। আমরা প্রতিটি রোগীর জন্য ব্যক্তিগতকৃত স্বাস্থ্য পরিকল্পনা তৈরি করি যা তাদের প্রয়োজনের সাথে সামঞ্জস্যপূর্ণ।"
    }
  ];

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="max-w-6xl mx-auto px-4 py-16"
      >
        <motion.h1
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          আমাদের সম্পর্কে
        </motion.h1>

        <motion.div variants={fadeInUp} className="mb-16">
          <div className="relative h-64 md:h-96 rounded-xl overflow-hidden shadow-xl">
            <img 
              src="/aboutbanner.jpg" 
              alt="Peace Library Diabetes Centre" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
              <motion.h2 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-2xl md:text-4xl font-bold text-white text-center px-4"
              >
                প্রকৃতির সুরে সুস্থতার আহ্বান
              </motion.h2>
            </div>
          </div>
        </motion.div>

        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-6">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex-shrink-0"
                >
                  {section.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
                    {section.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    {section.content}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          variants={fadeInUp}
          className="mt-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-xl p-8 text-white shadow-xl"
        >
          <h3 className="text-2xl font-bold mb-4">সাফল্যের গল্প</h3>
          <p className="mb-6">
            প্রায় দুই বছর ধরে আমরা অসংখ্য রোগীকে সফলভাবে চিকিৎসা প্রদান করেছি। অনেকেই আমাদের সেবার মাধ্যমে ঔষধমুক্ত জীবন পেয়েছেন এবং এখন তারা খুব ভালো আছেন। আমাদের প্রতিটি রোগীর সাফল্য আমাদের অনুপ্রাণিত করে এবং আমাদের মিশনের প্রতি আমাদের বিশ্বাসকে আরও দৃঢ় করে।
          </p>
          <h3 className="text-2xl font-bold mb-4">ভবিষ্যৎ লক্ষ্য</h3>
          <p>
            আমাদের ভবিষ্যৎ লক্ষ্য হলো আরও বেশি মানুষের কাছে আমাদের সেবা পৌঁছে দেওয়া এবং তাদের স্বাস্থ্য পুনরুদ্ধারে সহায়তা করা। আমরা নতুন নতুন প্রাকৃতিক এবং কার্যকর পদ্ধতি আবিষ্কার এবং প্রয়োগের মাধ্যমে আমাদের সেবা উন্নত করতে অঙ্গীকারবদ্ধ।
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInUp}
          className="mt-12 text-center"
        >
          <p className="text-lg md:text-xl text-gray-700 italic">
            "Peace Library Diabetes Centre প্রাকৃতিক পদ্ধতির মাধ্যমে মানুষের সুস্থতা পুনরুদ্ধারে প্রতিশ্রুতিবদ্ধ। আমরা বিশ্বাস করি যে, সঠিক খাদ্যাভ্যাস এবং জীবনধারা পরিবর্তনের মাধ্যমে স্বাস্থ্য সমস্যা মোকাবিলা করা সম্ভব।"
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Aboutus;