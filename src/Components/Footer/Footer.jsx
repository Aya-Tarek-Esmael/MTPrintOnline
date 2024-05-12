import React, { useEffect, useState } from 'react'
import logo from '../../assets/MTBLOGO.png'
function Footer() {

    const [isShown, setIsShown] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        if (window.pageYOffset > 20) {
          setIsShown(true);
        } else {
          setIsShown(false);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    };



  return (

    <>
    <footer id="footer">
      <div className="container">
        <div className="row">
         
          <div className="col-md-3">
            <div className="useful-link mt-4">
              <h2>Useful Links</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
              <div className="use-links">
                <li><a href="index.html"><i className="fa-solid fa-angles-right"></i> Home</a></li>
                <li><a href="about.html"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
                <li><a href="gallery.html"><i className="fa-solid fa-angles-right"></i>Home</a></li>
                <li><a href="contact.html"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="useful-link mt-4">
              <h2>Useful Links</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="img-fluid" />
              <div className="use-links">
                <li><a href="index.html"><i className="fa-solid fa-angles-right"></i> Home</a></li>
                <li><a href="about.html"><i className="fa-solid fa-angles-right"></i> About Us</a></li>
                <li><a href="gallery.html"><i className="fa-solid fa-angles-right"></i>Home</a></li>
                <li><a href="contact.html"><i className="fa-solid fa-angles-right"></i> Contact</a></li>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="address mt-4">
              <h2>Address</h2>
              <img src="./assets/images/about/home_line.png" alt="" className="img-fluid "/>
              <div className="address-links">
                <li className="address1"><i className="fa-solid fa-location-dot"></i> Egypt ,bla bla bla</li>
                   <li><a href=""><i className="fa-solid fa-phone"></i> +91 90904500112</a></li>
                   <li><a href=""><i className="fa-solid fa-envelope"></i> mail@1234567.com</a></li>
              </div>
            </div>
          </div>

                 <div className="col-md-3">
            <a href="index.html">
                <img src={logo} alt="" className="img-fluid logo-footer m-0"/>
                </a>
                      <div className="footer-about">
                          <p>Lorem Ipsum is simply dummy text  the  printing  standard dummy text ever since the 1500s.  </p>
                      </div>

                     <div className="social-links">
                       <h2>Follow Us</h2>
                       <div className="social-icons">
                        <li><a href=""><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-linkedin-in"></i></a></li>
                        <li><a href=""><i className="fa-brands fa-twitter"></i></a></li>

                     </div>
                    </div>
                      
          </div>  
        </div>
      </div>

    </footer>
     {/* footer section end  */}
     {/* footer copy right section start  */}
    <section id="copy-right">
      <div className="copy-right-sec"> 
       جميع الحقوق محفوظة لموقع <a href="#">مطبعة</a>  <i className="fa-solid fa-copyright"></i> 2024
      </div>
    </section>
    {/*  footer copy right section end */}
    {/* Footer End  */}

     {/* Back to Top  */}
     {isShown && (<a href="#" className="btn btn-dark back-to-top" onClick={scrollToTop}><i className="fa fa-angle-double-up"></i></a>)}
    </>
  )
}

export default Footer
