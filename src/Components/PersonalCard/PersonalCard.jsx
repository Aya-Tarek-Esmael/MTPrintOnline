import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFav } from '../../Redux/slices/PersonalCardsSlice';
import style from './PersonalCard.module.css'

function PersonalCard({data}) {
console.log(data);
    const nav = useNavigate();
    const dispatch = useDispatch();
    function addToFav() {
        dispatch(addToFav(data));
        // nav(`/moviedet/${data.id}`, { state: data });
    }
  return (
   
    // <div className="card" style={{ width: "18rem" }}>
    //         <img className="card-img-top" src={"https://image.tmdb.org/t/p/w500/" + data.poster_path} />
    //         <div className="card-body">
    //             <h5 className="card-title"> {data.title}</h5>
    //             <p className="card-text">
    //                 {data.overview}
    //             </p>
    //             <button className="btn btn-primary" onClick={addToFav}> go to</button>
    //             {/* <Link to={`/moviedet/${data.id}`} className="btn btn-primary">
    //                 go to
    //             </Link> */}
    //         </div>
    //     </div>
    // personal card

    
   <div className={`card  mb-4  ${style.cardcontain} ms-5`}>
      <Link to={`/personalcards/${data.name}`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'170px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
    <div className="card-body text-center">
      <h6 className="card-title">{data.name}</h6>
       </div>
       <div className="text-center">
       <button onClick={''}   className={` btn btn-danger w-75  ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></button>
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger me-1  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <button onClick={''}   className={` btn btn-danger me-5  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></button>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <button onClick={''}   className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></button>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
     </Link>
   </div>





  )
}

export default PersonalCard
