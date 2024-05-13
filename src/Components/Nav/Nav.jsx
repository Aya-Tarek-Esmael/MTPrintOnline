import React, { useState } from 'react';
import logo from '../../assets/MTBLOGO.png';
import { NavLink,Link } from 'react-router-dom';
import style from './Nav.module.css'

function Nav() {
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
     
    }

    const toggleDropdown1 = () => {
        setIsDropdownOpen1(!isDropdownOpen1);
        setIsDropdownOpen2(false); // Close other dropdowns
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
        setIsDropdownOpen5(false);
    };

    const toggleDropdown2 = () => {
        setIsDropdownOpen2(!isDropdownOpen2);
        setIsDropdownOpen1(false); // Close other dropdowns
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
        setIsDropdownOpen5(false);
    };

    const toggleDropdown3 = () => {
        setIsDropdownOpen3(!isDropdownOpen3);
        setIsDropdownOpen1(false); // Close other dropdowns
        setIsDropdownOpen2(false);
        setIsDropdownOpen4(false);
        setIsDropdownOpen5(false);
    };

    const toggleDropdown4 = () => {
        setIsDropdownOpen4(!isDropdownOpen4);
        setIsDropdownOpen1(false); // Close other dropdowns
        setIsDropdownOpen2(false);
        setIsDropdownOpen3(false);
        setIsDropdownOpen5(false);
    };

    const toggleDropdown5 = () => {
        setIsDropdownOpen5(!isDropdownOpen5);
        setIsDropdownOpen1(false); // Close other dropdowns
        setIsDropdownOpen2(false);
        setIsDropdownOpen3(false);
        setIsDropdownOpen4(false);
    };

    const toggleMobileNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <div className={`container-fluid mb-30 ${style.navcontainer}`}>
            <div className="row px-xl-2">
            <div className="col-lg-3">
                    <a href="" className="text-decoration-none d-block  d-lg-none">
                        <img src={logo} alt='logo' className='w-50'/>
                    </a>
                </div>
                <div className="col-lg-9 ">
                    <nav className="navbar navbar-expand-lg text-light navbar-dark  py-3 py-lg-0 ">

  {/*  */}

   {/*  */}


                        <button className={`navbar-toggler  ${style.btnnavcolor}`} type="button" onClick={toggleMobileNav}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse justify-content-start ml-auto  ${isNavOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav ml-auto text-right">
                                {/* <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown4" role="button" onClick={toggleDropdown5} aria-haspopup="true" aria-expanded={isDropdownOpen5}> <i className="fa fa-angle-down mt-1"></i>الباقات والعروض</NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0   ${isDropdownOpen5 ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item">H 1</span>
                                        <span className="dropdown-item">H 2</span>
                                    </div>
                                </li> */}
                                 <li className="nav-item ">
                                    <NavLink  to='/الرئيسية' className="nav-link">الرئيسية</NavLink>
                                </li>
                            <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown4" role="button" onClick={toggleDropdown4} aria-haspopup="true" aria-expanded={isDropdownOpen4}>  الشركات<i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen4 ? 'show' : ''}`}  style={{'textAlign': 'right'}}  aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item">m 1</span>
                                        <span className="dropdown-item">m 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown1" role="button" onClick={toggleDropdown1} aria-haspopup="true" aria-expanded={isDropdownOpen1}> اليفط والواجهات<i className="fa fa-angle-down mt-1"></i> </NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen1 ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item">H 1</span>
                                        <span className="dropdown-item">H 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " to="/bannerproducts" id="navbarDropdown2" role="button" onClick={toggleDropdown2} aria-haspopup="true" aria-expanded={isDropdownOpen2}> منتحات بانر <i className="fa fa-angle-down mt-1"></i> </NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen2 ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="navbarDropdown2">
                                        <Link to={`ادجستبل-ستاند/`} className="dropdown-item">ادجستل استاند</Link>
                                        <Link to={`reflectivebanner/`} className="dropdown-item"> بانر عاكس</Link>
                                        <Link to={`wallpaper/'`} className="dropdown-item"> ورق حائط</Link>
                                        <Link to={`اكس-بانر/`} className="dropdown-item"> اكس بانر</Link>
                                        <Link to={`stan/`} className="dropdown-item"> ستان</Link>
                                        <Link to={`seethrough/`} className="dropdown-item"> سي ثرو</Link>
                                        <Link to={`بانر-عادي/`} className="dropdown-item"> بانر عادي</Link>
                                        <Link to={`canvas/`} className="dropdown-item"> كانفاس</Link>
                                        <Link to={`vinyl/`} className="dropdown-item"> الفينيل</Link>
                                        <Link to={`carvinyl/`} className="dropdown-item"> ملصق سيارات</Link>
                                        <Link to={`roll-up/`} className="dropdown-item"> رول اب</Link>
                                        <Link to={`بوب-اب-كامل/`} className="dropdown-item"> بوب اب كامل</Link>
                                        <Link to={`flex/`} className="dropdown-item"> فليكس</Link>
                                        <Link to={`glossy/`} className="dropdown-item"> جلوسي</Link>
                                        <Link to={`bannercoated/`} className="dropdown-item"> بانر كوتيد</Link>


                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown3" role="button" onClick={toggleDropdown3} aria-haspopup="true" aria-expanded={isDropdownOpen3} >ورقيات <i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen3 ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="navbarDropdown3">
                                        <Link  to='receipts'    className="dropdown-item">ايصالات</Link>
                                        <Link  to='magazine' className="dropdown-item"> مجلات </Link>
                                        <Link  to='blocknote' className="dropdown-item"> بلوك نوت</Link>
                                        <Link  to='prescription' className="dropdown-item"> روشتات</Link>
                                        <Link  to='sticker' className="dropdown-item">ستيكر </Link>
                                        <Link  to='catalogue' className="dropdown-item"> كتالوج </Link>
                                        <Link  to='letterhead' className="dropdown-item"> ليترهيد</Link>
                                        <Link  to='envelopes' className="dropdown-item"> اظرف</Link>
                                        <Link  to='folder' className="dropdown-item"> فولدر</Link>




                                        




                                    </div>
                                </li>
                               
                            </ul>
                        </div>

                        
  <div className="col-10 border rounded-pill p-0 bg-light d-lg-none">
            <form action="" className="search-form  ">
            <div className="input-group  border-dark ">
            <input type="text" className="form-control border-0 rounded-end-5 " placeholder="ادخل كلمة البحث ..." />
             
            <div className="input-group-prepend ms-1 ">
            <div className="dropdown ">
                 <button className="btn btn-transparent " type="button" id="dropdownMenuButton"  onClick={toggleDropdown} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
               Categories<i className="fa fa-angle-down mt-1 text-secondary"></i>
                 </button>
                <div className={`dropdown-menu justify-content-end ${isDropdownOpen ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="dropdownMenuButton">

                    <a className="dropdown-item text-right"  href="/">كروت شخصية</a>
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
        <button type="submit" name="submit_search" className={`btn rounded-start-5  text-light ${style.btnnavcolor} `}>
                <i className="fa fa-search" ></i>
            </button>
        </div>
    </form>
</div>
 

                    </nav>
                </div>
            
            </div>
        </div>
    );
}

export default Nav;
