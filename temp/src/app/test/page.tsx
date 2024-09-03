'use client'
import React, { useEffect, useState } from 'react';
import { getAllSocieties } from '@/actions/getSocietis';  // Adjust the import path

const Tesat = () => {
  const [societies, setSocieties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSocieties = async () => {
      try {
        const socitiesList = await getAllSocieties();
        console.log(socitiesList)
        setSocieties(socitiesList);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch societies", error);
        setError("Failed to fetch societies");
        setLoading(false);
      }
    };

    fetchSocieties();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
   <div></div>
  ) 
};

export default Tesat;
