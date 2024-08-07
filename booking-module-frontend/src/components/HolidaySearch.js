// src/pages/Holiday.js
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const HolidaySearch = () => {
  const [startDate, setStartDate] = useState(new Date());

  const handleChangeStart = (date) => {
    setStartDate(date);
  };

  return (
    <div className="p-10 bg-[#ffffff] shadow-inner rounded">
        {/* Destination and Date */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="flex flex-col w-full">
            <label className="mb-1 text-gray-600">Destination</label>
            <input type="text" placeholder="Cox's Bazar" className="border rounded px-4 py-2 w-full" />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-1 text-gray-600">Date</label>
            <DatePicker
              selected={startDate}
              onChange={handleChangeStart}
              className="border rounded px-4 py-2 w-full"
            />
          </div>
        </div>

        {/* Tabs */}
        <div className="flex items-center space-x-4 mb-4">
          <button className="bg-blue-600 text-white px-4 py-2 rounded">Easy Visa Destination</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Popular Destination</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Honeymoon</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Wishlist</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Umrah</button>
          <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">+ Add another city</button>
          <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
        </div>

        {/* Holiday Destination Cards */}
        <div className="grid grid-cols-5 gap-4">
          <div className="bg-white shadow-md rounded p-4">
            <img src="path/to/kathmandu.jpg" alt="Kathmandu" className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Kathmandu</h3>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <img src="path/to/paro.jpg" alt="Paro" className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Paro</h3>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <img src="path/to/phnom-penh.jpg" alt="Phnom Penh" className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Phnom Penh</h3>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <img src="path/to/colombo.jpg" alt="Colombo" className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Colombo</h3>
          </div>
          <div className="bg-white shadow-md rounded p-4">
            <img src="path/to/maldives.jpg" alt="Maldives" className="w-full h-32 object-cover rounded" />
            <h3 className="text-lg font-bold mt-2">Maldives</h3>
          </div>
        </div>
      </div>
  );
};

export default HolidaySearch;