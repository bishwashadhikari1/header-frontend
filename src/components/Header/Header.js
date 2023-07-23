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
  const [searchActive, setSearchActive] = useState(false);

  // This function will be passed down to the UserIcon component to handle login/logout events
  const handleLoginLogout = () => setUser(user ? null : { icon: 'url-to-user-icon' });

  return (
    <>
      <header className="fixed top-0 z-50 bg-white flex justify-between items-center p-4 shadow w-full">
        {/* Hamburger menu */}
        <div className={`sm:block ${searchActive ? 'hidden' : 'block'}`}>
          <HamburgerMenu />
        </div>

        {/* Logo */}
        <div className={`sm:block ${searchActive ? 'hidden' : 'block'}`}>
          <Logo />
        </div>

        {/* Search bar */}
        <div className={`flex justify-center ${searchActive ? 'w-full' : ''}`}>
          <SearchBar setSearchActive={setSearchActive} />
        </div>

        {/* Navigation */}
        <div className={`hidden sm:flex ${searchActive ? 'hidden' : 'block'}`}>
          <Navigation />
        </div>

        {/* Community icon */}
        <div className={`sm:block ${searchActive ? 'hidden' : 'block'}`}>
          <Community />
        </div>

        {/* User icon or login/signup */}
        <div className={`sm:block ${searchActive ? 'hidden' : 'block'}`}>
          <UserIcon user={user} handleLoginLogout={handleLoginLogout} />
        </div>
      </header>
      
      {/* Subheader for small screens */}
      <header className="fixed top-16 z-40 bg-white flex justify-center items-center p-2 sm:p-1 shadow w-full sm:hidden">
        <Navigation />
      </header>
    </>
  );
};

export default Header;

