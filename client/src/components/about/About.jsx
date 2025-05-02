import React from 'react';
import img from '../../assets/images/IMAGE.jpg'
import image from '../../assets/images/about_me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faLaptopCode, faUserPen, faUsersRectangle } from '@fortawesome/free-solid-svg-icons';

function About() {
  return (
<section class="text-gray-600 body-font">
<div className='about-page'>
        <section className="body-font about-division">
          <div className="about_head pt-10">
            <h1 className="text-5xl font-bold text-center mt-20">About Me</h1>
          </div>
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
              <img className="object-cover object-center rounded" alt="alrifatsabbir" src={image} />
            </div>
            <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center about-text">
              <h1 className="title-font sm:text-8xl text-5xl mb-4 font-medium ">
                Al Rifat Sabbir
              </h1>
              <p className="mb-8 leading-relaxed">
                I am a passionate developer and programmer with a keen interest in creating dynamic and responsive 
                web applications. My journey in the tech world has been fueled by a desire to learn and grow, and 
                I am excited to share my skills and projects with you. I believe in the power of technology to 
                transform lives and am committed to using my skills to make a positive impact. I am always eager 
                to take on new challenges and collaborate with others to build innovative solutions. I am particularly 
                interested in exploring new technologies and frameworks, and I enjoy working in a team environment where 
                ideas can be shared and developed collectively.
              </p>
            </div>
          </div>
      </section>
    </div>
  <main className='abt-second-pt'>
  <div class="text-gray-600 body-font">
    <h1 className="services">
      What I Can Offer?
    </h1>
  <div class="container px-2 py-16 mx-auto flex flex-wrap">
    <div class="flex flex-wrap w-full">
      <div class="lg:w-2/5 md:w-1/2 md:pr-4 md:py-4">
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-7 h-7" viewBox="0 0 24 24">
            <FontAwesomeIcon icon={faCode} />
            </svg>
          </div>
            <div class="flex-grow pl-4">
              <h2 class="font-medium title-font text-sm mb-1 tracking-wider step-pt">Full-Stack Development.</h2>
              <p class="leading-relaxed steps-p">
                I offer comprehensive full-stack web development, creating user-friendly interfaces with 
                robust back-end functionality. My expertise ensures the delivery of seamless and efficient 
                web applications tailored to your needs.
              </p>
            </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-7 h-7" viewBox="0 0 24 24">
              <FontAwesomeIcon icon={faLaptopCode} />
            </svg>
          </div>
            <div class="flex-grow pl-4">
              <h2 class="font-medium title-font text-sm mb-1 tracking-wider step-pt">Backend Development.</h2>
              <p class="leading-relaxed steps-p">
                I specialize in robust backend development, building the powerful engines that drive seamless 
                web applications. My expertise ensures efficient data management and secure server-side 
                functionality.
              </p>
            </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-7" viewBox="-1 0 24 24">
            <FontAwesomeIcon icon={faUserPen} />
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm mb-1 tracking-wider step-pt">Web Design.</h2>
            <p class="leading-relaxed steps-p">
              I craft visually appealing and user-centric web designs that enhance brand identity and user 
              experience. My focus is on creating intuitive and engaging digital interfaces.            
            </p>
          </div>
        </div>
        <div class="flex relative pb-12">
          <div class="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
          </div>
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-7 h-7" viewBox="0 0 24 24">
            <FontAwesomeIcon icon={faUsersRectangle} />
            </svg>
          </div>
          <div class="flex-grow pl-4">
            <h2 class="font-medium title-font text-sm mb-1 tracking-wider step-pt">Video Editing.</h2>
            <p class="leading-relaxed steps-p">
              I offer professional video editing to bring your stories and ideas to life with compelling 
              visuals and seamless transitions. My goal is to create engaging and impactful video content.
            </p>
          </div>
        </div>
        <div class="flex relative">
          <div class="flex-shrink-0 w-10 h-10 rounded-full bg-gray-500 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div class="flex-grow pl-4">
              <h2 class="font-medium title-font text-sm  mb-1 tracking-wider step-pt">Graphic Design.</h2>
              <p class="leading-relaxed steps-p">
                I provide minimalist graphic design solutions that effectively communicate your message 
                with clarity and visual appeal. My focus is on creating impactful and timeless designs.
              </p>
          </div>
        </div>
      </div>
      <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src={img} alt="step"/>
    </div>
  </div>
</div>
  </main>
  <div className="part-three-abt">
  <div class="container px-5 py-24 mx-auto">
    <div class="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="inline-block w-8 h-8 text-gray-300 mb-8" viewBox="0 0 975.036 975.036">
        <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
      </svg>
      <p class="leading-relaxed text-lg para-abt">
      Driven by a deep passion for technology, I am a full-stack web developer dedicated to crafting compelling digital experiences. 
      My days are immersed in the intricate world of code, where I transform ideas into functional and elegant web applications. 
      Beyond development, I also bring a minimalist aesthetic to graphic design and a creative touch to video editing. This commitment 
      sees me coding and building for extensive hours, fueled by a genuine love for innovation. My certification in full-stack 
      development underscores this dedication and expertise. For me, this isn't just a job; it's a constant pursuit of building 
      and refining. I invite you to explore my portfolio and witness this passion in action.
      </p>
      <span class="inline-block h-1 w-10 rounded mt-8 mb-6 divider-color"></span>
      <h2 class="title-font text-sm heading-abt">AL RIFAT SABBIR</h2>
      <p class="para-abt">Web-developer || Graphic Designer || Video Editor</p>
    </div>
  </div>
  </div>
  
</section>
  );
}

export default About;