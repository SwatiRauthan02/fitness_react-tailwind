import React from "react";
import Navbar from "../Navbar/Navbar";
import Brand from "../Brand/Brand";
import TrainingData from "../Training/TrainingData";
import Hero from "./Hero";
import Progress from "../Progress/Progress";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Brand />
      <TrainingData />
      <Progress/>
    </>
  );
};

export default Home;
