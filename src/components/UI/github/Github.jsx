import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Github = ({href}) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <FaGithub
        style={{
          height: '35px',
          width: '35px',
          padding: '5px',
          border: '1px solid var(--oliva)',
          borderRadius: '10px',
          cursor: 'pointer',
        }}
      />
    </a>
  );
};

export default Github;
