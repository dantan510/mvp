import React from 'react';
import { Link } from 'react-router-dom';

import '../App.css';
import gymLogo from '../images/gymLogo.jpg'


const NavBar = () => {
  return (
    <div className='navbar-container'>
      <Link>
        <img id='gymLogo' src={gymLogo} alt='gym logo'/>
      </Link>
      <div id='navbar-links'>
        <Link to='/home' className='links'>Home</Link>
        <Link to='/log' className='links'>Workout Log</Link>
        <Link to='/entry' className='links'>Workout Entry</Link>
      </div>
    </div>
  )
}

export default NavBar;