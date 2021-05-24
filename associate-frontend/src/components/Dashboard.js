import React from 'react';
import Billboard from './Billboard';
import ResourceContainer from './ResourceContainer';
import AssessmentCenter from './AssessmentCenter';
import AssessmentLibrary from "./AssessmentLibrary";

const Dashboard = ({ user, appTarget, netTarget, setAppTarget, setNetTarget }) => {

  return (
    <div className="dashboard">
      <h3>dashboard</h3>
      <Billboard />
      <ResourceContainer 
        user={user} 
        appTarget={appTarget}
        netTarget={netTarget}
      />
      <AssessmentCenter 
        user={user}
        setAppTarget={setAppTarget}
        setNetTarget={setNetTarget}
      />
      <AssessmentLibrary user={user} />
    </div>
  )
}

export default Dashboard;
