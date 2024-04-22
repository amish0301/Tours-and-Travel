import React from 'react'
import { ServiceCard } from './ServiceCard'

const serviceData = [
    { imgUrl: "http://dummyimage.com/209x167.png/ff4444/ffffff", title: "Calculate Weather", desc: "PO Box 42543" },
    { imgUrl: "http://dummyimage.com/122x206.png/cc0000/ffffff", title: "Best Tour Guide", desc: "PO Box 15056" },
    { imgUrl: "http://dummyimage.com/122x206.png/cc0000/ffffff", title: "Customization", desc: "PO Box 15056" },
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