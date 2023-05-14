/* eslint-disable jsx-a11y/anchor-is-valid */
//Notes temperature means reading, It's because I was doing first for only temperature
//so then I just addapted the code and didn't have time to rename everything
import React, { useState, useEffect } from "react";
import "./App.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const TemperatureComponent = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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
          <div className="flex items-center justify-between">
            {/* Left side */}
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold">Venue Air Management</h1>
            </div>

            {/* Menu icon (visible on smaller screens) */}
            <div className="md:hidden">
              <button
                type="button"
                onClick={handleMenuToggle}
                className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
              >
                <svg
                  className="h-6 w-6 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M19 11H5V9H19V11ZM19 5H5V7H19V5ZM19 17H5V15H19V17Z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM20 18H4V16H20V18Z"
                    />
                  )}
                </svg>
              </button>
            </div>

            {/* Right side */}
            <div
              className={`${
                isMenuOpen ? 'block' : 'hidden'
              } md:block mt-4 md:mt-0`}
            >
              <a href="#" className="text-white hover:text-white text-base mx-4 font-semibold 
              {{ currentPage === 'link1' ? 'text-white font-bold' : '' }}">Readings</a>
              <a href="#" className="text-gray-300 hover:text-white text-base md:mx-4">
                Link 2
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-base md:mx-4">
                Link 3
              </a>
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
