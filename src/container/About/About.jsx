import React, { useState, useEffect } from 'react';
import { AppWrap, MotionWrap } from '../../wrapper';
import './About.scss';
import { Map } from '../../components';
const About = () => {
  return (
    <>
      <div>
        <Map />
      </div>

    </>
  );
};

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg',
);