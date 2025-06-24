import React from 'react'
import { assets } from '../../assets/assets';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const BlogTableItem = ({ blog, fetchBlogs, index }) => {
  const { title, createdAt } = blog;
  const BlogDate = new Date(createdAt);
  const { axios } = useAppContext();

  const deleteBlog = async () => {
    const confirm = window.confirm('Are you sure you want to delete this blog?');
    if (!confirm) return;

    try {
      const { data } = await axios.post('/api/blog/delete', { id: blog._id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const togglePublish = async () => {
    try {
      const { data } = await axios.post('/api/blog/toggle-publish', { id: blog._id });
      if (data.success) {
        toast.success(data.message);
        await fetchBlogs();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <tr className='border-y border-gray-300 hover:bg-gray-100 transition duration-300 ease-in-out'>
      <th className='px-2 py-4 text-gray-800'>{index}</th>
      <td className='px-2 py-4 text-gray-700 font-medium transition-all duration-300 hover:text-primary'>{title}</td>
      <td className='px-2 py-4 max-sm:hidden text-gray-500'>{BlogDate.toDateString()}</td>
      <td className='px-2 py-4 max-sm:hidden'>
        <p className={`${blog.isPublished ? "text-green-600" : "text-orange-700"} font-semibold`}>
          {blog.isPublished ? 'Published' : 'Unpublished'}
        </p>
      </td>

      <td className='px-2 py-4 flex text-xs gap-3'>
        <button
          onClick={togglePublish}
          className='border px-2 py-1 rounded transition hover:bg-primary/10 hover:text-primary duration-300'
        >
          {blog.isPublished ? 'Unpublish' : 'Publish'}
        </button>
        <img
          src={assets.cross_icon}
          alt="delete"
          className='w-8 hover:scale-110 hover:rotate-12 transition-all duration-300 cursor-pointer'
          onClick={deleteBlog}
        />
      </td>
    </tr>
  );
};

export default BlogTableItem;
