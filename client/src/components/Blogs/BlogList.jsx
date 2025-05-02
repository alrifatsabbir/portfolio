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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Blog Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(blogPosts) && blogPosts.map((post) => (
            <div key={post._id} className="border rounded-lg p-4">
              <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4">
                {post.content.substring(0, 100)}...
              </p>
              <Link to={`/blog/${post._id}`} className="text-blue-500 hover:underline">
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogList;