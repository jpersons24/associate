import React from 'react'
import Reflection from './Reflection';
import Assessment from './Assessment';
import Adjustment from './Adjustment';

const AssessmentCenter = () => {


  return (
		<div className="assessment-center">
			<h4>Assessment Center</h4>
			<div className="form-container">
				<Reflection />
				<Assessment />
				<Adjustment />
			</div>
		</div>
	);
}

export default AssessmentCenter;
