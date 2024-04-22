import React, { useEffect, useState } from 'react'
import { RiPinDistanceLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";

export const SearchBar = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, [window.innerWidth])

  const formHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div className='border border-gray-300 px-2 py-3 rounded-full md:rounded-lg shadow-lg shadow-cyan-500/50 form_container w-full md:w-fit mt-12'>
      <form action='' method='post' className='flex-wrap md:flex gap-3 w-full'>
        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <FaLocationDot />
          </span>
          <div className='flex-col align-left items-center w-full md:border-r-2 pr-3'>
            <h6>Location</h6>
            <input type="text" placeholder='Search Location' className='form_input' required />
          </div>
        </div>

        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <RiPinDistanceLine />
          </span>
          <div className='flex-col align-left items-center w-full md:border-r-2 pr-3'>
            <h6>Distance</h6>
            <input type="number" placeholder='Distance in k/m' className='form_input' />
          </div>
        </div>

        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <IoPerson />
          </span>
          <div className='flex-col align-left items-center w-full'>
            <h6>Max Person</h6>
            <input type="number" placeholder='Number of Person traveling' className='form_input' required />
          </div>
        </div>

        {
          isMobile ? <button type='submit' className='custom_btn w-full mt-5' onSubmit={formHandler}>Search</button> : <span className={`text-2xl cursor-pointer m-auto bg-green-400 p-2 rounded-r-lg`}><FaSearch /></span>
        }
      </form>
    </div>
  )
}