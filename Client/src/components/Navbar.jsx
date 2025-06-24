import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext'

const Navbar = () => {
  const { navigate, token } = useAppContext()

  return (
    <div
      className='flex items-center py-4 px-4 sm:px-16 xl:px-32 bg-white/30 backdrop-blur-md shadow-md border border-gray-200 rounded-xl mx-4 sm:mx-16 xl:mx-32'
      data-aos='fade-down'
      data-aos-duration='800'
    >
      {/* Logo on the left */}
      <img
        src={assets.logo}
        alt="Logo"
        className='w-28 sm:w-36 cursor-pointer transition-all duration-300 hover:scale-105'
        onClick={() => {
          navigate('/');
          window.location.href = '/';
        }}
      />

      {/* Buttons aligned to right */}
      <div className='ml-auto flex items-center gap-4'>
        <button
          onClick={() => navigate('/admin')}
          className='group flex items-center gap-2 rounded-full text-sm font-medium bg-primary text-white px-5 py-2.5 transition-all duration-300 hover:bg-primary/90 hover:scale-105 shadow-md'
        >
          {token ? 'Dashboard' : 'Admin Login'}
          <img
            src={assets.arrow}
            className='w-3 transition-transform duration-300 group-hover:translate-x-1'
            alt='arrow'
          />
        </button>
      </div>
    </div>
  )
}

export default Navbar
