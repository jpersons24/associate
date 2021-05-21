import React from 'react';
import Billboard from './Billboard';
import ResourceContainer from './ResourceContainer';
import Assessment from './Assessment';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>This will be the dashboard component</h3>
      <Billboard />
      <ResourceContainer />
      <Assessment />
    </div>
  )
}

export default Dashboard;
