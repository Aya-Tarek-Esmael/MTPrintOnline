import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFav } from '../../Redux/slices/CharctersSlice';
import cupsImg from '../../assets/cups.png';
import style from './Charcters.module.css'

function CharctersCard({data}) {
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
        <Link to={`/charcters/${data.id}/`} title={data.name} className={style.cardimg}>
		<img  src={`https://mtb3a.arabiangeeks.net/images/${data.image}`}  className={`${style.cardimg} px-2 w-100 py-1 `} alt={data.name}   />
		</Link>
			<div className="cardheader text-center">				
				<div className="">
					<Link to="/charcters/" className='text-dark' >حروف بارزة</Link>, 
					<Link to=""  className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-2">
					<Link to={`/charcters/${data.id}/`}  className="fw-bold " style={{'fontSize':'17px','color':'#e30918'}}>{data.name}</Link>

						</div>
{/* <Link to={`/papers/${data.id}/`}  className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center `}   aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">حدد ابعاد المنتج
</Link> */}
</div>
</li>

</>

  )
}

export default CharctersCard
