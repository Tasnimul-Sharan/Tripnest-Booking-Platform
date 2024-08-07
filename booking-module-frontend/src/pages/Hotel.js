// src/pages/Hotel.js
import React from 'react';
import HotelSearch from '../components/HotelSearch';

const Hotel = () => {
  return (
    <div className="p-10 bg-[#f5f7fa]">
      <h2 className="text-2xl font-bold mb-4">Hotel Booking</h2>
      <HotelSearch/>
    </div>
  );
};

export default Hotel;
