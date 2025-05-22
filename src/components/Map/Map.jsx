import React from 'react'
import map from '../../assets/map.png';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';

const Map = () => {
  return (
    <div className='bg-[#1B1B1B]'>
      <section className="container pt-[104px]">
        <h1 className='text-[61px] font-bold text-center pb-[66px]'>Map Location Us</h1>
        <div className="mapContainer bg-gradient-to-b from-black to-white relative">
            <img src={map} alt="map" className='bg-[#1B1B1B]' />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1B1B1B]/70 via-transparent to-transparent" />
            <div className="placeLocation absolute bottom-[42px] left-[100px] flex gap-[696px] items-center">
                <p className='text-[35px] font-bold'>Place your Location Here</p>
                <Button variant={'btn'} className=" w-[220px] h-[62px] rounded-[24px]">Get started <ArrowRight/></Button>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Map
