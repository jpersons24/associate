import React, { useState } from 'react'

const Data = ({ user, appTarget, netTarget }) => {

	const [formData, setFormData] = useState({
		current_app: "",
		current_net: "",
	})

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value })
		console.log(formData)
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
						{!user ? null : <strong>{appTarget}</strong>}
					</p>
					<p>
						<em>Networking Target: </em>
						{!user ? null : <strong>{netTarget}</strong>}
					</p>
					<p>
						<em>Current Networking: </em>
						{!user ? null : <strong>{appTarget}</strong>}
					</p>
				</div>
				<div className="data-form">
					<form>
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
						<input type="submit" className="submit" />
					</form>
				</div>
			</div>
		</div>
	);
}

export default Data;
