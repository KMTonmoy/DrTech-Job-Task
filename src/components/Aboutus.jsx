'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Aboutus = () => {
  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="bg-white py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800"
        >
          আমাদের সম্পর্কে
        </motion.h1>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-12 rounded-lg overflow-hidden shadow-lg"
        >
          <img 
            src="/aboutbanner.jpg" 
            alt="Peace Library Diabetes Centre" 
            className="w-full h-auto"
          />
        </motion.div>

        {/* Content Container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="bg-white p-6 md:p-8 rounded-lg shadow-md"
        >
          {/* Introduction */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Peace Library Diabetes Centre: প্রকৃতির সুরে সুস্থতার আহ্বান</h2>
            <p className="text-gray-700 leading-relaxed">
              স্বাস্থ্য এমন একটি সম্পদ যা জীবনের প্রতিটি ধাপে গুরুত্বপূর্ণ। আধুনিক যুগে আমরা যে রোগগুলোর সম্মুখীন হই, তার মধ্যে ডায়াবেটিস অন্যতম। এটি শুধুমাত্র একটি শারীরিক অবস্থা নয়, বরং আমাদের দৈনন্দিন জীবনের মানসিক এবং সামাজিক দিকেও প্রভাব ফেলে। Peace Library Diabetes Centre এই চ্যালেঞ্জ মোকাবিলায় প্রাকৃতিক এবং জীবনধারা ভিত্তিক সমাধান প্রদানের লক্ষ্যে প্রতিষ্ঠিত হয়েছে।
            </p>
          </motion.section>

          {/* Goals */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">আমাদের লক্ষ্য এবং কার্যক্রম</h3>
            <p className="text-gray-700 leading-relaxed">
              Peace Library Diabetes Centre-এর লক্ষ্য হলো মানুষের স্বাস্থ্য পুনরুদ্ধার এবং তাদের জীবনযাত্রার মান উন্নত করা। আমরা বিশ্বাস করি যে, প্রাকৃতিক খাদ্যাভ্যাস এবং সঠিক জীবনধারা পরিবর্তনের মাধ্যমে রোগ নিয়ন্ত্রণ সম্ভব। প্রায় দুই বছর ধরে আমরা এই সেবা দিয়ে আসছি এবং আমাদের অনেক রোগী সফলভাবে ঔষধমুক্ত জীবন যাপন করছেন।
            </p>
          </motion.section>

          {/* Diet Importance */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">প্রাকৃতিক খাদ্যাভ্যাসের গুরুত্ব</h3>
            <p className="text-gray-700 leading-relaxed">
              প্রাকৃতিক খাদ্য আমাদের শরীরের পুষ্টি চাহিদা পূরণে গুরুত্বপূর্ণ ভূমিকা পালন করে। আমরা বিভিন্ন প্রাকৃতিক খাদ্যের মাধ্যমে ডায়াবেটিসসহ অন্যান্য রোগের চিকিৎসা করে থাকি। উদ্ভিজ্জ খাদ্য, পূর্ণ শস্য, ফলমূল এবং শাকসবজি আমাদের রোগীদের ডায়েটের গুরুত্বপূর্ণ অংশ। এসব খাবার শুধু রক্তের শর্করা নিয়ন্ত্রণেই নয়, বরং শরীরের অন্যান্য কার্যকারিতাও উন্নত করে।
            </p>
          </motion.section>

          {/* Lifestyle Changes */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">জীবনধারা পরিবর্তন</h3>
            <p className="text-gray-700 leading-relaxed">
              আমাদের সেন্টারে আমরা রোগীদের জীবনধারা পরিবর্তনের উপর বিশেষ গুরুত্ব দিই। নিয়মিত ব্যায়াম, মানসিক চাপ কমানোর কৌশল, পর্যাপ্ত ঘুম এবং ধূমপান-মদ্যপান থেকে বিরত থাকার মাধ্যমে রোগীদের সুস্থতা নিশ্চিত করা হয়। আমরা প্রতিটি রোগীর জন্য ব্যক্তিগতকৃত স্বাস্থ্য পরিকল্পনা তৈরি করি যা তাদের প্রয়োজনের সাথে সামঞ্জস্যপূর্ণ।
            </p>
          </motion.section>

          {/* Success Stories */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">সাফল্যের গল্প</h3>
            <p className="text-gray-700 leading-relaxed">
              প্রায় দুই বছর ধরে আমরা অসংখ্য রোগীকে সফলভাবে চিকিৎসা প্রদান করেছি। অনেকেই আমাদের সেবার মাধ্যমে ঔষধমুক্ত জীবন পেয়েছেন এবং এখন তারা খুব ভালো আছেন। আমাদের প্রতিটি রোগীর সাফল্য আমাদের অনুপ্রাণিত করে এবং আমাদের মিশনের প্রতি আমাদের বিশ্বাসকে আরও দৃঢ় করে।
            </p>
          </motion.section>

          {/* Future Goals */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-10"
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">ভবিষ্যৎ লক্ষ্য</h3>
            <p className="text-gray-700 leading-relaxed">
              আমাদের ভবিষ্যৎ লক্ষ্য হলো আরও বেশি মানুষের কাছে আমাদের সেবা পৌঁছে দেওয়া এবং তাদের স্বাস্থ্য পুনরুদ্ধারে সহায়তা করা। আমরা নতুন নতুন প্রাকৃতিক এবং কার্যকর পদ্ধতি আবিষ্কার এবং প্রয়োগের মাধ্যমে আমাদের সেবা উন্নত করতে অঙ্গীকারবদ্ধ।
            </p>
          </motion.section>

          {/* Conclusion */}
          <motion.section
            variants={sectionVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h3 className="text-xl font-bold mb-4 text-gray-800 border-l-4 border-green-500 pl-4">সমাপ্তি</h3>
            <p className="text-gray-700 leading-relaxed">
              Peace Library Diabetes Centre প্রাকৃতিক পদ্ধতির মাধ্যমে মানুষের সুস্থতা পুনরুদ্ধারে প্রতিশ্রুতিবদ্ধ। আমরা বিশ্বাস করি যে, সঠিক খাদ্যাভ্যাস এবং জীবনধারা পরিবর্তনের মাধ্যমে স্বাস্থ্য সমস্যা মোকাবিলা করা সম্ভব। আমাদের সেবা গ্রহণ করে যারা ঔষধমুক্ত জীবন যাপন করছেন, তারা আমাদের প্রচেষ্টার সাক্ষ্য বহন করেন। আমরা নিরলসভাবে কাজ করে যাচ্ছি যাতে আরও বেশি মানুষ সুস্থ এবং সুখী জীবন যাপন করতে পারেন।
            </p>
          </motion.section>
        </motion.div>
      </div>
    </div>
  );
};

export default Aboutus;