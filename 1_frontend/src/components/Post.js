import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

function Post({ post }) {
  console.log(post);
  return (
    <div className='post'>
      <Link to={'/blog/' + post._id}>
        <h3 className='post_title'>{post.title}</h3>
      </Link>
      <p className='post_excerp'>{post.body}</p>
      <Link to={'/blog/' + post._id}>
        <Button text={'Read more'} />
      </Link>
    </div>
  );
}

export default Post;
