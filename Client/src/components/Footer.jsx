import React from 'react';
import { assets } from '../assets/assets';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 bg-white border-t border-gray-200 text-gray-600">

      {/* Top Content */}
      <div
        className="flex flex-col md:flex-row justify-between gap-12 py-14"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Logo & Description */}
        <div className="max-w-md">
          <img src={assets.logo} alt="SmartBlog Logo" className="w-32 sm:w-44 mb-4" />
          <p className="text-sm leading-relaxed opacity-80 hover:opacity-100 transition-opacity duration-300">
            SmartBlog empowers creators with AI-powered writing tools, SEO optimization, and effortless publishing. Focus on your ideas, we handle the rest.
          </p>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 w-full md:w-[60%]">
          {/* Quick Links */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-purple-600 hover:underline transition-all">Home</a></li>
              <li><a href="/about" className="hover:text-purple-600 hover:underline transition-all">About</a></li>
              <li><a href="/contact" className="hover:text-purple-600 hover:underline transition-all">Contact</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-base">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/write" className="hover:text-purple-600 hover:underline transition-all">Write a Blog</a></li>
              <li><a href="/popular" className="hover:text-purple-600 hover:underline transition-all">Popular Posts</a></li>
              <li><a href="/tools" className="hover:text-purple-600 hover:underline transition-all">AI Tools</a></li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-gray-900 font-semibold mb-4 text-base">Follow Us</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-600 transition-all">
                  <FaGithub /> GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-600 transition-all">
                  <FaLinkedin /> LinkedIn
                </a>
              </li>
              <li>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-purple-600 transition-all">
                  <FaInstagram /> Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center py-6 text-sm text-gray-400" data-aos="fade-in" data-aos-delay="100">
        © 2025 <span className="font-medium text-gray-600">SmartBlog</span> — All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
