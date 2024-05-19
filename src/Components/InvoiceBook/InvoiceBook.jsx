import React, { useState } from 'react'
import style from './InvoiceBook.module.css'
import InvoiceBooksImg from '../../assets/catalogue.png'
import { Link } from 'react-router-dom';
function InvoiceBook() {
 
 // State variables to hold selected choices


 const [size, setSize] = useState('');
 const [cover, setCover] = useState('');
 const [quantity, setQuantity] = useState(20);
 const [paperNum, setPaperNum] = useState('');
 const [paperStart, setPaperStart] = useState('');
 const [notes, setNotes] = useState('');
 const [file, setFile] = useState('');
 const [fileLink, setFileLink] = useState('');
 const [deliveryDate, setDeliveryDate] = useState('');

   // Function to handle form submission
   const handleSubmit = (e) => {
       e.preventDefault();
       //selected choices 
      
       console.log('Selected PaperNum Type:', paperNum);
       console.log('Selected Cover Type:', cover);
       console.log('Selected Size:', size);
       console.log('Selected Quantity:', quantity);
       console.log('Notes:', notes);
       console.log('Uploaded File:', file);
       console.log('File Link:', fileLink);
       console.log('Delivery Date:', deliveryDate);
     };

         // Function to handle incrementing quantity
    const incrementQuantity = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
  };

 return (
<>
   <div className='container-fluid my-5' style={{'overflow':'hidden'}}>
    <h1 className='mx-4 mb-5'>  دفتر فواتير - Invoice Book</h1>
    <form onSubmit={handleSubmit}>
    <div className='d-lg-flex  mx-0 '>
    <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
   
                    {/* item */}
                    <div className=''>
                    <label className='mb-2 fw-bold'> المقاس</label>
                    <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
                    <div
                     className={`border  col-4 py-1 hovercolor ${
                       size === 'A4(30 X 21)' ? style.selected : ''
                     }`}
                     onClick={() => setSize('A4(30 X 21)')}>
                    A4(30 X 21)
                   </div>
                      <div
                     className={`border me-1 col-4 py-1 hovercolor ${
                       size === 'A5 (21 X 15)'  ? style.selected : ''
                     }`}
                     onClick={() => setSize('A5 (21 X 15)')}>
                    A5 (21 X 15)
                   </div>
                   <div
                     className={`border me-1 col-4 py-1 hovercolor ${
                       size === 'A6 (15 X 10)' ? style.selected : ''
                     }`}
                     onClick={() => setSize('A6 (15 X 10)')}>
                  A6 (15 X 10)
                   </div>
                
      </div>
      </div>
        {/* item */}
        <div className=''>
                    <label className='mb-2 fw-bold'>النوع</label>
                    <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
                      <div
                     className={`border col-4 py-1 hovercolor ${
                       cover === 'اصل وصورة'  ? style.selected : ''
                     }`}
                     onClick={() => setCover('اصل وصورة')}>
                    اصل وصورة
                   </div>
                   <div
                     className={`border me-1 col-4 py-1 hovercolor ${
                       cover === 'اصل وصورتين '? style.selected : ''
                     }`}
                     onClick={() => setCover('اصل وصورتين')}>
                اصل وصورتين
                   </div>
                   <div
                     className={`border me-1 col-4 py-1 hovercolor ${
                       cover === 'اصل و 3 صور '? style.selected : ''
                     }`}
                     onClick={() => setCover('اصل و 3 صور ')}>
               اصل و 3 صور 
                   </div>
      </div>
      </div>
 {/* item */}
 <div className='mt-4'>
                                    <label className='mb-2 fw-bold'> الترقيم </label>
                                    <div className='d-flex text-center ms-1'>
                                        <div
                                            className={`border col-6 p-1 hovercolor ${
                                              paperNum === 'مرقم' ? style.selected : ''
                                            }`}
                                            onClick={() => setPaperNum('مرقم')}
                                        >
                                            مرقم
                                        </div>
                                        <div
                                            className={`border me-1 col-6 p-1 hovercolor ${
                                              paperNum === 'غير مرقم ' ? style.selected : ''
                                            }`}
                                            onClick={() => setPaperNum('غير مرقم ')}
                                        >
                                            غير مرقم
                                        </div>
                                    </div>
                                </div>
                                
                                {/* Conditional Rendering for 'بداية التسلسل' */}
                                {paperNum === 'مرقم' && (
                                    <div className='d-flex border justify-content-between p-2 mt-4'>
                                        <label className=''> بداية التسلسل</label>
                                        <input
                                            type='text'
                                            placeholder='0'
                                            value={paperStart}
                                            onChange={(e) => setPaperStart(e.target.value)}
                                            className='bg-light p-1 text-center border-0'
                                        />
                                    </div>
                                )}

             
        <div className='d-flex border justify-content-between p-2 mt-4 align-items-center'>
                                    <label className=''>الكمية</label>
                                    <input
                                        type='number'
                                        min='20'
                                        value={quantity}
                                        onChange={(e) => setQuantity(Number(e.target.value))}
                                        className='bg-light p-1 text-center border-0'
                                    />
                                    {/* <button
                                        type='button'
                                        onClick={incrementQuantity}
                                        className='btn btn-secondary'
                                    >
                                        +
                                    </button> */}
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
     <img src={InvoiceBooksImg} alt='brochureImg' className={`rounded ${style.brochImg}`}/>
     </div>
     
     <div className="d-flex justify-content-center mt-3 ">
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

export default InvoiceBook
