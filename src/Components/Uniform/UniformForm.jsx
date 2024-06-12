import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useNavigate } from 'react-router-dom';
import style from './Uniform.module.css'
import Select from 'react-select';
function UniformForm() {
  const nav = useNavigate();
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
//   const [skills, setSkills] = useState(["Unity", "Blender", "React", "Node.js", "Python", "Java", "HTML", "CSS", "JavaScript", "SQL"]); // Initial options for skills
//   const [selectedSkills, setSelectedSkills] = useState([]); // State to hold selected skills



  const onSubmit = async (data) => {
    try {
     
      console.log('Project added successfully:');
      reset();
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };
  const [quantity, setQuantity] = useState([0]);
  const [customType, setCustomType] = useState('');
  const [printType, setPrintType] = useState(null);
  const [printColor, setPrintColor] = useState();

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


  const printTypeOptions = [
      { value: '', label: 'تطريز ' },
      { value: '', label: 'تطريز ' },
       { value: '', label: 'تطريز ' },
  ];
  const customStyles = {
      control: (provided) => ({
          ...provided,
          textAlign: 'right'
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

  const formatOptionLabel = ({ label, image }) => (
      <div style={{ display: 'flex', flexDirection:'column', alignItems: 'center' }}>
           <span>{label}</span>
          {image && <img src={image} alt="" style={{ width:'100%', height: 160, margin:'auto'}} />} 
      </div>
  );

  const handleSubtract = () => {
      setQuantity(prevQuantity => Math.max(prevQuantity - 1, 0));
  };

  const handleAdd = () => {
      setQuantity(prevQuantity => Math.min(prevQuantity + 1, 10000000));
  };
  
  return (
      <>
        {/* {isFetching ? (
          <div id="loading-wrapper">
            <div id="loading-text">LOADING</div>
            <div id="loading-content"></div>
          </div>
        ) : ( */}
         
            <div className="container-fluid px-5">
              <h2 className=" mt-3"> Uniform-يونيفورم </h2>
              <form onSubmit={handleSubmit(onSubmit)}>
              <div>
          
        
                                  {/* print color */}
                                  <div className='d-flex mt-5 form-group '>
                                      <label className="col-3 text-danger fw-bold"> لون اليونيفورم :&nbsp;</label>
                                      <div className='d-flex col-9 justify-content-center'>
                                      <label className={`  ${style.main}`} title='black'>
                                      <input type="checkbox"  />
                                      <span className={style.w3docs} style={{'backgroundColor':'black'}}></span>
  </label>
  <label className={style.main} title='red'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'red'}}></span>
  </label>
 
  <label className={style.main} title='white'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'white'}}></span>
  </label>
 
  <label className={style.main} title='green'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'green'}}></span>
  </label>
  <label className={style.main} title='yellow'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'yellow'}}></span>
  </label>
  <label className={style.main} title='blue'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'blue'}}></span>
  </label>
  <label className={style.main} title='gray'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'gray'}}></span>
  </label>
  <label className={style.main} title='purple'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'purple'}}></span>
  </label>
  <label className={style.main} title='beige'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'beige'}}></span>
  </label>
  <label className={style.main} title='brown'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'#824821'}}></span>
  </label>
  <label className={style.main} title='pink'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'pink'}}></span>
  </label>
  <label className={style.main} title='orange'>
    <input type="checkbox" />
    <span className={style.w3docs} style={{'backgroundColor':'orange'}}></span>
  </label>
                                      </div>
                                  </div>
                                  {/* print type */}
                                     
                                    <div className='d-flex mt-3 form-group'>
                                      <label className="col-3 text-danger fw-bold"> نوع الطباعة :&nbsp;</label>
                                      <div className="form-group col-xs-9 col-sm-9 col-md-9 col-9">
                                          <Select
                                              options={printTypeOptions}
                                              styles={customStyles}
                                              className='form-control'
                                              placeholder="ابحث..."
                                              noOptionsMessage={() => "لا توجد نتائج"}
                                              isClearable
                                              isSearchable
                                              onChange={(selectedOption) => setPrintType(selectedOption)}
                                          />
                                      </div>
                                  </div>
                                  {/* print place */}
                                   <div  className='mt-3'> 
                                  <label className="col-3 text-danger fw-bold"> مكان الطباعة :&nbsp;</label>
                                     <div className='d-md-flex'>
                                      <div className='col-6 col-md-6 col-sm-12 col-xl-12'></div>
                                      <div className='col-6 col-md-6 col-sm-12 col-xl-12'></div>
                                     </div>
                                  </div> 
                                  {/*  */}
                                 <div id="quantity_wanted_p" className='mt-3 form-group'>
                              <label htmlFor="quantity_wanted" className='fw-bold text-danger'>المقاس :  </label>
                              <div className='col-12 form-control mt-3'>
                              <div className='d-flex  justify-content-between '>
                              <label htmlFor="quantity_wanted" className='fw-bold col-4'>S</label>    
                              <div className='text-start '>
                              <button id="sub" onClick={handleSubtract} className="sub btn btn-default border me-2 ">-</button>
                              <input type="text" id="quantity" step="1000" value={quantity} name="quantity" min="1000" max="100000" className="btn btn-default w-25 border mx-2" readOnly />
                              <button id="add" onClick={handleAdd} className="add btn btn-default  border">+</button>
                              </div>
                              </div>
                              <div className='d-flex mt-2 justify-content-between'>
                              <label htmlFor="quantity_wanted" className='fw-bold col-4'>M</label>    
                              <div className='text-start'>
                              <button id="sub" onClick={handleSubtract} className="sub btn btn-default border me-2">-</button>
                              <input type="text" id="quantity" step="1000" value={quantity} name="quantity" min="1000" max="100000" className="btn btn-default w-25 border mx-2" readOnly />
                              <button id="add" onClick={handleAdd} className="add btn btn-default  border">+</button>
                              </div>
                              </div>
                              <div className='d-flex mt-2 justify-content-between'>
                              <label htmlFor="quantity_wanted" className='fw-bold col-4'>L</label>    
                              <div className='text-start'>
                              <button id="sub" onClick={handleSubtract} className="sub btn btn-default border me-2">-</button>
                              <input type="text" id="quantity" step="1000" value={quantity} name="quantity" min="1000" max="100000" className="btn btn-default w-25 border mx-2" readOnly />
                              <button id="add" onClick={handleAdd} className="add btn btn-default  border">+</button>
                              </div>
                              </div>
                              <div className='d-flex mt-3 justify-content-between'>
                              <label htmlFor="quantity_wanted" className='fw-bold col-4'>XL</label>    
                              <div className='text-start'>
                              <button id="sub" onClick={handleSubtract} className="sub btn btn-default border me-2">-</button>
                              <input type="text" id="quantity" step="1000" value={quantity} name="quantity" min="1000" max="100000" className="btn btn-default w-25 border mx-2" readOnly />
                              <button id="add" onClick={handleAdd} className="add btn btn-default  border">+</button>
                              </div>
                              </div>
                              <div className='d-flex mt-2 justify-content-between'>
                              <label htmlFor="quantity_wanted" className='fw-bold col-4'>2XL</label>    
                              <div className='text-start'>
                              <button id="sub" onClick={handleSubtract} className="sub btn btn-default border me-2">-</button>
                              <input type="text" id="quantity" step="1000" value={quantity} name="quantity" min="1000" max="100000" className="btn btn-default w-25 border mx-2" readOnly />
                              <button id="add" onClick={handleAdd} className="add btn btn-default  border">+</button>
                              </div>
                              </div>
                              <div className='d-flex mt-2 justify-content-between'>
                              <label htmlFor="quantity_wanted" className='fw-bold col-4'>3XL</label>    
                              <div className='text-start'>
                              <button id="sub" onClick={handleSubtract} className="sub btn btn-default border me-2">-</button>
                              <input type="text" id="quantity" step="1000" value={quantity} name="quantity" min="1000" max="100000" className="btn btn-default w-25 border mx-2" readOnly />
                              <button id="add" onClick={handleAdd} className="add btn btn-default  border">+</button>
                              </div>
                              </div>
                           </div>
                          </div>

                          {/* <div className="col-xs-12 col-sm-12 col-md-12 col-12 mt-5 mb-2">
                                      <div className="text-center">
                                          <button type="button" onClick={handlePrint} className={`${style.cardbtn} btn-danger btn text-light rounded-1 border-light w-100`} id="add_to_cart"><i className="fa fa-shopping-cart ms-2"></i>اضف الي السلة</button>
                                      </div>
                          </div>  */}
              </div>
              </form>
          </div>
        
        </>
  );
}

export default UniformForm;
