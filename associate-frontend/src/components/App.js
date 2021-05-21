import Dashboard from './Dashboard';
import Directory from './Directory';
import '../App.css';
import { useEffect, useState } from 'react';

function App() {

  const [user, setUser] = useState(null);

  // use effect to get single user
  // set user in state
  useEffect(() => {
    fetch("http://localhost:3001/users")
    .then(res => res.json())
    .then(data => {
      setUser(data)
    })
  }, [])

  return (
    <div className="App">
      <div className="navbar">
        {user ? <h1>{user.name}'s Associate</h1> : <h1>Associate</h1>}
      </div>
      <div className="grid-container">
        <div className="column">
          <Dashboard />
        </div>
        <div className="column">
          <Directory />
        </div>
      </div>
    </div>
  );
}

export default App;
