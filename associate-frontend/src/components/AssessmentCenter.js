import React from 'react'
import Reflection from './Reflection';
import Assessment from './Assessment';

const AssessmentCenter = () => {


  return (
		<div className="assessment-center">
			<h4>Assessment Center</h4>
			<div className="form-container">
				<Reflection />
				<Assessment />
			</div>
		</div>
	);
}

export default AssessmentCenter;
