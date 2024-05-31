import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
// import { addToFav } from '../../Redux/slices/PersonalCardsSlice';
import style from './BannerProduct.module.css'
function BannerProduct({data}) {
    console.log(data);
    const nav = useNavigate();
    const dispatch = useDispatch();
    
    function add() {
      // nav(`/userdetails/${data.id}`, { state: data }); 
      dispatch(addToCart(data)); 
  }
  // function remove() {
  //     // nav(`/userdetails/${data.id}`, { state: data });  
  //     dispatch(removeFromCart(data));
  // }
  return (
    <>

  {/* cards container*/}
  <li className={`card ${style.product} border-0`}>
	<div className="">
        <Link to={`/bannerproducts/${data.id}/`}title="flex" className={style.cardimg}>
		<img loading="lazy"  src="https://amproadvertising.net/wp-content/uploads/2024/04/photo_2024-04-27_13-49-55-300x300.jpg" className={`${style.cardimg} px-2 w-100`} alt=""   /></Link>

			</div>
			<div className="cardheader text-center">				
				<div className="">
					<Link to="bannerproducts" className='text-dark' >البانر</Link>, 
					<Link to="" className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-3">
					<Link to={`/bannerproducts/${data.id}/`} aria-label="flex" className="text-dark fw-bold " style={{'fontSize':'16px'}} >{data.name}</Link>

						</div>
<Link to={`/bannerproducts/${data.id}/`}className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-2 mb-3 w-100  btn main-btn width-fluid text-center align-items-center `}  aria-label="تحديد الخيارات لـ &quot;بانل عادي&quot;" aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">حدد ابعاد المنتج
</Link>
</div>
</li>

    </>
 )
}

export default BannerProduct
