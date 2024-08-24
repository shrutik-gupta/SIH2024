import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './SignIn.css'; // Import the CSS file

const SignIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/signin', {
        username,
        password,
      });

      setMessage(response.data.message);

      if (response.data.user) {
        localStorage.setItem('authToken', response.data.token); // Store token
        navigate('/items'); // Redirect to /items
      }
    } catch (error) {
      setMessage(error.response?.data?.message || 'Error signing in');
    }
  };

  return (
    <div className="sign-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            placeholder="ex. Vimal Kumar"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            placeholder="........"
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Sign In</button>
        <a id="sign-up" href="#">Don't have an account? Sign up</a>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default SignIn;
