import React from 'react';
import Posts from '../Posts';
import './Blog.css';

function Blog() {
  return (
    <section className='homepage-blog'>
      <div className='container'>
        <h2>Blog</h2>
        <Posts number={3} />
      </div>
    </section>
  );
}

export default Blog;
