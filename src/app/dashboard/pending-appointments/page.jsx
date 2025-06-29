'use client'
import React, { useState } from 'react';
import { FaCalendarAlt, FaUserMd, FaCheck, FaTimes, FaClock, FaFilter, FaSearch } from 'react-icons/fa';

const PendingAppointments = () => {
    const [selectedProblem, setSelectedProblem] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [searchId, setSearchId] = useState('');
    const [filterDate, setFilterDate] = useState('');
    const [showFilters, setShowFilters] = useState(false);
    const [appointments, setAppointments] = useState([
        {
            id: 'APT-1001',
            patientName: 'রহিম মিয়া',
            phone: '০১৭১২৩৪৫৬৭৮',
            problem: 'ডায়াবেটিস চেকআপ',
            doctor: 'ডাঃ আব্দুল কাইয়ুম',
            date: '২০২৩-১১-১৫',
            time: 'সকাল ১০:৩০',
            status: 'pending'
        },
        {
            id: 'APT-1002',
            patientName: 'সালমা খাতুন',
            phone: '০১৮৯৮৭৬৫৪৩২',
            problem: 'প্রেসার চেকআপ',
            doctor: 'ডাঃ সুমাইয়া ইসলাম',
            date: '২০২৩-১১-১৬',
            time: 'বিকাল ৩:০০',
            status: 'pending'
        },
        {
            id: 'APT-1003',
            patientName: 'জাহিদ হাসান',
            phone: '০১৯১২৩৪৫৬৭৮',
            problem: 'হাঁপানি সমস্যা',
            doctor: 'ডাঃ আব্দুল কাইয়ুম',
            date: '২০২৩-১১-১৭',
            time: 'সকাল ১১:১৫',
            status: 'pending'
        }
    ]);

    const problems = [
        'ডায়াবেটিস চেকআপ',
        'প্রেসার চেকআপ',
        'হাঁপানি সমস্যা',
        'হার্টের সমস্যা',
        'কিডনির সমস্যা',
        'সাধারণ চেকআপ'
    ];

    const handleApprove = (id) => {
        setAppointments(appointments.map(app => 
            app.id === id ? {...app, status: 'approved'} : app
        ));
    };

    const handleReject = (id) => {
        setAppointments(appointments.map(app => 
            app.id === id ? {...app, status: 'rejected'} : app
        ));
    };

    const filteredAppointments = appointments.filter(app => {
        const matchesId = searchId === '' || app.id.includes(searchId);
        const matchesDate = filterDate === '' || app.date.includes(filterDate);
        const matchesStatus = app.status === 'pending';
        return matchesId && matchesDate && matchesStatus;
    });

    return (
        <div className="p-4 w-full bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">অপেক্ষমান অ্যাপয়েন্টমেন্ট</h2>

            {/* Filter Section */}
            <div className="mb-6 bg-blue-50 p-4 rounded-lg">
                <button 
                    className="flex items-center text-blue-600 font-medium"
                    onClick={() => setShowFilters(!showFilters)}
                >
                    <FaFilter className="mr-2" />
                    ফিল্টার অপশন {showFilters ? 'লুকান' : 'দেখান'}
                </button>

                {showFilters && (
                    <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">আইডি দিয়ে খুঁজুন</label>
                            <div className="relative">
                                <input
                                    type="text"
                                    className="w-full p-2 pl-8 border border-gray-300 rounded-md"
                                    placeholder="APT-1001"
                                    value={searchId}
                                    onChange={(e) => setSearchId(e.target.value)}
                                />
                                <FaSearch className="absolute left-2 top-3 text-gray-400" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">তারিখ দিয়ে ফিল্টার করুন</label>
                            <div className="flex items-center">
                                <FaCalendarAlt className="text-gray-500 mr-2" />
                                <input
                                    type="date"
                                    className="p-2 border border-gray-300 rounded-md"
                                    value={filterDate}
                                    onChange={(e) => setFilterDate(e.target.value)}
                                />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">সমস্যা দিয়ে ফিল্টার করুন</label>
                            <select
                                className="w-full p-2 border border-gray-300 rounded-md bg-white"
                                value={selectedProblem}
                                onChange={(e) => setSelectedProblem(e.target.value)}
                            >
                                <option value="">সব সমস্যা</option>
                                {problems.map((problem, index) => (
                                    <option key={index} value={problem}>{problem}</option>
                                ))}
                            </select>
                        </div>
                    </div>
                )}
            </div>

            {/* Appointments Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-blue-50">
                        <tr>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">আইডি</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">রোগীর নাম</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">ফোন</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">সমস্যা</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">
                                <FaUserMd className="inline mr-1" /> ডাক্তার
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">
                                <FaCalendarAlt className="inline mr-1" /> তারিখ
                            </th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">সময়</th>
                            <th className="px-4 py-3 text-right text-xs font-medium text-blue-600 uppercase tracking-wider">অ্যাকশন</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {filteredAppointments.length > 0 ? (
                            filteredAppointments.map((appointment, index) => (
                                <tr key={index} className="hover:bg-blue-50 transition-colors">
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium text-gray-700">{appointment.id}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.patientName}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.phone}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.problem}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.doctor}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">{appointment.date}</td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-700">
                                        <span className="flex items-center">
                                            <FaClock className="mr-1 text-yellow-500" /> {appointment.time}
                                        </span>
                                    </td>
                                    <td className="px-4 py-4 whitespace-nowrap text-sm font-medium">
                                        <div className="flex space-x-2 justify-end">
                                            <button 
                                                className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-full"
                                                onClick={() => handleApprove(appointment.id)}
                                            >
                                                <FaCheck />
                                            </button>
                                            <button 
                                                className="bg-red-500 hover:bg-red-600 text-white p-2 rounded-full"
                                                onClick={() => handleReject(appointment.id)}
                                            >
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="8" className="px-4 py-4 text-center text-gray-500">
                                    কোন অপেক্ষমান অ্যাপয়েন্টমেন্ট পাওয়া যায়নি
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>

            {/* New Appointment Section */}
            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">নতুন অ্যাপয়েন্টমেন্ট বুক করুন</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">সমস্যা সিলেক্ট করুন</label>
                        <select
                            className="w-full p-2 border border-gray-300 rounded-md bg-white"
                            value={selectedProblem}
                            onChange={(e) => setSelectedProblem(e.target.value)}
                        >
                            <option value="">-- সমস্যা নির্বাচন করুন --</option>
                            {problems.map((problem, index) => (
                                <option key={index} value={problem}>{problem}</option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">তারিখ সিলেক্ট করুন</label>
                        <div className="flex items-center">
                            <FaCalendarAlt className="text-gray-500 mr-2" />
                            <input
                                type="date"
                                className="p-2 border border-gray-300 rounded-md"
                                value={selectedDate}
                                onChange={(e) => setSelectedDate(e.target.value)}
                            />
                        </div>
                    </div>
                </div>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
                    অ্যাপয়েন্টমেন্ট কনফার্ম করুন
                </button>
            </div>
        </div>
    );
};

export default PendingAppointments;