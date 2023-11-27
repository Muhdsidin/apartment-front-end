import React, { useEffect, useState } from 'react';

import $ from 'jquery'
import './Header.css'

function Header() {

  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const handleSubMenuToggle = () => {
    setIsSubMenuOpen(!isSubMenuOpen);
  };
  const [isHamburgerActive, setHamburgerActive] = useState(false);

  const handleHamburgerClick = () => {
    setHamburgerActive(!isHamburgerActive);

  };
  useEffect(() => {
    function header_adj() {
      if ($(window).width() < 767) {

      } else {

      }
    }

    function submenu_toggle() {
      if ($(window).width() < 767) {

      }
    }

    header_adj();
    submenu_toggle();

    $(window).on('resize', () => {
      header_adj();
      submenu_toggle();

    });


    return () => {
      $(window).off('resize');

    };
  }, []);

  return (
    <div>
      <header className="header">
        <div className="container">
          <div className="row-wrap">
            <div className="logo-wrap">
              <span className="logo" data-aos='zoom-in'>LOGO</span>
            </div>
            <div className={`nav-wrap ${isHamburgerActive ? 'is-open' : ''}`}>
              <ul className="nav-list">
              <li className="none-hid"><a href="/buildings">Upload Buildings</a></li>
                <li className="none-hid"><a href="/room">Upload Rooms</a></li>
              <li className="none"><a href="/">Home</a></li>
                
              
               
                
               
                
                <li className="with-submenu" onClick={handleSubMenuToggle}>
                  <a href="#">Blog</a>
                  {isSubMenuOpen && (
                    <div className="submenu">
                      <ul className="submenu-inner">
                        <li><a href="/buildings">Upload Buildings</a></li>
                        <li><a href="/room">Upload Rooms</a></li>
                        <li><a href="#">View Rooms</a></li>
                      </ul>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div className={`hamburger ${isHamburgerActive ? 'is-active' : ''}`} onClick={handleHamburgerClick}>
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </div>
          </div>
        </div>
      </header>
      <div className={`overlay ${isHamburgerActive ? 'sidebar-open' : ''}`}></div>
    </div>

  );
}

export default Header;
