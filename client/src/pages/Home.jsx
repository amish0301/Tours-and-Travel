import React from 'react'
import Logo from '../assets/travel-logo.jpg'
import { Subtitle } from '../index'

const Home = () => {
  return (
    <div className='hero_section'>
      <div className='w-full md:w-1/2 p-5'>
        <div className='flex-wrap w-full md:flex gap-3 items-center'>
          <Subtitle subtitle={'Know Before you go!'} />
          <img src="" alt="" className='w-[1.5rem] h-[1.5rem] md:w-[2.3rem] md:h-[2.3rem]' />
        </div>
        <h1 className='md:text-wrap text-pretty mt-1 md:mt-7 py-5 md:p-0 font-semibold lg:font-bold'>Traveling Opens the door to creating <span className='text-blue-500 font-bold lg:text-xl'>Memories</span></h1>
        <p className='mt-3 md:w-3/4 font-[1.1rem] text-balance '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi minima totam aliquid consequuntur sit cupiditate tempore perferendis ut quam ad distinctio eos, reiciendis ex architecto exercitationem! Nulla, aliquam excepturi.</p>
      </div>
      <div className='w-full p-5 grid grid-cols-3 grid-flow-col h-full mx-auto'>
        <div className='w-1/3 h-[300px]'><img src={Logo} alt="hero-img" className='hero_img_container' /></div>
        <div className='w-1/3 h-[300px] mt-4'><img src={Logo} alt="hero-img" className='hero_img_container' /></div>
        <div className='w-1/3 h-[300px] mt-8'><img src={Logo} alt="hero-img" className='hero_img_container' /></div>
      </div>
    </div>
  )
}

export default Home