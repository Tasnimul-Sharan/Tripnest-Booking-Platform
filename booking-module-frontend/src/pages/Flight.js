// src/pages/Flight.js
import React from 'react';
import FlightSearch from '../components/FlightSearch';

const Flight = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Flight Booking</h2>
      <FlightSearch />
    </div>
  );
};

export default Flight;
