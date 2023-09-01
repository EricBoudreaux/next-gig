import React, { useState } from 'react'

import { 
  GiGuitarHead,
  GiGuitarBassHead,
  GiBackup,
  GiMicrophone,
  GiDrumKit,
  GiMusicalKeyboard
} from 'react-icons/gi'

const Role = ({ role }) => {

  return (
    <div className='text-white border-4 w-8 h-8 md:w-12 md:h-12 border-double rounded-full'>

      {role === 'vocals' 
      ?         
      <div>
        <GiMicrophone className='p-2 hidden md:block' size={39}/>
        <GiMicrophone className='md:hidden p-1' size={25}/>
      </div>  
      : null }  

      {role === 'guitar' 
      ?         
      <div>
        <GiGuitarHead className='p-2 hidden md:block' size={39}/>
        <GiGuitarHead className='md:hidden p-1' size={25}/>
      </div>  
      : null }   

      {role === 'bass' 
      ?         
      <div>
        <GiGuitarBassHead className='p-2 hidden md:block' size={39}/>
        <GiGuitarBassHead className='md:hidden p-1' size={25}/>
      </div>  
      : null }

      {role === 'drums' 
      ?         
      <div>
        <GiDrumKit className='p-2 hidden md:block' size={39}/>
        <GiDrumKit className='md:hidden p-1' size={25}/>
      </div>  
      : null }

      {role === 'keys' 
      ?         
      <div>
        <GiMusicalKeyboard className='p-2 hidden md:block' size={39}/>
        <GiMusicalKeyboard className='md:hidden p-1' size={25}/>
      </div>  
      : null }     

      {role === 'other' 
      ?         
      <div>
        <GiBackup className='p-2 hidden md:block' size={39}/>
        <GiBackup className='md:hidden p-1' size={25}/>
      </div>  
      : null }  
      
          



    </div>
  )
}

export default Role
