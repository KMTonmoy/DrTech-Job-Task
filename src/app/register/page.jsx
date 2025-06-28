'use client';
import React from 'react';

const Register = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">রেজিস্ট্রেশন করুন</h2>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">নামঃ *</label>
              <input type="text" placeholder="নাম" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">পদবীঃ *</label>
              <input type="text" placeholder="নামের পদবী" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">নাম্বারঃ *</label>
              <input type="tel" placeholder="আপনার নাম্বার" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">নাম্বারঃ (অন্যান্য)</label>
              <input type="tel" placeholder="আপনার নাম্বার" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">আপনার দেশ নির্বাচন করুনঃ *</label>
              <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">-- দেশ নির্বাচন করুন --</option>
                <option value="bd">বাংলাদেশ</option>
                <option value="in">ভারত</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ইমেইলঃ</label>
              <input type="email" placeholder="আপনার ইমেইল" className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">পাসওয়ার্ডঃ *</label>
              <input type="password" placeholder="পাসওয়ার্ড দিন" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">পুনরায়ঃ *</label>
              <input type="password" placeholder="পাসওয়ার্ড পুনরায় দিন" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">আপনার জন্ম তারিখ দিনঃ *</label>
              <input type="date" required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">আমি একজনঃ *</label>
              <select required className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">-- নির্বাচন করুন --</option>
                <option value="male">পুরুষ</option>
                <option value="female">মহিলা</option>
                <option value="other">অন্যান্য</option>
              </select>
            </div>
          </div>
          <p className="text-sm text-red-600">* দেওয়ায় ঘর গুলো পুরোন করা বাধ্যতামূলক</p>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
            রেজিস্টেশন
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
