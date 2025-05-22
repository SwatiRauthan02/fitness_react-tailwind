import React from "react";
import { Button } from "../ui/button";

const Start = ({startData}) => {
  // console.log(startData);
  return (
    <div className="bg-[#1B1B1B] mx-7 my-[29px] rounded-[80px]">
      <section className="container flex gap-[175px] py-[60px] items-center justify-between">
        <div className="startimgcontainer w-full h-[724px] rounded-[85px]">
        </div>
        <div className="cta flex flex-col gap-9">
          <h1 className="text-[61px] font-bold">{startData.title}</h1>
          <p className="text-[27px] font-normal">{startData.description}</p>
          <div className="textContainers flex gap-[79px]">
            <div className="text1">
              <p className="flex items-center gap-2">
                <span className="text-[#33363F]">{startData.icon}</span>
                <span className="text-[61px] font-bold">{startData.count1}</span>
                <span className="text-[#FD853A] text-[61px] font-bold">+</span>
              </p>
              <p className="text-[27px] font-normal uppercase">{startData.text1}</p>
            </div>
            <div className="text2">
              <p className="flex items-center gap-2">
                <span className="text-[#33363F]">{startData.icon}</span>
                <span className="text-[61px] font-bold">{startData.count2}</span>
                 <span className="text-[#FD853A] text-[61px] font-bold">+</span>
              </p>
              <p className="text-[27px] font-normal uppercase">{startData.text2}</p>
            </div>
          </div>
          <Button variant={"orange"} className='w-[196px] h-[45px] py-[22px] px-[31px] rounded-[25px]'>Get Started</Button>
        </div>
      </section>
    </div>
  );
};

export default Start;
