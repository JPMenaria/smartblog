import React, { useState } from 'react'
import { blog_data, blogCategories } from '../assets/assets'
import { motion } from "motion/react"
import BlogCard from './BlogCard'
import { useAppContext } from '../context/AppContext'

const BlogList = () => {
  const [menu, setMenu] = useState("All")
  const { blogs, input } = useAppContext()

  const filteredBlogs = () => {
    if (input === '') {
      return blogs
    }
    return blogs.filter((blog) =>
      blog.title.toLowerCase().includes(input.toLowerCase()) ||
      blog.category.toLowerCase().includes(input.toLowerCase())
    )
  }

  return (
    <div className="pt-10 pb-20 bg-gradient-to-b from-white to-gray-50">
      {/* Category Menu */}
      <div
        className='flex justify-center flex-wrap gap-3 sm:gap-6 mb-12 px-6'
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {blogCategories.map((item) => (
          <div key={item} className='relative'>
            <button
              onClick={() => setMenu(item)}
              className={`relative z-10 px-4 py-1.5 text-sm sm:text-base font-medium rounded-full transition-all duration-300 ease-in-out 
                ${menu === item
                  ? 'bg-primary text-white shadow-lg shadow-primary/30'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-primary'}`}
            >
              {item}
              {menu === item && (
                <motion.div
                  layoutId='underline'
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className='absolute inset-0 bg-primary rounded-full -z-10'
                />
              )}
            </button>
          </div>
        ))}
      </div>

      {/* Blog Cards */}
      <div
        className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 px-6 sm:px-16 xl:px-32'
        data-aos="fade-up"
        data-aos-delay="100"
        data-aos-duration="1000"
      >
        {filteredBlogs()
          .filter((blog) => menu === "All" ? true : blog.category === menu)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    </div>
  )
}

export default BlogList
