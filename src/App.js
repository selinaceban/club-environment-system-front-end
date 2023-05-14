import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemperatureComponent from "./TemperatureComponent";
import Login from "./Login";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="TemperatureComponent"
            element={<TemperatureComponent />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
