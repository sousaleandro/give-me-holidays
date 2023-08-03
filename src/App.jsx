import React from 'react';
import { Route, Routes } from 'react-router';

import Home from './pages/Home';
import Calendar from './pages/Calendar';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/calendar" element={<Calendar />} />
    </Routes>
  );
}

export default App;
