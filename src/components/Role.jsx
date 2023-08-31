import React, { useState } from 'react'
import { 
    GiGuitarHead,
    GiGuitarBassHead,
    GiGrandPiano,
    GiMicrophone,
    


} from 'react-icons/gi'

const Role = ({ role }) => {

  




  return (
    <div className='text-white border-4 w-8 h-8 md:w-12 md:h-12 border-double rounded-full'>

      
        <GiMicrophone className='p-2 hidden md:block' size={39}/>
        <GiMicrophone className='md:hidden p-1' size={25}/>



    </div>
  )
}

export default Role
