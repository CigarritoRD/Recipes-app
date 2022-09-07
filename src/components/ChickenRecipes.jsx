import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
import { useFetch } from "../Hooks/usePopulars";
import { URLS } from "../Urls/ApiUrls";

const ChickenRecipes = () => {
  const { recipes } = useFetch("ChickenRecipes", URLS.chicken);

  return (
    <div className='mt-5'>
      <h2 className='text-2xl font-bold p-2 text-slate-600'>Recetas de pollo</h2>
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
        {recipes
          ? recipes.map((receta) => {
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

export default ChickenRecipes;
