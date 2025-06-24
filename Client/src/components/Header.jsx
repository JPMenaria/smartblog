import React, { useRef } from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'

const Header = () => {
  const { setInput, input } = useAppContext()
  const inputRef = useRef()

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    setInput(inputRef.current.value)
  }

  const onClear = () => {
    setInput('')
    inputRef.current.value = ''
  }

  return (
    <div
      className='mx-6 sm:mx-16 xl:mx-32 mt-16 relative z-10'
      data-aos='fade-up'
      data-aos-duration='900'
    >
      {/* Badge + Headline */}
      <div className='text-center'>
        <div className='inline-flex items-center gap-3 px-6 py-2 mb-4 border border-primary/30 bg-gradient-to-r from-primary/10 to-white/10 rounded-full text-sm text-primary shadow-sm'>
          <p>🚀 New: AI feature integrated</p>
          <img src={assets.star_icon} className='w-3 animate-pulse' alt="" />
        </div>

        <h1 className='text-4xl sm:text-5xl font-bold sm:leading-[3.5rem] text-gray-800'>
          Your <span className='text-red-500'>AI-Powered</span>{' '}
          <span className='text-primary'>blogging</span><br /> platform
        </h1>

        <p className='my-6 sm:my-8 max-w-2xl mx-auto text-gray-500 text-sm sm:text-base leading-relaxed'>
          Step into a world where creativity meets intelligence. Whether it’s a fleeting thought or a masterpiece in the making, <br />
          <span className='text-red-500'>your blog begins here.</span>
        </p>
      </div>

      {/* Search Bar */}
      <form
        onSubmit={onSubmitHandler}
        className='flex justify-between max-w-xl mx-auto border border-gray-300 bg-white rounded-full overflow-hidden shadow-md transition-all duration-300 focus-within:ring-2 focus-within:ring-primary'
      >
        <input
          ref={inputRef}
          type='text'
          placeholder='Search for blogs'
          required
          className='w-full px-5 py-3 outline-none text-sm'
        />
        <button
          type="submit"
          className='bg-primary text-white px-6 sm:px-8 py-2.5 sm:py-3 m-1 rounded-full hover:scale-105 transition-all duration-300 shadow-sm'
        >
          Search
        </button>
      </form>

      {/* Clear Button */}
      <div className='text-center mt-4'>
        {
          input &&
          <button
            onClick={onClear}
            className='border border-gray-300 bg-white text-gray-600 text-xs px-4 py-1.5 rounded-full shadow hover:bg-gray-100 transition-all'
          >
            Clear Search
          </button>
        }
      </div>

      {/* Background Blur Graphic */}
      <img
        src={assets.gradientBackground}
        alt=""
        className='absolute -top-24 left-0 w-full -z-10 opacity-30 pointer-events-none select-none'
      />
    </div>
  )
}

export default Header
