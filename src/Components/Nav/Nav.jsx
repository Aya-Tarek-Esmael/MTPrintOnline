import React, { useEffect, useState } from 'react';
import logo from '../../assets/MTBLOGO.png';
import { NavLink, Link } from 'react-router-dom';
import style from './Nav.module.css';
import axios from 'axios';
function Nav() {
    const [proDetails, setProDetails] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isNavOpen, setIsNavOpen] = useState(false);
    async function getProDetails() {
        let { data } = await axios.get(`http://localhost:8000/api/categories/`);
        console.log(data);
        setProDetails(data);
    }
    
    useEffect(() => {
      
        getProDetails()
    
    }, [])
    const toggleDropdown = (dropdown) => {
        if (activeDropdown === dropdown) {
            setIsDropdownOpen(false);
            setActiveDropdown(null);
        } else {
            setIsDropdownOpen(true);
            setActiveDropdown(dropdown);
        }
    };

    const toggleMobileNav = () => {
        setIsNavOpen(!isNavOpen);
        document.getElementById('main-content').classList.toggle(style.blurred, !isNavOpen);

    };

    const closeMenus = () => {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
        setIsNavOpen(false);
        document.getElementById('main-content').classList.remove(style.blurred);
    };

    return (
        <div className={`container-fluid mb-30 ${style.navcontainer} `}>
        <div className={`row px-xl-2 ${style.bgcolormob}  ${style.smallscreen} `}>
       
            <div className={`col-sm-3 col-3 col-xl-9 col-md-3 `} >
                <nav className={`navbar navbar-expand-lg text-light navbar-dark py-3 py-lg-0 `}>
                    <button className={` navbar-toggler ${style.btnnavcolor} ${isNavOpen ? 'd-none' : ''}`} type="button" onClick={toggleMobileNav}>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    
                    <div className={` px-2 ${style.mobile_nav} ${isNavOpen ? style.show : ''} `}>
                    <button className={style.close_button} onClick={toggleMobileNav}>×</button>
                    <div className="  col-9  border rounded-pill p-0 bg-light d-lg-none mt-4 justify-content-center mb-2 me-2">
                            <form action="" className="search-form ">
                                <div className="input-group border-dark d-flex col-12">
                                    <input type="text" className=" col-9 form-control border-0 rounded-end-5" placeholder="  ابحث ..." />
                                    <div className="input-group-prepend ms-1 d-none">
                                        <div className="dropdown">
                                            <button className="btn btn-transparent text-dark  " type="button" onClick={() => toggleDropdown('categories')} data-toggle="dropdown" aria-haspopup="true" aria-expanded={activeDropdown === 'categories'}>
                                                Categories<i className="fa fa-angle-down mt-1 text-secondary"></i>
                                            </button>
                                            <div className={`dropdown-menu justify-content-end  w-100 ${style.dropdown_scroll}  ${activeDropdown === 'categories' ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="dropdownMenuButton">
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>كروت شخصية</a>
                                                {/* كروت شخصية */}
                                        <Link to='/personalcards/' className="dropdown-item text-right" onClick={closeMenus}>كروت شخصية</Link>
                                        <Link to='/papers/34/' className="dropdown-item text-right" onClick={closeMenus}>مجلات</Link>
                                        <Link to='/papers/24/' className="dropdown-item text-right" onClick={closeMenus}>بلوك نوت</Link>
                                        <Link to='/papers/30/' className="dropdown-item text-right" onClick={closeMenus}>روشتات</Link>
                                        <Link to='/papers/31/' className="dropdown-item text-right" onClick={closeMenus}>ستيكر</Link>
                                        <Link to='/papers/33/' className="dropdown-item text-right" onClick={closeMenus}>كتالوج</Link>
                                        <Link to='/papers/29/' className="dropdown-item text-right" onClick={closeMenus}>ليترهيد</Link>
                                        <Link to='/papers/27/' className="dropdown-item text-right" onClick={closeMenus}>اظرف</Link>
                                        <Link to='/papers/32/' className="dropdown-item text-right" onClick={closeMenus}>فولدر</Link>
                                        <Link to='/papers/26/' className="dropdown-item text-right" onClick={closeMenus}>بروشور</Link>
                                        <Link to='/papers/25/' className="dropdown-item text-right" onClick={closeMenus}>كتب</Link>
                                        <Link to='/papers/28/' className="dropdown-item text-right" onClick={closeMenus}>دفتر فواتير</Link>
                                          {/* منتحات البانر */}
                                          <Link to={`/bannerproducts/5/`} className="dropdown-item" onClick={closeMenus}>ادجستل استاند</Link>
                                        <Link to={`/bannerproducts/10/`} className="dropdown-item" onClick={closeMenus}>بانر عاكس</Link>
                                        <Link to={`/bannerproducts/23/`} className="dropdown-item" onClick={closeMenus}>ورق حائط</Link>
                                        <Link to={`/bannerproducts/8/`} className="dropdown-item" onClick={closeMenus}>اكس بانر</Link>
                                        <Link to={`/bannerproducts/15/`} className="dropdown-item" onClick={closeMenus}>ستان</Link>
                                        <Link to={`/bannerproducts/14/`} className="dropdown-item" onClick={closeMenus}>سي ثرو</Link>
                                        <Link to={`/bannerproducts/9/`} className="dropdown-item" onClick={closeMenus}>بانر عادي</Link>
                                        <Link to={`/bannerproducts/17/`} className="dropdown-item" onClick={closeMenus}>كانفاس</Link>
                                        <Link to={`/bannerproducts/16/`} className="dropdown-item" onClick={closeMenus}>الفينيل</Link>
                                        <Link to={`/bannerproducts/22/`} className="dropdown-item" onClick={closeMenus}>ملصق سيارات</Link>
                                        <Link to={`/bannerproducts/7/`} className="dropdown-item" onClick={closeMenus}>رول اب</Link>
                                        <Link to={`/bannerproducts/6/`} className="dropdown-item" onClick={closeMenus}>بوب اب كامل</Link>
                                        <Link to={'/bannerproducts/13/'} className="dropdown-item" onClick={closeMenus}>فليكس</Link>
                                        <Link to={`/bannerproducts/12/`} className="dropdown-item" onClick={closeMenus}>جلوسي</Link>
                                        <Link to={`/bannerproducts/11/`} className="dropdown-item" onClick={closeMenus}>بانر كوتيد</Link>
                                        <Link to={`/bannerproducts/18/`} className="dropdown-item" onClick={closeMenus}>برنت اند كات</Link>
                                       
                                        {/* اكواب */}
                                        <Link to={`/cups/35/`} className="dropdown-item" onClick={closeMenus}> اكواب بلاستيك</Link>
                                        <Link to={`/cups/36/`} className="dropdown-item" onClick={closeMenus}>اكواب ورقية</Link>

                                        {/* اكياس */}
                                        <Link to={`/bags/37/`} className="dropdown-item" onClick={closeMenus}> أكياس بلاستيك</Link>
                                        <Link to={`/bags/38/`} className="dropdown-item" onClick={closeMenus}>أكياس بن ومكسرات</Link>
                                        <Link to={`/bags/39/`} className="dropdown-item" onClick={closeMenus}> شنط كرافت</Link>
                                        <Link to={`/bags/40/`} className="dropdown-item" onClick={closeMenus}> شنط قماش</Link>

                                        {/* يونيفورم */}
                                        <Link to={`/uniform/`}   className="dropdown-item" onClick={closeMenus}>يونيفورم</Link>                
                                        {/* <Link to={`/uniform/42/`}   className="dropdown-item" onClick={closeMenus}>بولو نص كم</Link>
                                        <Link to={`/uniform/43/`}   className="dropdown-item" onClick={closeMenus}>بولو كم</Link> 
                                        <Link to={`/uniform/44/`}   className="dropdown-item" onClick={closeMenus}>بوكليت </Link>
                                        <Link to={`/uniform/45/`}   className="dropdown-item" onClick={closeMenus}>هودي </Link>
                                        <Link to={`/uniform/46/`}   className="dropdown-item" onClick={closeMenus}> سويت شيرت سوستة</Link>
                                        <Link to={`/uniform/47/`}   className="dropdown-item" onClick={closeMenus}>بوليفار اوفر سايز </Link>
                                        <Link to={`/uniform/48/`}   className="dropdown-item" onClick={closeMenus}>بامب </Link>
                                        <Link to={`/uniform/49/`}   className="dropdown-item" onClick={closeMenus}>راوند </Link>
                                        <Link to={`/uniform/50/`}   className="dropdown-item" onClick={closeMenus}>كاب </Link>
                                        <Link to={`/uniform/51/`}   className="dropdown-item" onClick={closeMenus}>مطاعم </Link>
                                        <Link to={`/uniform/52/`}   className="dropdown-item" onClick={closeMenus}>تصميمك </Link>
                                         */}

                                        {/* يفط وواجهات -حروف بارزة*/}
                                        <Link to={`/panelsandfacades/`}   className="dropdown-item" onClick={closeMenus}>حروف بارزة </Link>
                                        {/* <Link to={`/charcters/acrylic/`}                           className="dropdown-item" onClick={closeMenus}>اكليرك xاكليرك </Link>
                                        <Link to={`/charcters/face2colorsxacrylic/`}               className="dropdown-item" onClick={closeMenus}>اكليرك "الوش 2 لون"×اكليرك  </Link>
                                        <Link to={`/charcters/acrylicxacrylicandstainlesssteel/`}  className="dropdown-item" onClick={closeMenus}>اكليرك×اكليرك وعلية استانلس </Link>
                                        <Link to={`/charcters/solidstainless/`}                    className="dropdown-item" onClick={closeMenus}>استانلس مصمت</Link>
                                        <Link to={`/charcters/stainlessxacrylic/`}                 className="dropdown-item" onClick={closeMenus}>استانلس×اكليرك</Link> */}
                                                {/* <a className="dropdown-item text-right" href="/" onClick={closeMenus}>كتب كتيبات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>ملصقات واستيكرات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>ورق لعب بلوت</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>بنرات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>مطبوعات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>باقات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>اكواب ورقية</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>التغليف</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>ستاندات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>لوحات ومجسمات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>بوكسات</a> */}
                                            </div>
                                        </div>
                                    </div>
                                    <button type="submit" name="submit_search" className={` col-3 px-2 btn rounded-start-5 text-light ${style.btnnavcolor}`}>
                                        <i className="fa fa-search"></i>
                                    </button>
                                </div>
                            </form>
                        </div>
                        <ul className="navbar-nav ml-auto text-right mt-0 ">
                        
                            <li className="nav-item">
                                <NavLink to='/الرئيسية' className={`nav-link ${style.textnavcolor} me-3`} onClick={closeMenus}>الرئيسية</NavLink>
                            </li>
                                <li className="nav-item dropdown me-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <NavLink className={`nav-link ${style.textnavcolor} `} to="/home" id="navbarDropdown5" >الشركات</NavLink>
                                    <i role="button" onClick={() => toggleDropdown(5)} aria-haspopup="true" aria-expanded={activeDropdown === 4} className="fa fa-angle-down mt-1"></i>
                                    </div>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 5 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown5">
                                        <Link to='/home' className="dropdown-item" onClick={closeMenus}>m 1</Link>
                                        <span className="dropdown-item" onClick={closeMenus}>m 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-3">
                                     <div className='d-flex justify-content-between align-items-center'>
                                    <NavLink className={`nav-link ${style.textnavcolor} `} to="/panelsandfacades/" id="navbarDropdown1" >اليفط والواجهات</NavLink>
                                    <i onClick={() => toggleDropdown(1)} aria-haspopup="true" aria-expanded={activeDropdown === 1} className="fa fa-angle-down mt-1"></i>
                                    </div>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 1 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown1"> 
                                        <Link to={`/panelsandfacades/letters/`} className="dropdown-item" onClick={closeMenus}>حروف بارزة </Link>
                                        {/* <Link to={`/charcters/`} className="dropdown-item" onClick={closeMenus}>حروف بارزة </Link> */}
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <NavLink className={`nav-link ${style.textnavcolor}`} to="/bannerproducts/" id="navbarDropdown2" >منتجات بانر</NavLink>
                                    <i role="button" onClick={() => toggleDropdown(2)} aria-haspopup="true" aria-expanded={activeDropdown === 2} className="fa fa-angle-down mt-1"></i>
                                    </div>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 2 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown2">
                                        <Link to={`/bannerproducts/5/`} className="dropdown-item" onClick={closeMenus}>ادجستل استاند</Link>
                                        <Link to={`/bannerproducts/10/`} className="dropdown-item" onClick={closeMenus}>بانر عاكس</Link>
                                        <Link to={`/bannerproducts/23/`} className="dropdown-item" onClick={closeMenus}>ورق حائط</Link>
                                        <Link to={`/bannerproducts/8/`} className="dropdown-item" onClick={closeMenus}>اكس بانر</Link>
                                        <Link to={`/bannerproducts/15/`} className="dropdown-item" onClick={closeMenus}>ستان</Link>
                                        <Link to={`/bannerproducts/14/`} className="dropdown-item" onClick={closeMenus}>سي ثرو</Link>
                                        <Link to={`/bannerproducts/9/`} className="dropdown-item" onClick={closeMenus}>بانر عادي</Link>
                                        <Link to={`/bannerproducts/17/`} className="dropdown-item" onClick={closeMenus}>كانفاس</Link>
                                        <Link to={`/bannerproducts/16/`} className="dropdown-item" onClick={closeMenus}>الفينيل</Link>
                                        <Link to={`/bannerproducts/22/`} className="dropdown-item" onClick={closeMenus}>ملصق سيارات</Link>
                                        <Link to={`/bannerproducts/7/`} className="dropdown-item" onClick={closeMenus}>رول اب</Link>
                                        <Link to={`/bannerproducts/6/`} className="dropdown-item" onClick={closeMenus}>بوب اب كامل</Link>
                                        <Link to={'/bannerproducts/13/'} className="dropdown-item" onClick={closeMenus}>فليكس</Link>
                                        <Link to={`/bannerproducts/12/`} className="dropdown-item" onClick={closeMenus}>جلوسي</Link>
                                        <Link to={`/bannerproducts/11/`} className="dropdown-item" onClick={closeMenus}>بانر كوتيد</Link>
                                        <Link to={`/bannerproducts/18/`} className="dropdown-item" onClick={closeMenus}>برنت اند كات</Link>

                                    </div>
                                </li>
                                <li className="nav-item dropdown me-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <NavLink className={`nav-link ${style.textnavcolor} `} to="/papers/" id="navbarDropdown3" >ورقيات</NavLink>
                                    <i role="button" onClick={() => toggleDropdown(3)} aria-haspopup="true" aria-expanded={activeDropdown === 3} className="fa fa-angle-down mt-1"></i>
                                    </div>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 3 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown3">
                                        <Link to='/personalcards/' className="dropdown-item" onClick={closeMenus}>كروت شخصية</Link>
                                        <Link to='/papers/34/' className="dropdown-item" onClick={closeMenus}>مجلات</Link>
                                        <Link to='/papers/24/' className="dropdown-item" onClick={closeMenus}>بلوك نوت</Link>
                                        <Link to='/papers/30/' className="dropdown-item" onClick={closeMenus}>روشتات</Link>
                                        <Link to='/papers/31/' className="dropdown-item" onClick={closeMenus}>ستيكر</Link>
                                        <Link to='/papers/33/' className="dropdown-item" onClick={closeMenus}>كتالوج</Link>
                                        <Link to='/papers/29/' className="dropdown-item" onClick={closeMenus}>ليترهيد</Link>
                                        <Link to='/papers/27/' className="dropdown-item" onClick={closeMenus}>اظرف</Link>
                                        <Link to='/papers/32/' className="dropdown-item" onClick={closeMenus}>فولدر</Link>
                                        <Link to='/papers/26/' className="dropdown-item" onClick={closeMenus}>بروشور</Link>
                                        <Link to='/papers/25/' className="dropdown-item" onClick={closeMenus}>كتب</Link>
                                        <Link to='/papers/28/' className="dropdown-item" onClick={closeMenus}>دفتر فواتير</Link>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-3">
                                <div className='d-flex justify-content-between align-items-center'>
                                    <NavLink className={`nav-link ${style.textnavcolor} `} to="/cups/" id="navbarDropdown4" > اكواب </NavLink>
                                    <i role="button" onClick={() => toggleDropdown(4)} aria-haspopup="true" aria-expanded={activeDropdown === 4}  className="fa fa-angle-down mt-1"></i>
                                    </div>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 4 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown4">
                                        <Link to={`/cups/35/`} className="dropdown-item" onClick={closeMenus} > اكواب بلاستيك</Link>
                                        <Link to={`/cups/36/`} className="dropdown-item" onClick={closeMenus}>اكواب ورقية</Link>
                                    </div>
                                </li>
        
                            </ul>
                            
                        </div>

                        
                    </nav>
                </div>
                <div className={`col-sm-9 col-9 col-md-9 col-xl-3  d-lg-none align-items-center py-3 ${style.bgcolormob} `}>
                    <Link to="/الرئيسية" className="text-decoration-none d-block d-lg-none text-center align-items-center">
                        <img src={logo} alt='logo' className='w-25' />
                    </Link>
                </div>
                
            </div>
        </div>
    );
}

export default Nav;
