import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TemperatureComponent from "./TemperatureComponent";
import Login from "./Login";
import Limits from "./Limits";
import "./App.css";

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
          <Route path="Limits" element={<Limits />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
