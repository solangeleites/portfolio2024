import styled from 'styled-components';

import { tablet, mobile } from '../../queries/mediaQueries';

export const NavbarContainer = styled.nav`
  height: 82px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  z-index: 1;
  box-shadow: 0px 1px 50px grey;
  
`;
export const Logo = styled.img`
  cursor: pointer;
  height: 80px;
  padding-top: 10px;

  ${mobile} {
    font-size: 18px;
  }
`;
export const LinkContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 500px;

  ${mobile}{
    ${tablet} {
      flex-direction: column;
    position: absolute;
    width: 100%;
    top: 80px;
    right: 0;
    border: 1px solid var(--oliva);
    border-top: none;
    height: calc(100vw - 60px);
    z-index: 5;
    transition: all 0.5s ease-in-out;
    transform: ${(props) =>
      props.isOpen ? 'translateX(0%)' : 'translateX(200%)'};
  }
}`;