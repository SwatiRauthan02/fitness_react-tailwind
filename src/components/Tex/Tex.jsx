import React from "react";
import { Button } from "../ui/button";

const Tex = () => {
  const content = {
    title: ["Place Your Text Here"," Profesional Text Here"],
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  };
  return (
    <div className="bg-[#1B1B1B]">
      <div className="texContainer bg-[#181818] mx-[25px] rounded-[80px] py-[129px]">
        <section className="container w-[955px] flex flex-col items-center">
            {content.title.map((Item,i) => (
                <h1 className="text-[61px] font-bold text-center" key={i}>{Item}<br /></h1>
                
            ))}
            <p className="text-[27px] text-center pt-[51px]">{content.description}</p>
            <Button variant={'orange'} className='w-[196px] h-[45px] mt-[10px]'>Get Started</Button>
        </section>
      </div>
    </div>
  );
};

export default Tex;
