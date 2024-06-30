import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import style from './BannerproDetails.module.css';
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/slices/CartSlice';
import bannerproimg from '../../assets/image2.jpg';

function BannerProDetailsReflectiveBanner() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [proDetails, setProDetails] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [textareaValue, setTextareaValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [area, setArea] = useState('');
  const [price, setPrice] = useState('');

  async function getProDetails() {
    let { data } = await axios.get(`https://mtb3a.arabiangeeks.net/api/products/10/details`);
    console.log(data);
    setProDetails(data);
  }

  const onSubmit = (data) => {
    event.preventDefault(); // Prevent default form submission
    
    const itemData = {
      id: proDetails.id,
      name: proDetails.name,
      quantity,
      notes: textareaValue,
      file: selectedFile,
      price: price * quantity, // Include the total price
    };
    dispatch(addToCart(itemData));
    console.log(itemData);
  };

  useEffect(() => {
    getProDetails();
  }, []);

  useEffect(() => {
    if (proDetails) {
      recalculatePrice(width, height);
    }
  }, [proDetails, width, height]);
  const handleWidthChange = (event) => {
    const newWidth = event.target.value;
    setWidth(newWidth);
    recalculatePrice(newWidth, height);
};

const handleHeightChange = (event) => {
    const newHeight = event.target.value;
    setHeight(newHeight);
    recalculatePrice(width, newHeight);
};

const recalculatePrice = (newWidth, newHeight) => {
    const parsedWidth = parseFloat(newWidth);
    const parsedHeight = parseFloat(newHeight);
    if (!isNaN(parsedWidth) && !isNaN(parsedHeight) && parsedWidth > 0 && parsedHeight > 0) {
        const area = parsedWidth * parsedHeight * 0.0001;
        setArea(area.toFixed(2));
        const newPrice = area * (proDetails.sizes[0].price);
        setPrice(newPrice.toFixed(2));
    } else {
        setArea('');
        setPrice('');
    }
};

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
      setQuantity(value);
    }
  };

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
  
  
 
 
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  }

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  }



  // useEffect(() => {
  //   const newPrice = area * parseFloat(data.sizes[0].price);
  //   setPrice(newPrice);
  // }, [area]);

