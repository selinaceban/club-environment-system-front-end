import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Login';
import TemperatureComponent from './TemperatureComponent';
import LogTableComponent from './LogTableComponent';

const App = () => {
  const data = [
    {
      date: '2023-05-15',
      temperature: '23°C',
      humidity: '65%',
      co2: '400 ppm',
      comment: 'None',
    },
    {
      date: '2023-05-16',
      temperature: '28°C',
      humidity: '85%',
      co2: '400 ppm',
      comment: 'Critical',
    },
    {
      date: '2023-05-17',
      temperature: '19°C',
      humidity: '45%',
      co2: '300 ppm',
      comment: 'Too low',
    },
  ];

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/TemperatureComponent" element={<TemperatureComponent />} />
          <Route path="/LogTableComponent" element={<LogTableComponent data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
