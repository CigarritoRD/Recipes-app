import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/searched/${search}`);
    console.log(search);
  };
  return (
    <div className='z-[110] absolute w-full flex justify-center top-32 overflow-hidden'>
      <form onSubmit={handleSubmit} action=''>
        <div className=' w-screen'>
          <div className='flex items-center rounded  justify-center w-[90%] mx-auto'>
            <BsSearch size={25} className='text-white mr-2' />
            <input
              onChange={(e) => setSearch(e.target.value)}
              className='py-3 border-none outline-none text-slate-400 text-xl rounded-lg px-4 w-[97%] max-w-[500px] bg-white'
              type='search'
              name=''
              id=''
              placeholder='Busca platos, ingredientes, tipos'
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
