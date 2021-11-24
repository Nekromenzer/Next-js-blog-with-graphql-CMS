import React, { useState, useEffect, useRef } from 'react'

const CommentsForm = () => {
  const [error, setError] = useState(false)
  const [localStorage, setLocalStorage] = useState(null)
  const [successMsg, setSuccessMsg] = useState(false)
  const commentEl = useRef()
  const nameEl = useRef()
  const emailEl = useRef()
  const storeDataEl = useRef()

  return (
    <div className='bg-white shadow-lg rounded-lg p-8'>
      <h3 className='text-xl mb-8 font-semibold border-b pb-4'>asdasd</h3>
      <div className='grid grid-cols-1 gap-4 mb-4'>
        <textarea
          ref={commentEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Comment'
          name='comment'
        ></textarea>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4'>
        <input
          type='text'
          ref={nameEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Name'
          name='name'
        />
        <input
          type='email'
          ref={nameEl}
          className='p-4 outline-none w-full rounded-lg focus:ring-gray-200 bg-gray-100 text-gray-700'
          placeholder='Email'
          name='email'
        />
      </div>
      {error && ( <p className='text-xs text-red-500'>All fields are required!</p>)}
    </div>
  )
}

export default CommentsForm
