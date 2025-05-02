import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getBlogPostById } from '../../utils/api';

function BlogPost() {
  const { id } = useParams();
  const [blogPost, setBlogPost] = useState(null);

  useEffect(() => {
    getBlogPostById(id)
      .then((data) => setBlogPost(data))
      .catch((error) => console.error(error));
  }, [id]);

  if (!blogPost) {
    return <p>Loading...</p>;
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">{blogPost.title}</h2>
        <p className="text-gray-600 mb-4">{blogPost.content}</p>
        <Link to="/blog" className="text-blue-500 hover:underline">
          Back to Blog
        </Link>
      </div>
    </section>
  );
}

export default BlogPost;