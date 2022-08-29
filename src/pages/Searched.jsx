import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Searched = () => {
  const [searched, setSearched] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    getSearched(name);
  }, [name]);

  const getSearched = async (name) => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${name}&apiKey=${process.env.REACT_APP_API_SPOONCULAR_API}&number=12`;
    const data = await fetch(url);
    const dataDetail = await data.json();
    setSearched(dataDetail?.results);
    // console.log(dataDetail);
  };
  return (
    <>
      <Navbar />
      <Hero />
      <div className='justify-center items-center mx-5 md:mx-15 grid-cols-2 gap-3 grid md:grid-cols-3 lg:grid-cols-5 mt-20'>
        {searched ? (
          searched.map((recipe) => {
            return (
              <Link key={recipe.id} to={`/receta/${recipe.id}`}>
                <div className='relative rouded-xl overflow-hidden group'>
                  <h3 className='absolute text-white text-xl w-full text-center top-10 z-20'>
                    {recipe?.title}
                  </h3>
                  <div className='relative'>
                    <div className='w-full h-full absolute bg-black/40 rounded-xl'></div>
                    <img
                      className='w-full rounded-xl group-hover:scale-[120%] transition-transform duration-500'
                      src={recipe?.image}
                      alt=''
                    />
                  </div>
                </div>
              </Link>
            );
          })
        ) : (
          <h1>no hay resultados</h1>
        )}
      </div>
    </>
  );
};

export default Searched;
