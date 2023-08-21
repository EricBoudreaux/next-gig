import React from 'react'

import { Link } from 'react-router-dom'

import Video from '../assets/pexels-artem-podrez-6274579 (2160p).mp4'

const Landing = () => {
  return (
    <div className='w-full h-screen'>
       <div className=' mt-[-80px] z-50 w-full h-screen mx-auto text-center flex flex-col justify-center'>
       <h1 className='z-50 text-white'>NEXT GIG</h1>
       <Link  className='z-50 text-white mt-[-20px]' to='about'>
          <button>ENTER</button>
       </Link>
       </div>
      <video className='w-full h-screen absolute top-0  md:h-full z-0 object-cover' src={Video} autoPlay loop muted/>
    </div>
  )
}

export default Landing