//  
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
                    <h2>{proDetails.name}</h2>
                    <div>
                    <i className="fa-solid fa-circle-arrow-right "></i>
                    <i className="fa-solid fa-circle-arrow-left"></i>

                    {/* {previousData && (
                     <i className="fa-solid fa-circle-arrow-left "></i>
                         )}

                    {nextData && (
                     <i className="fa-solid fa-circle-arrow-right "></i>
                      )} */}
                    </div>
                    </div>
                    <p style={{'fontSize':'13px'}}>السعر يشمل التصميم والطباعة. نقدم مختلف المقاسات</p>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className='col-12 mt-4'> */}
                        <div>
                <div className='d-flex'>
                    <label className='col-6 mt-3' htmlFor='length'>الارتفاع (سنتيمتر)</label>
                    <input
                                            type="text"
                                            id="length"
                                            className={`w-25 me-5 py-2 border-1  rounded text-center ${style.quantity} col-6`}
                                            name="height"
                                            value={height} 
                                            title='length'
                                            data-unit="cm"
                                            data-common-unit="m"
                                            autoComplete="off"
                                            style={{'fontSize': '1.2rem'}}
                                            onChange={handleHeightChange}
                                            
                                        />
                     </div>
                     <div className='d-flex mt-2'>
                    <label className='col-6 mt-3' htmlFor='length'>العرض (سنتيمتر)</label>
                    <input
                                            type="text"
                                            id="width"
                                            className={`w-25 me-5  py-2 border-1  rounded text-center ${style.quantity} col-6`}
                                            name="width"
                                            value={width} 
                                            title='width'
                                            data-unit="cm"
                                            data-common-unit="m"
                                            autoComplete="off"
                                            style={{'fontSize': '1.2rem'}}
                                            onChange={handleWidthChange}
                                            
                                        />
                     </div>
                     
		<div className="mt-3 d-flex">
			<label className='col-6' htmlFor='totalamount'>الإجمالي المساحة (متر مربع)</label>
			
            <input
                                type="text"
                                 value={area}
                                className={`w-25 me-5  py-2 border-0 btn  rounded text-center ${style.quantity} col-6`}
                                autoComplete="off"
                                placeholder=""
                                readOnly
                              
                            />
			
		</div>

	
	
	<div className="mt-1 ">

		<label className='col-6' htmlFor='productprice'>سعر المنتج</label>

        {/* <span className="product_price me-5">{productPrice}</span> */}
        <input
                                type="text"
                                value={price}
                                className={`w-25 me-5  py-2 border-0 btn  rounded text-center ${style.quantity} col-6`}
                                autoComplete="off"
                                placeholder="0.00"
                                readOnly
                                
                            />
	</div>
               
                     </div>
                     <div>
                     <h5 className="fw-normal mt-4" data-addon-name="أكتب ملاحظاتك مع الطلب">أكتب ملاحظاتك مع الطلب</h5>
                                    <div className=""><p>حد اقصي 400 حرف</p></div>
                                    <textarea
                  className={`input-text w-100 ${style.borderstyle}`}
                  name="notes"
                  id="notesid"
                  rows="6"
                  cols=""
                  maxLength="400"
                  onChange={handleTextareaChange}
                  value={textareaValue} 
                ></textarea>
              </div>
              <div className="mt-2 ">
                <h5 className="" data-addon-name="هل يوجد لديك تصميم (ارفع تصميم)">  هل يوجد لديك تصميم (ارفع تصميم)</h5>
                <p className="form-row form-row-wide ">
                  <input
                    type="file"
                    className={`border w-100 py-2 px-2 ${style.borderstyle}`}
                    name="upload"
                    id="uploadId"
                    onChange={handleFileChange}
                  />
                  <small className="d-none">(الحد الأقصى لحجم الملف 512 ميغابايت)</small>
                </p>
              </div>
                                {/*  */}
                               
                                    <div className='d-flex  justify-content-between py-1 '>
                                     <div className='col-6'>
                                     <div className="text-danger">x <span>{quantity}</span> <span className='fw-bold'>بانر عاكس</span></div>
                                     </div>
                                     <div>
                                       <span className=' col-6 mx-3 text-danger fw-bold'>{((price * quantity).toFixed(2))} EGP</span>
                                     </div>
                                    </div>  
                                    <div className='col-12 '>
                                     <div className="text-danger h-auto overflow-x-hidden">أكتب ملاحظاتك مع الطلب: {textareaValue.split('\n').map((line, index) => (<div key={index}>{line}-</div>))}</div>
                                     <div className="text-danger">  هل يوجد لديك تصميم (ارفع تصميم): {selectedFile ? selectedFile.name : ''}-</div>
                                    </div>   
                                      <div className='text-danger text-center col-12 mt-3 py-3 border-top border-bottom fs-4'>المجموع EGP {((price * quantity).toFixed(2))}</div>
                                 
                                <div className="d-flex w-100 mt-4">
                                    <div className="quantity col-4 mt-2">
                                        <label className="screen-reader-text d-none" htmlFor="quantity"> كمية بانر عاكس</label>
                    <input
                        type="number"
                        id="quantity"
                        className={`w-100 py-2 border-1  rounded text-center ${style.quantity} position-relative`}
                        name="quantity"
                        value={quantity}
                        onChange={handleQuantityChange}
                        onInput={handleQuantityChange}
                        title='quantity'
                        aria-label="كمية المنتج"
                        size="4"
                        min="1"
                        step="1"
                        inputMode="numeric"
                        autoComplete="off"
                        style={{ 'fontSize': '1.2rem' }}
                        {...register('quantity')}
                    />
                   


                                    </div>
                                    <button type="submit" className={`btn btn-danger col-8 mt-2 mb-5 py-2 fs-5 me-1 `}>إضافة إلى السلة</button>
                                </div>
                            </form>
                
                </div>
            </div>

            
        </div>
          :<LoadingScrean/>}

         
    </div>
 
  )
}

export default BannerProDetailsReflectiveBanner