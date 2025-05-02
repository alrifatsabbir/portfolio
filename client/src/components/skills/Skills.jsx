import React, { useState, useEffect } from 'react';
import { getSkills } from '../../utils/api';

function Skills() {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    getSkills()
      .then((data) => {setSkills(data);})
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="border rounded-lg p-4"> {/* Force index as key */}
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