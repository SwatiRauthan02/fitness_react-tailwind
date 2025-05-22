import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../ui/button";
import { ArrowRight, SquareCheckBig } from "lucide-react";


const Plans = ({contents}) => {
    console.log(contents);
  return (
    <div className="bg-[#1B1B1B] mx-7 my-[23px] rounded-[80px] py-[84px]  px-[240px]">
      <section className="planContainer">
        <h1 className="text-[61px] font-bold text-center">Choose Your Plans</h1>
        <div className="planCards flex gap-[99px]">
             {/* className="bg-gradient-to-b from-[#c0bbbb] to-transparent" */}
          <Card id="planCard" className="text-center">
            <CardHeader>
                <CardTitle className="text-[36px] font-bold">Basic</CardTitle>
              <CardTitle className="text-[61px] font-bold">$6.88 <span className="text-[21px] font-normal">/Month</span></CardTitle>
              <CardDescription>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</CardDescription>
            </CardHeader>
            <CardContent>
                <p className="flex before:content-['',w-[20px]] "><SquareCheckBig />Lorem ipsum dolor sit amet consectetur.</p>
                <p className="flex"><SquareCheckBig />Lorem ipsum dolor sit amet consectetur.</p>
                <p className="flex"><SquareCheckBig />Lorem ipsum dolor sit amet consectetur.</p>
                <p className="flex"><SquareCheckBig />Lorem ipsum dolor sit amet consectetur.</p>
                <p className="flex"><SquareCheckBig />Lorem ipsum dolor sit amet consectetur.</p>
            </CardContent>
            <CardFooter>
                <Button>Get Started <ArrowRight/></Button>
            </CardFooter>
          </Card>
          {/* <Card id="planCard">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card>
          <Card id="planCard">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card Content</p>
            </CardContent>
            <CardFooter>
              <p>Card Footer</p>
            </CardFooter>
          </Card> */}
        </div>
      </section>
    </div>
  );
};

export default Plans;
