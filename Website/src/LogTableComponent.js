import React from 'react';

const LogTableComponent = ({ data }) => {
  return (
    <table className="min-w-full bg-white border border-gray-200">
      <thead>
        <tr>
          <th className="py-2 px-4 border-b">Date</th>
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
            <td className="py-2 px-4 border-b">{row.date}</td>
            <td className="py-2 px-4 border-b">{row.temperature}</td>
            <td className="py-2 px-4 border-b">{row.humidity}</td>
            <td className="py-2 px-4 border-b">{row.co2}</td>
            <td className="py-2 px-4 border-b">{row.comment}</td>
            <td className="py-2 px-4 border-b">
              <button className="mr-2 bg-blue-500 text-white py-1 px-2 rounded">Edit</button>
              <button className="bg-red-500 text-white py-1 px-2 rounded">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default LogTableComponent;

