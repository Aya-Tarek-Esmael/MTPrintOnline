import React, { useState } from 'react';
import style from './PersonalCards.module.css';
import { Link } from 'react-router-dom';
import PersonalCardSlider from './PersonalCardSlider';
import Select from 'react-select';


function SpotCurveCard() { 
    const [quantity, setQuantity] = useState(1000);
    const [selectedSize, setSelectedSize] = useState(null);
    const [designFile, setDesignFile] = useState(null);
    const [link, setLink] = useState('');
    const [comment, setComment] = useState('');

    const handleSubtract = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1000, 1000));
    };

    const handleAdd = () => {
        setQuantity(prevQuantity => Math.min(prevQuantity + 1000, 100000));
    };

    const handlePrint = () => {
        const formData = {
            quantity,
            selectedSize,
            designFile,
            link,
            comment
        };
        console.log('Data to print:', formData);
        // Send formData to your API 
    };

    const handleAddToFavorites = () => {
        const formData = {
            quantity,
            selectedSize,
            designFile,
            link,
            comment
        };
        console.log('Data to add to favorites:', formData);
        // Send formData to your API 
    };

 
    const sizeOptions = [
            { value: "352", label: "1 كارت سبوت كبير (5.50 - 9.00 cm)" },
            { value: "353", label: "2 كارت سبوت كبير (11.00 - 9.00 cm)" },
            { value: "354", label: "3 كارت سبوت كبير (16.50 - 9.50 cm)" },
            { value: "355", label: "4 كارت سبوت كبير (11.00 - 18.00 cm)" }
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

 
    const ImageZoom = ({ src, alt }) => {
        return (
            <div className={style.imageContainer}>
                <img src={src} alt={alt} />
            </div>
        );
    };
    
    

    return (
        <>
            <div className='container-fluid mt-4 mx-0 d-lg-flex col-12  px-5 '>
                {/* col1 */}
                <div id="left_column" className="col-xs-12 col-sm-12 col-md-9 col-lg-3 ">
                    <div className={`order-detail-content ${style.bor} px-4 py-1`}>
                        <div className="shipping">
                            <h6 className='text-danger'><i className="fa fa-credit-card text-dark"></i> الدفع قبل التسليم</h6>
                            <hr />
                        </div>
                        <div className="shipping">
                            <h6 className='text-danger'> <i className="fa fa-truck text-dark"></i> طرق شحن أمنه وسريعه</h6>
                            <p className={`${style.textcolor} me-5`}> سوف نتأكد من توصيل طلبك في غضون أيام</p>
                            <hr />
                        </div>
                        <div className="shipping">
                            <h6>
                                <i className="fa fa-file text-dark ms-1"></i>
                                <a href="https://www.tantawy-print.com/uploads/configurationsite/96522588.pdf" target="_blank" className='text-secondary'>تحميل ملف التسعيرة </a>
                            </h6>
                        </div>
                    </div>
                </div>

                               {/* col2 */}
                               <div className='col-lg-9 col-md-12 col-sm-12 col-xs-12 mx-0'>
                    <div className='d-lg-flex col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-1'>
                        {/* col2 right side */}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6">
                            <div className="mb-3">
                                <Link className="home" to="/home" title="Return to Home"><i className="fa-solid fa-house text-danger "></i></Link>
                                <span className="navigation-pipe">&gt;</span> كارت سبوت كيرف مقاس 5.5*9
                            </div>
                            <div id="image-block" className="clearfix  ">
                                <span id="view_full_size">
                                <ImageZoom src="https://www.tantawy-print.com/uploads/products/source/51441.jpeg"  className='' alt="كارت كيرف" />
                                </span>
                            </div>
                            <div id="views_block" className="clearfix mt-4">
                                <a id="view_scroll_left" className=""> </a>
                                <div id="thumbs_list">
                                    {/* <ul id="thumbs_list_frame" className='d-flex w-100 h-10 mx-auto'>
                                       
                                   <img src="https://www.tantawy-print.com/uploads/products/resize800/91904.png" className='w-25'/>
                                   <img src="https://www.tantawy-print.com/uploads/products/resize800/91904.png" className='w-25'/>
                                   <img src="https://www.tantawy-print.com/uploads/products/resize800/91904.png" className='w-25'/>

                                    </ul> */}
                                </div>
                                <a id="view_scroll_right" title="Other views" href=""> </a>
                            </div>
                        </div>



                        {/* col2 left side */}
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 mt-5">
                            <h5>
                                <div className="star_content float-left">
                                    <input type="hidden" name="" value="4.0000" />
                                    <div className="review-rating" data-rate="4"></div>
                                </div>
                                كارت سبوت كيرف مقاس 5.5*9
                            </h5>
                            <span></span>
                            <hr />
                            <p> كارت سبوت كيرف مقاس 5.5*9 </p>
                            <div id="quantity_wanted_p" className='d-flex'>
                                <label htmlFor="quantity_wanted" className='fw-bold text-danger col-4'>الكمية :  </label>
                                <button id="sub" onClick={handleSubtract} className="sub btn btn-default border me-2">-</button>
                                <input type="text" id="quantity" step="1000" value={quantity} name="quantity" min="1000" max="100000" className="btn btn-default w-25 border mx-2" readOnly />
                                <button id="add" onClick={handleAdd} className="add btn btn-default  border">+</button>
                            </div>

                            <div className='mt-4'>
                                <h3>الداخل</h3>
                                <div className='col-xs-12 col-sm-12 col-md-12'>
                                <div className='d-flex'>
                                        <label className="col-4 text-danger fw-bold">مقاس الكارت :&nbsp;</label>
                                        <div className="form-group col-xs-12 col-sm-8 col-md-8 col-8">
                                            <Select
                                                options={sizeOptions}
                                                styles={customStyles}
                                                placeholder="ابحث..."
                                                noOptionsMessage={() => "لا توجد نتائج"}
                                                isClearable
                                                isSearchable
                                                onChange={(selectedOption) => setSelectedSize(selectedOption)}
                                            />
                                        </div>
                                    </div>

                                    <p className={`${style.pfont} mt-3`}>فى حالة عدم توافر مقاس الكارت المطلوب برجاء التواصل مع المطبعة </p>
                                </div>


                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className='d-flex'>
                                        <label className="col-sm-5 col-md-5 text-danger fw-bold">صورالتصميم مضغوط</label>
                                        <div className="form-group col-xs-12 col-sm-7 col-md-7">
                                            <input type="file" name="design_img" className="form-control" id="design" onChange={(e) => setDesignFile(e.target.files[0])} />
                                        </div>
                                    </div>
                                    <p className={`${style.pfont} mt-3`}>اذا كان حجم ملف كبير, اكبر من 200 ميجا حمله على <a target="_blank" href="https://drive.google.com/drive"><b>Google Drive</b></a> أو <a href="https://wetransfer.com/" target="_blank"><b>We Transfer</b></a> وضع اللينك في الأسفل</p>
                                </div>

                                <div className="d-flex col-xs-12 col-sm-12 col-md-12">
                                    <label className='col-sm-4 col-md-4 col-4 text-danger fw-bold'>اللينك</label>
                                    <div className="form-group col-xs-12 col-sm-8 col-md-8 col-8">
                                        <input type="link" name="link" className="form-control w-100" placeholder="اللينك" value={link} onChange={(e) => setLink(e.target.value)} />
                                    </div>
                                </div>

                                <div className="d-flex col-xs-12 col-sm-12 col-md-12 mt-4">
                                    <label className='col-sm-4 col-md-4 col-4 text-danger fw-bold'>التعليق</label>
                                    <div className="form-group col-xs-12 col-sm-8 col-md-8 col-8">
                                        <textarea className="form-control" rows="3" name="comment" value={comment} onChange={(e) => setComment(e.target.value)}></textarea>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12">
                                    <div className="progress pb-4 pt-2 mt-4 border ">
                                        <div className="text-center mx-auto align-items-center fs-6">0%</div>
                                    </div>
                                </div>
                                <div className="d-flex mt-3 col-xs-12 col-sm-12 col-md-12">
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-6">
                                        <div className="text-center">
                                            <button type="button" onClick={handlePrint} className={`${style.cardbtn} btn-danger btn text-light rounded-pill px-4 py-2 border-info`} id="add_to_cart"><i className="fa fa-shopping-cart"></i>طباعة</button>
                                        </div>
                                    </div>
                                    <div className="col-xs-6 col-sm-6 col-md-6 col-6">
                                        <div className="text-center">
                                            <button onClick={handleAddToFavorites} id="addToWishlistDiv" className={`btn-danger py-2 px-1 btn ${style.cardbtn} text-light rounded-pill border-info`} data-prodid="21">
                                                <span> <i className="fa-solid fa-heart text-light ms-1"></i>إضافة إلى المفضلة</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12 mt-3'>
                        <section id="tm-tabcontent" className="">
                            <ul id="productpage_tab1" className="nav nav-tabs">
                                <li className="active border border-bottom-0 p-2"><a data-toggle="tab" className="text-danger fw-bold">وصف المنتج </a></li>
                            </ul>
                            <div className="tab-content">
                                <ul id="" className="tab-pane border p-4 active">
                                    <li>
                                        <p><strong> كارت سبوت كيرف مقاس 5.5*9</strong></p>
                                        كارت سبوت كيرف مقاس 5.5*9
                                    </li>
                                </ul>
                            </div>
                        </section>

                        <section id="tm-tabcontent" className="tm-tabcontent">
                            <ul id="productpage_tab" className="nav nav-tabs">
                                <li className="active border border-bottom-0 p-2"><a data-toggle="tab" href="#tmmoreinfo" className="tmmoreinfo text-danger fw-bold">معلومات اضافية </a></li>
                            </ul>
                            <div className="tab-content">
                                <ul id="tmmoreinfo" className="tm_productinner tab-pane border p-4 active">
                                    <li>
                                        <p> كارت سبوت كيرف مقاس 5.5*9</p>
                                    </li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>
            </div>

            <div className='container-fluid px-5'>
                <div>
                    <PersonalCardSlider />
                </div>
            </div>
        </>
    );
}

export default SpotCurveCard;
