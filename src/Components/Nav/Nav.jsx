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
    };

    const closeMenus = () => {
        setIsDropdownOpen(false);
        setActiveDropdown(null);
        setIsNavOpen(false);
    };

    return (
        <div className={`container-fluid mb-30 ${style.navcontainer}`}>
            <div className="row px-xl-2 ">
                <div className="col-lg-3 bg-light d-lg-none ">
                    <a href="" className="text-decoration-none d-block d-lg-none text-center">
                        <img src={logo} alt='logo' className='w-50 ' />
                    </a>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg text-light navbar-dark py-3 py-lg-0">
                        <button className={`navbar-toggler ${style.btnnavcolor}`} type="button" onClick={toggleMobileNav}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse justify-content-start ml-auto  me-3 ${isNavOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav ml-auto text-right">
                                <li className="nav-item">
                                    <NavLink to='/الرئيسية' className="nav-link" onClick={closeMenus}>الرئيسية</NavLink>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="#" id="navbarDropdown5" role="button" onClick={() => toggleDropdown(5)} aria-haspopup="true" aria-expanded={activeDropdown === 4}>الشركات<i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 5 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown5">
                                        <span className="dropdown-item" onClick={closeMenus}>m 1</span>
                                        <span className="dropdown-item" onClick={closeMenus}>m 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="#" id="navbarDropdown1" role="button" onClick={() => toggleDropdown(1)} aria-haspopup="true" aria-expanded={activeDropdown === 1}>اليفط والواجهات<i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 1 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item" onClick={closeMenus}>H 1</span>
                                        <span className="dropdown-item" onClick={closeMenus}>H 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="/bannerproducts/" id="navbarDropdown2" role="button" onClick={() => toggleDropdown(2)} aria-haspopup="true" aria-expanded={activeDropdown === 2}>منتجات بانر<i className="fa fa-angle-down mt-1"></i></NavLink>
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
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="/papers/" id="navbarDropdown3" role="button" onClick={() => toggleDropdown(3)} aria-haspopup="true" aria-expanded={activeDropdown === 3}>ورقيات<i className="fa fa-angle-down mt-1"></i></NavLink>
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
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="/cups/" id="navbarDropdown4" role="button" onClick={() => toggleDropdown(4)} aria-haspopup="true" aria-expanded={activeDropdown === 4}> اكواب <i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 4 ? 'show' : ''}`} onMouseLeave={() => toggleDropdown()} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown4">
                                        <Link to={`/cups/Plasticcups/`} className="dropdown-item" onClick={closeMenus} > اكواب بلاستيك</Link>
                                        <Link to={`/cups/papercups/`} className="dropdown-item" onClick={closeMenus}>اكواب ورقية</Link>
                                    </div>
                                </li>
        
                            </ul>
                        </div>

                        <div className="col-10 border rounded-pill p-0 bg-light d-lg-none">
                            <form action="" className="search-form">
                                <div className="input-group border-dark">
                                    <input type="text" className="form-control border-0 rounded-end-5" placeholder="ادخل كلمة البحث ..." />
                                    <div className="input-group-prepend ms-1">
                                        <div className="dropdown">
                                            <button className="btn btn-transparent" type="button" onClick={() => toggleDropdown('categories')} data-toggle="dropdown" aria-haspopup="true" aria-expanded={activeDropdown === 'categories'}>
                                                Categories<i className="fa fa-angle-down mt-1 text-secondary"></i>
                                            </button>
                                            <div className={`dropdown-menu justify-content-end ${activeDropdown === 'categories' ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="dropdownMenuButton">
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
                                        <Link to={`/cups/Plasticcups/`} className="dropdown-item" onClick={closeMenus}> اكواب بلاستيك</Link>
                                        <Link to={`/cups/papercups/`} className="dropdown-item" onClick={closeMenus}>اكواب ورقية</Link>

                                        {/* اكياس */}
                                        <Link to={`/bags/Plasticbags/`} className="dropdown-item" onClick={closeMenus}> أكياس بلاستيك</Link>
                                        <Link to={`/bags/binandnutsbags/`} className="dropdown-item" onClick={closeMenus}>أكياس بن ومكسرات</Link>
                                        <Link to={`/bags/kraftbags/`} className="dropdown-item" onClick={closeMenus}> شنط كرافت</Link>
                                        <Link to={`/bags/clothbags/`} className="dropdown-item" onClick={closeMenus}> شنط قماش</Link>
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
                                    <button type="submit" name="submit_search" className={`btn rounded-start-5 text-light ${style.btnnavcolor}`}>
                                        <i className="fa fa-search"></i>
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
