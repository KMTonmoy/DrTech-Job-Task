'use client';

import { Book, Users, Calendar, Activity, Pill, FileText, Shield, History } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

const Dashboard = () => {
  const [items, setItems] = useState([
    { id: 1, icon: <Book />, value: '4.7K+', label: 'Total Prescription', color: 'orange' },
    { id: 2, icon: <Users />, value: '5.0K+', label: 'Total Patient', color: 'blue' },
    { id: 3, icon: <Pill />, value: '33+', label: 'Low stock supplements', color: 'red' },
    { id: 4, icon: <Calendar />, value: '3+', label: 'Appointment Pending', color: 'green' },
    { id: 5, icon: <FileText />, value: '703+', label: 'Lab Report', color: 'purple' },
    { id: 6, icon: <Shield />, value: '0+', label: 'Admin Activity', color: 'yellow' },
    { id: 7, icon: <History />, value: '2.4K+', label: 'Diagnostic History', color: 'indigo' },
    { id: 8, icon: <Activity />, value: '128+', label: 'Total Supplement', color: 'pink' },
    { id: 9, icon: <Pill />, value: '5.8K+', label: 'Patient Supplement List', color: 'teal' }
  ]);

  const [draggedItem, setDraggedItem] = useState(null);
  const containerRef = useRef(null);

  const handleDragStart = (e, id) => {
    setDraggedItem(id);
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', id);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e, targetId) => {
    e.preventDefault();
    if (draggedItem === targetId) return;

    setItems(prevItems => {
      const draggedIndex = prevItems.findIndex(item => item.id === draggedItem);
      const targetIndex = prevItems.findIndex(item => item.id === targetId);

      const newItems = [...prevItems];
      const [removed] = newItems.splice(draggedIndex, 1);
      newItems.splice(targetIndex, 0, removed);

      return newItems;
    });
  };

  // Add touch support
  const [touchStartPos, setTouchStartPos] = useState(null);
  const [touchCurrentPos, setTouchCurrentPos] = useState(null);
  const [touchDraggedItem, setTouchDraggedItem] = useState(null);

  const handleTouchStart = (e, id) => {
    setTouchDraggedItem(id);
    const touch = e.touches[0];
    setTouchStartPos({ x: touch.clientX, y: touch.clientY });
    setTouchCurrentPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchMove = (e) => {
    if (!touchDraggedItem) return;
    const touch = e.touches[0];
    setTouchCurrentPos({ x: touch.clientX, y: touch.clientY });
  };

  const handleTouchEnd = () => {
    if (!touchDraggedItem || !touchStartPos) return;

    // Simple swap logic for touch devices
    const deltaX = touchCurrentPos.x - touchStartPos.x;
    const deltaY = touchCurrentPos.y - touchStartPos.y;

    if (Math.abs(deltaX) > 50 || Math.abs(deltaY) > 50) {
      const draggedIndex = items.findIndex(item => item.id === touchDraggedItem);
      const direction = deltaX > 0 ? 1 : -1;
      const targetIndex = Math.min(Math.max(draggedIndex + direction, 0), items.length - 1);

      if (draggedIndex !== targetIndex) {
        setItems(prevItems => {
          const newItems = [...prevItems];
          const temp = newItems[draggedIndex];
          newItems[draggedIndex] = newItems[targetIndex];
          newItems[targetIndex] = temp;
          return newItems;
        });
      }
    }

    setTouchDraggedItem(null);
    setTouchStartPos(null);
    setTouchCurrentPos(null);
  };

  return (
    <div className='w-full p-4 md:p-10 min-h-screen bg-gray-50'>
      {/* Header */}
      <div className='w-full p-5 rounded-xl mb-6 bg-blue-500 text-white shadow-lg'>
        <h1 className='text-2xl md:text-3xl font-bold'>One Click Access</h1>
      </div>

      {/* Stats Grid with Drag and Drop */}
      <div
        ref={containerRef}
        className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4'
        onDragOver={handleDragOver}
      >
        {items.map((item) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, item.id)}
            onDrop={(e) => handleDrop(e, item.id)}
            onTouchStart={(e) => handleTouchStart(e, item.id)}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            className={`flex justify-center gap-5 bg-white shadow-2xl items-center rounded-xl p-5 hover:shadow-xl transition-all ${(draggedItem === item.id || touchDraggedItem === item.id) ? 'opacity-50' : ''
              }`}
            style={{
              transform: touchDraggedItem === item.id && touchCurrentPos ?
                `translate(${touchCurrentPos.x - touchStartPos.x}px, ${touchCurrentPos.y - touchStartPos.y}px)` :
                'none'
            }}
          >
            <button className={`bg-[${getColor(item.color, 'bg')}] text-${item.color}-600 p-2 rounded-full`}>
              {React.cloneElement(item.icon, { className: `text-${item.color}-600` })}
            </button>
            <div className="flex flex-col items-center">
              <p className={`text-${item.color}-600 font-bold`}>{item.value}</p>
              <p className="text-gray-600 text-sm">{item.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Helper function for color mapping
const getColor = (color, type) => {
  const colors = {
    orange: { bg: 'ff570a73', text: 'orange' },
    blue: { bg: '3b82f673', text: 'blue' },
    red: { bg: 'ef444473', text: 'red' },
    green: { bg: '10b98173', text: 'green' },
    purple: { bg: '8b5cf673', text: 'purple' },
    yellow: { bg: 'f59e0b73', text: 'yellow' },
    indigo: { bg: '6366f173', text: 'indigo' },
    pink: { bg: 'ec489973', text: 'pink' },
    teal: { bg: '14b8a673', text: 'teal' }
  };
  return colors[color]?.[type] || colors.orange[type];
};

export default Dashboard;