import React from 'react'
import { Link } from 'react-router-dom'
import style from './BannerProduct.module.css'
function Gloosy({data}) {
  return (
    <>
      
 {/* cards container*/}
 <li className={`card ${style.product}  border-0 pb-3 mt-3 mb-5 col-3`}>
	<div className="">
        <Link to={`/glossy/`} title="flex" className={style.cardimg}>
			<img loading="lazy" width="300" height="300" src="https://amproadvertising.net/wp-content/uploads/2024/04/photo_2024-04-27_13-49-55-300x300.jpg" className={`${style.cardimg} px-2`}alt=""  sizes="(max-width: 360px) 147px, (max-width: 300px) 100vw, 300px" /></Link>
			</div>
			<div className="cardheader text-center">				
				<div className="">
					<Link to="bannerproducts" className='text-dark' >البانر</Link>, 
					<Link to="" className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-3">
					<Link to={`/glossy/`} aria-label="flex" className="text-dark fs-4 fw-bold ">جلوسي</Link>

						</div>
<Link to={`/glossy/`} className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center `}   aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">حدد ابعاد المنتج
</Link>
</div>
</li>
    </>
  )
}

export default Gloosy
