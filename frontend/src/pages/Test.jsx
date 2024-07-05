import React from 'react';
import {
  BackgroundImage,
  ProjectCard,
  BuyFraction,
} from '../components';

const Test = () => {
  return (
    <>
      <BackgroundImage>
        <ProjectCard name='Project A' location='Subang Jaya, Selangor' output='420' />
        {/* <BuyFraction isOpen={true} /> */}
      </BackgroundImage>
    </>
  );
}

export default Test;
