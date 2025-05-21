import React from "react";
import track from "../../assets/track.svg";
import cradion from "../../assets/cradion.svg";
import dumble from "../../assets/dumble.svg";
import time from "../../assets/time.svg";
import notify from "../../assets/notify.svg";
import grow from "../../assets/grow.svg";
import fit from "../../assets/Fit.svg";
import Training from "./Training";

const TrainingData = () => {
  const data = [
    {
      icon: track,
      title: "Track Your Training",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: cradion,
      title: "Cradion Training",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: dumble,
      title: "Body Builder Training",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: time,
      title: "Time Training",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: notify,
      title: "Notif Training",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: grow,
      title: "Analitic Your Training",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: fit,
      title: "List Your Training",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
    {
      icon: fit,
      title: "Fitness Cardio",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been",
    },
  ];

  return (
    <>
      <Training contents={data} />
    </>
  );
};

export default TrainingData;
