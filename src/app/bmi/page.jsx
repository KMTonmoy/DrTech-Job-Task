'use client';
import Navbar from '@/components/Navbar';
import React, { useEffect, useState } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

const BMICalculator = () => {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState('');
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  const getCategory = (bmi) => {
    if (bmi < 15) return { text: 'Very Severely Underweight (BMI < 15)', color: 'text-blue-700' };
    if (bmi >= 15 && bmi < 16) return { text: 'Severely Underweight (BMI 15 - 16)', color: 'text-blue-500' };
    if (bmi >= 16 && bmi < 18.5) return { text: 'Underweight (BMI 16 - 18.5)', color: 'text-cyan-600' };
    if (bmi >= 18.5 && bmi < 25) return { text: 'Normal (BMI 18.5 - 24.9)', color: 'text-green-600' };
    if (bmi >= 25 && bmi < 30) return { text: 'Overweight (BMI 25 - 29.9)', color: 'text-yellow-600' };
    if (bmi >= 30 && bmi < 35) return { text: 'Obese Class 1 (BMI 30 - 34.9)', color: 'text-orange-600' };
    if (bmi >= 35 && bmi < 40) return { text: 'Obese Class 2 (BMI 35 - 39.9)', color: 'text-red-600' };
    if (bmi >= 40) return { text: 'Obese Class 3 (BMI ≥ 40)', color: 'text-red-800' };
    return { text: '', color: '' };
  };

  const calculate = (e) => {
    e.preventDefault();
    const h = parseFloat(height);
    const w = parseFloat(weight);
    if (isNaN(h) || isNaN(w) || h <= 0 || w <= 0) {
      alert('সঠিক উচ্চতা ও ওজন প্রদান করুন।');
      return;
    }
    const heightM = h / 100;
    const bmiValue = w / (heightM * heightM);
    setBmi(bmiValue.toFixed(2));
    setCategory(getCategory(bmiValue));
  };

  return (
    <>
      <Navbar />

      <div className={`${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} min-h-screen flex items-center justify-center px-4`}>
        <div className={`w-full max-w-2xl rounded-lg shadow-lg p-8 relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-white border border-gray-200'}`}>
          <button onClick={toggleTheme} className="absolute top-6 right-6 text-xl">
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <h1 className="text-3xl font-bold text-center mb-6">BMI Calculator</h1>
          <form onSubmit={calculate} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-1">Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                className={`w-full px-4 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
              />
            </div>

            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  required
                  className={`w-full px-4 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>

              <div className="w-1/2">
                <label className="block text-sm font-medium mb-1">Age</label>
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(e.target.value)}
                  required
                  className={`w-full px-4 py-2 border rounded-md ${theme === 'dark' ? 'bg-gray-700 border-gray-600 text-white' : 'bg-white border-gray-300 text-black'}`}
                />
              </div>
            </div>

            <button
              type="submit"
              className={`w-full py-2 rounded-md font-semibold transition ${theme === 'dark' ? 'bg-yellow-500 hover:bg-yellow-600 text-gray-900' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            >
              Calculate BMI
            </button>

            {bmi && (
              <div className="mt-4 text-center">
                <p className="text-xl font-semibold">Your BMI: {bmi}</p>
                <p className={`mt-1 ${category.color}`}>{category.text}</p>
              </div>
            )}

            <div className={`mt-8 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'} p-4 rounded-lg border ${theme === 'dark' ? 'border-gray-600' : 'border-gray-200'}`}>
              <h2 className="text-md font-semibold mb-2">BMI Categories:</h2>
              <ul className="space-y-1 text-sm">
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-800 rounded-full"></span> Very Severely Underweight (BMI &lt; 15)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-blue-500 rounded-full"></span> Severely Underweight (BMI 15 - 16)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-cyan-500 rounded-full"></span> Underweight (BMI 16 - 18.5)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-green-500 rounded-full"></span> Normal (BMI 18.5 - 24.9)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-yellow-500 rounded-full"></span> Overweight (BMI 25 - 29.9)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-orange-500 rounded-full"></span> Obese Class 1 (BMI 30 - 34.9)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-red-500 rounded-full"></span> Obese Class 2 (BMI 35 - 39.9)</li>
                <li className="flex items-center gap-2"><span className="w-3 h-3 bg-red-800 rounded-full"></span> Obese Class 3 (BMI ≥ 40)</li>
              </ul>
            </div>
          </form>
        </div>
      </div>

    </>
  );
};

export default BMICalculator;
