import React from 'react'
import { ServiceCard } from './ServiceCard'
import Weather from '../assets/weather_icon.png'
import CustomiseImg from '../assets/customisation.png'
import tour from '../assets/tour.png'

const serviceData = [
    { imgUrl: Weather, title: "Calculate Weather", desc: "Get accurate and easy-to-understand weather information tailored for your travel plans! Our service delivers user-friendly weather descriptions, ensuring you're always prepared and informed for your tours and adventures" },

    { imgUrl: tour, title: "Best Tour Guide", desc: "Discover the difference with our top-notch tour guides! We specialize in providing unforgettable experiences for travelers seeking expert insights and personalized adventures. Our dedicated team ensures every journey is not just a trip, but a cherished memory" },

    { imgUrl: CustomiseImg, title: "Customization", desc: "Discover personalized travel experiences tailored just for you! From dream destinations to unique adventures, our expert team ensures every detail of your journey is carefully curated to create unforgettable memories. Let us turn your travel dreams into reality, one personalized package at a time. Satisfaction guaranteed!" },
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