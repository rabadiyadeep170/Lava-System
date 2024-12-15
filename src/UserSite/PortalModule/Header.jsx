// src/components/Header.js

import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-left">
        <h1 className="logo">My Portal</h1>
      </div>
      <div className="header-right">
        <FaUserCircle size={30} />
        <span className="username">{
          localStorage.getItem("Email") 
          }</span>
      </div>
    </header>
  );
};

export default Header;
