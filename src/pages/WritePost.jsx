import React, { useState } from 'react'

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

import Navbar from '../components/Navbar'


const WritePost = () => {

    const [type, setType] = useState('band')
    const [genre, setGenre] = useState('')
    
    const [vocals, setVocals] = useState(false)
    const [guitar, setGuitar] = useState(false)
    const [bass, setBass] = useState(false)
    const [drums, setDrums] = useState(false)
    const [keys, setKeys] = useState(false)
    const [other, setOther] = useState(false)


      
  return (


        <div className='w-full text-white modal-bg bg-fixed bg-center'>
            <Navbar />
            <div className='w-[90%] mx-auto pt-20'>
            <div className='flex items-center my-4 '>
                <div className='flex flex-col md:flex-row  justify-between w-full mt-12'>
                    <p className='text-4xl basis-1/4 text-center my-4 text-white'>Title</p>
                    <input maxLength={30} className='ps-2 bg-transparent my-4 md:me-2 border-2 mx-auto w-72 border-gray-600 basis-3/4'/>
                </div>
            </div>
            <div className='flex items-center my-4'>
                <div className='flex flex-col md:flex-row justify-between w-full items-center'>   
                    <p className='text-4xl text-center basis-1/4 my-4 md:my-8 text-white'>Gig Type</p>
                        <div className='flex-col  md:justify-start md:basis-3/4 w-full'>
                        <div className='flex gap-2 justify-center md:justify-start'>
                        <div    
                            onClick={() => setType('band')}
                            className={type === 'band' 
                            ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1 w-20 h-20   hover:cursor-pointer ' 
                            : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 w-20 h-20  cursor-pointer text-gray-600 border-gray-600 '}>
                        <div>
                            <MdGroups  size={45}/>
                            Band
                        </div>
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


                    </div>
                </div>

            </div>
            <div className='flex items-center my-4'>
                <div className="w-full flex flex-col md:flex-row justify-between items-center">
                    <p className='text-4xl text-center basis-1/4 my-4 md:my-8 text-white'>Looking For</p>
                    <div className='grid grid-cols-3 md:flex gap-1 items-center basis-3/4 '>
                        <GiMicrophone
                        onClick={() => setVocals(!vocals)} 
                        className={vocals 
                        ? 'text-white    border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer' 
                        : 'text-gray-600 border-gray-600     border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer'} />
                        <GiGuitarHead 
                        onClick={() => setGuitar(!guitar)} 
                        className={guitar 
                        ? 'text-white    border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer' 
                        : 'text-gray-600 border-gray-600     border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer'} />
                        <GiGuitarBassHead 
                        onClick={() => setBass(!bass)} 
                        className={bass 
                        ? 'text-white    border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer' 
                        : 'text-gray-600 border-gray-600     border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer'} />
                        <GiDrumKit 
                        onClick={() => setDrums(!drums)} 
                        className={drums 
                        ? 'text-white    border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer' 
                        : 'text-gray-600 border-gray-600     border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer'} />
                        <GiMusicalKeyboard 
                        onClick={() => setKeys(!keys)} 
                        className={keys 
                        ? 'text-white    border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer' 
                        : 'text-gray-600 border-gray-600     border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer'} />
                        <GiBackup 
                        onClick={() => setOther(!other)} 
                        className={other 
                        ? 'text-white    border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer' 
                        : 'text-gray-600 border-gray-600     border-4 w-16 h-16 border-double rounded-full p-1 cursor-pointer'} />
                    </div>
                </div>
            </div>
            <div className='flex  items-center my-4'>
            <div className="w-full flex justify-between flex-col items-center md:flex-row">
                    <p className='text-4xl text-center my-4 basis-1/4 text-white'>Genres</p>
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 basis-3/4 me-4'>
                    <div    
                        onClick={() => setGenre('blues')}
                        className={genre === 'blues' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Blues</p>
                    </div>
                    <div    
                        onClick={() => setGenre('country')}
                        className={genre === 'country' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Country</p>
                    </div>
                    <div    
                        onClick={() => setGenre('electronic')}
                        className={genre === 'electronic' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Electronic</p>
                    </div>
                    <div    
                        onClick={() => setGenre('hiphop')}
                        className={genre === 'hiphop' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Hip-hop</p>
                    </div>
                    <div    
                        onClick={() => setGenre('jazz')}
                        className={genre === 'jazz' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Jazz</p>
                    </div>
                    <div    
                        onClick={() => setGenre('pop')}
                        className={genre === 'pop' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Pop</p>
                    </div>
                    <div    
                        onClick={() => setGenre('rnbs')}
                        className={genre === 'rnbs' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>R&B/Soul</p>
                    </div>
                    <div    
                        onClick={() => setGenre('rock')}
                        className={genre === 'rock' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Rock</p>
                    </div>
                    <div    
                        onClick={() => setGenre('alt')}
                        className={genre === 'alt' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Alt/Punk</p>
                    </div>
                    <div    
                        onClick={() => setGenre('metal')}
                        className={genre === 'metal' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Metal</p>
                    </div>
                    <div    
                        onClick={() => setGenre('folk')}
                        className={genre === 'folk' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Folk</p>
                    </div>
                    <div    
                        onClick={() => setGenre('other')}
                        className={genre === 'other' 
                        ? 'border-4 border-double text-center flex justify-center items-center flex-col border-white text-white p-1    hover:cursor-pointer ' 
                        : 'border-4 border-double text-center flex justify-center items-center flex-col p-1 cursor-pointer text-gray-600 border-gray-600 '}>
                        <p className='text-md font-med'>Other</p>
                    </div>
        
      
                    </div>
                </div>
            </div>
            <div className='flex items-center my-4'>
            <div className="w-full flex flex-col md:flex-row my-4 justify-between items-center">
                <p className='text-4xl text-center my-4 basis-1/4 text-white'>Location</p>
                    <div className='flex items-center basis-3/4'>
                        <div className='flex gap-2 flex-col md:flex-row'>
                            <p className='text-[24px] text-white'>City</p>
                            <input className='ps-2 bg-transparent border-2 border-gray-600'/>
                        </div>
                        <div className='flex gap-2 mx-2 flex-col md:flex-row'>
                            <p className='text-[24px] text-white'>State</p>
                            <input maxLength={2} className='w-8 text-center bg-transparent border-2 border-gray-600'/>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row items-center my-4'>
            <p className='text-4xl md:basis-1/4 my-4 text-center text-white'>Message</p>
                <textarea rows={12} cols={40} className='p-2 bg-transparent border-2 border-gray-600 md:basis-3/4 me-2'/>

            </div>

            <div className='flex w-full my-4'>
            <div className='flex flex-col md:flex-row w-full justify-between'>
                <p className='text-4xl basis-1/4 text-center my-4 text-white'>Email</p>
                <input maxLength={30} className='ps-2 bg-transparent my-4 md:me-2 border-2 mx-auto w-72 border-gray-600 basis-3/4'/>
            </div>
        </div>

        <div className='flex w-full my-4'>
            <div className='flex w-full justify-between mx-2 ms-8 gap-5 mt-8'>
                <button className='w-[90%]'>POST</button>

     
            </div>
        </div>
        </div>
        </div>


  )
}

export default WritePost



