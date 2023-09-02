import React, { useState } from 'react'


import { Link } from 'react-router-dom'

import 'animate.css';

import Navbar from '../components/Navbar'

import { LuChevronsUpDown } from 'react-icons/lu'
import { FiChevronDown } from 'react-icons/fi'

import Post from '../components/Post'
  


const Posts = () => {




  return (
    <div className='text-white bg-1 bg-no-repeat bg-cover bg-center bg-fixed'>
      <Navbar />
      
      <div className='w-full  h-full'>
        <div className='mx-12'>

          <Link  className='z-50 text-white' to='/writePost'>
            <button className='mt-32 w-full uppercase'>Write a post</button>
          </Link>

        </div>
        
    
        <div className='grid grid-cols-5 mx-12 py-6 items-center'>
          <div className='flex justify-center items-center pl-1'>Gig Type<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex items-center justify-center'>Needs<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex justify-center items-center'>Genre<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex justify-center items-center'>Location<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          <div className='flex justify-center items-center'>Date<LuChevronsUpDown className='text-[var(--red)] ml-1' size={18} /></div>
          {/* <div className='flex z-40 items-center mx-auto'>
            <button className='flex w-28 justify-center'>
              <p className='text-sm'>Sort By</p>
              <FiChevronDown className=' ml-1' size={18} />
            </button>
          </div> */}
        </div>
        <div className='mx-4 md:mx-12 animate__animated animate__slideInUp'>

        {/* title, gigType, roleNeed, genre, location */}

          <Post 

            gigType={'Band'} 
            roleNum={1}
            roleNeed1={'guitar'}
            genre={'Jazz'} 
            location={'Portland, OR'}
            date={'Today'}
          />

          <Post 
            gigType={'Event'}
            roleNum={2}
            roleNeed1={'bass'}
            roleNeed2={'vocals'} 
            genre={'Metal'} 
            location={'Canby, OR'}
            date={'Today'}
          />

          <Post 
            gigType={'Studio'} 
            roleNum={3}
            roleNeed1={'drums'}
            roleNeed2={'vocals'}
            roleNeed3={'other'}
            genre={'Soul'} 
            location={'Seattle, WA'}
            date={'1 Day Ago'}
          />

          <Post 
            gigType={'Jam'} 
            roleNum={4}
            roleNeed1={'guitar'}
            roleNeed2={'vocals'}
            roleNeed3={'drums'}
            roleNeed4={'bass'}
            genre={'Rock'} 
            location={'Portland, OR'}
            date={'1 Day Ago'}
          />


          <Post 
            gigType={'Band'}
            roleNum={1}
            roleNeed1={'guitar'}
            genre={'Jazz'} 
            location={'Portland, OR'}
            date={'2 Days Ago'}
          />

          <Post 
            gigType={'Event'} 
            roleNum={1}
            roleNeed1={'bass'}
            genre={'Metal'} 
            location={'Canby, OR'}
            date={'2 Days Ago'}
          />

          <Post 
            gigType={'Studio'}
            roleNum={5}
            roleNeed1={'vocals'}
            roleNeed2={'drums'}
            roleNeed3={'guitar'}
            roleNeed4={'bass'} 
            roleNeed5={'other'} 
            genre={'Soul'} 
            location={'Seattle, WA'}
            date={'3 Days Ago'}
          />

          <Post 
            gigType={'Jam'} 
            roleNum={6}
            roleNeed1={'vocals'}
            roleNeed2={'guitar'}
            roleNeed3={'bass'}
            roleNeed4={'drums'}
            roleNeed5={'keys'}
            roleNeed6={'other'}
            genre={'Rock'} 
            location={'Portland, OR'}
            date={'1 Week ago'}
          />
          

        </div>
      </div>



    </div>
  )
}

export default Posts
