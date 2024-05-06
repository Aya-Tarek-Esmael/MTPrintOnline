import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../Card/Card'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';

function CardSlider() {
  
    let products =[{id:0,name:'samsung',price:50000,category:'labtop',onsale:true},
    {id:1,name:'samsung',price:30000,category:'tv',onsale:false},
    {id:2,name:'oppo',price:8000,category:'mobile',onsale:true},
    {id:3,name:'oppo',price:7000,category:'mobile',onsale:true},
    {id:4,name:'samsung',price:12000,category:'mobile',onsale:true},
    {id:5,name:'lg',price:100000,category:'tv',onsale:false},
    {id:6,name:'oppo',price:7000,category:'mobile',onsale:true},
    {id:7,name:'samsung',price:12000,category:'mobile',onsale:true},
    {id:8,name:'samsung',price:30000,category:'tv',onsale:false},
    {id:9,name:'oppo',price:8000,category:'mobile',onsale:true},
    {id:10,name:'oppo',price:7000,category:'mobile',onsale:true},]
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000},
          items: 6
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
   
      <>
        {/* الاكثر طلبا */}
        <div className='container-fluid mt-5'>
        <h1 className='text-center mb-3' >الاكثر طلبا </h1>
            <div className=" ">
           <Carousel responsive={responsive}  >  
            {
            products.map(item =>{
               return <div className='' key={item.id}><Card   data={item} /></div>
              })
              }
            </Carousel>
       </div>
       </div>
       </>

)
}

export default CardSlider
