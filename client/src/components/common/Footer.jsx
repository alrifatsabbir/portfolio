import React from 'react';
import img from '../../assets/icons/logo2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter, faFacebook, faInstagram, faYoutube, faLinkedin, faGithub, faWhatsapp, faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';


function Footer() {
  return (
    <>
      <footer className="footer sm:footer-horizontal bg-base-200 text-base-content p-10 footer-bg">
  <nav>
    <h6 className="footer-title">Navigation</h6>
    <Link to='/' className="link link-hover">Home</Link>
    <Link to='/about' className="link link-hover">About</Link>
    <Link to='/projects' className="link link-hover">Projects</Link>
    <Link to='/blog' className="link link-hover">Blog</Link>
    <Link to='/resume' className="link link-hover">Resume</Link>
    <Link to='/skills' className="link link-hover">Skills</Link>
    <Link to='/contact' className="link link-hover">Contact</Link>
    <Link to='/hire-me' className="link link-hover">Hire Me</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <Link to='/about' className="link link-hover">About Me</Link>
    <Link to='/contact' className="link link-hover">Contact</Link>
    <Link to='/blog' className="link link-hover">Blogs</Link>
    <Link to='/projects' className="link link-hover">Projects</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a  className="link link-hover">Terms of use</a>
    <a  className="link link-hover">Privacy policy</a>
    <a  className="link link-hover">Cookie policy</a>
  </nav>
  <nav>
    <h6 className="footer-title">Others</h6>
    <Link to='/contact' className="link link-hover">Contact</Link>
    <Link to='/resume' className="link link-hover">Resume</Link>
    <Link to='/hire-me' className="link link-hover">Hire Me</Link>
  </nav>
  <nav>
    <h6 className="footer-title">Social Links</h6>
      <a href="https://github.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="link link-hover">Github</a>
      <a href="https://www.linkedin.com/in/alrifatsabbir/" target="_blank" rel="noopener noreferrer" className="link link-hover">LinkedIn</a>
      <a href="https://wa.me/+8801688525596" target="_blank" rel="noopener noreferrer" className="link link-hover">Whatsapp</a>
      <a href="https://m.me/Al.Rifat.Sabbir" target="_blank" rel="noopener noreferrer" className="link link-hover">Messenger</a>
      <a href="https://twitter.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="link link-hover">Twitter</a>
      <a href="https://www.youtube.com/@codearcglobal" target="_blank" rel="noopener noreferrer" className="link link-hover">YouTube</a>
      <a href="https://www.facebook.com/al.rifat.sabbir47/" target="_blank" rel="noopener noreferrer" className="link link-hover">Facebook</a>
      <a href="https://www.instagram.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="link link-hover">Instagram</a>

  </nav>
</footer>
<footer className="footer bg-base-200 text-base-content   px-10 py-4 footer-bg">
  <aside className="grid-flow-col items-center">
    <img src={img} alt="img" className='foot-logo'/>
    <p>
      RIFAT the DEV.
      <br />
      Providing reliable tech since 2023
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4 social">
      <a href="https://github.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faGithub} size='2x'/></a>
      <a href="https://www.linkedin.com/in/alrifatsabbir/" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faLinkedin} size='2x'/></a>
      <a href="https://wa.me/+8801688525596" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faWhatsapp} size='2x'/></a>
      <a href="https://m.me/Al.Rifat.Sabbir" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faFacebookMessenger} size='2x'/></a>
      <a href="https://twitter.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faXTwitter} size='2x'/></a>
      <a href="https://www.youtube.com/@codearcglobal" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faYoutube} size='2x'/></a>
      <a href="https://www.facebook.com/al.rifat.sabbir47/" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faFacebook} size='2x'/></a>
      <a href="https://www.instagram.com/alrifatsabbir" target="_blank" rel="noopener noreferrer" className="link link-hover"><FontAwesomeIcon icon={faInstagram} size='2x'/></a>
    </div>
  </nav>
  <div className="text text-center justify-self-center"> &copy; All Rights reserved by alrifatsabbir || RIFAT the DEV.</div>
</footer>
    </>
  );
}

export default Footer;