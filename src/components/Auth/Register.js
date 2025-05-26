import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate instead of useHistory
import './Register.css';  // Import the CSS file
import authService from '../../services/authService';  // Ensure the path is correct

const Register = () => {
  const navigate = useNavigate();  // Use useNavigate instead of useHistory
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await authService.register(email, password, fullName, phoneNumber);
      navigate('/login');  // Use navigate instead of history.push
    } catch (err) {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <div className="register-container">
      <div className="register-card">
        <div className="register-header">
          <h2>Register</h2>
        </div>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleRegister}>
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
          <div className="input-group">
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
          </div>
          <div className="input-group">
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="register-btn">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
