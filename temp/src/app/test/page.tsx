'use client'

import { updateSubscribedSocieties } from '@/actions/updateUser';
import React from 'react';

const Testing = () => {
  const handleUpdateSubscribedSocieties = async () => {
    try {
      const email = "test"; // Replace with the actual email
      const socityId = "societ2121y1232"; // Replace with the actual society ID
      const requestState = "subscribed"; // Replace with the actual request state

      await updateSubscribedSocieties(email, socityId, requestState);
      console.log('Subscribed societies updated successfully.');
    } catch (error) {
      console.error('Error updating subscribed societies:', error);
    }
  };

  return (
    <div>
      <h1>Testing Component</h1>
      <button onClick={handleUpdateSubscribedSocieties}>
        Update Subscribed Societies
      </button>
    </div>
  );
};

export default Testing;
