// // src/components/FlightSearch.js
// import React from 'react';

// const FlightSearch = () => {
//   return (
//     <div className="bg-white shadow-md rounded p-6 mt-6">
//       <div className="flex items-center space-x-4 mb-4">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">One Way</button>
//         <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Round Trip</button>
//         <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Multi City</button>
//       </div>
//       <div className="flex items-center space-x-4">
//         <input type="text" placeholder="From" className="border rounded px-4 py-2 w-full" />
//         <input type="text" placeholder="To" className="border rounded px-4 py-2 w-full" />
//         <input type="date" className="border rounded px-4 py-2 w-full" />
//         <select className="border rounded px-4 py-2 w-full">
//           <option>1 Traveller</option>
//           <option>2 Travellers</option>
//           <option>3 Travellers</option>
//         </select>
//         <select className="border rounded px-4 py-2 w-full">
//           <option>Economy</option>
//           <option>Business</option>
//         </select>
//         <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
//       </div>
//     </div>
//   );
// };

// export default FlightSearch;

// src/components/FlightSearch.js
// import React from 'react';

// const FlightSearch = () => {
//   return (
//     <div className="bg-white shadow-md rounded p-6 mt-6">
//       {/* Trip Type */}
//       <div className="flex items-center space-x-4 mb-4">
//         <button className="bg-blue-600 text-white px-4 py-2 rounded">One Way</button>
//         <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Round Trip</button>
//         <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded">Multi City</button>
//       </div>

//       {/* Flight Search Form */}
//       <div className="flex items-center space-x-4 mb-4">
//         <div className="flex flex-col">
//           <label className="mb-1 text-gray-600">From</label>
//           <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
//         </div>
//         <div className="flex items-center">
//           <button className="bg-gray-200 p-2 rounded">⇄</button>
//         </div>
//         <div className="flex flex-col">
//           <label className="mb-1 text-gray-600">To</label>
//           <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
//         </div>
//         <div className="flex flex-col">
//           <label className="mb-1 text-gray-600">Date</label>
//           <input type="date" className="border rounded px-4 py-2 w-full" />
//         </div>
//         <div className="flex flex-col">
//           <label className="mb-1 text-gray-600">Travellers</label>
//           <select className="border rounded px-4 py-2 w-full">
//             <option>1 Traveller</option>
//             <option>2 Travellers</option>
//             <option>3 Travellers</option>
//           </select>
//         </div>
//         <div className="flex flex-col">
//           <label className="mb-1 text-gray-600">Class</label>
//           <select className="border rounded px-4 py-2 w-full">
//             <option>Economy</option>
//             <option>Business</option>
//           </select>
//         </div>
//         <button className="bg-orange-500 text-white px-4 py-2 rounded">Search</button>
//       </div>

//       {/* Fare Type */}
//       <div className="flex items-center space-x-4">
//         <label className="flex items-center">
//           <input type="radio" name="fare" className="mr-2" />
//           Regular Fare
//         </label>
//         <label className="flex items-center">
//           <input type="radio" name="fare" className="mr-2" />
//           Student Fare
//         </label>
//       </div>
//     </div>
//   );
// };

// export default FlightSearch;

// src/components/FlightSearch.js
// import React, { useState } from 'react';

// const FlightSearch = () => {
//   const [tripType, setTripType] = useState('one-way');

//   return (
//     <div className="bg-white shadow-md rounded p-6 mt-6">
//       {/* Trip Type */}
//       <div className="flex items-center space-x-4 mb-4">
//         <button
//           onClick={() => setTripType('one-way')}
//           className={`px-4 py-2 rounded ${tripType === 'one-way' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//         >
//           One Way
//         </button>
//         <button
//           onClick={() => setTripType('round-trip')}
//           className={`px-4 py-2 rounded ${tripType === 'round-trip' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//         >
//           Round Trip
//         </button>
//         <button
//           onClick={() => setTripType('multi-city')}
//           className={`px-4 py-2 rounded ${tripType === 'multi-city' ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-700'}`}
//         >
//           Multi City
//         </button>
//       </div>

//       {/* Flight Search Form */}
//       <div className="space-y-4 mb-4">
//         <div className="flex items-center space-x-4">
//           <div className="flex flex-col w-full">
//             <label className="mb-1 text-gray-600">From</label>
//             <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
//           </div>
//           <div className="flex items-center">
//             <button className="bg-gray-200 p-2 mt-6 rounded">⇄</button>
//           </div>
//           <div className="flex flex-col w-full">
//             <label className="mb-1 text-gray-600">To</label>
//             <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
//           </div>
//           <div className="flex flex-col w-full">
//             <label className="mb-1 text-gray-600">Date</label>
//             <input type="date" className="border rounded px-4 py-2 w-full" />
//           </div>
//         </div>

//         {tripType === 'round-trip' && (
//           <div className="flex items-center space-x-4">
//             <div className="flex flex-col w-full">
//               <label className="mb-1 text-gray-600">Return Date</label>
//               <input type="date" className="border rounded px-4 py-2 w-full" />
//             </div>
//           </div>
//         )}

