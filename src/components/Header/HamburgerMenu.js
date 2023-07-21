import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button 
        className={`hamburger hamburger--squeeze ${isOpen && "is-active"}`}
        type="button" 
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner"></span>
        </span>
      </button>

      {isOpen && (
        <div className="absolute bg-white top-40 left-0 h-full min-h-screen w-64 pl-5 pr-5 overflow-auto border-r border-gray-200">
          <ul className="space-y-4 text-lg">
            <hr></hr>
            <li><Link to="/page1" onClick={() => setIsOpen(false)}>Page 1</Link></li>
            <hr></hr>
            <li><Link to="/page2" onClick={() => setIsOpen(false)}>Page 2</Link></li>
            <hr></hr>
          </ul>
        </div>
      )}
    </>
  );
};

export default HamburgerMenu;
