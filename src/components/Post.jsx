import React from 'react'
import Role from './Role'

const Post = 
({ 
  gigType, 
  roleNum,  
  roleNeed1, 
  roleNeed2, 
  roleNeed3, 
  roleNeed4, 
  roleNeed5, 
  roleNeed6, 
  genre, 
  location,
  date,
  message
}) => {

  return (
    <div className='w-full border-4 border-double border-gray-600 my-1 hover:scale-[101%] hover:h-full duration-500 hover:my-1 hover:bg-black/50 group'>
      <div className='grid grid-cols-5 py-6 items-center'>
      <div className=''>
        <p className='flex justify-center items-center text-sm md:text-xl font-light'>{gigType}</p>
      </div>
      <div className=''>
      <div className='flex flex-row justify-center items-center gap-1 md:gap-4 mx-auto'>
        
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
      <div className='flex justify-center items-center'>
        <p className='text-sm md:text-xl font-light'>{genre}</p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-sm md:text-xl font-light'>{location}</p>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-sm md:text-xl font-light'>{date}</p>
      </div>
      </div>
      <div className='hidden  group-hover:block  duration-900 pl-4 lg:pl-28 md:mt-12 pb-12'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, exercitationem, distinctio reprehenderit similique porro, debitis pariatur facere tenetur accusamus modi quidem officia voluptatem explicabo dolor deleniti nulla repellendus dolore. Praesentium!
      </div>
    </div>
  )
}

export default Post
