import React from 'react';
import {AiFillCaretDown} from 'react-icons/ai'

function Navbar({ onSortChange }) {
  return (
    <nav className="navbar">
      <ul>
      <a href="">Home</a>
      <a href="">About</a>
      <div className="dropdown">
    <button class="dropbtn">Contact</button>
    <div class="dropdown-content">
      <a target='_blank' href="https://www.linkedin.com/in/akshay-simha-l-n-4a492a246/">AKSHAY SIMHA L N email: akshaysimha04@gmail.com</a>
      <a target='_blank'  href="https://www.linkedin.com/in/anikait-mohan-937288227/">ANIKAIT NANJUNDAPPA email: anikaitmohan04@gmail.com</a>
      <a target='_blank' href="https://www.linkedin.com/in/ashish-chandra-293355292/">ASHISH CHANDRA K email: ashish.chandra022@gmail.com</a>
      <a  target='_blank'href="">ANISH D B email:@gmail.com</a>
    </div>
    </div>
    <div className="dropdown">
    <button class="dropbtn">Sort By
      <AiFillCaretDown className='drop-down-icon'/>
    </button>
    <div className="dropdown-content">
            <a href="#" onClick={() => onSortChange("TV")}>
              Television
            </a>
            <a href="#" onClick={() => onSortChange("Laptop")}>
              Laptop
            </a>
            <a href="#" onClick={() => onSortChange("HomeApp")}>
              Home Appliances
            </a>
            <a href="#" onClick={() => onSortChange("Electronics")}>
              Electronic Gadgets
            </a>
            <a href="#" onClick={() => onSortChange("Console")}>
              Gaming
            </a>
  </div>
  </div>
        
      </ul>
    </nav>
  );
}

export default Navbar;
