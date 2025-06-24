import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Loader = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white text-gray-700 space-y-6 px-4">
      {/* SVG Spinner with Glow */}
      <div data-aos="zoom-in" className="relative w-20 h-20">
        <svg className="animate-spin w-full h-full text-primary" viewBox="0 0 50 50">
          <circle
            className="opacity-25"
            cx="25"
            cy="25"
            r="20"
            stroke="currentColor"
            strokeWidth="5"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M25 5a20 20 0 0 1 20 20h-5a15 15 0 0 0-15-15V5z"
          />
        </svg>
        <div className="absolute inset-0 rounded-full bg-white/80 blur-md animate-pulse"></div>
      </div>

      {/* Animated SmartBlog Text */}
      <div data-aos="fade-up" className="text-center">
        <h1 className="text-2xl md:text-3xl font-bold tracking-wider text-primary animate-pulse">
          SmartBlog
        </h1>
        
      </div>
    </div>
  );
};

export default Loader;