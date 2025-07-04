import fs from 'fs'
import imagekit from '../Configs/imageKit.js';
import Blog from '../models/Blog.js';
import Comment from '../models/Comment.js';
import main from '../Configs/gemini.js';

export const addBlog = async (req,res) => {
    try {
        const {title, subTitle, description, category, isPublished} = JSON.parse(req.body.blog);
        const imageFile = req.file;

        // check if all fields are present 
        if(!title || !description || !category || !imageFile){
            return res.json({success: false, message: "Missing required fields"})
        }

        const fileBuffer = fs.readFileSync(imageFile.path)
        // upload image to imagekit
        const response = await imagekit.upload({
            file: fileBuffer,
            fileName: imageFile.originalname,
            folder: "/blogs"
        })

// optimzation through imagekit url transformation
    const optimizedImageUrl = imagekit.url({
        path: response.filePath,
        transformation: [
            {quality: 'auto'}, //auto comprasion 
            {format: 'webp'}, // Convert to modern format
            {width: '1280'} // width resizing
        ]
    });

    const image = optimizedImageUrl;

    await Blog.create({title, subTitle, description, category, image, isPublished})

    res.json({success: true, message: "Blog added successfully"})

    } catch (error){
         res.json({success: false, message: error.message})
    }
}


export const getAllBlogs = async (req, res) => {
        try {   
            const blogs = await Blog.find({isPublished: true})

            res.json({success: true, blogs})

        } catch (error) {   
            res.json({success: false, message: error.message})
        }
}

export const getBlogById = async (req, res) => {
    try {
        const { blogId } = req.params;
        const blog = await Blog.findById(blogId)
        if(!blog) {
           return res.json({success: false, message: "Blog not found"});

        }
        res.json({success: true, blog})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const deleteBlogById = async (req, res) => {
    try {
        const { id } = req.body; 
        await Blog.findByIdAndDelete(id);

        // delete all comments which are associated with blogs
        await Comment.deleteMany({blog: id});

        res.json({success: true, message: 'Blog deleted successfully'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const togglePublish = async (req, res) => {
    try {
        const { id } = req.body;
        const blog = await Blog.findById(id);
        blog.isPublished = !blog.isPublished;
        await blog.save();
        res.json({success: true, message: 'Blog status updated'})


    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const addComment = async (req, res) => {
    try {
        const { blog, name, content } = req.body;
        await Comment.create({blog, name, content});
        res.json({success: true, message: 'Comment added for review'})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}


export const getBlogComments = async (req, res) => {
    try {
        const { blogId } = req.body;
        const comments = await Comment.find({blog: blogId, isApproved: true}).sort({createdAt: -1}); 
        res.json({success: true, comments})
    } catch (error) {
        res.json({success: false, message: error.message})
    }

}

export const generateContent = async (req,res) => {
    try {
        const {prompt} = req.body;
        const content = await main(prompt + `'- Generate a blog post on the topic  detailed, easy-to-understand English. Format the blog only using plain text and markdown-style bold for headings or key points (use ** for bold). Do not use bullet points, numbered lists, tables, or any design/styling elements. The output should be simple and easy to parse using markdown parsers like 'marked'`)
        res.json({success: true, content})
    } catch (error) {
        res.json({success: false, message: error.message})
    }
}

export const toggleLike = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.body.userId || req.ip;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.json({ success: false, message: "Blog not found" });

    const alreadyLiked = blog.likes.includes(userId);
    const alreadyDisliked = blog.dislikes.includes(userId);

    if (alreadyLiked) {
      blog.likes = blog.likes.filter(id => id !== userId);
    } else {
      blog.likes.push(userId);
      blog.dislikes = blog.dislikes.filter(id => id !== userId);
    }

    await blog.save();
    res.json({ success: true, message: "Like toggled", likes: blog.likes.length, dislikes: blog.dislikes.length });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};

export const toggleDislike = async (req, res) => {
  try {
    const { blogId } = req.params;
    const userId = req.body.userId || req.ip;

    const blog = await Blog.findById(blogId);
    if (!blog) return res.json({ success: false, message: "Blog not found" });

    const alreadyDisliked = blog.dislikes.includes(userId);
    const alreadyLiked = blog.likes.includes(userId);

    if (alreadyDisliked) {
      blog.dislikes = blog.dislikes.filter(id => id !== userId);
    } else {
      blog.dislikes.push(userId);
      blog.likes = blog.likes.filter(id => id !== userId);
    }

    await blog.save();
    res.json({ success: true, message: "Dislike toggled", likes: blog.likes.length, dislikes: blog.dislikes.length });

  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};
