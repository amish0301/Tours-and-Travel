import React, { forwardRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Dialog, Transition } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
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
  const [navColor, updateNavColor] = useState(false);

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      updateNavColor(true);
    } else {
      updateNavColor(false);
    }
  })

  let MyDialogPanel = forwardRef(function (props, ref) {
    return <Dialog.Panel className='md:hidden' ref={ref} {...props} />
  })

  return (
    <nav className={`px-8 py-5 flex justify-between items-center ${navColor ? 'sticky-nav' : 'nav'}`}>
      <div className="flex items-center flex-shrink-0 mr-6">
        <NavLink to="/home" className='flex items-center space-x-3'>
          <img src={Logo} alt="logo" className='h-8 object-cover max-w-12 max-h-12' />
          <span className={`text-xl font-semibold ${navColor ? 'text-white' : ''}`}>Travellers</span>
        </NavLink>
      </div>

      {/* all the links */}
      <div className="hidden md:flex gap-5">
        {nav_links.map(link => (
          <NavLink key={link.path} to={link.path} onClick={() => setPathname(link.path)} className={`font-medium ${navColor ? 'hover:text-white' : 'hover:text-blue-500'} ${navColor ? 'text-white' : ''} ${pathname === link.path ? 'text-blue-500' : 'text-gray-600'}`}>{link.name}</NavLink>
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
      <div>
        <button
          className="block md:hidden text-gray-500 hover:text-gray-700 focus:text-gray-700 focus:outline-none"
          onClick={() => setIsMobile(!isMobile)}
        >
          {
            isMobile ? (
              <IoClose className="h-6 w-6" aria-hidden="true" />
            ) : (
              <GiHamburgerMenu className="h-6 w-6" aria-hidden="true" />
            )
          }
        </button>

        {/* Mobile Menu */}
        <Transition show={isMobile} className="md:hidden" as={Dialog} onClose={() => setIsMobile(false)}>
          <Transition.Child
            as={MyDialogPanel}
            enter="transition-opacity duration-200"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-50 bg-opacity-95 flex justify-end">
              <div className="bg-slate-300 shadow-lg w-64">
                <div className="py-3 px-4 text-lg font-bold">
                  <button onClick={() => setIsMobile(false)}>
                    {<IoClose className="h-6 w-6" aria-hidden="true" />}
                  </button>
                </div>
                <div className="p-4 font-medium">
                  <nav className="mt-4">
                    <ul className="flex flex-col gap-3">
                      <Link className="nav-li" to={'/home'} onClick={() => setIsMobile(false)}>
                        Home
                      </Link>
                      <Link className="nav-li" to={'/about'} onClick={() => setIsMobile(false)}>
                        About
                      </Link>
                      <Link className="nav-li" to={'/#'} onClick={() => setIsMobile(false)}>
                        <Link
                          href="#"
                        >
                          Services
                        </Link>
                      </Link>
                      <Link className="nav-li" to={'/#'} onClick={() => setIsMobile(false)}>
                        Contact
                      </Link>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </Transition.Child>
        </Transition>
      </div>
    </nav >
  );
};

export default Nav;