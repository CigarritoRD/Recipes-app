import React from "react";
import { IoRestaurantOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div>
      <div className='grid md:grid-cols-3 px-3 text-xl py-5 mt-10 bg-black/70 text-white gap-2'>
        <div className='border-r border-gray-200 w-full'>
          <h4 className='justify-center text-3xl py-5 flex  items-center gap-2'>
            <IoRestaurantOutline size={30} />
            Delicias
          </h4>
          <p className='py-2'>Quienes somos</p>
          <p className='py-2'>Politicas de Privacidad</p>
          <p className='py-2'>Cookies</p>
          <p className='py-2'>Contacto</p>
        </div>
        <div className='px-2 border-r border-gray-200'>
          <h4 className='text-center text-3xl py-5'>Redes Sociales</h4>
          <p className='py-2'>Facebook</p>
          <p className='py-2'>Instagram</p>
          <p className='py-2'>Twitter</p>
          <p className='py-2'>TickTock</p>
        </div>

        <div className='px-2'>
          <h4 className='text-center text-3xl py-5'>Categorias</h4>
          <p className='py-2'>Comida americana</p>
          <p className='py-2'>Comida Japonesa</p>
          <p className='py-2'>Comida Italiana</p>
          <p className='py-2'>Comida Mexicana</p>
        </div>
      </div>
      <div>
        <p className='text-center text-lg py-5'>
          Todos los derechos reservados <span className='text-2xl font-bold'>Cigarrito RD</span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
