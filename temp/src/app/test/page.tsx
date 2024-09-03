"use client"
import React from 'react';
import { initializeSocity } from "@/actions/initalizeSocity_Server"; // Adjust the path as needed

const Page = () => {
  const handleInitialize = async () => {
    try {
      // Call the initializeSocity function with the required parameters
      await initializeSocity(
        "test@example.com", // Replace with the actual email
        "Society Name", // Replace with the actual name
        {"user1@example.com": "user1@example.com", "user1@example5com": "pending" }, // Replace with actual users
        ["event1", "event2"], // Replace with actual events
        "This is a sample description", // Replace with actual description
        ["tag1", "tag2"], // Replace with actual tags
        ["image1.jpg", "image2.jpg"] // Replace with actual image URLs
      );
      console.log('Society initialized successfully');
    } catch (error) {
      console.error('Error initializing society:', error);
    }
  };

  return (
    <div>
      <h1>Initialize Society</h1>
      <button onClick={handleInitialize}>Initialize</button>
    </div>
  );
};

export default Page;
