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
      <div className="pb-20 pt-8 sm:pb-40 sm:pt-12 md:pb-10 md:pt-16 lg:pb-10 lg:pt-20 xl:pb-60 xl:pt-24">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="pb-20 pt-8 sm:pb-40 sm:pt-12 md:pb-10 md:pt-16 lg:pb-10 lg:pt-20 xl:pb-60 xl:pt-24">
            <div className="sm:max-w-lg">
              <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
                Valhalla
              </h1>
              <p className="mt-4 text-base text-gray-500 sm:text-lg md:text-xl lg:text-2xl">
                Horsens Student Bar, the place to be on Friday nights!
              </p>
            </div>
            <div className="mt-10">
              <a
                href="ReadingsComponent"
                className="ml-3 inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 sm:w-auto"
              >
                To Readings
              </a>
              <a
                href="LimitsComponent"
                className="ml-3 inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 sm:w-auto"
              >
                To Limits
              </a>
              <a
                href="LogTableComponent"
                className="ml-3 inline-flex items-center justify-center px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-700 sm:w-auto"
              >
                To Logs
              </a>
            </div>
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">gallery</h1>
          <div className="mt-10">
            <div className="flex justify-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-1">
                  <div className="aspect-w-1 aspect-h-1">
                    <div className="object-cover object-center rounded-lg shadow-lg">
                      <img
                        src={image1}
                        alt="Image 1"
                        className="rounded-lg"
                      ></img>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="object-cover object-center rounded-lg shadow-lg">
                        <img
                          src={image2}
                          alt="Image 2"
                          className="rounded-lg"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="object-cover object-center rounded-lg shadow-lg">
                        <img
                          src={image3}
                          alt="Image 3"
                          className="rounded-lg"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-1">
                  <div className="aspect-w-1 aspect-h-1">
                    <div className="object-cover object-center rounded-lg shadow-lg">
                      <img
                        src={image4}
                        alt="Image 4"
                        className="rounded-lg"
                      ></img>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="object-cover object-center rounded-lg shadow-lg">
                        <img
                          src={image5}
                          alt="Image 5"
                          className="rounded-lg"
                        ></img>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="aspect-w-1 aspect-h-1">
                      <div className="object-cover object-center rounded-lg shadow-lg">
                        <img
                          src={image6}
                          alt="Image 6"
                          className="rounded-lg"
                        ></img>
                      </div>
                    </div>
                  </div>
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
