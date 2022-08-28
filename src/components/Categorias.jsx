import React, { useState } from "react";
import { FaPizzaSlice, FaPepperHot, FaHamburger } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { Link } from "react-router-dom";

const Categorias = () => {
  const [italiana, setItaliana] = useState(false);
  const [americana, setAmericana] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const [japonesa, setJaponesa] = useState(false);

  const handleItaliana = () => {
    setItaliana(!italiana);
    setAmericana(false);
    setSpanish(false);
    setJaponesa(false);
  };
  const handleAmericana = () => {
    setItaliana(false);
    setAmericana(!americana);
    setSpanish(false);
    setJaponesa(false);
  };
  const handleSpanish = () => {
    setItaliana(false);
    setAmericana(false);
    setSpanish(!spanish);
    setJaponesa(false);
  };
  const handleJaponesa = () => {
    setItaliana(false);
    setAmericana(false);
    setSpanish(false);
    setJaponesa(!japonesa);
  };
  return (
    <div className='flex justify-center gap-3 text-lg z-[80] absolute text-orange-400 cursor-pointer w-full top-[70%] items-end'>
      <Link to='/categoria/italian'>
        <div
          onClick={handleItaliana}
          className={
            italiana
              ? "w-24 h-24 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-24 h-24 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
          }
        >
          <FaPizzaSlice />
          <p>Italiana</p>
        </div>
      </Link>
      <Link to='/categoria/spanish'>
        <div
          onClick={handleSpanish}
          className={
            spanish
              ? "w-24 h-24 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-24 h-24 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
          }
        >
          <FaPepperHot />
          <p>Espanola</p>
        </div>
      </Link>
      <Link to='/categoria/american'>
        <div
          onClick={handleAmericana}
          className={
            americana
              ? "w-24 h-24 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-24 h-24 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
          }
        >
          <FaHamburger />
          <p>Americana</p>
        </div>
      </Link>
      <Link to='/categoria/japannese'>
        <div
          onClick={handleJaponesa}
          className={
            japonesa
              ? "w-24 h-24 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-24 h-24 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
          }
        >
          <GiChopsticks />
          <p>Japonesa</p>
        </div>
      </Link>
    </div>
  );
};

export default Categorias;
