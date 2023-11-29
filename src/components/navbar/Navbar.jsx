import React from 'react';
import { NavbarContainer, Logo, LinkContainer } from './NavbarStyled';
import LinksItems from '../links/LinksItems';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';


const Navbar = () => {

  return (

    <NavbarContainer>
    <Logo onClick={() => scroll.scrollToTop()} src='https://res.cloudinary.com/dgyubvlec/image/upload/v1701263592/am_tgsigg.png'/>
      
    <LinkContainer>

      <LinksItems to="about" smooth={true} duration={500}>
        About me
      </LinksItems>
      <LinksItems to="skills" smooth={true} duration={500}>
        Skills
      </LinksItems>
      <LinksItems to="projects" smooth={true} duration={500}>
        Projects
      </LinksItems>
      <LinksItems to="contact" smooth={true} duration={500}>
        Contact
      </LinksItems>
    </LinkContainer>
  </NavbarContainer>
  );
};

export default Navbar;
