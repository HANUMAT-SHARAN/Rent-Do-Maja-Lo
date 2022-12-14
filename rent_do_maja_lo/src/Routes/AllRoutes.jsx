import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";



export default function AllRoutes(props) {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}
