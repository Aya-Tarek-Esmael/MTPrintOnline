import React, { useEffect, useState } from 'react'
import LoadingScrean from '../../../Components/LoodingScreen/LoodingScreen'
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../Redux/slices/CartSlice'
import axios from 'axios'
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';
import style from './SleevePolo.module.css';
import Select from 'react-select';
import backImg from '../../../assets/uniform.jpg';
import frontImg from '../../../assets/uniform.jpg';
import poloImg from '../../../assets/uniform.jpg';
function SleevePolo() {
  const nav = useNavigate();
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
  const [selectedColor, setSelectedColor] = useState('')
  const [file, setFile] = useState('');
  const [fileLink, setFileLink] = useState('');
  const [printPrice, setPrintPrice] = useState(null);
  const [price, setPrice] = useState(0.00);
  
  async function getProDetails() {
      let { data } = await axios.get(`http://localhost:8000/api/products/31/details`);
      console.log(data);
      setProDetails(data);
    //   setPrintPrice({
    //     [data.type[0].name]: data.type[0].price,
    //     [data.type[1].name]: data.type[1].price,
    //     [data.type[2].name]: data.type[2].price
    //  });
    }
    useEffect(() => {
      
        getProDetails()
    
    }, [])
  const onSubmit = async (data) => {
    try {
      const formData = {
        id:proDetails.id,
        name:proDetails.name,
                quantity,
                printType,
                printPlace,
                customType,
                selectedColor
            
        
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

  const printTypeOptions = [
    { value: '1', label: 'تطريز ' },
    { value: '2', label: 'سلك سكرين  ' },
    { value: '3', label: 'فنيل حرارى  ' },
    { value: '4', label: 'دى تى اف ' }
  ];

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
      {proDetails?<div className="container-fluid px-5  ">
        <h2 className="mt-4"> بولو  كم </h2>
        {/* <h2 className='mt-3 mb-5'>{proDetails.name}</h2> */}
      <form onSubmit={handleSubmit(onSubmit)}  className='d-flex col-12'>
     
          <div className='col-lg-8 col-md-12 col-xl-8 col-sm-12'>
            {/* Print color */}
            <div className='d-flex mt-5 form-group '>
              <label className="col-3  fw-bold"> لون اليونيفورم :&nbsp;</label>
              <div className='d-flex col-9 justify-content-center border pb-4 pt-2 rounded-1'>
                {['black', 'red', 'white', 'green', 'yellow', 'blue', 'gray', 'purple', 'beige', '#824821', 'pink', 'orange'].map(color => (
                  <label key={color} className={` me-3 ${style.main}`} title={color} style={{ cursor: 'pointer' }}>
                    <input
                      type="radio"
                      name="color"
                      className=''
                      value={color}
                      checked={selectedColor === color}
                      onChange={() => setSelectedColor(color)}
                      style={{ display: 'none' }}
                    />
                    <span className={`${style.w3docs} `} style={{ backgroundColor: color }}></span>
                  </label>
                ))}
              </div>
            </div>

            {/* Print type */}
            <div className='d-flex mt-4 form-group '>
              <label className="col-3  fw-bold"> نوع الطباعة :&nbsp;</label>
              <div className="form-group  col-xs-9 col-sm-9 col-md-9 col-9 ">
                <Select
                  options={printTypeOptions}
                  styles={customStyles}
                  placeholder='Print Type'
                  className=''
                  noOptionsMessage={() => "لا توجد نتائج"}
                  onChange={(selectedOption) => setPrintType(selectedOption)}
                />
              </div>
            </div>

            {/* Print place */}
            <div className='mt-3 d-flex'>
              <label className="col-3  fw-bold"> مكان الطباعة :&nbsp;</label>
                <div className='d-flex col-9 col-md-9 col-sm-9 col-xl-9 mt-2'>
                <div className={`p-1 hovercolor border col-3 ${printPlace === 'front' ? style.selected : ''}`} onClick={() => setPrintPlace('front')} style={{ cursor: 'pointer' }}>
                    <img src={frontImg} alt="Front" className="w-100" />
                    <div className="text-center">Front</div>
                  </div>
                  <div className={`p-1 hovercolor border col-3 me-2 ${printPlace === 'back' ? style.selected : ''}`} onClick={() => setPrintPlace('back')} style={{ cursor: 'pointer' }}>
                    <img src={backImg} alt="Back" className="w-100" />
                    <div className="text-center">Back</div>
                  </div>
                  <div className={`p-1 hovercolor border   me-2 ${printPlace === 'front and back' ? style.selected : ''}`} onClick={() => setPrintPlace('front and back')} style={{ cursor: 'pointer' }}>
                    <div className='d-flex col-12'>
                    <img src={frontImg} alt="Front" className="w-50 ms-0" />
                    <img src={backImg} alt="Back" className="w-50" />
                    </div>
                    <div className="text-center">Front & Back</div>
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
            <div id="quantity_wanted_p" className='mt-3 form-group'>
              <label htmlFor="quantity_wanted" className='fw-bold '>المقاس :&nbsp;</label>
              <div className='col-12 form-control mt-3'>
                {['S', 'M', 'L', 'XL', '2XL', '3XL'].map(size => (
                  <div key={size} className='d-flex mt-2 justify-content-between'>
                    <label htmlFor="quantity_wanted" className='fw-bold col-4'>{size}</label>
                    <div className='text-start'>
                      <button type="button" onClick={() => handleQuantityChange(size, -1)} className="sub btn btn-default border me-2">-</button>
                      <input type="text" value={quantity[size]} readOnly className="btn btn-default w-25 border mx-2" />
                      <button type="button" onClick={() => handleQuantityChange(size, 1)} className="add btn btn-default border">+</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

             {/* upload logo */}
             <div className="border mt-3">
                     <div className="justify-content-center text-center">
                     <div id="dZUpload" className={` ${style.uploadbtn} py-2 `}>
                         <label htmlFor='fileUpload' className={` ${style.uploadbtn}text-dark`}>
                             <i className={` ${style.uploadbtn} fa-solid fa-cloud-arrow-up fa-2x `}></i>
                               <span className={style.uploadbtn}> رفع تصميم اللوجو</span>
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
          <div  className={`col-md-12 col-lg-4 col-xl-4 col-sm-12  mt-4 me-4`}>
           <img src={poloImg} alt='brochureImg' className={`w-100 rounded ${style.brochImg}`}/>
         </div>
        </form>
      </div>
      :<LoadingScrean/>}
      </>
  );
}

export default SleevePolo;
