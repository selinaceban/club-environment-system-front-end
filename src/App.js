import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ReadingsComponent from "./ReadingsComponent";
import LoginComponent from "./LoginComponent";
import LimitsComponent from "./LimitsComponent";
import LogTableComponent from './LogTableComponent';
import NavBarComponent from './NavBarComponent';
import FooterComponent from "./FooterComponent";
import NotFoundPageComponent from "./NotFoundPageComponent";
import FrontPageComponent from "./FrontPageComponent";


const App = () => {
  // The data array is passed as a prop to the LogTableComponent
  return (
    <div>
      <BrowserRouter>
        <NavBarComponent />
        <Routes>
         <Route exact path="/" element={<FrontPageComponent />} />
          <Route path="/LoginComponent" element={<LoginComponent />} />
          <Route path="/LimitsComponent" element={<LimitsComponent />} />
          <Route path="/ReadingsComponent" element={<ReadingsComponent />} />
          <Route path="/LogTableComponent" element={<LogTableComponent/>} />
          <Route path="/NotFoundPageComponent" element={<NotFoundPageComponent />} />
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </div>
  );
};

export default App;
