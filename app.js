import express from 'express';
import cors from 'cors';
import projectsRoutes from './routes/projects.js';
import blogRoutes from './routes/blog.js';
import contactRoutes from './routes/contact.js';
import skillsRoutes from './routes/skills.js';
import hireMeRoutes from './routes/hireMe.js';
import { errorHandler } from './middlewares/errorMiddleware.js';
import helmet from 'helmet';
import hpp from 'hpp';

const app = express();

app.use(cors());
app.use(express.json());
app.use(helmet());
app.use(hpp());

app.get('/', (_, res) => {
    res.send('Welcome to the Portfolio Backend API!');
  });
app.use('/projects', projectsRoutes);
app.use('/blog', blogRoutes);
app.use('/contact', contactRoutes);
app.use('/skills', skillsRoutes);
app.use('/hire-me', hireMeRoutes);

app.use(errorHandler);

export default app;