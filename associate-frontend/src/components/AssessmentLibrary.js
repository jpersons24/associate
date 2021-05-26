import React from 'react'
// import Tab from "react-bootstrap/Tab";
// import TabContainer from "react-bootstrap/TabContainer";
// import TabContent from "react-bootstrap/TabContent";
// import TabPane from "react-bootstrap/TabPane";
// import ListGroup from "react-bootstrap/ListGroup";

const AssessmentLibrary = ({ user }) => {

  console.log(user)

  return (
		<div className="library">
			<div className="library-container">
				<div class="tab-list">
					<p>dates here</p>
				</div>
				<div class="dates">Date</div>
				<div class="library-title">
					<p>Reflections / Assessments</p>
				</div>
				<div class="library-content">
					<p>content here</p>
					
				</div>
			</div>
		</div>
	);
}

export default AssessmentLibrary;
