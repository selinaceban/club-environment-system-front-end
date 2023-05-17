import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import TemperatureComponent from "./TemperatureComponent";

const Limits = () => {
  const [LTemp, setLTemp] = useState("");
  const [UTemp, setUTemp] = useState("");
  const [LHum, setLHum] = useState("");
  const [UHum, setUHum] = useState("");
  const [CO2, setCO2] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLTempChange = (event) => {
    const LTempValue = event.target.value;
    const sanitizedLTempValue = LTempValue.replace(/[^0-9]/g, "");
    setLTemp(sanitizedLTempValue);
  };

  const handleUTempChange = (event) => {
    const UTempValue = event.target.value;
    const sanitizedUTempValue = UTempValue.replace(/[^0-9]/g, "");
    setUTemp(sanitizedUTempValue);
  };

  const handleUHumChange = (event) => {
    const UHumValue = event.target.value;
    const sanitizedUHumValue = UHumValue.replace(/[^0-9]/g, "");
    setUHum(sanitizedUHumValue);
  };

  const handleLHumChange = (event) => {
    const LHumValue = event.target.value;
    const sanitizedLHumValue = LHumValue.replace(/[^0-9]/g, "");
    setLHum(sanitizedLHumValue);
  };

  const handleCO2Change = (event) => {
    const CO2Value = event.target.value;
    const sanitizedCO2Value = CO2Value.replace(/[^0-9]/g, "");
    setCO2(sanitizedCO2Value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (checkIfValid(LTemp, UTemp, LHum, UHum, CO2)) {
      alert("insert SendLimits function");
    }
  };

  const checkIfValid = (LTemp, UTemp, LHum, UHum, CO2) => {
    if (parseInt(LTemp) < parseInt(UTemp)) {
      if (parseInt(LHum) < parseInt(UHum)) {
        if (0 < parseInt(CO2)) {
          return true;
        } else {
          alert("Invalid CO2 limit");
          return false;
        }
      } else {
        alert("Invalid Humidity limits");
        return false;
      }
    } else {
      alert("Invalid Temperature limits");
      return false;
    }
  };

  return (
    <div>
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
              className={`${
                isMenuOpen ? "block" : "hidden"
              } md:block mt-4 md:mt-0`}
            >
              <a
                href="TemperatureComponent"
                className="text-gray-300 hover:text-white text-base md:mx-4"
              >
                Readings
              </a>
              <a
                href="#"
                className="text-white hover:text-white text-base mx-4 font-semibold 
              {{ currentPage === 'link2' ? 'text-white font-bold' : '' }}"
              >
                Limits
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
      <div class="bg-white py-24 sm:py-16">
        <h1 class="mb-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Limits
        </h1>
        <div class="mx-auto grid max-w-4xl gap-x-6 gap-y-20 px-6 lg:px-1 xl:grid-cols-3">
          <div class=" border max-w-2xl space-y-16 rounded-md px-3.5 py-2.5 text-sm ">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Temperature
              </h2>
            </div>
            <div>
              <p class="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Upper Limit
              </p>
              <div class="relative">
                <span class="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  °C
                </span>
                <input
                  value={UTemp}
                  onChange={handleUTempChange}
                  type="text"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  class=" mx-auto block w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p class="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 24 °C
              </p>
            </div>

            <div>
              <p class="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Lower Limit
              </p>
              <div class="relative">
                <span class="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  °C
                </span>
                <input
                  value={LTemp}
                  onChange={handleLTempChange}
                  type="text"
                  class="mx-auto block w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p class="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 18 °C
              </p>
            </div>
          </div>
          <div class=" border max-w-2xl space-y-16 rounded-md px-3.5 py-2.5 text-sm ">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Humidity
              </h2>
            </div>
            <div>
              <p class="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Upper Limit
              </p>
              <div class="relative">
                <span class="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  %
                </span>
                <input
                  value={UHum}
                  onChange={handleUHumChange}
                  type="text"
                  class="mx-auto block w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p class="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 60 %
              </p>
            </div>

            <div>
              <p class="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Lower Limit
              </p>
              <div class="relative">
                <span class="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  %
                </span>
                <input
                  value={LHum}
                  onChange={handleLHumChange}
                  type="text"
                  class="mx-auto block w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p class="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 30 %
              </p>
            </div>
          </div>
          <div class=" border max-w-2xl space-y-16 rounded-md px-3.5 py-2.5 text-sm ">
            <div>
              <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                CO2
              </h2>
            </div>
            <div>
              <p class="mt-12 mb-2 text-lg leading-8 text-black-600 text-center">
                Upper Limit
              </p>
              <div class="relative">
                <span class="absolute inset-y-2 right-5 flex items-center pr-1 text-gray-500">
                  ppm
                </span>
                <input
                  value={CO2}
                  onChange={handleCO2Change}
                  type="text"
                  class="mx-auto block w-1/4 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
              <p class="mt-2 text-lg leading-8 text-gray-400 text-center">
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
    </div>
  );
};

export default Limits;
