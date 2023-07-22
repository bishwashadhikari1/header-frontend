import React, { useState, useEffect, useRef } from 'react';

// The SearchBar component
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');  // State to store the search term
  const [isActive, setIsActive] = useState(false); // State to store if search bar is active

  const searchRef = useRef(null);

  // Detect click outside searchbar to close it
  useEffect(() => {
    const handleClickOutside = event => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setIsActive(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [searchRef]);

  return (
    <div className={`flex items-center rounded-full border px-3 py-2 sm:flex ${isActive ? 'flex' : 'hidden'}`} ref={searchRef}>
      <input 
        className="outline-none" 
        type="text" 
        placeholder="Search"
        value={searchTerm}  // Controlled input value
        onChange={e => setSearchTerm(e.target.value)}  // Update state on input change
      />
      {searchTerm ? 
        <i className="fas fa-times cursor-pointer" onClick={() => setSearchTerm('')}></i> :  // If searchTerm is not empty, display cross icon
        <i className="fas fa-search"></i>  // If searchTerm is empty, display search icon
      }
      <div className={`sm:hidden ${isActive ? 'hidden' : 'block'} cursor-pointer`}>
        <i className="fas fa-search" onClick={() => setIsActive(true)}></i>
      </div>
    </div>
  );
};

export default SearchBar;
