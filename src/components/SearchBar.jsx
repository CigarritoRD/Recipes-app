import React from "react";
import { BsSearch } from "react-icons/bs";

const SearchBar = () => {
  return (
    <div className='z-[110] absolute w-full flex justify-center top-32'>
      <form action=''>
        <div className='flex border border-slate-600 items-center bg-black rounded px-3'>
          <BsSearch size={30} className='text-white' />
          <input
            className='py-3 border-none bg-transparent outline-none text-white text-xl rounded-lg px-4 w-[400px]'
            type='search'
            name=''
            id=''
            placeholder='Busca platos, ingredientes, tipos'
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
