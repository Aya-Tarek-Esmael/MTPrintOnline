import React from 'react'
import style from './Prescription.module.css'
import prescriptionImg from '../../assets/prescription.png'
import { Link } from 'react-router-dom';

function Prescription() {
  return (
    <>
    
    <div className='container-fluid my-5'>
     <h1 className='mx-4 mb-5'> روشتات- Prescription </h1>
    <div className='d-lg-flex  mx-0 '>
    <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-6 ms-1 col-sm-12 px-sm-1'>
        
        {/* item */}
        <div className='mt-2'>
       <label className='mb-2 fw-bold'>نوع الورق </label>
       <div className='text-center ms-2'>
        <div className='col-12 d-flex'>
         <div className='border  col-3 py-1 hovercolor'>60جرام عادي</div>
         <div className='border  me-1  col-3 py-1 hovercolor'> 70جرام عادي</div>
         <div className='border  me-1 col-3 py-1 hovercolor'>80جرام عادي</div>
         <div className='border  me-1 col-3 py-1 hovercolor'>100جرام عادي</div>
         </div>
         <div className='col-12 d-flex mt-2'>
         <div className='border  col-3 py-1 hovercolor'>115كوشية</div>
         <div className='border  me-1  col-3 py-1 hovercolor'>130كوشية</div>
         <div className='border  me-1 col-3 py-1 hovercolor'>150كوشبة</div>
         <div className='border  me-1 col-3 py-1 hovercolor'>200كوشية</div>
         </div>
       </div>
       </div>

        {/* item */}

       {/* item */}
       <div className='mt-2'>
       <label className='mb-2 fw-bold'> شكل الطباعة  </label>
       <div className='d-flex text-center ms-1'>
         <div className='border  col-6 p-1 hovercolor '>وجة فقط </div>
         <div className='border me-1  col-6 p-1 hovercolor'>وجة وضهر</div>
       </div>
       </div>
        {/* item */}
        <div className='mt-2'>
       <label className='mb-2 fw-bold'> الشرشرة </label>
       <div className='d-flex text-center ms-1'>
         <div className='border  col-6 p-1 hovercolor '>  مع </div>
         <div className='border me-1  col-6 p-1 hovercolor'> بدون </div>
       </div>
       </div>

               {/* item */}
               <div className='mt-2'>
       <label className='mb-2 fw-bold'> عدد الورق الداخلى  </label>
       <div className='d-flex text-center ms-2'>
         <div className='border col-4 py-1 hovercolor'>  50 ورقة </div>
         <div className='border  me-1 col-4 py-1 hovercolor'>  80 ورقة </div>
         <div className='border  me-1 col-4 py-1 hovercolor'>   100 ورقة  </div>
       </div>
       </div>
        {/* item */}
        <div className='mt-2'>
       <label className='mb-2 fw-bold'> التقفيل  </label>
       <div className='d-flex text-center ms-2'>
         <div className='border col-6 py-1 hovercolor'>  غراء = لزق  </div>
         <div className='border  me-2 col-6 py-1 hovercolor'> دبوس = دفتر </div>
    
       </div>
       </div>
        {/* item */}
        <div className='mt-2'>
       <label className='mb-2 fw-bold'> جة التقفيل  </label>
       <div className='d-flex text-center ms-2'>
         <div className='border col-3 py-1 hovercolor'> فوق</div>
         <div className='border  me-1 col-3 py-1 hovercolor'> تحت</div>
         <div className='border  me-1 col-3 py-1 hovercolor'>  شمال  </div>
         <div className='border  me-1 col-3 py-1 hovercolor'>  يمين </div>

       </div>
       </div>
              {/* item */}
              <div className='mt-2'>
       <label className='mb-2 fw-bold'>الغلاف</label>
       <div className={`d-flex text-center ms-2 ${style.measurewidth}`}>
       <div className='border   col-3 p-1 hovercolor'> بدون</div>
         <div className='border me-1  col-3 p-1 hovercolor'> 150جرام</div>
         <div className='border  me-1  col-3 p-1 hovercolor'>200جرام</div>
         <div className='border  me-1  col-3 p-1 hovercolor'>300جرام لامع كوشيه</div>
       </div>
       </div>
        
                {/* item */}
       <div className=''>
       <label className='fw-bold'>المقاس</label>
       <div className={`mt-1 me-0 col-12 text-center ${style.measurewidth}`}>
        <div className='col-12 d-flex'>
         <div className={`border hovercolor  col-4 py-1 `}>A4  (30 X 21)</div>
         <div className={`border me-1 hovercolor col-4 py-1 `}>A5  (21 X 15)</div>
         <div className={`border me-1 hovercolor col-4 py-1 `}>A6  (15 X 10)</div>
         </div>
         <div className='col-12 d-flex mt-2'>
         <div className={`border me-0 hovercolor col-4 py-1 `}>B4  (34 X 24)</div>
         <div className={`border me-1 hovercolor col-4 py-1 `}>B5  (24 X 17)</div>
         <div className={`border me-1 hovercolor col-4 py-1 `}>B6  (17 X 12)</div>
         </div>
       </div>
       </div>     
     {/* item */}
     </div>

     {/* ..... */}
     <div className='left col-md-5 col-sm-12 me-md-4 '>
     
                    <div className='mb-4'></div>
     
                      <div className=" d-flex justify-content-between border">
                          <Link  className=" justify-content-between align-items-center bg-danger text-light p-4" to="/">
                              <div className="mx-auto"><i className="fa-solid fa-calculator text-light me-3"></i></div><div className=""> إحسب<br /> السعر</div>
                          </Link>

                          <div className="">
                              <div className="p-2 d-flex justify-content-between align-items-center ">
                                  <div className="price-text fw-bold">
                                      الإجمالي
                                  </div>
                                  <div className="price-number fw-bold">
                                      00.00&nbsp;ج.م
                                  </div>
                              </div>
                              <hr className={style.whr}/>
                              <div className=" d-flex justify-content-between align-items-center">
                                  <div className={style.textfont2}>
                                      *
                                      السعر غير شامل الشحن
                                  </div>
                                  <div className={style.textfont}>
                                      سعر النسخة
                                      00.00
                                      
                                  </div>
                              </div>
                          </div>
                      </div>
                 

{/* 2*/}

                     <div className="border mt-3">
                     <div className="justify-content-center text-center">
                         <div id="dZUpload" className="py-5">
                             <Link className="text-dark">
                             <i className="fa-solid fa-cloud-arrow-up fa-2x"></i>
                                 رفع الملف
                             </Link>
                         </div>
                         
                         
                         <div className="drag-note text-secondary mb-2">
                             ملفات PDF فقط بحد أقصي 25 ميجابايت
                         </div>
                     </div>
                 </div>

                 <div className="border">
                     <div className="d-flex  text-left" style={{'border-top': 0}}>
                     <i className="fa-solid fa-link mt-2 text-secondary me-2"></i>
                         <input name="" type="text" id="" className="btn ms-0 w-100" placeholder="أو ضع رابط الملف" />
                     </div>
                 </div>
                     
                       {/* item */}
          <div className='d-flex border justify-content-between p-2   mt-2'>
          <label className=''>الكمية</label>
          <input type='text'  placeholder='0'  className='bg-light  p-1 text-center border-0 '/>
         </div>
               {/*  */}
               

               <div className=" notes-input border mt-3">
                     <div className="">
                         <input name="" type="text" id="" placeholder="ملاحظاتك مع الطلب (ان وجدت)" className='btn w-100 '/>
                     </div>
                 </div>
            {/*  */}
            
            <div className="border mt-3 py-1 px-1 ">
                     <div className="d-flex align-items-center justify-content-between mb-2">
                         <div className="clock ml-1 d-flex align-items-center">
                         <i className="fa-regular fa-clock"></i>
                         </div>
                         <div className="text">
                             ميعاد التسليم   التقريبي
                         </div>
                         <div className="ne_font date-columns">
                             <span>
                                 07/05/2024</span>
                             <span className="break-line"> | </span>
                             <span>
                                 11:53PM</span>
                         </div>
                     </div>
                 </div>
       {/*  */}
       {/* <div className={`border border-danger mt-3 ${style.cartdiv}`}> */}
                     {/* <div className={`d-flex justify-content-between text-center align-items-center `}> */}
                         <Link id="" className={`border border-danger mt-3 w-100  btn main-btn width-fluid text-center align-items-center  ${style.cartbtn} `}  to="">
                              أضف إلى السلة
                             <i className={`fa-solid fa-cart-shopping  me-2 `}></i>
                         </Link>    
                     {/* </div> */}
                 {/* </div> */}

     </div>
    </div>

{/* rightside */}

{/* leftside */}

<div  className={`col-md-4  mt-4 `}>
        <div className={style.circlebg} >
     <img src={prescriptionImg} alt='brochureImg' className={`  rounded ${style.brochImg}`}/>
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

    </div>
   </>
  )
}

export default Prescription
