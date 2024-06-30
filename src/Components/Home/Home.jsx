import React from 'react'
import HomeSlider from '../HomeSlider/HomeSlider'
import CardSlider from '../CardSlider/CardSlider'


function Home() {
   
  return (
    <div className='container-fluid' style={{overflow:'hidden'}} > 
        <HomeSlider />
        <CardSlider />
    </div>
  )
}

export default Home
