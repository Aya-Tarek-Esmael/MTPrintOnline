import React, { useEffect, useState } from 'react'
import LoadingScrean from '../../../Components/LoodingScreen/LoodingScreen'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/slices/CartSlice'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate, useParams } from 'react-router-dom';
import style from './UniformForm.module.css';
import Select from 'react-select';
import backImg from '../../../assets/uniform.jpg';
import frontImg from '../../../assets/uniform.jpg';
import poloImg from '../../../assets/uniform.jpg';
import { data } from 'jquery';
function UniformForm() {
  const nav = useNavigate();
  const {id}= useParams();
  console.log(id)
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState({
    S: 0,
    M: 0,
    L: 0,
    XL: 0,
    '2XL': 0,
    '3XL': 0,
  });

  const [proDetails, setProDetails] = useState(null);
  const [customType, setCustomType] = useState('');
  const [printType, setPrintType] = useState(null);
  const [printPlace, setPrintPlace] = useState(null);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedColors, setSelectedColors] = useState('');
  const [file, setFile] = useState('');
  const [fileName, setFileName] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [printPrice, setPrintPrice] = useState(null);
  const [printTypePrice, setPrintTypePrice] = useState(null);
  const [sizePrice, setSizePrice] = useState(null);
  const [price, setPrice] = useState(0.00);
  
  async function getProDetails() {
      let { data} = await axios.get(`https://mtb3a.arabiangeeks.net/api/products/${id}/details`);
      console.log(data);
      setProDetails(data);
      setSizePrice({
        [data.sizes[0].name]: data.sizes[0].price,
        [data.sizes[1].name]: data.sizes[1].price
        // [data.sizes[2].name]: data.sizes[2].price,
        // [data.sizes[3].name]: data.sizes[3].price,
        // [data.sizes[4].name]: data.sizes[4].price,
        // [data.sizes[5].name]: data.sizes[5].price
     });
      setPrintPrice({
        [data.printer_form[0].name]: data.printer_form[0].price,
        [data.printer_form[1].name]: data.printer_form[1].price,
        [data.printer_form[2].name]: data.printer_form[2].price
     });
     setPrintTypePrice ({
      [data.type_in_paper[0].name]: data.type_in_paper[0].price,
      [data.type_in_paper[1].name]: data.type_in_paper[1].price,
      [data.type_in_paper[2].name]: data.type_in_paper[2].price,
      [data.type_in_paper[3].name]: data.type_in_paper[3].price
   });
  //  setSelectedColor({
  //   [data.color[0].name]: 'red',
  //   [data.color[1].name]: 'blue',
  //   [data.color[2].name]: 'green',
  //   [data.color[3].name]: 'yellow',
  //   [data.color[4].name]: 'black',
  //   [data.color[5].name]: 'white',
  //   [data.color[6].name]: 'gray',
  //   [data.color[7].name]: '#824821',
  //   [data.color[8].name]: 'orange',
  //   [data.color[9].name]: 'purple',
  //   [data.color[10].name]: 'beige',
  //   [data.color[11].name]: 'pink'
  // });

  const colorMapping = {
    'أحمر': 'red',
    'أزرق': 'blue',
    'أخضر': 'green',
    'أصفر': 'yellow',
    'أسود': 'black',
    'أبيض': 'white',
    'رمادي': 'gray',
    'بني': '#824821',
    'برتقالي': 'orange',
    'بنفسجي': 'purple',
    'بيج': 'beige',
    'مرون': 'pink'
  };

  const mappedColors = data.color.reduce((acc, color) => {
    acc[color.name] = colorMapping[color.name] || '';
    return acc;
  }, {});

  setSelectedColors(mappedColors);


    }
    useEffect(() => {
      
        getProDetails()
    
    }, [])


    const calculateTotalPrice = () => {
      
      const SCost = parseFloat(sizePrice['S'] || 0) * parseFloat(quantity['S'] || 0);
      const MCost = parseFloat(sizePrice['M'] || 0) * parseFloat(quantity['M'] || 0);
      const LCost = parseFloat(sizePrice['L'] || 0) * parseFloat(quantity['L'] || 0);
      const XLCost = parseFloat(sizePrice['XL'] || 0) * parseFloat(quantity['XL'] || 0);
      const XXLCost = parseFloat(sizePrice['2XL'] || 0) * parseFloat(quantity['2XL'] || 0);
      const XXXXLCost = parseFloat(sizePrice['3XL'] || 0) * parseFloat(quantity['3XL'] || 0);
      const sizeCost = SCost + MCost + LCost + XLCost + XXLCost + XXXXLCost ;
// all quantity
      const allQuantity = parseFloat(quantity['S'] || 0) + parseFloat(quantity['M'] || 0) + parseFloat(quantity['L'] || 0) +parseFloat(quantity['XL'] || 0) + parseFloat(quantity['2XL'] || 0) + parseFloat(quantity['3XL'] || 0);
      const printtypeCost = parseFloat(printTypePrice[printType] || 0) * allQuantity ;
      const printplaceCost = parseFloat(printPrice[printPlace] || 0) * allQuantity ;
      const totalCost =  printtypeCost + printplaceCost + sizeCost ;
      setPrice(totalCost);
       console.log(sizeCost)
       console.log(printtypeCost)
       console.log(printplaceCost)
       console.log(allQuantity)
       console.log(totalCost);
       console.log(price); 
  }
     
  const handlePrintTypeChange = (e) => {
    setPrintType(e.target.value);

};
const handleFileChange = (e) => {
  const selectedFile = e.target.files[0];
  setFile(selectedFile);
  setFileName(selectedFile.name);
};

  const onSubmit = async (data) => {
    try {
      const formData = {
        id:proDetails.id,
        name:proDetails.name,
                quantity,
                printType,
                printPlace,
                customType,
                selectedColor,
                file
            
        
            };
            console.log('uniform added successfully:', formData);
            dispatch(addToCart(formData));
      reset();
    } catch (error) {
      console.error('Error uniform form:', error);
    }
  };

    // const handlePrint = () => {
  //     const formData = {
  //         quantity,
  //         printType,
  //         customType,
  //         printColor
      
  
  //     };
  //     console.log('Data to print:', formData);
  //     // Send formData to your API 
  // };
  const handleQuantityChange = (size, increment) => {
    setQuantity((prevQuantity) => ({
      ...prevQuantity,
      [size]: Math.max(prevQuantity[size] + increment, 0),
    }));
  };


  const customStyles = {
    control: (provided) => ({
      ...provided,
      textAlign: 'right',
    }),
    option: (provided, { data }) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
 
    }),
    singleValue: (provided, { data }) => ({
      ...provided,
      display: 'flex',
      alignItems: 'center',
      
    }),
  };

  return (
    <>
      {proDetails?<div className="container-fluid px-5"  style={{'overflowX':'hidden'}}>
        <h2 className='mt-3 mb-5'>{proDetails.name}</h2>
      <form onSubmit={handleSubmit(onSubmit)}  className='d-lg-flex'>
     
          <div className='col-lg-8 col-md-12 col-xl-8 col-sm-12'>
            {/* Print color */}
            <div className='d-flex mt-5 form-group '>
              <label className="col-3  fw-bold"> لون اليونيفورم :&nbsp;</label>
              <div className='d-flex col-9 justify-content-center border pb-4 pt-2 rounded-1 px-2'>
              {proDetails.color.map(color => (
              <label key={color.name} className={` me-3 ${style.main}`} title={color.name} style={{ cursor: 'pointer' }}>
                <input
                  type="radio"
                  name="color"
                  className=''
                  value={color.name}
                  checked={selectedColor === color.name}
                  onChange={() => setSelectedColor(color.name)}
                  style={{ display: 'none' }}
                /> 
                <span className={`${style.w3docs} `} style={{ backgroundColor: selectedColors[color.name] }}></span>
              </label>
            ))}
            
              </div>
            </div>

            {/* Print type */}
            <div className='d-flex mt-4 form-group '>
              <label className="col-3  fw-bold"> نوع الطباعة :&nbsp;</label>
              <div className="form-group  col-xs-9 col-sm-9 col-md-9 col-9 ">
                {/* <Select
                  options={printType}
                  styles={customStyles}
                  placeholder='Print Type'
                  className=''
                  noOptionsMessage={() => "لا توجد نتائج"}
                  onChange={(selectedOption) => setPrintType(selectedOption)}
                /> */}
                   <select
                    className={`col-12 p-2 mt-2 ${style.borderstyle} `}
                    {...register('printType')}
                    style={{'textAlign': 'right'}}
                    placeholder='Print Type'
                    onChange={handlePrintTypeChange}>
                    <option value="">اختر نوع الطباعة</option>
                    {proDetails.type_in_paper.map((printtype, index) => (
                                            <option key={index} value={printtype.name}>{printtype.name} </option>
                                        ))}
                </select>
              </div>
            </div>

            {/* Print place */}
            <div className='mt-3 d-flex'>
              <label className="col-3  fw-bold"> مكان الطباعة :&nbsp;</label>
                <div className='d-flex col-9 col-md-9 col-sm-9 col-xl-9 mt-2 justify-content-center'>
                <div className={`p-1 hovercolor border rounded-2 col-4 ${printPlace === proDetails.printer_form[0].name ? style.selected : ''}`} onClick={() => setPrintPlace(proDetails.printer_form[0].name)} style={{ cursor: 'pointer' }}>
                    <img src={`https://mtb3a.arabiangeeks.net/images/${proDetails.printer_form[0].image}`} alt={proDetails.printer_form[0].name}className="w-100 rounded-1" />
                    <div className="text-center">{proDetails.printer_form[0].name}</div>
                  </div>
                  <div className={`p-1 hovercolor border rounded-2 col-4 me-1 ${printPlace === proDetails.printer_form[1].name ? style.selected : ''}`} onClick={() => setPrintPlace( proDetails.printer_form[1].name)} style={{ cursor: 'pointer' }}>
                    <img src={`https://mtb3a.arabiangeeks.net/images/${proDetails.printer_form[1].image}`} alt={proDetails.printer_form[1].name} className="w-100 rounded-1" />
                    <div className="text-center">{proDetails.printer_form[1].name}</div>
                  </div>
                  <div className={`p-1 hovercolor border rounded-2 col-4 me-1 ${printPlace === proDetails.printer_form[2].name ? style.selected : ''}`} onClick={() => setPrintPlace(proDetails.printer_form[2].name)} style={{ cursor: 'pointer' }}>
                    {/* <div className='d-flex col-12 rounder-1'>
                    <img src={frontImg} alt="Front" className="w-50 ms-0" />
                    <img src={backImg} alt="Back" className="w-50" />
                    </div> */}
                    <img src={`https://mtb3a.arabiangeeks.net/images/${proDetails.printer_form[2].image}`} alt={proDetails.printer_form[2].name} className="w-100 rounded-1" />
                    <div className="text-center">{proDetails.printer_form[2].name}</div>
                  </div>

{/* 
{proDetails.type.map((printplace, index) => (
            <div
              key={index}
              className={`border me-1 col-4 py-1 hovercolor text-center ${printPlace === printplace.name ? style.selected : ''}`}
              onClick={() =>setPrintPlace(printplace.name)}
            >
               {printplace.name}          
            </div>
            
          ))} */}
                
              </div>
            </div>

            {/* Size */}
            <div id="quantity_wanted_p" className='mt-3 form-group d-flex'>
              <label htmlFor="quantity_wanted" className='fw-bold col-3'>المقاس :&nbsp;</label>
              <div className=' form-control mt-3 '>
                {proDetails.sizes.map((size, index)=> (
                  <div  key={index} className='d-flex mt-2 justify-content-between col-12'>
                    <label htmlFor="quantity_wanted" className='fw-bold col-4'>{size.name}</label>
                    <div className='text-start col-8' >
                      <button type="button" onClick={() => handleQuantityChange(size.name, -1)} className="sub btn btn-default border me-2">-</button>
                      <input type="text" value={quantity[size.name]} readOnly className="btn btn-default w-25 border mx-2" />
                      <button type="button" onClick={() => handleQuantityChange(size.name, 1)} className="add btn btn-default border">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* upload logo */}
             <div className=" mt-3  d-flex">
             <label htmlFor="uploadlogo" className='fw-bold col-3'>تصميم اللوجو :&nbsp;</label>
                     <div className=" border  rounded-1 justify-content-center text-center col-9">
                      {fileName? fileName :
                     <div id="dZUpload" className={` ${style.uploadbtn} py-2 `}>
                         <label htmlFor='fileUpload' className={` ${style.uploadbtn}text-dark`}>
                             <i className={` ${style.uploadbtn} fa-solid fa-cloud-arrow-up fa-2x `}></i>
                               <span className={style.uploadbtn}> رفع تصميم اللوجو</span>
                            </label>
                         <input
                          type='file'
                          id='fileUpload'
                          style={{ display: 'none'}}
                          onChange={handleFileChange}
                             />
                         </div>
                         }
                         
                         
                         <div className="drag-note text-secondary mb-2">
                             ملفات  فقط بحد أقصي 25 ميجابايت
                         </div>
                     </div>
                 </div>

                 {/* calculate price  */}
                 <div className='d-flex'>
                  <div className='col-3'></div>
                 <div className=" d-flex  border rounded-1 mt-3 col-9">
                   {/* <div  className=" justify-content-between align-items-center  btn-danger text-light px-4 py-1"  onClick={calculateTotalPrice} style={{'cursor':'pointer','backgroundColor':'#e30918'}}  >
                     <div className="mx-auto"><i className="fa-solid fa-calculator text-light me-3"></i></div><div className=""> إحسب<br /> السعر</div>
                   </div> */}

           <div className="w-100  ">
               <div className=" p-2 d-flex justify-content-between align-items-center ">
                   <div className={` ${style.pricebtn} fw-bold justify-content-between align-items-center  btn-danger text-light px-4 py-1 rounded-2`}  onClick={calculateTotalPrice} style={{'cursor':'pointer'}} >
                       الإجمالي
                   </div>
                   <div className="price-number fw-bold">
                   {price?parseFloat(price.toFixed(2)): '0.00'}ج.م
                   </div>
               </div>
           </div>
       </div>
       </div>
  
                 {/* add to cart */}
            <div className="col-xs-12 col-sm-12 col-md-12 col-12 mt-5 mb-2">
              <div className="text-center">
                <button type="submit" className={`${style.cardbtn} btn-danger btn text-light rounded-1 border-light w-100`} id="add_to_cart">
                  <i className="fa fa-shopping-cart ms-2"></i>اضف الي السلة
                </button>
              </div>
            </div>
          </div>

          {/* left side */}
          <div  className={`col-md-12 col-lg-4 col-xl-4 col-sm-12  mt-5 me-4`}>
           <img src={`https://mtb3a.arabiangeeks.net/images/${proDetails.image}`} alt='brochureImg' className={`w-100 rounded ${style.brochImg}`}/>
         </div>
        </form>
      </div>
      :<LoadingScrean/>}
      </>
  );
}

export default UniformForm;