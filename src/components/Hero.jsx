import React from "react";
import image from "../Screenshot_2.jpg";
import Categorias from "./Categorias";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className='h-[400px] w-full relative'>
      <div className='h-[400px] w-full absolute z-[80] bg-gradient-to-b from-black/60'></div>
      <img
        className='w-full h-[400px] absolute top-0 object-cover object-center z-[70] gradient-mask-b-80'
        src={image}
        alt=''
      />
      <SearchBar />
      <Categorias />
    </div>
  );
};

export default Hero;
