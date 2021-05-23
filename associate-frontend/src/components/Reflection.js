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
					<input
						className="input-box"
						type="text"
						name="reflection"
						value={formData.reflection}
						onChange={handleChange}
					/>
					<br></br>
					<input className="input" type="submit" />
				</form>
			</div>
		</div>
	);
}

export default Reflection;
