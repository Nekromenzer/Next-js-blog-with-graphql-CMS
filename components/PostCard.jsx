import React from 'react'
import moment from 'moment'
import Link from 'next/link'
import Image from 'next/image';
import { FcCalendar } from 'react-icons/fc'

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 mb-8'>
      <div className='relative overflow-hidden shadow-md mb-6'>
        <img
          src={post.featuredImage?.url}
          className='w-full h-full object-cover object-top h-80 shadow-lg rounded-t-lg lg:rounded-lg'
          alt={post.title}
        />
      </div>
      <h1 className='transition duration-300 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>{post.title}</Link>
      </h1>
      <div className="block lg:flex text-center items-center justify-center mb-8 w-full">
      <div className="flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8 items-center">
        <img
          alt={post.author.name}
          className="align-middle rounded-full h-7 w-7"
          src={post.author.photo.url}
        />
        <p className="inline align-middle text-gray-700 ml-2 font-medium text-lg">{post.author.name}</p>
      </div>
      <div className="font-medium text-gray-700">
        <FcCalendar className="h-6 w-6 inline mr-2 text-pink-500" />
        <span className="align-middle">{moment(post.createdAt).format('MMM DD, YYYY')}</span>
      </div>
    </div>
    <p className="text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8">
      {post.excerpt}
    </p>
    <div className="text-center pb-6 lg:pb-4">
      <Link href={`/post/${post.slug}`}>
        <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer">Continue Reading</span>
      </Link>
    </div>
    </div>
  )
}

export default PostCard
