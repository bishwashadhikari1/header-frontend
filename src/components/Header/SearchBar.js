import React from 'react';

// The SearchBar component
const SearchBar = () => (
  <div className="rounded-full border px-3 py-2 flex justify-between items-center">
    <input className="outline-none" type="text" placeholder="Search" />
    <i className="fas fa-search"></i>
  </div>
);

export default SearchBar;
