'use client'
import React, { useState, useEffect } from 'react';

// Placeholder for Firebase data fetch function
const fetchSocietyData = async () => {
  // Replace this with your actual Firebase fetching logic
  return { name: null }; // Example return value, replace with actual data
};

const Dashboard: React.FC = () => {
  const [society, setSociety] = useState<{ name: string | null } | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    image: null as File | null,
    tags: ''
  });

  useEffect(() => {
    const getSocietyData = async () => {
      const data = await fetchSocietyData();
      setSociety(data);
    };
    getSocietyData();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Safely access the first file if files is not null
    if (file) {
      setFormData((prev) => ({ ...prev, image: file }));
    }
  };
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to Firebase)
    console.log(formData);
  };

  if (!society || society.name === null) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen flex flex-col items-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Onboarding Form</h1>
        <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">Society Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="image">Upload Image</label>
            <input
              type="file"
              id="image"
              name="image"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded"
              accept="image/*"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="tags">Tags</label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="e.g., Action, Adventure, Reading"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded shadow hover:bg-blue-600"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Society Dashboard</h1>
      {/* Render society details here */}
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-800">Welcome to {society.name}</h2>
        {/* Add more society details here */}
      </div>
    </div>
  );
};

export default Dashboard;
