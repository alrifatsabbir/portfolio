import Project from '../models/Project.js';
import cloudinary from '../config/cloudinary.js';
import fs from 'fs';

// Controller function to create a new project
const createProject = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: 'Please upload an image' });
    }

    // Upload the image to Cloudinary
    const result = await cloudinary.uploader.upload(req.file.path);

    // Create a new project in the database
    const newProject = new Project({
      title: req.body.title,
      description: req.body.description,
      image: result.secure_url, // Store the Cloudinary URL
      technologies: req.body.technologies ? req.body.technologies.split(',') : [],
      liveLink: req.body.liveLink,
      githubLink: req.body.githubLink,
    });

    await newProject.save();

    // Clean up the locally stored file
    fs.unlinkSync(req.file.path);

    res.status(201).json({ message: 'Project created successfully', project: newProject });
  } catch (error) {
    console.error('Error creating project:', error);
    res.status(500).json({ message: 'Failed to create project', error: error.message });
  }
};

// Controller function to get all projects
const getAllProjects = async (req, res) => {
  try {
    const projects = await Project.find({});
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ message: 'Failed to fetch projects', error: error.message });
  }
};

// Controller function to get a specific project by ID
const getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(project);
  } catch (error) {
    console.error('Error fetching project by ID:', error);
    res.status(500).json({ message: 'Failed to fetch project', error: error.message });
  }
};

export { createProject, getAllProjects, getProjectById };