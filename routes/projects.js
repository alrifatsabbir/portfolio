import express from 'express';
import { createProject, getAllProjects, getProjectById } from '../controllers/projectsController.js';
import upload from '../config/multer.js'; // Import the Multer configuration

const router = express.Router();

router.post('/create', upload.single('image'), createProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);

export default router;