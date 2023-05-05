import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";
import Foods from "../Foods/Foods";
import Getstarted from "../Getstarted/Getstarted";

const Home = () => {
  return (
    <div className="mx-5">
      <Banner></Banner>
      <Foods></Foods>
      <About></About>
      <Getstarted></Getstarted>
    </div>
  );
};

export default Home;
