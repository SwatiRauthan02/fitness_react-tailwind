import React from 'react'
import Plans from './Plans'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'

const PlansData = () => {
    const plans = [
        {img : img2, title : "Basic", price : "$6.88", description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", },
        {img : img3, title : "Basic", price : "$6.88", description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", },
        {img : img4, title : "Basic", price : "$6.88", description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", }
    ]
  return (
    <>
      <Plans contents={plans}/>
    </>
  )
}

export default PlansData
