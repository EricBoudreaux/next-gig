import React from 'react'
import Role from './Role'

const Post = ({ title, gigType, roleNeed, genre, location }) => {

  return (
    <div className='w-full border-4 border-double border-gray-600 my-1 hover:scale-105 duration-300 hover:my-1 hover:bg-black/50'>
      <div className='grid grid-cols-5 px-6 py-6 items-center'>
      <div className='ml-2 md:ml-10'>
        <p className='text-sm md:text-xl font-light'>{title}</p>
      </div>
      <div className='mx-auto'>
        <p className='text-sm md:text-xl font-light'>{gigType}</p>
      </div>
      <div className='mx-auto'>
      <div className='flex flex-row gap-1 md:gap-4 mx-auto'>
        <div className=''><Role /></div>
        <div className=''><Role /></div>
      </div>
      </div>
      <div className='mx-auto'>
        <p className='text-sm md:text-xl font-light'>{genre}</p>
      </div>
      <div className='ml-6 md:mx-auto'>
        <p className='text-sm md:text-xl font-light'>{location}</p>
      </div>

      </div>
    </div>
  )
}

export default Post
