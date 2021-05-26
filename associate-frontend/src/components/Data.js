import React, { useState } from 'react'

const Data = ({ user, appTarget, netTarget }) => {
	console.log(user)
	const [formData, setFormData] = useState({
		current_app: 0,
		current_net: 0,
	})
	const [currApp, setCurrApp] = useState(0)
	const [currNet, setCurrNet] = useState(0)

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log(formData)
	}

	function handleSubmit(e) {
		e.preventDefault()

		// create 'plan' object to send with body of fetch
		const plan = {
			app_target: user.plan.app_target,
			net_target: user.plan.net_target,
			current_app: formData.current_app,
			current_net: formData.current_net,
			user_id: user.id,
		}

		// /PATCH /plans
		fetch(`http://localhost:3001/plans/${user.plan.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(plan)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			setCurrApp(data.current_app)
			setCurrNet(data.current_net)
		})

		// set current app and net in state
	}

  return (
		<div className="data">
			<h5>Weekly Targets</h5>
			<div className="target-container">
				<div className="data-container">
					<p>
						<em>App Target: </em>
						{!user ? null : <strong>{appTarget}</strong>}
					</p>
					<p>
						<em>Current Apps: </em>
						{!user ? null : <strong>{currApp}</strong>}
					</p>
					<p>
						<em>Networking Target: </em>
						{!user ? null : <strong>{netTarget}</strong>}
					</p>
					<p>
						<em>Current Networking: </em>
						{!user ? null : <strong>{currNet}</strong>}
					</p>
				</div>
				<div className="data-form">
					<form onSubmit={handleSubmit}>
						<label>
							<em>Add Applications</em>
						</label>
						<input 
							className="num-input" 
							type="number" 
							name="current_app" 
							value={formData.current_app}
							onChange={handleChange}
						/>
						<label>
							<em>Add Networking</em>
						</label>
						<input 
							className="num-input" 
							type="number" 
							name="current_net" 
							value={formData.current_net}
							onChange={handleChange}
						/>
						<br></br>
						<input type="submit" className="add" value="Add" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Data;
