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
    <section className="py-16 blog-post-bg">
      <div className="container mt-16 mx-auto px-4">
        <h2 className="text-3xl ml-35 font-bold mb-8">{blogPost.title}</h2>
        <img src={blogPost.image} alt={blogPost.image} className='a-ratio-bp'/>
        <p className="mb-4 mt-5 mx-auto bp-content">{blogPost.content}</p>
        <Link to="/blog" className="text-blue-500 hover:underline">
          Back to Blog
        </Link>
      </div>
      {/* <aside className="side-blog-sec ">
        
      </aside> */}
    </section>
  );
}

export default BlogPost;