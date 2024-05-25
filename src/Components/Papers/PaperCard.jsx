import React from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { addToFav } from '../../Redux/slices/PapersSlice';
import style from './Papers.module.css'

function PersonalCard({data}) {
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
 <li className={`card ${style.product}  border-0 pb-3 mt-3 mb-5 `}>
	<div className="">
        <Link to={`sticker`}  title="flex" className={style.cardimg}>
		<img loading="lazy"  src="https://amproadvertising.net/wp-content/uploads/2024/04/photo_2024-04-27_13-49-55-300x300.jpg" className={`${style.cardimg} px-2 w-100`} alt=""   /></Link>

			</div>
			<div className="cardheader text-center">				
				<div className="">
					<Link to="bannerproducts" className='text-dark' >ورقيات</Link>, 
					<Link to="" className='text-dark '>منتجات الطباعة</Link>
					</div>			
						<div className="mb-3">
					<Link to={`sticker`} aria-label="flex" className="text-dark fs-4 fw-bold ">{data.name}</Link>

						</div>
<Link to={`sticker`}  className={` text-light border-0 ${style.cardbtn} rounded border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center `}   aria-describedby="هناك العديد من الأشكال المختلفة لهذا المنتج. يمكن اختيار الخيارات على صفحة المنتج">حدد ابعاد المنتج
</Link>
</div>
</li>

</>

  )
}

export default PersonalCard
