import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import style from './PersonalCards.module.css'

function NormallCard() {
  return (  
    <div className='container-fluid mt-4 px-5 d-flex'>
     
          <div id="left_column" className="col-xs-12 col-md-3 col-lg-3 "> 
            <div className={`order-detail-content ${style.bor} px-4 py-1`}>
                <div className=" shipping">
                                        <h6 className='text-danger'> <i className="fa fa-credit-card text-dark"></i> الدفع قبل التسليم</h6>
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
     
        {/* leftside */}
       
        <div className="primary_block row  d-flex col-9 me-2">
             {/* imageside */}
                <div className="pb-left-column col-xs-12 col-sm-12 col-md-12 col-lg-6"> 
                    <div id="image-block" className="clearfix"> 
                        <span id="view_full_size"> 
                            <a className={`${style.jqzoom}`} rel="gal1" href="https://www.tantawy-print.com/uploads/products/source/91904.png"> 
                                <img src="https://www.tantawy-print.com/uploads/products/resize800/91904.png" /> 
                            </a> 
                        </span> 
                    </div>
                    <div id="views_block" className="clearfix "> 
                        <a id="view_scroll_left" className="" href="javascript:{}"> </a> 
                        
                        <div id="thumbs_list">
                            <ul id="thumbs_list_frame">
                                                            </ul>
                        </div>
                        <a id="view_scroll_right" title="Other views" href="javascript:{}"> </a> 
                    </div>
                                   
                </div>


            <div className="pb-center-column col-xs-12 col-sm-12 col-md-12 col-lg-6">
            <h1>
                        <div className="star_content float-left">
                            <input type="hidden" name="criterion[1]" value="4.0000" />
                            <div className="review-rating" data-rate="4"></div>
                        </div>
                        كارت عادى
            </h1>
            <span></span>
            <hr/>
            <h5>كارت عادي</h5>
        </div>
        </div>
    </div>
  )
}

export default NormallCard
