import React from 'react'
import { useNavigate } from 'react-router-dom';

const BlogCard = ({blog}) => {
   const {title, description, category, image, _id} = blog;
   const navigate = useNavigate();

   return (
     <div 
       onClick={() => navigate(`/blog/${_id}`)} 
       className='group w-full rounded-2xl overflow-hidden shadow-md bg-white transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl cursor-pointer'
     >
       {/* Image wrapper for smooth zoom */}
       <div className="overflow-hidden">
         <img 
           src={image} 
           alt="" 
           className='aspect-video w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110' 
         />
       </div>

       {/* Content */}
       <div className='p-4 space-y-2'>
         <span className='inline-block px-3 py-1 bg-primary/20 text-primary text-xs rounded-full transition-opacity duration-300 group-hover:opacity-90'>
           {category}
         </span>
         <h5 className='text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-black'>
           {title}
         </h5>
         <p 
           className='text-sm text-gray-600 transition-opacity duration-300 group-hover:opacity-80' 
           dangerouslySetInnerHTML={{__html : description.slice(0,60) + '....'}}
         ></p>
       </div>
     </div>
   )
}

export default BlogCard;
