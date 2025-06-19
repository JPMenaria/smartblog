import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
   const {title, description, category, image, _id} = blog;

   const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`/blog/${_id}`)} className='group w-full rounded-2xl overflow-hidden shadow-md hover:shadow-xl bg-white transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] cursor-pointer'>
      <img src={image} alt="" className='aspect-video w-full object-cover transition-transform duration-500 group-hover:scale-104'/>

      {/* <span className='ml-5 mt-4 px-3 py-1 inline-block bg-primary/20 rounded-full
text-primary text-xs'>{category}</span>
    <div>  */}
    <div className='p-4 space-y-2'>
        <span className='inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full transition-opacity duration-300 group-hover:opacity-90'>
          {category}
        </span>
      <h5 className='text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-black'>{title}</h5>
      <p className='text-sm text-gray-600 transition-opacity duration-300 group-hover:opacity-80' dangerouslySetInnerHTML={{__html : description.slice(0,60) + '....'}}></p>
    </div>
    </div>
  )
}

export default BlogCard