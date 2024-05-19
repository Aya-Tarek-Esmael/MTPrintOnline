import axios from 'axios';
import React, { useEffect, useState } from 'react'
import PersonalCard from '../PersonalCard/PersonalCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from 'react-router-dom';
import style from './PersonalCards.module.css'

function CardSlider() {
  
    let products =[{id:0,name:'كارت عادي',price:50000,category:'labtop',onsale:true},
    {id:1,name:'كارت كيرف',price:30000,category:'tv',onsale:false},
    {id:2,name:'كارت ستيكر',price:8000,category:'mobile',onsale:true},
    {id:3,name:'كارت مط وجهين',price:7000,category:'mobile',onsale:true},
    {id:4,name:'كارت سبوت مقاس 8.5*5',price:12000,category:'mobile',onsale:true},
    {id:5,name:'كارت سبوت كيرف مقاس 5.5*9',price:100000,category:'tv',onsale:false},
    {id:6,name:'كارت مط كبير بدون كيرف',price:7000,category:'mobile',onsale:true},
    {id:7,name:'كارت عادي بظهر لون واحد',price:12000,category:'mobile',onsale:true},
    {id:8,name:'كارت مط وجهين',price:30000,category:'tv',onsale:false},]
    
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
        <div className='container-fluid mt-5 px-1 '>
        <h6  className=' '>منتجات ذات صلة </h6>
        <hr className={`${style.hrcolor} mb-5`}/>
            <div className="col-12 ">
           <Carousel responsive={responsive}  >  
            
            {/* personal cards */}
    
    {/* Card 1*/}
    <div className={`card  mb-4  ${style.cardcontain}  ms-4 `}>
    <Link to={`كارت-عادي`}   className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3   ${style.titlefont}`} >كارت عادي</h6>
    <Link  to={`كارت-عادي`}  className={` btn btn-danger w-100 mt-2 ${style.cardbtn } `}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    
    <div className="text-center">
    <div className={`${style.wishlistbtn}  `}>
    <button onClick={''}   className={` btn btn-danger me-1  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link  to={`كارت-عادي`}    className={` btn btn-danger me-5   ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none  `}>
    <Link  to={`كارت-عادي`} className={` btn btn-danger me-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger   rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>
    
    {/* Card2 */}
    <div className={`card  mb-4  ${style.cardcontain} ms-4`}>
    <Link to={`كارت-كيرف`}   className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3  ${style.titlefont}`} >كارت كيرف</h6>
    <Link to={`كارت-كيرف`}  className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    <div className="text-center">
    <div className={`${style.wishlistbtn} `}>
    <button onClick={''}   className={` btn btn-danger me-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link to={`كارت-كيرف`}  className={` btn btn-danger me-5  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none `}>
    <Link to={`كارت-كيرف`}     className={` btn btn-danger me-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger me-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>

{/* Card3 */}
<div className={`card  mb-4  ${style.cardcontain}  ms-4`}>
    <Link to={`كارت-عادي-بظهر-واحد-لون`}   className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3  ${style.titlefont}`} > كارت عادي بظهر واحد لون</h6>
    <Link to={`كارت-عادي-بظهر-واحد-لون`}     className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    
    <div className="text-center">
    <div className={`${style.wishlistbtn} `}>
    <button onClick={''}   className={` btn btn-danger me-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link to={`كارت-عادي-بظهر-واحد-لون`}      className={` btn btn-danger me-5   ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none `}>
    <Link to={`كارت-عادي-بظهر-واحد-لون`}    className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>
     {/* Card4 */}
     <div className={`card  mb-4  ${style.cardcontain}  ms-4`}>
    <Link to={`كارت-سبوت-مقاس-8.5*5`}   className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3  ${style.titlefont}`} >كارت سبوت مقاس 8.5*5</h6>
    <Link to={`كارت-سبوت-مقاس-8.5*5`}    className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    
    <div className="text-center">
    <div className={`${style.wishlistbtn} `}>
    <button onClick={''}   className={` btn btn-danger me-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link to={`كارت-سبوت-مقاس-8.5*5`}      className={` btn btn-danger me-5   ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none `}>
    <Link to={`كارت-سبوت-مقاس-8.5*5`}    className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>

     {/* Card 5 */}
     <div className={`card  mb-4  ${style.cardcontain}  ms-4`}>
    <Link to={`كارت-ستيكر`}   className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3  ${style.titlefont}`} >كارت ستيكر</h6>
    <Link to={`كارت-ستيكر`} className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    
    <div className="text-center">
    <div className={`${style.wishlistbtn} `}>
    <button onClick={''}   className={` btn btn-danger me-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link to={`كارت-ستيكر`}    className={` btn btn-danger me-5  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none `}>
    <Link to={`كارت-ستيكر`} className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>
     {/* Card 6*/}
     <div className={`card  mb-4  ${style.cardcontain}  ms-4`}>
     <Link to={`كارت-مط-وجهين`}  className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3  ${style.titlefont}`} >كارت مط وجهين</h6>
    <Link to={`كارت-مط-وجهين`} className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    
    <div className="text-center">
    <div className={`${style.wishlistbtn} `}>
    <button onClick={''}   className={` btn btn-danger me-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link to={`كارت-مط-وجهين`}  className={` btn btn-danger me-5   ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none `}>
    <Link to={`كارت-مط-وجهين`} className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>
     {/* Card 7*/}
     <div className={`card  mb-4  ${style.cardcontain}  ms-4`}>
    <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`}   className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3  ${style.titlefont}`} >كارت سبوت كيرف مقاس 5.5*9</h6>
    <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`}   className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    
    <div className="text-center">
    <div className={`${style.wishlistbtn} `}>
    <button onClick={''}   className={` btn btn-danger me-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`}    className={` btn btn-danger me-5  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none `}>
    <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`} className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>
     {/* Card 8*/}
     <div className={`card  mb-4  ${style.cardcontain}  ms-4`}>
    <Link to={`كارت-مط-كبير-بدون-كيرف`}   className="text-dark">
    <img className="w-100"  style={{'margin':'auto','padding':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    </Link>
    <div className="card-body text-center">
    <h6 className={`card-title mt-3 ${style.titlefont}`} >كارت مط كبير بدون كيرف</h6>
    <Link to={`كارت-مط-كبير-بدون-كيرف`}   className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
    </div>
    
    <div className="text-center">
    <div className={`${style.wishlistbtn} `}>
    <button onClick={''}   className={` btn btn-danger me-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    <Link to={`كارت-مط-كبير-بدون-كيرف`}   className={` btn btn-danger me-5   ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    
    </div>
    <div className={`${style.wishlistbtnmob} d-md-none `}>
    <Link to={`كارت-مط-كبير-بدون-كيرف`}  className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
    <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
    </div> 
    </div>
    </div>
    
         
            </Carousel>
       </div>
       </div>
       </>

)
}

export default CardSlider
