import React, { useState } from 'react'


const Genre = ({ genre }) => {

  
  return (
    <div className='text-white border-4 flex flex-col justify-center items-center px-8  border-double'>
   
        <p className='text-md font-med'>{genre}</p>
    </div>
  )
}

export default Genre
