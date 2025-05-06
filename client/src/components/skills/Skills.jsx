import React, { useState, useEffect } from 'react';
import { getSkills } from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCpanel, faCss3, faGitAlt, faGithub, faJs, faNodeJs, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => { setSkills(data); })
      .catch((error) => console.error(error));
  }, []);

  const icons = [faCss3, faJs, faGitAlt, faGithub, faNodeJs, faReact, faCpanel, faAws, faPython, faVuejs];

  return (
    <section className="py-16">
      <div className="container mt-12 mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(skills) && skills.map((skill, index) => (
            <div key={index} className="border rounded-lg p-4">
              <div className="card bg-base-100 w-46 m-4 sm:w-1/6 pb-5 card-icons">
                <figure className="px-5 pt-5">
                  <FontAwesomeIcon icon={icons[index % icons.length]} className="rounded-2xl" size='2x' />
                </figure>
              </div>
              <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
