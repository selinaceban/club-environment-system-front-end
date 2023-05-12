//Notes temperature means reading, It's because I was doing first for only temperature 
//so then I just addapted the code and didn't have time to rename everything
import React, { useState, useEffect } from 'react';

const TemperatureComponent = () => {
  const [temperatureData, setTemperatureData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        //it would be really cool if someone can figure how to import the json before
        // (as react is imported on line 3)
        //For some reason when I try to do it gives a strange error that it start reading some html random file
        //But if not no worries it works like it is rn
        const response = await fetch('/temperature.json'); //this file is located at public foalder so before "SRC"
        const data = await response.json();
        setTemperatureData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
  
    fetchData();
    const interval = setInterval(fetchData, 300000); // Refresh every 5 minutes
  
    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (  
    <div>
      <h1>Temperature</h1>
      {temperatureData.length > 0 ? (
        temperatureData.map((reading, index) => (
          <div key={index}>
            <h2>ID: {index + 1}</h2>
            <p>Temperature: {reading.temperature}</p>
            <p>Humidity: {reading.humidity}</p>
            <p>CO2: {reading.co2}</p>
            <p>Sound: {reading.sound}</p>
            <p>Light: {reading.light}</p>
            <p>Code: {reading.code}</p>
            <p>Time Received: {reading.timeReceived}</p>
          </div>
        ))
      ) : (
        <p>No temperature data available</p>
      )}
    </div>
  );
};

export default TemperatureComponent;
