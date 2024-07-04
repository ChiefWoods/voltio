import React from 'react';
import {
  BackgroundImage,
  TopBar,
  StatsBox,
} from '../components';

const Dashboard = () => {
  return (
    <BackgroundImage>
      <TopBar currentPage='dashboard' />
      <StatsBox />
    </BackgroundImage>
  )
}

export default Dashboard;
