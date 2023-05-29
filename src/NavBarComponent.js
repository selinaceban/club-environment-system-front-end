import React, { useState } from "react";
import { Card, Typography } from "@material-tailwind/react";
import ClimateControlToggleComponent from "./ClimateControlToggleComponent";

const NavBarComponent = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      {/* Nav bar */}
      <nav className="bg-gray-800 py-4">

          <div className="flex items-center justify-between">
            {/* Toggle icon button */}
            <button className="ml-5 text-white" onClick={toggleSidebar}>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>

            <h1 className="text-white text-2xl font-bold">
              Venue Environment Management
            </h1>
            <div
              className={`${
                isSidebarOpen ? "block" : "hidden"
              } md:block  md:mt-0 mx-5`}

            >
              <a
                href="ReadingsComponent"
                className="text-gray-300 hover:text-white text-base md:mx-4"
              >
                Readings
              </a>
              <a
                href="LimitsComponent"
                className="text-gray-300 hover:text-white text-base md:mx-4 "
              >
                Limits
              </a>
              <a
                href="LogTableComponent"
                className="text-gray-300 hover:text-white text-base md:mx-4"
              >
                Logs
              </a>
            </div>
          </div>

      </nav>
      {/* Sidebar */}
      <div className={`fixed top-15 left-0 h-500 w-64 bg-white shadow-lg z-20 transform rounded-md ${isSidebarOpen ? "translate-x-0 ease-out" : "-translate-x-full ease-in"}`}>

        <Card className="h-full p-4 rounded-md">
          <div className="mb-2 ">
            <Typography variant="h5" color="blue-gray">
              Sidebar
            </Typography>
            </div>
            <div className="border-t-2 border-gray-800">
              <ul>
                <li>
                  <div className="p-4 rounded-lg">
                    <a
                      href="ReadingsComponent"
                      className="text-xl  hover:text-grey "
                    >
                      Readings
                    </a>
                  </div>
                </li>
                <li>
                  <div className="p-4 rounded-lg">
                    <a
                      href="LimitsComponent"
                      className="text-xl hover:text-grey "
                    >
                      Limits
                    </a>
                  </div>
                </li>
                <li>
                  <div className="p-4 rounded-lg">
                    <a
                      href="LogTableComponent"
                      className="text-xl hover:text-grey "
                    >
                      Logs
                    </a>
                  </div>
                </li>
                <li>
                  <ClimateControlToggleComponent />
                </li>
              </ul>
            </div>
          </Card>
        </div>

        {/* Content */}
        <div className="flex-1">{/* Your page content goes here */}</div>
      </div>
  );
};

export default NavBarComponent;
