import React, { useEffect, useRef, useState } from 'react';
import { assets, blogCategories } from '../../assets/assets';
import Quill from 'quill';
import 'quill/dist/quill.snow.css'; // Quill की स्टाइलिंग के लिए ज़रूरी
import { useAppContext } from '../../context/AppContext';
import toast from 'react-hot-toast';
import { parse } from 'marked';

const AddBlog = () => {
    const { axios } = useAppContext();
    const [isAdding, setIsAdding] = useState(false);
    const [loading, setLoading] = useState(false);

    const editorRef = useRef(null);
    const quillRef = useRef(null);

    const [image, setImage] = useState(false);
    const [title, setTitle] = useState('');
    const [subTitle, setSubTitle] = useState('');
    const [category, setCategory] = useState('Startup');
    const [isPublished, setIsPublished] = useState(false);

    const generateContent = async () => {
        if (!title) return toast.error('Please enter a title to generate content.');
        try {
            setLoading(true);
            const { data } = await axios.post('/api/blog/generate', { prompt: title });
            if (data.success) {
                quillRef.current.root.innerHTML = parse(data.content);
                toast.success('Content generated successfully!');
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        try {
            setIsAdding(true);
            const blog = {
                title,
                subTitle,
                description: quillRef.current.root.innerHTML,
                category,
                isPublished,
            };
            const formData = new FormData();
            formData.append('blog', JSON.stringify(blog));
            formData.append('image', image);

            const { data } = await axios.post(`/api/blog/add`, formData);

            if (data.success) {
                toast.success(data.message);
                setImage(false);
                setTitle('');
                setSubTitle('');
                quillRef.current.root.innerHTML = '';
                setCategory('Startup');
                setIsPublished(false);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(error.message);
        } finally {
            setIsAdding(false);
        }
    };

    useEffect(() => {
        if (editorRef.current && !quillRef.current) {
            quillRef.current = new Quill(editorRef.current, {
                theme: 'snow',
                modules: {
                    toolbar: [
                        [{ 'header': [1, 2, 3, false] }],
                        ['bold', 'italic', 'underline', 'strike'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                        [{ 'align': [] }],
                        ['link', 'image', 'video'],
                        ['clean']
                    ],
                },
                placeholder: 'Start writing your amazing blog post here...',
            });
        }
    }, []);

    return (
        <div className="min-h-screen bg-slate-50">
            <form onSubmit={onSubmitHandler} className="p-6 lg:p-10 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content Column */}
                    <div className="lg:col-span-2">
                        <h1 className="text-4xl font-bold text-slate-800 mb-8">Add New Post</h1>

                        <div className="mb-8">
                            <label htmlFor="title" className="text-lg font-semibold text-slate-700 mb-2 block">Blog Title</label>
                            <input
                                id="title"
                                type="text"
                                placeholder="e.g., The Ultimate Guide to React Hooks"
                                required
                                className="w-full text-lg p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow duration-300"
                                onChange={e => setTitle(e.target.value)}
                                value={title}
                            />
                        </div>

                        <div className="mb-8">
                            <label htmlFor="subtitle" className="text-lg font-semibold text-slate-700 mb-2 block">Subtitle</label>
                            <input
                                id="subtitle"
                                type="text"
                                placeholder="A short and catchy subtitle"
                                required
                                className="w-full text-lg p-4 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-shadow duration-300"
                                onChange={e => setSubTitle(e.target.value)}
                                value={subTitle}
                            />
                        </div>

                        <div>
                            <label className="text-lg font-semibold text-slate-700 mb-3 block">Blog Content</label>
                            <div className="h-96 pb-16 relative bg-white rounded-lg border border-slate-300">
                                <div ref={editorRef} className="h-full quill-editor-container"></div>
                                {loading && (
                                    <div className='absolute inset-0 flex items-center justify-center bg-white bg-opacity-75 z-10'>
                                        <div className='w-10 h-10 rounded-full border-4 border-t-indigo-600 border-slate-200 animate-spin'></div>
                                    </div>
                                )}
                                <button
                                    disabled={loading}
                                    className='absolute bottom-4 right-4 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-900 px-5 py-2.5 rounded-lg shadow-sm transition-colors duration-300'
                                    type="button"
                                    onClick={generateContent}
                                >
                                    {loading ? 'Generating...' : '✨ Generate with AI'}
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Column */}
                    <div className="lg:col-span-1 space-y-8 lg:mt-[9.5rem]">
                        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                            <h3 className="text-xl font-bold text-slate-800 mb-4">Publish Settings</h3>
                            <div className="flex items-center justify-between mb-6">
                                <label htmlFor="publish" className="font-semibold text-slate-600">Publish Now</label>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input id="publish" type="checkbox" checked={isPublished} onChange={e => setIsPublished(e.target.checked)} className="sr-only peer" />
                                    <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-2 peer-focus:ring-indigo-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-indigo-600"></div>
                                </label>
                            </div>
                            <button
                                disabled={isAdding}
                                type="submit"
                                className='w-full py-3 bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-md hover:bg-indigo-700 disabled:bg-indigo-400 disabled:cursor-not-allowed transition-all duration-300'
                            >
                                {isAdding ? 'Publishing...' : 'Publish Post'}
                            </button>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                            <label htmlFor="category" className="text-xl font-bold text-slate-800 mb-4 block">Category</label>
                            <select
                                id="category"
                                onChange={e => setCategory(e.target.value)}
                                value={category}
                                className='w-full p-3 border border-slate-300 text-slate-600 rounded-lg focus:ring-2 focus:ring-indigo-500'
                            >
                                {blogCategories.map((item, index) => (
                                    <option key={index} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>

                        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
                            <label className="text-xl font-bold text-slate-800 mb-4 block">Featured Image</label>
                            <label htmlFor='image'>
                                <img
                                    src={!image ? assets.upload_area : URL.createObjectURL(image)}
                                    alt="Upload Thumbnail"
                                    className='w-full h-40 object-cover rounded-lg cursor-pointer border-2 border-dashed border-slate-300 hover:border-indigo-500 transition-colors duration-300'
                                />
                                <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden required />
                            </label>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};  

export default AddBlog;