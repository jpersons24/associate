import React from 'react'

const Directory = () => {
  return (
		<div className="directory">
			<h3>Table of Contents</h3>
			<div className="directory-container">
				<ul className="directory-list">
					<li>Dashboard</li>
					<ul className="directory-list">
						<li>Objective(billboard component)</li>
						<ul className="directory-list">
							<li>Purpose</li>
							<li>Process</li>
						</ul>
						<li>Resources</li>
						<ul className="directory-list">
							<li>Data Display</li>
							<li>Resource Card</li>
						</ul>
						<li>Assessment Center</li>
						<ul className="directory-list">
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
