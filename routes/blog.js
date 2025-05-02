import express from 'express';
import { createBlogPost, getBlogPosts, getBlogPostById } from '../controllers/blogController.js';
import upload from '../config/multer.js';


const router = express.Router();

router.post('/create', upload.single('image'), createBlogPost);
router.get('/', getBlogPosts);
router.get('/:id', getBlogPostById);

export default router;