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
import FAQ from "../FAQ/FAQ";
import News from "../News/News";
import Tex from "../Tex/Tex";
import Footer from "../Footer/Footer";

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
      <FAQ/>
      <News/>
      <Tex/>
      <Footer/>
      {/* <Plans/> */}
      {/* <PlansData/> */}
    </div>
  );
};

export default Home;
