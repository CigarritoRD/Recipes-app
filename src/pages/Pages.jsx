import React from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Categoria from "./Categoria";
import Sesion from "./Sesion";
import Receta from "./Receta";
import Searched from "./Searched";

const Pages = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/categoria/:cat' element={<Categoria />} />
        <Route path='/sesion' element={<Sesion />} />
        <Route path='/receta/:id' element={<Receta />} />
        <Route path='/searched/:name' element={<Searched />} />
      </Routes>
    </div>
  );
};

export default Pages;
