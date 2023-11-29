import React from 'react';
import { LinkItemStyled } from './LinksItemsStyled';

const LinksItems = ({ to, children }) => {
  return (
    <LinkItemStyled
      className={({ isActive }) => (isActive ? 'active' : ' ')}
      to={to}
    >
      {children}
    </LinkItemStyled>
  );
};

export default LinksItems;