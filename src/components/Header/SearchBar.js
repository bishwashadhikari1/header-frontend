import React, { useState, useEffect, useRef } from 'react';
const SearchBar = ({setSearchActive}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isActive, setIsActive] = useState(false);

  const searchRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false);
        setSearchActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [setSearchActive]);


  return (
    <div ref={searchRef}>
      <div className={`sm:flex items-center rounded-full border px-3 py-2 ${isActive ? 'block' : 'hidden'}`}>
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
      <div className={`sm:hidden ${isActive ? 'hidden' : 'block'} cursor-pointer`}>
        <i className="fas fa-search" onClick={() => {setIsActive(true); setSearchActive(true);}}></i>
      </div>
    </div>
  );
};

export default SearchBar;

