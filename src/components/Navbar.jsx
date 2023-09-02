import React from 'react'

import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='absolute w-full bg-white mt-6 z-40 flex justify-between bg-transparent items-center h-20 mx-auto px-4 text-white'>
      <Link to='/'>
        <h2 className='w-full cursor-pointer text-[var(--red)] opacity-100 z-50 pt-2 md:pt-4'>NEXT GIG</h2>
      </Link>
      <ul className='flex uppercase'>
        {/* <li className='p-4'><a>About</a></li> */}
        <Link to='/posts'>
          <li className='p-4 md:mr-12'><a>Posts</a></li>
        </Link>
        {/* <li className='p-4'><a>Resources</a></li> */}

      </ul>
      </div>
  )
}

export default Navbar
