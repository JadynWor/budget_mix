'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

interface DeleteAccountButtonProps {
  username: string;
}

const DeleteAccountButton: React.FC<DeleteAccountButtonProps> = ({ username }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleDeleteAccount = async () => {
    try {
      const response = await fetch('/api/user/deleteUser', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        // Redirect to the sign-up page upon successful account deletion
        router.push('/sign-up');
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Failed to delete the account.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      setError('An unexpected error occurred.');
    }
  };

  const handleConfirmDelete = () => {
    setError(""); // Clear any previous errors
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPassword(""); // Clear password input
  };

  return (
    <div>
      <button
        onClick={handleConfirmDelete}
        className="mt-6 bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-red-800"
      >
        Delete Account
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-bold mb-4">Are you sure you want to delete your account?</h2>
            <p className="mb-4 text-gray-600">Please confirm by entering your password below:</p>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded mb-4"
              placeholder="Enter your password"
            />
            {error && <p className="text-red-600 mb-4">{error}</p>}
            <div className="flex justify-end space-x-4">
              <button
                onClick={handleCloseModal}
                className="bg-gray-300 text-black py-2 px-4 rounded-lg transition duration-300 hover:bg-gray-400"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteAccount}
                className="bg-red-600 text-white py-2 px-4 rounded-lg transition duration-300 hover:bg-red-800"
              >
                Confirm Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DeleteAccountButton;
