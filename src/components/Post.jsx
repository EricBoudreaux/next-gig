import React from 'react'
import Role from './Role'

const Post = 
({ 
  title, 
  gigType, 
  roleNum,  
  roleNeed1, 
  roleNeed2, 
  roleNeed3, 
  roleNeed4, 
  roleNeed5, 
  roleNeed6, 
  genre, 
  location 
}) => {

  return (
    <div className='w-full border-4 border-double border-gray-600 my-1 hover:scale-[101%] duration-300 hover:my-1 hover:bg-black/50'>
      <div className='grid grid-cols-5 px-6 py-6 items-center'>
      <div className='ml-2 md:ml-10'>
        <p className='text-sm md:text-xl font-light'>{title}</p>
      </div>
      <div className='mx-auto'>
        <p className='text-sm md:text-xl font-light'>{gigType}</p>
      </div>
      <div className='mx-auto'>
      <div className='flex flex-row gap-1 md:gap-4 mx-auto'>
        
        {roleNum === 1 
        ? <div>
            <div className=''>
              <Role role={roleNeed1} />
            </div>
          </div>
        : null
        }
        {roleNum === 2 
        ? <div className='flex grid-cols-2 gap-1'>
            <div className=''>
              <Role role={roleNeed1} />
            </div>
            <div className=''>
              <Role role={roleNeed2}/>
            </div>
          </div>
        : null
        }

        {roleNum === 3 
        ? <div className='grid grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2'>
            <div className=''>
              <Role role={roleNeed1} />
            </div>
            <div className=''>
              <Role role={roleNeed2}/>
            </div>
            <div className=''>
              <Role role={roleNeed3}/>
            </div>
          </div>
        : null
        }

        {roleNum === 4 
        ? <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 lg:gap-2'>
            <div className=''>
              <Role role={roleNeed1} />
            </div>
            <div className=''>
              <Role role={roleNeed2}/>
            </div>
            <div className=''>
              <Role role={roleNeed3}/>
            </div>
            <div className=''>
              <Role role={roleNeed4}/>
            </div>
          </div>
        : null
        }
        {roleNum === 5 
        ? <div className='grid grid-cols-2 lg:grid-cols-5 gap-1 lg:gap-2'>
            <div className=''>
              <Role role={roleNeed1} />
            </div>
            <div className=''>
              <Role role={roleNeed2}/>
            </div>
            <div className=''>
              <Role role={roleNeed3}/>
            </div>
            <div className=''>
              <Role role={roleNeed4}/>
            </div>
            <div className=''>
              <Role role={roleNeed5}/>
            </div>
          </div>
        : null
        }
        {roleNum === 6 
        ? <div className='grid grid-cols-2 lg:grid-cols-6 gap-1 lg:gap-8'>
            <div className=''>
              <Role role={roleNeed1} />
            </div>
            <div className=''>
              <Role role={roleNeed2}/>
            </div>
            <div className=''>
              <Role role={roleNeed3}/>
            </div>
            <div className=''>
              <Role role={roleNeed4}/>
            </div>
            <div className=''>
              <Role role={roleNeed5}/>
            </div>
            <div className=''>
              <Role role={roleNeed6}/>
            </div>
          </div>
        : null
        }
        
        {/* <div className=''>
          <Role role={roleNeed1} />
          </div>
        <div className=''>
          <Role role={roleNeed2}/>
          </div> */}
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
