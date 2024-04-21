import React from 'react'
import { RiPinDistanceLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export const SearchBar = () => {

  const formHandler = (e) => {
    e.preventDefault();

  }

  return (
    <div className='border border-gray-300 p-4 rounded-lg shadow-lg shadow-cyan-500/50 form_container w-full'>
      <form action='' method='post' onSubmit={formHandler} className='flex-wrap md:flex gap-3 w-full'>
        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <FaLocationDot />
          </span>
          <div className='flex-col align-left items-center w-full'>
            <h6>Location</h6>
            <input type="text" placeholder='Search Location' className='form_input' required/>
          </div>
        </div>

        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <RiPinDistanceLine />
          </span>
          <div className='flex-col align-left items-center w-full'>
            <h6>Distance</h6>
            <input type="number" placeholder='Distance k/m' className='form_input'/>
          </div>
        </div>

        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <IoPerson />
          </span>
          <div className='flex-col align-left items-center w-full'>
            <h6>Max Person</h6>
            <input type="number" placeholder='Number of Person traveling' className='form_input' />
          </div>
        </div>
      </form>
    </div>
  )
}