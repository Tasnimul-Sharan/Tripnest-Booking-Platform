// src/pages/Visa.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const VisaSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChangeStart = (date) => {
    setStartDate(date);
  };

  const handleChangeEnd = (date) => {
    setEndDate(date);
  };

  return (
    <div className="bg-[#ffffff] shadow-inner rounded p-6 mt-6">
      {/* Country */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Country</label>
          <input type="text" placeholder="Thailand" className="border rounded px-4 py-2 w-full" />
        </div>
      </div>

      {/* Date Pickers */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Start Date</label>
          <DatePicker
            selected={startDate}
            onChange={handleChangeStart}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">End Date</label>
          <DatePicker
            selected={endDate}
            onChange={handleChangeEnd}
            className="border rounded px-4 py-2 w-full"
          />
        </div>
      </div>

      {/* Travellers */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Travellers</label>
          <select className="border rounded px-4 py-2 w-full">
            <option>1 Traveller</option>
            <option>2 Travellers</option>
            <option>3 Travellers</option>
            <option>4 Travellers</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Nationality</label>
          <select className="border rounded px-4 py-2 w-full">
            <option>Bangladeshi</option>
            <option>Other</option>
          </select>
        </div>
      </div>

      {/* Search Button */}
      <div className="flex items-center">
        <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
      </div>
    </div>
  );
};

export default VisaSearch;