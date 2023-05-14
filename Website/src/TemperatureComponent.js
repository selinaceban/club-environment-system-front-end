/* eslint-disable jsx-a11y/anchor-is-valid */
//Notes temperature means reading, It's because I was doing first for only temperature
//so then I just addapted the code and didn't have time to rename everything
import React, { useState, useEffect } from "react";
import "./App.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const TemperatureComponent = () => {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //it would be really cool if someone can figure how to import the json before
        // (as react is imported on line 3)
        //For some reason when I try to do it gives a strange error that it start reading some html random file
        //But if not no worries it works like it is rn
        const response = await fetch("/temperature.json"); //this file is located at public foalder so before "SRC"
        const data = await response.json();
        setTemperatureData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Left side */}
            <div>
              <h1 className="text-white text-2xl font-bold">Venue Air Management</h1>
            </div>

            {/* Right side */}
            <div>
              <a href="#" className="text-white hover:text-white text-base mx-4 font-semibold 
              {{ currentPage === 'link1' ? 'text-white font-bold' : '' }}">Readings</a>
              <a href="#" className="text-gray-300 hover:text-white text-base mx-4">Link 2</a>
              <a href="#" className="text-gray-300 hover:text-white text-base mx-4">Link 3</a>
            </div>
          </div>
        </div>
      </nav>
    <div className="container mx-auto">
      <h1 className="text-2xl font-bold mb-4">Readings</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">ID</th>
              <th className="border border-gray-300 px-4 py-2">Date</th>
              <th className="border border-gray-300 px-4 py-2">Temperature</th>
              <th className="border border-gray-300 px-4 py-2">Humidity</th>
              <th className="border border-gray-300 px-4 py-2">CO2</th>
              <th className="border border-gray-300 px-4 py-2">Sound</th>
              <th className="border border-gray-300 px-4 py-2">Light</th>
              <th className="border border-gray-300 px-4 py-2">Code</th>
            </tr>
          </thead>
          <tbody>
            {temperatureData.length > 0 ? (
              temperatureData.map((reading, index) => (
                <tr key={index}>
                  <td className="border border-gray-300 px-4 py-2">{index + 1}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.timeReceived}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.temperature}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.humidity}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.co2}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.sound}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.light}</td>
                  <td className="border border-gray-300 px-4 py-2">{reading.code}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="border border-gray-300 px-4 py-2" colSpan="8">
                  No temperature data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    

      <h1>Temperature</h1>
      {temperatureData.length > 0 ? (
        <div>
          <LineChart width={500} height={300} data={temperatureData}>
            <XAxis dataKey="timeReceived" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
          </LineChart>
          {temperatureData.map((reading, index) => (
            <div key={index}>
              {/* Display the individual temperature readings */}
              <p>Temperature: {reading.temperature}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No temperature data available</p>
      )}
      
      <h1>Humidity</h1>
      {temperatureData.length > 0 ? (
        <div>
          <LineChart width={500} height={300} data={temperatureData}>
            <XAxis dataKey="timeReceived" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
          </LineChart>
          {temperatureData.map((reading, index) => (
            <div key={index}>
              {/* Display the individual temperature readings */}
              <p>humidity: {reading.humidity}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No temperature data available</p>
      )}
      </div>
    </div>
  );
};

export default TemperatureComponent;
