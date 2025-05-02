import express from 'express';
import { sendHireMeRequest } from '../controllers/hireMeController.js';

const router = express.Router();

router.post('/', sendHireMeRequest);

export default router;