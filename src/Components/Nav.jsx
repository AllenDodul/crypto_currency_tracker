import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <div>
      <div className='flex items-center justify-between flex-wrap'>
        <h1 className='text-[#CF7D56] text-xl'>Crypto Tracker</h1>
        <div className=' flex items-center justify-center'>
          <Link className='p-[5px]' to="/">Home</Link>
          <Link className='p-[5px]' to="track">Track</Link>
          <Link className='p-[5px]' to="news">News</Link>
        </div>
      </div>
    </div>
  )
}

export default Nav;