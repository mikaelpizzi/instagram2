import React from 'react'
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  Bars3Icon,
  ChatBubbleOvalLeftEllipsisIcon,
  ChatBubbleOvalLeftIcon,
  EllipsisHorizontalIcon,
  ChatBubbleLeftIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

function Post({ id, username, userImg, img, caption }) {
  return (
    <div className='bg-white my-7 border rounded-sm'>

      {/* Header */}
      <div className='flex items-center p-5'>
        <img 
          src={userImg} 
          alt={`User image of ${username}`} 
          className='rounded-full h-12 w-12 object-contain border p-1 mr-3' 
        />
        <p
          className='flex-1 font-bold'
        >{username}</p>
        <EllipsisHorizontalIcon className='h-5 cursor-pointer' />
      </div>

      {/* Image */}
      <img
        src={img}
        alt={`Image posted by ${username} saying: ${caption}`}
        className='object-cover w-full'
      />

      {/* Buttons */}
      <div className='flex justify-between px-4 pt-4 pb-2'>
        <div className='flex space-x-4 items-center'>
          <HeartIcon className='btn' />
          <ChatBubbleOvalLeftIcon className='btn' />
          <PaperAirplaneIcon className='btn -rotate-45 mb-[5px]' />
        </div>
        <div>
          <BookmarkIcon className='btn' />
        </div>
      </div>
      {/* Caption */}
      {/* Comments */}
      {/* Input box */}

    </div>
  )
}

export default Post
