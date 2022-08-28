import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Categoria = () => {
  const { cat } = useParams();
  const [origen, setOrigen] = useState(null);

  useEffect(() => {
    getByCategoria(cat);
  }, [cat]);

  const getByCategoria = async (cat) => {
    // chekea si estan guardado esos datos de manera local
    const check = JSON.parse(localStorage.getItem(cat));

    const url = `https://api.spoonacular.com/recipes/complexSearch?number=9&apiKey=${process.env.REACT_APP_API_SPOONCULAR_API}&cuisine=${cat}`;

    if (check) {
      // revisa si existe check para hacer fetch
      setOrigen(check);
    } else {
      try {
        const data = await fetch(url);
        const detail = await data.json();
        setOrigen(detail.results);
        // guarda el fetch de manera local
        localStorage.setItem(cat, JSON.stringify(detail.results));
      } catch (error) {
        console.log(error);
      }
    }
  };

  if (origen) {
    return (
      <>
        <Navbar />
        <Hero />
        <div className='grid grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto max-w-[1200px] gap-2'>
          {origen.map((receta) => {
            return (
              <div
                className='border w-full relative rounded-xl overflow-hidden group drop-shadow-md'
                key={receta.id}
              >
                <h4 className='text-white text-2xl absolute z-30 top-[80%] text-center w-full'>
                  {receta.title}
                </h4>
                <div className='relative'>
                  <div className=' absolute w-full h-full bg-gradient-to-tr from-black z-20'></div>
                  <img
                    className='w-full object-cover group-hover:scale-[120%] transition-transform duration-300 z-10'
                    src={receta.image}
                    alt={receta.title}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }
};

export default Categoria;
