import React, { useState } from 'react'

const Reflection = () => {

  const [formData, setFormData] = useState({
		reflection: "",
		date: "",
	});

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
		console.log(formData)
	}

	function handleSubmit(e) {
		e.preventDefault();
	}


  return (
		<div className="reflection">
			<div className="reflection-form">
				<h5>Weekly Reflection</h5>
				<form onSubmit={handleSubmit}>
					<label>Date:</label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
					/>
					<br></br>
					<input
						type="text"
						name="reflection"
						value={formData.reflection}
						onChange={handleChange}
					/>
					<br></br>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
}

export default Reflection;
