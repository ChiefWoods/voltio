import React from 'react';
import {
  BackgroundImage,
  TopBar,
} from '../components';

const Dashboard = () => {
  return (
    <BackgroundImage>
      <TopBar currentPage='dashboard' />
    </BackgroundImage>
  )
}

export default Dashboard;
