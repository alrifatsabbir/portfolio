import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../utils/api';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 pro-list-page">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mt-12 text-center mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(projects) && projects.map((project) => (
            <Link to={`/projects/${project._id}`} >
            <div key={project._id} className="border project-div rounded-lg p-4 ">
              <img src={project.image} alt={project.image} className='p-list-image'/>
              <h3 className="text-xl font-semibold mb-2 mt-4 text-center">{project.title}</h3>
              <p className="p-description mb-3">{project.description}</p>
                <span className="text-blue-500 hover:underline">
                  View Project
                </span>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;