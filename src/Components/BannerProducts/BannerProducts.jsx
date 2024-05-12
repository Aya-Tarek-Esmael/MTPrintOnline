import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPersonalCards } from '../../Redux/slices/PersonalCardsSlice';
import BannerProduct from '../BannerProduct/BannerProduct';
import { Link } from 'react-router-dom';
import style from './BannerProducts.module.css'
function BannerProducts() {

	    
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
<div className='contanier-fluid mx-5 my-5 '>
<h1 className="title page-title  my-4 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">البانر</h1>
<header className={`${style.productsheader} p-4 `}>	
<div className="term-descriptionn "><p>يحتوي هذا القسم علي مجموعة من الـ بانر المميزة و المختلفة و المصممه خصيصا لك و لشركتك</p>
<p>&#8220;الآن يمكنك طلب كل ما تحتاجه شركتك من مطبوعات وهدايا من خلال الموقع الخاص بشركة AMPRO Advertising أفضل شركة دعاية وإعلان في مِصر ذات سمعة طيبة وفكر إبداعي، حيث نسعى لتحقيق احتياجات عملائنا التسويقية، وتقديم أفضل المطبوعات الإعلانية لرجال الأعمال وأصحاب المشاريع التجارية وإنجازها في أوقات قياسية وذلك لأن الوقت في مجال الدعاية والإعلان هو عامل هام بالنسبة لنا ولعملائنا.&#8221;</p>
</div>
</header>
{/* end header */}
<div className="d-flex justify-content-between mt-5">
        <form className="" method="get">
	    <select name="orderby" className="orderby btn " aria-label="نظام المتجر">
					<option value="menu_order"  selected='selected'>الترتيب الافتراضي</option>
					<option value="popularity" >ترتيب حسب الشهرة</option>
					<option value="rating" >ترتيب حسب معدل التقييم</option>
					<option value="date" >ترتيب حسب الأحدث</option>
					<option value="price" >ترتيب حسب: الأدنى سعراً للأعلى</option>
					<option value="price-desc" >ترتيب حسب: الأعلى سعراً للأدنى</option>
			</select>
	<input type="hidden" name="paged" value="1" />
	</form>
<p className="">عرض جميع النتائج 16</p>	
</div>



{/* end */}

{
            flag ? <h1>Loading</h1> : <div className='row'>
                {
                    personalcards.map((item) => {
                        return <div key={item.id} className='col-xs-12 col-sm-3 col-md-3 col-lg-3'> <BannerProduct data={item} /></div>
                    })
                }
            </div>
        }
		

</div>
   </>
  )
}

export default BannerProducts
