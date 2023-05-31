import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import moment from 'moment';

// EditPopup component
const EditPopup = ({ rowData, onClose, onSubmit }) => {
  const { id, time, temperature, humidity, co2, comment } = rowData;
  const [updatedComment, setUpdatedComment] = useState(comment);

  const handleSubmit = () => {
    const updatedData = { id: rowData.id, comment: updatedComment, time: rowData.time, temperature: rowData.temperature, humidity: rowData.humidity, co2: rowData.co2 };

    fetch('https://web-api-j4b5eryumq-ez.a.run.app/comment', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    })
      .then(response => {
        if (response.ok) {
          console.log('Data updated successfully');
          onSubmit(updatedData); // Pass the updated data to the onSubmit callback
          onClose(); // Close the popup
        } else {
          console.error('Error:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg shadow-lg p-4 w-1/2">
        <h2 className="text-lg font-semibold mb-4">Edit Data</h2>
        <form>
          <div>
            <label className="block mb-2 font-medium">ID</label>
            <input
              type="text"
              value={id}
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium">Time Received</label>
            <input
              type="text"
              value={moment(time).format('HH:mm')}
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium">Temperature</label>
            <input
              type="text"
              value={temperature}
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium">Humidity</label>
            <input
              type="text"
              value={humidity}
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium">CO2</label>
            <input
              type="text"
              value={co2}
              className="w-full p-2 border border-gray-300 rounded"
              disabled
            />
          </div>
          <div className="mt-4">
            <label className="block mb-2 font-medium">Comment</label>
            <textarea
              value={updatedComment}
              onChange={event => setUpdatedComment(event.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        </form>
        <div className="mt-4 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg"
          >
            Close
          </button>
          <button
            onClick={handleSubmit}
            className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-lg"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

const LogTableComponent = () => {
  const [data, setData] = useState([]);
  const [selectedDate, setSelectedDate] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [editPopupData, setEditPopupData] = useState(null);

  const handleSubmit = () => {
    const formattedDate = selectedDate ? moment(selectedDate).format('YYYY-MM-DD') : '';

    fetch(`https://web-api-j4b5eryumq-ez.a.run.app/readings?requestDate=${formattedDate}`)
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .then(() => setIsSubmitted(true))
      .catch(error => console.error('Error:', error));
  };

  const handleDataUpdate = updatedData => {
    // After submission of the comment the data should be refreshed to show the updated comment and the rest of the data
    const updatedDataList = data.map(item => {
      if (item.id === updatedData.id) {
        return updatedData;
      }
      return item;
    }
    );
    setData(updatedDataList);
  };

  const handleEditClick = rowData => {
    setEditPopupData(rowData);
  };

  const handleClosePopup = () => {
    setEditPopupData(null);
  };


  /* LIMITS*/
  const [limits, setLimits] = useState(null);
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
          className="m-1 items-center rounded-md bg-blue-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
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

                <td className="">{moment(row.time).format('HH:mm')}</td>
                <td className={isLimitexceeded(row.temperature, limits.maxTemperature, limits.minTemperature) ? "py-2 px-4 border-b bg-red-400" : "py-2 px-4 border-b"}>{row.temperature}</td>
                <td className={isLimitexceeded(row.humidity, limits.maxHumidity, limits.minHumidity) ? "py-2 px-4 border-b bg-red-400" : "py-2 px-4 border-b"}>{row.humidity}</td>
                <td className={isLimitexceeded(row.co2, limits.maxCo2) ? "py-2 px-4 border-b bg-red-400" : "py-2 px-4 border-b"}>{row.co2}</td>
                <td className="py-2 px-4 border-b" style={{ wordBreak: 'break-word' }}>{row.comment}</td>
                <td className="py-2 px-4 border-b">
                  <button
                    onClick={() => handleEditClick(row)}
                    className="mr-2 bg-blue-500 text-white py-1 px-2 rounded"
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        isSubmitted && <p className='text-center text-red-400'>No data available</p>
      )}
      {editPopupData && (
        <EditPopup rowData={editPopupData} onClose={handleClosePopup} onSubmit={handleDataUpdate} />
      )}
    </div>
  );
};

export default LogTableComponent;
