import React, { useEffect, useState } from 'react'
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
import { HomeIcon, HeartIcon as HeartIconFilled } from '@heroicons/react/24/solid'
import ReadMore from './ReadMore'
import { useSession } from 'next-auth/react'
import { async } from '@firebase/util'
import { addDoc, collection, deleteDoc, doc, onSnapshot, orderBy, query, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from '../firebase'
import Moment from 'react-moment'

function Post({ id, username, userImg, img, caption }) {

  const { data: session } = useSession();
  const [ comment, setComment ] = useState('');
  const [ comments, setComments ] = useState([]);
  const [ likes, setLikes ] = useState([]);
  const [ hasLiked, setHasLiked ] = useState(false);

  useEffect(() => 
    onSnapshot(
      query(
        collection(db, 'posts', id, 'comments'), 
        orderBy('timestamp', 'desc')
      ), 
      snapshot => setComments(snapshot.docs)
    ), 
  [db, id]);

  useEffect(() => 
    onSnapshot(
      collection(db, 'posts', id, 'likes'), 
      snapshot => setLikes(snapshot.docs)
    ), 
  [db, id]);

  useEffect(() =>
    setHasLiked(
      likes.findIndex(like => like.id === session?.user?.userid) !== -1
    ),
  [likes]);

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.userid));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.userid), {
        username: session.user.username,
      });
    }
  }

  const sendComment = async (e) => {
    e.preventDefault();

    const commentToSend = comment;
    setComment('');

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      username: session.user.username,
      userImage: session.user.image,
      timestamp: serverTimestamp(),
    });
  }

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

      { session && (
        <div className='flex justify-between px-4 pt-4 pb-2'>
          <div className='flex space-x-4 items-center'>
            { hasLiked ? (
              <HeartIconFilled
                onClick={likePost}
                className='btn text-red-500' 
              />
            ) : (
              <HeartIcon 
                onClick={likePost}
                className='btn' 
              />
            )}
            <ChatBubbleOvalLeftIcon className='btn' />
            <PaperAirplaneIcon className='btn -rotate-45 mb-[5px]' />
          </div>
          <div>
            <BookmarkIcon className='btn' />
          </div>
        </div>
      )}

      {/* Caption */}
      <div className='p-5'>
        { likes.length > 0 && (
          <>
            { likes.length === 1 ? (
              <p
              className='font-bold mb-1'
              >{likes.length} like</p>
            ) : (
              <p
              className='font-bold mb-1'
              >{likes.length} likes</p>
              )}
          </>
        )}
        <span className='font-bold mr-1'>{username} </span>
        <ReadMore
          text={caption}
        />
      </div>

      {/* Comments */}
      { comments.length > 0 && (
        <div
          className='ml-10 h-20 overflow-y-scroll scrollbar-thumb-black scrollbar-thin'
        >
          { comments.map(comment => (
            <div
              key={comment.id}
              className='flex items-center space-x-2 mb-3'
            >
              <img
                src={comment.data().userImage}
                alt='User image of the author of the comment'
                className='h-7 rounded-full'
              />

              <p
                className='text-sm flex-1'
              >
                <span 
                  className='font-bold'
                >
                  {comment.data().username}
                </span>
                {' '}
                {comment.data().comment}
              </p>

              <Moment
                fromNow
                className='pr-5 text-xs'
              >
                {comment.data().timestamp?.toDate()}
              </Moment>
            </div>
          ))}
        </div>
      )}

      {/* Input box */}
      { session && (
        <form className='flex items-center p-4'>
          <FaceSmileIcon className='h-7 cursor-pointer' />
          <input 
            type='text'
            value={comment}
            onChange={e => setComment(e.target.value)}
            placeholder='Add a comment...'
            className='border-none flex-1 focus:ring-0 outline-none'
            />
          <button
            type='submit'
            disabled={!comment.trim()}
            onClick={sendComment}
            className='font-semibold text-blue-500'>Post</button>
        </form>
      )}

    </div>
  )
}

export default Post
 