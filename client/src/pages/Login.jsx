import React from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineMailOutline as MailIcon } from "react-icons/md";
import { RiLockPasswordLine as PasswordIcon} from "react-icons/ri";

const Login = () => {

  const handleClick = () => {
    console.log('clicked');
  }

  return (
    <div className='w-full p-10'>
      <div className='max-w-[1240px] mx-auto flex justify-evenly items-center border rounded-lg p-10 shadow-md'>
        <div className='w-1/3 mr-10'>
          <p className='ml-3 mb-8'>Tours and Travel</p>
          <div className='flex flex-col gap-2 ml-3'>
            <h1 className='text-2xl font-semibold'>Hello, <br /> Welcome Back</h1>
            <p className='text-balance font-normal text-gray-400'>Hey, welcome back to your spacial place.</p>
          </div>

          {/* inputs */}
          <div className='ml-3 mt-5'>
            <div className='relative pb-3'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'><MailIcon /></span>
              <input type="email" placeholder="e.g john@gmail.com" className='pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
            </div>
            <div className='relative'>
              <span className='absolute inset-y-0 left-0 flex items-center pl-3'><PasswordIcon /></span>
              <input type="password" placeholder="Enter your Password" className='pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent' />
            </div>
          </div>

          {/* remember me */}
          <div className='flex justify-between mt-2 ml-3'>
            <div className='flex align-center gap-1 ml-1'>
              <input type="checkbox" name="remember" id="remember_me" className='rounded-lg bg-blue-600 relative w-3 h-3 top-1' />
              <label className='text-sm font-normal cursor-default select-none' htmlFor='remember_me'>Remember me</label>
            </div>
            <Link to={'/forget-password'} className='text-sm font-light text-blue-600 underline'>Forget Password?</Link>
          </div>

          <div className='ml-3 m-8'>
            <button onClick={handleClick} className='px-7 py-2 bg-blue-500 rounded-lg hover:bg-blue-600  transition duration-300 font-semibold'>Sign In</button>
          </div>

          <div className='ml-3 mt-3 md:mt-8'>
            <p className='text-sm font-light'>Don't have an account? <Link to={'/signup'} className='text-blue-600 underline'>Sign Up</Link></p>
          </div>
        </div>
        <div className='w-1/2 hidden md:block'>
          <img src="https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg" alt="" className='object-contain w-full h-full' />
        </div>
      </div>
      {/* <Link to={'https://dribbble.com/shots/24282453-Finnger-Login-Page-Illustration'}>Click</Link> */}
    </div>
  )
}

export default Login