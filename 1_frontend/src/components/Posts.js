import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Post from './Post';
import './Posts.css';

function Posts({ number }) {
  const [posts, setPosts] = useState([]);
  const URI = 'http://localhost:5000/posts';

  useEffect(() => {
    axios.get(URI).then((res) => {
      setPosts(res.data.slice(0, number));
    });
  }, [URI, number]);

  return (
    <div className='posts'>
      {posts.map((data) => (
        <Post key={data._id} post={data} />
      ))}
    </div>
  );
}

export default Posts;
