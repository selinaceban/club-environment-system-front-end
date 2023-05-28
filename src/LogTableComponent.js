import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

const LogTableComponent = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);

  const handleSubmit = () => {
    // Make an API request here to retrieve JSON data based on the selected date
    // Replace 'apiEndpoint' with your actual API endpoint

    //https://web-api-j4b5eryumq-ez.a.run.app/readings?date=2023-05-22
    const formattedDate = selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : '';

    fetch(`https://web-api-j4b5eryumq-ez.a.run.app/readings?date=${formattedDate}`)
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error:', error));
      console.log(formattedDate);
  };

  return (
    <div>
      <h1 className="mb-10 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
        Day Logs
      </h1>
      <div className="flex flex-col items-center mb-4">
        <p className="text-center">Select a date to view the logs for that day</p>
        <div className="mx-auto m-1">
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            className="w-64 p-2 border border-gray-300 rounded"
          />
        </div>
        <button
          onClick={handleSubmit}
          className="m-1 items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Submit
        </button>
      </div>
      {Array.isArray(data) && data.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b">Time</th>
              <th className="py-2 px-4 border-b">Temperature</th>
              <th className="py-2 px-4 border-b">Humidity</th>
              <th className="py-2 px-4 border-b">CO2</th>
              <th className="py-2 px-4 border-b">Comment</th>
              <th className="py-2 px-4 border-b">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td className="py-2 px-4 border-b">{moment(row.timeReceived).format('HH:mm')}</td>
                <td className="py-2 px-4 border-b">{row.temperature}</td>
                <td className="py-2 px-4 border-b">{row.humidity}</td>
                <td className="py-2 px-4 border-b">{row.co2}</td>
                <td className="py-2 px-4 border-b">{row.comment}</td>
                <td className="py-2 px-4 border-b">
                  <button className="mr-2 bg-blue-500 text-white py-1 px-2 rounded">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default LogTableComponent;
