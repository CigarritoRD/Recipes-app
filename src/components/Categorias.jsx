import React, { useState } from "react";
import { FaPizzaSlice, FaPepperHot, FaHamburger } from "react-icons/fa";
import { GiChopsticks } from "react-icons/gi";
import { Link } from "react-router-dom";

const Categorias = () => {
  const [italiana, setItaliana] = useState(false);
  const [americana, setAmericana] = useState(false);
  const [spanish, setSpanish] = useState(false);
  const [chinese, setChinese] = useState(false);

  const handleItaliana = () => {
    setItaliana(!italiana);
    setAmericana(false);
    setSpanish(false);
    setChinese(false);
  };
  const handleAmericana = () => {
    setItaliana(false);
    setAmericana(!americana);
    setSpanish(false);
    setChinese(false);
  };
  const handleSpanish = () => {
    setItaliana(false);
    setAmericana(false);
    setSpanish(!spanish);
    setChinese(false);
  };
  const handleChinese = () => {
    setItaliana(false);
    setAmericana(false);
    setSpanish(false);
    setChinese(!chinese);
  };
  return (
    <div className='flex justify-center gap-3 text-sm z-[80] absolute text-orange-400 cursor-pointer w-full top-[70%] items-end'>
      <Link to='/categoria/italian'>
        <div
          onClick={handleItaliana}
          className={
            italiana
              ? "w-16 h-16 md:w-20 md:h-20 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
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
              ? "w-16 h-16 md:w-20 md:h-20 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
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
              ? "w-16 h-16 md:w-20 md:h-20 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
          }
        >
          <FaHamburger />
          <p>Americana</p>
        </div>
      </Link>
      <Link to='/categoria/chinese'>
        <div
          onClick={handleChinese}
          className={
            chinese
              ? "w-16 h-16 md:w-20 md:h-20 bg-orange-400 text-white rounded-full flex flex-col justify-center items-center border border-white hover:scale-105 transition-all"
              : "w-16 h-16 md:w-20 md:h-20 bg-black rounded-full flex flex-col justify-center items-center border border-orange-400 hover:scale-105 transition-all"
          }
        >
          <GiChopsticks />
          <p>Chinese</p>
        </div>
      </Link>
    </div>
  );
};

export default Categorias;
