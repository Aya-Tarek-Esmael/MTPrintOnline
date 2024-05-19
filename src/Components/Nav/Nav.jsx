import React, { useState } from 'react';
import logo from '../../assets/MTBLOGO.png';
import { NavLink, Link } from 'react-router-dom';
import style from './Nav.module.css';

function Nav() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const [isNavOpen, setIsNavOpen] = useState(false);

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
            <div className="row px-xl-2">
                <div className="col-lg-3">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <img src={logo} alt='logo' className='w-50' />
                    </a>
                </div>
                <div className="col-lg-9">
                    <nav className="navbar navbar-expand-lg text-light navbar-dark py-3 py-lg-0">
                        <button className={`navbar-toggler ${style.btnnavcolor}`} type="button" onClick={toggleMobileNav}>
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className={`collapse navbar-collapse justify-content-start ml-auto ${isNavOpen ? 'show' : ''}`}>
                            <ul className="navbar-nav ml-auto text-right">
                                <li className="nav-item">
                                    <NavLink to='/الرئيسية' className="nav-link" onClick={closeMenus}>الرئيسية</NavLink>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="#" id="navbarDropdown4" role="button" onClick={() => toggleDropdown(4)} aria-haspopup="true" aria-expanded={activeDropdown === 4}>الشركات<i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 4 ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown4">
                                        <span className="dropdown-item" onClick={closeMenus}>m 1</span>
                                        <span className="dropdown-item" onClick={closeMenus}>m 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="#" id="navbarDropdown1" role="button" onClick={() => toggleDropdown(1)} aria-haspopup="true" aria-expanded={activeDropdown === 1}>اليفط والواجهات<i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 1 ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown1">
                                        <span className="dropdown-item" onClick={closeMenus}>H 1</span>
                                        <span className="dropdown-item" onClick={closeMenus}>H 2</span>
                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="/bannerproducts/" id="navbarDropdown2" role="button" onClick={() => toggleDropdown(2)} aria-haspopup="true" aria-expanded={activeDropdown === 2}>منتجات بانر<i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 2 ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown2">
                                        <Link to={`ادجستبل-ستاند/`} className="dropdown-item" onClick={closeMenus}>ادجستل استاند</Link>
                                        <Link to={`reflectivebanner/`} className="dropdown-item" onClick={closeMenus}>بانر عاكس</Link>
                                        <Link to={`wallpaper/`} className="dropdown-item" onClick={closeMenus}>ورق حائط</Link>
                                        <Link to={`اكس-بانر/`} className="dropdown-item" onClick={closeMenus}>اكس بانر</Link>
                                        <Link to={`stan/`} className="dropdown-item" onClick={closeMenus}>ستان</Link>
                                        <Link to={`seethrough/`} className="dropdown-item" onClick={closeMenus}>سي ثرو</Link>
                                        <Link to={`بانر-عادي/`} className="dropdown-item" onClick={closeMenus}>بانر عادي</Link>
                                        <Link to={`canvas/`} className="dropdown-item" onClick={closeMenus}>كانفاس</Link>
                                        <Link to={`vinyl/`} className="dropdown-item" onClick={closeMenus}>الفينيل</Link>
                                        <Link to={`carvinyl/`} className="dropdown-item" onClick={closeMenus}>ملصق سيارات</Link>
                                        <Link to={`roll-up/`} className="dropdown-item" onClick={closeMenus}>رول اب</Link>
                                        <Link to={`بوب-اب-كامل/`} className="dropdown-item" onClick={closeMenus}>بوب اب كامل</Link>
                                        <Link to={`flex/`} className="dropdown-item" onClick={closeMenus}>فليكس</Link>
                                        <Link to={`glossy/`} className="dropdown-item" onClick={closeMenus}>جلوسي</Link>
                                        <Link to={`bannercoated/`} className="dropdown-item" onClick={closeMenus}>بانر كوتيد</Link>
                                        <Link to={`printandcut/`} className="dropdown-item" onClick={closeMenus}>برنت اند كات</Link>

                                    </div>
                                </li>
                                <li className="nav-item dropdown me-2">
                                    <NavLink className="nav-link" to="/papers/" id="navbarDropdown3" role="button" onClick={() => toggleDropdown(3)} aria-haspopup="true" aria-expanded={activeDropdown === 3}>ورقيات<i className="fa fa-angle-down mt-1"></i></NavLink>
                                    <div className={`dropdown-menu bg-light rounded-1 border-1 m-0 ${activeDropdown === 3 ? 'show' : ''}`} style={{ 'textAlign': 'right' }} aria-labelledby="navbarDropdown3">
                                        <Link to='/personalcards/' className="dropdown-item" onClick={closeMenus}>كروت شخصية</Link>
                                        <Link to='receipts' className="dropdown-item" onClick={closeMenus}>ايصالات</Link>
                                        <Link to='magazine' className="dropdown-item" onClick={closeMenus}>مجلات</Link>
                                        <Link to='blocknote' className="dropdown-item" onClick={closeMenus}>بلوك نوت</Link>
                                        <Link to='prescription' className="dropdown-item" onClick={closeMenus}>روشتات</Link>
                                        <Link to='sticker' className="dropdown-item" onClick={closeMenus}>ستيكر</Link>
                                        <Link to='catalogue' className="dropdown-item" onClick={closeMenus}>كتالوج</Link>
                                        <Link to='letterhead' className="dropdown-item" onClick={closeMenus}>ليترهيد</Link>
                                        <Link to='envelopes' className="dropdown-item" onClick={closeMenus}>اظرف</Link>
                                        <Link to='folder' className="dropdown-item" onClick={closeMenus}>فولدر</Link>
                                        <Link to='brochure' className="dropdown-item" onClick={closeMenus}>بروشور</Link>
                                        <Link to='books' className="dropdown-item" onClick={closeMenus}>كتب</Link>
                                        <Link to='invoicebook' className="dropdown-item" onClick={closeMenus}>دفتر فواتير</Link>
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
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>كتب كتيبات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>ملصقات واستيكرات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>ورق لعب بلوت</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>بنرات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>مطبوعات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>باقات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>اكواب ورقية</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>التغليف</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>ستاندات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>لوحات ومجسمات</a>
                                                <a className="dropdown-item text-right" href="/" onClick={closeMenus}>بوكسات</a>
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
