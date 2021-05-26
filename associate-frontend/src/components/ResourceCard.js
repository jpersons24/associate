import React from 'react'
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const ResourceCard = ({ user }) => {

  return (
		<div className="resource-card">
			<h5>Resource Card</h5>
			{!user ? null : (
				<ButtonGroup vertical>
					<ul className="list">
						<li>
							<Button
								variant="outline-danger"
								size="sm"
								href="https://mail.google.com/mail/u/2/#inbox">
								Gmail
							</Button>
						</li>
						<li>
							<Button variant="outline-danger" size="sm" href={user.github}>
								Github
							</Button>
						</li>
						<li>
							<Button variant="outline-danger" size="sm" href={user.linkedin}>
								LinkedIn
							</Button>
						</li>
						<li>
							<Button variant="outline-danger" size="sm" href={user.website}>
								Portfolio Website
							</Button>
						</li>
					</ul>
				</ButtonGroup>
			)}
		</div>
	);
}

export default ResourceCard;
