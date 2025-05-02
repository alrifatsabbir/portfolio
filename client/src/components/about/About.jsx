import React from 'react';

function About() {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="text-lg">
              Hello! I'm AL RIFAT SABBIR, a passionate web developer with a strong focus on creating user-friendly and efficient web applications. I have experience in both front-end and back-end development.
            </p>
            <p className="text-lg mt-4">
              My expertise includes React, Node.js, MongoDB, and Express.js. I enjoy building scalable and maintainable applications that solve real-world problems.
            </p>
            <p className="text-lg mt-4">
              I'm always eager to learn new technologies and improve my skills. I believe in continuous learning and collaboration to achieve the best results.
            </p>
          </div>
          <div>
            {/* You can add an image or more detailed information here */}
            <p className="text-lg">
              Feel free to contact me for any projects or collaboration opportunities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;