import React from 'react'
import Link from 'next/link'
const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Development', slug: 'reweb-dev' },
  { name: 'Phyton', slug: 'phyton-kingdom' },
]

const Header = () => {
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <Link href="/">
            <span className="cursor-pointer text-4xl font-bold text-white">
              GraphCMS
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category) => (
            <Link href={`/category/${category.slug}`} key={category.slug}>
                <span className='md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer'>
                    {category.name}
                </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Header
