'use client'
import React, { useState } from 'react';
import { FaPills, FaSearch, FaFilter, FaPlus, FaEdit, FaTrash, FaFileExport } from 'react-icons/fa';

const TotalSupplement = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('all');
  const [showFilters, setShowFilters] = useState(false);

  // Sample supplement data
  const supplements = [
    {
      id: 'SUP-1001',
      name: 'Vitamin D3',
      category: 'Vitamins',
      stock: 125,
      price: '৳ 250',
      supplier: 'ACI Health',
      lastRestock: '2023-10-15'
    },
    {
      id: 'SUP-1002',
      name: 'Omega-3 Fish Oil',
      category: 'Minerals',
      stock: 89,
      price: '৳ 450',
      supplier: 'Square Pharma',
      lastRestock: '2023-11-02'
    },
    {
      id: 'SUP-1003',
      name: 'Calcium + Magnesium',
      category: 'Minerals',
      stock: 42,
      price: '৳ 320',
      supplier: 'Beximco Pharma',
      lastRestock: '2023-09-28'
    },
    {
      id: 'SUP-1004',
      name: 'Multivitamin Complex',
      category: 'Vitamins',
      stock: 76,
      price: '৳ 380',
      supplier: 'Incepta Pharma',
      lastRestock: '2023-11-10'
    },
    {
      id: 'SUP-1005',
      name: 'Iron Supplement',
      category: 'Minerals',
      stock: 31,
      price: '৳ 280',
      supplier: 'Renata Ltd',
      lastRestock: '2023-10-30'
    }
  ];

  // Categories for filtering
  const categories = ['all', 'Vitamins', 'Minerals', 'Herbal', 'Protein'];

  // Filter supplements based on search and category
  const filteredSupplements = supplements.filter(supplement => {
    const matchesSearch = supplement.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         supplement.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = filterCategory === 'all' || supplement.category === filterCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 bg-white w-full rounded-lg shadow-md">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800 flex items-center">
          <FaPills className="mr-2 text-blue-600" /> সম্পূর্ণ সাপ্লিমেন্ট তালিকা
        </h2>
        <div className="flex space-x-3 mt-4 md:mt-0">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md flex items-center">
            <FaPlus className="mr-2" /> নতুন সাপ্লিমেন্ট
          </button>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md flex items-center">
            <FaFileExport className="mr-2" /> এক্সপোর্ট
          </button>
        </div>
      </div>

      {/* Search and Filter Section */}
      <div className="mb-6 bg-gray-50 p-4 rounded-lg">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FaSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="সাপ্লিমেন্ট খুঁজুন..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <button 
            className="flex items-center text-blue-600 font-medium"
            onClick={() => setShowFilters(!showFilters)}
          >
            <FaFilter className="mr-2" />
            ফিল্টার {showFilters ? 'লুকান' : 'দেখান'}
          </button>
        </div>

        {showFilters && (
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">ক্যাটাগরি</label>
              <select
                className="w-full p-2 border border-gray-300 rounded-md bg-white"
                value={filterCategory}
                onChange={(e) => setFilterCategory(e.target.value)}
              >
                {categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category === 'all' ? 'সব ক্যাটাগরি' : category}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">স্টক অবস্থা</label>
              <select className="w-full p-2 border border-gray-300 rounded-md bg-white">
                <option value="all">সব স্টক</option>
                <option value="low">কম স্টক (50 এর নিচে)</option>
                <option value="out">স্টক শেষ</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">সর্বশেষ রিস্টক</label>
              <input
                type="date"
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        )}
      </div>

      {/* Supplements Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">আইডি</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">নাম</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">ক্যাটাগরি</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">স্টক</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">দাম</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">সরবরাহকারী</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">সর্বশেষ রিস্টক</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-blue-600 uppercase tracking-wider">অ্যাকশন</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredSupplements.length > 0 ? (
              filteredSupplements.map((supplement, index) => (
                <tr key={index} className={supplement.stock < 50 ? 'bg-yellow-50' : ''}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{supplement.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplement.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplement.category}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      supplement.stock < 30 ? 'bg-red-100 text-red-800' : 
                      supplement.stock < 50 ? 'bg-yellow-100 text-yellow-800' : 
                      'bg-green-100 text-green-800'
                    }`}>
                      {supplement.stock} পিস
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplement.price}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplement.supplier}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">{supplement.lastRestock}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <FaEdit />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <FaTrash />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                  কোন সাপ্লিমেন্ট পাওয়া যায়নি
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Summary Cards */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-blue-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-blue-800">মোট সাপ্লিমেন্ট</h3>
          <p className="text-2xl font-bold text-blue-600">{supplements.length}</p>
        </div>
        <div className="bg-green-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-green-800">পর্যাপ্ত স্টক</h3>
          <p className="text-2xl font-bold text-green-600">
            {supplements.filter(s => s.stock >= 50).length}
          </p>
        </div>
        <div className="bg-yellow-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-yellow-800">কম স্টক</h3>
          <p className="text-2xl font-bold text-yellow-600">
            {supplements.filter(s => s.stock < 50 && s.stock >= 30).length}
          </p>
        </div>
        <div className="bg-red-50 p-4 rounded-lg">
          <h3 className="text-sm font-medium text-red-800">স্টক শেষ</h3>
          <p className="text-2xl font-bold text-red-600">
            {supplements.filter(s => s.stock < 30).length}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TotalSupplement;