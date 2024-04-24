import React from 'react'
import { TourCard } from '../../index'
import { tourData } from '../../assets/data'

export const FeaturedTourList = () => {
    return (
        <>
            {
                tourData.map((item, index) => <TourCard key={index} tour={item} />)
            }
        </>
    )
}