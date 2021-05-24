import React, { useState } from 'react';

const Assessment = ({ user }) => {

  const [formData, setFormData] = useState({
    date: "",
    body: "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()

		// create new assessment object
		const assessment = {
			body: formData.body,
			date: formData.date,
			plan_id: user.plan.id
		}
		
		// POST /assessments
		fetch("http://localhost:3001/assessments", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(assessment),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				// what to do with reflections after they are submitted
			});

		// reset input fields
		setFormData({
			body: "",
			date: ""
		})
  }

  return (
		<div className="assessment">
			<div className="assessment-container">
				<h5>Weekly Assessment</h5>
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

export default Assessment;
