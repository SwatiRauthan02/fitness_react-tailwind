import React from "react";
import fit from "../../assets/Fit.svg";
import text from "../../assets/text.svg";
import cradion from "../../assets/cradion.svg";

const News = () => {
  const items = [
    {
      icon: text,
      title: "Place Your Text",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      icon: cradion,
      title: "Place Your Text",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
    {
      icon: fit,
      title: "Place Your Text",
      Description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    },
  ];
  return (
    <div className="bg-[#1B1B1B] py-[14px] font-[Inter]">
      <h1 className="text-[61px] font-bold pb-[74px] text-center ">
        Fitness News
      </h1>

      <div className="bg-black mx-[26px] rounded-[80px]">
        <div className="container py-[147px] flex gap-[109px]">
          {items.map((item, i) => (
            <div className="flex flex-col gap-[17px]" key={i}>
              <img src={item.icon} alt="iocns" className="w-[70px]" />
              <h1 className="text-[36px] font-bold">{item.title}</h1>
              <p className="text-[21px] font-normal text-[#667085]">{item.Description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
