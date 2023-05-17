import React, { useState } from "react";
import classNames from "classnames";

const ClimateControlToggleComponent = () => {
  const [isOn, setIsOn] = useState(false);

  const toggle = () => {
    setIsOn(!isOn);
  };

  return (
    
    <div class="bg-gray-200 p-4 rounded-lg">
    <p class="text-xl font-bold">Climate Control</p>
    <button
      className={classNames(
        "px-4 py-2 rounded-md",
        { "bg-red-500 text-white": !isOn },
        { "bg-green-500 text-white": isOn }
      )}
      onClick={toggle}
    >
      {isOn ? "ON" : "OFF"}
    </button>
  </div>
  );
};

export default ClimateControlToggleComponent;
