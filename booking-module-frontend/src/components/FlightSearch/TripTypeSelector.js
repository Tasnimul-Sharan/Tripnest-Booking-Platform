// src/components/TripTypeSelector.js
import React from 'react';

const TripTypeSelector = ({ tripType, setTripType }) => {
  return (
    <div className="flex items-center space-x-4 mb-4">
      <button
        onClick={() => setTripType('one-way')}
        className={`px-4 py-2 rounded ${tripType === 'one-way' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        One Way
      </button>
      <button
        onClick={() => setTripType('round-trip')}
        className={`px-4 py-2 rounded ${tripType === 'round-trip' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        Round Trip
      </button>
      <button
        onClick={() => setTripType('multi-city')}
        className={`px-4 py-2 rounded ${tripType === 'multi-city' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
      >
        Multi City
      </button>
    </div>
  );
};

export default TripTypeSelector;
