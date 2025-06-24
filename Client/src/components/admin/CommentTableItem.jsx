// src/components/admin/CommentTableItem.jsx

import React from 'react';
import toast from 'react-hot-toast';
import { useAppContext } from '../../context/AppContext';

const CommentTableItem = ({ comment, fetchComments }) => {
    const { blog, createdAt, _id, name, content, isApproved } = comment;
    const { axios } = useAppContext();

    const approveComment = async () => {
        try {
            // Note: The original code used a POST request, but PUT or PATCH is more standard for updates.
            // I'm keeping it as POST to avoid breaking changes as requested.
            const { data } = await axios.post('/api/admin/approve-comment', { id: _id });
            if (data.success) {
                toast.success(data.message || 'Comment approved!');
                fetchComments();
            } else {
                toast.error(data.message || 'Failed to approve comment.');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const deleteComment = async () => {
        if (!window.confirm('Are you sure you want to delete this comment?')) return;
        
        try {
            // Note: The original code used a POST request, but DELETE is more standard.
            // I'm keeping it as POST to avoid breaking changes as requested.
            const { data } = await axios.post('/api/admin/delete-comment', { id: _id });
            if (data.success) {
                toast.success(data.message || 'Comment deleted!');
                fetchComments();
            } else {
                toast.error(data.message || 'Failed to delete comment.');
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    return (
        <tr className="hover:bg-slate-50/75 transition-colors duration-200 align-top">
            {/* Blog Title & Comment Cell */}
            <td className="px-6 py-4">
                <p className="font-bold text-slate-800 mb-2 line-clamp-1" title={blog.title}>
                    {blog.title}
                </p>
                <div className="text-sm text-slate-600 space-y-1.5 pl-3 border-l-2 border-slate-200">
                    <p><span className="font-semibold text-slate-700">Name:</span> {name}</p>
                    <p><span className="font-semibold text-slate-700">Comment:</span> {content}</p>
                </div>
            </td>

            {/* Date Cell */}
            <td className="px-6 py-4 text-slate-500 text-sm max-sm:hidden whitespace-nowrap">
                {new Date(createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                })}
            </td>

            {/* Action Cell */}
            <td className="px-6 py-4">
                <div className="flex items-center gap-2">
                    {isApproved ? (
                        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-green-800 bg-green-100 rounded-full">
                            Approved
                        </span>
                    ) : (
                        <button 
                            onClick={approveComment}
                            className="p-2 rounded-full text-green-600 hover:bg-green-100 hover:text-green-700 group transition-colors"
                            title="Approve Comment"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        </button>
                    )}
                    <button
                        onClick={deleteComment}
                        className="p-2 rounded-full text-slate-500 hover:bg-red-100 hover:text-red-600 group transition-colors"
                        title="Delete Comment"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path></svg>
                    </button>
                </div>
            </td>
        </tr>
    );
};

export default CommentTableItem;