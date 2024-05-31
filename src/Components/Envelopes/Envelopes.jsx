import style from './Envelopes.module.css'
import envelopeImg from '../../assets/envelope.png'
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/slices/CartSlice';
import axios from 'axios'
function Envelopes() {

          // State variables to hold selected choices
  const dispatch = useDispatch();
  const [proDetails, setProDetails] = useState(null);
  const [paperType, setPaperType] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [internalPaperPrice, setInternalPaperPrice] = useState({});
  const [sizesAndSquares, setSizesAndSquares] = useState({});
  const [price, setPrice] = useState(0.00);
  // const [solfanPrice, setSolfanPrice] = useState({});
  // const [coverTypePrice, setCoverTypePrice] = useState({});
    async function getProDetails() {
        let { data } = await axios.get(`http://localhost:8000/api/products/27/details`);
        console.log(data);
        setProDetails(data);
        setSizesAndSquares({
            [data.sizes[0].name]: data.sizes[0].price,
            [data.sizes[1].name]: data.sizes[1].price,
            [data.sizes[2].name]: data.sizes[2].price,
            [data.sizes[3].name]: data.sizes[3].price
      
         });
        
         setInternalPaperPrice({
            [data.type_in_paper[0].name]: data.type_in_paper[0].price,
            [data.type_in_paper[1].name]: data.type_in_paper[1].price
          });

    }

    useEffect(() => {
      
        getProDetails()
    
    }, [])
    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
      //selected choices 
    console.log('Selected Paper Type:', paperType);
    console.log('Selected Size:', size);
    console.log('Selected Quantity:', quantity);
    console.log('Notes:', notes);
    console.log('Uploaded File:', file);
    console.log('File Link:', fileLink);
    console.log('Delivery Date:', deliveryDate);
        const itemData = {
          id:proDetails.id,
          name:proDetails.name,
            paperType,
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
      const totalCost= (parseFloat(sizesAndSquares[size]) + parseFloat(internalPaperPrice[paperType])) * quantity ;
      setPrice(totalCost);
  }
    // Update total price whenever relevant state variables change
    useEffect(() => {
        // calculateTotalPrice();
        setPrice();
      }, [paperType,size, quantity]);

return (
<>
{proDetails?<div className='container-fluid my-5'  style={{'overflow':'hidden'}}>
     <h1 className='mx-4 mb-5'>{proDetails.name}</h1>
     <form onSubmit={handleSubmit}>
     <div className='d-lg-flex  mx-0 '>
    <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
              {/* item */}
              <div className=''>
       <label className='mb-2 fw-bold'>نوع الورق </label>
       <div className='d-flex text-center ms-2'>
       {proDetails.type_in_paper.map((papertype, index) => (
            <div
              key={index}
              className={`border me-1 col-6 py-1 hovercolor ${paperType === papertype.name ? style.selected : ''}`}
              onClick={() =>setPaperType(papertype.name)}
            >
              {papertype.name}
            </div>
          ))}
       </div>
       </div>

       {/* item */}
       <div className='mt-4'>
       <label className='fw-bold'>المقاس</label>
       <div className={` mt-1 me-0 col-12 text-center ${style.measurewidth}`}>
        <div className='d-flex'>
        <div
              className={`border hovercolor me-0  col-6 py-1 ${style.marg} ${size === proDetails.sizes[0].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[0].name)}
            >
              {proDetails.sizes[0].name}
            </div>
            <div
              className={`border me-1 hovercolor col-6 py-1 ${style.marg} ${size === proDetails.sizes[1].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[1].name)}
            >
              {proDetails.sizes[1].name}
            </div>
    </div>
    <div className='d-flex mt-2'>
    <div
              className={`border me-0 hovercolor col-6 py-1 ${style.marg} ${size === proDetails.sizes[2].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[2].name)}
            >
              {proDetails.sizes[2].name}
            </div>
            <div
              className={`border hovercolor me-1  col-6 py-1 ${style.marg} ${size === proDetails.sizes[3].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[3].name)}
            >
              {proDetails.sizes[3].name}
            </div>
</div>

       </div>
       </div>
       
          {/* item */}
          <div className='d-flex border justify-content-between p-2  mt-4'>
          <label className=''>الكمية</label>
          <input
                    type='number'
                    min='0'
                    placeholder='0'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='bg-light p-1 text-center border-0'
                  />
         </div>
              
     {/* item */}
     </div>

     {/* ..... */}
     <div className='left col-md-12 col-sm-12 col-lg-5 col-xs-12 me-lg-4 '>
     
                    <div className='mb-4'></div>
     
                      <div className=" d-flex  border">
                          <div  className=" justify-content-between align-items-center bg-danger text-light p-4" onClick={calculateTotalPrice} style={{'cursor':'pointer'}} >
                              <div className="mx-auto"><i className="fa-solid fa-calculator text-light me-3"></i></div><div className=""> إحسب<br /> السعر</div>
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
                              {/* <hr className={style.whr}/> */}
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
            
            <div className="border mt-3 py-1 px-1 ">
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
                             <span>11:53PM</span>

                    {/* <input
                      type='date'
                      value={deliveryDate}
                      onChange={(e) => setDeliveryDate(e.target.value)}
                    /> */}
                         </div>
                     </div>
                 </div>
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
<div  className={`col-md-12 col-lg-4 col-sm-12  mt-4 `}>
     <div className={`${style.circlebg} px-5 `} >
     <img src={envelopeImg} alt='brochureImg' className={` rounded ${style.brochImg}`}/>
     </div>
     
     <div className="d-flex justify-content-center mt-3  ">
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
    : <loodingScreen/>}
   </>
  )
}

export default Envelopes
