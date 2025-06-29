'use client';

import { Book, Users, Calendar, Activity, Pill, FileText, Shield, History } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const Stats = () => {
  // Fake data for charts
  const [patientData] = useState([30, 45, 60, 40, 65, 80, 70]);
  const [supplementData] = useState([15, 25, 35, 20, 40, 30, 50]);
  const [prescriptionData] = useState([20, 35, 25, 45, 30, 55, 40]);
  
  // Stats data
  const stats = [
    { icon: <Users size={20} />, value: '4.7K+', label: 'New Patients', color: 'bg-pink-100 text-pink-600' },
    { icon: <Pill size={20} />, value: '2.3K+', label: 'New Supplements', color: 'bg-rose-100 text-rose-600' },
    { icon: <Book size={20} />, value: '5.1K+', label: 'New Prescriptions', color: 'bg-fuchsia-100 text-fuchsia-600' }
  ];

  // Draw chart manually
  const drawChart = (canvasRef, data, color) => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const spacing = width / (data.length + 1);
    const maxValue = Math.max(...data);
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Draw grid lines
    ctx.strokeStyle = '#f3f4f6';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 5; i++) {
      const y = height - (i * height / 5);
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }
    
    // Draw bars
    data.forEach((value, index) => {
      const barHeight = (value / maxValue) * (height - 20);
      const x = spacing * (index + 1) - 15;
      const y = height - barHeight;
      
      // Gradient fill
      const gradient = ctx.createLinearGradient(0, y, 0, height);
      gradient.addColorStop(0, color);
      gradient.addColorStop(1, `${color}80`);
      
      ctx.fillStyle = gradient;
      ctx.fillRect(x, y, 30, barHeight);
      
      // Rounded corners
      ctx.beginPath();
      ctx.moveTo(x + 15, y);
      ctx.arc(x + 15, y + 15, 15, -Math.PI/2, 0);
      ctx.lineTo(x + 30, y + barHeight);
      ctx.lineTo(x, y + barHeight);
      ctx.arc(x + 15, y + barHeight - 15, 15, Math.PI, Math.PI/2, true);
      ctx.closePath();
      ctx.fill();
    });
  };

  // Refs for canvas elements
  const patientChartRef = useRef(null);
  const supplementChartRef = useRef(null);
  const prescriptionChartRef = useRef(null);

  useEffect(() => {
    drawChart(patientChartRef, patientData, '#ec4899');
    drawChart(supplementChartRef, supplementData, '#f472b6');
    drawChart(prescriptionChartRef, prescriptionData, '#db2777');
  }, []);

  return (
    <div className='w-full p-4 md:p-10 min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='w-full p-5 rounded-xl mb-6 bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold'>Statistics</h1>
      </div>

      {/* Stats Cards */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 mb-8'>
        {stats.map((stat, index) => (
          <div key={index} className={`${stat.color} p-6 rounded-xl shadow-md flex items-center gap-4`}>
            <div className='p-3 rounded-full bg-white bg-opacity-50'>
              {stat.icon}
            </div>
            <div>
              <p className='text-2xl font-bold'>{stat.value}</p>
              <p className='text-sm'>{stat.label}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className='bg-white rounded-xl shadow-md p-6'>
        <h2 className='text-xl font-semibold mb-6 text-pink-800'>Weekly Trends</h2>
        
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* New Patients Chart */}
          <div className='bg-pink-50 rounded-lg p-4'>
            <h3 className='text-lg font-medium text-pink-700 mb-4'>New Patients</h3>
            <div className='h-64'>
              <canvas 
                ref={patientChartRef} 
                width={300} 
                height={250}
                className='w-full h-full'
              />
            </div>
          </div>
          
          {/* New Supplements Chart */}
          <div className='bg-rose-50 rounded-lg p-4'>
            <h3 className='text-lg font-medium text-rose-700 mb-4'>New Supplements</h3>
            <div className='h-64'>
              <canvas 
                ref={supplementChartRef} 
                width={300} 
                height={250}
                className='w-full h-full'
              />
            </div>
          </div>
          
          {/* New Prescriptions Chart */}
          <div className='bg-fuchsia-50 rounded-lg p-4'>
            <h3 className='text-lg font-medium text-fuchsia-700 mb-4'>New Prescriptions</h3>
            <div className='h-64'>
              <canvas 
                ref={prescriptionChartRef} 
                width={300} 
                height={250}
                className='w-full h-full'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;