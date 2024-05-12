import React, { useState } from 'react'
import style from './Folder.module.css'
import letterheadImg from '../../assets/letterhead.png'
import { Link } from 'react-router-dom';
function Folder() {
    
      // State variables to hold selected choices
  const [paperType, setPaperType] = useState('');
  const [cutType, setCutType] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //selected choices 
    console.log('Selected Paper Type:', paperType);
    console.log('Selected Cut Type:', cutType);
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
     <h1 className='mx-4 mb-5'> فولدر- Folder </h1>
     <form onSubmit={handleSubmit}>
    <div className='d-lg-flex  mx-0 '>
    <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-6 ms-1 col-sm-12 px-sm-1'>
              {/* item */}
              <div className=''>
       <label className='mb-2 fw-bold'>نوع الورق </label>
       <div className='d-flex text-center ms-2'>
       <div
                      className={`border me-1 col-3 py-1 hovercolor ${
                        paperType === 'كوشية 200 ' ? style.selected : ''
                      }`}
                      onClick={() => setPaperType('كوشية 200 ')}>
                     كوشية 200 
                    </div>
                    <div
                      className={`border me-1 col-3 py-1 hovercolor ${
                        paperType === 'كوشية 250 ' ? style.selected : ''
                      }`}
                      onClick={() => setPaperType('كوشية 250 ')}>
                     كوشية 350 
                    </div>
                    <div
                      className={`border me-1 col-3 py-1 hovercolor ${
                        paperType === 'كوشية 350 ' ? style.selected : ''
                      }`}
                      onClick={() => setPaperType('كوشية 300 ')}>
                     كوشية 300 
                    </div>
                    <div
                      className={`border me-1 col-3 py-1 hovercolor ${
                        paperType === 'كوشية 350 ' ? style.selected : ''
                      }`}
                      onClick={() => setPaperType('كوشية 350 ')}>
                     كوشية 350 
                    </div>
       </div>
       </div>

  {/* item */}
  <div className='mt-4'>
       <label className='mb-2 fw-bold'> القص </label>
       <div className='d-flex text-center ms-1'>
       <div
                      className={`border col-6 p-1 hovercolor ${
                        cutType === 'عادى' ? style.selected : ''
                      }`}
                      onClick={() => setCutType('عادى')}>
                      عادى
                    </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${
                        cutType === 'كيرف' ? style.selected : ''
                      }`}
                      onClick={() => setCutType('كيرف')}>
                      كيرف
                    </div>
       </div>
       </div>
       {/* item */}
       <div className='mt-4'>
       <label className='fw-bold'>المقاس</label>
       <div className='d-flex mt-1 me-0 col-12 text-center '>
       <div
      className={`border hovercolor col-12 p-1 ${
        size === 'A3 (42 x 30)' ? style.selected : ''
      }`}
      onClick={() => setSize('A3 (42 x 30)')}>
      A3 (42 x 30)
    </div>
       <div
      className={`border hovercolor col-12 p-1 ${
        size === 'A4 (21 x 30)' ? style.selected : ''
      }`}
      onClick={() => setSize('A4 (21 x 30)')}>
      A4 (21 x 30)
    </div>
    <div
      className={`border hovercolor col-12 p-1 ${
        size === 'A5 (21 x 15)' ? style.selected : ''
      }`}
      onClick={() => setSize('A5 (21 x 15)')}>
      A5 (21 x 15)
    </div>
   
    <div
      className={`border hovercolor col-12 p-1 ${
        size === 'B4 (34 x 24)' ? style.selected : ''
      }`}
      onClick={() => setSize('B4 (34 x 24)')}>
      B4 (34 x 24)
    </div>
    <div
      className={`border hovercolor col-12 p-1 ${
        size === 'B5 (24 x 17)' ? style.selected : ''
      }`}
      onClick={() => setSize('B5 (24 x 17)')}>
      B5 (24 x 17)
    </div>
   
       </div>
       </div>
       
          {/* item */}
          <div className='d-flex border justify-content-between p-2  mt-4'>
          <label className=''>الكمية</label>
          <input
                    type='text'
                    placeholder='0'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='bg-light p-1 text-center border-0'
                  />
         </div>
              
     {/* item */}
     </div>

     {/* ..... */}
     <div className='left col-md-5 col-sm-12 me-md-4 '>
     
                    <div className='mb-4'></div>
                           {/* item */}
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
<div  className={`col-md-4  mt-4 mb-5`}>
     <div className={style.circlebg} >
     <img src={letterheadImg} alt='brochureImg' className={` rounded ${style.brochImg}`}/>
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

export default Folder
