import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import NotFound from "../Pages/NotFound";
import FurniturePage from "../Pages/FurniturePage";
import ElectronicsPage from "../Pages/ElectronicsPage"
import FitnessPage from "../Pages/FitnessPage"

export default function AllRoutes(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/furniture" element={<FurniturePage />}/>
        <Route path="/electronics" element={<ElectronicsPage />}/>
        <Route path="/fitness" element={<FitnessPage />}/>
      
      </Routes>
    </>
  );
}
