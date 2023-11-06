import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
      <a href="">Home</a>
      <a href="">About</a>
      <a href="">Contact</a>
        <div className="dropdown">
        <div class="dropdown">
    <button class="dropbtn">Dropdown
      <i class="fa fa-caret-down"></i>
    </button>
    <div class="dropdown-content">
      <a href="#">Laptop</a>
      <a href="#">Television</a>
      <a href="#">Home Appliances</a>
      <a href="#">Mobile Phone</a>
    </div>
  </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
