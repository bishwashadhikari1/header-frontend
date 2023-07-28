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
      <header className="fixed top-0 z-50 bg-white flex items-center p-4 shadow w-full">
        {/* Left group (Hamburger menu, Logo, and Search bar) */}
        <div className={`flex items-center space-x-4 ${searchActive ? 'w-full' : ''}`}>
          {/* Hamburger menu */}
          <div className={`sm:block ${searchActive ? 'hidden' : 'block'}`}>
            <HamburgerMenu />
          </div>

          {/* Logo */}
          <div className={`sm:block ${searchActive ? 'hidden' : 'block'}`}>
            <Logo />
          </div>

          {/* Search bar */}
          <div className="flex justify-center">
            <SearchBar setSearchActive={setSearchActive} />
          </div>
        </div>

        {/* Navigation */}
        <div className={`hidden sm:flex ml-8 ${searchActive ? 'hidden' : 'block'}`}>
          <Navigation />
        </div>

        {/* Right group (Community icon and User icon or login/signup) */}
        <div className={`ml-auto flex items-center space-x-4 ${searchActive ? 'hidden' : ''}`}>
          {/* Community icon */}
          <div className="sm:block">
            <Community />
          </div>

          {/* User icon or login/signup */}
          <div className="sm:block">
            <UserIcon user={user} handleLoginLogout={handleLoginLogout} />
          </div>
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
