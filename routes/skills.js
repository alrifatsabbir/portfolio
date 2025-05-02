import express from 'express';
import { getSkills } from '../controllers/skillsController.js';

const router = express.Router();

router.get('/', getSkills);

export default router;