import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, blog_data,comments_data } from '../assets/assets'
import Navbar from '../components/Navbar'
import Moment from 'moment'
import Footer from '../components/Footer'
import Loader from '../components/Loader'
import { useAppContext } from '../context/AppContext'
import toast from "react-hot-toast";



const Blog = () => {
  const {id} = useParams()
  const {axios} = useAppContext()

  useEffect(() => {
  let uid = localStorage.getItem("uid");
  if (!uid) {
    uid = `guest-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    localStorage.setItem("uid", uid);
  }
}, []);

  

  const [data,setData] = useState(null)
  const [likes, setLikes] = useState(0);
const [dislikes, setDislikes] = useState(0);


const [isLiked, setIsLiked] = useState(false); 


  const [comments,setComments] = useState([])
    const [name,setName] = useState('')
     const [content,setContent] = useState('')

  const fetchBlogData = async () => {
    try {
        const {data} = await axios.get(`/api/blog/${id}`)
         if (data.success) {
      setData(data.blog);
      setLikes(data.blog.likes.length);
      setDislikes(data.blog.dislikes.length);
      
    } else {
      toast.error(data.message);
    }
    } catch (error) {
      toast.error(error.message)
    }
  }

  // ... (aapka fetchBlogData function)

const handleLike = async () => {
  try {
    const userId = localStorage.getItem("uid");
    const { data } = await axios.post(`/api/blog/like/${id}`, {
      userId,
    });

    setLikes(data.likes);
    setDislikes(data.dislikes);

    
    // Like button ke click hone par isLiked ko toggle karein
    setIsLiked(prevIsLiked => !prevIsLiked); 
    
    // Agar aap chahte hain ki Like karne par fill ho aur dobara click karne par hat jaye (toggle)
    // to ye upar wala 'setIsLiked' use karein.
    // Agar aap bas click par fill karna chahte hain aur hamesha filled rahe (jab tak dislike na ho),
    // to fir aapko backend response se check karna padega (jaise maine pehle bataya tha).
    // Is simplified case mein, hum bas UI ko toggle kar rahe hain.

  } catch (error) {
    toast.error("Something went wrong");
  }
};

const handleDislike = async () => {
  try {
    const userId = localStorage.getItem("uid");
    const { data } = await axios.post(`/api/blog/dislike/${id}`, {
      userId,
    });
    setLikes(data.likes);
    setDislikes(data.dislikes);

    // *** YE LINE ADD KAREN (OPTIONAL, Agar dislike karne par like button se color hatana ho) ***
    // Dislike karne par, agar like button filled tha, toh usko normal kar do
    setIsLiked(false); 

  } catch (error) {
    toast.error("Something went wrong");
  }
};

// ... (rest of your functions)

  
    const fetchComments = async () => {
      try {
        const {data} = await axios.post('/api/blog/comments', {blogId: id})
        if(data.success){
          setComments(data.comments)
        }else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
      
    }
      
    const addComment = async (e) => {
      e.preventDefault();
      try {
        const {data} = await axios.post('/api/blog/add-comment', {blog: id,name,content});
        if (data.success) {
          toast.success(data.message)
          setName('')
          setContent('')
        }
        else {
          toast.error(data.message);
        }
      } catch (error) {
        toast.error(error.message);
      }
    }
    const [show, setShow] = useState(false);
    useEffect(()=> {
      fetchBlogData()
      fetchComments()
    },[])
    useEffect(() => {
  if (data) {
    setTimeout(() => setShow(true), 50); // slight delay to allow animation trigger
  }
}, [data]);
  return data ? (
    <div className='relative'>
      <img src={assets.gradientBackground} alt="" className='absolute -top-50 -z-1 opacity-40'/>
      <Navbar/>
      <div className={`text-center mx-5 max-w-5xl md:mx-auto my-10 mt-6 transition-all ${show ? 'animate-fadeInUp' : 'opacity-0 translate-y-4'}`}>              
        <p className='text-primary py-4 font-medium'>Published on {Moment(data.createdAt).format('MMMM Do YYYY')}</p>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-2xl mx-auto transition-all duration-700 text-gray-800 hover:text-primary'>{data.title}</h1>
        <h2 className='my-5 mx-w-lg truncate mx-auto'>{data.subTitle}</h2>
        <p className='inline-block py-1 px-4 rounded-full mb-6 border text-sm border-primary/35 bg-primary/5 font-medium text-primary'>SmartBlog</p>
      </div>

      <div className='mx-5 max-w-5xl md:mx-auto my-10 mt-6'>
        <img src={data.image} alt="" className='rounded-3xl mb-5' />
        <div className='rich-text animate-fadeInUp max-w-3xl mx-auto my-12'  dangerouslySetInnerHTML={{__html: data.description}}>
        </div>

     

<div className="flex items-center justify-center gap-6 my-10">
  <button
    onClick={handleLike}
    // *** YAHAN CLASS CHANGE KIYA HAI ***
    className={`flex items-center gap-2 text-gray-600 hover:text-black border border-gray-200 px-5 py-2 rounded-full shadow-sm hover:shadow-md transition duration-200 bg-white ${
      isLiked ? "liked-button" : "" // Agar isLiked true hai, toh 'liked-button' class add hogi
    }`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9V5a3 3 0 00-6 0v4H5a1 1 0 00-.993.883L4 10v10a1 1 0 00.883.993L5 21h10.28a2 2 0 001.789-1.106l3.163-6.327a1 1 0 00-.895-1.45H16V9h-2z" />
    </svg>
    <span className="text-sm font-medium">Like ({likes})</span>
  </button>

  <button
    onClick={handleDislike}
    // *** DISLIKE BUTTON KI CLASS WAHI RAHEGI ***
    className="flex items-center gap-2 text-gray-600 hover:text-black border border-gray-200 px-5 py-2 rounded-full shadow-sm hover:shadow-md transition duration-200 bg-white"
  >
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 9V5a3 3 0 00-6 0v4H5a1 1 0 00-.993.883L4 10v10a1 1 0 00.883.993L5 21h10.28a2 2 0 001.789-1.106l3.163-6.327a1 1 0 00-.895-1.45H16V9h-2z" />
    </svg>
    <span className="text-sm font-medium">Dislike ({dislikes})</span>
  </button>
</div>



        <div className='mt-14 mb-10 max-w-3xl mx-auto'> 
            <p className='font-semibold mb-4'>Comments ({comments.length})</p>
            <div className='flex flex-col gap-4'>
              {comments.map((item,index) => (
                <div key={index} className='relative bg-white/90 backdrop-blur-md border border-primary/10 shadow-md hover:shadow-lg transition-all duration-300 max-w-xl p-4 rounded-xl text-gray-700'> 
                  <div className='flex items-center gap-2 mb-2'> 
                  <img src= {assets.user_icon} alt="" className='w-6' />
                  <p className='font-medium'>{item.name}</p>
                  </div>
                  <p className='text-sm max-w-md ml-8'> {item.content}</p>
                  <div className='absolute right-4 bottom-3 flex items-center gap-2 text-xs'>{Moment(item.createdAt).fromNow()}</div>

                </div>
              ))}
            </div>
          </div>
              <div className='max-w-3xl mx-auto'>
                <p className='font-semibold mb-4'>Add Your Comment</p> 
                <form onSubmit={addComment} className='flex flex-col items-start gap-4 max-w-lg'>
                  <input onChange= {(e) => setName(e.target.value)} value = {name} type='text' placeholder='Name' required className='w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:border-primary focus:ring-1 focus:ring-primary transition duration-300 outline-none' />
                  <textarea onChange= {(e) => setContent(e.target.value)} value = {content}className='w-full p-3 border border-gray-300 rounded-xl shadow-sm focus:border-primary focus:ring-1 focus:ring-primary transition duration-300 outline-none h-48'  placeholder='Comment' required></textarea>
                  <button type="submit" className='bg-primary text-white rounded-xl p-3 px-8 shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300'>Submit</button>

                </form>
              </div>
{/* social media icons here */}
              <div className='my-24 max-w-3xl mx-auto'> 
                  <p className='font-semibold my-4'>Share this article on social media</p>
                  <div className='flex'>
                    <img src= {assets.facebook_icon} width={50} alt="" className='hover:scale-110 transition-transform duration-300' />
                    <img src= {assets.twitter_icon} width={50} alt="" className='hover:scale-110 transition-transform duration-300' />
                    <img src= {assets.googleplus_icon} width={50} alt="" className='hover:scale-110 transition-transform duration-300' />

                  </div>
              </div>

      </div>
      {/* footer here */}
      <div> 
        <Footer/>
      </div>
    </div>

  ): <Loader/>
}

export default Blog;