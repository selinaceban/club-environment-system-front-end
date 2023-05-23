import React from "react";
import image1 from "./images/Valhalla.jpg";
import image2 from "./images/Valhalla2.jpg";
import image3 from "./images/Valhalla3.jpg";
import image4 from "./images/Valhalla4.jpg";
import image5 from "./images/Valhalla5.jpg";
import image6 from "./images/Valhalla6.jpg";
import ReadingsComponent from "./ReadingsComponent";

const FrontPageComponent = () => {
  return (
    <div>
      <div>
        <div class="absolute flex h-2/5 items-end">
          <h1 class="ml-96 font-bold tracking-tight text-gray-900 text-7xl text-center">
            Valhalla
          </h1>
        </div>
        <div class="absolute flex h-1/2 items-end">
          <p class="ml-52 text-2xl text-gray-700 ">
            Horsens Student Bar, the place to be on the Friday nights!
          </p>
        </div>
        <div>
          <a
            href="ReadingsComponent"
            class="absolute top-[70%] left-[23%] z-10 rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
          >
            To Readings
          </a>
        </div>
      </div>
      <div>
        <img
          src={image1}
          class="absolute top-[12%] left-[55%] w-[350px] h-[250px] rounded-lg "
          alt="./images/Valhalla.jpg"
        ></img>
        <img
          src={image2}
          class="absolute top-[40%] left-[55%] w-[350px] h-[250px] rounded-lg "
          alt="./images/Valhalla2.jpg"
        ></img>
        <img
          src={image3}
          class="absolute top-[68%] left-[55%] w-[350px] h-[250px] rounded-lg "
          alt="./images/Valhalla3.jpg"
        ></img>
        <img
          src={image4}
          class="absolute top-[8%] left-[75%] w-[350px] h-[250px] rounded-lg "
          alt="./images/Valhalla4.jpg"
        ></img>
        <img
          src={image5}
          class="absolute top-[36%] left-[75%] w-[350px] h-[250px] rounded-lg "
          alt="./images/Valhalla5.jpg"
        ></img>
        <img
          src={image6}
          class="absolute top-[64%] left-[75%] w-[350px] h-[250px] rounded-lg "
          alt="./images/Valhalla6.jpg"
        ></img>
      </div>
      {/* <div>
        <div class="flex items-center justify-center w-screen pt-4">
          <div aria-hidden="true" class="pointer-events-none">
            <div class="flex items-center space-x-6 lg:space-x-32">
              <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class=" h-64 w-128 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                  <img
                    src={image1}
                    alt="./images/Valhalla.jpg"
                    class=" h-full w-full object-cover object-center "
                  ></img>
                </div>
                <div class="h-64 w-128 overflow-hidden rounded-lg">
                  <img
                    src={image2}
                    alt="./images/Valhalla2.jpg"
                    class="h-full w-full object-cover object-center "
                  ></img>
                </div>
              </div>
              <div class="grid flex-shrink-0 grid-cols-1 gap-y-8 ">
                <div class="h-64 w-128 overflow-hidden rounded-lg">
                  <img
                    src={image3}
                    alt="./images/Valhalla3.jpg"
                    class="  h-full w-full object-cover object-center "
                  ></img>
                </div>
                <div class="h-64 w-128 overflow-hidden rounded-lg"></div>
                <div class="h-64 w-128 overflow-hidden rounded-lg">
                  <img
                    src={image4}
                    alt="./images/Valhalla4.jpg"
                    class="  h-full w-full object-cover object-center "
                  ></img>
                </div>
              </div>
              <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                <div class="h-64 w-128 overflow-hidden rounded-lg">
                  <img
                    src={image5}
                    alt="./images/Valhalla5.jpg"
                    class="  h-full w-full object-cover object-center "
                  ></img>
                </div>
                <div class="h-64 w-128 overflow-hidden rounded-lg">
                  <img
                    src={image6}
                    alt="./images/Valhalla6.jpg"
                    class="  h-full w-full object-cover object-center "
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FrontPageComponent;
