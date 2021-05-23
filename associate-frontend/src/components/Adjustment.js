import React, { useState } from 'react'

const Adjustment = () => {

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
