import React from 'react'
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
       <section id="homeContainer" className='pt-[289px] pb-[130px]'>
        <div className="container">
          <div className="cta w-[640px] flex flex-col gap-8">
            <h1 className="text-[80px] font-bold">
              Shape Your Body With Us Here
            </h1>
            <p className="text-[27px] font-normal">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s.
            </p>
            <div className="btncontainer flex mt-[62px] gap-10">
              <Input className='rounded-[25px] !bg-white' placeholder='Enter your Email here' />
              <Button variant={"orange"} className="py-[18px] !px-[26px] text-[22px] font-normal">
                Get Started <ArrowRight />
              </Button>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Hero
