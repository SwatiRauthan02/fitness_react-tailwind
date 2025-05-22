import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const items = [
    {
      value :"item-1",
      que: "Do you need to follow Maxfit ?",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
       value :"item-2",
      que: "Do you need to follow Maxfit ?",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
       value :"item-3",
      que: "Do you need to follow Maxfit ?",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
       value :"item-4",
      que: "Do you need to follow Maxfit ?",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
    {
       value :"item-5",
      que: "Do you need to follow Maxfit ?",
      ans: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    },
  ];
  return (
    <div className="bg-[#1B1B1B] pt-[72px] pb-[90px]">
      <section className="container">
        <h1 className="text-[61px] font-bold text-center pb-[47px]">FAQ</h1>
        <Accordion type="single" collapsible className="flex flex-col gap-[25px]">
          {items.map((item, i) => (
            <AccordionItem
              key={i}
              value={item.value}
              className="bg-[#0B0B0B] rounded-[80px] data-[state=open]:pl-[70px] data-[state=open]:py-[48px] px-[30px] !border-1 border-[#FB6514]"
            >
              <AccordionTrigger className="text-3xl font-normal">
                {item.que}
              </AccordionTrigger>
              <AccordionContent className="text-[21px] text-[#6F6F6F] w-[744px]">
                {item.ans}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
};

export default FAQ;
