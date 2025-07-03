import React, { useEffect, useState } from 'react';

// Simple Navbar Component
const Navbar = () => (
  <nav 
    className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md shadow-sm"
    data-aos="fade-down"
    data-aos-duration="500"
  >
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex justify-between items-center h-16">
        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">
          SmartBlog
        </span>
        <a 
          href="/" 
          className="px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100 font-medium transition-colors"
        >
          Home
        </a>
      </div>
    </div>
  </nav>
);

// Creative Icons for sections
const VisionIcon = () => (
  <svg className="w-10 h-10 mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.293 2.293a1 1 0 010 1.414L11 12l4.293 4.293a1 1 0 01-1.414 1.414L10 13.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 12 4.293 7.707a1 1 0 011.414-1.414L10 10.586l3.293-3.293a1 1 0 011.414 0z"></path></svg>
);

const TechStackIcon = () => (
  <svg className="w-10 h-10 mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
);

const WhySmartBlogIcon = () => (
  <svg className="w-10 h-10 mb-4 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
);

const FounderCard = ({ name, role, imageUrl, aosType, aosDelay, social }) => (
  <div
    className="w-full max-w-xs"
    data-aos={aosType}
    data-aos-delay={aosDelay}
    data-aos-anchor-placement="top-bottom"
  >
    <div className="bg-white rounded-lg p-6 text-center h-full shadow-lg border border-gray-200/80 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <img
        src={imageUrl}
        alt={name}
        className="w-24 h-24 rounded-full object-cover mb-4 mx-auto border-2 border-purple-300 shadow-md"
        onError={(e) => { e.target.onerror = null; e.target.src=`https://placehold.co/96x96/f9fafb/8b5cf6?text=${name.charAt(0)}`; }}
        data-aos="zoom-in"
        data-aos-delay={aosDelay + 100}
      />
      <h3 className="text-xl font-bold text-gray-800" data-aos="fade-up" data-aos-delay={aosDelay + 150}>{name}</h3>
      <p className="text-purple-600 mb-4 font-medium" data-aos="fade-up" data-aos-delay={aosDelay + 200}>{role}</p>
      <div className="flex space-x-4 justify-center" data-aos="fade-up" data-aos-delay={aosDelay + 250}>
        {social.linkedin && <a href={social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg></a>}
        {social.github && <a href={social.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-purple-600 transition-colors"><svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.168 6.839 9.492.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.031-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.378.203 2.398.1 2.651.64.7 1.03 1.595 1.03 2.688 0 3.848-2.338 4.695-4.566 4.942.359.308.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.001 10.001 0 0022 12c0-5.523-4.477-10-10-10z" clipRule="evenodd"/></svg></a>}
      </div>
    </div>
  </div>
);

const FeatureItem = ({ icon, title, desc, delay }) => (
  <li 
    className="flex items-start" 
    data-aos="fade-left" 
    data-aos-delay={delay}
    data-aos-anchor-placement="top-bottom"
  >
    <span className="text-xl mr-4 text-purple-500">{icon}</span>
    <div>
      <h4 className="font-bold text-gray-800">{title}</h4>
      <p className="text-gray-500 text-sm">{desc}</p>
    </div>
  </li>
);

const About = () => {
  const [aosReady, setAosReady] = useState(false);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://unpkg.com/aos@2.3.1/dist/aos.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    script.async = true;
    script.onload = () => {
      if (window.AOS) {
        window.AOS.init({
          duration: 800,
          easing: 'ease-out-quart',
          once: true,
          mirror: false,
          anchorPlacement: 'top-bottom',
        });
        setAosReady(true);
      }
    };
    document.body.appendChild(script);

    return () => {
      if (document.head.contains(link)) {
        document.head.removeChild(link);
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const team = [
    { name: 'JP Menaria', role: 'Backend Developer', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/970065669507229619', social: { linkedin: '#', github: '#' } },
    { name: 'Arjun Teli', role: 'Frontend Architect & UI/UX Designer', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/4796363876289995601', social: { linkedin: '#', github: '#' } },
    { name: 'Kartik Joshi', role: 'Frontend Developer', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/4509833031439297202', social: { linkedin: '#', github: '#' } },
    { name: 'Gaurav Menaria', role: 'Frontend Developer', imageUrl: 'http://googleusercontent.com/image_collection/image_retrieval/9999999999999999999', social: { linkedin: '#', github: '#' } }
  ];

  const features = [
    { icon: '⚡', title: 'Analytics Dashboard', desc: "Track your blog's performance with detailed insights." },
    { icon: '🎨', title: 'AI-Generated Banners', desc: 'Create stunning blog banners with a single click.' },
    { icon: '🔑', title: 'Social Logins', desc: 'Easier access with Google, GitHub, and more.' },
    { icon: '🖌️', title: 'Theme Customizer', desc: 'Personalize the look and feel of your blog.' }
  ];

  const coreFeatures = [
    { icon: <VisionIcon />, title: '🚀 Our Vision', text: 'To make blogging effortless, intelligent, and engaging using the power of modern web tech and AI tools.' },
    { icon: <TechStackIcon />, title: '🛠️ Tech Stack', text: 'MERN Stack, Gemini AI, TailwindCSS, AOS, Markdown, EmailJS, ImageKit — future-ready and developer-friendly.'},
    { icon: <WhySmartBlogIcon />, title: '🌐 Why SmartBlog?', text: 'It\'s not just a blog — it\'s a content studio with autosuggestions, rich text editing, reactions & more.'}
  ];

  return (
    <>
      <Navbar />
      <div className="relative min-h-screen overflow-x-hidden bg-gray-50 font-sans text-gray-800"
           style={{
             backgroundImage: 'radial-gradient(circle at 10% 20%, rgb(222, 222, 249) 0%, rgb(255, 255, 255) 90.1%)'
           }}>
        
        <div className="relative z-10 px-6 pt-28 pb-20">
            {/* --- Hero Section --- */}
            <div className="max-w-4xl mx-auto text-center">
                <h1 
                  className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter" 
                  data-aos="zoom-out" 
                  data-aos-delay="100"
                >
                    About <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">SmartBlog</span>
                </h1>
                <p 
                  className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto" 
                  data-aos="fade-up" 
                  data-aos-delay="300"
                >
                    Welcome to <strong>SmartBlog</strong> – an AI-powered modern blogging platform crafted to inspire expression, intelligence, and community.
                </p>
            </div>

            {/* --- Core Features Section --- */}
            <div className="mt-20 md:mt-28 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {coreFeatures.map(({ icon, title, text }, i) => (
                    <div
                        key={i}
                        data-aos="flip-up"
                        data-aos-delay={i * 200}
                        data-aos-anchor-placement="top-bottom"
                        className="bg-white/60 backdrop-blur-md border border-gray-200/80 p-8 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl hover:border-gray-300 hover:-translate-y-2"
                    >
                        {icon}
                        <h2 className="text-2xl font-bold mb-3 text-gray-900">{title}</h2>
                        <p className="leading-relaxed text-gray-600">{text}</p>
                    </div>
                ))}
            </div>

            {/* --- Meet The Founders Section --- */}
            <div className="mt-28 md:mt-36 max-w-6xl mx-auto">
                <div 
                  className="text-center mb-12" 
                  data-aos="fade-down"
                  data-aos-delay="100"
                >
                     <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Meet The <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-cyan-500">Developers</span></h2>
                     <p className="mt-3 text-lg text-gray-500">The creative minds behind the curtain.</p>
                </div>
                <div 
                  className="flex flex-wrap items-center justify-center gap-10 md:gap-12" 
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                    {team.map((member, index) => (
                        <FounderCard 
                            key={index}
                            name={member.name}
                            role={member.role}
                            imageUrl={member.imageUrl}
                            aosType="fade-up"
                            aosDelay={index * 200}
                            social={member.social}
                        />
                    ))}
                </div>
            </div>

            {/* --- Upcoming Features Section --- */}
            <div 
              className="mt-28 md:mt-36 text-center max-w-4xl mx-auto" 
              data-aos="fade-up"
              data-aos-delay="100"
            >
                <h2 className="text-3xl font-bold mb-8">🚧 What's Next?</h2>
                <div 
                  className="bg-white/70 backdrop-blur-md border border-gray-200/80 p-8 rounded-2xl shadow-lg text-left"
                  data-aos="zoom-in"
                  data-aos-delay="200"
                >
                    <ul className="space-y-4">
                        {features.map((feature, i) => (
                          <FeatureItem 
                            key={i}
                            icon={feature.icon}
                            title={feature.title}
                            desc={feature.desc}
                            delay={i * 100 + 300}
                          />
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default About;
