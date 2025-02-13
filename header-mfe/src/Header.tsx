
import React from 'react';

const headerStyle: React.CSSProperties = {
  background: '#f0f0f0',
  padding: '1rem',
  color: 'red',
  position: 'fixed',
  top: 0, 
  left: 0,
  width: '100%',
  zIndex: 1000,
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const Header: React.FC = () => {
  return (
    <header style={headerStyle}>
      <h1>Header</h1>
    </header>
  );
};

export default Header;
