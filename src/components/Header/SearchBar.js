import React, { useState, useEffect, useRef } from 'react';

const SearchBar = ({setSearchActive}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 960);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false);
        setSearchActive(false);
      }
    }

    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth <= 960);
    }

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener('resize', handleWindowResize);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener('resize', handleWindowResize);
    }
  }, [setSearchActive]);

  return (
    <div ref={searchRef}>
      <div className={`md:flex items-center rounded-full border px-3 py-2 ${isActive && !isMobileView ? 'block' : 'hidden'}`}>
        <input 
          className="outline-none" 
          type="text" 
          placeholder="Search"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)} 
        />
        {searchTerm ? 
          <i className="fas fa-times cursor-pointer" onClick={() => setSearchTerm('')}></i> : 
          <i className="fas fa-search"></i>
        }
      </div>
      <div className={`md:hidden ${isActive || isMobileView ? 'block' : 'hidden'} cursor-pointer`}>
        <i className="fas fa-search" onClick={() => {setIsActive(true); setSearchActive(true);}}></i>
      </div>
    </div>
  );
};

export default SearchBar;
