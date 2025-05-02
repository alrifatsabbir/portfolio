import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getProjectById } from '../../utils/api';

function ProjectDetails() {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    getProjectById(id)
      .then((data) => setProject(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!project) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{project.title}</h2>
        <p className="text-gray-600 mb-4">{project.description}</p>
        {/* Add more project details here: images, technologies used, etc. */}
        <Link to="/projects" className="text-blue-500 hover:underline">
          Back to Projects
        </Link>
      </div>
    </section>
  );
}

export default ProjectDetails;