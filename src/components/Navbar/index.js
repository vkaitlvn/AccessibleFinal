import React, { useState, useEffect } from 'react';
import { animateScroll as scroll } from 'react-scroll';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavBtnLink,
  NavBtn
} from './NavbarElements';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
        <Nav scrollNav={scrollNav} role="navigation">

          <NavbarContainer>
            <NavLogo onClick={toggleHome} to='/'>
              Siegfried's Accessible Site
            </NavLogo>

          
            <NavMenu>
              <NavBtn role="button">
                <NavBtnLink to='/'>Home</NavBtnLink>
              </NavBtn>

              <NavBtn role="button">
                <NavBtnLink to='/Hall'>Hall of Fame</NavBtnLink>
              </NavBtn>

              <NavBtn role="button">
                <NavBtnLink to='/handyinventions'>Handy Inventions</NavBtnLink>
              </NavBtn>
              
            </NavMenu>

           
          </NavbarContainer>
        </Nav>
    </>
  );
};

export default Navbar;
