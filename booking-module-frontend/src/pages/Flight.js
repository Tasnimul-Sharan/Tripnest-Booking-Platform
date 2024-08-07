// src/pages/Flight.js
import React from 'react';
import FlightSearch from '../components/FlightSearch/FlightSearch';

const Flight = () => {
  return (
    <div className="p-10 bg-[#f5f7fa]">
      <h2 className="text-2xl font-bold mb-4">Flight Booking</h2>
      <FlightSearch />
    </div>
  );
};

export default Flight;
