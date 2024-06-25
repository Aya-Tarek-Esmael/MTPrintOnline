import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFav } from '../../Redux/slices/PanelsAndFacadesSlice';
import lettersImg from '../../assets/letters.jpg';
import style from './PanelsAndFacades.module.css'

function PanelsAndFacadesCard({data}) {
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
        <Link to={`/panelsandfacades/${data.id}/`} title={data.name} className={style.cardimg}>
		<img  src={`http://localhost:8000/images/${data.image}`}  className={`${style.cardimg} px-2  pt-2  rounded-top-4 w-100 `} alt=""   />
		</Link>
			<div className="cardheader text-center mt-2">				
				<div className="">
					<Link to="/papers/" className='text-dark' >{data.name}</Link>, 
					<Link to=""  className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-2">
					<Link to={`/panelsandfacades/${data.id}/`}  className="fw-bold"  style={{'fontSize':'17px','color':'#e30918'}}> {data.name}</Link>

						</div>
{/* <Link to={`/panelsandfacades/${data.id}/`}  className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center `}   aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">حدد ابعاد المنتج
</Link> */}
</div>
</li>

</>

  )
}

export default PanelsAndFacadesCard
