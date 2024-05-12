import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalCards } from '../../Redux/slices/PersonalCardsSlice';
import PersonalCard from '../PersonalCard/PersonalCard';
import { Link } from 'react-router-dom';
 
 function PersonalCards() {
    
    const dispatch = useDispatch();
    const personalcards = useSelector(state => state.PersonalCardsReducer.personalcards);
    const flag = useSelector(state => state.PersonalCardsReducer.loading);


    useEffect(() => {
        // axiosInstance.get("https://api.themoviedb.org/3/movie/popular?api_key=7a1c19ea3c361a4d3cc53eb70ef8298c").then(data => {
        //     console.log(data.data.results)
        //     setMovies([...data.data.results]);
        // })
        dispatch(getPersonalCards());
    }, [])
   return (
     <>
       


<div className='container-fluid   my-5 px-5' >
  
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
                            <div className="" style={{'width': '175px'}}> 
                                
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


       {
            flag ? <h1>Loading</h1> : <div className='row'>
                {
                    personalcards.map((item) => {
                        return <div key={item.id} className='col-xs-12 col-sm-3 col-md-3 col-lg-3'> <PersonalCard data={item} /></div>
                    })
                }
            </div>
        }
</div>

     </>
   )
 }
 
 export default PersonalCards
 