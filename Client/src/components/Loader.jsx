import React from 'react'

const Loader = () => {
  return (
    <div className='flex justify-center items-center h-screen bg-white'>
        <div className='w-16 h-16 border-4 border-dashed rounded-full animate-spin border-gray-700 border-t-transparent'> 
        </div>
       <div className="fixed bottom-10 left-1/2 transform -translate-x-1/2 text-gray-600 font-medium text-lg animate-pulse">
  Loading...
</div>
    </div>
     
  )
}

export default Loader