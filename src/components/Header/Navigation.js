import React from 'react';
import { Link } from 'react-router-dom';

// The Navigation component
const Navigation = () => (
  <nav className="p-6">
    <ul className="flex space-x-4 items-center">
      <li>
        <Link to="/page1" className="text-black no-underline">ファンクラブを始める</Link>
      </li>
      <li className="mx-2 md:block lg:hidden">
        <div className="border border-gray-500 h-4"></div>
      </li>
      <li>
        <Link to="/page2" className="text-black no-underline">ファンクラブを探す</Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
