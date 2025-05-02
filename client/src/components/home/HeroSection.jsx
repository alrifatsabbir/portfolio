import React from 'react';
import img from '../../assets/icons/logo2.png';
import code from '../../assets/images/code.png';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div>
      <section className="text-gray-600 body-font h-100dvh hero-section">
        <div className="container mx-auto flex px-5 py-32 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-6 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-2 font-medium text-gray-900">Welcome to 
              <br className="hidden lg:inline-block"/>
              <img src={img} alt="logo" className='h-40' />
            </h1>
            <p className="mb-5 leading-relaxed">
              I craft robust, scalable web applications using modern technologies.
              Specialized in building clean APIs and efficient backend systems.
              Passionate about problem-solving and writing maintainable code.
              Let<code>'</code>s build something impactful together.
            </p>
          <div className="flex justify-center">
            <Link to={'/resume'} className="inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg hero-btn">Resume</Link>
            <Link to={'/hire-me'} className="ml-4 inline-flex border-0 py-2 px-6 focus:outline-none rounded text-lg hero-btn btn-2">Hire Me</Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img className="object-cover object-center rounded" alt="hero" src={code}/>
        </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;