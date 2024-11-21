'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const ChangePasswordPage: React.FC = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const router = useRouter();

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      setError("New passwords do not match");
      return;
    }

    try {
      const response = await fetch('/api/user/changePassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ currentPassword, newPassword }),
      });      

      if (response.ok) {
        setSuccess("Password changed successfully");
        setError('');
        setCurrentPassword('');
        setNewPassword('');
        setConfirmPassword('');
        router.push('/profile');
      } else {
        const data = await response.json();
        setError(data.message || "Failed to change password");
        setSuccess('');
      }
    } catch (err) {
      console.error("Error changing password:", err);
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white p-8 shadow-xl rounded-lg w-full max-w-md">
        <h2 className="text-2xl font-bold text-black mb-6">Change Password</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">Current Password</label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-bold text-black mb-2">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <div className="mb-6">
          <label className="block text-sm font-bold text-black mb-2">Confirm New Password</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded text-black"
          />
        </div>
        <button
          onClick={handleChangePassword}
          className="bg-blue-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-blue-800"
        >
          Change Password
        </button>
      </div>
    </div>
  );
};

export default ChangePasswordPage;