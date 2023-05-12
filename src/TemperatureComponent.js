//Notes temperature means reading, It's because I was doing first for only temperature
//so then I just addapted the code and didn't have time to rename everything
import React, { useState, useEffect } from "react";
import "./App.css";

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
      <h1>Readings</h1>
      <table>
        <tr>
          <th>ID</th>
          <th>Date</th>
          <th>Temperature</th>
          <th>Humidity</th>
          <th>CO2</th>
          <th>Sound</th>
          <th>Light</th>
          <th>Code</th>
        </tr>
        {temperatureData.length > 0 ? (
          temperatureData.map((reading, index) => (
            //<div key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>{reading.timeReceived}</td>
              <td>{reading.temperature}</td>
              <td>{reading.humidity}</td>
              <td>{reading.co2}</td>
              <td>{reading.sound}</td>
              <td>{reading.light}</td>
              <td>{reading.code}</td>
            </tr>
            //</div>
          ))
        ) : (
          <p>No temperature data available</p>
        )}
      </table>
    </div>
  );
};

export default TemperatureComponent;
