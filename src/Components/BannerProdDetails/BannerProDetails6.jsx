import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import style from './BannerproDetails.module.css'
// import LoadingScrean from '../LoadingScrean/LoadingScrean';
import { Link, useParams } from 'react-router-dom';
import bannerproimg from '../../assets/image2.jpg'
function BannerProDetails6() {
    const {id} =useParams();
    const { register, handleSubmit } = useForm();
    const [proDetails, setProDetails] = useState(null);
 

    console.log(id);
   
    async function getProDetails(){
        // let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
        let {data}= await axios.get(`https://ecommerce.routemisr.com/api/v1/products`);
        console.log(data)
         setProDetails(data.data);

    }

    const onSubmit = (data) => {
        console.log(data);
        //logic for submitting the form data here
    };

    useEffect(() => {
      
        getProDetails()
    
    }, [])
    // 

    const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragStartY, setDragStartY] = useState(0);
  const [dragOffsetX, setDragOffsetX] = useState(0);
  const [dragOffsetY, setDragOffsetY] = useState(0);
  const [originalX, setOriginalX] = useState(0);
  const [originalY, setOriginalY] = useState(0);

  const handleMouseDown = (event) => {
    setIsDragging(true);
    setDragStartX(event.clientX);
    setDragStartY(event.clientY);
    setOriginalX(event.target.offsetLeft);
    setOriginalY(event.target.offsetTop);
  };

  const handleMouseMove = (event) => {
    if (isDragging) {
      const offsetX = event.clientX - dragStartX;
      const offsetY = event.clientY - dragStartY;
      setDragOffsetX(offsetX);
      setDragOffsetY(offsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    setDragStartX(0);
    setDragStartY(0);
    setDragOffsetX(0);
    setDragOffsetY(0);
  };
  const handleMouseLeave = () => {
    setIsDragging(false);
    setDragStartX(0);
    setDragStartY(0);
    setDragOffsetX(0);
    setDragOffsetY(0);
    setOriginalX(0);
    setOriginalY(0);
  };
  const [totalArea, setTotalArea] = useState('');
  const [productPrice, setProductPrice] = useState('');

  //  handle changes in total area input
  const handleTotalAreaChange = (event) => {
      const { value } = event.target;
      setTotalArea(value);
  };

  // calculate the product price based on the total area
  const calculateProductPrice = () => {
      const calculatedPrice = totalArea *100;
      setProductPrice(calculatedPrice);
  };
  return (
    <div>
        {proDetails? <div className={`container-fluid mb-3 pb-4 ${style.containerbg}`}>
            <div className="row px-5 mx-auto">
            <div
      className={`col-md-7 mt-5 ${style.container}`}
      onMouseMoveCapture={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}

    >
      <img
        src={bannerproimg}
        alt={proDetails.title}
        className={` ${style['zoomable-image']} ${isDragging ? style.dragging : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${dragOffsetX}px, ${dragOffsetY}px)`,
          left: originalX + dragOffsetX + 'px',
          top: originalY + dragOffsetY + 'px',
        }}
      />
    </div>

                <div className="col-md-5 px-4 mt-5 ">
                    <div className='d-flex justify-content-between'>
                    <h2>كانفس</h2>
                    <i className="fa-solid fa-circle-arrow-right "></i>
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className='col-12 mt-4'> */}


                    <div className='d-flex'>
                    <label className='col-6 mt-3' htmlFor='length'>الطول (سنتيمتر)</label>
                    <input
                                            type="text"
                                            id="length"
                                            className={`w-25 me-5 py-2 border-1  rounded text-center ${style.quantity} col-6`}
                                            name="length"
                                            defaultValue="1"
                                            title='length'
                                            value=""
                                            data-unit="cm"
                                            data-common-unit="m"
                                            autoComplete="off"
                                            style={{'fontSize': '1.2rem'}}
                                            {...register('length')}
                                        />
                     </div>
                     <div className='d-flex mt-2'>
                    <label className='col-6 mt-3' htmlFor='length'>العرض (سنتيمتر)</label>
                    <input
                                            type="text"
                                            id="width"
                                            className={`w-25 me-5  py-2 border-1  rounded text-center ${style.quantity} col-6`}
                                            name="width"
                                            defaultValue="1"
                                            title='width'
                                            value=""
                                            data-unit="cm"
                                            data-common-unit="m"
                                            autoComplete="off"
                                            style={{'fontSize': '1.2rem'}}
                                            {...register('width')}
                                        />
                     </div>
                     
	
		<div className="mt-3 d-flex">
			<label className='' htmlFor='totalamount'>الإجمالي المساحة (متر مربع)</label>
			
            <input
                                type="text"
                                value={totalArea}
                                onChange={handleTotalAreaChange}
                                className={`w-25 me-5  py-2 border-0 btn  rounded text-center ${style.quantity} col-6`}
                                autoComplete="off"
                                placeholder="0.00"
                                {...register('totalamount')}
                            />
			
		</div>

	
	
	<div className="mt-2">

		<label className='' htmlFor='productprice'>سعر المنتج</label>

        <span className="product_price">{productPrice}</span>
	</div>
                        <div>
                    <label className='fw-bold fs-5 mb-2 mt-2'>النوع</label>
                    <select className="col-12 p-2" {...register('typecanv')}>
                        <option value="">اختر نوع الكانفس</option>
                        <option value=" كانفس مط"> كانفس مط</option>
                        <option value="كانفس جليتر">كانفس جليتر</option>
                        <option value="كانفس وبرا"> كانفس وبرا </option>
                     </select>
                     </div>
                     <div>
                     <h5 className="fw-normal mt-4" data-addon-name="أكتب ملاحظاتك مع الطلب">أكتب ملاحظاتك مع الطلب</h5>
                                    <div className=""><p>حد اقصي 400 حرف</p></div>
                                    <textarea
                                        className="input-text w-100"
                                        name="notes"
                                        id="notesid"
                                        rows="6"
                                        cols=""
                                        maxLength="400"
                                        {...register('notes')}
                                    ></textarea>
                                </div>
                                <div className="mt-2 ">
                                    <h5 className="" data-addon-name="هل يوجد لديك تصميم (ارفع تصميم)">هل يوجد لديك تصميم (ارفع تصميم)</h5>
                                    <p className="form-row form-row-wide ">
                                        <input
                                            type="file"
                                            className="border w-100 py-2 px-2"
                                            name="upload"
                                            id="uploadId"
                                            {...register('upload')}
                                        />
                                        <small className="d-none">(الحد الأقصى لحجم الملف 512 ميغابايت)</small>
                                    </p>
                                </div>
                                <div className="d-flex w-100">
                                    <div className="quantity col-4 mt-2">
                                        <label className="screen-reader-text d-none" htmlFor="quantity">كمية ادجستبل استاند</label>
                                        <input
                                            type="number"
                                            id="quantity"
                                            className={`w-100 py-2 border-1  rounded text-center ${style.quantity}`}
                                            name="quantity"
                                            defaultValue="1"
                                            title='quantity'
                                            aria-label="كمية المنتج"
                                            size="4"
                                            min="1"
                                            max=""
                                            step="1"
                                            inputMode=""
                                            placeholder=""
                                            autoComplete="off"
                                            style={{'fontSize': '1.2rem'}}
                                            {...register('quantity')}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-danger col-8 mt-2 mb-5 py-2 fs-5 me-1">إضافة إلى السلة</button>
                                </div>
                            </form>
                   {/* <h2>Name:{proDetails.title}</h2>
                   <h6>Descrition:{proDetails.description}</h6>
                   <h6>Price:{proDetails.price}</h6>
                   <h6>Quantity:{proDetails.quantity}</h6>
                   <h6>Brand:{proDetails.brand.name}</h6>
                   <h6>Category:{proDetails.category.name}</h6>
                   <h6>Rating:{proDetails.ratingsAverage}</h6>
                   {proDetails.images.map((image, index) => (
                   <img key={index} src={image} alt={proDetails.title} className=' col-2 m-1' />
                   ))} */}
                   {/* <button className='btn btn-danger w-100 mt-3 mb-5' onClick=''>Add To Cart +</button> */}
                </div>
            </div>

            
        </div>
           :<div>looding</div>}

           {/*  */}
           {/* <div className="">
		      <ul className='d-flex justify-content-center'>
							<li className="text-dark" id="tab-title-additional_information" role="tab" aria-controls="tab-additional_information">
					        <Link to="#tab-additional_information" className="text-dark">
						     معلومات إضافية</Link>
				             </li>
						   	<li className="reviews_tab me-2 position-relative" id="tab-title-reviews" role="tab" aria-controls="tab-reviews">
					         <Link to="#tab-reviews" className='text-dark'>
					     	مراجعات <span className='text-light border rounded-circle bg-danger px-2'>0</span></Link>
				                </li>
				</ul>
            </div> */}
    </div>
 
  )
}

export default BannerProDetails6