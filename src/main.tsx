import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import 'antd/dist/antd.css'; // or '
import Home from './Pages/Home';
import FlightSchedule from './Pages/FlightSchedule';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/flight-schedule" element={<FlightSchedule />} />
        {/* The next line is very important for the Navigate component to work */}
        {/* <Route path="/error-paimport FlightSchedule from './Pages/FlightSchedule/FlightSchedule';
ge" element={<ErrorPage />} />
        <Route path="/redirect" element={<Navigate to="/error-page" />} /> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
