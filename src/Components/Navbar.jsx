import React from 'react';
import spices_white from '../assets/spices_white.png';
import search_icon_light from '../assets/search-b.png';
import { ShoppingCartIcon } from './Icons';
import { BsPersonFill } from "react-icons/bs";
import '../index.css';

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={spices_white} alt="Logo" className="logo"/>
      <ul>
        <li>Home</li>
        <li>Products</li>
        <li>Customize</li>
        <li>About us</li>
        <li>Contact Us</li>
      </ul>
      <div className='searchbox'>
        <input type="text" placeholder='Search'/>
        <img src={search_icon_light} alt="" className='Search_button'/>
      </div>
      
      <div className='right-navbar'>
      <ShoppingCartIcon className="Navbar-icon" />
      <BsPersonFill  className="Navbar-icons"/>
      <div className='login-text'>Login/Sign up</div>
    </div>
    </div>
  )
}

export default Navbar;
