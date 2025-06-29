'use client'
import React, { useState } from 'react';
import { FaEnvelope, FaSearch, FaFilter, FaReply, FaTrash, FaBell, FaBellSlash, FaPaperclip } from 'react-icons/fa';
import { MdMarkEmailRead, MdOutlineMarkEmailUnread } from 'react-icons/md';

const AdminMessage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'ডাঃ আব্দুল কাইয়ুম',
      subject: 'সিস্টেম আপডেট নোটিফিকেশন',
      content: 'আগামীকাল রাত ১২টা থেকে ২টা পর্যন্ত সিস্টেম মেইন্টেনেন্সের জন্য বন্ধ থাকবে। অনুগ্রহ করে আপনার সকল কাজ সেভ করে রাখুন।',
      date: '২০২৩-১১-১৫ ১০:৩০ AM',
      read: false,
      important: true,
      category: 'notification'
    },
    {
      id: 2,
      sender: 'সাপোর্ট টিম',
      subject: 'আপনার টিকিট #4567 এর উত্তর',
      content: 'আপনার জমা দেওয়া টিকিটের বিষয়ে আমরা সমাধান করে ফেলেছি। অনুগ্রহ করে নিশ্চিত করুন যে সমস্যাটি সমাধান হয়েছে কিনা।',
      date: '২০২৩-১১-১৪ ০৩:১৫ PM',
      read: true,
      important: false,
      category: 'support'
    },
    {
      id: 3,
      sender: 'ফার্মাসিস্ট',
      subject: 'স্টক আউট ওষুধ',
      content: 'অ্যামোক্সিসিলিন ৫০০mg ক্যাপসুলের স্টক শেষ হয়ে গেছে। নতুন স্টক আসতে ৩-৪ কর্মদিবস সময় লাগবে।',
      date: '২০২৩-১১-১৩ ১১:২০ AM',
      read: false,
      important: true,
      category: 'inventory'
    },
    {
      id: 4,
      sender: 'এডমিন টিম',
      subject: 'মাসিক মিটিং রিমাইন্ডার',
      content: 'এই মাসের স্টাফ মিটিং আগামীকাল সকাল ১০টায় কনফারেন্স রুমে অনুষ্ঠিত হবে। সকলের উপস্থিতি কাম্য।',
      date: '২০২৩-১১-১২ ০৯:০০ AM',
      read: true,
      important: false,
      category: 'meeting'
    },
    {
      id: 5,
      sender: 'অ্যাকাউন্টস বিভাগ',
      subject: 'বেতন স্লিপ নভেম্বর ২০২৩',
      content: 'নভেম্বর মাসের বেতন স্লিপ আপলোড করা হয়েছে। অনুগ্রহ করে আপনার অ্যাকাউন্ট চেক করুন।',
      date: '২০২৩-১১-১০ ০৪:৪৫ PM',
      read: false,
      important: true,
      category: 'finance'
    }
  ]);

  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyContent, setReplyContent] = useState('');

  const categories = [
    { value: 'all', label: 'সব মেসেজ' },
    { value: 'notification', label: 'নোটিফিকেশন' },
    { value: 'support', label: 'সাপোর্ট' },
    { value: 'inventory', label: 'ইনভেন্টরি' },
    { value: 'meeting', label: 'মিটিং' },
    { value: 'finance', label: 'ফাইন্যান্স' }
  ];

  const filteredMessages = messages.filter(message => {
    const matchesSearch = message.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         message.sender.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = selectedFilter === 'all' || message.category === selectedFilter;
    return matchesSearch && matchesFilter;
  });

  const markAsRead = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, read: true } : msg
    ));
  };

  const toggleImportant = (id) => {
    setMessages(messages.map(msg => 
      msg.id === id ? { ...msg, important: !msg.important } : msg
    ));
  };

  const deleteMessage = (id) => {
    setMessages(messages.filter(msg => msg.id !== id));
    if (selectedMessage && selectedMessage.id === id) {
      setSelectedMessage(null);
    }
  };

  const handleReply = () => {
    alert('রিপ্লাই সাবমিট করা হয়েছে!');
    setReplyContent('');
  };

  return (
    <div className="flex w-full flex-col md:flex-row h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-64 bg-white border-r border-gray-200 p-4">
        <h2 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
          <FaEnvelope className="mr-2 text-blue-600" /> মেসেজ
        </h2>
        
        <div className="space-y-2">
          <div className="flex items-center p-2 rounded-md bg-blue-50 text-blue-600 font-medium">
            <FaEnvelope className="mr-2" /> ইনবক্স ({messages.length})
          </div>
          <div className="flex items-center p-2 rounded-md hover:bg-gray-100">
            <MdOutlineMarkEmailUnread className="mr-2" /> আনরিড ({messages.filter(m => !m.read).length})
          </div>
          <div className="flex items-center p-2 rounded-md hover:bg-gray-100">
            <FaBell className="mr-2 text-yellow-500" /> গুরুত্বপূর্ণ ({messages.filter(m => m.important).length})
          </div>
          <div className="flex items-center p-2 rounded-md hover:bg-gray-100">
            <FaPaperclip className="mr-2" /> অ্যাটাচমেন্ট
          </div>
          <div className="flex items-center p-2 rounded-md hover:bg-gray-100">
            <FaTrash className="mr-2" /> ট্রাশ
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Message List */}
        <div className={`${selectedMessage ? 'hidden md:block md:w-1/3' : 'w-full'} border-r border-gray-200 bg-white`}>
          <div className="p-4 border-b border-gray-200">
            <div className="relative mb-4">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaSearch className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="মেসেজ খুঁজুন..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            <select
              className="w-full p-2 border border-gray-300 rounded-md bg-white text-sm"
              value={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
            >
              {categories.map(category => (
                <option key={category.value} value={category.value}>{category.label}</option>
              ))}
            </select>
          </div>

          <div className="overflow-y-auto" style={{ maxHeight: 'calc(100vh - 180px)' }}>
            {filteredMessages.length > 0 ? (
              filteredMessages.map(message => (
                <div 
                  key={message.id}
                  className={`p-4 border-b border-gray-200 cursor-pointer hover:bg-gray-50 ${!message.read ? 'bg-blue-50' : ''} ${selectedMessage?.id === message.id ? 'bg-gray-100' : ''}`}
                  onClick={() => {
                    setSelectedMessage(message);
                    markAsRead(message.id);
                  }}
                >
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className={`font-medium ${!message.read ? 'text-blue-800' : 'text-gray-800'}`}>
                        {message.important && <FaBell className="inline mr-1 text-yellow-500" />}
                        {message.subject}
                      </h3>
                      <p className="text-sm text-gray-600 truncate">{message.content}</p>
                    </div>
                    <div className="ml-2 flex space-x-2">
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleImportant(message.id);
                        }}
                        className="text-gray-400 hover:text-yellow-500"
                      >
                        {message.important ? <FaBell className="text-yellow-500" /> : <FaBellSlash />}
                      </button>
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          deleteMessage(message.id);
                        }}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                  <div className="mt-2 flex justify-between items-center">
                    <span className="text-xs text-gray-500">{message.sender}</span>
                    <span className="text-xs text-gray-500">{message.date}</span>
                  </div>
                </div>
              ))
            ) : (
              <div className="p-8 text-center text-gray-500">
                কোন মেসেজ পাওয়া যায়নি
              </div>
            )}
          </div>
        </div>

        {/* Message Detail View */}
        {selectedMessage ? (
          <div className={`${selectedMessage ? 'w-full md:w-2/3' : 'hidden'} bg-white`}>
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-gray-800">{selectedMessage.subject}</h2>
                <button 
                  className="md:hidden text-gray-500 hover:text-gray-700"
                  onClick={() => setSelectedMessage(null)}
                >
                  &times;
                </button>
              </div>

              <div className="flex justify-between items-center mb-4">
                <div>
                  <span className="font-medium text-gray-700">প্রেরক:</span> {selectedMessage.sender}
                </div>
                <div className="text-gray-500 text-sm">{selectedMessage.date}</div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="whitespace-pre-line">{selectedMessage.content}</p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <h3 className="font-medium mb-2">রিপ্লাই করুন</h3>
                <textarea
                  className="w-full p-3 border border-gray-300 rounded-md mb-3"
                  rows="4"
                  placeholder="আপনার রিপ্লাই লিখুন..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                ></textarea>
                <div className="flex justify-end space-x-3">
                  <button 
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
                    onClick={() => setReplyContent('')}
                  >
                    বাতিল
                  </button>
                  <button 
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center"
                    onClick={handleReply}
                  >
                    <FaReply className="mr-2" /> রিপ্লাই
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="hidden md:flex md:w-2/3 items-center justify-center bg-gray-50">
            <div className="text-center text-gray-500">
              <FaEnvelope className="mx-auto text-4xl mb-4 text-gray-300" />
              <p className="text-lg">একটি মেসেজ সিলেক্ট করুন</p>
              <p className="text-sm mt-2">ডিটেইল দেখার জন্য ইনবক্স থেকে মেসেজ সিলেক্ট করুন</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminMessage;