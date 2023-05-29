import React from "react";
import image1 from "./images/Valhalla.jpg";
import image2 from "./images/Valhalla2.jpg";
import image3 from "./images/Valhalla3.jpg";
import image4 from "./images/Valhalla4.jpg";
import image5 from "./images/Valhalla5.jpg";
import image6 from "./images/Valhalla6.jpg";

const FrontPageComponent = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-0">
          <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pt-40">
            <div className="sm:max-w-lg">
              <h1 className="ml-36 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                Valhalla
              </h1>
              <p className="mt-4 text-xl text-gray-500">
                Horsens Student Bar, the place to be on the Friday nights!
              </p>
            </div>
            <div className="mt-20">
              <a
                href="ReadingsComponent"
                className="ml-9 z-10 rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                To Readings
              </a>
              <a
                href="LimitsComponent"
                className="ml-4 z-10 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                To Limits
              </a>
              <a
                href="LogTableComponent"
                className="ml-4 z-10 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                To Logs
              </a>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
          >
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8"></div>
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <img
                    src={image1}
                    alt="Image 1"
                    className="rounded-lg ml-28 mt-10"
                  ></img>
                  <img
                    src={image2}
                    alt="Image 2"
                    className="rounded-lg ml-28 my-4"
                  ></img>
                  <img
                    src={image3}
                    alt="Image 3"
                    className="rounded-lg ml-28 my-4"
                  ></img>
                </div>
                <div className="col-span-1">
                  <img
                    src={image4}
                    alt="Image 4"
                    className="rounded-lg ml-28"
                  ></img>
                  <img
                    src={image5}
                    alt="Image 5"
                    className="rounded-lg ml-28 my-4"
                  ></img>
                  <img
                    src={image6}
                    alt="Image 6"
                    className="rounded-lg ml-28 my-4"
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPageComponent;
