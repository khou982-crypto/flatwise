import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import Dashboard from './pages/Dashboard';
import Module1 from './pages/Module1';
import Module2 from './pages/Module2';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/welcome" element={<Onboarding />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/module/1" element={<Module1 />} />
          <Route path="/module/2" element={<Module2 />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
