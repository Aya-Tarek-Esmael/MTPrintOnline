import React, { useState } from 'react'
import style from './BlockNote.module.css'
import blocknoteImg from '../../assets/blocknote.png'
import { Link } from 'react-router-dom';

function BlockNote() {
         // State variables to hold selected choices
  const [paperType, setPaperType] = useState('');
  const [printType, setPrintType] = useState('');
  const [paperNum, setPaperNum] = useState('');
  const [cutType, setCutType] = useState('');
  const [close, setClose] = useState('');
  const [closeSide, setCloseSide] = useState('');
  const [size, setSize] = useState('');
  const [cover, setCover] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    //selected choices 
    console.log('Selected Paper Type:', paperType);
    console.log('Selected print Type:', printType);
    console.log('Selected Paper Type:', paperNum);
    console.log('Selected Cut Type:', cutType);
    console.log('Selected Size:', size);
    console.log('Selected close:', close);
    console.log('Selected close side:', closeSide);
    console.log('Selected cover:', cover);
    console.log('Notes:', notes);
    console.log('Uploaded File:', file);
    console.log('File Link:', fileLink);
    console.log('Delivery Date:', deliveryDate);
  };

  return (
    <>
      <div className='container-fluid my-5'>
        <h1 className='mx-4 mb-5'> بلوك نوت - Block Note </h1>
        <form onSubmit={handleSubmit}>
          <div className='d-lg-flex  mx-0 '>
            <div className='col-lg-8 d-lg-flex  px-4'>
              <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>

                {/* Paper Type */}
                <div className='mt-2'>
                  <label className='mb-2 fw-bold'>نوع الورق </label>
                  <div className='d-flex text-center ms-2'>
                    <div
                      className={`border col-4 py-1 hovercolor ${paperType === '70 جرام' ? style.selected : ''}`}
                      onClick={() => setPaperType('70 جرام')}
                    > 70 جرام</div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${paperType === '80 جرام' ? style.selected : ''}`}
                      onClick={() => setPaperType('80 جرام')}
                    >80 جرام</div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${paperType === '100 جرام' ? style.selected : ''}`}
                      onClick={() => setPaperType('100 جرام')}
                    >100 جرام</div>
                  </div>
                </div>

                {/* Print Type */}
                <div className='mt-2'>
                  <label className='mb-2 fw-bold'> شكل الطباعة  </label>
                  <div className='d-flex text-center ms-1'>
                    <div
                      className={`border col-6 p-1 hovercolor ${printType === 'وجة فقط' ? style.selected : ''}`}
                      onClick={() => setPrintType('وجة فقط')}
                    >وجة فقط </div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${printType === 'وجة وضهر' ? style.selected : ''}`}
                      onClick={() => setPrintType('وجة وضهر')}
                    >وجة وضهر</div>
                  </div>
                </div>

                {/* Cut Type */}
                <div className='mt-2'>
                  <label className='mb-2 fw-bold'> القص </label>
                  <div className='d-flex text-center ms-1'>
                    <div
                      className={`border col-6 p-1 hovercolor ${cutType === 'عادى' ? style.selected : ''}`}
                      onClick={() => setCutType('عادى')}
                    >عادى</div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${cutType === 'كيرف' ? style.selected : ''}`}
                      onClick={() => setCutType('كيرف')}
                    >كيرف </div>
                  </div>
                </div>

                {/* Paper Number */}
                <div className='mt-2'>
                  <label className='mb-2 fw-bold'> عدد الورق الداخلى  </label>
                  <div className='d-flex text-center ms-2'>
                    <div
                      className={`border col-4 py-1 hovercolor ${paperNum === '25 ورقة' ? style.selected : ''}`}
                      onClick={() => setPaperNum('25 ورقة')}
                    >  25 ورقة </div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${paperNum === '50 ورقة' ? style.selected : ''}`}
                      onClick={() => setPaperNum('50 ورقة')}
                    >  50 ورقة </div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${paperNum === '100 ورقة' ? style.selected : ''}`}
                      onClick={() => setPaperNum('100 ورقة')}
                    >   100 ورقة  </div>
                  </div>
                </div>

                {/* Close Type */}
                <div className='mt-2'>
                  <label className='mb-2 fw-bold'> التقفيل  </label>
                  <div className='d-flex text-center ms-2'>
                    <div
                      className={`border col-4 py-1 hovercolor ${close === 'غراء = لزق' ? style.selected : ''}`}
                      onClick={() => setClose('غراء = لزق')}
                    > غراء = لزق </div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${close === 'دبوس = دفتر' ? style.selected : ''}`}
                      onClick={() => setClose('دبوس = دفتر')}
                    > دبوس = دفتر </div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${close === 'سلك' ? style.selected : ''}`}
                      onClick={() => setClose('سلك')}
                    >  سلك  </div>
                  </div>
                </div>

                {/* Close Side */}
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

                {/* Cover */}
                <div className='mt-2'>
                  <label className='mb-2 fw-bold'>الغلاف</label>
                  <div className='d-flex text-center ms-2'>
                    <div
                      className={`border col-3 p-1 hovercolor ${cover === 'بدون' ? style.selected : ''}`}
                      onClick={() => setCover('بدون')}
                    > بدون</div>
                    <div
                      className={`border me-1 col-3 p-1 hovercolor ${cover === '150 جرام' ? style.selected : ''}`}
                      onClick={() => setCover('150 جرام')}
                    > 150جرام</div>
                    <div
                      className={`border me-1 col-3 p-1 hovercolor ${cover === '200 جرام' ? style.selected : ''}`}
                      onClick={() => setCover('200 جرام')}
                    >200جرام</div>
                    <div
                      className={`border me-1 col-3 p-1 hovercolor ${cover === '300 جرام لامع كوشيه' ? style.selected : ''}`}
                      onClick={() => setCover('300 جرام لامع كوشيه')}
                    >300جرام لامع كوشيه</div>
                  </div>
                </div>

                {/* Size */}
                <div className=''>
                  <label className='fw-bold'>المقاس</label>
                  <div className=' mt-1 me-0 col-12 text-center '>
                    <div className='col-12 d-flex'>
                      <div
                        className={`border hovercolor col-4 py-1 ${size === 'A4 (30 X 21)' ? style.selected : ''}`}
                        onClick={() => setSize('A4 (30 X 21)')}
                      >A4 (30 X 21)</div>
                      <div
                        className={`border me-1 hovercolor col-4 py-1 ${size === 'A5 (21 X 15)' ? style.selected : ''}`}
                        onClick={() => setSize('A5 (21 X 15)')}
                      >A5 (21 X 15)</div>
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
     <img src={blocknoteImg} alt='brochureImg' className={`rounded ${style.brochImg}`}/>
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

export default BlockNote
