import React, { useState } from 'react'
import style from './Receipts.module.css'
import receiptsImg from '../../assets/receipts.jpg'
import { Link } from 'react-router-dom';
function Receipts() {
    const [print, setPrint] = useState('');
    const [printColor, setPrintColor] = useState('');
    const [printType, setPrintType] = useState('');
    const [size, setSize] = useState('');
    const [receipts, setReceiptsNum] = useState('');
    const [paperStart, setPaperStart] = useState('');
    const [paperNum, setPaperNum] = useState('');
    const [notes, setNotes] = useState('');
    const [file, setFile] = useState('');
    const [fileLink, setFileLink] = useState('');
    const [deliveryDate, setDeliveryDate] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();
        //selected choices 
        console.log('Selected Size:', print);
        console.log('Selected Size:', printType);
        console.log('Selected Size:', size);
        console.log('Selected Size:', receipts);
        console.log('Selected PaperNum Type:', paperNum);
        console.log('Selected PaperNum Type:', paperStart);
        console.log('Notes:', notes);
        console.log('Uploaded File:', file);
        console.log('File Link:', fileLink);
        console.log('Delivery Date:', deliveryDate);
      };
  return (
    <>
    
    <div className='container-fluid my-5'>
     <h1 className='mx-4 mb-5'>  ايصالات - Receipts</h1>
     <form onSubmit={handleSubmit}>
     <div className='d-lg-flex  mx-0 '>
    <div className='col-lg-8 d-lg-flex  px-4'>
     <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
         {/* item */}
          <div className=''>
          <label className='fw-bold'>ورق مكربن </label>
             <div className='d-flex mt-1 text-center '>
             <div
                 className={`border hovercolor col-12 p-1 ${
                    printType === 'ورق مكربن ' ? style.selected : ''
              }`}
             onClick={() => setPrintType('ورق مكربن ')}>
           ورق مكربن 
            </div>
            </div>
            </div>
       
            {/* item */}
             <div className='mt-3'>
             <label className='mb-2 fw-bold'>شكل الطباعة</label>
             <div className='d-flex  text-center '>
             <div
                 className={`border hovercolor col-12 p-1 ${
                 print === 'وجه واحد' ? style.selected : ''
              }`}
             onClick={() => setPrint('وجه واحد')}>
              وجه واحد
            </div>
            </div>
            </div>
       
         {/* item */}
         <div className='mt-3'>
       <label className='mb-2 fw-bold'>المقاس </label>
       <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
       <div
                      className={`border me-1 col-4 py-1 hovercolor ${
                        size === 'A4(10 X 20) ثلث' ? style.selected : ''
                      }`}
                      onClick={() => setSize('A4(10 X 20) ثلث')}>
                     A4(10 X 20) ثلث
                    </div>
       <div
                      className={`border col-4 me-1 py-1 hovercolor ${
                        size === 'A5 (14.8 X 21)' ? style.selected : ''
                      }`}
                      onClick={() => setSize('A5 (14.8 X 21)')}>
                     A5 (14.8 X 21)
                    </div>
                  
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${
                        size === 'A6 (14.8 X 10.5)' ? style.selected : ''
                      }`}
                      onClick={() => setSize('A6 (14.8 X 10.5)')}>
                     A6 (14.8 X 10.5)
                    </div>
       </div>
       </div>

        {/* item */}
        <div className='mt-3'>
             <label className='mb-2 fw-bold'>الوان الطباعة</label>
             <div className='d-flex  text-center '>
             <div
                 className={`border hovercolor col-12 p-1 ${
                 printColor === 'الوان انك جيت (جودة متوسطة)' ? style.selected : ''
              }`}
             onClick={() => setPrintColor('الوان انك جيت (جودة متوسطة)')}>
              الوان انك جيت (جودة متوسطة)
            </div>
            </div>
            </div>
         {/* item */}
         <div className='mt-3'>
         <label className='mb-2 fw-bold'>عدد الايصالات في الدفتر</label>
             <div className='d-flex  text-center '>
             <div
                 className={`border hovercolor col-12 p-1 ${
                 receipts === '50' ? style.selected : ''
              }`}
             onClick={() => setReceiptsNum('50')}>
             50
            </div>
            </div>
            </div>
        {/* item */}
        <div className='mt-3'>
        <label className='mb-2 fw-bold'>عدد الصور</label>
       <div className={`d-flex text-center ms-1 ${style.measurewidth}`}>
       <div
                      className={`border me-1 col-4 py-1 hovercolor ${
                        size === 'Original And One Copy' ? style.selected : ''
                      }`}
                      onClick={() => setSize('Original And One Copy')}>
                    Original And One Copy
                    </div>
       <div
                      className={`border col-4 me-1 py-1 hovercolor ${
                        size === 'Original And 2 Copies' ? style.selected : ''
                      }`}
                      onClick={() => setSize('Original And 2 Copies')}>
                    Original And 2 Copies
                    </div>
                  
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${
                        size === 'Original And 3 Copies' ? style.selected : ''
                      }`}
                      onClick={() => setSize('Original And 3 Copies')}>
                     Original And 3 Copies
                    </div>
       </div>
       </div>
        {/* item */}
        <div className='d-flex border   justify-content-between p-2 mt-3 '>
          <label className=''>بداية السريال</label>
          <input
                                            type='text'
                                            placeholder='0'
                                            value={paperStart}
                                            onChange={(e) => setPaperStart(e.target.value)}
                                            className='bg-light p-1 text-center border-0'
                                        />
         </div>
          {/* item */}
          <div className='d-flex border justify-content-between p-2  mt-3'>
          <label className=''>عدد الدفاتر</label>
          <input
                                            type='text'
                                            placeholder='0'
                                            value={paperNum}
                                            onChange={(e) => setPaperNum(e.target.value)}
                                            className='bg-light p-1 text-center border-0'
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

    <div  className={`col-md-12 col-lg-4 col-sm-12  ${style.circlebg} mt-4 `}>
     <img src={receiptsImg} alt='brochureImg' className={` mx-auto rounded ${style.brochImg}`}/>

     
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

export default Receipts
