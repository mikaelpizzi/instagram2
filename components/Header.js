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
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
  const { data: session } = useSession();
  const router = useRouter();
  const [ open, setOpen ] = useRecoilState(modalState)

  return (
    <div
      className='shadow-sm border-b bg-white sticky top-0 z-50'
    >
      <div
        onClick={() => router.push('/')}
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
          onClick={() => router.push('/')}
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

          { session ? (
            <div className="ml-10 dropdown transition-all ease-in">
              <Bars3Icon className='h-6 md:hidden cursor-pointer' />
              <div className="dropdown-content">
                  <div 
                    className='drop-link' 
                  >
                      <span className='drop-text'>Home</span>
                      <HomeIcon 
                        onClick={() => router.push('/')}
                        className='drop-navBtn' 
                      />
                  </div>
                  <div className='drop-link flex'>
                      <span className='drop-text'>Messages</span>
                      <div className='relative drop-navBtn'>
                          <ChatBubbleOvalLeftEllipsisIcon className='drop-navBtn align-center' />
                          <div className='absolute -top-2 right-0 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
                      </div>
                  </div>

                  <div className='drop-link'>
                      <span className='drop-text'>Publish</span>
                      <PlusCircleIcon className='drop-navBtn' />
                  </div>
                  <div className='drop-link'>
                      <span className='drop-text'>Explore</span>
                      <UserGroupIcon className='drop-navBtn' />
                  </div>
                  <div className='drop-link'>
                      <span className='drop-text'>Activity</span>
                      <HeartIcon className='drop-navBtn' />
                  </div>
              </div>
            </div>
          ) : (
            <>
              <div className="ml-10 dropdown transition-all ease-in">
                <Bars3Icon className='h-6 md:hidden cursor-pointer' />
                <div className="dropdown-content">
                    <div 
                      className='drop-link'
                    >
                        <span className='drop-text'>Home</span>
                        <HomeIcon 
                          className='drop-navBtn' 
                          onClick={() => router.push('/')}
                        />
                    </div>
                </div>
              </div>
            </>
          ) }
          <HomeIcon 
            onClick={() => router.push('/')}
            className='navBtn' 
          />

          { session ? (
            <>
              <div className='relative navBtn'>
                <ChatBubbleOvalLeftEllipsisIcon className='navBtn' />
                <div className='absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white'>3</div>
              </div>
              <PlusCircleIcon className='navBtn' />
              <UserGroupIcon className='navBtn' />
              <HeartIcon className='navBtn' />
              <img 
                onClick={signOut}
                src={session.user.image} 
                alt='Profile picture' 
                className='h-10 w-10 rounded-full cursor-pointer' 
              />
            </>
          ) : ( <button onClick={signIn}>Sign in</button> )}
        </div>
      </div>
    </div>
  )
}

export default Header
