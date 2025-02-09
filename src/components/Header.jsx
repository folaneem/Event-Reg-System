// Contains the logo, tabs, and profile picture 
import React, { useState } from 'react';
import dots from '../assets/image/dots.png';
import avatarImage from '../assets/image/avataaars (2).png';

function Header({ activeTab, setActiveTab }) {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
    console.log('Dropdown visibility:', !dropdownVisible); // Log the new visibility state
  };

  return (
    <header className="px-8 py-4 flex items-center justify-between border-b">
      <img src={dots} alt="logo" className="w-6 h-6" />
      <div className="flex gap-2 bg-gray-100 rounded-full p-1">
        <button
          onClick={() => setActiveTab('available')}
          className={`px-4 py-2 rounded-full text-sm ${activeTab === 'available' ? 'bg-purple-900 text-white' : 'text-gray-600'
            }`}
        >
          Available Events
        </button>
        <button
          onClick={() => setActiveTab('registered')}
          className={`px-4 py-2 rounded-full text-sm ${activeTab === 'registered' ? 'bg-purple-900 text-white' : 'text-gray-600'
            }`}
        >
          Registered Events
        </button>
      </div>
      <div className="relative right-20">
        <a onClick={toggleDropdown}>
          <img src={avatarImage} alt="Avatar" className="w-10 h-10 rounded-full border-4 border-gray-300" />
        </a>
        {dropdownVisible && (
          <div className="absolute left-10 top-2 bg-white shadow-md rounded-md">
            <button onClick={() => {/* Handle Profile action */}} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Profile</button>
            <button onClick={() => {/* Handle Logout action */}} className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</button>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;