import React from 'react'
import { ServiceCard } from './ServiceCard'
import Weather from '../assets/weather_icon.png'
import CustomiseImg from '../assets/customisation.png'
import tour from '../assets/tour.png'

const serviceData = [
    { imgUrl: Weather, title: "Calculate Weather", desc: "PO Box 15056" },
    { imgUrl: CustomiseImg, title: "Best Tour Guide", desc: "PO Box 15056" },
    { imgUrl: tour, title: "Customization", desc: "PO Box 15056" },
]

export const ServiceList = () => {
    return (
        <>
            {
                serviceData.map((item, index) => <ServiceCard key={index} item={item} />)
            }
        </>
    )
}