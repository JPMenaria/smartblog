import React from 'react'
import { assets, footer_data } from '../assets/assets'

const Footer = () => {
  return (
    <div className='px-6 md:px-16 lg:px-24 xl:px-32 bg-white border-t border-gray-200'>

      {/* Main Footer Content */}
      <div
        className='flex flex-col md:flex-row items-start justify-between gap-12 py-14 text-gray-600'
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Logo + Description */}
        <div className='max-w-md'>
          <img src={assets.logo} alt="logo" className='w-32 sm:w-44 mb-4' />
          <p className='text-sm leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300'>
            SmartBlog transforms blogging with AI-driven content creation, research assistance, and SEO optimization. Create engaging, high-quality posts effortlessly and make your blog smarter and more impactful!
          </p>
        </div>

        {/* Footer Links */}
        <div className='grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-[55%]'>
          {footer_data.map((section, index) => (
            <div key={index}>
              <h3 className='text-gray-900 font-semibold mb-4 text-base'>{section.title}</h3>
              <ul className='space-y-2 text-sm'>
                {section.links.map((link, i) => (
                  <li key={i}>
                    <a
                      href="#"
                      className='hover:text-primary hover:underline transition-all duration-300'
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className='text-center py-6 text-sm text-gray-400' data-aos="fade-in" data-aos-delay="100">
        © 2025 <span className='font-medium text-gray-600'>SmartBlog</span> — All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
