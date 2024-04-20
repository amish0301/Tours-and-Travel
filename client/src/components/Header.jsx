import React, { forwardRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { MenuIcon as Menu, XIcon as XIcon } from "@heroicons/react/outline";
import Logo from "../assets/travel-logo.jpg";

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
    path: '/about',
    name: 'About',
  },
  {
    path: '#',
    name: 'Contact',
  }
];


const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [pathname, setPathname] = useState('');

  let MyDialogPanel = forwardRef(function (props, ref) {
    return <Dialog.Panel className='md:hidden' ref={ref} {...props} />
  })

  return (
    <nav className="p-3 flex bg-white justify-between items-center">
      <div className="flex items-center flex-shrink-0 mr-6">
        <NavLink to="/home" className='flex items-center space-x-3'>
          <img src={Logo} alt="logo" className='h-8 object-cover max-w-12 max-h-12' />
          <span className='self-center text-xl font-semibold whitespace-nowrap'>Travellers</span>
        </NavLink>
      </div>

      {/* Mobile Menu - hamburger menu */}
      <button className="md:hidden p-2" onClick={() => setIsMobile(!isMobile)}>
        <Menu className="h-6 w-6 text-gray-600" aria-hidden="true" />
      </button>

      {/* all the links */}
      <div className="hidden md:flex gap-5">
        {nav_links.map(link => (
          <NavLink key={link.path} to={link.path} onClick={() => setPathname(link.path)} className={`font-medium hover:text-blue-800 ${pathname === link.path ? 'text-blue-500' : 'text-gray-600'}`}>{link.name}</NavLink>
        ))}
      </div>

      {/* buttons */}
      <div className="hidden md:flex">
        <button type="button" className="secondary-btn">
          <Link to={'/login'}>Login</Link>
        </button>
        <button type="button" className="primary-btn">
          <Link to={'/signup'}>Signup</Link>
        </button>
      </div>

      {/* for Mobile menu */}

      <Transition
        as={Dialog}
        show={isMobile}
        onClose={() => setIsMobile(false)}
      >
        <Transition.Child
          as={MyDialogPanel}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <div className={`fixed inset-0 p-3 bg-white ${isMobile ? 'block' : 'hidden'}`}>
            <div className="flex justify-between items-center">
              <NavLink to="/home" className='flex items-center space-x-3'>
                <img src={Logo} alt="logo" className='h-8 object-cover max-w-12 max-h-12' />
                <span className='self-center text-xl font-semibold whitespace-nowrap'>Travellers</span>
              </NavLink>

              <button className="md:hidden p-2" onClick={() => setIsMobile(!isMobile)}>
                <XIcon className="h-6 w-6 text-gray-600" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6">
              <ul>
                {
                  nav_links.map(link => (
                    <NavLink key={link.path} to={link.path} className={`font-medium block rounded-lg hover:bg-red-500 hover:text-blue-200 m-3 p-3 ${pathname === link.path ? 'text-blue-500' : 'text-gray-600'}`}>{link.name}</NavLink>
                  ))
                }
              </ul>
            </div>
          </div>
        </Transition.Child>
      </Transition>

      
    </nav >
  );
};

export default Nav;