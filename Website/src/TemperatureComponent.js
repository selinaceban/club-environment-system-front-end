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
      <div className="container mx-auto">
        {/* Temperature Chart */}
        <div className={`my-8 bg-gray-100 rounded-md ${isHighTemperature ? 'bg-red-100' : ''}`}>
          <h1 className="py-1 px-3 text-2xl font-bold mb-4">Temperature</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/11 pr-4 mx-2">
                  <LineChart width={1050} height={150} data={temperatureData}>
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
                <div className="text-center mx-2">
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
          <h1 className="py-1 px-3 text-2xl font-bold mb-4">Humidity</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/11 pr-4 mx-2">
                  <LineChart width={1050} height={150} data={temperatureData}>
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
                <div className="text-center mx-2">
                  <p className="text-xl font-semibold mb-2">Last Humidity: <br></br>{temperatureData[temperatureData.length - 1]?.humidity}</p>
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
          <h1 className="py-1 px-3 text-2xl font-bold mb-4">CO2</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/11 pr-4 mx-2">
                  <LineChart width={1050} height={150} data={temperatureData}>
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
                <div className="text-center mx-2">
                  <p className="text-xl font-semibold mb-2">Last CO2: <br></br>{temperatureData[temperatureData.length - 1]?.co2}</p>
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
          <h1 className="py-1 px-3 text-2xl font-bold mb-4">Sound</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/11 pr-4 mx-2">
                  <LineChart width={1050} height={150} data={temperatureData}>
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
                <div className="text-center mx-2">
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
          <h1 className="py-1 px-3 text-2xl font-bold mb-4">Light</h1>
          {temperatureData.length > 0 ? (
            <div>
              <div className="flex">
                <div className="w-2/11 pr-4 mx-2">
                  <LineChart width={1050} height={150} data={temperatureData}>
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
                <div className="text-center mx-2">
                  <p className="text-xl font-semibold mb-2">Last Light: <br></br>{temperatureData[temperatureData.length - 1]?.light}</p>
                  <button className="py-1 px-1 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75 align-[4px]">Save Current</button>
                </div>
              </div>
            </div>
          ) : (
            <p>No temperature data available</p>
          )}
        </div>

 {/* Table to help - remove later */}

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

      </div>
    </div>
  );
};

export default TemperatureComponent;
