import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Projects
export const getProjects = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/projects`);
    return response.data;
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const getProjectById = async (id) => {
  if (!id) {
    throw new Error('Project ID is required');
  }
  try {
    const response = await axios.get(`${API_BASE_URL}/projects/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching project with ID ${id}:`, error);
    throw error;
  }
};

export const createProject = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/projects/create`, data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error creating project:', error);
    throw error;
  }
};
// Blog
export const getBlogPosts = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog`);
    return response.data;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    throw error;
  }
};

export const getBlogPostById = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/blog/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching blog post with ID ${id}:`, error);
    throw error;
  }
};

// Contact
export const sendContactEmail = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/contact`, data);
    return response.data;
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

// Skills
export const getSkills = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/skills`);
    return response.data;
  } catch (error) {
    console.error('Error fetching skills:', error);
    throw error;
  }
};

// Hire Me
export const sendHireMeRequest = async (data) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/hire-me`, data);
    return response.data;
  } catch (error) {
    console.error('Error sending hire me request:', error);
    throw error;
  }
};