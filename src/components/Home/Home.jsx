import React from "react";
import Navbar from "../Navbar/Navbar";
import Brand from "../Brand/Brand";
import TrainingData from "../Training/TrainingData";
import Hero from "./Hero";
import Progress from "../Progress/Progress";
import Plans from "../Plan/Plans";
import PlansData from "../Plan/PlansData";
import StepsData from "../TraingStep/StepsData";
import Map from "../Map/Map";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Brand />
      <TrainingData />
      <Progress/>
      <StepsData/>
      <Map/>
      {/* <Plans/> */}
      {/* <PlansData/> */}
    </div>
  );
};

export default Home;
