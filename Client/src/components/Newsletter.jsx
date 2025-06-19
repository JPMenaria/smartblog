import React from 'react'

const Newsletter = () => {
  return (
    <div className='flex flex-col items-center justify-center text-center space-y-2 my-32'>
        <h1 className='md:text-4xl text-2xl font-semibold'>Be the first to know, always!</h1>
        <p className='md:text-lg text-gray-500/70 pb-8'> <span className='text-primary'>Stay ahead</span>— <span className='text-red-500'>subscribe now for the latest blog, non-tech insights, and exclusive news.</span></p>
        <form className='flex items-center justify-between max-w-2xl w-full md:h-13 h-12'> 
            <input className='border border-gray-300 rounded-md h-full border-r-0 outline-none w-full rounded-r-none px-3 text-gray-500' type= "text" placeholder='Enter your email id' required/>
            <button type="submit" className='md:px-12 px-8 h-full text-white bg-primary/80 hover:bg-primary transition-all cursor-pointer rounded-md rounded-l-none'>Subscribe</button>
        </form>
        {/* Become a Blogger Button */}
        <button 
        onClick={() => window.location.href = "/become-blogger"} 
        className='mt-6 px-8 py-3 bg-primary/80 text-white font-medium rounded-md hover:bg-primary transition-all shadow-md cursor-pointer'
      >
        Become a Blogger
      </button>
    </div>
  )
}

export default Newsletter