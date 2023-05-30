  import React, { useState, useEffect } from 'react';

  const ClimateControlToggleComponent = () => {
    const [isOn, setIsOn] = useState(false);

    useEffect(() => {
      fetch('https://web-api-j4b5eryumq-ez.a.run.app/state')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch climate control state');
          }
          return response.json();
        })
        .then(data => {
          setIsOn(data.isOn); // Assuming the API response is in the format { "isOn": true/false }
        })
        .catch(error => {
          console.error('Error:', error);
          console.error('Failed to fetch climate control state ');
        });
    }, []);

    const toggle = () => {
      setIsOn(!isOn);

      fetch('https://web-api-j4b5eryumq-ez.a.run.app/state', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(!isOn),
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to update climate control state');
          
          }
          console.log(response)
          return response.json();
          
        })
        .then(data => {
          setIsOn(Boolean(data));
        })
        .catch(error => {
          console.error('Error:', error);
          
        });
    };
    return (
      <div className="bg-gray-200 p-4 rounded-lg">
        <p className="text-xl font-bold">Climate Control</p>
        <button
          className={`px-4 py-2 rounded-md ${isOn ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
          onClick={toggle}
        >
          {isOn ? 'ON' : 'OFF'}
        </button>
      </div>
    );
  };

  export default ClimateControlToggleComponent;
