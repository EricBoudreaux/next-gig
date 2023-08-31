import React, { useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'

import { 
    GiGuitarHead,
    GiGuitarBassHead,
    GiBackup,
    GiMicrophone,
    GiDrumKit,
    GiMusicalKeyboard
} from 'react-icons/gi'

import { 
    MdGroups,
    MdOutlineCalendarMonth,
    MdMic,
    MdOutlineSpeaker
} from 'react-icons/md'

import Type from './Type'
import Genre from './Genre'
import Role from './Role'

const WritePost = ({showModal}) => {


    const [toggleBand, SetToggleBand] = useState(true)
    const [toggleEvent, SetToggleEvent] = useState(true)
    const [toggleStudio, SetToggleStudio] = useState(true)
    const [toggleJam, SetToggleJam] = useState(true)

    const [type, setType] = useState('band')

  
    

  return (
    <div className={showModal ? 'w-full z-50  absolute top-32 duration-500 ease-in-out' : 'w-full z-50  absolute top-[-100%] duration-500 ease-in-out'}>
      <div className='flex w-[95%] mx-auto border-4 border-gray-600 border-double modal-bg'>
        <div className='w-full'>
            <div className='flex items-center my-4'>
                <div className='flex flex-col md:flex-row  justify-between w-full mt-12'>
                    <p className='text-4xl basis-1/4 text-center my-4'>Title</p>
                    <input maxLength={30} className='bg-transparent my-4 md:me-2 border-2 mx-auto w-72 border-gray-600 basis-3/4'/>
                </div>
            </div>
            <div className='flex items-center my-4'>
                <div className='flex flex-col md:flex-row justify-between w-full items-center'>   
                    <p className='text-4xl text-center basis-1/4 my-2 md:my-8'>Gig Type</p>
                        <div className='flex-col  md:justify-start md:basis-3/4 w-full'>
                        <div className='flex gap-2 '>
                            <div 
                                onClick={() => setType('band')} 
                                className={type === 'band' 
                                    ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1 w-20 h-20   hover:cursor-pointer' 
                                    : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 w-20 h-20  cursor-pointer text-gray-600 border-gray-600'}>
                                <MdGroups className='' size={45}/>Band
                            </div>
                        <div    
                            onClick={() => setType('event')}
                            className={type === 'event' 
                            ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1 w-20 h-20   hover:cursor-pointer' 
                            : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 w-20 h-20  cursor-pointer text-gray-600 border-gray-600'}>
                        <MdOutlineCalendarMonth className='' size={45}/>Event
                    </div>
                    <div                                 
                        onClick={() => setType('studio')} 
                        className={type === 'studio' 
                                ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1 w-20 h-20   hover:cursor-pointer' 
                                : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 w-20 h-20  cursor-pointer text-gray-600 border-gray-600'}>
                        <MdMic className='' size={45}/>Studio
                    </div>
                    <div 
                        onClick={() => setType('jam')} 
                        className={type === 'jam' 
                                ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1 w-20 h-20   hover:cursor-pointer' 
                                : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 w-20 h-20  cursor-pointer text-gray-600 border-gray-600'}>
                        <MdOutlineSpeaker className='' size={45}/>Jam
                    </div>
                    </div>
                    <p className='text-gray-400 text-sm font-light'>Choose one</p>

                    </div>
                </div>

            </div>
            <div className='flex items-center my-4'>
                <div className="w-full flex flex-col md:flex-row justify-between items-center">
                    <p className='text-4xl text-center basis-1/4 my-2 md:my-8'>Looking For</p>
                    <div className='grid grid-cols-3 md:flex gap-1 items-center basis-3/4 '>
                        <GiMicrophone className='text-white border-4 w-16 h-16 border-double rounded-full p-1'/>
                        <GiGuitarHead className='text-white border-4 w-16 h-16 border-double rounded-full p-1'/>
                        <GiGuitarBassHead className='text-white border-4 w-16 h-16 border-double rounded-full p-1'/>
                        <GiDrumKit className='text-white border-4 w-16 h-16 border-double rounded-full p-1'/>
                        <GiMusicalKeyboard className='text-white border-4 w-16 h-16 border-double rounded-full p-1'/>
                        <GiBackup className='text-white border-4 w-16 h-16 border-double rounded-full p-1'/>
                    </div>
                </div>
            </div>
            <div className='flex  items-center my-4'>
            <div className="w-full flex justify-between flex-col items-center md:flex-row">
                    <p className='text-4xl text-center basis-1/4'>Genres</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 basis-3/4 me-4'>
                        <Genre genre={'Blues'} />
                        <Genre genre={'Country'} />
                        <Genre genre={'Electronic'} />
                        <Genre genre={'Hip-hop'} />
                        <Genre genre={'Jazz'} />
                        <Genre genre={'Pop'} />
                        <Genre genre={'R&B/Soul'} />
                        <Genre genre={'Rock'} />
                        <Genre genre={'Punk'} />
                        <Genre genre={'Metal'} />
                        <Genre genre={'Folk'} />
                        <Genre genre={'Other'} />
                    </div>
                </div>
            </div>
            <div className='flex items-center my-4'>
            <div className="w-full flex flex-col md:flex-row my-4 justify-between items-center">
                <p className='text-4xl text-center basis-1/4'>Location</p>
                    <div className='flex items-center basis-3/4'>
                        <div className='flex gap-2 flex-col md:flex-row'>
                            <p className='text-[24px]'>City</p>
                            <input className='bg-transparent border-2 border-gray-600'/>
                        </div>
                        <div className='flex gap-2 mx-2 flex-col md:flex-row'>
                            <p className='text-[24px]'>State</p>
                            <input maxLength={2} className='w-8 text-center bg-transparent border-2 border-gray-600'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center my-4'>
            <p className='text-4xl md:basis-1/4 text-center'>Message</p>
                <textarea rows={12} cols={40} className='bg-transparent border-2 border-gray-600 md:basis-3/4 me-2'/>

            </div>

            <div className='flex w-full my-4'>
            <div className='flex w-full justify-between'>
                <p className='text-4xl basis-1/4 text-center'>Email</p>
                <input maxLength={30} className='bg-transparent me-2 border-2 w-72 border-gray-600 basis-3/4'/>
            </div>
        </div>

        <div className='flex w-full my-4'>
            <div className='flex w-full justify-between mx-2 ms-8 gap-5'>
                <button className='basis-2/3'>POST</button>
                <button onClick={() => showModal = false} className='basis-1/3'>CANCEL</button>
     
            </div>
        </div>
        </div>
        </div>
    </div>
  )
}

export default WritePost
