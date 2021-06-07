import React from 'react'
import Reflection from './Reflection';
import Assessment from './Assessment';
import Adjustment from './Adjustment';

const AssessmentCenter = ({ user, setAppTarget, setNetTarget, setCurrApp, setCurrNet }) => {

  return (
		<div className="assessment-center">
			<h4>Assessment Center</h4>
			<div className="form-container">
				<Reflection user={user} />
				<Assessment user={user} />
				<Adjustment
					user={user}
					setAppTarget={setAppTarget}
					setNetTarget={setNetTarget}
					setCurrApp={setCurrApp}
					setCurrNet={setCurrNet}
				/>
			</div>
		</div>
	);
}

export default AssessmentCenter;
