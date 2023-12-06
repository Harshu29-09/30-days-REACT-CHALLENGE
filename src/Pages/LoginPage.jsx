import React, { useState } from 'react';

const LoginPage = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    
    if (username === 'Harsh' && password === 'JAYSHREESHYAM') {
      setLoggedIn(true);
      setUsername('');
      setPassword('');
    } else {
      alert('Invalid username or password. Please try again.');
    }
  };

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      {isLoggedIn ? (
        <div>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h2>Login Page</h2>
          <label>
            Username:
            <input type="text" value={username}
            placeholder="enter - Harsh"
             onChange={(e) => setUsername(e.target.value)} />
          </label>
          <br />
          <label>
            Password:
            <input type="password" value={password}
            placeholder="enter - JAYSHREESHYAM"
             onChange={(e) => setPassword(e.target.value)} />
          </label>
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
};

export default LoginPage;