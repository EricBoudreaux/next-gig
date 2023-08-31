import React, { useState } from 'react'

import Navbar from '../components/Navbar'

import { LuChevronsUpDown } from 'react-icons/lu'
import { FiChevronDown } from 'react-icons/fi'
import Post from '../components/Post'
import WritePost from '../components/WritePost'


const Posts = () => {


const [postModal, setPostModal] = useState(false)

const showModal = () => {
  setPostModal(!postModal);
}

  return (
    <div className='text-white bg-1 bg-no-repeat bg-cover bg-center bg-fixed'>
      <Navbar />
      
      <div className='w-full  h-full'>
        <div className='mx-12'>
          <button onClick={() => setPostModal(!postModal)} className='mt-32 w-full uppercase'>Write a post</button>
        </div>
        {postModal ? <WritePost showModal={showModal} /> : null}
        <div className='grid grid-cols-5 px-6 py-6 items-center'>
          <div className='flex mx-auto'>Title<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex justify-center md:ml-8 lg:ml-16'>Gig Type<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex mx-auto'>Needs<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex justify-center md:mr-4'>Genre<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex justify-center md:mr-12'>Location<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          {/* <div className='flex z-40 items-center mx-auto'>
            <button className='flex w-28 justify-center'>
              <p className='text-sm'>Sort By</p>
              <FiChevronDown className=' ml-1' size={18} />
            </button>
          </div> */}
        </div>
        <div className='mx-4 md:mx-12'>

        {/* title, gigType, roleNeed, genre, location */}

          <Post 
            title={'Looking for guitarist'} 
            gigType={'Band'} 
            genre={'Jazz'} 
            location={'Portland, OR'}
          />

          <Post 
            title={'Need a bassist ASAP'} 
            gigType={'Event'} 
            genre={'Metal'} 
            location={'Canby, OR'}
          />

          <Post 
            title={'Need help in the studio'} 
            gigType={'Studio'} 
            genre={'Soul'} 
            location={'Seattle, WA'}
          />

          <Post 
            title={'Looking for fun jams'} 
            gigType={'Jam'} 
            genre={'Rock'} 
            location={'Portland, OR'}
          />


<Post 
            title={'Looking for guitarist'} 
            gigType={'Band'} 
            genre={'Jazz'} 
            location={'Portland, OR'}
          />

          <Post 
            title={'Need a bassist ASAP'} 
            gigType={'Event'} 
            genre={'Metal'} 
            location={'Canby, OR'}
          />

          <Post 
            title={'Need help in the studio'} 
            gigType={'Studio'} 
            genre={'Soul'} 
            location={'Seattle, WA'}
          />

          <Post 
            title={'Looking for fun jams'} 
            gigType={'Jam'} 
            genre={'Rock'} 
            location={'Portland, OR'}
          />
          

        </div>
      </div>



    </div>
  )
}

export default Posts
