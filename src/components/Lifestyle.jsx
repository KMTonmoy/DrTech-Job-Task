'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FaPlusSquare } from "react-icons/fa";

const Lifestyle = () => {
    return (
        <div className="py-12  ">
            <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className='text-[30px] mb-20 text-black font-[600] text-center flex items-center justify-center gap-5'
            >
                স্বাস্থ্যকর লাইফস্টাইল <motion.span
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className='text-blue-700'
                >
                    <FaPlusSquare />
                </motion.span>
            </motion.h1>

            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-center gap-20 w-full">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-[350px] h-[550px] rounded-lg overflow-hidden border-[10px] border-gray-200 shadow-xl"
                    >
                        <iframe
                            src="https://www.facebook.com/v21.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df07a1198daeeab59b%26domain%3Dmdabdulkaiyum.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fmdabdulkaiyum.in%252Ff058510ec63a54e3d%26relation%3Dparent.parent&container_width=342&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fmdabdulkaiyumpeacelibrary%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width="
                            width="100%"
                            height="100%"
                            className="w-full h-full bg-white"
                            frameBorder="0"
                            scrolling="yes"
                            allowFullScreen
                        ></iframe>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                        }}
                        transition={{
                            duration: 0.8,
                            type: "spring",
                            stiffness: 100
                        }}
                        whileHover={{
                            y: -3,
                            boxShadow: "0 15px 30px -5px rgba(0, 0, 0, 0.15)"
                        }}
                        className="max-w-xl bg-white p-6 rounded-lg border border-gray-100"
                    >
                        <h1 className='text-[36px] font-[600] text-[#374151] mb-2'>স্বাস্থ্যকর লাইফস্টাইল</h1>
                        <p className='text-[16px] font-[700] text-black mb-4'>
                            কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)
                        </p>

                        <ul className="mb-6 space-y-2">
                            {[
                                "১) আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।",
                                "২) আমরা রোযা রাখতে বলি।",
                                "৩) আমরা ভালো ঘুমাতে বলি।",
                                "৪) আমরা দৈনিক ব্যায়াম করতে বলি।",
                                "৫) আমরা মানসিক প্রশান্তির চর্চা করতে বলি।"
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    whileHover={{ x: 5 }}
                                    className='text-[16px] font-[400] text-gray-700'
                                >
                                    {item}
                                </motion.li>
                            ))}
                        </ul>

                        <div className="space-y-3">
                            {[
                                { text: "‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’", bold: true },
                                { text: "জেনে রাখবেন", bold: false },
                                { text: "“দুর্বল মুমিনের চেয়ে শক্তিশালী মুমিন উত্তম”", bold: true },
                                { text: "“মানুষ বড়ই আশ্চর্যজনক ও বোকা”", bold: true },
                                { text: "সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।", bold: false },
                                { text: "তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।", bold: false },
                                { text: "নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।", bold: false }
                            ].map((item, index) => (
                                <motion.p
                                    key={index}
                                    whileHover={{ scale: 1.01 }}
                                    className={`text-[16px] ${item.bold ? 'font-[600]' : 'font-[400]'} text-gray-700`}
                                >
                                    {item.text}
                                </motion.p>
                            ))}
                        </div>

                        <motion.p
                            whileHover={{ scale: 1.01 }}
                            className='mt-4 text-[16px] font-[600] text-gray-700'
                        >
                            “স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস” আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার <a href="https://www.facebook.com/mdabdulkaiyumpeacelibrary/" className='text-blue-600 hover:underline'>আব্দুল কাইয়ুম পীস লাইব্রেরী</a> এর কাছে।
                        </motion.p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Lifestyle;