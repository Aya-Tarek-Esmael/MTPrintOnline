import React from 'react'
import { Link } from 'react-router-dom'
import style from './BannerProduct.module.css'
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
function BannerStand({data}) {
  return (
    <>
        {/* cards container*/}
    <li className={`card ${style.product}  border-0 pb-3 mt-3 mb-5 col-lg-3 col-md-3 col-sm-12  col-xs-12`}>
	<div className="">
        <Link to={`ادجستبل-ستاند/`} title="اجستبل استاند" className={style.cardimg}>
		   <Zoom>
			<img loading="lazy"  src="https://amproadvertising.net/wp-content/uploads/2024/04/photo_2024-04-27_13-49-55-300x300.jpg" className={`${style.cardimg} px-2 w-100`} alt=""   />
			</Zoom>
		</Link>
			</div>
			<div className="cardheader text-center">				
				<div className="">
					<Link to="/bannerproducts/" className='text-dark' >البانر</Link>, 
					<Link to="" className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-3">
					<Link  to={`ادجستبل-ستاند/`} aria-label="اجستبل استاند" className="text-dark fs-4 fw-bold ">اجستبل استاند</Link>

						</div>
	{/* <span className="price"><span className=""><bdi>3,400.00&nbsp;<span className="szdcxtfvcrtfrvz">EGP</span></bdi></span> &ndash; <span className=""><bdi>3,800.00&nbsp;<span className="">EGP</span></bdi></span></span> */}
<Link to={`ادجستبل-ستاند/`}  className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center `}  aria-label="تحديد الخيارات لـ &quot;اجستبل استاند&quot;" aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">تحديد أحد الخيارات
</Link>
</div>
</li>
    </>
  )
}

export default BannerStand
