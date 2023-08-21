import React from 'react'

const Navbar = () => {
  return (
    <div className='absolute w-full bg-white mt-6 z-40 flex justify-between bg-transparent items-center h-14 mx-auto px-4 text-white'>
      <h2 className='w-full text-[#500000] opacity-100 pt-2 md:pt-4'>NEXT GIG</h2>
      <ul className='flex '>
        <li className='p-4'><a>About</a></li>
        <li className='p-4'><a>Posts</a></li>
        <li className='p-4'><a>Resources</a></li>

      </ul>
      </div>
  )
}

export default Navbar
