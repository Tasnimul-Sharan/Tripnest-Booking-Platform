// src/pages/Holiday.js
import React from 'react';
import HolidaySearch from '../components/HolidaySearch';

const Holiday = () => {
  return (
    <div className="p-10 bg-[#f5f7fa]">
      <h2 className="text-2xl font-bold mb-4">Holiday Packages</h2>
      <HolidaySearch/>
    </div>
  );
};

export default Holiday;
