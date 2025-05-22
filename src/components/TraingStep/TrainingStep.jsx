import React from "react";
import Start from "./Start";
import Work from "./Work";
import Gym from "./Gym";

const TrainingStep = ({ startData, workData, gymData }) => {
  // console.log(startData, gymData, workData);
  return (
    <div className="mt-[135px]">
      <h1 className="text-[61px] font-bold text-center">Training Step</h1>
      <Start startData={startData} />
      <Work workData={workData} />
      <Gym gymData={gymData} />
    </div>
  );
};

export default TrainingStep;
