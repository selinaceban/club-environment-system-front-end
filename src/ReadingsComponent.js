import React, { useState, useEffect } from "react";
import "./App.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";

const ReadingsComponent = () => {
  const [data, setdata] = useState([]);
  const [limits, setLimits] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //should get the data from current date but we doj't have the ior running 24/7 so we putted a date
        //where we know there is data

        //const response = await fetch("https://web-api-j4b5eryumq-ez.a.run.app/readings?date=2023-05-22");
        // get the date from today and make a response
        //make sure that the date is YYYY-MM-DD
        const date = new Date();
        const year = date.getFullYear();
        const month = date.getMonth() + 1;
        const day = date.getDate();
        const dateString = `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
        console.log(dateString);
        const response = await fetch(`https://web-api-j4b5eryumq-ez.a.run.app/readings?requestDate=${dateString}`);
        const data = await response.json();
        setdata(data);
        console.log(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes

    return () => clearInterval(interval); // Clean up the interval 
  }, []);

  useEffect(() => {
    const fetchLimitsData = async () => {
      try {
        const response = await fetch('https://web-api-j4b5eryumq-ez.a.run.app/limits');
        if (response.ok) {
          const data = await response.json();
          setLimits(data);
          console.log(data);
        } else {
          throw new Error("Failed to fetch limits data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLimitsData();
  }, []);

  const isLimitexceeded = (value, highLimit, lowLimit) => {
    //check if it exceeds the high and low limits
    if (value > highLimit || value < lowLimit) {
      return true;
    }
  }


  /* Limits from api */
  const temperature = data[data.length - 1]?.temperature;
  const humidity = data[data.length - 1]?.humidity;
  const co2 = data[data.length - 1]?.co2;

  /* hard coded limits */
  const sound = data[data.length - 1]?.sound;
  const isHighSound = sound > 70;
  const light = data[data.length - 1]?.light;
  const isHighLight = light > 1000;

  /* Fix date received */
  const formatXAxisTick = (time) => {
    const date = new Date(time);

    // Check if the date is valid
    if (isNaN(date.getTime())) {
      return ""; // Return an empty string if the date is invalid
    }

    // Data formating
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    return `${hours}:${minutes}`;
  };

  return (
    <div className="container mx-auto">
      {/* Temperature Chart */}
      <div className={`my-8 bg-gray-100 rounded-md ${isLimitexceeded(temperature, limits?.maxTemperature, limits?.minTemperature) ? 'bg-red-100' : ''}`}>
        <h1 className="py-1 px-3 text-2xl font-bold mb-4">Temperature</h1>
        {data.length > 0 ? (
          <div className="flex">
            <div className="w-full md:w-2/3 pr-4">
              <ResponsiveContainer width="110%" height={150}>
                <LineChart data={data}>
                  <XAxis dataKey="time" tickFormatter={formatXAxisTick} />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="temperature" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <p className="text-xl font-semibold mb-2">Last Temperature:</p>
              <p className="text-3xl font-bold">{data[data.length - 1]?.temperature}</p>
            </div>
          </div>
        ) : (
          <p>No temperature data available</p>
        )}
      </div>

      {/* Humidity Chart */}
      <div className={`my-8 bg-gray-100 rounded-md ${isLimitexceeded(humidity, limits?.maxHumidity, limits?.minHumidity) ? 'bg-red-100' : ''}`}>
        <h1 className="py-1 px-3 text-2xl font-bold mb-4">Humidity</h1>
        {data.length > 0 ? (
          <div className="flex">
            <div className="w-full md:w-2/3 pr-4">
              <ResponsiveContainer width="110%" height={150}>
                <LineChart data={data}>
                  <XAxis dataKey="time" tickFormatter={formatXAxisTick} />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="humidity" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <p className="text-xl font-semibold mb-2">Last Humidity:</p>
              <p className="text-3xl font-bold">{data[data.length - 1]?.humidity}</p>
            </div>
          </div>
        ) : (
          <p>No Humidity data available</p>
        )}
      </div>

      {/* CO2 Chart */}
      <div className={`my-8 bg-gray-100 rounded-md ${isLimitexceeded(co2, limits?.maxCo2) ? 'bg-red-100' : ''}`}>
        <h1 className="py-1 px-3 text-2xl font-bold mb-4">CO2</h1>
        {data.length > 0 ? (
          <div className="flex">
            <div className="w-full md:w-2/3 pr-4">
              <ResponsiveContainer width="110%" height={150}>
                <LineChart data={data}>
                  <XAxis dataKey="time" tickFormatter={formatXAxisTick} />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="co2" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <p className="text-xl font-semibold mb-2">Last CO2:</p>
              <p className="text-3xl font-bold">{data[data.length - 1]?.co2}</p>
            </div>
          </div>
        ) : (
          <p>No CO2 data available</p>
        )}
      </div>

      {/* Sound */}
      <div className={`my-8 bg-gray-100 rounded-md ${isHighSound ? 'bg-red-100' : ''}`}>
        <h1 className="py-1 px-3 text-2xl font-bold mb-4">Sound</h1>
        {data.length > 0 ? (
          <div className="flex">
            <div className="w-full md:w-2/3 pr-4">
              <ResponsiveContainer width="110%" height={150}>
                <LineChart data={data}>
                  <XAxis dataKey="time" tickFormatter={formatXAxisTick} />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="sound" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <p className="text-xl font-semibold mb-2">Last Sound:</p>
              <p className="text-3xl font-bold">{data[data.length - 1]?.sound}</p>
            </div>
          </div>
        ) : (
          <p>No Sound data available</p>
        )}
      </div>

      {/* Light */}
      <div className={`my-8 bg-gray-100 rounded-md ${isHighLight ? 'bg-red-100' : ''}`}>
        <h1 className="py-1 px-3 text-2xl font-bold mb-4">Light</h1>
        {data.length > 0 ? (
          <div className="flex">
            <div className="w-full md:w-2/3 pr-4">
              <ResponsiveContainer width="110%" height={150}>
                <LineChart data={data}>
                  <XAxis dataKey="time" tickFormatter={formatXAxisTick} />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="light" stroke="#8884d8" />
                </LineChart>
              </ResponsiveContainer>
            </div>
            <div className="w-full md:w-1/3 text-center">
              <p className="text-xl font-semibold mb-2">Last Light:</p>
              <p className="text-3xl font-bold">{data[data.length - 1]?.light}</p>
            </div>
          </div>
        ) : (
          <p>No Light data available</p>
        )}
      </div>
    </div>
  );
};

export default ReadingsComponent;
