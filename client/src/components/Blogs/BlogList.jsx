import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getBlogPosts } from '../../utils/api';

function BlogList() {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    getBlogPosts()
      .then((data) => setBlogPosts(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <section className="py-16 blog-list-bg" >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-10 mt-12 justify-self-center">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {Array.isArray(blogPosts) && blogPosts.map((post) => (
            <Link to={`/blog/${post._id}`} >
            <div key={post._id} className="border rounded-lg p-4 bl-div">
              <img src={post.image} alt={post.image} className='a-ratio-bl' />
              <h3 className="text-xl font-semibold mb-2 justify-self-center mt-3">{post.title}</h3>
              <p className="text-gray-600 mb-4">
                {post.content.substring(0, 100)}...
              </p>
                <span className="text-blue-500 hover:underline"> Read More</span>
            </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;