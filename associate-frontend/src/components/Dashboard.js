import React from 'react';
import Billboard from './Billboard';
import ResourceContainer from './ResourceContainer';
import AssessmentCenter from './AssessmentCenter';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h3>dashboard</h3>
      <Billboard />
      <ResourceContainer />
      <AssessmentCenter />
    </div>
  )
}

export default Dashboard;
