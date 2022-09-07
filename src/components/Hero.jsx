import React from "react";
// import image from "../Screenshot_2.jpg";
import Categorias from "./Categorias";
import SearchBar from "./SearchBar";

const Hero = () => {
  return (
    <div className='h-[400px] w-full relative'>
      <div className='h-[400px] w-full absolute z-[80] bg-gradient-to-b from-black/60'></div>
      <img
        className=' h-[400px] absolute top-0 object-cover object-center z-[70] gradient-mask-b-80 w-full'
        src={`https://cdn.pixabay.com/photo/2016/12/26/17/28/spaghetti-1932466_960_720.jpg`}
        alt=''
      />
      <SearchBar />
      <Categorias />
    </div>
  );
};

export default Hero;
