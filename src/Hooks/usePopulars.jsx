import { useEffect, useState } from "react";

export const useFetch = (nombre, url) => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const getRecipes = async () => {
      const checkStorage = JSON.parse(localStorage.getItem(nombre));

      if (checkStorage) {
        setRecipes(checkStorage);
      } else {
        try {
          const data = await fetch(url);
          const dataDetail = await data.json();
          setRecipes(dataDetail.recipes);
          localStorage.setItem(nombre, JSON.stringify(dataDetail.recipes));
        } catch (error) {
          console.log(error);
        }
      }
    };
    getRecipes();
  }, [nombre, url]);

  return {
    recipes,
  };
};
