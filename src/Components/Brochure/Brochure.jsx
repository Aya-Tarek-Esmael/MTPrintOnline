import React, { useState } from 'react';
import brochureImg from '../../assets/brochure.png';
import style from './Brochure.module.css';
import { Link } from 'react-router-dom';

function Brochure() {
  
 // State variables to hold selected choices
 const [printType, setPrintType] = useState('');
 const [size, setSize] = useState('');
 const [Flexion, setFlexion] = useState('');
 const [solfanType, setSolfanType] = useState('');
 const [quantity, setQuantity] = useState(0);
 const [paperType, setPaperType] = useState('');
 const [notes, setNotes] = useState('');
 const [file, setFile] = useState('');
 const [fileLink, setFileLink] = useState('');
 const [deliveryDate, setDeliveryDate] = useState('');

   // Function to handle form submission
   const handleSubmit = (e) => {
       e.preventDefault();
       //selected choices 
       console.log('Selected Print Type:', printType);
       console.log('Selected Paper Type:', paperType);
       console.log('Selected Flexion:', Flexion);
       console.log('Selected Paper Type:', solfanType);
       console.log('Selected Size:', size);
       console.log('Selected Quantity:', quantity);
       console.log('Notes:', notes);
       console.log('Uploaded File:', file);
       console.log('File Link:', fileLink);
       console.log('Delivery Date:', deliveryDate);
     };
 

    return (
        <>
            <div className='container-fluid my-5'>
                <h1 className='mx-4 mb-5'>بروشور - Brochure</h1>
                <form onSubmit={handleSubmit}>
                <div className='d-lg-flex mx-0'>
                    <div className='col-lg-8 d-lg-flex px-4'>
                        <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
                            
                            
        {/* item */}
      <div className='mt-4'>
                  <label className='fw-bold'>المقاس</label>
                  <div className={`mt-1 me-0 col-12 text-center ${style.divwidth}`}>
                  <div className='col-12 d-flex '>
                      <div
                        className={`border hovercolor  col-3 py-1 ${size === 'دايرة 1.5 سم' ? style.selected : ''}`}
                        onClick={() => setSize('دايرة 1.5 سم ')}
                      >دايرة 1.5 سم </div>
                      <div
                        className={`border me-1 hovercolor col-3 py-1 ${size === 'دايرة 3 سم' ? style.selected : ''}`}
                        onClick={() => setSize('دايرة 3 سم ')}
                      >دايرة 3 سم </div>
                      <div
                        className={`border me-1 hovercolor col-3 py-1 ${size === 'دايرة 4 سم' ? style.selected : ''}`}
                        onClick={() => setSize('دايرة 4 سم ')}
                      >دايرة 4 سم </div>
                       <div
                        className={`border me-1 hovercolor col-3 py-1 ${size === '11x5' ? style.selected : ''}`}
                        onClick={() => setSize('11x5')}
                      >11x5</div>
                    </div>
                    <div className='col-12 d-flex mt-2'>
                      <div
                        className={`border hovercolor  col-3 py-1 ${size === 'دايرة 5 سم' ? style.selected : ''}`}
                        onClick={() => setSize('دايرة 5 سم' )}
                      >دايرة 5 سم</div>
                      <div
                        className={`border me-1 hovercolor col-3 py-1 ${size === 'دايرة 7 سم' ? style.selected : ''}`}
                        onClick={() => setSize('دايرة 7 سم')}
                      >دايرة 7 سم </div>
                      <div
                        className={`border me-1 hovercolor col-3 py-1 ${size === 'دايرة 9 سم' ? style.selected : ''}`}
                        onClick={() => setSize('دايرة 9 سم')}
                        >دايرة 9 سم </div>
                         <div
                        className={`border me-1 hovercolor col-3 py-1 ${size === '11x5' ? style.selected : ''}`}
                        onClick={() => setSize('11x5')}
                      >11x5</div>
                    </div>

                  </div>
                  </div>
                  

                            {/* item */}
                            <div className='mt-3'>
                                <label className='fw-bold'>نوع الورق</label>
                                 <div className={`mt-1 me-0 col-12 text-center ${style.measurewidth}`}>
                                    <div className='col-12 d-flex'>
                                        <div className={`border hovercolor col-4 py-1 ${paperType === 'كوشيه 115جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 115جرام')}>كوشيه 115جرام</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === 'كوشيه 200جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 200جرام')}>كوشيه 200جرام</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === 'كوشيه 250جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 250جرام')}>كوشيه 250جرام</div>
                                    </div>
                                    <div className='col-12 d-flex mt-2'>
                                        <div className={`border me-0 hovercolor col-4 py-1 ${paperType === 'كوشيه 300جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 300جرام')}>كوشيه 300جرام</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === '80جرام عادي' ? style.selected : ''}`} onClick={() => setPaperType('80جرام عادي')}>80جرام عادي</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === '100جرام عادي' ? style.selected : ''}`} onClick={() => setPaperType('100جرام عادي')}>100جرام عادي</div>
                                    </div>
                                </div>
                            </div>
      
                                                                  {/* item */}
