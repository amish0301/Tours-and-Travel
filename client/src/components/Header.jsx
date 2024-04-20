import React, { useState } from 'react'
import logo from '../assets/travel-logo.jpg'
import { Link, NavLink } from 'react-router-dom';

const nav_links = [
  {
    path: '/home',
    name: 'Home',
  },
  {
    path: '/tours',
    name: 'Tours',
  },
  {
    path: '#',
    name: 'About',
  },
  {
    path: '/contact',
    name: 'Contact',
  }
];


const Header = () => {

  return (
    <nav className='contianer py-2 mb-5'>
      <div className='max-w-screen-xxl flex justify-between align-center flex-wrap items-center p-4'>
        <a href="/home" className='flex items-center space-x-3'>
          <img src={logo} alt="logo" className='h-8' />
          <span className='self-center text-xl font-semibold whitespace-nowrap'>Travellers</span>
        </a>
        <ul className='font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white light:bg-gray-800 light:border-gray-700'>
          {
            nav_links.map((val,index) => (
              <li key={val.path} onClick={() => console.log(index)}>
                <NavLink to={val.path} className='block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:to-blue-400 light:hover:text-white md:dark:hover:bg-transparent nav-link' >{val.name}</NavLink>
              </li>
            ))
          }
        </ul>
        <div className='md:flex-col space-x-2 font-medium md:order-2'>
          <button type='button' className='secondary-btn'>
            <Link to={'/login'}>Login</Link>
          </button>
          <button type='button' className='primary-btn'>
            <Link to={'/signup'}>SignUp</Link>
          </button>
        </div>

        {/* logic for mobile menu  */}
        <div className='lg:hidden'>
          <button id="menu-toggle" class="lg:hidden focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path class="hidden" id="close-icon" fill-rule="evenodd" clip-rule="evenodd" d="M19.413 6.215a.737.737 0 010 1.048l-4.645 4.642 4.645 4.642a.737.737 0 11-1.048 1.048l-4.645-4.642-4.642 4.642a.737.737 0 01-1.048-1.048l4.642-4.642-4.642-4.645a.737.737 0 111.048-1.048l4.642 4.642 4.645-4.642a.737.737 0 111.048 0z" />
              <path class="block" id="open-icon" fill-rule="evenodd" clip-rule="evenodd" d="M2.737 6.215a.737.737 0 011.048 0l4.65 4.642L13.085 6.22a.737.737 0 111.048 1.048l-5.793 5.79a.737.737 0 01-1.048 0L2.737 7.263a.737.737 0 010-1.048z" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Header