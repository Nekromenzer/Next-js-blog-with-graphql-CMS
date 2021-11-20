import Head from 'next/head'

export default function Home () {
  const posts = [
    { title: 'React test', excerpt: 'learn react now' },
    { title: 'React with tailwind', excerpt: 'learn react later' }
  ]
  return (
    <div className='container mx-auto px-10 mb-8'>
      <Head>
        <title>Next Blog</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className='lg:col-span-8 col-span-8'>
          {posts.map((post, index) => (
            <div>
              {post.title}
              {post.excerpt}
            </div>
          ))}
        </div>
      </div>
      <div className='lg:col-span-4 col-span-1'>
        <div className='lg:sticky relative top-8'>
          
        </div>
      </div>
    </div>
  )
}
