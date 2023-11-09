import React from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.css';
import { Map } from '../../components';

const About = () => {
  return (
    <>
      <div className="app__about-container">
        <div className="app__about-map">
          <Map />
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);
