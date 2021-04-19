import React, { useRef, useContext } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { AuthenticationConext } from '../App';

function Header() {
  const navigation = useRef();

  const authentication = useContext(AuthenticationConext);

  function clickHandler() {
    navigation.current.classList.toggle('active');
  }

  return (
    <header>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>Gardening blog.</Link>
        </div>
        <div className='toggler' onClick={clickHandler}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className='navbar'>
          <ul className='navbar__menu-items' ref={navigation}>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/about'>About Us</Link>
            </li>
            <li>
              <Link to='/blog'>Blog</Link>
            </li>
            <li>
              <Link to='/contact'>Contact Us</Link>
            </li>
            {authentication.autheticated && (
              <li>
                <Link to='/admin'>✍</Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