<div className='mt-3'>
       <label className='mb-2 fw-bold'> شكل الطباعة </label>
       <div className='d-flex text-center '>
       <div
                      className={`border col-6 p-1 hovercolor ${
                        printType === 'وجه واحد ' ? style.selected : ''
                      }`}
                      onClick={() => setPrintType('وجه واحد ')}>
                     وجه واحد 
                    </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${
                        printType === 'وجهين' ? style.selected : ''
                      }`}
                      onClick={() => setPrintType('وجهين')}>
                     وجهين
                    </div>
       </div>
       </div>
 
                {/* item */}
        <div className='mt-3'>
       <label className='mb-2 fw-bold'> المقاس </label>
       <div className='d-flex text-center ms-1'>
       <div
                      className={`border col-6 p-1 hovercolor ${
                        size === 'A3 (30 X 42)' ? style.selected : ''
                      }`}
                      onClick={() => setSize('A3 (30 X 42)')}>
                    A3 (30 X 42)
                    </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${
                        size === 'A4 (21 X 30)' ? style.selected : ''
                      }`}
                      onClick={() => setSize('A4 (21 X 30)')}>
                     A4 (21 X 30)
                    </div>
       </div>
       </div>
                          
                            {/* item */}
  <div className='mt-3'>
       <label className='mb-2 fw-bold'> الإنثناء </label>
       <div className={`d-flex text-center ms-1 ${style.divwidth}`}>
       <div
                      className={`border col-4 p-1 hovercolor ${
                        Flexion === 'بدون إنثناء' ? style.selected : ''
                      }`}
                      onClick={() => setFlexion('بدون إنثناء')}>
                      بدون إنثناء 
                    </div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${
                        Flexion === 'ثنائى' ? style.selected : ''
                      }`}
                      onClick={() => setFlexion('ثنائى')}>
                      ثنائى
                    </div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${
                        Flexion === 'ثلاثى' ? style.selected : ''
                      }`}
                      onClick={() => setFlexion('ثلاثى')}>
                      ثلاثى
                    </div>
       </div>
       </div>

                                {/* item */}
  <div className='mt-3'>
       <label className='mb-2 fw-bold'> السلوفان </label>
       <div className={`d-flex text-center ms-2 ${style.divwidth}`}>
       <div
                      className={`border col-4 p-1 hovercolor ${
                        solfanType === 'بدون' ? style.selected : ''
                      }`}
                      onClick={() => setSolfanType('بدون')}>
                      بدون
                    </div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${
                        solfanType === 'مط' ? style.selected : ''
                      }`}
                      onClick={() => setSolfanType('مط')}>
                      مط
                    </div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${
                        solfanType === 'لامع' ? style.selected : ''
                      }`}
                      onClick={() => setSolfanType('لامع')}>
                      لامع
                    </div>
       </div>
       </div>
                         

                             {/* item */}
                             <div className='d-flex border justify-content-between p-2 mt-3 '>
                                <label className=''>الكمية</label>
                                <input
                                    type='number'
                                    placeholder='0'
                                    value={quantity}
                                    onChange={(e) => setQuantity(e.target.value)}
                                    className='bg-light p-1 text-center border-0 '
                                />
                            </div>
                           
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

           <div  className={`col-md-12 col-lg-4 col-sm-12  ${style.circlebg} mt-4 `}>
            <img src={brochureImg} alt='brochureImg' className={` mx-auto rounded ${style.brochImg}`}/>

            
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
    
);
}


export default Brochure
