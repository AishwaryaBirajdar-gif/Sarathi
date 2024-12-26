import React from 'react';

const NavbarComponent = () => {
  return (
    <nav className="bg-blue-600 bg-opacity-80 text-white py-4 px-6 border rounded">

      <ul className="flex justify-between items-center">
        <li className="text-lg font-bold">Logo</li>
        <div className="flex gap-4">
          <li><a href="/" className="hover:text-gray-300">Home</a></li>
          <li><a href="/donor" className="hover:text-gray-300">Donor</a></li>
          <li><a href="/organization" className="hover:text-gray-300">Organization</a></li>
          <li><a href="/signup" className="hover:text-gray-300">Signup</a></li>
          
        </div>
      </ul>
    </nav>
  );
};

export default NavbarComponent;
