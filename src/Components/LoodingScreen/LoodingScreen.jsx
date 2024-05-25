import React from 'react'
import './LoodingScreen.css'
function LoadingScrean() {
  return (
    // <div className='v-100 bg-light bg-opacity-50 d-flex justify-content-center align-items-center '  >
    //   <i className='fa-solid fa-spinner fa-spin fa-7x '></i>
    // </div>
    <div className='bg-opacity-50 d-flex justify-content-center align-items-center loadercontainer' >
    <span className="loader" style={{'zIndex':'1111'}}></span>
    </div>
  )
}

export default LoadingScrean
