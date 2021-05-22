import React, { useState } from 'react';

const Assessment = () => {

  const [formData, setFormData] = useState({
    date: "",
    assessment: "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value})
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
		<div className="assessment">
			<div className="assessment-form">
				<h5>Weekly Assessment</h5>
				<form onSubmit={handleSubmit}>
					<label>Date: </label>
					<input
						type="date"
						name="date"
						value={formData.date}
						onChange={handleChange}
					/>
					<br></br>
					<input
						type="text"
						name="assessment"
						value={formData.assessment}
						onChange={handleChange}
					/>
					<br></br>
					<input type="submit" />
				</form>
			</div>
		</div>
	);
}

export default Assessment;