//         {tripType === 'multi-city' && (
//           <>
//             <div className="flex items-center space-x-4">
//               <div className="flex flex-col w-full">
//                 <label className="mb-1 text-gray-600">From</label>
//                 <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
//               </div>
//               <div className="flex items-center">
//                 <button className="bg-gray-200 p-2 mt-6 rounded">⇄</button>
//               </div>
//               <div className="flex flex-col w-full">
//                 <label className="mb-1 text-gray-600">To</label>
//                 <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
//               </div>
//               <div className="flex flex-col w-full">
//                 <label className="mb-1 text-gray-600">Date</label>
//                 <input type="date" className="border rounded px-4 py-2 w-full" />
//               </div>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="flex flex-col w-full">
//                 <label className="mb-1 text-gray-600">From</label>
//                 <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
//               </div>
//               <div className="flex items-center">
//                 <button className="bg-gray-200 p-2 mt-6 rounded">⇄</button>
//               </div>
//               <div className="flex flex-col w-full">
//                 <label className="mb-1 text-gray-600">To</label>
//                 <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
//               </div>
//               <div className="flex flex-col w-full">
//                 <label className="mb-1 text-gray-600">Date</label>
//                 <input type="date" className="border rounded px-4 py-2 w-full" />
//               </div>
//             </div>
//           </>
//         )}
//       </div>

//       <div className="flex items-center space-x-4 mb-4">
//         <div className="flex flex-col w-full">
//           <label className="mb-1 text-gray-600">Travellers</label>
//           <select className="border rounded px-4 py-2 w-full">
//             <option>1 Traveller</option>
//             <option>2 Travellers</option>
//             <option>3 Travellers</option>
//           </select>
//         </div>
//         <div className="flex flex-col w-full">
//           <label className="mb-1 text-gray-600">Class</label>
//           <select className="border rounded px-4 py-2 w-full">
//             <option>Economy</option>
//             <option>Business</option>
//           </select>
//         </div>
//         <button className="bg-orange-500 text-white px-4 py-2 rounded mt-6">Search</button>
//       </div>

//       {/* Fare Type */}
//       <div className="flex items-center space-x-4">
//         <label className="flex items-center">
//           <input type="radio" name="fare" className="mr-2" />
//           Regular Fare
//         </label>
//         <label className="flex items-center">
//           <input type="radio" name="fare" className="mr-2" />
//           Student Fare
//         </label>
//       </div>
//     </div>
//   );
// };

// export default FlightSearch;


import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FlightSearch = () => {
  const [tripType, setTripType] = useState('one-way');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(null);

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="bg-white shadow-md rounded p-6 mt-6">
      {/* Trip Type */}
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

      {/* Flight Search Form */}
      <div className="space-y-4 mb-4">
        <div className="flex items-center space-x-4">
          <div className="flex flex-col w-full">
            <label className="mb-1 text-gray-600">From</label>
            <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
          </div>
          <div className="flex items-center">
            <button className="bg-gray-200 p-2 rounded">⇄</button>
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-1 text-gray-600">To</label>
            <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
          </div>
          <div className="flex flex-col w-full">
            <label className="mb-1 text-gray-600">Date</label>
            {tripType === 'one-way' ? (
              <DatePicker
                selected={startDate}
                onChange={(date) => setStartDate(date)}
                className="border rounded px-4 py-2 w-full"
              />
            ) : (
              <DatePicker
                selected={startDate}
                onChange={onChange}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                className="border rounded px-4 py-2 w-full"
              />
            )}
          </div>
        </div>

        {tripType === 'round-trip' && (
          <div className="flex items-center space-x-4">
            <div className="flex flex-col w-full">
              <label className="mb-1 text-gray-600">Return Date</label>
              <DatePicker
                selected={endDate}
                onChange={(date) => setEndDate(date)}
                className="border rounded px-4 py-2 w-full"
              />
            </div>
          </div>
        )}

        {tripType === 'multi-city' && (
          <>
            <div className="flex items-center space-x-4">
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-600">From</label>
                <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
              </div>
              <div className="flex items-center">
                <button className="bg-gray-200 p-2 rounded">⇄</button>
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-600">To</label>
                <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-600">Date</label>
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
            <div className="flex items-center space-x-4">
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-600">From</label>
                <input type="text" placeholder="CXB" className="border rounded px-4 py-2 w-full" />
              </div>
              <div className="flex items-center">
                <button className="bg-gray-200 p-2 rounded">⇄</button>
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-600">To</label>
                <input type="text" placeholder="DAC" className="border rounded px-4 py-2 w-full" />
              </div>
              <div className="flex flex-col w-full">
                <label className="mb-1 text-gray-600">Date</label>
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
          </>
        )}
      </div>

      <div className="flex items-center space-x-4 mb-4">
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Travellers</label>
          <select className="border rounded px-4 py-2 w-full">
            <option>1 Traveller</option>
            <option>2 Travellers</option>
            <option>3 Travellers</option>
          </select>
        </div>
        <div className="flex flex-col w-full">
          <label className="mb-1 text-gray-600">Class</label>
          <select className="border rounded px-4 py-2 w-full">
            <option>Economy</option>
            <option>Business</option>
          </select>
        </div>
        <button className="bg-orange-500 text-white px-4 py-2 rounded mt-6">Search</button>
      </div>

      {/* Fare Type */}
      <div className="flex items-center space-x-4">
        <label className="flex items-center">
          <input type="radio" name="fare" className="mr-2" />
          Regular Fare
        </label>
        <label className="flex items-center">
          <input type="radio" name="fare" className="mr-2" />
          Student Fare
        </label>
      </div>
    </div>
  );
};

export default FlightSearch;
