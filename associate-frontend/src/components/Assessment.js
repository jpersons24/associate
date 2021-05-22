import React, { useState } from 'react'

const Assessment = () => {

	const [formData, setFormData] = useState({
		reflection: "",
		date: ""
	})
	console.log(formData)

	function reflectionChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value})
	}


  return (
		<div className="assessment">
			<h4>Assessment Center</h4>
			<ul>
				<li>Reflection</li>
				<li>Assess</li>
				<li>Adjustments</li>
				<li>Actions</li>
			</ul>
			<div className="form-container">
				<form className="reflection-form">
					<label>Date</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={reflectionChange}
					/>
					<label>Weekly Reflection: </label>
					<input
						type="text"
						name="reflection"
						value={formData.reflection}
						onChange={reflectionChange}
					/>
					<input type="submit" />
				</form>
				<p>Assessment form will go here</p>
			</div>
		</div>
	);
}

export default Assessment;
