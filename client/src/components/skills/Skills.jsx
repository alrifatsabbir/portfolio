import React, { useState, useEffect } from 'react';
import { getSkills } from '../../utils/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAws, faCpanel, faCss3, faGitAlt, faGithub, faBootstrap,faJs, faNodeJs, faPython, faReact, faVuejs } from '@fortawesome/free-brands-svg-icons';
import { faLeaf} from '@fortawesome/free-solid-svg-icons'

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => { setSkills(data); })
      .catch((error) => console.error(error));
  }, []);

  const icons = [faReact, faNodeJs, faLeaf, faAws, faGithub, faBootstrap, faJs, faCss3,  faGitAlt, faCpanel,  faPython, faVuejs];

  return (
    <section className="py-16 skill-container">
      <div className="container mt-12 mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 skill-container-div">
          {Array.isArray(skills) && skills.map((skill, index) => (
            <div key={index} className="border-color-skill rounded-lg p-2">
              <div className="card w-46 m-4 sm:w-5/6 icon-color justify-self-center">
                <figure className="px-2 pt-2 ">
                  <FontAwesomeIcon icon={icons[index % icons.length]} className="" size='4x' />
                </figure>
              </div>
              <h3 className="text-xl text-center font-semibold mb-2">{skill.name}</h3>
              <p className=" text-center">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
