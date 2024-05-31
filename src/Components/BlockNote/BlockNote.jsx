import React, { useEffect, useState } from 'react'
import axios from 'axios'
import style from './BlockNote.module.css'
import blocknoteImg from '../../assets/blocknote.png'
import { Link, useParams } from 'react-router-dom';
import LoadingScrean from '../../Components/LoodingScreen/LoodingScreen';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../Redux/slices/CartSlice';
function BlockNote() {
         // State variables to hold selected choices
  const {id} =useParams();
  const dispatch = useDispatch();
  const [proDetails, setProDetails] = useState(null);
  const [paperType, setPaperType] = useState('');
  const [paperNum, setPaperNum] = useState(0);
  const [intPaperType, setIntPaperType] = useState('');
  const [cutType, setCutType] = useState('');
  const [coverType, setCoverType] = useState('');
  const [solfan, setSolfan] = useState('');
  const [close, setClose] = useState('');
  const [closeSide, setCloseSide] = useState('');
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [cover, setCover] = useState('');
  const [notes, setNotes] = useState('');
  const [file, setFile] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [sizesAndSquares, setSizesAndSquares] = useState({});
  const [solfanPrice, setSolfanPrice] = useState({});
  const [printingType, setPrintingType] = useState({});
  const [internalPaperPrice, setInternalPaperPrice] = useState({});
  const [coverTypePrice, setCoverTypePrice] = useState({});
  // معادلات السعر
  // const [sizesAndSquares, setSizesAndSquares] = useState({
  //   "A4 (30 X 21)": 2,
  //   "A5 (21 X 15)": 4,
  //   "A6 (15 X 10)": 9,
  //   "B4 (34 X 24)": 2,
  //   "B5 (24 X 17)": 4,
  //   "B6 (17 X 12)": 8
  // });

  // const [solfanPrice, setSolfanPrice] = useState({
  //   "بدون": 0,
  //   "مط": 1,
  //   "لامع": 1,
  // });

  // const [coverTypePrice, setCoverTypePrice] = useState({
  //   "200": 2,
  //   "250": 2.5,
  //   "300": 3,
  //   "350": 4,
  //   "هارد كافر": 1
  // });

  // const [internalPaperPrice, setInternalPaperPrice] = useState({
  //   "60": .7,
  //   "70": .8,
  //   "80": 1,
  //   "100": 1.20,
  //   "120": 1.50
  // });
     
  // const [printingType, setPrintingType] = useState({
  //   'سادة غير مطبوع' : 0,
  //   'مطبوع لون واحد': 0.50,
  //   'مطبوع الوان': 1,
  // });
  const [price, setPrice] = useState(0.00);

  // Constants for pricing
  const WIRE_BINDING_COST_PER_CM = 0.25; // Wire binding cost per cm


  console.log(id);
  async function getProDetails() {
    let { data } = await axios.get(`http://localhost:8000/api/products/24/details`);
    console.log(data);
    setProDetails(data);

     // Initialize sizesAndPrices after fetching data
      setSizesAndSquares({
        [data.sizes[0].name]: data.sizes[0].price,
        [data.sizes[1].name]: data.sizes[1].price,
        [data.sizes[2].name]: data.sizes[2].price,
        [data.sizes[3].name]: data.sizes[3].price,
        [data.sizes[4].name]: data.sizes[4].price,
        [data.sizes[5].name]: data.sizes[5].price
  
     });

     setSolfanPrice({
      [data.type[0].name]: data.type[0].price,
      [data.type[1].name]: data.type[1].price,
      [data.type[2].name]: data.type[2].price
   });
   setPrintingType({
    [data.shape_in_paper[0].name]: data.shape_in_paper[0].price,
    [data.shape_in_paper[1].name]: data.shape_in_paper[1].price,
    [data.shape_in_paper[2].name]: data.shape_in_paper[2].price
 });

 setInternalPaperPrice({
  [data.type_in_paper[0].name]: data.type_in_paper[0].price,
  [data.type_in_paper[1].name]: data.type_in_paper[1].price,
  [data.type_in_paper[2].name]: data.type_in_paper[2].price,
  [data.type_in_paper[3].name]: data.type_in_paper[3].price,
  [data.type_in_paper[4].name]: data.type_in_paper[4].price

});
setCoverTypePrice({
  [data.typ_paper_cover[0].name]: data.typ_paper_cover[0].price,
  [data.typ_paper_cover[1].name]: data.typ_paper_cover[1].price,
  [data.typ_paper_cover[2].name]: data.typ_paper_cover[2].price,
  [data.typ_paper_cover[3].name]: data.typ_paper_cover[3].price

});

  }


  useEffect(() => {
      
    getProDetails()

}, [])
  // Function to calculate the total price
  const calculateTotalPrice = () => {
    //  cover cost
    const sizeFactor = parseInt(sizesAndSquares[size]);
    const numOfCovers = parseFloat((quantity / sizeFactor) * 2); // عدد الأغلفة الأمامية والخلفية
      // console.log(numOfCovers)
    const covertypeCost = parseFloat(numOfCovers * coverTypePrice[cover]);
    // console.log(covertypeCost)
    const solfanCost = parseFloat(numOfCovers * solfanPrice[solfan]);
  // console.log(solfanCost)
    let printcolorCost;
    if (coverType === 'غلاف وش ضهر') {
      printcolorCost = numOfCovers * 1;
    } else {
      printcolorCost = (numOfCovers / 2) * 1;
    }

    const coverCost = parseFloat(covertypeCost + solfanCost + printcolorCost);
console.log(coverCost)
// cover cost end
let bindingLength;
if (size === 'A4 (30 X 21)') {
  bindingLength = closeSide === 'فوق' ? 21 : 30;
} else if (size === 'A5 (21 X 15)') {
  bindingLength = closeSide === 'فوق' ? 15 : 21;
} else if (size === 'A6 (15 X 10)') {
  bindingLength = closeSide === 'فوق' ? 10 : 15;
} else if (size === 'B4 (34 X 24)') {
  bindingLength = closeSide === 'فوق' ? 24 : 34;
} else if (size === 'B5 (24 X 17)') {
  bindingLength = closeSide === 'فوق' ? 17 : 24;
} else if (size === 'B6 (17 X 12)') {
  bindingLength = closeSide === 'فوق' ? 12 : 17;
}

// binding Cost 
const bindingCost = parseFloat(quantity * bindingLength * WIRE_BINDING_COST_PER_CM);
console.log(bindingCost)
// binding Cost  end
     

// papers cost

 const internalPaperSheets = quantity * parseInt(paperNum);
//  console.log(internalPaperSheets)
 const internalPaperCost = (internalPaperSheets / sizeFactor) * internalPaperPrice[intPaperType];
 console.log(internalPaperCost)
 console.log(printingType[paperType] )
 console.log(internalPaperSheets / sizeFactor)
 const printingCost = (internalPaperSheets / sizeFactor) * printingType[paperType] ;
 console.log(printingCost)
// papers cost end
 const totalCost = parseFloat(coverCost + internalPaperCost + printingCost + bindingCost);
      console.log(price);
    setPrice(totalCost);
      console.log(price);
  };


  // Function to handle form submission
 
  const handleSubmit = (e) => {
    e.preventDefault();
    const itemData = {
      id:proDetails.id,
      name:proDetails.name,
      paperType,
      paperNum,
      intPaperType,
      cutType,
      coverType,
      solfan,
      close,
      closeSide,
      size,
      quantity,
      cover,
      notes,
      file,
      fileLink,
      deliveryDate,
      price
    };
    console.log(itemData);
     dispatch(addToCart(itemData));
  };


  // Update total price whenever relevant state variables change
  useEffect(() => {
    // calculateTotalPrice();
    setPrice();
  }, [paperType, paperNum, intPaperType, cutType, coverType, solfan, close, closeSide, size, quantity, cover]);



  return (
    <>
       {proDetails?<div className='container-fluid my-5'>
       <h1 className='mx-4 mb-5'>{proDetails.name}</h1>
        <form onSubmit={handleSubmit}>
          <div className='d-lg-flex  mx-0 '>
            <div className='col-lg-8 d-lg-flex  px-4'>
              <div className='col-md-12 col-xs-12 ms-1 col-sm-12 col-lg-6 px-sm-1'>
             {/* item */}
             <div className='d-flex border justify-content-between p-2  mt-4'>
          <label className=''>الكمية</label>
          <input
                    type='number'
                    placeholder='0'
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    className='bg-light p-1 text-center border-0'
                  />
         </div>
              
                {/* Size */}
                <div className='mt-3'>
                  <label className='fw-bold'>المقاس</label>
                  <div className={`mt-1 me-0 col-12 text-center`}>
                  <div className='col-12 d-flex flex-wrap'>
                  <div
              className={`border hovercolor me-0  col-4 py-1 ${style.marg} ${size === proDetails.sizes[0].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[0].name)}
            >
              {proDetails.sizes[0].name}
            </div>
            <div
              className={`border me-1 hovercolor col-4 py-1 ${style.marg} ${size === proDetails.sizes[1].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[1].name)}
            >
              {proDetails.sizes[1].name}
            </div>
            <div
              className={`border me-1 hovercolor col-4 py-1 ${style.marg} ${size === proDetails.sizes[2].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[2].name)}
            >
              {proDetails.sizes[2].name}
            </div>
            </div>
            <div className='col-12 d-flex mt-2'>
            <div
              className={`border hovercolor me-0  col-4 py-1 ${style.marg} ${size === proDetails.sizes[3].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[3].name)}
            >
              {proDetails.sizes[3].name}
            </div>
            <div
              className={`border me-1 hovercolor col-4 py-1 ${style.marg} ${size === proDetails.sizes[4].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[4].name)}
            >
              {proDetails.sizes[4].name}
            </div>
            <div
              className={`border me-1 hovercolor col-4 py-1 ${style.marg} ${size === proDetails.sizes[5].name ? style.selected : ''}`}
              onClick={() => setSize(proDetails.sizes[5].name)}
            >
              {proDetails.sizes[5].name}
            </div>
            </div>
       
                      {/* <div
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
                      >B6 (17 X 12)</div> */}
                    
                  </div>
                </div>
               
     {/* Cover Type */}
     <div className='mt-3'>
                  <label className='mb-2 fw-bold'> الغلاف </label>
                  <div className='d-flex text-center ms-1'>
                  {proDetails.cover.map((cover, index) => (
            <div
              key={index}
              className={`border  hovercolor me-1 col-6 py-1 ${coverType === cover.name ? style.selected : ''}`}
              onClick={() => setCoverType(cover.name)}
            >
              {cover.name}
            </div>
          ))}
                    {/* <div
                      className={`border col-6 p-1 hovercolor ${coverType === 'غلاف وش وضهر' ? style.selected : ''}`}
                      onClick={() => setCoverType('غلاف وش وضهر')}
                    >غلاف وش وضهر</div>
                    <div
                      className={`border me-2 col-6 p-1 hovercolor ${cutType === 'غلاف وش وضهر ابيض' ? style.selected : ''}`}
                      onClick={() => setCoverType('غلاف وش وضهر ابيض')}
                    >غلاف وش وضهر ابيض </div>*/}
                  </div> 
                </div>
                {/* Cover */}
                <div className='mt-3'>
                  <label className='mb-2 fw-bold'> نوع ورق الغلاف</label>
                  <div className={`col-12 text-center ${style.divwidth}`}>
                  <div className='col-12 d-flex'>
                  {proDetails.typ_paper_cover.map((covertype, index) => (
            <div
              key={index}
              className={`border  hovercolor me-1 col-3 py-1 ${cover === covertype.name ? style.selected : ''}`}
              onClick={() =>setCover(covertype.name)}
            >
              {covertype.name}
            </div>
          ))}
                    {/* <div
                      className={`border col-4 p-1 hovercolor ${cover === '200' ? style.selected : ''}`}
                      onClick={() => setCover('200')}
                    > 200 كوشيه</div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${cover === '250' ? style.selected : ''}`}
                      onClick={() => setCover('250')}
                    > 250 كوشيه</div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${cover === '300' ? style.selected : ''}`}
                      onClick={() => setCover('300')}
                    >300 كوشيه</div>
                    </div>
                     <div className='col-12 d-flex mt-2'>
                    <div
                      className={`border  col-6 p-1 hovercolor ${cover === '350' ? style.selected : ''}`}
                      onClick={() => setCover('350')}
                    >350 كوشيه</div>
                     <div
                      className={`border me-2 col-6 p-1 hovercolor ${cover === 'هارد كافر' ? style.selected : ''}`}
                      onClick={() => setCover('هارد كافر')}
                    >هارد كافر</div> */}
                    </div>
                  </div>
                </div>
  {/* item */}
  <div className='mt-3'>
                                <label className='mb-2 fw-bold'>سلوفان الغلاف</label>
                                <div className='d-flex text-center ms-2'>
                                {proDetails.type.map((solfantype, index) => (
            <div
              key={index}
              className={`border me-1 col-4 py-1 hovercolor ${solfan === solfantype.name ? style.selected : ''}`}
              onClick={() =>setSolfan(solfantype.name)}
            >
              {solfantype.name}
            </div>
          ))}
                                    {/* <div className={`border col-4 py-1 hovercolor ${solfan === 'بدون' ? style.selected : ''}`} onClick={() => setSolfan('بدون')}>بدون</div>
                                    <div className={`border me-1 col-4 py-1 hovercolor ${solfan === 'مط' ? style.selected : ''}`} onClick={() => setSolfan('مط')}>مط</div>
                                    <div className={`border me-1 col-4 py-1 hovercolor ${solfan === 'لامع' ? style.selected : ''}`} onClick={() => setSolfan('لامع')}>لامع</div>*/}
                                </div> 
                            </div>

                 {/* Cut Type */}
                 <div className='mt-3'>
                  <label className='mb-2 fw-bold'> القص </label>
                  <div className='d-flex text-center ms-1'>
                  {proDetails.cut.map((selectedcut, index) => (
            <div
              key={index}
              className={`border  hovercolor me-1 col-6 py-1 ${cutType === selectedcut.name ? style.selected : ''}`}
              onClick={() =>setCutType(selectedcut.name)}
            >
              {selectedcut.name}
            </div>
          ))}
                    {/* <div
                      className={`border col-6 p-1 hovercolor ${cutType === 'عادى' ? style.selected : ''}`}
                      onClick={() => setCutType('عادى')}
                    >عادى</div>
                    <div
                      className={`border me-1 col-6 p-1 hovercolor ${cutType === 'كيرف' ? style.selected : ''}`}
                      onClick={() => setCutType('كيرف')}
                    >كيرف </div> */}
                  </div>
                </div>
             
                {/* Paper Number */}
                <div className='mt-3'>
                  <label className='mb-2 fw-bold'> عدد الورق الداخلى  </label>
                  <div className='d-flex text-center ms-2'>
                  {proDetails.num_in_paper.map((numpap, index) => (
            <div
              key={index}
              className={`border  hovercolor me-1 col-6 py-1 ${paperNum === numpap.name ? style.selected : ''}`}
              onClick={() =>setPaperNum(numpap.name)}
            >
              {numpap.name}
            </div>
          ))}
                    {/* <div
                      className={`border me-1 col-6 py-1 hovercolor ${paperNum === 50 ? style.selected : 0}`}
                      onClick={() => setPaperNum(50)}
                    >  50 ورقة </div>
                    <div
                      className={`border me-1 col-6 py-1 hovercolor ${paperNum === 100 ? style.selected : 0}`}
                      onClick={() => setPaperNum(100)}
                    >   100 ورقة  </div> */}
                  </div>
                </div>
       {/* Cover */}
       <div className='mt-3'>
                  <label className='mb-2 fw-bold'> نوع الورق الداخلي</label>
                  <div className={`col-12 text-center `}>
                  <div className={`col-12 d-flex ${style.measurewidth}`}>
                  <div
            className={`border  col-4 p-1 hovercolor ${intPaperType === proDetails.type_in_paper[0].name ? style.selected : ''}`}
            onClick={() => setIntPaperType(proDetails.type_in_paper[0].name)}
          >
            {proDetails.type_in_paper[0].name}
          </div>
          <div
            className={`border me-1 col-4 p-1 hovercolor ${intPaperType === proDetails.type_in_paper[1].name ? style.selected : ''}`}
            onClick={() => setIntPaperType(proDetails.type_in_paper[1].name)}
          >
            {proDetails.type_in_paper[1].name}
          </div>
          <div
            className={`border me-1 col-4 p-1 hovercolor ${intPaperType === proDetails.type_in_paper[2].name ? style.selected : ''}`}
            onClick={() => setIntPaperType(proDetails.type_in_paper[2].name)}
          >
            {proDetails.type_in_paper[2].name}
          </div>
          </div>
          <div className='col-12 d-flex mt-1'>
          <div
            className={`border  col-6 p-1 hovercolor ${intPaperType === proDetails.type_in_paper[3].name ? style.selected : ''}`}
            onClick={() => setIntPaperType(proDetails.type_in_paper[3].name)}
          >
            {proDetails.type_in_paper[3].name}
          </div>
          <div
            className={`border me-1 col-6 p-1 hovercolor ${intPaperType === proDetails.type_in_paper[4].name ? style.selected : ''}`}
            onClick={() => setIntPaperType(proDetails.type_in_paper[4].name)}
          >
            {proDetails.type_in_paper[4].name}
          </div>
          </div>

                    {/* <div
                      className={`border col-4 p-1 hovercolor ${intPaperType === '60' ? style.selected : ''}`}
                      onClick={() => setIntPaperType('60')}
                    > 60 جرام</div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${intPaperType === '70' ? style.selected : ''}`}
                      onClick={() => setIntPaperType('70')}
                    > 70 جرام</div>
                    <div
                      className={`border me-1 col-4 p-1 hovercolor ${intPaperType === '80' ? style.selected : ''}`}
                      onClick={() => setIntPaperType('80')}
                    >80 جرام</div>
                    </div>
                     <div className='col-12 d-flex mt-2'>
                    <div
                      className={`border  col-6 p-1 hovercolor ${intPaperType === '100' ? style.selected : ''}`}
                      onClick={() => setIntPaperType('100')}
                    >100 جرام</div>
                     <div
                      className={`border me-2 col-6 p-1 hovercolor ${intPaperType === '120' ? style.selected : ''}`}
                      onClick={() => setIntPaperType('120')}
                    >120 جرام</div> */}
                  </div>
                </div>
                
                {/* Paper Type */}
                <div className='mt-3'>
                  <label className='mb-2 fw-bold'> شكل الورق الداخلي</label>
                  <div className='d-flex text-center ms-2'>
                  {proDetails.shape_in_paper.map((papershap, index) => (
            <div
              key={index}
              className={`border me-1 col-4 py-1 hovercolor ${paperType === papershap.name ? style.selected : ''}`}
              onClick={() =>setPaperType(papershap.name)}
            >
              {papershap.name}
            </div>
          ))}
                    {/* <div
                      className={`border col-4 py-1 hovercolor ${paperType === 'سادة غير مطبوع' ? style.selected : ''}`}
                      onClick={() => setPaperType('سادة غير مطبوع' )}
                    >سادة غير مطبوع</div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${paperType === 'مطبوع لون واحد'? style.selected : ''}`}
                      onClick={() => setPaperType('مطبوع لون واحد')}
                    >مطبوع لون واحد</div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${paperType === 'مطبوع الوان' ? style.selected : ''}`}
                      onClick={() => setPaperType('مطبوع الوان')}
                    >مطبوع الوان</div> */}
                  </div>
                </div>
                {/* Close Type */}
                <div className='mt-3'>
                  <label className='mb-2 fw-bold'> التقفيل  </label>
                  <div className='d-flex text-center ms-2'>
                  {proDetails.locl.map((closetype, index) => (
            <div
              key={index}
              className={`border me-1 col-4 py-1 hovercolor ${close === closetype.name ? style.selected : ''}`}
              onClick={() =>setClose(closetype.name)}
            >
              {closetype.name}
            </div>
          ))}
                    {/* <div
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
                    >  سلك  </div> */}
                  </div>
                </div>

                {/* Close Side */}
                <div className='mt-3'>
                  <label className='mb-2 fw-bold'> جة التقفيل  </label>
                  <div className='d-flex text-center ms-2'>
                  {proDetails.locl_side.map((closesid, index) => (
            <div
              key={index}
              className={`border me-1 col-4 py-1 hovercolor ${closeSide === closesid.name ? style.selected : ''}`}
              onClick={() =>setCloseSide(closesid.name)}
            >
              {closesid.name}
            </div>
          ))}
                    {/* <div
                      className={`border col-4 py-1 hovercolor ${closeSide === 'فوق' ? style.selected : ''}`}
                      onClick={() => setCloseSide('فوق')}
                    > فوق</div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${closeSide === 'شمال' ? style.selected : ''}`}
                      onClick={() => setCloseSide('شمال')}
                    >  شمال  </div>
                    <div
                      className={`border me-1 col-4 py-1 hovercolor ${closeSide === 'يمين' ? style.selected : ''}`}
                      onClick={() => setCloseSide('يمين')}
                    >  يمين </div> */}
                  </div>
                </div>
        

              </div>
  {/* ..... */}
  <div className='left col-md-12 col-sm-12 col-lg-5 col-xs-12 me-lg-4 '>
     
     <div className='mb-4'></div>

       <div className=" d-flex  border">
           <div  className=" justify-content-between align-items-center bg-danger text-light p-4" to="/"  onClick={calculateTotalPrice} style={{'cursor':'pointer'}}>
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
                       سعر النسخة:
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
    :<LoadingScrean/>}
   </>
  )
}

export default BlockNote
