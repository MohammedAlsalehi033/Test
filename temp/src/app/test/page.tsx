'use client'
import React, { useEffect, useState } from 'react';
import { getUserById } from '@/actions/getUserByID'; // Adjust the path as needed

const Testing = () => {
  const [userData, setUserData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const email = "test"; // Replace with the actual email you want to search by
        const data = await getUserById(email);
        setUserData(data);
      } catch (error) {
        setError('Error fetching user data: ' + error.message);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <h1>Testing Component</h1>
      {error && <p>{error}</p>}
      <ul>
        {userData && userData.length > 0 ? (
          userData.map((user) => (
            <li key={user.id}>
              <strong>{user.type}</strong>: {user.email}
            </li>
          ))
        ) : (
          <p>No user data found.</p>
        )}
      </ul>
    </div>
  );
};

export default Testing;
