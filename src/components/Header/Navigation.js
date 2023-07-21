import React from 'react';
import { Link } from 'react-router-dom';

// The Navigation component
const Navigation = () => (
  <nav className="p-6">
    <ul className="flex space-x-4">
      <li>
        <Link to="/page1" className="text-black no-underline">Page 1</Link>
      </li>
      <li>
        <Link to="/page2" className="text-black no-underline">Page 2</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
