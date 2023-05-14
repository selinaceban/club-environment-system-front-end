import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemperatureComponent from "./TemperatureComponent";
import Login from "./Login";
import "./App.css";

const App = () => {
  return (
    <div className="h-full bg-white">
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
