import React from "react";
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
    </div>
  );
};

export default Home;
