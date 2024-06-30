 import React from 'react'
 import style from './card.module.css'
 function Card( {data}) {
   return (

<>

  <div className={`card  postion-relative ms-4 mb-4  ${style.cardcontain}`}>
  <img className="w-100"  style={{'margin':'auto','padding':'5px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />

    <div className="card-body text-center">
      <h5 className="card-title">Card title</h5>
      <h5 className="card-title"></h5>
      <p className="card-text">Lorem ipsum dolor sit,iusto architecto facere enim..</p>
    </div>
    <div className="text-center mb-3 ">
    <button onClick={''}   className={`w-75 btn btn-danger ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></button>
    <button onClick={''}   className={` btn btn-danger ms-1 ${style.cardbtn }`}><i   className="fa-solid fa-heart m-1 text-light fa-1x "></i></button>

    </div>
    <div  className={`text-light position-absolute top-0  end-0 rounded-1 w-25 py-2 text-center ${style.cardbtn} `}  > Card price</div>

  </div>


</>
  )
}

export default Card
