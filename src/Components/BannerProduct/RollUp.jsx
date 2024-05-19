import React from 'react'
import { Link } from 'react-router-dom'
import style from './BannerProduct.module.css'
function RollUp({data}) {
  return (
    <>
      
  {/* cards container*/}
  <li className={`card ${style.product} border-0 pb-3 mt-3 mb-5 col-lg-3 col-md-3 col-sm-12  col-xs-12`}>
	<div className="">
        <Link to={`/roll-up/`}title="رول-اب" className={style.cardimg}>
		<img loading="lazy"  src="https://amproadvertising.net/wp-content/uploads/2024/04/photo_2024-04-27_13-49-55-300x300.jpg" className={`${style.cardimg} px-2 w-100`} alt=""   /></Link>

			</div>
			<div className="cardheader text-center">				
				<div className="">
					<Link to="bannerproducts" className='text-dark' >البانر</Link>, 
					<Link to="" className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-3">
					<Link to={`/roll-up/`} className="text-dark fs-4 fw-bold ">رول اب </Link>

						</div>
<Link to={`/roll-up/`} className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center `}   aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">تحديد احد الخيارات
</Link>
</div>
</li>


    </>
  )
}

export default RollUp
