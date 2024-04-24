import React from 'react'
import { Link } from 'react-router-dom'
import { FaLocationDot } from "react-icons/fa6";
import { LiaRupeeSignSolid as Rupees } from "react-icons/lia";
import { FaStar } from "react-icons/fa";

export const TourCard = ({ tour }) => {
  const { id = 1, title, city, price, days, photo, rating, reviews, featured } = tour;

  return (
    <div className='w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow'>
      <Link to={`#`} className='relative'>
        <img
          className="p-6 rounded-t-lg"
          src={`https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_640.jpg`}
          alt="tour-img"
        />
        <span className='text-green-400 absolute bottom-0 left-6'>{featured && 'Featured'}</span>
      </Link>
      <div className='px-5 pb-4 mt-3'>
        <div className='flex items-center justify-between mt-2.5 mb-4'>
          <span className='text-md font-bold text-gray-900 gap-1 inline-flex items-center'>
            <FaLocationDot className='text-red-500' />
            <span>{city ?? 'City'}</span>
          </span>
          <span className='text-md font-bold text-gray-900 gap-1 inline-flex items-center'>
            <FaStar className='text-yellow-500' />{" "}{rating ?? 'Rating'}
            <span className='text-xs text-transform: italic'>({reviews})</span>
          </span>
        </div>
        <Link to={`/tour/${id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title ?? 'Title'}</h5>
        </Link>

        {/* Button */}
        <div className=''>
          <div className='inline-flex items-center gap-1'>Only at
            <span className='text-xl'><Rupees /></span>
            <h6 className='text-lg md:text-xl'>{price ?? 'Price'}</h6>
          </div>
          <button className='w-full mt-2 mb-2 items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300'>
            <Link to={`/tour/${id}`}>Book Now</Link>
          </button>
        </div>
      </div>
    </div>
  )
}