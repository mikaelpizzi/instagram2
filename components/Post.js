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
  FaceSmileIcon,
} from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import ReadMore from './ReadMore'

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
      <div className='p-5'>
        <span className='font-bold mr-1'>{username} </span>
        <ReadMore
          text={caption}
        />
      </div>

      {/* Comments */}

      {/* Input box */}
      <form className='flex items-center p-4'>
        <FaceSmileIcon className='h-7 cursor-pointer' />
        <input 
          type='text' 
          placeholder='Add a comment...'
          className='border-none flex-1 focus:ring-0 outline-none'
        />
        <button className='font-semibold text-blue-500'>Post</button>
      </form>

    </div>
  )
}

export default Post
 