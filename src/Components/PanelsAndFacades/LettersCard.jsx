import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFav } from '../../Redux/slices/PanelsAndFacadesSlice';
import lettersImg from '../../assets/letters.jpg';
import style from './PanelsAndFacades.module.css'

function LettersCard({data}) {

  return (
  <>
      
 {/* cards container*/}
 <li className={`card ${style.product}   pb-2 mt-3 mb-2 `}>
        <Link to={`/panelsandfacades/letters/`} title={data.name} className={style.cardimg}>
		<img  src={lettersImg}  className={`${style.cardimg} px-2  pt-2  rounded-top-4 w-100 `} alt="lettersImg"   />
		</Link>
			<div className="cardheader text-center mt-2">				
				<div className="">
					<Link to="/panelsandfacades/letters/" className='text-dark' >حروف بارزة</Link>, 
					<Link to=""  className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-2">
					<Link to={`/panelsandfacades/letters/`}  className="fw-bold"  style={{'fontSize':'17px','color':'#e30918'}}> حروف بارزة</Link>

						</div>
{/* <Link to={`/panelsandfacades/${data.id}/`}  className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center `}   aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">حدد ابعاد المنتج
</Link> */}
</div>
</li>

</>

  )
}

export default LettersCard
