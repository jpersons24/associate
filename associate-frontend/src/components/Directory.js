import React from 'react'

const Directory = () => {
  return (
		<div className="directory">
			<h3>Table of Contents</h3>
			<div className="directory-container">
				<ul className="list">
					<li>Dashboard</li>
					<ul className="list">
						<li>Objective(billboard component)</li>
						<ul className="list">
							<li>Purpose</li>
							<li>Process</li>
						</ul>
						<li>Resources</li>
						<ul className="list">
							<li>Data Display</li>
							<li>Resource Card</li>
						</ul>
						<li>Assessment Center</li>
						<ul className="list">
							<li>Weekly Reflection</li>
							<li>Weekly Assessment</li>
						</ul>
					</ul>
				</ul>
			</div>
		</div>
	);
}

export default Directory;
