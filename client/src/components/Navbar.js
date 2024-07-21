import React, { useState} from 'react';
import './../styles/navstyle.css';
import { Link } from 'react-router-dom';
import HamburgerMenuOpen from './../imgvid/nav/hamburger-lg.svg';
import Logo from './../imgvid/nav/logo.png';
import HamburgerMenuClose from './../imgvid/nav/close-fill.svg';

function NavBar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div  to="/" className="nav-logo">
             <a href='/'> <img src={Logo} alt="logo1"/></a>
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <Link to="/" className="nav-links"  onClick={handleClick}>
                  Home
                </Link>
              </li>
              {/* <li className="nav-item">
                <a href="/#frokie-ai"  className="nav-links" onClick={handleClick}>
                  Frokie AI
                </a>
              </li> */}
              {/* <li className="nav-item">
                <a href="/#froker-users" className="nav-links"  onClick={handleClick}>
                  Users
                </a>
              </li>
              <li className="nav-item">
              <a href="/#froker-creators" className="nav-links"  onClick={handleClick}>
                  Frokers
                </a>
              </li>
              <li className="nav-item">
                <a href="/#froker-merchants" className="nav-links"  onClick={handleClick}>
                  Merchants
                </a>
              </li> */}
              <li className="nav-item">
                <Link to="/blogs" className="nav-links"  onClick={handleClick}>
                  Blogs
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/froker" className="nav-links"  onClick={handleClick}>
                  Discover Froker
                </Link>
              </li>
            </ul>
          <div className="nav-icon" onClick={handleClick}>
            {click ? (
                <img src={HamburgerMenuClose} alt="close" style={{width:"100%"} } />
            ) : (
              <img src={HamburgerMenuOpen} alt="open" style={{width:"100%"}} />
            )}
          </div>
        </div>
      </nav>
    </>
  );
}
export default NavBar;