import React, { useEffect } from 'react';
import { Route,Routes } from 'react-router-dom'
import Home from './pages/Home'
import Blog from './pages/Blog'
import Layout from './pages/admin/Layout'
import Dashboard from './pages/admin/Dashboard'
import AddBlog from './pages/admin/AddBlog'
import ListBlog from './pages/admin/ListBlog'
import Comments from './pages/admin/Comments'
import Login from './components/admin/Login'
import 'quill/dist/quill.snow.css'  
import {Toaster} from 'react-hot-toast'
import { useAppContext } from './context/AppContext'
import BecomeBlogger from './pages/BecomeBlogger'
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from './pages/About';

const App = () => {

  
  const {token} = useAppContext()

  AOS.init({
    duration: 800, // Animation duration
    once: true, // Whether animation should happen only once
});

  return (
    <div>
      <Toaster/>
      <Routes>
        <Route path='/become-blogger' element = {<BecomeBlogger/>} />
        <Route path='/about' element = {<About/>} />
        <Route path='/' element = {<Home/>} />
        <Route path='/blog/:id' element = {<Blog/>} />
        <Route path='/admin' element={token ? <Layout/> : <Login/>}>
          <Route index element = {<Dashboard/>}/>
          <Route path='addblog' element = {<AddBlog/>}/>
          <Route path='listblog' element = {<ListBlog/>}/>
          <Route path='comments' element = {<Comments/>}/>
          

        </Route>
      </Routes>
    </div>
  )
}

export default App