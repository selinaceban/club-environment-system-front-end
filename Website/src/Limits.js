import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

const Limits = () => {
  const navigate = useNavigate();
  const [LTemp, setLTemp] = useState("");
  const [UTemp, setUTemp] = useState("");
  const [LHum, setLHum] = useState("");
  const [UHum, setUHum] = useState("");
  const [CO2, setCO2] = useState("");

  const handleLTempChange = (event) => {
    setLTemp(event.target.value);
  };

  const handleUTempChange = (event) => {
    setUTemp(event.target.value);
  };

  const handleUHumChange = (event) => {
    setUHum(event.target.value);
  };

  const handleLHumChange = (event) => {
    setLHum(event.target.value);
  };

  const handleCO2Change = (event) => {
    setCO2(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkIfValid(LTemp, UTemp, LHum, UHum, CO2)) {
      alert("insert SendLimits function");
    } else {
      alert("Empty or Invalid Limits");
    }
  };

  const checkIfValid = (LTemp, UTemp, LHum, UHum, CO2) => {
    if (LTemp < UTemp && 0 <= LHum && LHum < UHum && UHum <= 100 && CO2 > 0) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <div class="bg-white py-24 sm:py-32">
      <div class="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div class=" border max-w-2xl space-y-32 rounded-md px-3.5 py-2.5 text-sm ">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Temperature
            </h2>
          </div>
          <div>
            <p class="mt-6 text-lg leading-8 text-black-600 text-center">
              Upper Limit
            </p>
            <div class="relative">
              <span class="absolute inset-y-2 right-2 flex items-center pr-1 text-gray-500">
                °C
              </span>
              <input
                value={UTemp}
                onChange={handleUTempChange}
                type="text"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>

            <p class="mt-6 text-lg leading-8 text-gray-400 text-center">
              Recommended Limit: 24 °C
            </p>
          </div>

          <div>
            <p class="mt-6 text-lg leading-8 text-black-600 text-center">
              Lower Limit
            </p>
            <div class="relative">
              <span class="absolute inset-y-2 right-2 flex items-center pr-1 text-gray-500">
                °C
              </span>
              <input
                value={LTemp}
                onChange={handleLTempChange}
                type="text"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>

            <p class="mt-6 text-lg leading-8 text-gray-400 text-center">
              Recommended Limit: 18 °C
            </p>
          </div>
        </div>
        <div class=" border max-w-2xl space-y-32 rounded-md px-3.5 py-2.5 text-sm ">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              Humidity
            </h2>
          </div>
          <div>
            <p class="mt-6 text-lg leading-8 text-black-600 text-center">
              Upper Limit
            </p>
            <div class="relative">
              <span class="absolute inset-y-2 right-2 flex items-center pr-1 text-gray-500">
                %
              </span>
              <input
                value={UHum}
                onChange={handleUHumChange}
                type="text"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>

            <p class="mt-6 text-lg leading-8 text-gray-400 text-center">
              Recommended Limit: 60 %
            </p>
          </div>

          <div>
            <p class="mt-6 text-lg leading-8 text-black-600 text-center">
              Lower Limit
            </p>
            <div class="relative">
              <span class="absolute inset-y-2 right-2 flex items-center pr-1 text-gray-500">
                %
              </span>
              <input
                value={LHum}
                onChange={handleLHumChange}
                type="text"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>

            <p class="mt-6 text-lg leading-8 text-gray-400 text-center">
              Recommended Limit: 30 %
            </p>
          </div>
        </div>
        <div class=" border max-w-2xl space-y-32 rounded-md px-3.5 py-2.5 text-sm ">
          <div>
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
              CO2
            </h2>
          </div>
          <div>
            <p class="mt-6 text-lg leading-8 text-black-600 text-center">
              Upper Limit
            </p>
            <div class="relative">
              <span class="absolute inset-y-2 right-2 flex items-center pr-1 text-gray-500">
                ppm
              </span>
              <input
                value={CO2}
                onChange={handleCO2Change}
                type="text"
                class="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
            <p class="mt-6 text-lg leading-8 text-gray-400 text-center">
              Recommended Limit: 800 ppm
            </p>
          </div>
        </div>
      </div>
      <div class="flex justify-center ">
        <button
          type="submit"
          onClick={handleSubmit}
          class="mt-7 w-96 h-14 items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Save Limits
        </button>
      </div>
    </div>
  );
};

export default Limits;
