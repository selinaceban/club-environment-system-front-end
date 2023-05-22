import React from "react";
import image from "./images/club.jpg";

const FrontPageComponent = () => {
  return (
    <div class="absolute inset-0 bg-black z-[-10]">
      <img
        src={image}
        alt="./images/club.jpg"
        class="blur-md absolute h-screen inset-0 z-[-10] w-full object-cover object-right md:object-center backdrop-blur-md"
      ></img>
      <div class="relative z-[-10] isolate px-6 lg:px-8">
        <div
          class="absolute z-[-10] inset-x-0 -top-40 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
        </div>
        <div class="mx-auto max-w-2xl sm:py-48 lg:py-56">
          <div class="text-center">
            <h1 class="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Valhalla
            </h1>
            <p class="mt-6 text-lg leading-8 text-gray-400">
              Address: Kamtjatka 11, 8700 Horsens, Denmark
            </p>
          </div>
          <div
            class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrontPageComponent;
