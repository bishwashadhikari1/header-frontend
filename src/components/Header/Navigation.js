import React from 'react';

// The Navigation component
const Navigation = () => (
  <nav className="p-6">
    <ul className="flex space-x-4">
      <li>
        <a href="/page1" className="text-black no-underline">Page 1</a>
      </li>
      <li>
        <a href="/page2" className="text-black no-underline">Page 2</a>
      </li>
    </ul>
  </nav>
);

export default Navigation;
