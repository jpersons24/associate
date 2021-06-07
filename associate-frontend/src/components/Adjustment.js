import React, { useState } from 'react'

const Adjustment = ({ user, setAppTarget, setNetTarget, setCurrApp, setCurrNet }) => {

  const [formData, setFormData] = useState({
    app_target: "",
    net_target: "",
  })

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    console.log(formData)
  }

  function handleSubmit(e) {
    e.preventDefault()

		// create new plan object to send
		const plan = {
			app_target: formData.app_target,
			net_target: formData.net_target,
			user_id: user.id,
		}

		// PATCH /plans/:id
		fetch(`http://localhost:3001/plans/${user.plan.id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(plan),
		})
			.then((res) => res.json())
			.then((plan) => {
				setAppTarget(plan.app_target)
				setNetTarget(plan.net_target)
			});

		// reset input fields
		setFormData({
			app_target: "",
			net_target: "",
		});

		// reset weekly target update fields
		setCurrApp("")
		setCurrNet("")
  }


  return (
		<div className="adjustment">
			<div className="adjustment-container">
				<h5>Adjustments</h5>
				<form className="form" onSubmit={handleSubmit}>
					<div>
						<label>Application Target:</label>
						<input
							className="num-input"
							type="number"
							name="app_target"
							value={formData.app_target}
							onChange={handleChange}
						/>
					</div>
					<br></br>
					<div>
						<label>Networking Target:</label>
						<input
							className="num-input"
							type="number"
							name="net_target"
							value={formData.net_target}
							onChange={handleChange}
						/>
					</div>
					<br></br>
					<input className="submit" type="submit" />
				</form>
			</div>
		</div>
	);
}

export default Adjustment;
