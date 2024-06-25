import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import style from './Letters.module.css'
// import LoadingScrean from '../LoadingScrean/LoadingScrean';
import { Link, useParams } from 'react-router-dom';
import bannerproimg from '../../assets/مضئ.webp'
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/slices/CartSlice';
function Letters() {
    const {id} =useParams();
    const dispatch = useDispatch();
  const [proDetails, setProDetails] = useState(null);
  const [type, setType] = useState('');
  const [sideStainless, setSideStainless] = useState('');
  const [sideColor, setSideColor] = useState('');
  const [sideType, setSideType] = useState('');
  const [pressType, setPressType] = useState('');
  const [lightType, setLightType] = useState('');
  const [oneFaceColor, setOneFaceColor] = useState('');
  const [lightColor, setLightColor] = useState('');
  const [twoFaceColor, setTwoFaceColor] = useState('');
  const [stainlessType, setStainlessType] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [cabelType, setCabelType] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [heightPrice, setHeightPrice] = useState({});
  const { register, handleSubmit } = useForm();
  const [quantity, setQuantity] = useState(1); 
  const [isPriceVisible, setIsPriceVisible] = useState(false);
  const [selectedType, setSelectedType] = useState('');
  const [typesAndPrices, setTypesAndPrices] = useState({});
  const [typesPrice, setTypesPrice] = useState({});
  const [lightTypePrice, setLightTypePrice] = useState({});
  const [pressPrice, setPressPrice] = useState({});
  const [sidePrice, setSidePrice] = useState({});
  const [stainlessPrice, setStainlessPrice] = useState({});
  const [colorPrice, setColorPrice] = useState({});
  const isAddToCartDisabled = !selectedType;
  const [textareaValue, setTextareaValue] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
   
    async function getProDetails(){
      let { data } = await axios.get(`http://localhost:8000/api/products/53/details`);
      console.log(data)
      console.log(data)
      setProDetails(data);

      // Initialize sizesAndPrices after fetching data
    //   setTypesAndPrices({
    //     'اكليرك × اكليرك': data.typ_paper_cover[0].price,
    //    'اكليرك "الوش 2 لون"×اكليرك': data.typ_paper_cover[1].price,
    //    'اكليرك×اكليرك وعلية استانلس': data.typ_paper_cover[2].price,
    //     'استانلس مصمت': data.typ_paper_cover[3].price,
    //     'استانلس×اكليرك': data.typ_paper_cover[3].price,
    // });

    setTypesAndPrices({
        [data.type_in_paper[0].name]: data.type_in_paper[0].price,
        [data.type_in_paper[1].name]: data.type_in_paper[1].price,
        [data.type_in_paper[2].name]: data.type_in_paper[2].price,
        [data.type_in_paper[3].name]: data.type_in_paper[3].price,
        [data.type_in_paper[4].name]: data.type_in_paper[4].price
    })
    setPressPrice({
      [data.type[0].name]: data.type[0].price,
      [data.type[1].name]: data.type[1].price,
      [data.type[2].name]: data.type[2].price,
      [data.type[3].name]: data.type[3].price
  })
  setSidePrice({
    [data.inner_pocket[0].name]: data.inner_pocket[0].price,
    [data.inner_pocket[1].name]: data.inner_pocket[1].price
})
setLightTypePrice({
  [data.type_in_paper[0].name]: data.type_in_paper[0].price,
  [data.type_in_paper[1].name]: data.type_in_paper[1].price,
  [data.type_in_paper[2].name]: data.type_in_paper[2].price,
  [data.type_in_paper[3].name]: data.type_in_paper[3].price,
  [data.type_in_paper[4].name]: data.type_in_paper[4].price
})
setStainlessPrice({
  [data.locl[0].name]: data.locl[0].price,
  [data.locl[1].name]: data.locl[1].price
})
setColorPrice({
  [data.locl[0].name]: data.locl[0].price,
  [data.locl[1].name]: data.locl[1].price
})
    }

    const onSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission
      const itemData = {
          id: proDetails.id,
          name: proDetails.name,
          type: selectedType,
          pressType :pressType,
          sideColor: sideColor,
          sideType:sideType,
          lightColor:lightColor,
          oneFaceColor:oneFaceColor,
          twoFaceColor:twoFaceColor,
          stainlessType:stainlessType,
          cabelType:cabelType,
          sideStainless:sideStainless,
          quantity,
          notes: textareaValue,
          file: selectedFile,
          price: price.toFixed(2) * quantity
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


  const handleTypeChange = (e) => {
    setSelectedType(e.target.value);
    setIsPriceVisible(true); 
};

const togglePriceVisibility = () => {
    setIsPriceVisible(!isPriceVisible);

};
const resetSelectedType = () => {
    setSelectedType('');
  
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
const [width, setWidth] = useState('');
const [height, setHeight] = useState('');
const [area, setArea] = useState('');
const [price, setPrice] = useState('');


const handleWidthChange = (event) => {
    const newWidth = event.target.value;
    console.log(newWidth)
    setWidth(newWidth);
    recalculatePrice(newWidth, height);
};

const handleHeightChange = (event) => {
    const newHeight = event.target.value;
    setHeight(newHeight);
    recalculatePrice(width, newHeight);
};

const recalculatePrice = () => {
   
        const pressCost = parseFloat(pressPrice[pressType] || 0);
        const sideCost = parseFloat(sidePrice[sideType] || 0);
        const lightCost = parseFloat(lightTypePrice[lightType] || 0);
        const stainlessCost = parseFloat(stainlessPrice[stainlessType] || 0);
        const typeCost = parseFloat(typesAndPrices[selectedType] || 0);
        const colorCost = parseFloat(colorPrice[selectedColor] || 0);
        const totalCost = parseFloat(typeCost + colorCost + pressCost + sideCost+ lightCost + stainlessCost);
       console.log(totalCost);
       console.log(typeCost);
      setPrice((parseFloat(totalCost)).toFixed(2));
      console.log('price',price)

};
useEffect(() => {
  const pressCost = parseFloat(pressPrice[pressType] || 0);
  const sideCost = parseFloat(sidePrice[sideType] || 0);
  const lightCost = parseFloat(lightTypePrice[lightType] || 0);
  const stainlessCost = parseFloat(stainlessPrice[stainlessType] || 0);
  const typeCost = parseFloat(typesAndPrices[selectedType] || 0);
  const colorCost = parseFloat(colorPrice[selectedColor] || 0);
  const totalCost = parseFloat(typeCost + colorCost + pressCost + sideCost+ lightCost + stainlessCost);
 console.log(totalCost);
 console.log(typeCost);
setPrice((parseFloat(totalCost)).toFixed(2));
}, [selectedType,quantity,typesAndPrices,sideType,stainlessType,selectedColor,pressType,pressPrice,stainlessPrice,sidePrice,colorPrice,lightTypePrice,lightType]);

useEffect(() => {
 setCabelType('');
 setFile('');
setPressType('');
setFileLink('');
setLightColor('');
setSideColor('');
setSideType('');
setOneFaceColor('');
setTwoFaceColor('');
setStainlessType('');
setSideStainless('');
setPrice('');
 
}, [selectedType]);

  return (
    <div>
        {proDetails? <div className={`container-fluid mb-3 pb-4 ${style.containerbg}`}>
            <div className="row px-5 mx-auto">
            <div
      className={`col-md-6 mt-5 ${style.container}`}
      onMouseMoveCapture={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      { !selectedType  &&  (
      <img
        src={`http://localhost:8000/images/${proDetails.image}`} 
        alt={proDetails.title}
        className={`w-100 ${style['zoomable-image']} ${isDragging ? style.dragging : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${dragOffsetX}px, ${dragOffsetY}px)`,
          left: originalX + dragOffsetX + 'px',
          top: originalY + dragOffsetY + 'px',
        }}
      />
         )}
      { selectedType &&  selectedType =='اكليرك × اكليرك' &&  (
      <img
        src={`http://localhost:8000/images/${proDetails.printer_form[0].image}`} 
        alt={proDetails.title}
        className={`w-100  ${style['zoomable-image']} ${isDragging ? style.dragging : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${dragOffsetX}px, ${dragOffsetY}px)`,
          left: originalX + dragOffsetX + 'px',
          top: originalY + dragOffsetY + 'px',
        }}
      />
         )}
         { selectedType &&  selectedType =='اكليرك "الوش 2 لون"×اكليرك' &&  (
      <img
        src={`http://localhost:8000/images/${proDetails.printer_form[1].image}`} 
        alt={proDetails.title}
        className={`w-100 ${style['zoomable-image']} ${isDragging ? style.dragging : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${dragOffsetX}px, ${dragOffsetY}px)`,
          left: originalX + dragOffsetX + 'px',
          top: originalY + dragOffsetY + 'px',
        }}
      />
         )}
         { selectedType &&  selectedType =='اكليرك×اكليرك وعلية استانلس' &&  (
      <img
        src={`http://localhost:8000/images/${proDetails.printer_form[2].image}`} 
        alt={proDetails.title}
        className={`w-100 ${style['zoomable-image']} ${isDragging ? style.dragging : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${dragOffsetX}px, ${dragOffsetY}px)`,
          left: originalX + dragOffsetX + 'px',
          top: originalY + dragOffsetY + 'px',
        }}
      />
         )}
         { selectedType &&  selectedType =='استانلس مصمت' &&  (
      <img
        src={`http://localhost:8000/images/${proDetails.printer_form[2].image}`} 
        alt={proDetails.title}
        className={`w-100 ${style['zoomable-image']} ${isDragging ? style.dragging : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${dragOffsetX}px, ${dragOffsetY}px)`,
          left: originalX + dragOffsetX + 'px',
          top: originalY + dragOffsetY + 'px',
        }}
      />
         )}
         { selectedType &&  selectedType =='استانلس×اكليرك'&&  (
      <img
        src={`http://localhost:8000/images/${proDetails.printer_form[2].image}`} 
        alt={proDetails.title}
        className={`w-100 ${style['zoomable-image']} ${isDragging ? style.dragging : ''}`}
        onMouseDown={handleMouseDown}
        style={{
          transform: `translate(${dragOffsetX}px, ${dragOffsetY}px)`,
          left: originalX + dragOffsetX + 'px',
          top: originalY + dragOffsetY + 'px',
        }}
      />
         )}

          <div>
              <h3 className='mt-4'>{proDetails.name}</h3>
              <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, voluptatem commodi omnis rem voluptas molestias cumque ratione vel minus repudiandae culpa quam sint dolorem consequatur atque aut, quae quidem corrupti!</p>
          </div>
    </div>

                <div className="col-md-6  px-4 mt-5 ">
                    <div className='d-flex justify-content-between'>
                    {/* <h2>{proDetails.name}</h2> */}
                    <h2>حروف بارزة</h2>
                    {/* <i className="fa-solid fa-circle-arrow-right "></i> */}
                    </div>
                    <p style={{'fontSize':'13px'}}>  السعر يشمل التصميم والطباعة</p>
                    <form onSubmit={onSubmit}>
                    {/* <div className='col-12 mt-4'> */}
                        <div>
                    <label className='fw-bold'>حروف بارزة </label>
                    <select className={`col-12 p-2 ${style.borderstyle}`} {...register('type')}
                     onChange={handleTypeChange}
                     value={selectedType} >
                        <option value=""> النوع </option>
                        {proDetails.type_in_paper.map((type, index) => (
                                            <option key={index} value={type.name}>{type.name} </option>
                                        ))}
                        {/* <option value="اكليرك × اكليرك ">اكليرك × اكليرك </option>
                        <option value='اكليرك "الوش 2 لون"×اكليرك '>اكليرك "الوش 2 لون"×اكليرك </option>
                        <option value="اكليرك×اكليرك وعلية استانلس">اكليرك×اكليرك وعلية استانلس</option>
                        <option value="استانلس مصمت ">استانلس مصمت </option>
                        <option value="استانلس×اكليرك ">استانلس×اكليرك  </option> */}
                     {/* <option
                      className={`border col-4 p-1 hovercolor ${lightColor === 'اكليرك × اكليرك' ? style.selected : ''}`}
                      onClick={() => setLightColor('اكليرك × اكليرك')}
                    > اكليرك × اكليرك </option>
                     <option
                      className={`border col-4 p-1 hovercolor ${lightColor === 'اكليرك "الوش 2 لون"×اكليرك' ? style.selected : ''}`}
                      onClick={() => setLightColor('اكليرك "الوش 2 لون"×اكليرك')}
                    > اكليرك "الوش 2 لون"×اكليرك </option>
                      <option
                      className={`border col-4 p-1 hovercolor ${lightColor === 'اكليرك×اكليرك وعلية استانلس' ? style.selected : ''}`}
                      onClick={() => setLightColor('اكليرك×اكليرك وعلية استانلس')}
                    > اكليرك×اكليرك وعلية استانلس </option>
                     <option
                      className={`border col-4 p-1 hovercolor ${lightColor === 'استانلس مصمت' ? style.selected : ''}`}
                      onClick={() => setLightColor('استانلس مصمت')}
                    > استانلس مصمت  </option>
                     <option
                      className={`border col-4 p-1 hovercolor ${lightColor === 'استانلس×اكليرك' ? style.selected : ''}`}
                      onClick={() => setLightColor('استانلس×اكليرك')}
                    > استانلس×اكليرك </option>
                         */}
                     </select>
                     </div>
                     <div>
                    {/* <label className='fw-bold'>نوع السلفان</label> */}
                    {/* <select className={`col-12 p-2 ${style.borderstyle}`} {...register('typesalfan')}
                     onChange={handleTypeSalfanChange}>
                        <option value="">اختر نوع السلفان</option>
                        {proDetails.type.map((size, index) => (
                                            <option key={index} value={size.name}>{size.name}  </option>
                                        ))} */}
                        {/* <option value="بدون">بدون</option>
                        <option value="سلوفان لامع">سلوفان لامع</option>
                        <option value="سلوفان مط">سلوفان مط</option> */}
                     {/* </select> */}
                     {/* {isPriceVisible &&  selectedTypeBanner &&  selectedTypeBanner == proDetails.type_in_paper[0].name && !selectedTypeSalfen && ( */}

                     {isPriceVisible &&  selectedType &&  selectedType =='اكليرك × اكليرك' &&  (
                             <>
                            <div className='col-12 '>
                                 <button  className="text-danger btn" onClick={resetSelectedType}>ازالة </button>
                                 <div>
                                 <span className='col-12 mx-3 text-danger fw-bold mt-1 fs-5'>{parseFloat(typesAndPrices[selectedType])} EGP</span>
                                 </div>
                                 
           {/* one face color */}
        <div className=''>
              <label className=" fw-bold"> لون الوش &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2`}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="oneFaceColor"
                      className='col-1'
                      value={color}
                      checked={oneFaceColor === color}
                      onChange={() => setOneFaceColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>

         {/* side color */}
         <div className='mt-4'>
              <label className=" fw-bold"> لون الجنب &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2 `}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="sideColor"
                      className='col-1'
                      value={color}
                      checked={sideColor === color}
                      onChange={() => setSideColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
 {/* light color */}
 <div className='mt-4'>
              <label className=" fw-bold"> لون الاضاءة &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2 `}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="lightColor"
                      className='col-1'
                      value={color}
                      checked={lightColor === color}
                      onChange={() => setLightColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
          {/* item */}
       <div className='mt-4'>
       <label className='fw-bold'> نوع الكبس  </label>
       <div className={`d-flex mt-1 me-0 ps-2 col-12 text-center ${style.divwidth}`}>
                                   {proDetails.type.map((selectedpresstype, index) => (
<div
key={index}
className={`border  hovercolor me-1 col-3 py-1 ${style.marg} ${pressType === selectedpresstype.name ? style.selected  : ''}`}
onClick={() => setPressType(selectedpresstype.name)}
>
{selectedpresstype.name}
</div>
))} 
  
                  {/* <div
                      className={`border col-3 p-1 hovercolor ${pressType === 'عادى ' ? style.selected : ''}`}
                      onClick={() => setPressType('عادى ')}
                    > عادى  </div>
                    <div
                      className={`border me-1 col-3 p-1 hovercolor ${pressType === 'هرمى ' ? style.selected : ''}`}
                      onClick={() => setPressType('هرمى ')}
                    > هرمى  
                    </div>
                    <div
                      className={`border me-1 col-3 p-1 hovercolor ${pressType === 'بومبية ' ? style.selected : ''}`}
                      onClick={() => setPressType('بومبية ')}
                    >300 بومبية 
                    </div>
                    <div
                      className={`border  me-1 col-3 p-1 hovercolor ${pressType === 'بدون ' ? style.selected : ''}`}
                      onClick={() => setPressType('بدون ')}
                    >بدون  </div> */}
                   
                  
                   
       </div>
       </div>
               {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'>نوع الجنب   </label>
       <div className={`d-flex ps-1 text-center ms-1 ${style.measurewidth}`}>
                    {proDetails.inner_pocket.map((selectedsidetype, index) => (
            <div
              key={index}
              className={`border me-1 col-6 py-1 hovercolor ${sideType === selectedsidetype.name ? style.selected : ''}`}
              onClick={() =>setSideType(selectedsidetype.name)}
            >
              {selectedsidetype.name}
            </div>
          ))}
              {/* <div
                      className={`border col-6 p-1 hovercolor ${sideType === 'مخرم ' ? style.selected : ''}`}
                      onClick={() => setSideType('مخرم ')}
                    >مخرم </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${sideType === 'بدون تخريم ' ? style.selected : ''}`}
                      onClick={() => setSideType('بدون تخريم ')}
                    >بدون تخريم </div> */}
       </div>
       </div>
                             </div>
                                </>     
               
                           )}
                                {isPriceVisible &&  selectedType && selectedType =='اكليرك "الوش 2 لون"×اكليرك'  &&  (
                             <>
                            <div className='col-12 '>
                                 <button  className="text-danger btn" onClick={resetSelectedType}>ازالة </button>
                                 <div>
                                 <span className='col-12 mx-3 text-danger fw-bold mt-1 fs-5'>{parseFloat(typesAndPrices[selectedType])} EGP</span>
                                 </div>
                  {/* one face color */}
        <div className=''>
              <label className=" fw-bold"> لون الوش 1&nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2 `}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="oneFaceColor"
                      className='col-1'
                      value={color}
                      checked={oneFaceColor === color}
                      onChange={() => setOneFaceColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
        {/* one face color */}
        <div className=''>
              <label className=" fw-bold">  لون الوش 2&nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2`}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="twoFaceColor"
                      className='col-1'
                      value={color}
                      checked={twoFaceColor === color}
                      onChange={() => setTwoFaceColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
         {/* side color */}
         <div className='mt-4'>
              <label className=" fw-bold"> لون الجنب &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2`}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="sideColor"
                      className='col-1'
                      value={color}
                      checked={sideColor === color}
                      onChange={() => setSideColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
 {/* light color */}
 <div className='mt-4'>
              <label className=" fw-bold"> لون الاضاءة &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2`}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="lightColor"
                      className='col-1'
                      value={color}
                      checked={lightColor === color}
                      onChange={() => setLightColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>

               {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'>نوع الجنب   </label>
       <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
                    {proDetails.inner_pocket
.map((selectedsidetype, index) => (
            <div
              key={index}
              className={`border me-1 col-6 py-1 hovercolor ${sideType === selectedsidetype.name ? style.selected : ''}`}
              onClick={() =>setSideType(selectedsidetype.name)}
            >
              {selectedsidetype.name}
            </div>
          ))}

                       {/* <div
                      className={`border col-6 p-1 hovercolor ${sideType === 'مخرم ' ? style.selected : ''}`}
                      onClick={() => setSideType('مخرم ')}
                    >مخرم </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${sideType === 'بدون تخريم ' ? style.selected : ''}`}
                      onClick={() => setSideType('بدون تخريم ')}
                    >بدون تخريم </div> */}
       </div>
       </div>
                             </div>
                                </>     
               
                           )}

{isPriceVisible &&  selectedType &&  selectedType == 'اكليرك×اكليرك وعلية استانلس' &&  (
                             <>
                            <div className='col-12 '>
                                 <button  className="text-danger btn" onClick={resetSelectedType}>ازالة </button>
                                 <div>
                                 <span className='col-12 mx-3 text-danger fw-bold mt-1 fs-5'>{parseFloat(typesAndPrices[selectedType])} EGP</span>
                                 </div>
        {/* side color */}
        <div className=''>
              <label className=" fw-bold"> لون الجنب &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2`}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="sideColor"
                      className='col-1'
                      value={color}
                      checked={sideColor === color}
                      onChange={() => setSideColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
 {/* light color */}
 <div className='mt-4'>
              <label className=" fw-bold"> لون الاضاءة &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2 `}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="lightColor"
                      className='col-1'
                      value={color}
                      checked={lightColor === color}
                      onChange={() => setLightColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
       
               {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'> الاستانلس  </label>
       <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
                    {proDetails.locl.map((selectedstainlesstype, index) => (
            <div
              key={index}
              className={`border me-1 col-6 py-1 hovercolor ${stainlessType === selectedstainlesstype.name ? style.selected : ''}`}
              onClick={() =>setStainlessType(selectedstainlesstype.name)}
            >
              {selectedstainlesstype.name}
            </div>
          ))}

                   {/* <div
                      className={`border col-6 p-1 hovercolor ${stainlessType === 'دهبى' ? style.selected : ''}`}
                      onClick={() => setStainlessType('دهبى')}
                    >دهبى  </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${stainlessType === 'فضى ' ? style.selected : ''}`}
                      onClick={() => setStainlessType('فضى ')}
                    > فضى </div> */}
       </div>
       </div>
                             </div>
                                </>     
               
                           )}
                           {isPriceVisible &&  selectedType &&  selectedType == 'استانلس مصمت' &&  (
                             <>
                            <div className='col-12 '>
                                 <button  className="text-danger btn" onClick={resetSelectedType}>ازالة </button>
                                 <div>
                                 <span className='col-12 mx-3 text-danger fw-bold mt-1 fs-5'>{parseFloat(typesAndPrices[selectedType])} EGP</span>
                                 </div>
          {/* item */}
<div className=''>
       <label className='mb-2 fw-bold'> اللون  </label>
       <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
                    {proDetails.locl.map((selectedcolor, index) => (
            <div
              key={index}
              className={`border me-1 col-6 py-1 hovercolor ${selectedColor === selectedcolor.name ? style.selected : ''}`}
              onClick={() =>setSelectedColor(selectedcolor.name)}
            >
              {selectedcolor.name}
            </div>
          ))}

                   {/* <div
                      className={`border col-6 p-1 hovercolor ${selectedColor === 'دهبى' ? style.selected : ''}`}
                      onClick={() => setSelectedColor('دهبى')}
                    >دهبى  </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${selectedColor === 'فضى' ? style.selected : ''}`}
                      onClick={() => setSelectedColor('فضى')}
                    > فضى </div> */}
       </div>
       </div>
{/* item */}
       <div className='mt-4'>
       <label className=' fw-bold'> إضاءة باك لايت  </label>
       <div className={` mt-1 me-0  col-12 text-center ${style.divwidth}`}>
                  <div className={`col-12 d-flex ${style.measurewidth}`}>
                  {/* <div
            className={`border  col-4 p-1 hovercolor ${lightColor === proDetails.sizes[0].name ? style.selected : ''}`}
            onClick={() => setLightColor(proDetails.sizes[0].name)}
          >
            {proDetails.sizes[0].name}
          </div>
          <div
            className={`border me-1 col-4 p-1 hovercolor ${lightColor === proDetails.sizes[1].name ? style.selected : ''}`}
            onClick={() => setLightColor(proDetails.sizes[1].name)}
          >
            {proDetails.sizes[1].name}
          </div>
          <div
            className={`border me-1 col-4 p-1 hovercolor ${lightColor === proDetails.sizes[2].name ? style.selected : ''}`}
            onClick={() => setLightColor(proDetails.sizes[2].name)}
          >
            {proDetails.sizes[2].name}
          </div>
          </div>
          <div className='col-12 d-flex mt-1'>
          <div
            className={`border  col-6 p-1 hovercolor ${lightColor === proDetails.sizes[3].name ? style.selected : ''}`}
            onClick={() => setLightColor(proDetails.sizes[3].name)}
          >
            {proDetails.sizes[3].name}
          </div>
          <div
            className={`border me-1 col-6 p-1 hovercolor ${lightColor === proDetails.sizes[3].name ? style.selected : ''}`}
            onClick={() => setLightColor(proDetails.sizes[3].name)}
          >
            {proDetails.sizes[3].name}
          </div> */}
           
                  <div
                      className={`border col-4 p-1 hovercolor ${lightType === 'بدون ' ? style.selected : ''}`}
                      onClick={() => setLightType('بدون ')}
                    > بدون  </div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${lightType === 'تلجى ' ? style.selected : ''}`}
                      onClick={() => setLightType('تلجى ')}
                    > تلجى </div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${lightType === 'ابيض' ? style.selected : ''}`}
                      onClick={() => setLightType('ابيض')}
                    >ابيض </div>
                    </div>
                     <div className='col-12 d-flex mt-2'>
                    <div
                      className={`border  col-6 p-1 hovercolor ${lightType === 'ورم' ? style.selected : ''}`}
                      onClick={() => setLightType('ورم')}
                    >ورم</div>
                     <div
                      className={`border me-2 col-6 p-1 hovercolor ${lightType === 'دهبى' ? style.selected : ''}`}
                      onClick={() => setLightType('دهبى')}
                    >دهبى </div>

           
    </div>
</div>
</div>
       {/* item */}
       <div className='mt-4'>
       <label className='fw-bold'> كوابيل </label>
       <div className={`d-flex mt-1 me-0  col-12 text-center ${style.divwidth}`}>
                                    {/* {proDetails.typ_paper_cover.map((selectedcabel, index) => (
<div
key={index}
className={`border  hovercolor me-1 col-3 py-1 ${style.marg} ${cabelType === selectedcabel.name ? style.selected  : ''}`}
onClick={() => setCabelType(selectedcabel.name)}
>
{selectedcabel.name}
</div>
))} 
   */}
                     <div
                      className={`border col-3 p-1 hovercolor ${cabelType === 'سم8 ' ? style.selected : ''}`}
                      onClick={() => setCabelType('سم8 ')}
                    > سم 8 </div>
                    <div
                      className={`border me-1 col-3 p-1 hovercolor ${cabelType === 'سم5 ' ? style.selected : ''}`}
                      onClick={() => setCabelType('سم5 ')}
                    > سم 5   
                    </div>
                    <div
                      className={`border me-1 col-3 p-1 hovercolor ${cabelType === 'سم3 ' ? style.selected : ''}`}
                      onClick={() => setCabelType('سم3 ')}
                    >3 سم 
                    </div>
                    <div
                      className={`border  me-1 col-3 p-1 hovercolor ${cabelType === 'بدون ' ? style.selected : ''}`}
                      onClick={() => setCabelType('بدون ')}
                    >بدون  </div>
       </div>
       </div>
                             </div>
                                </>     
               
                           )}
                           {isPriceVisible &&  selectedType &&  selectedType == 'استانلس×اكليرك' &&  (
                             <>
                            <div className='col-12 '>
                                 <button  className="text-danger btn" onClick={resetSelectedType}>ازالة </button>
                                 <div>
                                 <span className='col-12 mx-3 text-danger fw-bold mt-1 fs-5'>{parseFloat(typesAndPrices[selectedType])} EGP</span>
                                 </div>
{/* one face color */}
<div className=''>
              <label className=" fw-bold"> لون الوش &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-3`}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="oneFaceColor"
                      className='col-1'
                      value={color}
                      checked={oneFaceColor === color}
                      onChange={() => setOneFaceColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
 {/* light color */}
 <div className='mt-4'>
              <label className=" fw-bold"> لون الاضاءة &nbsp;</label>
              <div className={` pb-4 pt-2 rounded-1 col-12 mt-2 px-2`}>
              <div className='d-flex  justify-content-center px-lg-5'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="lightColor"
                      className='col-1'
                      value={color}
                      checked={lightColor === color}
                      onChange={() => setLightColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>
        </div>
      {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'> استانليس الجنب </label>
       <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
                    {proDetails.locl .map((selectedsidestainless, index) => (
            <div
              key={index}
              className={`border me-1 col-6 py-1 hovercolor ${sideStainless === selectedsidestainless.name ? style.selected : ''}`}
              onClick={() =>setSideStainless(selectedsidestainless.name)}
            >
              {selectedsidestainless.name}
            </div>
          ))}

                     {/* <div
                      className={`border col-6 p-1 hovercolor ${sideStainless === 'دهبى ' ? style.selected : ''}`}
                      onClick={() => setSideStainless('دهبى')}
                    >دهبى  </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${sideStainless === ' فضى ' ? style.selected : ''}`}
                      onClick={() => setSideStainless('فضى ')}
                    > فضى </div> */}
       </div>
       </div>
               {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'>نوع الجنب   </label>
       <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
                    {proDetails.inner_pocket.map((selectedsidetype, index) => (
            <div
              key={index}
              className={`border me-1 col-6 py-1 hovercolor ${sideType === selectedsidetype.name ? style.selected : ''}`}
              onClick={() =>setSideType(selectedsidetype.name)}
            >
              {selectedsidetype.name}
            </div>
          ))}

                   {/* <div
                      className={`border col-6 p-1 hovercolor ${sideType === 'مخرم ' ? style.selected : ''}`}
                      onClick={() => setSideType('مخرم ')}
                    >مخرم </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${sideType === 'بدون تخريم ' ? style.selected : ''}`}
                      onClick={() => setSideType('بدون تخريم ')}
                    >بدون تخريم </div> */}
       </div>
       </div>
                             </div>
                                </>     
               
                           )}
                 {isPriceVisible &&  selectedType && (
              <>
                {/* <div className='col-12 '>
                    <button  className="text-danger btn" onClick={togglePriceVisibility}>ازالة </button>
                </div> */}
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
                                {isPriceVisible && selectedType && (
                                  <>
                                    <div className='d-flex  justify-content-between py-1 '>
                                     <div className='col-6'>
                                     <div className="text-danger">x <span>{quantity}</span> <span className='fw-bold'>حروف بارزة </span></div>
                                     </div>
                                     <div>
                                       <span className=' col-6 mx-3 text-danger fw-bold'>{((price * quantity).toFixed(2))} EGP</span>
                                     </div>
                                    </div>  
                                    {isPriceVisible && textareaValue && selectedFile && (
                                      <>
                                    <div className='col-12 '>
                                     <div className="text-danger h-auto overflow-x-hidden">أكتب ملاحظاتك مع الطلب: {textareaValue.split('\n').map((line, index) => (<div key={index}>{line}-</div>))}</div>
                                     <div className="text-danger">  هل يوجد لديك تصميم (ارفع تصميم): {selectedFile ? selectedFile.name : ''}-</div>
                                    </div> 
                                    </>
                                    )}  
                                      <div className='text-danger text-center col-12 mt-3 py-3 border-top border-bottom fs-4'>المجموع EGP  {((price * quantity).toFixed(2))}</div>
                                      </>
                                    )}
                                <div className="d-flex w-100 mt-4">
                                    <div className="quantity col-4 mt-2">
                                        <label className="screen-reader-text d-none" htmlFor="quantity">كمية  بانر عادي</label>
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

export default Letters
