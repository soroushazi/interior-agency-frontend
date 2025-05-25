import React, { useState, useEffect } from 'react';
import authService from '../../services/authService'; // We will create this service soon

const Profile = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState('');
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      authService.getProfile(token)
        .then((response) => {
          setUser(response.data);
          setFullName(response.data.full_name);
          setPhoneNumber(response.data.phone_number);
        })
        .catch(() => setError('Failed to fetch profile.'));
    }
  }, []);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');

    try {
      await authService.updateProfile(token, { full_name: fullName, phone_number: phoneNumber });
      setUser({ ...user, full_name: fullName, phone_number: phoneNumber });
      alert('Profile updated successfully');
    } catch {
      setError('Failed to update profile.');
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h2>Profile</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <h3>Welcome, {user.full_name}</h3>
        <p>Email: {user.email}</p>
        <p>Phone Number: {user.phone_number}</p>
        <form onSubmit={handleUpdateProfile}>
          <div>
            <label>Full Name:</label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>
          <div>
            <label>Phone Number:</label>
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
          <button type="submit">Update Profile</button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
