// src/components/Layout/Layout.js
import React from 'react';
import Header from '../Header/Header';

// The Layout component
const Layout = ({ children }) => (
  <>
    <Header />
    <main className="pt-40 sm:pt-36 md:pt-36 lg:pt-32 xl:pt-36">
      {children}
    </main>
  </>
);

export default Layout;
