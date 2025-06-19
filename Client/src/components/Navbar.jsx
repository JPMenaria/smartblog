import React from 'react'
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { useAppContext } from '../context/AppContext';
const Navbar = () => {

    
    const {navigate, token} = useAppContext()
      

  return (

    <div className='flex items-center py-5 mx-8 sm:mx-32 xl:mx-32'>
  {/* Logo on the left */}
  <img
    src={assets.logo}
    alt="Logo"
    className='w-32 sm:w-40 cursor-pointer'
    onClick={() => {
      navigate('/');
      window.location.href = '/';
    }}
  />

  {/* Buttons aligned to right */}
  <div className='ml-auto flex items-center gap-4'>
    <button
      onClick={() => navigate('/admin')}
      className='group flex items-center gap-2 rounded-full text-sm cursor-pointer bg-primary text-white px-6 py-2.5 transition-transform'
    >
      {token ? 'Dashboard' : 'Admin Login'}
      <img src={assets.arrow} className='w-3 transition-transform duration-300 ease-in-out group-hover:translate-x-1' alt='arrow' />
    </button>

    
  </div>
</div>

  )
}

export default Navbar