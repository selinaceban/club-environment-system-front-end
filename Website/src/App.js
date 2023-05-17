
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemperatureComponent from "./TemperatureComponent";
import Limits from "./Limits";
import LogTableComponent from './LogTableComponent';


const App = () => {

  //the data array is passed as a prop to the LogTableComponent 
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
          <Route path="/limits" element={<Limits />} />
          <Route path="/" element={<TemperatureComponent />} /> {/* Default route */}
          <Route path="/log" element={<LogTableComponent data={data} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;





