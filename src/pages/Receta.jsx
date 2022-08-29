import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

const Receta = () => {
  const [recipe, setRecipe] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getRecipeDetail(id);
  }, [id]);

  const getRecipeDetail = async (id) => {
    const check = JSON.parse(localStorage.getItem(id));
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${process.env.REACT_APP_API_SPOONCULAR_API}`;

    if (!check) {
      try {
        const data = await fetch(url);
        const dataDetail = await data.json();
        setRecipe(dataDetail);

        localStorage.setItem(id, JSON.stringify(dataDetail));
      } catch (error) {
        console.log(error);
      }
    } else {
      setRecipe(check);
      console.log(check);
    }
  };
  return (
    <>
      <Navbar />
      <Hero />
      <div className='mx-5 max-w-[800px]'>
        <div className='max-w-[600px]'>
          <h1 className='text-3xl my-5 font-bold'>{`${recipe?.title}`}</h1>
          <div className=''>
            <img className='w-[100%] border p-3' src={recipe?.image} alt='' />
          </div>
        </div>
        <div className='border-b border-t py-5 border-slate-300 bg-gradient-to-r from-white px-10'>
          <h2 className='text-2xl uppercase my-5 font-medium underline'>ingredientes:</h2>
          {recipe?.extendedIngredients.map((ingrediente) => (
            <p className='text-xl underline'>{ingrediente.original}</p>
          ))}
        </div>
        <div>
          <h2 className='text-2xl uppercase my-5 font-medium'>Instrucciones:</h2>

          <div
            className='text-xl leading-9'
            dangerouslySetInnerHTML={{ __html: recipe?.instructions }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Receta;
