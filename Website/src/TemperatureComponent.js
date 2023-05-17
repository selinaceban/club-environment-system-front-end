import React, { useState, useEffect } from "react";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend
} from "recharts";

const TemperatureComponent = () => {
  const [temperatureData, setTemperatureData] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/temperature.json");
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



  /* Limits */
  const temperature = temperatureData[temperatureData.length - 1]?.temperature;
  const isHighTemperature = temperature > 25;

  const humidity = temperatureData[temperatureData.length - 1]?.humidity;
  const isHighHumidity = humidity > 60;

  const co2 = temperatureData[temperatureData.length - 1]?.co2;
  const isHighCo2 = co2 > 1000;

  const sound = temperatureData[temperatureData.length - 1]?.sound;
  const isHighSound = sound > 70;

  const light = temperatureData[temperatureData.length - 1]?.light;
  const isHighLight = light > 1000;

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Left side */}
            <div className="flex items-center">
              <h1 className="text-white text-2xl font-bold">
                Venue Air Management
              </h1>
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
              className={`${isMenuOpen ? "block" : "hidden"
                } md:block mt-4 md:mt-0`}
            >
              <a
                href="#"
                className="text-white hover:text-white text-base mx-4 font-semibold"
              >
                Readings
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-base md:mx-4"
              >
                Link 2
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white text-base md:mx-4"
              >
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
            {/* Table headers */}
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
            {/* Table body */}
            <tbody>
              {temperatureData.length > 0 ? (
                temperatureData.map((reading, index) => (
                  <tr key={index}>
                    <td className="border border-gray-300 px-4 py-2">
                      {index + 1}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reading.timeReceived}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reading.temperature}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reading.humidity}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reading.co2}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reading.sound}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reading.light}
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      {reading.code}
                    </td>
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

        {/* Temperature Chart */}
        <div className={`my-8 bg-gray-100 rounded-md ${isHighTemperature ? 'bg-red-100' : ''}`}>
          <h1 className="py-1 px-3 text-2xl font-bold mb-4">Temperature</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/3 pr-4">
                  <LineChart width={600} height={150} data={temperatureData}>
                    <XAxis dataKey="timeReceived" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="temperature"
                      stroke="#8884d8"
                    />
                  </LineChart>
                </div>
                <div className="w-1/2 text-center">
                  <p className="text-xl font-semibold mb-2">Last Temperature: <br></br>{temperatureData[temperatureData.length - 1]?.temperature}</p>
                  <button className="py-1 px-1 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 align-[4px]">Save Current</button>
                </div>
              </div>
            </div>
          ) : (
            <p>No temperature data available</p>
          )}
        </div>

        {/* Humidity Chart */}
        <div className={`my-8 bg-gray-100 rounded-md ${isHighHumidity ? 'bg-red-100' : ''}`}>
          <h1 className="py-1 px-3   text-2xl font-bold mb-4">Humidity</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/3 pr-4">
                  <LineChart width={600} height={150} data={temperatureData}>
                    <XAxis dataKey="timeReceived" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="humidity"
                      stroke="#8884d8"
                    />
                  </LineChart>
                </div>
                <div className="w-1/2 text-center">
                  <p className="text-xl font-semibold mb-2">Last humidity: <br></br>{temperatureData[temperatureData.length - 1]?.humidity}</p>
                  <button className="py-1 px-1 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 align-[4px]">Save Current</button>
                </div>
              </div>
            </div>
          ) : (
            <p>No temperature data available</p>
          )}
        </div>

        {/* CO2 Chart */}
        <div className={`my-8 bg-gray-100 rounded-md ${isHighCo2 ? 'bg-red-100' : ''}`}>
          <h1 className="py-1 px-3   text-2xl font-bold mb-4">CO2</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/3 pr-4">
                  <LineChart width={600} height={150} data={temperatureData}>
                    <XAxis dataKey="timeReceived" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="co2"
                      stroke="#8884d8"
                    />
                  </LineChart>
                </div>
                <div className="w-1/2 text-center">
                  <p className="text-xl font-semibold mb-2">Last co2: <br></br>{temperatureData[temperatureData.length - 1]?.co2}</p>
                  <button className="py-1 px-1 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 align-[4px]">Save Current</button>
                </div>
              </div>
            </div>
          ) : (
            <p>No temperature data available</p>
          )}
        </div>

        {/* Sound */}
        <div className={`my-8 bg-gray-100 rounded-md ${isHighSound ? 'bg-red-100' : ''}`}>
          <h1 className="py-1 px-3   text-2xl font-bold mb-4">Sound</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/3 pr-4">
                  <LineChart width={600} height={150} data={temperatureData}>
                    <XAxis dataKey="timeReceived" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="sound"
                      stroke="#8884d8"
                    />
                  </LineChart>
                </div>
                <div className="w-1/2 text-center">
                  <p className="text-xl font-semibold mb-2">Last Sound: <br></br>{temperatureData[temperatureData.length - 1]?.sound}</p>
                  <button className="py-1 px-1 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 align-[4px]">Save Current</button>
                </div>
              </div>
            </div>
          ) : (
            <p>No temperature data available</p>
          )}
        </div>
        {/* Light */}
        <div className={`my-8 bg-gray-100 rounded-md ${isHighLight ? 'bg-red-100' : ''}`}>
          <h1 className="py-1 px-3   text-2xl font-bold mb-4">Light</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/3 pr-4">
                  <LineChart width={600} height={150} data={temperatureData}>
                    <XAxis dataKey="timeReceived" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="light"
                      stroke="#8884d8"
                    />
                  </LineChart>
                </div>
                <div className="w-1/2 text-center">
                  <p className="text-xl font-semibold mb-2">Last Light: <br></br>{temperatureData[temperatureData.length - 1]?.light}</p>
                  <button className="py-1 px-1 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 align-[4px]">Save Current</button>
                </div>
              </div>
            </div>
          ) : (
            <p>No temperature data available</p>
          )}
        </div>


      </div>
    </div>
  );
};

export default TemperatureComponent;
