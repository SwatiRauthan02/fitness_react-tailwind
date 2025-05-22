import { CircleCheckBig, Settings } from "lucide-react";
import React from "react";
import TrainingStep from "./TrainingStep";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";

const StepsData = () => {
  const startData = {
    img: img2,
    title: "Start Training With Us",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: <Settings />,
    count1: "3.000",
    text1: "Place Your text",
    count2: "5.000",
    text2: "place your text",
    btn: "Get Started",
  };

  const workData = {
    img: img4,
    title: "How Its Work",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry",

    heading: [
      {
        icon :<CircleCheckBig size={68}/>,
        title :"Body Training",
        para :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        icon :<CircleCheckBig size={68}/>,
        title :"Cardio Training",
        para :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
      {
        icon :<CircleCheckBig size={68}/>,
        title :"Endurance Training",
        para :"Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      },
    ],
  };

  const gymData = {
    img: img3,
    title: "Never Give Up For Training Gym",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    icon: <Settings />,
    count1: "4.000",
    text1: "Place Your text",
    count2: "5.000",
    text2: "place your text",
    btn: "Get Started",
  };

  return (
    <>
      <TrainingStep
        startData={startData}
        workData={workData}
        gymData={gymData}
      />
    </>
  );
};

export default StepsData;
