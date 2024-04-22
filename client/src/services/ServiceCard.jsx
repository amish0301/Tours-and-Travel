import React from 'react'

export const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item;

    return (
        <div className='max-w-md bg-red-300  rounded-lg shadow  flex-col'>
            <img src={imgUrl} alt="" className='rounded-t-lg object-cover h-1/2 md:h-2/3 w-full' />
            <div className='p-3'>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-wrap">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 text-wrap">{desc}</p>
            </div>
        </div >
    )
}