import React from 'react';
import Data from './Data';
import ResourceCard from './ResourceCard';

const ResourceContainer = () => {
  return (
		<div className="resource">
			<h4>resource container</h4>
			<div className="grid-container">
				<div className="data-column">
					<Data />
				</div>
				<div className="resource-column">
					<ResourceCard />
				</div>
			</div>
		</div>
	);
}

export default ResourceContainer;
