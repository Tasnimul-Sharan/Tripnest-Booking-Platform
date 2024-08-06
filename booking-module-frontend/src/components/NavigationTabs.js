// src/components/NavigationTabs.js
import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
  { name: 'Flight', icon: '✈️', path: '/flight' },
  { name: 'Hotel', icon: '🏨', path: '/hotel' },
  { name: 'Shop', icon: '🛍️', path: '/shop' },
  { name: 'Holiday', icon: '🌴', path: '/holiday' },
  { name: 'Visa', icon: '🛂', path: '/visa' },
  { name: 'Mobile Recharge', icon: '📱', path: '/mobile-recharge' },
  { name: 'Pay Bill', icon: '💸', path: '/pay-bill' }
];

const NavigationTabs = () => {
  return (
    <nav className="bg-white shadow-md">
      <ul className="flex justify-around py-4">
        {tabs.map((tab) => (
          <li key={tab.name} className="text-gray-700 hover:text-blue-600 cursor-pointer">
            <NavLink to={tab.path} className="flex items-center">
              <span className="mr-2">{tab.icon}</span>
              {tab.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationTabs;
