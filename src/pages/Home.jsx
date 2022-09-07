import React from "react";
import ChickenRecipes from "../components/ChickenRecipes";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Populars from "../components/Populars";
import Vegetarianas from "../components/Vegetarianas";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Populars />
      <Vegetarianas />
      <ChickenRecipes />
    </div>
  );
};

export default Home;
