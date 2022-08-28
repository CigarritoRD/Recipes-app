import React from "react";
import { IoRestaurantOutline } from "react-icons/io5";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='flex fixed w-full justify-between h-28 px-10 items-center bg-gradient-to-b from-black/100 z-[100]'>
      <NavLink to='/'>
        <h1 className='text-2xl md:text-4xl italic font-bold text-white flex items-center'>
          <IoRestaurantOutline className='text-3xl md:text-5xl' />
          Delicias
        </h1>
      </NavLink>
      <div>
        <NavLink to='/sesion'>
          <button className='  text-white text-sm md:text-lg py-2 px-4 md:px-6 bg-orange-400 rounded'>
            Iniciar sesion
          </button>
        </NavLink>
        <NavLink to='registrarse'>
          <button className='border border-orange-400  text-sm md:text-lg py-2 px-4 md:px-6 text-orange-400 rounded ml-2'>
            Registrarse
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
