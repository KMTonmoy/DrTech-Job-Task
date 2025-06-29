'use client'
import React, { useState } from 'react';
import { FiUser, FiShield, FiKey, FiSettings, FiMail, FiLock } from 'react-icons/fi';

const ProfileSettings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    name: 'Admin User',
    email: 'admin@example.com',
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
    twoFactorEnabled: true,
    role: 'Super Admin'
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full mx-auto p-4">
      {/* Header */}
      <div className="mb-6 pb-4 border-b border-gray-200">
        <h2 className="flex items-center gap-2 text-xl font-semibold">
          <FiSettings className="text-blue-500" /> Admin Settings
        </h2>
        <p className="text-gray-500">Manage your account and security preferences</p>
      </div>
      
      {/* Main Container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
        <div className="flex md:flex-col gap-2 overflow-x-auto md:w-48">
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeTab === 'profile' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('profile')}
          >
            <FiUser /> Profile
          </button>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeTab === 'security' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('security')}
          >
            <FiShield /> Security
          </button>
          <button 
            className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap ${
              activeTab === 'permissions' 
                ? 'bg-blue-500 text-white' 
                : 'text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveTab('permissions')}
          >
            <FiKey /> Permissions
          </button>
        </div>
        
        {/* Content */}
        <div className="flex-1 bg-white rounded-lg shadow-sm p-6">
          {/* Profile Tab */}
          {activeTab === 'profile' && (
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <FiUser className="text-blue-500" /> Profile Information
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Email Address</label>
                  <div className="relative">
                    <FiMail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 p-2 border rounded"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Admin Role</label>
                  <select 
                    name="role" 
                    value={formData.role} 
                    onChange={handleChange}
                    className="w-full p-2 border rounded"
                  >
                    <option value="Super Admin">Super Admin</option>
                    <option value="Content Admin">Content Admin</option>
                    <option value="Support Admin">Support Admin</option>
                  </select>
                </div>
                
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update Profile
                </button>
              </form>
            </div>
          )}
          
          {/* Security Tab */}
          {activeTab === 'security' && (
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <FiShield className="text-blue-500" /> Security Settings
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Current Password</label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      name="currentPassword"
                      value={formData.currentPassword}
                      onChange={handleChange}
                      className="w-full pl-10 p-2 border rounded"
                      placeholder="Enter current password"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">New Password</label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      name="newPassword"
                      value={formData.newPassword}
                      onChange={handleChange}
                      className="w-full pl-10 p-2 border rounded"
                      placeholder="Enter new password"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-1">Confirm New Password</label>
                  <div className="relative">
                    <FiLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      className="w-full pl-10 p-2 border rounded"
                      placeholder="Confirm new password"
                    />
                  </div>
                </div>
                
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="twoFactor"
                    name="twoFactorEnabled"
                    checked={formData.twoFactorEnabled}
                    onChange={handleChange}
                    className="mr-2"
                  />
                  <label htmlFor="twoFactor" className="text-sm">
                    Enable Two-Factor Authentication
                  </label>
                </div>
                
                <button 
                  type="submit" 
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  Update Security Settings
                </button>
              </form>
            </div>
          )}
          
          {/* Permissions Tab */}
          {activeTab === 'permissions' && (
            <div>
              <h3 className="flex items-center gap-2 text-lg font-semibold mb-4">
                <FiKey className="text-blue-500" /> Admin Permissions
              </h3>
              <div className="space-y-3">
                <div className="p-3 border rounded">
                  <h4 className="font-medium">User Management</h4>
                  <p className="text-sm text-gray-500">Full access to create, edit, and delete users</p>
                </div>
                
                <div className="p-3 border rounded">
                  <h4 className="font-medium">Content Moderation</h4>
                  <p className="text-sm text-gray-500">Ability to moderate all platform content</p>
                </div>
                
                <div className="p-3 border rounded">
                  <h4 className="font-medium">System Configuration</h4>
                  <p className="text-sm text-gray-500">Access to change system settings and configurations</p>
                </div>
                
                <div className="p-3 border rounded">
                  <h4 className="font-medium">Analytics Dashboard</h4>
                  <p className="text-sm text-gray-500">View all analytics and reports</p>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded">
                <p className="text-sm text-blue-700">
                  <strong>Note:</strong> These permissions are determined by your admin role and can only be changed by a Super Administrator.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileSettings;