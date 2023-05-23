import React from "react";
import image1 from "./images/Valhalla.jpg";
import image2 from "./images/Valhalla2.jpg";
import image3 from "./images/Valhalla3.jpg";
import image4 from "./images/Valhalla4.jpg";
import image5 from "./images/Valhalla5.jpg";
import image6 from "./images/Valhalla6.jpg";

const FrontPageComponent = () => {
  return (
    // <div class="absolute inset-0 bg-black z-[-10]">
    //   <img
    //     src={image}
    //     alt="./images/club.jpg"
    //     class="blur-md absolute h-screen inset-0 z-[-10] w-full object-cover object-right md:object-center backdrop-blur-md"
    //   ></img>
    //   <div class="relative z-[-10] isolate px-6 lg:px-8">
    //     <div
    //       class="absolute z-[-10] inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
    //       aria-hidden="true"
    //     ></div>
    //     <div class="mx-auto max-w-2xl sm:py-48 lg:py-96">
    //       <div class="text-center">
    //         <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
    //           Valhalla
    //         </h1>
    //         <p class="mt-12 text-lg leading-8 text-gray-400">
    //           Address: Kamtjatka 11, 8700 Horsens, Denmark
    //         </p>
    //       </div>
    //       <div
    //         class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
    //         aria-hidden="true"
    //       >
    //         {" "}
    //       </div>
    //     </div>
    //   </div>
    // </div>
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
            href="#"
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
          alt="Image 1"
        ></img>
        <img
          src={image2}
          class="absolute top-[40%] left-[55%] w-[350px] h-[250px] rounded-lg "
          alt="Image 2"
        ></img>
        <img
          src={image3}
          class="absolute top-[68%] left-[55%] w-[350px] h-[250px] rounded-lg "
          alt="Image 3"
        ></img>
        <img
          src={image4}
          class="absolute top-[8%] left-[75%] w-[350px] h-[250px] rounded-lg "
          alt="Image 4"
        ></img>
        <img
          src={image5}
          class="absolute top-[36%] left-[75%] w-[350px] h-[250px] rounded-lg "
          alt="Image 5"
        ></img>
        <img
          src={image6}
          class="absolute top-[64%] left-[75%] w-[350px] h-[250px] rounded-lg "
          alt="Image 6"
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
