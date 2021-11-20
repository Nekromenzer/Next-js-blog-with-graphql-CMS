import React from 'react'
import moment from 'moment'
import Link from 'next/link'

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
      <h1 className='transaition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold'>
        <Link href={`/post/${post.slug}`}>
          <a>{post.title}</a>
        </Link>
      </h1>
    </div>
  )
}

export default PostCard
