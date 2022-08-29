import React, { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";

const Populars = () => {
  const [populars, setPopulars] = useState(null);

  useEffect(() => {
    getPopulars();
  }, []);
  const getPopulars = async () => {
    const checkStorage = JSON.parse(localStorage.getItem("populars"));
    const apiPopulars = `https://api.spoonacular.com/recipes/random?number=9&apiKey=${process.env.REACT_APP_API_SPOONCULAR_API}`;

    if (checkStorage) {
      setPopulars(checkStorage);
      console.log(checkStorage);
    } else {
      try {
        const data = await fetch(apiPopulars);
        const dataDetail = await data.json();
        setPopulars(dataDetail.recipes);
        localStorage.setItem("populars", JSON.stringify(dataDetail.recipes));
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className='mt-5'>
      <h2 className='text-2xl font-bold p-2 text-slate-600'>Las mas populares</h2>
      <Splide
        options={{
          arrows: true,
          padding: "1rem",
          perPage: 4,
          breakpoints: {
            760: {
              perPage: 2,
            },
            1080: {
              perPage: 3,
            },
          },
          rewind: true,
          gap: "1rem",
        }}
      >
        {populars
          ? populars.map((receta) => {
              return (
                <SplideSlide key={receta.id} className=''>
                  <Link to={`/receta/${receta.id}`}>
                    <div className='relative'>
                      <h3 className='top-[80%] w-full text-center absolute text-xl bg-gradient-to-r from-black/60 text-white'>
                        {receta.title}
                      </h3>
                      <img
                        className='rounded-lg w-full shadow-md shadow-slate-200'
                        src={receta.image}
                        alt=''
                      />
                    </div>
                  </Link>
                </SplideSlide>
              );
            })
          : null}
      </Splide>
    </div>
  );
};

export default Populars;
