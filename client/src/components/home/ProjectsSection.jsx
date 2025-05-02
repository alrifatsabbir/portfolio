import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getProjects } from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownLong } from '@fortawesome/free-solid-svg-icons';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const MAX_DESCRIPTION_LENGTH = 110;

  useEffect(() => {
    getProjects()
      .then((data) => setProjects(Array.isArray(data) ? data : []))
      .catch((error) => console.error('Failed to fetch projects:', error));
  }, []);

  return (
    <section className="body-font project-section-bg">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="font-medium title-font mb-4 tracking-widest text-4xl">MY PROJECTS</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Check out some of the awesome work I have done. I have worked on a variety of projects, from web applications to mobile apps.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.isArray(projects) && projects.slice(0, 4).map((project) => (
            <div key={project._id} className="p-4 lg:w-1/2 ">
              <Link to={`/projects/${project._id}`} className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left project-sec-card">
                <img alt={project.name} className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4 project-sect-img" src={project.image} />
                <div className="flex-grow sm:pl-8">
                  <h1 className="title-font font-medium text-lg">{project.title}</h1>
                  <p className="mb-4">
                    {project.description?.length > MAX_DESCRIPTION_LENGTH
                      ? project.description.substring(0, MAX_DESCRIPTION_LENGTH) + "..."
                      : project.description || 'No description available.'}
                  </p>
                  <span className="text-blue-500 hover:underline">See more.</span>
                </div>
              </Link>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/projects" className="down-arrow">
            <FontAwesomeIcon icon={faDownLong} size='3x' className='down-arr'/>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
