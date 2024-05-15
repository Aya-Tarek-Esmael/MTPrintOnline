import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalCards } from '../../Redux/slices/PersonalCardsSlice';
import PersonalCard from '../PersonalCard/PersonalCard';
import { Link } from 'react-router-dom';
import style from './PersonalCards.module.css'
import NormallCard from './NormallCard';
 
 function PersonalCards() {
    
    // const dispatch = useDispatch();
    // const personalcards = useSelector(state => state.PersonalCardsReducer.personalcards);
    // const flag = useSelector(state => state.PersonalCardsReducer.loading);


    useEffect(() => {
        // axiosInstance.get("").then(data => {
        //     console.log(data.data.results)
        //     setPersonalCards([...data.data.results]);
        // })
        // dispatch(getPersonalCards());
    }, [])
   return (
     <>
       


<div className='container-fluid   my-5 mx-5' >
  
    <div style={{direction:'rtl'}}  className='me-3'> 
      <div  className="center_column col-xs-12 col-sm-12 col-md-12 col-lg-12 "  >
                           <div className=""> 
                        <Link className="home" to="/home" title="Return to Home"><i className="fa-solid fa-house text-danger "></i></Link> 
                                                <span className="navigation-pipe">&gt;</span> كروت شخصية  
                    </div>
                </div>
            
             
      
                <form action="" method="GET" id="display_sort_form"  className='d-flex my-3'> 

                     <div className="col-xs-12 col-sm-1 col-md-1 col-lg-1 ">
                        <label> عرض :</label>
                    </div> 
                    <div className="col-xs-12 col-sm-2 col-md-2 col-lg-2">
                        <div className="form-group ">
                            <div className="" style={{'width': '162px'}}> 
                                
                                <select name="display_count" className="form-control  submit_display_sort_form">
                                    <option value="4" >4</option>
                                    <option value="16" selected>16</option>
                                    <option value="48" >48</option>
                                    <option value="96" >96</option>
                                    <option value="144" >144</option>
                                    <option value="192" >192</option>
                                </select>
                             </div>
                        </div>
                    </div>
                 
                </form>
                </div>
    {/* personal cards */}
    <div className='cardscontainer d-flex flex-wrap'>
       {/* Card 1*/}
       <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
       <Link to={`كارت-عادي`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6">كارت عادي</h5>
       <Link  to={`كارت-عادي`}  className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link  to={`كارت-عادي`}    className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link  to={`كارت-عادي`} className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>
       
       {/* Card2 */}
       <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
       <Link to={`كارت-كيرف`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6">كارت كيرف</h5>
       <Link to={`كارت-كيرف`}  className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link to={`كارت-كيرف`}  className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link to={`كارت-كيرف`}     className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>

 {/* Card3 */}
 <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
       <Link to={`كارت-عادي-بظهر-واحد-لون`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6"> كارت عادي بظهر واحد لون</h5>
       <Link to={`كارت-عادي-بظهر-واحد-لون`}     className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link to={`كارت-عادي-بظهر-واحد-لون`}      className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link to={`كارت-عادي-بظهر-واحد-لون`}    className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>
        {/* Card4 */}
        <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
       <Link to={`كارت-سبوت-مقاس-8.5*5`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6">كارت سبوت مقاس 8.5*5</h5>
       <Link to={`كارت-سبوت-مقاس-8.5*5`}    className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link to={`كارت-سبوت-مقاس-8.5*5`}      className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link to={`كارت-سبوت-مقاس-8.5*5`}    className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>

        {/* Card 5 */}
        <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
       <Link to={`كارت-ستيكر`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6">كارت ستيكر</h5>
       <Link to={`كارت-ستيكر`} className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link to={`كارت-ستيكر`}    className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link to={`كارت-ستيكر`} className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>
        {/* Card 6*/}
        <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
        <Link to={`كارت-مط-وجهين`}  className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6">كارت مط وجهين</h5>
       <Link to={`كارت-مط-وجهين`} className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link to={`كارت-مط-وجهين`}  className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link to={`كارت-مط-وجهين`} className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>
        {/* Card 7*/}
        <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
       <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6">كارت سبوت كيرف مقاس 5.5*9</h5>
       <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`}   className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`}    className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link to={`كارت-سبوت-كيرف-مقاس-5.5*9`} className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>
        {/* Card 8*/}
        <div className={`card  mb-4  ${style.cardcontain} col-3 ms-4`}>
       <Link to={`كارت-مط-كبير-بدون-كيرف`}   className="text-dark">
       <img className="w-100"  style={{'margin':'auto','padding-top':'10px','height':'190px'}} src="https://images.prom.ua/3157769463_w640_h640_smartfon-iphone-xr.jpg" alt='carditem' />
       </Link>
       <div className="card-body text-center">
       <h5 className="card-title mt-3 fs-6">كارت مط كبير بدون كيرف</h5>
       <Link to={`كارت-مط-كبير-بدون-كيرف`}   className={` btn btn-danger w-100 mt-2 ${style.cardbtn }`}>اضف الي السلة <i   className="fa-solid fa-cart-plus m-1 text-light fa-1x "></i></Link>
       </div>
       
       <div className="text-center">
       <div className={`${style.wishlistbtn} `}>
       <button onClick={''}   className={` btn btn-danger ms-2  ${style.cardbtns }`}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       <Link to={`كارت-مط-كبير-بدون-كيرف`}    className={` btn btn-danger ms-1  ${style.eyebtn} `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       
       </div>
       <div className={`${style.wishlistbtnmob} d-lg-none `}>
       <Link to={`كارت-مط-كبير-بدون-كيرف`}  className={` btn btn-danger ms-1 rounded-circle `}><i className="fa-solid fa-eye  text-light fa-1x "></i></Link>
       <button onClick={''}   className={` btn btn-danger ms-2 rounded-circle  `}><i   className="fa-solid fa-heart text-light fa-1x "></i></button>
       </div> 
       </div>
       </div>

























       </div>
            {/* end */}















            {/* one card */}



    
         {/*   {
            flag ? <h1>Loading</h1> : <div className='row'>
                {
                    personalcards.map((item) => {
                        return <div key={item.id} className='col-xs-12 col-sm-3 col-md-3 col-lg-3'> <PersonalCard data={item} /></div>
                    })
                }
            </div>
        }*/}
</div> 

     </>
  )
 }
 
 export default PersonalCards
 