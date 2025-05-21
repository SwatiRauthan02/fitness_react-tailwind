import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "../ui/button";

const Training = ({ contents }) => {
  console.log(contents);
  return (
    <div className="bg-[#1B1B1B] mx-7 rounded-[80px] py-[43px] px-[166px]">
      <section className="container flex flex-col gap-[135px]">
        <h1 className="text-[61px] font-bold text-center">
          Fitness Category Training
        </h1>
        <div className="cardContainer grid grid-cols-4 gap-[98px]">
          {contents.map((content, i) => (
            <Card key={i} className="bg-gradient-to-b from-[#B468FF] to-[#8714FB] py-10 rounded-[50px]">
              <CardHeader>
                <img src={content.icon} alt="images" height="58px" width="59px"/>
              </CardHeader>
              <CardContent>
                <CardTitle className="text[21px] font-bold leading-[120%]">{content.title}</CardTitle>
                <CardDescription className="text-white text-[16px] font-normal leading-[157%]">{content.description}</CardDescription>
              </CardContent>
              <CardFooter>
                <Button>Get Started</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Training;
