import React, { useState } from 'react'

const Reflection = ({ user }) => {

  const [formData, setFormData] = useState({
		body: "",
		date: "",
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log(formData)
	}

	function handleSubmit(e) {
		e.preventDefault();

		// create new reflection object
		const reflection = {
			body: formData.body,
			date: formData.date,
			plan_id: user.plan.id,
		}

		console.log(reflection)

		// POST /reflections
		fetch("http://localhost:3001/reflections", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(reflection)
		})
		.then(res => res.json())
		.then(data => {
			console.log(data)
			// what to do with reflections after they are submitted
		})

		// reset input fields
		setFormData({
			body: "",
			date: ""
		})
	}


  return (
		<div className="reflection">
			<div className="reflection-container">
				<h5>Weekly Reflection</h5>
				<form className="form" onSubmit={handleSubmit}>
					<input
						className="input"
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
					/>
					<br></br>
					<textarea
						className="input-box"
						type="text"
						name="body"
						value={formData.body}
						onChange={handleChange}
					/>
					<br></br>
					<input className="submit" type="submit" />
				</form>
			</div>
		</div>
	);
}

export default Reflection;
