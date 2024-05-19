import React, { useState } from 'react';
import style from './Catalogue.module.css'
import catalogueImg from '../../assets/catalogue.png'
import { Link } from 'react-router-dom';
function Catalogue() {

     // State variables to hold selected choices
     const [paperType, setPaperType] = useState('');
     const [cover, setCover] = useState('');
     const [size, setSize] = useState('');
     const [solfan, setSolfan] = useState('');
     const [quantity, setQuantity] = useState('');
     const [catalogueUpload, setCatalogueUpload] = useState('');
     const [notes, setNotes] = useState('');
     const [file, setFile] = useState('');
     const [fileLink, setFileLink] = useState('');
     const [deliveryDate, setDeliveryDate] = useState('');
 
     // Function to handle form submission
     const handleSubmit = (e) => {
         e.preventDefault();
         // Log selected choices
         console.log('Selected Paper Type:', paperType);
         console.log('Selected Cover:', cover);
         console.log('Selected Size:', size);
         console.log('Selected Solfan:', solfan);
         console.log('Catalogue Upload:', catalogueUpload);
         console.log('Selected Quantity:', quantity);
         console.log('Notes:', notes);
         console.log('Uploaded File:', file);
         console.log('File Link:', fileLink);
         console.log('Delivery Date:', deliveryDate);
     };
  return (
    <>
    
    <div className='container-fluid my-5'  style={{'overflow':'hidden'}}>
     <h1 className='mx-4 mb-5'> كتالوج - CATALOGUE </h1>
     <form onSubmit={handleSubmit}>
     <div className='d-lg-flex  mx-0 '>
     <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
       {/* item */}
       <div className=''>
       <label className='fw-bold'>نوع الورق الداخلي </label>
       <div className='mt-1 me-0 col-12 text-center'>
                                    <div className='col-12 d-flex'>
                                        <div className={`border hovercolor col-4 py-1 ${paperType === 'كوشيه 115جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 115جرام')}>كوشيه 115جرام</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === 'كوشيه 200جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 200جرام')}>كوشيه 200جرام</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === 'كوشيه 250جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 250جرام')}>كوشيه 250جرام</div>
                                    </div>
                                    <div className='col-12 d-flex mt-3'>
                                        <div className={`border me-0 hovercolor col-4 py-1 ${paperType === 'كوشيه 300جرام' ? style.selected : ''}`} onClick={() => setPaperType('كوشيه 300جرام')}>كوشيه 300جرام</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === '80جرام عادي' ? style.selected : ''}`} onClick={() => setPaperType('80جرام عادي')}>80جرام عادي</div>
                                        <div className={`border me-1 hovercolor col-4 py-1 ${paperType === '100جرام عادي' ? style.selected : ''}`} onClick={() => setPaperType('100جرام عادي')}>100جرام عادي</div>
                                    </div>
                                </div>
                            </div>
      
           {/* item */}
           <div className='mt-3'>
                                <label className='mb-2 fw-bold'>الغلاف</label>
                                <div className='d-flex text-center ms-1'>
                                    <div className={`border col-4 p-1 hovercolor ${cover === 'نفس نوع الورق' ? style.selected : ''}`} onClick={() => setCover('نفس نوع الورق')}>نفس نوع الورق</div>
                                    <div className={`border me-1 col-4 p-1 hovercolor ${cover === '300جرام' ? style.selected : ''}`} onClick={() => setCover('300جرام')}>300جرام</div>
                                    <div className={`border me-1 col-4 p-1 hovercolor ${cover === '350جرام' ? style.selected : ''}`} onClick={() => setCover('350جرام')}>350جرام</div>
                                </div>
                            </div>

         {/* item */}
         <div className='mt-3'>
                                <label className='mb-2 fw-bold'>مقاس المجلة مقفولة</label>
                                <div className='d-flex text-center ms-1'>
                                    <div className={`border col-6 p-1 hovercolor ${size === 'A3 (19 X 21)' ? style.selected : ''}`} onClick={() => setSize('A3 (19 X 21)')}>A3 (19 X 21)</div>
                                    <div className={`border me-1 col-6 p-1 hovercolor ${size === 'A4 (21 X 30)' ? style.selected : ''}`} onClick={() => setSize('A4 (21 X 30)')}>A4 (21 X 30)</div>
                                </div>
                            </div>
     {/* item */}
     <div className='mt-2'>
                                <label className='mb-2 fw-bold'>السلوفان</label>
                                <div className='d-flex text-center ms-2'>
                                    <div className={`border col-4 py-1 hovercolor ${solfan === 'بدون' ? style.selected : ''}`} onClick={() => setSolfan('بدون')}>بدون</div>
                                    <div className={`border me-1 col-4 py-1 hovercolor ${solfan === 'مط' ? style.selected : ''}`} onClick={() => setSolfan('مط')}>مط</div>
                                    <div className={`border me-1 col-4 py-1 hovercolor ${solfan === 'لامع' ? style.selected : ''}`} onClick={() => setSolfan('لامع')}>لامع</div>
                                </div>
                            </div>
          {/* item */}
          <div className='d-flex border justify-content-between p-2  mt-3'>
          <label className=''>عدد النسخ </label>
          <input type='number' placeholder='0' className='bg-light p-1 text-center border-0' value={quantity} onChange={(e) => setQuantity(e.target.value)} />
         </div>
              {/* item */}
                     <div className="d-flex border py-4 mt-3 justify-content-center text-center">
                                <div id="dZUpload" className={`${style.uploadbtn}`}>
                                    <label htmlFor='catalogueUpload' className={`text-dark ${style.uploadbtn}`}>
                                        <i className="fa-solid fa-upload ms-2"></i>
                                        رفع تصميم الكتالوج  
                                    </label>
                                    <input
                                        type='file'
                                        id='coverUpload'
                                        style={{ display: 'none' }}
                                        onChange={(e) => setCatalogueUpload(e.target.files[0])}
                                    />
                                </div>
                            </div>


     {/* item */}
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
     <img src={catalogueImg} alt='brochureImg' className={` rounded ${style.brochImg}`}/>
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

export default Catalogue
