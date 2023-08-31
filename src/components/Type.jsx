import React, { useState } from 'react'
import { 
    MdGroups,
    MdOutlineCalendarMonth,
    MdMic,
    MdOutlineSpeaker
    


} from 'react-icons/md'

const Type = ({ type }) => {

  




  return (
    <div className='text-white border-4 flex flex-col justify-center items-center w-14 h-14 md:w-20 md:h-20 border-double'>
   
      
        <MdGroups className='p-0 hidden md:block' size={45}/>
        <MdGroups className='md:hidden ' size={25}/>
        <p className='text-md font-md'>Band</p>
        


    </div>
  )
}

export default Type
