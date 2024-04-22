import React from 'react'

export const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item;

    return (
        <div className='max-w-md bg-red-300 rounded-lg shadow flex-col'>
            <img src={imgUrl} alt="" className='rounded-t-lg object-contain h-1/2 w-full' />
            <div className='p-3'>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-wrap">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 text-wrap">{desc}</p>
            </div>
        </div >
    )
}