import React from 'react'
import Logo from '../assets/travel-logo.jpg'
import Video from '../assets/189692-886572510_medium.mp4'
import { SearchBar, Subtitle } from '../index'


const Home = () => {
  return (
    <>
      <div className='hero_section'>
        <div className='w-full p-5 m-auto'>
          <div className='w-full md:flex space-x-4 items-center'>
            <Subtitle subtitle={'Know Before you go!'} />
            <img src="" alt="" className='w-[1.5rem] h-[1.5rem] md:w-[2.3rem] md:h-[2.3rem]' />
          </div>
          <h1 className='md:text-wrap text-pretty text-xl lg:text-2xl md:mt-7 py-5 md:p-0 font-semibold lg:font-bold'>Traveling Opens the door to creating</h1>
          <span className='text-blue-500 lg:text-xl text-transform: capitalize'>memories</span>
          <p className='mt-3 md:w-3/4 font-[1.1rem] text-balance '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi minima totam aliquid consequuntur sit cupiditate tempore perferendis ut quam ad distinctio eos, reiciendis ex architecto exercitationem! Nulla, aliquam excepturi.</p>
        </div>
        <div className='w-full p-5 flex justify-between items-center mx-auto'>
          <div className='w-1/3 p-3 h-[340px] '><img src={Logo} alt="hero-img" className='hero_img_container' /></div>
          <div className='w-1/3 p-3 h-[340px] mt-5'><video src={Video} alt="nature-video" className='hero_img_container mt-3' typeof='video/mp4' loop onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => e.target.pause()} /></div>
          <div className='w-1/3 p-3 h-[340px] mt-10'><img src={Logo} alt="hero_img" className='hero_img_container mt-6' /></div>
        </div>
        <SearchBar />
      </div>
      <div className='h-[100vh]'></div>
    </>
  )
}

export default Home