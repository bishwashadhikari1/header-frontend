import React, { useState } from 'react';

// The SearchBar component
const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');  // State to store the search term

  return (
    <div className="rounded-full border px-3 py-2 flex justify-between items-center">
      <input 
        className="outline-none" 
        type="text" 
        placeholder="Search"
        value={searchTerm}  // Controlled input value
        onChange={e => setSearchTerm(e.target.value)}  // Update state on input change
      />
      {searchTerm ? 
        <i className="fas fa-times" onClick={() => setSearchTerm('')}></i> :  // If searchTerm is not empty, display cross icon
        <i className="fas fa-search"></i>  // If searchTerm is empty, display search icon
      }
    </div>
  );
};

export default SearchBar;
