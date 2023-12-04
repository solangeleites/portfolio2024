import styled from 'styled-components';

import { tablet, mobile } from '../../queries/mediaQueries';

export const NavbarContainer = styled.nav`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: fixed;
  z-index: 1;
  
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
    display: none;
  }
`;
