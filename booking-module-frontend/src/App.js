// src/App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavigationTabs from './components/NavigationTabs';
import Flight from './pages/Flight';
import Hotel from './pages/Hotel';
import Shop from './pages/Shop';
import Holiday from './pages/Holiday';
import Visa from './pages/Visa';
import MobileRecharge from './pages/MobileRecharge';
import PayBill from './pages/PayBill';
import Banner from './components/Banner';

const App = () => {
  const [ws, setWs] = useState(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:4000'); // Replace with your WebSocket server address
    setWs(socket);

    socket.onopen = () => {
      console.log('WebSocket connection established');
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div>
      <Header />
      <Banner />
      <div className="px-32 py-14">
      <NavigationTabs />
        <Routes>
          <Route path="/flight" element={<Flight ws={ws} />} />
          <Route path="/hotel" element={<Hotel ws={ws} />} />
          <Route path="/shop" element={<Shop ws={ws} />} />
          <Route path="/holiday" element={<Holiday ws={ws} />} />
          <Route path="/visa" element={<Visa ws={ws} />} />
          <Route path="/mobile-recharge" element={<MobileRecharge ws={ws} />} />
          <Route path="/pay-bill" element={<PayBill ws={ws} />} />
          <Route path="/" element={<Flight ws={ws} />} /> {/* Default Route */}
        </Routes>
      </div>
    </div>
  );
};

export default App;
