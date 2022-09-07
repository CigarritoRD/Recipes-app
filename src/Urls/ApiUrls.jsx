export const URLS = {
  populares: `https://api.spoonacular.com/recipes/random?number=9&apiKey=${process.env.REACT_APP_API_SPOONCULAR_API}`,
  vegetarianas: `https://api.spoonacular.com/recipes/random?number=9&tags=vegetarian&apiKey=${process.env.REACT_APP_API_SPOONCULAR_API}`,
  chicken: `https://api.spoonacular.com/recipes/random?number=9&tags=chicken&apiKey=${process.env.REACT_APP_API_SPOONCULAR_API}`,
};
