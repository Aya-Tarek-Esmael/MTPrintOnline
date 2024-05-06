import React, { useState } from 'react';
import logo from '../../assets/MTBLOGO.png';
import { NavLink } from 'react-router-dom';
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

  <div className="col-10 border rounded-pill p-0 bg-light d-lg-none">
            <form action="" className="search-form  ">
            <div className="input-group  border-dark ">
            <button type="submit" name="submit_search" className={`btn rounded-start-5  text-light ${style.btnnavcolor} `}>
                <i className="fa fa-search" ></i>
            </button>
            <div className="input-group-prepend ms-1 ">
            <div className="dropdown ">
                 <button className="btn btn-transparent " type="button" id="dropdownMenuButton"  onClick={toggleDropdown} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <i className="fa fa-angle-down mt-1 text-secondary"></i>Categories
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

            <input type="text" className="form-control border-0 rounded-end-5 px-1" placeholder="Enter Keywords to search ..." />
        </div>
    </form>
</div>
 




{/*  */}


                        <button className={`navbar-toggler  ${style.btnnavcolor}`} type="button" onClick={toggleMobileNav}>
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className={`collapse navbar-collapse justify-content-end ${isNavOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav ml-auto text-right">
                                {/* <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown4" role="button" onClick={toggleDropdown5} aria-haspopup="true" aria-expanded={isDropdownOpen5}> <i className="fa fa-angle-down mt-1"></i>الباقات والعروض</NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0   ${isDropdownOpen5 ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item">H 1</span>
                                        <span className="dropdown-item">H 2</span>
                                    </div>
                                </li> */}
                            <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown4" role="button" onClick={toggleDropdown4} aria-haspopup="true" aria-expanded={isDropdownOpen4}> <i className="fa fa-angle-down mt-1"></i> الشركات</NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen4 ? 'show' : ''}`}  style={{'textAlign': 'right'}}  aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item">m 1</span>
                                        <span className="dropdown-item">m 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown1" role="button" onClick={toggleDropdown1} aria-haspopup="true" aria-expanded={isDropdownOpen1}> <i className="fa fa-angle-down mt-1"></i> اليفط والواجهات</NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen1 ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item">H 1</span>
                                        <span className="dropdown-item">H 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown2" role="button" onClick={toggleDropdown2} aria-haspopup="true" aria-expanded={isDropdownOpen2}> <i className="fa fa-angle-down mt-1"></i> منتحات بانر</NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen2 ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="navbarDropdown2">
                                        <span className="dropdown-item">S 1</span>
                                        <span className="dropdown-item">S 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link " href="#" id="navbarDropdown3" role="button" onClick={toggleDropdown3} aria-haspopup="true" aria-expanded={isDropdownOpen3} ><i className="fa fa-angle-down mt-1"></i>ورقيات</NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0  ${isDropdownOpen3 ? 'show' : ''}`}  style={{'textAlign': 'right'}} aria-labelledby="navbarDropdown3">
                                        <span className="dropdown-item">C1</span>
                                        <span className="dropdown-item">C2</span>
                                    </div>
                                </li>
                                <li className="nav-item ">
                                    <NavLink  to='/الرئيسية' className="nav-link">الرئيسية</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            
            </div>
        </div>
    );
}

export default Nav;
