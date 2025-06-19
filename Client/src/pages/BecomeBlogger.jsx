import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser'

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
      .then((response) => {
        console.log('✅ Email sent!', response)
        setSuccess(true)
        setName('')
        setEmail('')
        setCategory('')
        setMessage('')

        setTimeout(() => setSuccess(false), 4000) // hide message after 4 sec
      })
      .catch((error) => {
        console.error('❌ Failed to send email:', error)
        alert('Something went wrong! Please try again later.')
      })
  }

  return (
    <>
      <Navbar />

      <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-4 animate-fade-in">
        <h1 className="text-4xl font-bold mb-4">Become a Blogger</h1>
        <p className="text-gray-600 max-w-xl mb-6">
          Fill out the form below to send us your request. We’ll get back to you soon!
        </p>

        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md space-y-4 text-left animate-slide-up"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          />
          <input
            type="text"
            name="category"
            placeholder="Preferred Category (tech, lifestyle, etc.)"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none"
          ></textarea>

          <button
            type="submit"
            className="w-full px-6 py-3 bg-primary text-white font-semibold rounded-md
             transition-all duration-150 ease-in-out 
             active:scale-95 hover:scale-105 cursor-pointer"
          >
            Send Request
          </button>

          {success && (
            <p className="text-green-600 text-center pt-2 animate-pulse">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </>
  )
}

export default BecomeBlogger
