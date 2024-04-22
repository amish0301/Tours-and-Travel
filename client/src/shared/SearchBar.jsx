import React, { useEffect, useState } from 'react'
import { RiPinDistanceLine } from "react-icons/ri";
import { IoPerson } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { toast } from 'react-toastify';

export const SearchBar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const initialState = {
    location: '',
    distance: '',
    groupSize: '',
  }

  const [formData, setFormData] = useState(initialState);
  const [formError, setFormError] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const validate = (data) => {
    const errors = {};

    if(data.location === '') {
      errors.location = 'Please enter a location';
    }
    if(data.distance === '') {
      errors.distance = 'Please enter a distance';
    }
    if(data.groupSize === '') {
      errors.groupSize = 'Please enter a group size';
    }

    return errors;
  }

  const formHandler = (e) => {
    e.preventDefault();    
    setFormError(validate(formData));
    setIsSubmit(true);
  }

  useEffect(() => {
    if(Object.keys(formError).length === 0 && isSubmit) {
      toast.success('Form submitted successfully');
      setFormData(initialState);
    }
  },[formError])
  

  useEffect(() => {
    window.addEventListener('resize', () => {
      if (window.innerWidth < 1024) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    })
  }, [window.innerWidth]);

  return (
    <div className='border border-gray-300 px-2 py-3 rounded-lg lg:rounded-full shadow-lg shadow-cyan-500/50 form_container w-full md:w-fit mt-12'>
      <form action='' method='post'onSubmit={formHandler} className='flex-wrap md:flex gap-3 w-full'>
        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <FaLocationDot />
          </span>
          <div className='flex-col align-left items-center w-full md:border-r-2 pr-3'>
            <h6>Location</h6>
            <input type="text" name='location' value={formData.location} placeholder='Search Location' className='form_input' onChange={handleChange} required />
            <p className='text-red-500 text-transform: caption-bottom'>{formError.location}</p>
          </div>
        </div>

        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <RiPinDistanceLine />
          </span>
          <div className='flex-col align-left items-center w-full md:border-r-2 pr-3'>
            <h6>Distance</h6>
            <input type="number" name='distance' value={formData.distance} placeholder='Distance in k/m' className='form_input' onChange={handleChange} required />
            <p className='text-red-500 text-transform: caption-bottom'>{formError.distance}</p>
          </div>
        </div>

        <div className='flex gap-3 mt-2 items-center'>
          <span className='text-2xl'>
            <IoPerson />
          </span>
          <div className='flex-col align-left items-center w-full'>
            <h6>Max Person</h6>
            <input type="number" name='groupSize' placeholder='Max Person' value={formData.groupSize} className='form_input' onChange={handleChange} required />
            <p className='text-red-500 text-transform: caption-bottom'>{formError.groupSize}</p>
          </div>
        </div>
        {
          isMobile ? <button type='submit' className='custom_btn w-full mt-5' >Search</button> : <span className='text-2xl cursor-pointer m-auto  p-2' type='submit'><FaSearch /></span>
        }
      </form>
    </div>
  )
}