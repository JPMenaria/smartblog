import React, { useEffect, useState } from 'react';
import CommentTableItem from '../../components/admin/CommentTableItem';
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';

const Comments = () => {
    const [comments, setComments] = useState([]);
    const [filter, setFilter] = useState('Not Approved');
    const { axios } = useAppContext();

    const fetchComments = async () => {
        try {
            const { data } = await axios.get('api/admin/comments');
            data.success ? setComments(data.comments) : toast.error(data.message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    useEffect(() => {
        fetchComments();
    }, []);

    // --- Premium Black Effect Classes for Buttons ---
    const activeClasses = 'bg-black text-white shadow-md';
    const inactiveClasses = 'bg-transparent text-gray-500 hover:text-black';
    // --- End of new classes ---

    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16 bg-blue-50/50'>
            <div className='flex justify-between items-center max-w-3xl'>
                <h1>Comments</h1>
                
                {/* --- Styled Button Group --- */}
                <div className='flex items-center gap-1 bg-gray-200 p-1 rounded-full'>
                    <button 
                        onClick={() => setFilter('Approved')} 
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${filter === 'Approved' ? activeClasses : inactiveClasses}`}
                    >
                        Approved
                    </button>
                    <button 
                        onClick={() => setFilter('Not Approved')} 
                        className={`px-4 py-1.5 text-sm font-medium rounded-full transition-colors duration-300 ${filter === 'Not Approved' ? activeClasses : inactiveClasses}`}
                    >
                        Not Approved
                    </button>
                </div>
                {/* --- End of Styled Button Group --- */}

            </div>

            <div className='relative h-4/5 max-w-3xl overflow-x-auto mt-4 bg-white shadow rounded-lg scrollbar-hide'>
                <table className='w-full text-sm text-gray-500'>
                    <thead className='text-xs text-gray-700 text-left uppercase'>
                        <tr>
                            <th scope='col' className='px-6 py-3'>
                                Blog Title & Comment
                            </th>
                            <th scope='col' className='px-6 py-3 max-sm:hidden'>
                                Date
                            </th>
                            <th scope='col' className='px-6 py-3 '>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {comments.filter((comment) => {
                            if (filter === "Approved") return comment.isApproved === true;
                            return comment.isApproved === false;
                        }).map((comment, index) => (
                            <CommentTableItem 
                                key={comment._id} 
                                comment={comment} 
                                index={index + 1} 
                                fetchComments={fetchComments} 
                            />
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Comments;