import React, { useState, useEffect } from 'react';
import { getBlogPosts } from '../../utils/api';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

function BlogSection() {
  const [blogPosts, setBlogPosts] = useState([]);
  const MAX_CONTENT_LENGTH = 350;

  useEffect(() => {
    getBlogPosts()
      .then((data) => setBlogPosts(Array.isArray(data) ? data : []))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="body-font blog-section-bg">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="font-medium title-font mb-4 tracking-widest text-4xl">MY BLOGS</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Check out my latest blogs and articles on various topics. I share my thoughts, experiences, and insights on a wide range of subjects. Whether you're looking for tips, tutorials, or just some interesting reads, you'll find it all here.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {Array.isArray(blogPosts) && blogPosts.slice(0, 3).map((post) => (
            <div key={post._id} className="p-4 lg:w-1/0 h-full">
              <Link to={`/blog/${post._id}`} className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left blog-sec-card">
                <img alt={post.name} className="flex-shrink-0 rounded-lg w-full sm:w-100 h-48 sm:h-68 object-cover object-center sm:mb-0 mb-5 blog-sect-img" src={post.image} />
                <div className="flex-grow sm:pl-8 px-4">
                  <h1 className="title-font font-medium text-lg">{post.title}</h1>
                  <p className="mb-4">
                    {post.content.length > MAX_CONTENT_LENGTH
                      ? post.content.substring(0, MAX_CONTENT_LENGTH) + "..."
                      : post.content}
                  </p>
                  <span className="text-blue-500 hover:underline flex justify-end p-6">
                    Learn More.
                  </span>
                </div>
              </Link>
              <div className="divider"></div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Link to="/blog" className="mt-10 hover:text-white text-2xl flex items-center ">
            View All Blogs <FontAwesomeIcon icon={faArrowRight} className='pl-2'/>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default BlogSection;
