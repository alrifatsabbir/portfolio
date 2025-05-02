import Blog from '../models/Blog.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

const createBlogPost = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload an image' });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    const newBlog = new Blog({
      title: req.body.title,
      content: req.body.content,
      image: result.secure_url,
      category: req.body.category,
      publicationDate: req.body.publicationDate || Date.now(),
    });

    await newBlog.save();

    fs.unlinkSync(req.file.path);

    res.status(201).json({ message: 'Blog post created successfully', blog: newBlog });
  } catch (error) {
    console.error('Error creating blog post:', error);
    res.status(500).json({ message: 'Failed to create blog post', error: error.message });
  }
};

const getBlogPosts = async (req, res, next) => {
  try {
    const blogPosts = await Blog.find({});
    res.json(blogPosts);
  } catch (error) {
    next(error);
  }
};

const getBlogPostById = async (req, res, next) => {
  try {
    const blogPost = await Blog.findById(req.params.id);
    if (!blogPost) {
      return res.status(404).json({ message: 'Blog post not found' });
    }
    res.json(blogPost);
  } catch (error) {
    next(error);
  }
};

export { createBlogPost, getBlogPosts, getBlogPostById };