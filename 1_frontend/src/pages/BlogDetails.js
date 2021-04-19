import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './BlogDetails.css';

function BlogDetails() {
  const [post, setPost] = useState({});

  const { id } = useParams();

  const URI = 'http://localhost:5000/posts/';
  useEffect(() => {
    axios.get(URI + id).then((res) => {
      console.log(res.data);

      setPost(res.data);
    });
  }, [id]);

  return (
    <main className='blog-details'>
      <div className='container'>
        <div className='headline'>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      </div>
    </main>
  );
}

export default BlogDetails;
