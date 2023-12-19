import React from 'react'
import Dropdown from './Dropdown'
const TopNavbar = () => {
  return (
    <div className="p-4 mx-16 w-full bg-white flex items-center">
      <p>Filters</p>
      <Dropdown />
    </div>
  );
}

export default TopNavbar