import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCpanel, faCss3, faGitAlt, faGithub, faJs, faNodeJs, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';

const SkillsSection = () => {
  const icons = [faCss3, faJs, faGitAlt, faGithub, faNodeJs, faReact, faCpanel, faAws, faPython, faVuejs]; // Replace with different icons as needed

  return (
    <div className='section-skill'>
      <div className='section-title-name pt-10 mb-5'>
        <h1 className='text-5xl font-bold text-center tracking-widest'>My Skills</h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {icons.map((icon, index) => (
          <div key={index} className="card bg-base-100 w-46 m-4 sm:w-1/6 pb-5 card-icons">
            <figure className="px-5 pt-5 ">
              <FontAwesomeIcon icon={icon} className="rounded-2xl" size='5x' />
            </figure>
          </div>
        ))}
          <br />
          <Link to="/skills" className="btn rounded-2xl text-xl mt-5 p-6 mb-10 skill-sect-btn">See More</Link>
      </div>
    </div>
  );
};

export default SkillsSection;