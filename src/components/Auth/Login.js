import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';  // Import the CSS file
import authService from '../../services/authService';  // Ensure the path is correct

const Login = () => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await authService.login(email, password);  // Ensure login method exists in authService
      navigate('/dashboard');  // Redirect to dashboard after successful login
    } catch (err) {
      setError('Login failed. Please try again.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <h2>Login</h2>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="input-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
