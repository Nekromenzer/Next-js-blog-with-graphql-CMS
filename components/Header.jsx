import React, { useContext } from 'react'
import Link from 'next/link'

const Header = () => {
  const categories = [
    { name: 'React', slug: 'react' },
    { name: 'Next', slug: 'next' }
  ]
  return (
    <div className='container mx-auto px-10 mb-8'>
      <div className='border-b w-full inline-block border-blue-400 py-400'>
        <div className='md:float-left block'>
          <Link href='/'>
            <span className='cursor-pointer font-bold text-4xl text-white'>
              GraphCms
            </span>
          </Link>
        </div>
        <div className='hidden md:float-left md:contents'>
          {categories.map(category => (
            <Link key={categories.slug} href={`/category/${categories.slug}`}>
              <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                {categories.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
