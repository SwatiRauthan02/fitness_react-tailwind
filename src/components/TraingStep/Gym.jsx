import React from 'react'
import { Button } from '../ui/button'

const Gym = ({gymData}) => {
  return (
    <div className="bg-[#1B1B1B] mx-7 my-[33px] rounded-[80px]">
      <section className="container flex gap-[175px] py-[62px] items-center">
        <div className="gymimgcontainer w-full h-[724px] rounded-[85px]">
        </div>
        <div className="cta flex flex-col gap-9">
          <h1 className="text-[61px] font-bold">{gymData.title}</h1>
          <p className="text-[27px] font-normal">{gymData.description}</p>
          <div className="textContainers flex gap-[79px]">
            <div className="text1">
              <p className="flex items-center gap-2">
                <span className="text-[#33363F]">{gymData.icon}</span>
                <span className="text-[61px] font-bold">{gymData.count1}</span>
                <span className="text-[#FD853A] text-[61px] font-bold">+</span>
              </p>
              <p className="text-[27px] font-normal uppercase">{gymData.text1}</p>
            </div>
            <div className="text2">
              <p className="flex items-center gap-2">
                <span className="text-[#33363F]">{gymData.icon}</span>
                <span className="text-[61px] font-bold">{gymData.count2}</span>
                 <span className="text-[#FD853A] text-[61px] font-bold">+</span>
              </p>
              <p className="text-[27px] font-normal uppercase">{gymData.text2}</p>
            </div>
          </div>
          <Button variant={"orange"} className='w-[196px] h-[45px] py-[22px] px-[31px] rounded-[25px]'>Get Started</Button>
        </div>
      </section>
    </div>
  )
}

export default Gym
