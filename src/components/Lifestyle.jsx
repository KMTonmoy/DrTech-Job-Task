'use client'
import React from 'react';
import { motion } from 'framer-motion';

const Lifestyle = () => {
    return (
        <div>


            <h1 className='text-[30px] mb-20 text-black font-[600] text-center'>স্বাস্থ্যকর লাইফস্টাইল</h1>
            <div className='  mx-auto  flex items-center  justify-center px-4'>
                <div className='flex justify-center flex-col md:flex-row items-center gap-10 w-full   mx-auto'>
                    {/* Phone Display */}
                    <div className='w-[350px] h-[550px] border-[10px] border-black rounded-[30px] relative overflow-hidden shadow-2xl'>
                        <iframe
                            src="https://www.facebook.com/v21.0/plugins/page.php?adapt_container_width=true&app_id=&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df07a1198daeeab59b%26domain%3Dmdabdulkaiyum.in%26is_canvas%3Dfalse%26origin%3Dhttps%253A%252F%252Fmdabdulkaiyum.in%252Ff058510ec63a54e3d%26relation%3Dparent.parent&container_width=342&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fmdabdulkaiyumpeacelibrary%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false&tabs=timeline&width="
                            width="100%"
                            height="100%"
                            className='absolute top-0 left-0 w-full h-full'
                            frameBorder="0"
                            scrolling="yes"
                            allowFullScreen
                        ></iframe>
                    </div>

                    {/* Lifestyle Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className='max-w-xl bg-white p-6 rounded-lg shadow-xl text-justify'
                    >
                        <h1 className='text-xl font-bold mb-2 text-center'>স্বাস্থ্যকর লাইফস্টাইল</h1>
                        <p>কি আছে আমাদের লাইফ স্টাইলে? কেন ভাল হয়ে যায় লাইফ স্টাইল ও লাইফ টাইম ডিসিস গুলো। (সুস্থতার মূল মন্ত্রে সবচেয়ে গুরুত্বপূর্ণ যে বিষয়টি তা হল খাদ্যাভ্যাস)</p>

                        <ul className='list-disc pl-5 my-3'>
                            <li>১) আমরা স্বাস্থ্যকর খাদ্য খেতে বলি।</li>
                            <li>২) আমরা রোযা রাখতে বলি।</li>
                            <li>৩) আমরা ভালো ঘুমাতে বলি।</li>
                            <li>৪) আমরা দৈনিক ব্যায়াম করতে বলি।</li>
                            <li>৫) আমরা মানসিক প্রশান্তির চর্চা করতে বলি।</li>
                        </ul>

                        <p className='mt-2'>‘সুস্থতা সৃষ্টিকর্তার নেয়ামত সুতরাং তাকে ধরে রাখুন’</p>
                        <p>জেনে রাখবেন</p>
                        <p>“দুর্বল মুমিনের চেয়ে শক্তিশালী মুমিন উত্তম”</p>

                        <p>“মানুষ বড়ই আশ্চর্যজনক ও বোকা”</p>
                        <p>সে সম্পদ অর্জন করতে গিয়ে স্বাস্থ্য হারায়।</p>
                        <p>তারপর আবার সেই স্বাস্থ্য ফিরে পেতে সম্পদ নষ্ট করে।</p>
                        <p>নিজেকে ভালোবাসুন, নিজেকে সময় দিন। আপনার স্বাস্থ্য‌ই আপনার সম্পদ, একথা বুঝে নিন।</p>

                        <p className='mt-2'>“স্বাস্থ্যকর লাইফস্টাইল সুস্থ জীবন” “হয়তো ডিসিপ্লিন নয়তো ডিসিস” আপনার লাইফস্টাইল মডিফিকেশন করতে পরামর্শ নিন লাইফস্টাইল মডিফায়ার <a href="https://www.facebook.com/mdabdulkaiyumpeacelibrary/" className='text-blue-500'>আব্দুল কাইয়ুম পীস লাইব্রেরী</a> এর কাছে।</p>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Lifestyle;
