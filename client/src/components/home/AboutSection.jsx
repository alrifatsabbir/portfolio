import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/about_me.jpg'; 

function AboutSection() {
  return (
    <div className='about-section'>
        <section className="body-font about-division">
          <div className="about_head pt-10">
            <h1 className="text-5xl font-bold text-center tracking-widest">About Me</h1>
          </div>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="alrifatsabbir" src={img} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center about-text">
              <h1 className="title-font sm:text-8xl text-5xl mb-4 font-medium ">
                Al Rifat Sabbir
              </h1>
              <p className="mb-8 leading-relaxed">I am a passionate developer and programmer with a keen interest in creating dynamic and responsive web applications. My journey in the tech world has been fueled by a desire to learn and grow, and I am excited to share my skills and projects with you. I believe in the power of technology to transform lives and am committed to using my skills to make a positive impact. I am always eager to take on new challenges and collaborate with others.....
              <Link to="/about" className='link-about'>See More</Link>.
              </p>
            </div>
          </div>
      </section>
    </div>
  );
}

export default AboutSection;