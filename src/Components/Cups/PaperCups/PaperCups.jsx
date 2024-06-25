import React, { useEffect, useState } from 'react'
import style from './PaperCups.module.css'
import papercupsImg from '../../../assets/cups.png'
import { Link } from 'react-router-dom';
import LoadingScrean from '../../../Components/LoodingScreen/LoodingScreen'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/slices/CartSlice';
import axios from 'axios'
function PaperCups() {
    
      // State variables to hold selected choices
  const dispatch = useDispatch();
  const [proDetails, setProDetails] = useState(null);
  const [printType, setPrintType] = useState('');
  const [color, setColor] = useState('');
  const [coverType, setCoverType] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [sizesAndSquares, setSizesAndSquares] = useState({});
  const [coverTypePrice, setCoverTypePrice] = useState({});
  const [printPrice, setPrintPrice] = useState({});
  const [colorPrice, setColorPrice] = useState({});
  const [quantityPrice, setQuantityPrice] = useState({});
  const [price, setPrice] = useState(0.00);

    async function getProDetails() {
        let { data } = await axios.get(`http://localhost:8000/api/products/36/details`);
        console.log(data);
        setProDetails(data);
        setSizesAndSquares({
            [data.sizes[0].name]: data.sizes[0].price,
            [data.sizes[1].name]: data.sizes[1].price,
            [data.sizes[2].name]: data.sizes[2].price,
            [data.sizes[3].name]: data.sizes[3].price,
            [data.sizes[4].name]: data.sizes[4].price,
            [data.sizes[5].name]: data.sizes[5].price,
            [data.sizes[6].name]: data.sizes[6].price
         });
        setPrintPrice({
            [data.printer_form[0].name]: data.printer_form[0].price,
            [data.printer_form[1].name]: data.printer_form[1].price,
            [data.printer_form[2].name]: data.printer_form[2].price,
            [data.printer_form[3].name]: data.printer_form[3].price
         });
         setColorPrice({
            [data.color[0].name]: data.color[0].price,
            [data.color[1].name]: data.color[1].price,
            [data.color[2].name]: data.color[2].price,
            [data.color[3].name]: data.color[3].price
         });
         setCoverTypePrice({
            [data.cover[0].name]: data.cover[0].price,
            [data.cover[1].name]: data.cover[1].price,
            [data.cover[2].name]: data.cover[2].price

          
          });
         
    }
    useEffect(() => {
      
        getProDetails()
    
    }, [])
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log selected choices
        console.log('Selected Paper Type:', printType);
        console.log('Selected Cut Type:', coverType);
        console.log('Selected Cut Type:', color);
        console.log('Selected Size:', size);
        console.log('Selected Quantity:', quantity);
        console.log('Notes:', notes);
        console.log('Uploaded File:', file);
        console.log('File Link:', fileLink);
        console.log('Delivery Date:', deliveryDate);
        const itemData = {
          id:proDetails.id,
          name:proDetails.name,
            printType,
            coverType,
            size,
            quantity,
            notes,
            file,
            fileLink,
            deliveryDate,
            price
          };
   
        console.log(itemData);
        dispatch(addToCart(itemData));
    };
      // Function to calculate the total price
  const calculateTotalPrice = () => {
        //  cover cost
    //     const sizeFactor = parseInt(sizesAndSquares[size]);
    //     const numOfsquares = parseFloat((quantity / sizeFactor) * 2); // عدد الأغلفة الأمامية والخلفية
    //        console.log(numOfsquares)
    //     const covertypeCost = parseFloat(numOfsquares) * parseFloat(internalPaperPrice[paperType]);
    //      console.log(covertypeCost)
    //      console.log(internalPaperPrice[paperType])
    //     const solfanCost = parseFloat(numOfsquares * solfanPrice[solfan]);
    //    console.log(solfanCost)
    
    //     const coverCost = parseFloat(covertypeCost + solfanCost);
    // // console.log(coverCost)
  
    // const flexCost = parseFloat(numOfsquares * flexTypePrice[heel] );
    // console.log(flexCost)
    
    // const pocketCost = parseFloat(quantity * innerPocketPrice[innerPocket] );
    // console.log(pocketCost)
  
    //  const printingCost = numOfsquares * 1 ;
    //  console.log(printingCost)
    // // papers cost end
    //  const totalCost = parseFloat(coverCost  + printingCost + flexCost + pocketCost);
    //       console.log(totalCost);
    //     setPrice(totalCost);
    //       console.log(price);
           
    
  }
    // Update total price whenever relevant state variables change
    // useEffect(() => {
    //     // calculateTotalPrice();
    //     setPrice();
    //   }, [paperType,cutType,heel, solfan, size,innerPocket, quantity]);
  // Function to handle form submission

  return (
    <>
    
    {proDetails?<div className='container-fluid my-5 '  style={{'overflow':'hidden'}}>
    <h1 className='mx-4 mb-5'>{proDetails.name}</h1>
     <form onSubmit={handleSubmit}>
     <div className='d-lg-flex  mx-0 '>
    <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
     <div className='mt-0'>
                  <label className='mb-2 fw-bold'> المقاس</label>
                  <div className={`col-12 text-center `}>
                  <div className={`col-12 d-flex ${style.divwidth}`}>
                  <div
            className={`border  col-3 p-1 hovercolor ${size === proDetails.sizes[0].name ? style.selected : ''}`}
            onClick={() => setSize(proDetails.sizes[0].name)}
          >
            {proDetails.sizes[0].name}
          </div>
          <div
            className={`border me-1 col-3 p-1 hovercolor ${size === proDetails.sizes[1].name ? style.selected : ''}`}
            onClick={() => setSize(proDetails.sizes[1].name)}
          >
            {proDetails.sizes[1].name}
          </div>
          <div
            className={`border me-1 col-3 p-1 hovercolor ${size === proDetails.sizes[2].name ? style.selected : ''}`}
            onClick={() => setSize(proDetails.sizes[2].name)}
          >
            {proDetails.sizes[2].name}
          </div>
          <div
            className={`border me-1 col-3 p-1 hovercolor ${size === proDetails.sizes[3].name ? style.selected : ''}`}
            onClick={() => setSize(proDetails.sizes[3].name)}
          >
            {proDetails.sizes[3].name}
          </div>
          </div>
          <div className={`col-12 d-flex mt-1 ${style.measurewidth}`}>
          <div
            className={`border  col-4 p-1 hovercolor ${size === proDetails.sizes[4].name ? style.selected : ''}`}
            onClick={() => setSize(proDetails.sizes[4].name)}
          >
            {proDetails.sizes[4].name}
          </div>

          <div
            className={`border me-1 col-4 p-1 hovercolor ${size === proDetails.sizes[5].name ? style.selected : ''}`}
            onClick={() => setSize(proDetails.sizes[5].name)}
          >
            {proDetails.sizes[5].name}
          </div>
          <div
            className={`border me-1 col-4 p-1 hovercolor ${size === proDetails.sizes[6].name ? style.selected : ''}`}
            onClick={() => setSize(proDetails.sizes[6].name)}
          >
            {proDetails.sizes[6].name}
          </div>
          </div>
        </div>
        </div>
       {/* item */}
       <div className='mt-4'>
       <label className='fw-bold'> اللون  </label>
       <div className={`d-flex mt-1 me-0 col-12 text-center ${style.divwidth}`}>
                                    {proDetails.color.map((selectedcolor, index) => (
<div
key={index}
className={`border  hovercolor me-1 col-3 py-1 ${style.marg} ${color === selectedcolor.name ? style.selected  : ''}`}
onClick={() => setColor(selectedcolor.name)}
>
{selectedcolor.name}
</div>
))} 
  
       </div>
       </div>
               {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'>الطباعة  </label>
       <div className={`d-flex text-center ms-1 ${style.divwidth}`}>
                    {proDetails.printer_form.map((selectedprint, index) => (
            <div
              key={index}
              className={`border me-1 col-3 py-1 hovercolor ${printType === selectedprint.name ? style.selected : ''}`}
              onClick={() =>setPrintType(selectedprint.name)}
            >
              {selectedprint.name}
            </div>
          ))}
       </div>
       </div>
          {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'> الغطاء </label>
       <div className={`d-flex text-center ms-1 ${style.divwidth}`}>
       {size !== '1 بولة' && size !== '2 بولة' && size !== '3 بولة' && proDetails.cover.map((selectedCover, index) => (
                        <div
                          key={index}
                          className={`border hovercolor me-1 col-4 py-1 ${coverType === selectedCover.name ? style.selected : ''}`}
                          onClick={() => setCoverType(selectedCover.name)}
                        >
                          {selectedCover.name}
                        </div>
                      ))}
                    </div>
       </div>

                   {/* item */}
                   <div className='d-flex border justify-content-between p-2  mt-4 me-1 w-100'>
          <label className=''>الكمية</label>
          <input
                    type='number'
                    id="quantity"
                    name="quantity"
                    max={1000000000000}
                    min={1000}
                    placeholder='1000'
                    step="500"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='bg-light p-1 text-center border-0'
                  />
         </div>
       </div>

     {/* ..... */}
     <div className='left col-md-12 col-sm-12 col-lg-6 col-xs-12 me-lg-4 '>
     
     <div className='mb-4'></div>

       <div className=" d-flex  border">
           <div  className=" justify-content-between align-items-center bg-danger text-light p-4" onClick={calculateTotalPrice} style={{'cursor':'pointer'}}>
               <div className="mx-auto"><i className="fa-solid fa-calculator text-light me-3" ></i></div><div className=""> إحسب<br /> السعر</div>
           </div>

           <div className="w-100">
               <div className=" p-1 d-flex justify-content-between align-items-center ">
                   <div className=" fw-bold">
                       الإجمالي
                   </div>
                   <div className="price-number fw-bold">
                   {price?parseFloat(price.toFixed(2)): '0.00'}ج.م
                   </div>
               </div>
               
               <div className={`${style.textfont} mt-3  d-flex justify-content-between align-items-center border-top`}>
                   <div className={`px-2 mt-3 ms-3`}>
                       *
                       السعر غير شامل الشحن
                   </div>
                   <div className={`px-0 mt-3  me-2`}>
                       سعر النسخة
                       {price? ((price/quantity).toFixed(2)):'0.00'}ج.م
                       
                   </div>
               </div>
           </div>
       </div>


{/* item*/}

                     <div className="border mt-3">
                     <div className="justify-content-center text-center">
                     <div id="dZUpload" className={` ${style.uploadbtn} py-5 `}>
                         <label htmlFor='fileUpload' className={` ${style.uploadbtn}text-dark`}>
                             <i className={` ${style.uploadbtn} fa-solid fa-cloud-arrow-up fa-2x `}></i>
                               <span className={style.uploadbtn}> رفع الملف</span>
                            </label>
                         <input
                          type='file'
                          id='fileUpload'
                          style={{ display: 'none'}}
                          onChange={(e) => setFile(e.target.files[0])}
                             />
                         </div>
                         
                         
                         <div className="drag-note text-secondary mb-2">
                             ملفات PDF فقط بحد أقصي 25 ميجابايت
                         </div>
                     </div>
                 </div>
{/* item */}
                 <div className="border">
                     <div className="d-flex  text-left" style={{'border-top': 0}}>
                     <i className="fa-solid fa-link mt-2 text-secondary me-2"></i>
                     <input
                    name=''
                    type='text'
                    id=''
                    className='btn ms-0 w-100'
                    placeholder='أو ضع رابط الملف'
                    value={fileLink}
                    onChange={(e) => setFileLink(e.target.value)}
                  />
                     </div>
                 </div>

               {/* item */}
               

               <div className=" notes-input border mt-3">
                     <div className="">
                     <input
                    type='text'
                    placeholder='ملاحظاتك مع الطلب (ان وجدت)'
                    className='btn w-100 '
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                  />
                     </div>
                 </div>
            {/* item */}
            
            {/* <div className="border mt-3 py-1 px-1 ">
                     <div className="d-flex align-items-center justify-content-between mb-2">
                         <div className="clock ml-1 d-flex align-items-center">
                         <i className="fa-regular fa-clock"></i>
                         </div>
                         <div className="text">
                             ميعاد التسليم   التقريبي
                         </div>
                         <div className="ne_font date-columns">
                             <span>07/05/2024</span>
                             <span className="break-line"> | </span>
                             <span>11:53PM</span> */}

                    {/* <input
                      type='date'
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    /> */}
                         {/* </div>
                     </div>
                 </div> */}
       {/*  */}
       {/* <div className={`border border-danger mt-3 ${style.cartdiv}`}> */}
                     {/* <div className={`d-flex justify-content-between text-center align-items-center `}> */}
                     <button type='submit' className={`border border-danger mt-3 w-100 btn main-btn width-fluid text-center align-items-center ${style.cartbtn}`}>
                         أضف إلى السلة
                     <i className={`fa-solid fa-cart-shopping  me-2 `}></i>
                     </button>
                     {/* </div> */}
                 {/* </div> */}
                
     </div>
    
    </div>

{/* rightside */}


{/* leftside */}
<div  className={`col-md-12 col-lg-4 col-sm-12  mt-0 `}>
     <div className={`${style.circlebg} px-4 `} >
     <img src={papercupsImg} alt='brochureImg' className={` rounded ${style.brochImg}`}/>
     </div>
     
     <div className="d-flex justify-content-center mt-5 ">
                     <Link id="" className="d-flex col-md-5 texthover" to='/'>
                        <i className="fa-solid fa-chalkboard-user mt-1"></i>
                         <span className="text ms-2">إرشادات الطباعة</span>
                             
                     </Link>
                     <Link id="" className="d-flex col-md-4 texthover" to="./">
                            <i className="fa-solid fa-table-cells mt-1"></i>
                             <span className="text ms-2"> المنتجات</span>
                             
                     </Link>
                     <Link className="d-flex col-md-3 texthover" to="/ContactUs">
                         <i className="fa-solid fa-headset mt-1"></i>
                         <span className="text ms-2">المساعدة</span>
                             
                     </Link>
                 </div>
    </div>
    </div>
    </form>
    </div>
     :<LoadingScrean/>}
   </>
  )
}

export default PaperCups
