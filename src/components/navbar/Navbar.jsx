import React from 'react';
import { NavbarContainer, Logo, LinkContainer } from './NavbarStyled';
import LinksItems from '../links/LinksItems';
import { Link as ScrollLink, animateScroll as scroll } from 'react-scroll';
import MenuToggle from '../menuToggle/MenuToggle';
import { useContext } from 'react';
import { MenuContext } from '../../context/MenuContext';


const Navbar = () => {
  const ctx = useContext(MenuContext);
  return (

    <NavbarContainer >
    <Logo onClick={() => scroll.scrollToTop()} src='https://res.cloudinary.com/dgyubvlec/image/upload/v1701263592/am_tgsigg.png'/>
      
    <LinkContainer  isOpen={ctx.isMenuOpen}>

      <LinksItems to="about" smooth={true} duration={500}>
        About me
      </LinksItems>
      <LinksItems to="skills" smooth={true} duration={500}>
        Skills
      </LinksItems>
      <LinksItems to="proyectos" smooth={true} duration={500}>
        Projects
      </LinksItems>
      <LinksItems to="contact" smooth={true} duration={500}>
        Contact
      </LinksItems>
    </LinkContainer>
    <MenuToggle />
  </NavbarContainer>
  );
};

export default Navbar;
