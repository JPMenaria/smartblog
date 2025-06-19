import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-primary/3'>

        <div className='flex flex-col md:flex-row items-start justify-between gap-10 py-10 border-b border-gray-500/30 text-gray-500'> 
            <div>
                <img src={assets.logo} alt="logo" className='w-32 sm:w-44' />
                <p className='max-w-[340px] mt-6'> SmartBlog transforms blogging with AI-driven content creation, research assistance, and SEO optimization. Create engaging, high-quality posts effortlessly and make your blog smarter and more impactful!</p>
            </div>
            <div className='flex flex-wrap justify-between w-full md:w-[45%] gap-5'> 
                {footer_data.map((section,index) => (

                    <div key={index}>

                        <h3 className='font-semibold text-base text-gray-900 md:mb-5 mb-2'>{section.title}</h3> 
                        <ul className='text-sm space-y-1'>
                            {section.links.map((link, i) => (
                                <li key={i}>
                                    <a className = 'hover:underline transition' href='#'> {link}</a>

                                </li>
                            ))}
                        </ul>

                    </div>

                ) )}

            </div>

        </div>


      <p className='py-4 text-center text-sm md:text-base text-gray-500/80'>Copyright 2025 © SmartBlog All Right Reserved</p>  
    </div>
  )
}

export default Footer