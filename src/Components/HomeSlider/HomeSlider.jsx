import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img2 from '../../assets/image2.jpg'
import img3 from '../../assets/image4.jpg'
import img4 from '../../assets/image3.jpg'
import img1 from '../../assets/image2.jpg'
function HomeSlider() {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500 ,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000 // Set the autoplay speed in milliseconds (e.g., 3 seconds)
      };

  return (
    
    <Slider {...settings}  className='mt-3 mb-3' style={{'maxWidth':'1312px'}} >
    <div className='position-relative'>
     <img  src={img1} alt="" className='w-100' style={{'height':'430px'}}/>
     <button className="btn btn-light py-2 px-3 position-absolute text-center "    style={{ zIndex: 1, right: '120px',top:'300px',width:'20%' }} href="#">تسوق الان</button>

    </div>
    <div className='position-relative'>
      <img src={img2} alt='' className='w-100' style={{'height':'430px'}}/> 
      <button className="btn btn-light py-2 px-3 position-absolute text-center "    style={{ zIndex: 1, right: '120px',top:'300px',width:'20%' }} href="#">تسوق الان</button>

       </div>
       <div className='position-relative'>
      <img src={img3} alt='' className='w-100' style={{'height':'430px'}}/> 
      <button className="btn btn-light py-2 px-3 position-absolute text-center "    style={{ zIndex: 1, right: '120px',top:'300px',width:'20%' }} href="#">تسوق الان</button>

       </div>
      <div className='position-relative'>
      <img src={img4} alt='' className='w-100' style={{'height':'430px'}}/>  
      <button className="btn btn-light py-2 px-3 position-absolute text-center "    style={{ zIndex: 1, right: '120px',top:'300px',width:'20%' }} href="#">تسوق الان</button>

      </div>
  </Slider>
  
  )
}

export default HomeSlider