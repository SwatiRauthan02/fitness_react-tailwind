import React from 'react'
import Plans from './Plans'

const PlansData = () => {
    const plans = [
        {title : "Basic", price : "$6.88", description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", },
        {title : "Basic", price : "$6.88", description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", },
        {title : "Basic", price : "$6.88", description : "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", }
    ]
  return (
    <>
      <Plans contents={plans}/>
    </>
  )
}

export default PlansData
