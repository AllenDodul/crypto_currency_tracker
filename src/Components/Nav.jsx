import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#CF7D56] text-xl'>Crypto Currency Tracker</h1>
        <div>
          <Link className='p-[5px]' to="/">Home</Link>
          <Link className='p-[5px]' to="track">Track</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;