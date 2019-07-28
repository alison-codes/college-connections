import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {


  let nav = props.user ?
    <div>
    <span className='NavBar-welcome'>Welcome, {props.user.displayName}</span>
      &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='' onClick={props.handleLogout} className='NavBar-link'>LOG OUT</Link>
    </div>
    :
    <div className='NavBar-line'>
      <Link to='/login' className='NavBar-link'>LOG IN</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
    <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;