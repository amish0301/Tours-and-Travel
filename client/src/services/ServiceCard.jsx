import React from 'react'

export const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item;

    return (
        <div className='w-full max-w-sm border-gray-200 rounded-lg shadow flex-col justify-between'>
            <img src={imgUrl} alt="" className='rounded-t-lg p-6 h-1/2 w-full object-contain' />
            <div className='px-3 pb-4 mt-3'>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-wrap">{title}</h5>
                <p className="mb-3 font-normal text-gray-700 text-justify tracking-tight overflow-hidden">{desc}</p>
            </div>
        </div >
    )
}