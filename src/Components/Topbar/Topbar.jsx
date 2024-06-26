import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from '../../assets/MTBLOGO.png'
import { useSelector } from 'react-redux'
import style from './Topbar.module.css'

function Topbar() {

    const cart = useSelector(state => state.CartReducer.cart);
    // console.log(cart[0].quantity);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [searchInput, setSearchInput] = useState('');
    const [filteredCategories, setFilteredCategories] = useState([]);

    const categories = [
        { name: 'كروت شخصية', link: '/personalcards/' },
        { name: 'بروشور', link: 'brochure' },
        { name: 'كتب كتيبات', link: '/' },
        { name: 'ملصقات واستيكرات', link: '/' },
        { name: 'ورق لعب بلوت', link: '/' },
        { name: 'بنرات', link: '/' },
        { name: 'مطبوعات', link: '/' },
        { name: 'باقات', link: '/' },
        { name: 'اكواب ورقية', link: '/' },
        { name: 'التغليف', link: '/' },
        { name: 'ستاندات', link: '/' },
        { name: 'لوحات ومجسمات', link: '/' },
        { name: 'بوكسات', link: '/' },
    ];

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    }
    const handleSearchInputChange = (e) => {
        const value = e.target.value;
        setSearchInput(value);
        const filtered = categories.filter(category => category.name.includes(value));
        setFilteredCategories(filtered);
        setIsDropdownOpen(!!value); // Open dropdown if there is a search input
    };
    return (
        <>
            {/* Topbar Start  */}
            <div className={`container-fluid ${style.topcontainer}`}>
                <div className="row py-1 px-xl-3">
                    <div className="col-lg-6 text-center text-lg-right d-flex justify-content-between">
                        <div className="d-inline-flex align-items-center">
                            <div className={`btn-group mx-3 ${style.fontcolor}`}>
                                <span className="text-light"><i className="fa-solid fa-phone-flip ms-2"></i> 012345678910 </span>
                                <span className="text-light mx-1">|</span>
                                <Link to='/'> تسجيل دخول</Link>
                            </div>
                        </div>

                        <div className="d-inline-flex align-items-center d-block d-lg-none">
                            <a href="" className="btn px-0 ml-2 me-1">
                                <i className="fa-solid fa-bag-shopping ms-2 text-light"></i>
                                <span className="badge text-light border border-dark bg-dark rounded-circle" style={{ 'padding-bottom': '2px'}}>{cart.length}</span>
                            </a>
                            {/* <a href="" className="btn px-0 ml-2">
                                <i className="fa-solid fa-heart ms-2 text-light"></i>
                                <span className="badge text-light border border-dark rounded-circle" style={{ 'padding-bottom': '2px' }}>0</span>
                            </a> */}
                        </div>
                    </div>

                    <div className="col-lg-6 d-none d-lg-block">
                        <div className={`d-flex align-items-center justify-content-end h-100 ${style.social}`}>
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
                <div className="row align-items-center bg-light py-1 px-xl-5 d-none d-lg-flex">
                    <div className="col-lg-3 col-3  ">
                        <img src={logo} alt='logo' className='w-75' />
                    </div>
                    <div className="col-lg-5 col-5 border rounded-pill p-0">
                        <form action="" className="search-form">
                            <div className="input-group border-dark">
                                <input type="text" className="form-control border-0 rounded-end-5 px-1" placeholder="  ادخل كلمة للبحث ..." />

                                <div className="input-group-prepend ms-1">
                                    <div className="dropdown">
                                        <button className="btn btn-transparent" type="button" id="dropdownMenuButton" onClick={toggleDropdown} aria-haspopup="true" aria-expanded={isDropdownOpen}>
                                            All Categories <i className="fa fa-angle-down mt-1 text-secondary"></i>
                                        </button>
                                        <div className={`dropdown-menu justify-content-end ${style.dropdown_scroll} ${isDropdownOpen ? 'show' : ''}`}  style={{ 'textAlign': 'right' }} aria-labelledby="dropdownMenuButton">
                                           
                                             {/* كروت شخصية */}
                                        <Link className="dropdown-item text-right" to="/personalcards/" onClick={closeDropdown}>كروت شخصية</Link>
                                        <Link className="dropdown-item text-right" to="/papers/26/" onClick={closeDropdown}>بروشور</Link>
                                        <Link to='/papers/34/' className="dropdown-item text-right" onClick={closeDropdown}>مجلات</Link>
                                        <Link to='/papers/24/' className="dropdown-item text-right" onClick={closeDropdown}>بلوك نوت</Link>
                                        <Link to='/papers/26/' className="dropdown-item" onClick={closeDropdown}>روشتات</Link>
                                        <Link to='/papers/31/' className="dropdown-item text-right" onClick={closeDropdown}>ستيكر</Link>
                                        <Link to='/papers/33/' className="dropdown-item text-right" onClick={closeDropdown}>كتالوج</Link>
                                        <Link to='/papers/29/' className="dropdown-item text-right" onClick={closeDropdown}>ليترهيد</Link>
                                        <Link to='/papers/27/' className="dropdown-item text-right" onClick={closeDropdown}>اظرف</Link>
                                        <Link to='/papers/32/' className="dropdown-item text-right" onClick={closeDropdown}>فولدر</Link>
                                        <Link to='/papers/25/' className="dropdown-item text-right" onClick={closeDropdown}>كتب</Link>
                                        <Link to='/papers/28/' className="dropdown-item text-right" onClick={closeDropdown}>دفتر فواتير</Link>
                                          {/* منتحات البانر */}
                                        <Link to={`/bannerproducts/5/`}  className="dropdown-item text-right " onClick={closeDropdown}>ادجستل استاند</Link>
                                        <Link to={`/bannerproducts/10/`} className="dropdown-item text-right" onClick={closeDropdown}>بانر عاكس</Link>
                                        <Link to={`/bannerproducts/23/`} className="dropdown-item text-right" onClick={closeDropdown}>ورق حائط</Link>
                                        <Link to={`/bannerproducts/8/`}  className="dropdown-item text-right" onClick={closeDropdown}>اكس بانر</Link>
                                        <Link to={`/bannerproducts/15/`} className="dropdown-item text-right" onClick={closeDropdown}>ستان</Link>
                                        <Link to={`/bannerproducts/14/`} className="dropdown-item text-right" onClick={closeDropdown}>سي ثرو</Link>
                                        <Link to={`/bannerproducts/9/`}  className="dropdown-item text-right" onClick={closeDropdown}>بانر عادي</Link>
                                        <Link to={`/bannerproducts/17/`} className="dropdown-item text-right" onClick={closeDropdown}>كانفاس</Link>
                                        <Link to={`/bannerproducts/16/`} className="dropdown-item text-right" onClick={closeDropdown}>الفينيل</Link>
                                        <Link to={`/bannerproducts/22/`} className="dropdown-item text-right" onClick={closeDropdown}>ملصق سيارات</Link>
                                        <Link to={`/bannerproducts/7/`}  className="dropdown-item text-right" onClick={closeDropdown}>رول اب</Link>
                                        <Link to={`/bannerproducts/6/`}  className="dropdown-item text-right" onClick={closeDropdown}>بوب اب كامل</Link>
                                        <Link to={'/bannerproducts/13/'} className="dropdown-item text-right" onClick={closeDropdown}>فليكس</Link>
                                        <Link to={`/bannerproducts/12/`} className="dropdown-item text-right" onClick={closeDropdown}>جلوسي</Link>
                                        <Link to={`/bannerproducts/11/`} className="dropdown-item text-right" onClick={closeDropdown}>بانر كوتيد</Link>
                                        <Link to={`/bannerproducts/18/`} className="dropdown-item text-right" onClick={closeDropdown}>برنت اند كات</Link>
                                         {/* اكواب */}
                                        <Link to={`/cups/35/`} className="dropdown-item text-right" onClick={closeDropdown}> اكواب بلاستيك</Link>
                                        <Link to={`/cups/36/`}   className="dropdown-item text-right"   onClick={closeDropdown}>اكواب ورقية</Link>
                                        {/* أكياس */}
                                        <Link to='/bags/37/'   className="dropdown-item text-right" onClick={closeDropdown}>أكياس بلاستيك </Link>
                                        <Link to='/bags/38/' className="dropdown-item text-right" onClick={closeDropdown}>أكياس بن ومكسرات</Link>
                                        <Link to='/bags/40/'      className="dropdown-item text-right" onClick={closeDropdown}>شنط قماش </Link>
                                        <Link to='/bags/39/'      className="dropdown-item text-right" onClick={closeDropdown}>شنط كرافت </Link>
                                        {/* uniform */}
                                        <Link to={`/uniform/`}   className="dropdown-item text-right"   onClick={closeDropdown}>يونيفورم</Link>
                                        {/* <Link to={`/uniform/42/`}   className="dropdown-item text-right"   onClick={closeDropdown}>بولو نص كم</Link>
                                        <Link to={`/uniform/43/`}   className="dropdown-item text-right"   onClick={closeDropdown}>بولو كم</Link>
                                        <Link to={`/uniform/44/`}   className="dropdown-item text-right"   onClick={closeDropdown}>بوكليت </Link>
                                        <Link to={`/uniform/45/`}   className="dropdown-item text-right"   onClick={closeDropdown}>هودي </Link>
                                        <Link to={`/uniform/46/`}   className="dropdown-item text-right"   onClick={closeDropdown}> سويت شيرت سوستة</Link>
                                        <Link to={`/uniform/47/`}   className="dropdown-item text-right"   onClick={closeDropdown}>بوليفار اوفر سايز </Link>
                                        <Link to={`/uniform/48/`}   className="dropdown-item text-right"   onClick={closeDropdown}>بامب </Link>
                                        <Link to={`/uniform/49/`}   className="dropdown-item text-right"   onClick={closeDropdown}>راوند </Link>
                                        <Link to={`/uniform/50/`}   className="dropdown-item text-right"   onClick={closeDropdown}>كاب </Link>
                                        <Link to={`/uniform/51/`}   className="dropdown-item text-right"   onClick={closeDropdown}>مطاعم </Link>
                                        <Link to={`/uniform/52/`}   className="dropdown-item text-right"   onClick={closeDropdown}>تصميمك </Link>
                                        */}
                                       {/* يفط وواجهات -حروف بارزة */}
                                       <Link to={`/panelsandfacades/letters/`}   className="dropdown-item text-right"   onClick={closeDropdown}>حروف بارزة </Link>
                                        {/* <Link to={`/charcters/53/`}   className="dropdown-item text-right"   onClick={closeDropdown}>اكليرك xاكليرك </Link>
                                        <Link to={`/charcters/54/`}   className="dropdown-item text-right"   onClick={closeDropdown}>اكليرك "الوش 2 لون"×اكليرك  </Link>
                                        <Link to={`/charcters/55/`}   className="dropdown-item text-right"   onClick={closeDropdown}>اكليرك×اكليرك وعلية استانلس </Link>
                                        <Link to={`/charcters/56/`}   className="dropdown-item text-right"   onClick={closeDropdown}>استانلس مصمت</Link>
                                        <Link to={`/charcters/57/`}   className="dropdown-item text-right"   onClick={closeDropdown}>استانلس×اكليرك</Link> */}

                                      
                                            {/* <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>كتب كتيبات</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>ملصقات واستيكرات</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>ورق لعب بلوت</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>بنرات</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>مطبوعات</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>باقات</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>اكواب ورقية</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>التغليف</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>ستاندات</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>لوحات ومجسمات</a>
                                            <a className="dropdown-item text-right" href="/" onClick={closeDropdown}>بوكسات</a> */}
                                        </div>
                                    </div>
                                </div>
                                <button type="submit" onClick={handleSearchInputChange} name="submit_search" className={`btn rounded-start-5 text-light ${style.searchbtn}`}>
                                    <i className="fa fa-search"></i>
                                </button>
                            </div>
                        </form>
                    </div>
                    {/* ////// */}
                    <div className="col-lg-4 col-4 d-flex justifiy-content-space-between">
                        <div className="d-flex justifiy-content-space-between text-center me-5">
                            <i className={`fa-regular fa-user fa-2x m-2 ${style.icons}`}></i>
                            <div>
                                <div className={`text-right ${style.logintitle}`}>
                                    <h6>مرحبا بك</h6>
                                    <Link to='/'>تسجيل دخول</Link> / <Link to='/'>تسجيل</Link>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex justifiy-content-space-between me-5'>
                            <i className={`fa-solid fa-bag-shopping fa-2x ${style.icons}`}></i>
                            <div className="me-2">
                                <Link to="/cart" className='text-dark'>السلة</Link>
                                <h6 className='text-danger'>{cart.length}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  Topbar End  */}
        </>
    )
}

export default Topbar;
