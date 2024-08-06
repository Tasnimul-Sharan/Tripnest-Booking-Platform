import React from 'react';
import DatePicker from 'react-datepicker';

const RoundTrip = ({ startDate, endDate, onChange }) => {
  return (
    <div className="space-y-4 mb-4">
      <div className="flex items-center space-x-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">From</label>
          <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
        </div>
        <div className="flex items-center">
          <button className="bg-gray-200 p-2 mt-6 rounded">⇄</button>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">To</label>
          <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Departure Date</label>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            className="border rounded px-4 py-2 w-full"
          />
        </div>
      </div>
      <div className="flex flex-col w-full">
        <label className="mb-1 text-gray-600">Return Date</label>
        <DatePicker
          selected={endDate}
          onChange={onChange}
          startDate={startDate}
          endDate={endDate}
          selectsRange
          className="border rounded px-4 py-2 w-full"
        />
      </div>
    </div>
  );
};

export default RoundTrip;
