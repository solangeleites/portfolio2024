import React from 'react';
import { GrDeploy } from 'react-icons/gr';
const Deploy = ({ href }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <GrDeploy
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

export default Deploy;
