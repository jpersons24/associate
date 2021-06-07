import React, { useState } from 'react';
import Billboard from './Billboard';
import ResourceContainer from './ResourceContainer';
import AssessmentCenter from './AssessmentCenter';
import AssessmentLibrary from "./AssessmentLibrary";

const Dashboard = ({ user, appTarget, netTarget, setAppTarget, setNetTarget }) => {

  const [currApp, setCurrApp] = useState("");
	const [currNet, setCurrNet] = useState("");

  return (
		<div className="dashboard">
			<h3>dashboard</h3>
			<Billboard />
			<ResourceContainer
				user={user}
				appTarget={appTarget}
				netTarget={netTarget}
				currApp={currApp}
				setCurrApp={setCurrApp}
				currNet={currNet}
				setCurrNet={setCurrNet}
			/>
			<AssessmentCenter
				user={user}
				setAppTarget={setAppTarget}
				setNetTarget={setNetTarget}
				setCurrApp={setCurrApp}
				setCurrNet={setCurrNet}
			/>
			<AssessmentLibrary user={user} />
		</div>
	);
}

export default Dashboard;
