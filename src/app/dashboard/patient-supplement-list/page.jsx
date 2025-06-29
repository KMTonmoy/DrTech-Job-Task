'use client'
import React, { useState } from 'react';
import { FaPills, FaSearch, FaUserInjured, FaCalendarAlt, FaPrint, FaFileExport } from 'react-icons/fa';

const PatientSupplementList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedPatient, setSelectedPatient] = useState('all');
  const [selectedDate, setSelectedDate] = useState('');

  // Sample data
  const patients = [
    { id: 'PT-1001', name: 'রহিম মিয়া', age: 45, gender: 'পুরুষ' },
    { id: 'PT-1002', name: 'সালমা খাতুন', age: 32, gender: 'মহিলা' },
    { id: 'PT-1003', name: 'জাহিদ হাসান', age: 28, gender: 'পুরুষ' },
    { id: 'PT-1004', name: 'আনিকা ইসলাম', age: 19, gender: 'মহিলা' },
  ];

  const supplements = [
    {
      id: 'RX-2023-001',
      patientId: 'PT-1001',
      date: '২০২৩-১১-১৫',
      items: [
        { name: 'ভিটামিন ডি৩', dosage: '১ টি দিনে', duration: '৩০ দিন', notes: 'সকালে খাবারের পর' },
        { name: 'ক্যালসিয়াম', dosage: '১ টি দিনে দুবার', duration: '৩০ দিন', notes: 'খাবারের সাথে' }
      ],
      doctor: 'ডাঃ আব্দুল কাইয়ুম',
      status: 'সক্রিয়'
    },
    {
      id: 'RX-2023-002',
      patientId: 'PT-1002',
      date: '২০২৩-১১-১৬',
      items: [
        { name: 'আয়রন সাপ্লিমেন্ট', dosage: '১ টি দিনে', duration: '৬০ দিন', notes: 'খালি পেটে নিষেধ' },
        { name: 'মাল্টিভিটামিন', dosage: '১ টি দিনে', duration: '৬০ দিন', notes: 'রাতে ঘুমানোর আগে' }
      ],
      doctor: 'ডাঃ সুমাইয়া ইসলাম',
      status: 'সক্রিয়'
    },
    {
      id: 'RX-2023-003',
      patientId: 'PT-1003',
      date: '২০২৩-১১-১৭',
      items: [
        { name: 'ওমেগা-৩ ফিশ অয়েল', dosage: '১ ক্যাপসুল দিনে দুবার', duration: '৯০ দিন', notes: 'খাবারের সাথে' }
      ],
      doctor: 'ডাঃ আব্দুল কাইয়ুম',
      status: 'সম্পন্ন'
    },
  ];

  // Filter prescriptions
  const filteredPrescriptions = supplements.filter(prescription => {
    const matchesPatient = selectedPatient === 'all' || prescription.patientId === selectedPatient;
    const matchesSearch = prescription.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDate = selectedDate === '' || prescription.date.includes(selectedDate);
    return matchesPatient && matchesSearch && matchesDate;
  });

  return (
    <div className="p-6 w-full bg-white rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <FaPills className="mr-2 text-blue-600" /> রোগীর সাপ্লিমেন্ট তালিকা
        </h2>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
            <FaFileExport className="mr-2" /> এক্সপোর্ট
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center">
            <FaPrint className="mr-2" /> প্রিন্ট
          </button>
        </div>
      </div>

      {/* Filter Section */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">রোগী নির্বাচন করুন</label>
          <select
            className="w-full p-2 border border-gray-300 rounded-md bg-white"
            value={selectedPatient}
            onChange={(e) => setSelectedPatient(e.target.value)}
          >
            <option value="all">সব রোগী</option>
            {patients.map(patient => (
              <option key={patient.id} value={patient.id}>
                {patient.name} ({patient.id})
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">প্রেসক্রিপশন আইডি</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">তারিখ</label>
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

      {/* Prescriptions List */}
      <div className="space-y-6">
        {filteredPrescriptions.length > 0 ? (
          filteredPrescriptions.map((prescription, index) => {
            const patient = patients.find(p => p.id === prescription.patientId);
            return (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Prescription Header */}
                <div className="bg-blue-50 px-4 py-3 flex flex-col md:flex-row md:items-center md:justify-between">
                  <div>
                    <span className="font-medium text-blue-800">প্রেসক্রিপশন: {prescription.id}</span>
                    <span className="mx-2 text-gray-400">|</span>
                    <span className="text-gray-700">
                      <FaUserInjured className="inline mr-1" />
                      {patient?.name} ({patient?.id}, {patient?.age} বছর, {patient?.gender})
                    </span>
                  </div>
                  <div className="mt-2 md:mt-0">
                    <span className="text-gray-700">
                      <FaCalendarAlt className="inline mr-1" />
                      তারিখ: {prescription.date}
                    </span>
                    <span className="mx-2 text-gray-400">|</span>
                    <span className={`font-medium ${
                      prescription.status === 'সক্রিয়' ? 'text-green-600' : 'text-gray-600'
                    }`}>
                      অবস্থা: {prescription.status}
                    </span>
                  </div>
                </div>

                {/* Supplement Items */}
                <div className="divide-y divide-gray-200">
                  {prescription.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="p-4 hover:bg-gray-50">
                      <div className="flex flex-col md:flex-row md:items-center">
                        <div className="md:w-1/4">
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                        </div>
                        <div className="md:w-1/4 mt-2 md:mt-0">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">ডোজ:</span> {item.dosage}
                          </p>
                        </div>
                        <div className="md:w-1/4 mt-2 md:mt-0">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">সময়কাল:</span> {item.duration}
                          </p>
                        </div>
                        <div className="md:w-1/4 mt-2 md:mt-0">
                          <p className="text-sm text-gray-600">
                            <span className="font-medium">মন্তব্য:</span> {item.notes}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Prescription Footer */}
                <div className="bg-gray-50 px-4 py-2 text-right text-sm text-gray-600">
                  চিকিৎসক: {prescription.doctor}
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-8 text-gray-500">
            কোন প্রেসক্রিপশন পাওয়া যায়নি
          </div>
        )}
      </div>
    </div>
  );
};

export default PatientSupplementList;