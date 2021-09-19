import React from 'react';
import '../App.css';
import { Button } from './Button';
import ReactTypical from 'react-typical';
import video from '../videos/video-2.mp4';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src={video} autoPlay loop muted />
      <h1>
        <ReactTypical
          steps={[
            'Hi I am Daniel',
            2000,
            'I am a future Software Engineer',
            1000,
          ]}
        />
      </h1>
    </div>
  );
}

export default HeroSection;
