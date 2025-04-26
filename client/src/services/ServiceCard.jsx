import React from 'react'

export const ServiceCard = ({ item }) => {
    const { imgUrl, title, desc } = item;

    return (
        <div className='w-full max-w-sm outline outline-offset-1 outline-gray-200 rounded-lg shadow flex-col justify-between hover:transform hover:translate-y-2 transition duration-150 ease-in-out'>
            <img src={imgUrl} alt="" className='rounded-t-lg p-12 object-contain' />
            <div className='px-3 pb-4 mt-3'>
                <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-900 text-wrap">{title}</h5>
                <p className="mb-3 font-semibold text-gray-700 text-justify tracking-tight overflow-hidden">{desc}</p>
            </div>
        </div >
    )
}