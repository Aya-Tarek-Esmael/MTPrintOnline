import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFav } from '../../Redux/slices/CupsSlice';
import uniformImg from '../../assets/uniform.jpg';
import style from './Uniform.module.css'

function UniformCard({data}) {
console.log(data);
    const nav = useNavigate();
    const dispatch = useDispatch();
    function addToFav() {
        dispatch(addToFav(data));
        // nav(`/moviedet/${data.id}`, { state: data });
    }
  return (
  <>
      
 {/* cards container*/}
 <li className={`card ${style.product}   pb-2 mt-3 mb-2 `}>
        <Link to={`/uniform/${data.id}/`} title={data.name} className={style.cardimg}>
		<img  src={`https://mtb3a.arabiangeeks.net/images/${data.image}`} className={`${style.cardimg} px-2 w-100 pt-2  rounded-top-4`} alt=""   />
		</Link>
			<div className="cardheader text-center mt-2">				
				<div className="">
					<Link to="/uniform/" className='text-dark'  >يونيفورم</Link>, 
					<Link to=""  className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-2">
					<Link to={`/uniform/${data.id}/`}  className="fw-bold " style={{'fontSize':'17px','color':'#e30918'}}> {data.name} </Link>
						</div>

</div>
</li>

</>

  )
}

export default UniformCard
