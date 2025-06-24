import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser'
import Loader from '../components/Loader'

const BecomeBlogger = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [category, setCategory] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()

    const serviceId = 'service_98gxrxp'
    const templateId = 'template_ihhwgkn'
    const publicKey = '9hDju4v7dsu8g2QVT'

    const templateParams = {
      from_name: name,
      from_email: email,
      from_category: category,
      to_name: 'SmartBlog Team',
      message: message,
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setSuccess(true)
        setName('')
        setEmail('')
        setCategory('')
        setMessage('')
        setTimeout(() => setSuccess(false), 4000)
      })
      .catch((error) => {
        console.error('❌ Failed to send email:', error)
        alert('Something went wrong! Please try again later.')
      })
  }

  return (
    <>
      <Navbar />

      <div className="min-h-[calc(100vh-80px)] bg-[#fefefe] py-16 px-4 flex justify-center items-start md:items-center">
        <div className="w-full max-w-xl bg-white border border-gray-200 shadow-lg rounded-3xl p-8 md:p-10 transition hover:shadow-xl duration-300">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-extrabold text-violet-700 flex items-center justify-center gap-2">
              <svg className="w-7 h-7 text-violet-500" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.83 4.22l-1.95-1.95a1.5 1.5 0 00-2.12 0l-1.83 1.83 4.07 4.07 1.83-1.83a1.5 1.5 0 000-2.12zM3 17.25V21h3.75l11.06-11.06-3.75-3.75L3 17.25z"></path>
              </svg>
              Become a Blogger
            </h2>
            <p className="text-gray-600 mt-2 text-sm md:text-base">
              Want to share your voice? Fill the form and join our growing community!
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <input
              type="text"
              placeholder="Preferred Category (e.g., Tech, Fashion...)"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
            <textarea
              rows="4"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-gray-50 focus:outline-none focus:ring-2 focus:ring-violet-400"
            />

            <button
              type="submit"
              className="w-full py-3 bg-gradient-to-r from-violet-600 to-purple-700 text-white rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-md cursor-pointer"
            >
              ✉️ Send Request
            </button>

            {success && (
              <p className="text-green-600 text-center font-medium pt-2 animate-pulse">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  )
}

export default BecomeBlogger
