import React from 'react';

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Contact</a></li>
        <div className="dropdown">
          <li className="dropdown-btn">Sort By Item
            <i className="fa fa-caret-down"></i>
          </li>
          <div className="dropdown-content">
            <a href="#">Laptop</a>
            <a href="#">Home appliances</a>
            <a href="#">Children</a>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
