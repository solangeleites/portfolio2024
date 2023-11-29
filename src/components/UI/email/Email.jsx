import React from 'react';
import { BiLogoGmail } from 'react-icons/bi';
const Email = () => {
  return (
    <BiLogoGmail
      style={{
        height: '35px',
        width: '35px',
        padding: '5px',
        border: '1px solid var(--oliva)',
        borderRadius: '10px',
        cursor: 'pointer',

      }}
    />
  );
};

export default Email;
