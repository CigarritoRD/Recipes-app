import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Categoria from "./Categoria";
import Sesion from "./Sesion";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categoria/:cat' element={<Categoria />} />
        <Route path='/sesion' element={<Sesion />} />
      </Routes>
    </div>
  );
};

export default Pages;
