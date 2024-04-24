import React from 'react'
import Logo from '../assets/travel-logo.jpg'
import Video from '../assets/189692-886572510_medium.mp4'
import earth from '../assets/earth.png'
import { SearchBar, Subtitle, ServiceList, FeaturedTourList } from '../index'



const Home = () => {
  return (
    <>
      <div className='hero_section'>
        <div className='w-full p-5 m-auto'>
          <div className='w-full flex items-center gap-1'>
            <Subtitle subtitle={'Know Before you go!'}  />
            <img src={earth} alt="" className='hidden md:w-[2.3rem] md:h-[2.3rem]' />
          </div>
          <h1 className='md:text-wrap text-pretty text-xl lg:text-2xl md:mt-7 py-5 md:p-0 font-semibold lg:font-bold'>Traveling Opens the door to creating</h1>
          <span className='text-blue-500 lg:text-xl text-transform: capitalize'>memories</span>
          <p className='mt-3 md:w-3/4 font-[1.1rem] text-balance '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed sequi minima totam aliquid consequuntur sit cupiditate tempore perferendis ut quam ad distinctio eos, reiciendis ex architecto exercitationem! Nulla, aliquam excepturi.</p>
        </div>
        <div className='w-full p-5 hidden md:flex justify-between items-center mx-auto'>
          <div className='w-1/3 p-3 h-[340px] '><img src={Logo} alt="hero-img" className='hero_img_container' /></div>
          <div className='w-1/3 p-3 h-[340px] mt-5'><video src={Video} alt="nature-video" className='hero_img_container mt-3' typeof='video/mp4' loop onMouseEnter={(e) => e.target.play()} onMouseLeave={(e) => e.target.pause()} /></div>
          <div className='w-1/3 p-3 h-[340px] mt-10'><img src={Logo} alt="hero_img" className='hero_img_container mt-6' /></div>
        </div>
      </div>

      <SearchBar />

      {/* SERVICE SECTION */}
      <section className='bg-white pt-10 md:pt-[160px]'>
        <div className='min-w-full  flex-col'>
          <div className='px-5'>
            <h5 className='text-transform: capitalize max-w-2xl text-2xl md:text-3xl lg:text-4xl mb-4'>What we offer</h5>
            <h2 className='text-blue-500 text-xl md:text font-semibold mb-6 lg:mb-8'>We offer our best services</h2>
          </div>
          <div className='max-auto grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-2 grid-flow-row'>
            <ServiceList />
          </div>
        </div>
      </section>

      {/* EXPLORE SECTION */}
      <section className='bg-transparent'>
        <div className='min-w-full p-2 flex-col'>
          <div className='p-3'>
            <Subtitle subtitle={'Explore'} />
            <h2 className='text-blue-500 text-xl md:text font-semibold mb-6 lg:mb-8'>Our Featured Tour</h2>
          </div>
          <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-3 md:gap-4 grid-flow-row-dense'>
            <FeaturedTourList />
          </div>
        </div>
      </section>

    </>
  )
}

export default Home