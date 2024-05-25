import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import style from './BannerproDetails.module.css'
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { Link, useParams } from 'react-router-dom';
import bannerproimg from '../../assets/image2.jpg'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/slices/CartSlice'
function BannerProDetailsStand() {
    const {id} =useParams();
    const dispatch = useDispatch();
    const { register, handleSubmit } = useForm();
    const [proDetails, setProDetails] = useState(null);
    const [quantity, setQuantity] = useState(1); 
    const [isPriceVisible, setIsPriceVisible] = useState(false);
    const [selectedSize, setSelectedSize] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [sizesAndPrices, setSizesAndPrices] = useState({});
  const isAddToCartDisabled = !selectedSize;

    console.log(id);
   
    async function getProDetails() {
      let { data } = await axios.get(`http://localhost:8000/api/products/5/details`);
      console.log(data)
      console.log(data.sizes[0].name)
      setProDetails(data);

      // Initialize sizesAndPrices after fetching data
      setSizesAndPrices({
          [data.sizes[0].name]: data.sizes[0].price,
          [data.sizes[1].name]: data.sizes[1].price,
          [data.sizes[2].name]: data.sizes[2].price
      });
  }


  const onSubmit = (formData) => {
    event.preventDefault(); // Prevent default form submission
    const totalAmount = sizesAndPrices[selectedSize] * quantity;
    const itemData = {
        id: proDetails.id,
        name: proDetails.name,
        size: selectedSize,
        quantity,
        notes: textareaValue,
        file: selectedFile,
        price: totalAmount
    };
    dispatch(addToCart(itemData));
    console.log(itemData);
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
  
  

  const handleSizeChange = (e) => {
      setSelectedSize(e.target.value);
      setIsPriceVisible(true); 
  };

  const togglePriceVisibility = () => {
      setIsPriceVisible(!isPriceVisible);
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value)) {
        setQuantity(value);
    }
  }
  const handleTextareaChange = (e) => {
    setTextareaValue(e.target.value);
  }
  
  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  } 
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
                    <h2>{proDetails.name.slice(0, proDetails.name.indexOf('',15))}</h2>
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
                    <form onSubmit={handleSubmit(onSubmit)}>
                    {/* <div className='col-12 mt-4'> */}
                        <div>
                    <label className='fw-bold mt-2'>المقاس</label>
                    <select
                    className={`col-12 p-2 mt-2 ${style.borderstyle}`}
                    {...register('size')}
                    onChange={handleSizeChange}>
                   <option value="">اختر المقاس</option>
                                        {proDetails.sizes.map((size, index) => (
                                            <option key={index} value={size.name}>{size.name} مقاس</option>
                                        ))}

                    {/* <option value="مقاس 240×300">مقاس 240×300</option>
                    <option value="مقاس 200×300">مقاس 200×300</option> */}

                </select>
            
            {isPriceVisible && selectedSize && (
              <>
                <div className='col-12 '>
                    <button  className="text-danger btn" onClick={togglePriceVisibility}>ازالة </button>
                </div>
                <div>
                     <span className='col-12 mx-3 text-danger fw-bold mt-1 fs-5'>{sizesAndPrices[selectedSize]} EGP</span>
                </div>
               </>     
               
            )}
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
                                    <h5 className="" data-addon-name="هل يوجد لديك تصميم (ارفع تصميم)">هل يوجد لديك تصميم (ارفع تصميم)</h5>
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
                                {isPriceVisible && selectedSize && (
                                  <>
                                    <div className='d-flex  justify-content-between py-1'>
                                     <div className='col-6'>
                                     <div className="text-danger">x <span>{quantity}</span> <span className='fw-bold'>ادجستل استاند</span></div>
                                     </div>
                                     <div>
                                       <span className=' col-6 mx-3 text-danger fw-bold'>{(parseFloat(sizesAndPrices[selectedSize] * quantity)).toFixed(2)} EGP</span>
                                     </div>
                                    </div>
                                    {textareaValue.trim() !== '' && selectedFile !== null || textareaValue.trim() == '' && selectedFile !== null || textareaValue.trim() !== '' && selectedFile == null(
                                      <>
                                    <div className='col-12 '>
                                     <div className="text-danger h-auto overflow-x-hidden">أكتب ملاحظاتك مع الطلب: {textareaValue.split('\n').map((line, index) => (<div key={index}>{line}-</div>))}</div>
                                     <div className="text-danger">  هل يوجد لديك تصميم (ارفع تصميم): {selectedFile ? selectedFile.name : ''}-</div>
                                    </div> 
                                    </>
                                    )} 


                                      <div className='text-danger text-center col-12 mt-3 py-3 border-top border-bottom fs-4'>المجموع EGP {(parseFloat(sizesAndPrices[selectedSize] * quantity)).toFixed(2)} </div>
                                      </>
                                    )}
                                <div className="d-flex w-100 mt-4">
                                    <div className="quantity col-4 mt-2">
                                        <label className="screen-reader-text d-none" htmlFor="quantity">كمية ادجستبل استاند</label>
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
                                    <button type="submit" className={`btn btn-danger col-8 mt-2 mb-5 py-2 fs-5 me-1 ${isAddToCartDisabled ? 'disabled' : ''}`}>إضافة إلى السلة</button>
                                </div>
                            </form>
                  
                </div>
            </div>

            
        </div>
          :<LoadingScrean/>}
           {/*  */}
       
    </div>
 
  )
}

export default BannerProDetailsStand