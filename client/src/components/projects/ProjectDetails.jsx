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
    <section className="py-16 project-detail-page">
      <div className="container p-details-container mx-auto px-4 mt-12">
        <h2 className="text-4xl font-bold mb-8">{project.title}</h2>
        <img src={project.image} alt={project.image} />
        <p className="mb-4 mt-4">{project.description}</p>
        {/* Add more project details here: images, technologies used, etc. */}
        <Link to="/projects" className="text-blue-500 hover:underline">
          Back to Projects
        </Link>
      </div>
    </section>
  );
}

export default ProjectDetails;