import Image from 'next/image'
import React from 'react'
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'


function Header() {
  return (
    <div
      className='shadow-sm border-b bg-white sticky top-0 z-50'
    >
      <div
        className='flex justify-between bg-white max-w-6xl mx-5 lg:mx-auto'
      >
        {/* Left */}
        <div
          className='relative hidden lg:inline-grid w-24 cursor-pointer'
        >
          <Image 
            src='https://links.papareact.com/ocw'
            alt='Instagram logo'
            fill
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            priority={true}
            style={{objectFit: 'contain'}}
          />
        </div>

        <div
          className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'
        >
          <Image 
            src='https://links.papareact.com/jjm'
            alt='Instagram mobile logo'
            fill
            sizes='(max-width: 768px) 100vw,
            (max-width: 1200px) 50vw,
            33vw'
            priority={true}
            style={{objectFit: 'contain'}}
          />
        </div>


        {/* Middle / search input field */}
        <div className='max-w-xs'>
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
              <MagnifyingGlassIcon className='w-5 text-gray-500' />
            </div>
            <input
              type='text'
              placeholder='Search'
              className='bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md'
              />
          </div>
        </div>

        {/* Right */}
        <div className='flex items-center justify-end space-x-4'>
          <HomeIcon className='navBtn' />
          <Bars3Icon className='h-6 md:hidden cursor-pointer' />

          <div className='relative navBtn'>
            <ChatBubbleOvalLeftEllipsisIcon className='navBtn' />
            <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
          </div>
          <PlusCircleIcon className='navBtn' />
          <UserGroupIcon className='navBtn' />
          <HeartIcon className='navBtn' />

          <img src='https://i.ibb.co/9ynhXSR/paimoncashhd.jpg' alt='Profile picture' className='h-10 w-auto rounded-full cursor-pointer' />
          
        </div>


      </div>
    </div>
  )
}

export default Header
