import React from 'react';
import './About.css';
import featuredImage from '../assets/images/featured-image.png';

function About() {
  return (
    <main className='about'>
      <div className='container'>
        <div className='headline'>
          <h1>Hello, I'm Gardener</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been.
          </p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s. Lorem Ipsum is simply dummy text of the
            printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s.
          </p>
        </div>
        <div className='featured-image'>
          <img src={featuredImage} alt='Trees' />
        </div>
      </div>
    </main>
  );
}

export default About;
