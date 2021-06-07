import React from 'react';
import Data from './Data';
import ResourceCard from './ResourceCard';

const ResourceContainer = ({ user, appTarget, netTarget, currApp, setCurrApp, currNet, setCurrNet }) => {

  return (
		<div className="resource">
			<h4>resource container</h4>
			<div className="grid-container">
				<div className="data-column">
					<Data
						user={user}
						appTarget={appTarget}
						netTarget={netTarget}
						currApp={currApp}
						setCurrApp={setCurrApp}
						currNet={currNet}
						setCurrNet={setCurrNet}
					/>
				</div>
				<div className="resource-column">
					<ResourceCard user={user} />
				</div>
			</div>
		</div>
	);
}

export default ResourceContainer;
