import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/icons/logo2.png';

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 shadow-sm nav-section">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-70 h-100 p-2 shadow nav-menu">
              <li><Link to="/" className='text-xl'>Home</Link></li>
              <li><Link to="/about" className='text-xl'>About</Link></li>
              <li><Link to="/projects" className='text-xl'>Projects</Link></li>
              <li><Link to="/blog" className='text-xl'>Blog</Link></li>
              <li><Link to="/resume" className='text-xl'>Resume</Link></li>
              <li><Link to="/skills" className='text-xl'>Skills</Link></li>
              <li><Link to="/contact" className='text-xl'>Contact</Link></li>
            </ul>
          </div>
            <Link to="/" className='btn btn-ghost text-4xl logo-text'><img src={img} alt="icon" className='h-20'/></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-xl nav-menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/resume">Resume</Link></li>
            <li><Link to="/skills">Skills</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/hire-me" className="text-xl nav-btn">Hire Me</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;