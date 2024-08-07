// src/pages/Hotel.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HotelSearch = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const handleChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="bg-[#ffffff] shadow-inner rounded p-6 mt-6">
      {/* Location */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Location</label>
          <input type="text" placeholder="Cox's Bazar" className="border rounded px-4 py-2 w-full" />
        </div>
      </div>

      {/* Date Picker */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Check-in</label>
          <DatePicker
            selected={startDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsStart
            className="border rounded px-4 py-2 w-full"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Check-out</label>
          <DatePicker
            selected={endDate}
            onChange={handleChange}
            startDate={startDate}
            endDate={endDate}
            selectsEnd
            className="border rounded px-4 py-2 w-full"
          />
        </div>
      </div>

      {/* Guests and Rooms */}
      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Guests</label>
          <select className="border rounded px-4 py-2 w-full">
            <option>1 Guest</option>
            <option>2 Guests</option>
            <option>3 Guests</option>
            <option>4 Guests</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Rooms</label>
          <select className="border rounded px-4 py-2 w-full">
            <option>1 Room</option>
            <option>2 Rooms</option>
            <option>3 Rooms</option>
            <option>4 Rooms</option>
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


export default HotelSearch;