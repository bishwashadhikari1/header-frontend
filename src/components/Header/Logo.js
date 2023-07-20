import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';  

// The Logo component
const Logo = () => (
  <Link to="/">
    <img src={logo} height="40" width="100" alt="Logo" />
  </Link>
);

export default Logo;
