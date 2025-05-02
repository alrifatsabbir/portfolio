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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project._id} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <Link to={`/projects/${project._id}`} className="text-blue-500 hover:underline">
                View Project
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;