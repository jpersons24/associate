import React from 'react'

const Data = ({ user, appTarget, netTarget }) => {

  return (
		<div className="data">
			<h4>Weekly Targets</h4>
			<div className="target-container">
				<p>
					<em>Current App Target: </em>
					{!user ? null :
					<strong>{appTarget}</strong>}
				</p>
				<p>
					<em>Current Networking Target: </em>
					{!user ? null :
					<strong>{netTarget}</strong>}
				</p>
			</div>
		</div>
	);
}

export default Data;
