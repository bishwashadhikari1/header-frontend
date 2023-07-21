// Header.js
import React, { useState } from 'react';
import Logo from './Logo';
import Navigation from './Navigation';
import SearchBar from './SearchBar';
import UserIcon from './UserIcon';
import Community from './Community';
import HamburgerMenu from './HamburgerMenu'; 

// The Header component
const Header = () => {
  // Using useState to handle login status
  const [user, setUser] = useState(null);

  // This function will be passed down to the UserIcon component to handle login/logout events
  const handleLoginLogout = () => setUser(user ? null : { icon: 'url-to-user-icon' });

  return (
    <header className="relative sticky top-0 z-50 flex justify-between items-center p-4 text-grey shadow">
      {/* Hamburger menu */}
      <HamburgerMenu />

      {/* Logo */}
      <Logo />

      {/* Search bar */}
      <SearchBar />

      {/* Navigation */}
      <Navigation />

      {/* Community icon */}
      <Community />

      {/* User icon or login/signup */}
      <UserIcon user={user} handleLoginLogout={handleLoginLogout} />
    </header>
  );
};

export default Header;
