import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/MTBLOGO.png'
import style from './Topbar.module.css'

function Topbar() {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
     
    }
  return (
    <>
     {/* Topbar Start  */}

    <div className={`container-fluid ${style.topcontainer}`}>
        <div className="row  py-1 px-xl-5 ">

        <div className="col-lg-6 text-center text-lg-right d-flex ">
             <div className="d-inline-flex align-items-center ">
             <div className={`btn-group mx-3 ${style.fontcolor}`}>
              <span className="text-light"><i className="fa-solid fa-phone-flip ms-2"></i> 012345678910 </span>
              <span className="text-light mx-1">|</span>
              <a className="">تسجيل الدخول</a>
             </div>
        {/* <div className="btn-group">
            <button type="button" className="btn btn-sm btn-light dropdown-toggle" data-toggle="dropdown">EN</button>
            <div className="dropdown-menu dropdown-menu-right">
                <button className="dropdown-item" type="button">AR</button>
            </div>
        </div> */}
     </div>

                <div className="d-inline-flex align-items-center d-block d-lg-none">
                    <a href="" className="btn px-0 ml-2 me-1">
                    <i className="fa-solid fa-bag-shopping me-1 text-light"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{'padding-bottom': '2px'}}>0</span>
                    </a>
                    <a href="" className="btn px-0 ml-2">
                    <i className="fa-solid fa-heart me-1 text-light"></i>
                        <span className="badge text-dark border border-dark rounded-circle" style={{'padding-bottom': '2px'}}>0</span>
                    </a>
                </div>
                
            </div>


            <div className="col-lg-6  d-none d-lg-block ">
                <div className={`d-flex align-items-center justify-content-end h-100 ${style.social} `}> 
                    <a className="text-light me-4" href=""><i className="fa-brands fa-facebook-f"></i></a>
                    <a className="text-light me-4" href=""><i className="fa-brands fa-twitter"></i></a>
                    <a className="text-light me-4" href=""><i className="fa-brands fa-pinterest-p"></i></a>
                    <a className="text-light me-4" href=""><i className="fa-brands fa-google-plus-g"></i></a>
                    <a className="text-light me-4" href=""><i className="fa-brands fa-linkedin-in"></i></a>
                    <a className="text-light me-4" href=""><i className="fa-brands fa-instagram"></i></a>
                    <a className="text-light me-4" href=""><i className="fa-solid fa-rss"></i></a>
                </div>
            </div>
          
        </div>
        {/* ///endtopbar */}
        {/* middlebar */}
        <div className="row align-items-center bg-light py-1 px-xl-5 d-none d-lg-flex ">
          <div className="col-lg-3 col-3 ">
                    <img src={logo} alt='logo' className='w-75'/>
            </div>
            <div className="col-lg-5 col-5 border rounded-pill p-0 ">
            <form action="" className="search-form  ">
            <div className="input-group  border-dark">
            <input type="text" className="form-control border-0 rounded-end-5 px-1 " placeholder="  ادخل كلمة للبحث ..." />

            <div className="input-group-prepend ms-1 ">
            <div className="dropdown">
                 <button className="btn btn-transparent " type="button" id="dropdownMenuButton"  onClick={toggleDropdown} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 All Categories   <i className="fa fa-angle-down mt-1 text-secondary"></i>
                 </button>
                <div className={`dropdown-menu justify-content-end  ${isDropdownOpen ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="dropdownMenuButton">

                    <Link className="dropdown-item text-right"  to="/personalcards">كروت شخصية</Link>
                    <Link className="dropdown-item text-right"  to="/brochure">بروشور</Link>
                    <a className="dropdown-item text-right"  href="/">كتب كتيبات</a>
                    <a className="dropdown-item text-right"  href="/">ملصقات واستيكرات</a>
                    <a className="dropdown-item text-right"  href="/">ورق لعب بلوت</a>
                    <a className="dropdown-item text-right"  href="/">بنرات</a>
                    <a className="dropdown-item text-right"  href="/">مطبوعات</a>
                    <a className="dropdown-item text-right"  href="/">باقات</a>
                    <a className="dropdown-item text-right"  href="/">اكواب ورقية</a>
                    <a className="dropdown-item text-right"  href="/">التغليف</a>
                    <a className="dropdown-item text-right"  href="/">ستاندات</a>
                    <a className="dropdown-item text-right"  href="/">لوحات ومجسمات</a>
                    <a className="dropdown-item text-right"  href="/">بوكسات</a>
                    </div>
            </div>
        </div>



            <button type="submit" name="submit_search" className={`btn   rounded-start-5  text-light ${style.searchbtn} `}>
                <i className="fa fa-search" ></i>
            </button>

        </div>
    </form>
</div>
{/* ////// */}

            <div className="col-lg-4 col-4 d-flex justifiy-content-space-between  ">
           
        <div className="d-flex justifiy-content-space-between text-center me-5">
        <i className={`fa-regular fa-user fa-2x m-2 ${style.icons}`}></i>
            <div >
                <div className={`text-right ${style.logintitle}`}>
                    <h6 >مرحبا بك </h6>
               <a >تسجيل دخول</a> / <a>تسجيل</a> </div>
                </div>
               
            </div>
            <div className='d-flex justifiy-content-space-between me-5'>
            <i className={`fa-solid fa-bag-shopping fa-2x ${style.icons} `}></i>
                <div className="me-2">
                <h6 >السلة</h6>
                <h6 className='text-danger'> 0.00</h6>
                </div>
            </div>
            </div>
        </div>
    </div>
    {/*  Topbar End  */}
    </>
)
}

export default Topbar