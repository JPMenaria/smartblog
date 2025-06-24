import React from 'react'

const Newsletter = () => {
  return (
    <div
      className='flex flex-col items-center justify-center text-center space-y-4 py-24 px-6 bg-gradient-to-t from-white to-gray-50'
      data-aos="fade-up"
      data-aos-duration="1000"
    >
      <h1 className='md:text-4xl text-2xl font-bold text-gray-800 leading-snug'>
        Be the first to know, always!
      </h1>

      <p className='md:text-lg text-base text-gray-500 max-w-2xl'>
        <span className='text-primary font-medium'>Stay ahead</span> — 
        <span className='text-red-500'> subscribe now for the latest blog, non-tech insights, and exclusive news.</span>
      </p>

      {/* Email Form */}
      <form
        className='flex w-full max-w-2xl border border-gray-300 rounded-xl overflow-hidden shadow-sm mt-4'
        data-aos="zoom-in"
        data-aos-delay="100"
      >
        <input
          type="text"
          placeholder='Enter your email'
          required
          className='w-full px-4 py-3 text-sm text-gray-700 placeholder-gray-400 focus:outline-none'
        />
        <button
          type="submit"
          className='px-6 bg-primary text-white text-sm font-medium hover:bg-primary/90 transition-all'
        >
          Subscribe
        </button>
      </form>

      {/* Become a Blogger CTA */}
      <button
        onClick={() => window.location.href = "/become-blogger"}
        className='mt-6 px-6 py-3 bg-primary text-white text-sm font-semibold rounded-lg shadow hover:bg-primary/90 transition-all cursor-pointer'
        data-aos="fade-up"
        data-aos-delay="200"
      >
        Become a Blogger
      </button>
    </div>
  )
}

export default Newsletter
