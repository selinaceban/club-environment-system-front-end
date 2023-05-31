import React, { useState, useEffect } from "react";
import "./App.css";

const Limits = () => {
  const [minTemperature, setLTemp] = useState("");
  const [maxTemperature, setUTemp] = useState("");
  const [minHumidity, setLHum] = useState("");
  const [maxHumidity, setUHum] = useState("");
  const [maxCo2, setCO2] = useState("");

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

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      checkIfValid(
        minTemperature,
        maxTemperature,
        minHumidity,
        maxHumidity,
        maxCo2
      )
    ) {
      try {
        const limitsData = {
          minTemperature,
          maxTemperature,
          minHumidity,
          maxHumidity,
          maxCo2,
        };

        const response = await fetch(
          "https://web-api-j4b5eryumq-ez.a.run.app/limits",
          {
            method: "PUT",

            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(limitsData),
          }
        );
        console.log(limitsData);

        if (response.ok) {
          alert("Limits saved successfully");
        } else {
          throw new Error("Failed to update limits");
        }
      } catch (error) {
        console.error(error);
        alert("An error occurred while saving limits");
      }
    }
  };

  useEffect(() => {
    const fetchLimitsData = async () => {
      try {
        const response = await fetch(
          "https://web-api-j4b5eryumq-ez.a.run.app/limits"
        );
        if (response.ok) {
          const data = await response.json();
          setLTemp(data.minTemperature);
          setUTemp(data.maxTemperature);
          setLHum(data.minHumidity);
          setUHum(data.maxHumidity);
          setCO2(data.maxCo2);
        } else {
          throw new Error("Failed to fetch limits data");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchLimitsData();
  }, []);

  return (
    <div>
      <div className="bg-white py-24 sm:py-16">
        <h1 className="mb-16 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
          Limits
        </h1>
        <div className="mx-auto grid max-w-4xl gap-x-6 gap-y-20 px-6 lg:px-1 xl:grid-cols-3">
          <div className=" border max-w-2xl space-y-16 rounded-md px-3.5 py-2.5 text-sm ">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Temperature
              </h2>
            </div>
            <div>
              <p className="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Upper Limit
              </p>
              <div className="relative">
                <span className="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  °C
                </span>
                <input
                  value={maxTemperature}
                  onChange={handleUTempChange}
                  type="text"
                  pattern="[0-9]*"
                  inputmode="numeric"
                  className=" mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p className="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 24 °C
              </p>
            </div>

            <div>
              <p className="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Lower Limit
              </p>
              <div className="relative">
                <span className="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  °C
                </span>
                <input
                  value={minTemperature}
                  onChange={handleLTempChange}
                  type="text"
                  className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p className="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 18 °C
              </p>
            </div>
          </div>

          <div className=" border max-w-2xl space-y-16 rounded-md px-3.5 py-2.5 text-sm ">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                Humidity
              </h2>
            </div>
            <div>
              <p className="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Upper Limit
              </p>
              <div className="relative">
                <span className="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  %
                </span>
                <input
                  value={maxHumidity}
                  onChange={handleUHumChange}
                  type="text"
                  className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p className="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 60 %
              </p>
            </div>

            <div>
              <p className="mt-6 mb-2 text-lg leading-8 text-black-600 text-center">
                Lower Limit
              </p>
              <div className="relative">
                <span className="absolute inset-y-2 right-10 flex items-center pr-1 text-gray-500">
                  %
                </span>
                <input
                  value={minHumidity}
                  onChange={handleLHumChange}
                  type="text"
                  className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>

              <p className="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 30 %
              </p>
            </div>
          </div>

          <div className=" border max-w-2xl space-y-16 rounded-md px-3.5 py-2.5 text-sm ">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center">
                CO2
              </h2>
            </div>
            <div>
              <p className="mt-12 mb-2 text-lg leading-8 text-black-600 text-center">
                Upper Limit
              </p>
              <div className="relative">
                <span className="absolute inset-y-2 right-5 flex items-center pr-1 text-gray-500">
                  ppm
                </span>
                <input
                  value={maxCo2}
                  onChange={handleCO2Change}
                  data-testid="co2-input"
                  type="text"
                  className="mx-auto block w-1/2 rounded-md border-0 py-1.5 pl-2 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                ></input>
              </div>
              <p className="mt-2 text-lg leading-8 text-gray-400 text-center">
                Recommended Limit: 800 ppm
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="mt-7 w-96 h-14 items-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save Limits
          </button>
        </div>
      </div>
    </div>
  );
};

export const checkIfValid = (LTemp, UTemp, LHum, UHum, CO2) => {
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

export default Limits;
