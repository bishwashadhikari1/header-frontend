// src/components/Layout/Layout.js
import React from 'react';
import Header from '../Header/Header';

// The Layout component
const Layout = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default Layout;
