import React from 'react';
import {
  BackgroundImage,
  TopBar,
  StatsBox,
  DashboardLatest,
} from '../components';

const Dashboard = () => {
  return (
    <BackgroundImage>
      <TopBar currentPage='dashboard' />
      <StatsBox />
      <DashboardLatest />
    </BackgroundImage>
  )
}

export default Dashboard;
