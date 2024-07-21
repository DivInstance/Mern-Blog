import React, {useEffect} from 'react';
import './../styles/footer.css';
//import base from './../imgvid/base.svg';
//import basem from './../imgvid/basem.svg';
import { FaSquareInstagram } from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import { FaTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { Link, useLocation  } from 'react-router-dom';

const Footer = () => {

  const location = useLocation(); 

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);


  return (
    <div>
      <div className="footer-columns">

            <div className="column1">
              <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009704/Frokerassets/black-logo-frokerr-copy-10_pwpomg.jpg'} alt="Company Logo" />
            </div>
          <div class="child">
            <div className="column2">
              <div className="contact11">
                <h4>Quicklink</h4>
              </div>
              <div className="row">
                <span><img class="arr" src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg'} alt='img' /></span>
                {
                  location.pathname === "/" ? <span onClick={()=> window.scrollTo(0, 0)} className="home" style={{cursor:'pointer'}}>Home</span> : <Link to="/" className="home" >Home</Link>
                }
              </div>
              <div className="row">
              <span><img class="arr" src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg'} alt='img'/></span>
                <Link to="/about-us" className="home" >About us</Link>
              </div>

              <div className="row">
              <span><img className="arr" src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg'} alt='img'/></span>
                <Link to="/privacy-policy" className="home">Privacy policy</Link>
              </div>

              <div className="row">
              <span><img className="arr" src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009705/Frokerassets/arrow_wxeel0.jpg'} alt='img'/></span>
                <Link to="/terms-and-conditions" className="home">Terms & Conditions</Link>
              </div>

            </div>

            <div className="column3">
            <div className="contact1">
            <h4>Contacts</h4>
            </div>
              <div className="address">
              <span><a  target='_blank' rel="noreferrer" href="https://www.google.com/maps/place/Froker/@12.9556403,77.7202612,15z/data=!4m6!3m5!1s0x3bae13d152fd68ed:0x7427946171c830c1!8m2!3d12.9556403!4d77.7202612!16s%2Fg%2F11stskm2hv?entry=ttu"><HiLocationMarker color='#F76F32' size="24px" className='som'/></a></span>
                <span className="whitefield-bengaluru-560066">
                  Whitefield, Bengaluru, 560066</span>
              </div>

              <div className="maiil">
                <span><a href="mailto:Support@Froker.In"><IoIosMail color='#F76F32' size="24px" className='som'/></a></span>
                <span><div className="whitefield-bengaluru-560066">
                support@froker.in</div></span>
              </div>
              
              <div className="social-media">
                <a href="https://twitter.com/FrokerSocial" target='_blank' rel="noreferrer"><FaTwitter color='#F76F32' size="24px" className='som'/></a>
                <a href="https://www.linkedin.com/company/froker/" target='_blank' rel="noreferrer"><FaLinkedin color='#F76F32' size="24px" className='som'/></a>
                <a href="https://www.facebook.com/profile.php?id=100090044834703&mibextid=YMEMSu" target='_blank' rel="noreferrer"><FaFacebook color='#F76F32' size="24px" className='som'/></a>
                <a href="https://www.instagram.com/frokerofficial/" target='_blank' rel="noreferrer"><FaSquareInstagram color='#F76F32' size="24px" className='som'/></a>
                <a href="https://www.youtube.com/@frokerofficial" target='_blank' rel="noreferrer"><IoLogoYoutube color='#F76F32' size="24px" className='som'/></a>
              </div>
            </div>
          </div>

            <div className="column4">
              <div className="scan-to-download1">
                <h4>Scan To Download</h4>
              </div>
                <img src={'https://res.cloudinary.com/dapbrn8a9/image/upload/q_auto:low/v1706009706/Frokerassets/froker-1-3-10_pb9yln.jpg'} className="qr" alt="QR Code" />
            </div>
      </div>

      <div className="des">
        <div className="position-relative">
          //<img src={base} className='footersvg' alt="Footer SVG" />
          <div className="centered-text">
            <span className="design">
              © 2024 Arroz Technology. All rights reserved
            </span>
          </div>
        </div>
    </div>

    <div className="desa">
        <div className="position-relativem">
          //<img src={basem} className='footersvgm' alt="Footer SVG" />
          <div className="centered-textm">
            <span className="designm">
              © 2024 Arroz Technology. All rights reserved
            </span>
          </div>
        </div>
    </div>
  </div>
  );
};

export default Footer;
