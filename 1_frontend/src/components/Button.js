import React from 'react';
import { Link } from 'react-router-dom';
import './Button.css';

function Button({ page, text, func }) {
  if (page && text) {
    return (
      <Link className='btn' to={`/${page}`}>
        {text}
      </Link>
    );
  } else {
    return <button className='btn' onClick={func}> {text}</button>;
  }
}

export default Button;
