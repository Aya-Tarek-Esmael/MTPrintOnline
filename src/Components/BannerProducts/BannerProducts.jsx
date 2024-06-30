import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { getPersonalCards } from '../../Redux/slices/PersonalCardsSlice';
import BannerProduct from '../BannerProduct/BannerProduct';
import { Link } from 'react-router-dom';
import style from './BannerProducts.module.css'
import ReflectiveBanner from '../BannerProduct/ReflectiveBanner';
import BannerCoated from '../BannerProduct/BannerCoated';
import BannerStand from '../BannerProduct/BannerStand';
import BobUp from '../BannerProduct/BobUp';
import Canvas from '../BannerProduct/Canvas';
import CarVinyl  from'../BannerProduct/CarVinyl';
import Flex from '../BannerProduct/Flex';
import RollUp from '../BannerProduct/RollUp';
import SeeThrough from '../BannerProduct/SeeThrough';
import NormallBanner from '../BannerProduct/NormallBanner';
import Gloosy from '../BannerProduct/Gloosy';
import XBanner from '../BannerProduct/XBanner';
import Vinyl from '../BannerProduct/Vinyl';
import Wallpaper from '../BannerProduct/Wallpaper';
import Stan from '../BannerProduct/Stan';
import PrintAndCut from '../BannerProduct/PrintAndCut';
import axios from 'axios';
import { getBannerProducts } from '../../Redux/slices/BannerProductsSlice';



function BannerProducts() {
  const dispatch = useDispatch();
    const BannerProducts = useSelector(state => state.BannerProductsReducer.BannerProducts);
    const flag = useSelector(state => state.BannerProductsReducer.loading);

    useEffect(() => {
        dispatch(getBannerProducts());
    }, [dispatch]);
  
    
  return (
   <>
{BannerProducts ? <div className='contanier-fluid px-5 my-5 ' style={{overflow:'hidden'}}>
<h1 className="title page-title  my-4 col-xs-12 col-sm-12 col-md-12 col-lg-12 ">البانر</h1>
<header className={`${style.productsheader} p-4 `}>	
<div className="term-descriptionn "><p>يحتوي هذا القسم علي مجموعة من الـ بانر المميزة و المختلفة و المصممه خصيصا لك و لشركتك</p>
<p>&#8220;الآن يمكنك طلب كل ما تحتاجه شركتك من مطبوعات وهدايا من خلال الموقع الخاص بشركة<span className='fw-bold'>  مطبعة </span> أفضل شركة دعاية وإعلان في مِصر ذات سمعة طيبة وفكر إبداعي، حيث نسعى لتحقيق احتياجات عملائنا التسويقية، وتقديم أفضل المطبوعات الإعلانية لرجال الأعمال وأصحاب المشاريع التجارية وإنجازها في أوقات قياسية وذلك لأن الوقت في مجال الدعاية والإعلان هو عامل هام بالنسبة لنا ولعملائنا.&#8221;</p>
</div>
</header>
{/* end header */}
{/* <div className="d-flex justify-content-between mt-5">
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
</div> */}


    {/* <div className=' col-lg-12 col-sm-12 col-md-12 d-md-flex flex-wrap'>
  <BannerStand   data={'data'} />
  <XBanner  data={'data'} />
   <ReflectiveBanner data={'data'}  />
   <NormallBanner  data={'data'} />

   <BobUp />
   <BannerCoated  data={'data'} />
   <Gloosy  data={'data'} />
   <CarVinyl  data={'data'} />

   <Flex data={'data'}  />
   <Stan  data={'data'} />
   <RollUp data={'data'}  />
   <SeeThrough data={'data'} />
  
   <Vinyl  data={'data'}  />
   <Canvas  data={'data'} />
   <Wallpaper data={'data'} />
   <PrintAndCut   data={'data'}/>
   </div> */}








{/* end */}
{
             <div className=' col-lg-12 col-sm-12 col-md-12 d-md-flex flex-wrap '>
                {
                    BannerProducts.map((item) => {return <div key={item.id} className='col-lg-3 col-md-3 col-sm-12  col-xs-12  pb-3 mt-3 mb-5 '> <BannerProduct data={item} /></div>
                    })
                }
            </div> 
        }
		

</div>
 : <LoadingScrean /> }
   </>
  )
}

export default BannerProducts
