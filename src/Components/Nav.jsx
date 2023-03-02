import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <h1>Crypto Currency Tracker</h1>
      <Link to="/">Home</Link>
      <Link to="track">Track</Link>
    </div>
  )
}

export default Nav;