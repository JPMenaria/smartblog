import React from 'react'
import { NavLink } from 'react-router-dom'
import { assets } from '../../assets/assets'

const Sidebar = () => {
  return (
    <div className='flex flex-col border-r border-gray-200 min-h-full pt-6 bg-white'>

      <NavLink
        end={true}
        to='/admin'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer group
          transition-all duration-300 ease-in-out
          ${isActive ? 'bg-primary/10 border-r-4 border-primary text-primary font-semibold' : 'hover:bg-gray-50 hover:pl-4'}`
        }
      >
        <img
          src={assets.home_icon}
          alt=""
          className='min-w-4 w-5 opacity-80 group-hover:opacity-100 transition duration-300'
        />
        <p className='hidden md:inline-block transition-colors duration-300'>
          Dashboard
        </p>
      </NavLink>

      <NavLink
        to='/admin/addblog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer group
          transition-all duration-300 ease-in-out
          ${isActive ? 'bg-primary/10 border-r-4 border-primary text-primary font-semibold' : 'hover:bg-gray-50 hover:pl-4'}`
        }
      >
        <img
          src={assets.add_icon}
          alt=""
          className='min-w-4 w-5 opacity-80 group-hover:opacity-100 transition duration-300'
        />
        <p className='hidden md:inline-block transition-colors duration-300'>
          Add Blog
        </p>
      </NavLink>

      <NavLink
        to='/admin/listBlog'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer group
          transition-all duration-300 ease-in-out
          ${isActive ? 'bg-primary/10 border-r-4 border-primary text-primary font-semibold' : 'hover:bg-gray-50 hover:pl-4'}`
        }
      >
        <img
          src={assets.list_icon}
          alt=""
          className='min-w-4 w-5 opacity-80 group-hover:opacity-100 transition duration-300'
        />
        <p className='hidden md:inline-block transition-colors duration-300'>
          List Blog
        </p>
      </NavLink>

      <NavLink
        to='/admin/comments'
        className={({ isActive }) =>
          `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-64 cursor-pointer group
          transition-all duration-300 ease-in-out
          ${isActive ? 'bg-primary/10 border-r-4 border-primary text-primary font-semibold' : 'hover:bg-gray-50 hover:pl-4'}`
        }
      >
        <img
          src={assets.comment_icon}
          alt=""
          className='min-w-4 w-5 opacity-80 group-hover:opacity-100 transition duration-300'
        />
        <p className='hidden md:inline-block transition-colors duration-300'>
          Comments
        </p>
      </NavLink>

    </div>
  )
}

export default Sidebar
