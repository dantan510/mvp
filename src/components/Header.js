import React from 'react';
import { Link } from 'react-router-dom';

import main from '../images/main.jpg'

const Header = () => {

  return (
    <div className='header-container'>
      <div className='header-main'>
        <div id='header-title'>Get Fit!</div>
        <div className='header-body'>Winners are losers who never quit. So, don't quit!</div>
      </div>
      <Link>
        <img src={main} alt='main logo' id='mainLogo' />
      </Link>
    </div>
  )
}

export default Header;