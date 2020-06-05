import React from 'react';

import './App.css';

interface HeaderProps {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
   
  <h1>{title}</h1>
    
  );
}

export default Header;
