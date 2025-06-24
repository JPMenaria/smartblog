// Login.jsx

import React, { useState, useEffect } from 'react';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import AOS from 'aos';
import 'aos/dist/aos.css';


import { data } from 'react-router-dom';

const Login = () => {
    const { axios, setToken } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        AOS.init({
            duration: 800,
            once: true,
            easing: 'ease-in-out-quad',
        });
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('/api/admin/login', { email, password });
            if (data.success) {
                setToken(data.token);
                localStorage.setItem('token', data.token);
                axios.defaults.headers.common['Authorization'] = data.token;
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        // The !bg-black class will FORCE the background to be black, overriding any other global styles.
        <div className='flex min-h-screen items-center justify-center !bg-sky-200  p-4'>
            
            <div 
                data-aos="zoom-in"
                className="w-full max-w-md rounded-xl bg-white p-8 md:p-12 shadow-2xl"
            >
                <div className="text-center mb-10">
                    <div className="inline-block p-3 bg-gray-100 rounded-full mb-5" data-aos="fade-up">
                         {/* Logo with Black Accent */}
                         <svg className="w-10 h-10 text-black" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M16.1218 3.51515L17.6568 2L22.4853 6.82843L20.9502 8.36348M14.5868 5.05025L19.4152 9.87868L9.87868 19.4152L5.05025 14.5868L14.5868 5.05025ZM7.87868 22.2437L6.34365 20.7086L2 22.4853L3.77665 18.2239L5.31168 19.7589L7.87868 22.2437Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </div>
                    <h1 data-aos="fade-up" data-aos-delay="100" className='text-4xl font-bold text-black'>
                        SmartBlog Console
                    </h1>
                    <p data-aos="fade-up" data-aos-delay="200" className='text-gray-600 mt-2'>
                        Secure Access for Administrators
                    </p>
                </div>

                <form onSubmit={handleSubmit} className='flex flex-col gap-5 w-full'>
                    <div data-aos="fade-up" data-aos-delay="300">
                        <label className="sr-only" htmlFor="email">Email Address</label>
                        <input
                            id="email"
                            onChange={e => setEmail(e.target.value)}
                            value={email}
                            type="email"
                            required
                            placeholder='Email Address'
                            className='w-full px-4 py-3 rounded-lg bg-gray-50 text-black placeholder-gray-500 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                        />
                    </div>

                    <div data-aos="fade-up" data-aos-delay="400">
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input
                            id="password"
                            onChange={e => setPassword(e.target.value)}
                            value={password}
                            type="password"
                            required
                            placeholder='Password'
                            className='w-full px-4 py-3 rounded-lg bg-gray-50 text-black placeholder-gray-500 border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all'
                        />
                    </div>
                    
                    <div data-aos="fade-up" data-aos-delay="500">
                        <button
                            type="submit"
                            className='w-full py-3 mt-2 px-4 font-bold bg-black text-white rounded-lg shadow-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black transition-all duration-300 transform hover:scale-105 cursor-pointer'
                        >
                            Enter Console
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;