import React, { useState } from 'react';

import { GiHamburgerMenu } from "react-icons/gi"
import { MdOutlineRestaurantMenu } from "react-icons/md"

import images from "../../constants/images"

import './Navbar.css';



const Navbar = () => {

  const [toggleMenu, setToggleMenu] = useState(false)
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
        <img src={images.gericht} alt="app logo" />
      </div>
      <ul className='app__navbar-links'>
        <li className='p__openSans'><a href="#home">Home</a></li>
        <li className='p__openSans'><a href="#about">About</a></li>
        <li className='p__openSans'><a href="#menu">Menu</a></li>
        <li className='p__openSans'><a href="#awards">Awards</a></li>
        <li className='p__openSans'><a href="#contact">Contact</a></li>
      </ul>

      <div className='app__navbar-login'>
        <a href="#login" className='p__openSans'>LogIn / Register</a>
        <div />
        <a href="/" className='p__openSans'>Book Table</a>

      </div>

      <div className='app__navbar-smallScreen'>
        <GiHamburgerMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(true)} />


        {
          toggleMenu && (
            <div className='app__navbar-smallScreen_overlay flex_center slide-bottom'>
              <MdOutlineRestaurantMenu color="#fff" fontSize={24} onClick={() => setToggleMenu(false)} className='overlay__close' />
              <ul className='app__navbar-smallScreen_links'>

                <li className='p__openSans'><a href="#home">Home</a></li>
                <li className='p__openSans'><a href="#about">About</a></li>
                <li className='p__openSans'><a href="#menu">Menu</a></li>
                <li className='p__openSans'><a href="#awards">Awards</a></li>
                <li className='p__openSans'><a href="#contact">Contact</a></li>
              </ul>
            </div>
          )
        }


      </div>
    </div>
  )
}

export default Navbar
