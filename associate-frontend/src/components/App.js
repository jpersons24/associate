import Dashboard from './Dashboard';
import Directory from './Directory';
import '../App.css';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);
	console.log("USER:", user);
  const [appTarget, setAppTarget] = useState("");
	const [netTarget, setNetTarget] = useState("");

  // use effect to get single user
  // set user in state
  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data => {
      setUser(data)
      setAppTarget(data.plan.app_target)
      setNetTarget(data.plan.net_target)
    })
  }, [])

  return (
		<div className="App">
			<div className="navbar">
				{user ? <h1>{user.name}'s Associate</h1> : <h1>Associate</h1>}
				{/* <div className="menu"></div> */}
			</div>
			<div className="grid-container">
				<div className="column">
					<Dashboard
						user={user}
						appTarget={appTarget}
						netTarget={netTarget}
						setAppTarget={setAppTarget}
						setNetTarget={setNetTarget}
					/>
				</div>
				<div className="column">
					<Directory />
				</div>
			</div>
		</div>
	);
}

export default App;
