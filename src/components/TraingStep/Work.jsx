import React from "react";
import { Button } from "../ui/button";
import { CircleCheckBig } from "lucide-react";

const Work = ({ workData }) => {
  return (
    <div className="bg-[#1B1B1B] mx-7 my-[29px] rounded-[80px]">
      <section className="container flex gap-[175px] py-[53px] items-center justify-between">
        <div className="cta flex flex-col gap-[50px] ">
          <h1 className="text-[61px] font-bold">{workData.title}</h1>
          {workData.heading.map((item, i) => (
            <div className="content flex  items-center gap-[53px]" key={i}>
              <div className="w-31 h-31 bg-[#F1F1F1] text-[#545454] rounded-[30px] flex items-center justify-center">
                {/* <CircleCheckBig /> */}
                {item.icon}
              </div>
              <div>
                <h2 className="text-[27px] font-bold">{item.title}</h2>
                <p className="text-[21px] font-normal leading-[158%]">
                  {item.para}
                </p>
              </div>
            </div>
          ))}

          <Button variant={"orange"} className="w-[196px] h-[45px] py-[22px] px-[31px] rounded-[25px]">
            Get Started
          </Button>
        </div>
        <div className="workimgcontainer w-[668px] h-[724px] rounded-[85px]"></div>
      </section>
    </div>
  );
};

export default Work;
