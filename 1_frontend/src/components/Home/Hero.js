import React from 'react';
import Button from '../Button';
import './Hero.css';
import featuredImage from '../../assets/images/featured-image.png';

function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <div className='headline'>
          <h1>Hello, I'm Gardener</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
          <Button page='about' text='Learn more' />
        </div>
        <div className='featured-image'>
          <img src={featuredImage} alt='Trees' />
        </div>
      </div>
    </section>
  );
}

export default Hero;
