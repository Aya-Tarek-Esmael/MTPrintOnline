import React, { useState } from 'react'
import style from './Prescription.module.css'
import prescriptionImg from '../../assets/prescription.png'
import { Link } from 'react-router-dom';

function Prescription() {
     // State variables to hold selected choices
 const [paperType, setPaperType] = useState('');
 const [printType, setPrintType] = useState('');
 const [size, setSize] = useState('');
 const [cutType, setCutType] = useState('');
 const [close, setClose] = useState('');
 const [closeSide, setCloseSide] = useState('');
 const [quantity, setQuantity] = useState('');
 const [paperNum, setPaperNum] = useState('');
 const [notes, setNotes] = useState('');
 const [file, setFile] = useState('');
 const [fileLink, setFileLink] = useState('');
 const [deliveryDate, setDeliveryDate] = useState('');
       // Function to handle form submission
   const handleSubmit = (e) => {
    e.preventDefault();
    //selected choices 
    console.log('Selected Paper Type:', paperType);
    console.log('Selected Print Type:', printType);
    console.log('Selected PaperNum Type:', paperNum);
    console.log('Selected Cut Type:', cutType);
    console.log('Selected Size:', size);
    console.log('Selected close:', close);
    console.log('Selected close side:', closeSide);
    console.log('Selected Quantity:', quantity);
    console.log('Notes:', notes);
    console.log('Uploaded File:', file);
    console.log('File Link:', fileLink);
    console.log('Delivery Date:', deliveryDate);
  };
  return (
    <>
    
    <div className='container-fluid my-5'  style={{'overflow':'hidden'}}>
     <h1 className='mx-4 mb-5'> روشتات- Prescription </h1>
     <form onSubmit={handleSubmit}>
     <div className='d-lg-flex  mx-0 '>
    <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
        
        {/* item */}
       <div className=''>
       <label className='mb-2 fw-bold'>نوع الورق </label>
                  <div className={`mt-1 me-0 col-12 text-center ${style.measurewidth}`}>
                    <div className='col-12 d-flex'>
                      <div
                        className={`border   col-3 py-1 hovercolor ${paperType === '60جرام عادي' ? style.selected : ''}`}
                        onClick={() => setPaperType('60جرام عادي')}
                      >60جرام عادي</div>
                      <div
                        className={`border  me-1 col-3 py-1 hovercolor ${paperType === '70جرام عادي' ? style.selected : ''}`}
                        onClick={() => setPaperType('70جرام عادي')}
                      >70جرام عادي</div>
                      <div
                        className={`border  me-1 col-3 py-1 hovercolor ${paperType === '80جرام عادي' ? style.selected : ''}`}
                        onClick={() => setPaperType('80جرام عادي')}
                      >80جرام عادي</div>
                      <div
                        className={`border  me-1 col-3 py-1 hovercolor${paperType === '100جرام عادي' ? style.selected : ''}`}
                        onClick={() => setPaperType('100جرام عادي')}
                      >100جرام عادي</div>
                    </div>
                    <div className='col-12 d-flex mt-2'>
                      <div
                        className={`border  col-3 py-1 hovercolor ${paperType === '115كوشية' ? style.selected : ''}`}
                        onClick={() => setPaperType('115كوشية')}
                      >115كوشية</div>
                      <div
                        className={`border  me-1 col-3 py-1 hovercolor ${paperType === '130كوشية' ? style.selected : ''}`}
                        onClick={() => setPaperType('130كوشية')}
                      >130كوشية</div>
                      <div
                        className={`border  me-1 col-3 py-1 hovercolor${paperType === '150كوشبة' ? style.selected : ''}`}
                        onClick={() => setPaperType('150كوشبة')}
                      >150كوشبة</div>
                      <div
                        className={`border  me-1 col-3 py-1 hovercolor ${paperType === '200كوشية' ? style.selected : ''}`}
                        onClick={() => setPaperType('200كوشية')}
                      >200كوشية</div>
                    </div>
                  </div>
                </div>
        {/* item */}
           {/* Cut Type */}
           <div className='mt-2'>
                  <label className='mb-2 fw-bold'> شكل الطباعة  </label>
                  <div className='d-flex text-center ms-1'>
                    <div
                      className={`border col-6 p-1 hovercolor ${printType === 'وجه فقط' ? style.selected : ''}`}
                      onClick={() => setPrintType('وجه فقط')}
                    >وجه فقط</div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${printType === 'وجه وظهر' ? style.selected : ''}`}
                      onClick={() => setPrintType('وجه وظهر')}
                    >وجه وظهر </div>
                  </div>
                </div>

        {/* item */}
    <div className='mt-2'>
                  <label className='mb-2 fw-bold'> الشرشرة </label>
                  <div className='d-flex text-center ms-1'>
                    <div
                      className={`border col-6 p-1 hovercolor ${cutType === 'مع' ? style.selected : ''}`}
                      onClick={() => setCutType('مع')}
                    >مع</div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${cutType === 'بدون' ? style.selected : ''}`}
                      onClick={() => setCutType('بدون')}
                    >بدون </div>
                  </div>
                </div>

          {/* Paper Number */}
          <div className='mt-2'>
                  <label className='mb-2 fw-bold'> عدد الورق الداخلى  </label>
                  <div className='d-flex text-center ms-2'>
                  <div
                      className={`border col-4 py-1 hovercolor ${paperNum === '50 ورقة' ? style.selected : ''}`}
                      onClick={() => setPaperNum('50 ورقة')}
                    >  50 ورقة </div>
                    <div
                      className={`border  me-1  col-4 py-1 hovercolor ${paperNum === '80 ورقة' ? style.selected : ''}`}
                      onClick={() => setPaperNum('80 ورقة')}
                    >  80 ورقة </div>
                   
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${paperNum === '100 ورقة' ? style.selected : ''}`}
                      onClick={() => setPaperNum('100 ورقة')}
                    >   100 ورقة  </div>
                  </div>
                </div>
        {/* item */}
         <div className='mt-2'>
                  <label className='mb-2 fw-bold'> التقفيل  </label>
                  <div className='d-flex text-center ms-2'>
                    <div
                      className={`border col-6 p-1 hovercolor ${close === 'غراء = لزق' ? style.selected : ''}`}
                      onClick={() => setClose('غراء = لزق')}
                    > غراء = لزق </div>
                    <div
                      className={`border col-6 p-1 me-2 hovercolor  ${close === 'دبوس = دفتر' ? style.selected : ''}`}
                      onClick={() => setClose('دبوس = دفتر')}
                    > دبوس = دفتر </div>
                  
                  </div>
                </div>

        {/* item */}
                <div className='mt-2'>
                  <label className='mb-2 fw-bold'> جة التقفيل  </label>
                  <div className='d-flex text-center ms-2'>
                    <div
                      className={`border col-3 py-1 hovercolor ${closeSide === 'فوق' ? style.selected : ''}`}
                      onClick={() => setCloseSide('فوق')}
                    > فوق</div>
                    <div
                      className={`border me-1 col-3 py-1 hovercolor ${closeSide === 'تحت' ? style.selected : ''}`}
                      onClick={() => setCloseSide('تحت')}
                    > تحت</div>
                    <div
                      className={`border me-1 col-3 py-1 hovercolor ${closeSide === 'شمال' ? style.selected : ''}`}
                      onClick={() => setCloseSide('شمال')}
                    >  شمال  </div>
                    <div
                      className={`border me-1 col-3 py-1 hovercolor ${closeSide === 'يمين' ? style.selected : ''}`}
                      onClick={() => setCloseSide('يمين')}
                    >  يمين </div>
                  </div>
                </div>
     
        
                {/* item */}
   
      <div className='mt-2'>
                  <label className='fw-bold'>المقاس</label>
                  <div className={`mt-1 me-0 col-12 text-center ${style.measurewidth}`}>
                    <div className='col-12 d-flex'>
                      <div
                        className={`border hovercolor col-4 py-1 ${size === 'A4  (30 X 21)' ? style.selected : ''}`}
                        onClick={() => setSize('A4  (30 X 21)')}
                      >A4  (30 X 21)</div>
                      <div
                        className={`border me-1 hovercolor col-4 py-1 ${size === 'A5  (21 X 15)' ? style.selected : ''}`}
                        onClick={() => setSize('A5  (21 X 15)')}
                      >A5  (21 X 15)</div>
                      <div
                        className={`border me-1 hovercolor col-4 py-1 ${size === 'A6 (15 X 10)' ? style.selected : ''}`}
                        onClick={() => setSize('A6 (15 X 10)')}
                      >A6 (15 X 10)</div>
                    </div>
                    <div className='col-12 d-flex mt-2'>
                      <div
                        className={`border me-0 hovercolor col-4 py-1 ${size === 'B4 (34 X 24)' ? style.selected : ''}`}
                        onClick={() => setSize('B4 (34 X 24)')}
                      >B4 (34 X 24)</div>
                      <div
                        className={`border me-1 hovercolor col-4 py-1 ${size === 'B5 (24 X 17)' ? style.selected : ''}`}
                        onClick={() => setSize('B5 (24 X 17)')}
                      >B5 (24 X 17)</div>
                      <div
                        className={`border me-1 hovercolor col-4 py-1 ${size === 'B6 (17 X 12)' ? style.selected : ''}`}
                        onClick={() => setSize('B6 (17 X 12)')}
                      >B6 (17 X 12)</div>
                    </div>
                  </div>
                </div>

                        
        {/* item */}
                       <div className='d-flex border justify-content-between p-2   mt-3'>
          <label className=''>الكمية</label>
          <input
                    type='number'
                    placeholder='0'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='bg-light p-1 text-center border-0'
                  />
         </div>
               {/*  */}
               
     </div>
  {/* ..... */}
  <div className='left col-md-12 col-sm-12 col-lg-5 col-xs-12 me-lg-4 '>
     
     <div className='mb-4'></div>

       <div className=" d-flex  border">
           <Link  className=" justify-content-between align-items-center bg-danger text-light p-4" to="/">
               <div className="mx-auto"><i className="fa-solid fa-calculator text-light me-3"></i></div><div className=""> إحسب<br /> السعر</div>
           </Link>

           <div className="w-100">
               <div className=" p-1 d-flex justify-content-between align-items-center ">
                   <div className=" fw-bold">
                       الإجمالي
                   </div>
                   <div className="price-number fw-bold">
                       00.00&nbsp;ج.م
                   </div>
               </div>
               {/* <hr className={style.whr}/> */}
               <div className={`${style.textfont} mt-3  d-flex justify-content-between align-items-center border-top`}>
                   <div className={`px-2 mt-3 ms-3`}>
                       *
                       السعر غير شامل الشحن
                   </div>
                   <div className={`px-2 mt-3  me-2`}>
                       سعر النسخة
                       00.00
                       
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
     <img src={prescriptionImg} alt='brochureImg' className={`rounded ${style.brochImg}`}/>
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
   </>
  )
}

export default Prescription
